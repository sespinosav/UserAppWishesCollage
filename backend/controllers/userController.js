const User = require('../models/User');

const addUser = async(req,res) => {
  try {
    const {
      name,
      commune,
      wish,
      imgUrl
    } = req.body;

    const user = User({
      name,
      commune,
      wish,
      imgUrl
    });
    
    if(req.file) {
      const { filename } = req.file;
      user.setImgUrl(filename);
    }

    const userStored = await user.save();
    
    res.status(201).send({ userStored });
  } catch(e){
    res.status(500).send({ message: e.message});
  }
};
 
const getUsers = async(req, res) => {
  const users = await User.find().lean().exec();
  res.status(200).send({ users })
}

module.exports = { addUser, getUsers };
