var express = require('express');
const upload = require('../services/upload');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/image-upload', upload.single('file'), (req, res) => {
    res.status(200).json({ 'success': true });
});

module.exports = router;
