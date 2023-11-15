const multer = require('multer');
const express = require('express');
const app = express();

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,'assets');
    },
    filename: (req, file, cb) => {
        const kataPertama = file.originalname;
        const kataKedua = Date.now();
        cb(null,kataPertama+kataKedua)
    }
});

const fileFilter = (req, file, next) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg') {
      next(null, true);
    } else {
      next(new Error('File harus bertipe png, jpeg, atau jpg'), false);
    }
  };
  
  const uploadFile = multer({
    storage: fileStorage,
    fileFilter: fileFilter,
  }).single('image');
  
  module.exports = uploadFile;
