const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors())
app.use('/assets',express.static('assets')); 

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post('/sendWhatsAppMessage', async (req, res) => {
    try {
      const response = await axios.post(
        'https://api.whatsapp.com/send',
        {
          phone: '6288210335073',
          text: 'Hello, this is a test message!',
        }
      );
  
      res.json(response.data);
    } catch (error) {
      console.error('Error sending WhatsApp message:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// database connection
mongoose.connect('mongodb+srv://ahlilfikri49:ahlilfikri49@cluster1.vlt2t0t.mongodb.net/?retryWrites=true&w=majority')
// database connection

// routesuters/user');
const chooseUsRouter = require('./routers/chooseUs')
const partnerRouter = require('./routers/partner')
const produkBundlingRouter = require('./routers/produkBundling')
const produkTerlarisRouter = require('./routers/produkterlaris')
const produkUnggulanRouter = require('./routers/produkUnggulan')
const tentangKamiRouter = require('./routers/tentangKami')

// use routes
app.use('/chooseUs', chooseUsRouter)
app.use('/partner', partnerRouter)
app.use('/produkBundling',produkBundlingRouter)
app.use('/produkTerlaris', produkTerlarisRouter)
app.use('/produkUnggulan', produkUnggulanRouter)
app.use('/tentangKami', tentangKamiRouter)

// use routes

app.listen(2700,  () => {
    console.log(`Server dimulai pada server ${2700}`);
});
