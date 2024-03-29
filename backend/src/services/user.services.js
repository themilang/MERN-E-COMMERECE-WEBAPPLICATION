const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwtProvider = require("../config/jwtProvider");


const createUser = async (userData) => {
  try {
    let { firstName, lastName, email, password } = userData; //distucturing name email....

    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      throw new Error("User already exist with email:", email);
    }

    password = await bcrypt.hash(password, 8);

    const user = User.create({ firstName, lastName, email, password });
  } catch (error) {
    throw new Error(error.message);
  }
};

const findUserbyID = async (userID) => {
  try {
    const user = User.findById(userID).populate("address");
    if (!user) {
      throw new Error("User not found of ID : ", userID);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserbyemail = async (email) => {
  try {
    const user = User.findone(email);
    if (!user) {
      throw new Error("User not found of email : ", email);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};



const getUserByJWT = async (token) => {
  try {
    const userID = jwtProvider.getuserIdbyJWT(token);
    
    const user= await findUserbyID(userID);
   


    if (!user) {
      throw new Error("User not found of token : ", token);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getallUser=async()=>{

try {
  const users=User.find();
  return users;

} catch (error) {
  throw new Error(error.message)
  
}  

}

module.exports = { createUser, findUserbyID, getUserbyemail, getUserByJWT ,getallUser};
