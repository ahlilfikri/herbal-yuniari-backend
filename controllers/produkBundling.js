const mongoose = require('mongoose');
const produkBundlingModel = require('../models/produkBundling');
const response = require('../response/respons');
const upload = require('../midleware/file');
const multer = require('multer');

module.exports = {
  get: async (req, res) => {
    try {
      const content = await produkBundlingModel.find();
      response(200, content, 'menampilkan semua data', res);
    } catch (err) {
      response(500, err, 'internal server error \n gagal menampilkan data', res);
    }
  },
  getSingle: async (req, res) => {
    id = req.params.id
    try {
      const content = await produkBundlingModel.findOne({_id:id});
      response(200, content, 'menampilkan semua content', res);
    } catch (err) {
      response(500, err, 'internal server error \n gagal menampilkan data', res);
    }
  },
  post: async (req, res) => {
    upload(req, res, async (error) => {
      if (error instanceof multer.MulterError) {
        response(500, error, 'internal server error \n gagal menambahkan gambar 1', res);
      } else if (error) {
        response(500, error, 'internal server error \n gagal menambahkan gambar 2', res);
      } else {
        try {
          const { title, content } = req.body;
          const image = req.file.filename;

          // Split content into an array of strings based on newline character
          const contentArray = content.split('\n');

          console.log("ini image", image);

          const newProdukBundling = new produkBundlingModel({
            title,
            content: contentArray,
            image,
          });

          await newProdukBundling.save();
          response(201, newProdukBundling, 'data berhasil di tambahkan', res);
        } catch (error) {
          console.log("error", error.message, error);
          response(500, error, 'internal server error \n gagal menambahkan data', res);
        }
      }
    });
  },
  put: async (req, res) => {
    const id = req.params._id;
    upload(req, res, async (error) => {
      if (error instanceof multer.MulterError) {
        response(500, error, 'internal server error \n gagal menambahkan gambar 1 ', res);
      } else if (error) {
        response(500, error, 'internal server error \n gagal menambahkan gambar 2', res);
      } else {
        try {
          const { title, content } = req.body;
          let update = { title, content };

          const contentArray = content.split('\n');

          if (req.file) {
              update = {
                title,
                content : contentArray,
                image: req.file.filename 
              };
          } 

          const updatedProdukBundling = await produkBundlingModel.findByIdAndUpdate(
            id,
            update,
            { new: true }
          );
          response(200, updatedProdukBundling, 'data berhasil diperbarui', res);
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
      const result = await produkBundlingModel.findByIdAndDelete(id);
      response(200, result, 'data berhasil di hapus', res);
    } catch (error) {
      response(500, error, 'internal server error \n gagal menghapus data', res);
    }
  },
};
