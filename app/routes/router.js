var express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/index');
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
    
router.get('/denuncias', (req, res) => {
    res.render('pages/denuncias');
      });

router.get('/feed', (req, res) => {
    res.render('pages/feed');
      } );

module.exports = router;