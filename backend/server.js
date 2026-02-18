const express = require('express');
const cors = require('cors');
const app = express();
const nodemailer = require('nodemailer');
require('dotenv')
  .config();

app.use(cors());
app.use(express.json()); // Ajout du middleware pour lire les données JSON du corps de la requête

const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 465,
  secure: true,
  logger: true,
  debug: true,
  secureConnection: false,
  auth: {
    user: 'grischka.gorski@gmail.com',
    pass: process.env.MAIL_PASSWORD
  },
  tls: {
    rejectUnauthorized: true
  }
});

app.get('/', (req,
              res) => {
  res.send('Bienvenue sur mon site !');
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Définition de la route pour le formulaire de contact
app.post('/contact', (req,
                      res) => {
  const {name, email, message} = req.body;
  console.log(name, email, message)
  if (validateEmail(email)) {
    const mailOptions = {
      from: 'frenchmancarpentry@gmail.com',
      to: 'grischka.gorski@gmail.com',
      subject: 'Nouveau message',
      text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error,
                                       info) => {
      if (error) {
        console.error(error);
        res.status(500)
          .send('Une erreur est survenue lors de l\'envoi de l\'e-mail');
      } else {
        console.log('E-mail envoyé :', info.response);
        res.send('Formulaire de contact soumis avec succès');
      }
    });

    const response = {
      message: 'Formulaire de contact soumis avec succès'
    };

    // Renvoyer la réponse au format JSON
    res.json(response);
  }
});

// Démarrer le serveur
app.listen(3000, () => {
  console.log('Serveur en cours d\'exécution sur le port 3000');
});