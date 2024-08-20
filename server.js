// server.js
const express = require('express');
const app = express();
require('dotenv').config(); // .envファイルからLIFF IDを読み込む

app.use(express.static('public')); // publicフォルダ内のファイルを提供

app.get('/liff-id', (req, res) => {
  res.json({ liffId: process.env.LIFF_ID }); // LIFF IDをJSONで返す
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
