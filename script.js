// untuk mengubah isi html
// document.getElementById("judul-materi").innerHTML = "BELAJAR JAVA SCRIPT";

// belajar java script dasar fundamental
// 1. Variabel, merupakan tempat menampung sebuah nilai. Untuk membuat sebuah variabel kita menggunakan 3 keyword yaitu let dan var

let kata_pertama = "Hello";
let kata_kedua = "World";
let kata_gabungan = kata_pertama + " " + kata_kedua;

// 2. Konstanta merupakan tempat menampung sebuah nilai, namun nilai yang telah didefinisikan, tidak bisa diubah lagi
const angka1 = 10;
const angka2 = 20;

// const angka1 tidak bisa ditampilkan karena sudah terdaftar dengan nilai 10
// angka1 = angka1 + angka2; script ini akan menampilkan error jika dijalankan

// namun const angka3 bisa ditampilkan karena sebelumnya nilainya belum ditentukan
const angka3 = angka1 + angka2;

// melakukan operasi menambahkan angka1 + angka2 lalu menampung hasilnya kembali ke konstanta angka1
console.log(angka1);

document.write("<p>" + angka1 + "</p>");

// menampilkan hasil di console browser "F12"
console.log(kata_gabungan);
// menampilkan hasil variabel (dikutip dalam tag paragraf dan harus disambung concatenate "+")
document.write("<p>" + kata_gabungan + "</p>");

// 3. Penyeleksian kondisi
// Penyeleksian kondisi adalah suatu kondisi yang memiliki logical test dimana hasil kondisinya berupa true atau false. Untuk membuat penyelesaian kondisi terdapat 3 cara, yaitu:
// i. if else
// ii. ternary
// iii. switch
// ada beberapa operator perbandingan yang digunakan untuk mengecek kondisi yaitu <, >, ==, <=, >=, !=
//
// terdapat beberapa kombinasi untuk menyeleksi sebuah kondisi diantaranya:
// 1. !
// 2. || (or) hanya bernilai false jika keduanya false, selain itu kondisi akan bernilai true
// 3. && (and) kondisi hanya bernilai true jika keduanya true, selain itu kondisi akan bernilai false

// cara ke 1, (menggunakan if else). Merupakan suatu fungsi/printah penyeleksian kondisi yang ditulis dalam kurung kurawal atau block

if (true) {
  console.log("Salam"); //perintah ini akan dijalankan karena bernilai true
}
if (false || false) {
  console.log("Hallo"); //perintah ini tidak bisa dijalankan karena keduanya false
}
if (true && true) {
  console.log("Hei"); //perintah ini akan dijalankan karena kedua kondisi true
}

// contoh kasus 1
let nama = "Zaky";
let nilai_mtk = "A";

// membandingkan nilai
// membuat if yang berdiri sendiri
// if (nilai_mtk < 75) {
//   console.log("nilai anda remedial");
// }

// membuat if yang satu kesatuan
if (nilai_mtk < 75) {
  console.log("Maaf anda tidak lulus");
} else if (nilai_mtk == 75) {
  console.log("wah hampir saja, nilai anda standar");
} else if (nilai_mtk > 75 && nilai_mtk < 85) {
  console.log(
    "Selamat anda lulus dengan nilai lumayan yaitu nilai anda berada diantara 76- 84"
  );
} else if (nilai_mtk >= 85) {
  console.log("Selamat anda lulus dengan nilai yang sangat memuaskan");
} else if (nilai_mtk == 100) {
  console.log("Selamat anda mendapatkan nilai 100");
} else {
  console.log("Maaf nilai anda tidak valid");
}

// membuat if yang bercabang

// kasus 2 membandingkan nilai kimia yang bercabang
console.log("kasus 2: ");
let nilai_kim = 60;

if (nilai_kim > 85) {
  if (nama == "Zaky") {
    console.log(
      "Selamat " + nama + " Anda dinyatakan lulus dengan nilai " + nilai_kim
    );
  }
} else {
  console.log("nilai anda belum masuk kategori yang di inginkan");
}

// Cara ke 2, menggunakan Ternary. Ternary adalah salah satu perintah penyeleksian kondisi yang dituliskan dengan inline

console.log("Kasus 1 ");
console.log("Ternary");
let nama_peserta = "zaky";
let nilai_peserta = 100;
// struktur ternary ==> variabel=(logical test) ? "value true":"value false";
let hasil =
  nilai_peserta == 100
    ? "Nilai Sempurna"
    : nilai_peserta >= 90
    ? "Nilai Bagus"
    : "Nilai anda kurang bagus";

document.write(hasil);
document.write("<br>");

// Cara ke 3, menggunakan Switch. adalah salah satu perintah untuk penyeleksisan kondisi yang dikhususkan untuk mengecek data yang bersifat case/kasus.
/* Struktur Switch ==> 

switch(variabel yg mau di cek){
    case 1:
      mau tampilin apa
      break;
    case 2:
      mau tampilin apa
      break;
}  
*/

console.log("switch");
switch (nilai_peserta) {
  case 100:
    document.write("Nilai Sempuran");
    break;
  case 75:
    document.write("Hampir tidak lusus");
    break;
  default:
    document.write("Nilai anda dipertanyakan");
    break;
}
document.write("<br>");
