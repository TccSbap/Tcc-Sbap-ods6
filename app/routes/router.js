var express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('pages/index');
});

router.get("/Info-Ongs", (req, res) => {
    res.render('pages/Info-Ongs');
  });

  router.get("/Login", (req, res) => {
    res.render('pages/Login');
  });

  router.get("/Ongs", (req, res) => {
    res.render('pages/Ongs');
  });

    router.get('/barracoes', (req, res) => {
    res.render('pages/barracoes');
    });

    router.get('/noticia', (req, res) => {
      res.render('pages/noticia');
      });
    

module.exports = router;