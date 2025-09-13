const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const SalaisuudetSchema = new mongoose.Schema({
  secretText: String
}, { collection: 'Salaisuudet' });

const Salaisuudet = mongoose.model('Salaisuudet', SalaisuudetSchema);

app.get('/', (req, res) => res.send('Backend toimii!'));

app.post('/login', async (req, res) => {
  const { password } = req.body;
  
  if (password === process.env.SECRET_PASSWORD) {
    try {
      const content = await Salaisuudet.findOne();
      if (!content) return res.status(404).json({ success: false, message: 'Sisältöä ei löytynyt' });

      res.json({ success: true, content });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Sisällön hakeminen epäonnistui' });
    }
  } else {
    res.status(401).json({ success: false, message: 'Väärä salasana' });
  }
});

const PORT = process.env.PORT || 5042;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
