const mongoose = require('mongoose');
const { appConfig } = require('../config');

const Schema = mongoose.Schema;

const UserSchema = Schema({
    name: String,
    commune: Number,
    wish: String,
    imgUrl: String,
  },
  {
    //for dates of create and upate
    timestamps: true
  }
);

UserSchema.methods.setImgUrl = function setImgUrl(fileName) {
  const { host, port } = appConfig;
  this.imgUrl = `${host}:${port}/public/${fileName}`;
}

module.exports = mongoose.model('User', UserSchema);
