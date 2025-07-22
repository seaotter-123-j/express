const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/', (req, res) => {
  const qrUrl = 'https://quickchart.io/qr?text=Example';

  request({ url: qrUrl, encoding: null }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      res.setHeader('Content-Type', 'image/png');
      res.send(body); // QRコード画像をそのまま返す
    } else {
      res.status(500).send('QRコードの取得に失敗しました');
    }
  });
});

module.exports = router;