const mongoose = require('mongoose');
const produkTerlarisModel = require('../models/produkTerlaris')
const response = require('../response/respons');
const upload = require('../midleware/file');
const multer = require('multer');

module.exports = {
  get: async (req, res) => {
    try {
      const content = await produkTerlarisModel.find();
      response(200, content, 'menampilkan semua data', res);
    } catch (err) {
      response(500, err, 'internal server error \n gagal menampilkan data', res);
    }
  },
  getSingle: async (req, res) => {
    id = req.params.id
    try {
      const content = await produkTerlarisModel.findOne({_id:id});
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

          const newProdukTerlaris = new produkTerlarisModel({
            title,
            image,
          });
          await newProdukTerlaris.save();
          response(201, newProdukTerlaris, 'data berhasil di tambahkan', res);
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

          const updatedProdukTerlaris = await produkTerlarisModel.findByIdAndUpdate(
            id,
            update,
            { new: true }
          );
          response(200, updatedProdukTerlaris, 'data berhasil diperbarui', res);
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
      const result = await produkTerlarisModel.findByIdAndDelete(id);
      response(200, result, 'data berhasil di hapus', res);
    } catch (error) {
      response(500, error, 'internal server error \n gagal menghapus data', res);
    }
  },
};
