const express = require('express'); // membuat variabel baru dengan nama express
const app = express(); // membuat variabel bare dengan nama app yang isinya varibel express
const port = 8000; // membuat variabel dengan nama port yang isinya 3000

//membuat route baru dengan method GET yang isinya kalimat hao dek
// app.get('/', (req, res) => {
//   res.send('halo dek');
// });

const bodyPs = require('body-parser');
app.use(bodyPs.urlencoded({ extended: false }));
app.use(bodyPs.json());

//import route post
const mhsRouter = require('./routes/mahasiswa');
app.use('/api/mhs', mhsRouter);

//kita listen Express.js kedalam port yang kita buat diatas
app.listen(port, () => {
  //dan kita tampilkan log sebagai penanda bahwa Express.js berhasil dijalankan
  console.log('aplikasi berjalan di http:://localhost:${port}');
});
