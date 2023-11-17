const mongoose = require('mongoose');
const tentangKamiModel = require('../models/tentangKami');
const response = require('../response/respons');

module.exports = {
  get: async (req, res) => {
    try {
      const content = await tentangKamiModel.find();
      response(200, content, 'menampilkan semua data', res);
    } catch (err) {
      response(500, err, 'internal server error \n gagal menampilkan data', res);
    }
  },
  getSingle: async (req, res) => {
    id = req.params.id
    try {
      const content = await tentangKamiModel.findOne({_id:id});
      response(200, content, 'menampilkan semua data', res);
    } catch (err) {
      response(500, err, 'internal server error \n gagal menampilkan data', res);
    }
  },
  post: async (req, res) => {
    try {
        const { visi, misi, tentang} = req.body;

        const misiArray = misi.split('\n');
        const newAbout = new tentangKamiModel({
        visi,
        misi : misiArray,
        tentang,
        });
        await newAbout.save();
        response(201, newAbout, 'data berhasil di tambahkan', res);
    } catch (error) {
        console.log("error",error.message,error);
        response(500, error, 'internal server error \n gagal menambahkan data', res);
    }
  },
  put: async (req, res) => {
    const id = req.params._id;
    try {
        const { visi, misi, tentang } = req.body;
        const misiArray = misi.split('\n');
        let update = { visi : visi, misi : misiArray, tentang : tentang };
        
        const updatedAbout = await tentangKamiModel.findByIdAndUpdate( id, update, { new: true } );
        console.log(updatedAbout);
        response(200, updatedAbout, 'data berhasil diperbarui', res);
    } catch (error) {
        console.log(error.message)  
        response(500, error, 'internal server error \n gagal memperbarui data', res);
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params._id;
      const result = await tentangKamiModel.findByIdAndDelete(id);
      response(200, result, 'data berhasil di hapus', res);
    } catch (error) {
      response(500, error, 'internal server error \n gagal menghapus data', res);
    }
  },
};
