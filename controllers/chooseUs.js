const mongoose = require('mongoose');
const chooseUsModel = require('../models/chooseUs')
const response = require('../response/respons');
const upload = require('../midleware/file');
const multer = require('multer');

module.exports = {
  get: async (req, res) => {
    try {
      const content = await chooseUsModel.find();
      response(200, content, 'menampilkan semua data', res);
    } catch (err) {
      response(500, err, 'internal server error \n gagal menampilkan data', res);
    }
  },
  getSingle: async (req, res) => {
    id = req.params.id
    try {
      const content = await chooseUsModel.findOne({_id:id});
      response(200, content, 'menampilkan satu content', res);
    } catch (err) {
      response(500, err, 'internal server error \n gagal menampilkan data', res);
    }
  },
  post: async (req, res) => {
    upload(req, res, async (error) => {
      if (error instanceof multer.MulterError) {
        console.log(error.message);
        response(500, error, 'internal server error \n gagal menambahkan gambar 1`', res);
      } else if (error) {
        console.log(error.message);
        response(500, error, 'internal server error \n gagal menambahkan gambar 2', res);
      } else {
        console.log(req.file)
        try {
          const { title } = req.body;
          const image = req.file.filename;
          console.log("ini image",image);

          const newChooseUs = new chooseUsModel({
            title,
            image,
          });
          await newChooseUs.save();
          response(201, newChooseUs, 'data berhasil di tambahkan', res);
        } catch (error) {
          response(500, error, 'internal server error \n gagal menambahkan data', res);
        }
      }
    });
  },
  put: async (req, res) => {
    const id = req.params._id;
    upload(req, res, async (error) => {
      if (error instanceof multer.MulterError) {
        response(500, error, 'internal server error \n gagal menambahkan gambar 1', res);
      } else if (error) {
        response(500, error, 'internal server error \n gagal menambahkan gambar 2', res);
      } else {
        try {
          const { title } = req.body;
          let update = { title };;
          
          if (req.file) {
              update = {
                title,
                image: req.file.filename 
              };
          } 

          const updatedChooseUs = await chooseUsModel.findByIdAndUpdate(
            id,
            update,
            { new: true }
          );
          response(200, updatedChooseUs, 'data berhasil diperbarui', res);
        } catch (error) {
          console.log(error.message)  
          response(500, error, 'internal server error \n gagal memperbarui data', res);
        }
      }
    });
  },
  delete: async (req, res) => {
    try {
      const id = req.params._id;
      const result = await chooseUsModel.findByIdAndDelete(id);
      response(200, result, 'data berhasil di hapus', res);
    } catch (error) {
      response(500, error, 'internal server error \n gagal menghapus data', res);
    }
  },
};
