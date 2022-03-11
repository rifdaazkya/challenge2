//////////////  
//   NO.1   //
//////////////  

// Buatlah sebuah function dengan nama changeWord yang berfungsi untuk menggantikan sebuah kata didalam sebuah kalimat.

// selectedText => Kata yang terdapat pada sebuah kalimat dan merupakan kata yang akan diganti nantinya.
// changedText => Kata yang akan menjadi pengganti pada sebuah kalimat nantinya
// text => Sebuah kalimat
// ChangeWord  => nama function yang digunakan


function changeWord (selectText, changeText, text){
  let text1 =  text;
  let result = text.replace(selectText,changeText)
  return result;
}

const kalimat1 = 'Andini sangat mencintai kamu selamanya';
const kalimat2 = 'Gunung Bromo tak akan mampu menggambarkan besarnya cintaku padamu';


console.log(changeWord('mencintai','membenci', kalimat1)); // OUTPUT : Andini sangat membenci kamu selamanya
console.log(changeWord('Bromo','Semeru', kalimat2)); // OUTPUT : Gunung Semeru tak akan mampu menggambarkan besarnya cintaku padamu


//////////////  
//   NO.2   //
//////////////

// Buatlah sebuah function yang berfungsi mendeteksi apakah sebuah angka termasuk angka genap atau ganjil.
// givenNumber ⇒ angka yang akan dicheck oleh function
// checkTypeNumber ⇒ nama function yang digunakan


function checkTypeNumber(givenNumber){
  let types
  if(Number.isInteger(givenNumber)){
    if (givenNumber % 2 == 0){
    types = "GENAP"
      }else{
    types = "GANJIL"
      }
  }else if(typeof givenNumber === "undefined"){
      types = "ERROR: Bro where is the parameter?"
  }else{
      types = "ERROR : Invalid data type (data must be integer)"
   }
 
  return types;
}

console.log(checkTypeNumber(10)); // OUTPUT : GENAP
console.log(checkTypeNumber(3)); // OUTPUT : GANJIL
console.log(checkTypeNumber("3")); // OUTPUT : ERROR : Invalid data type (data must be integer)
console.log(checkTypeNumber({})); // OUTPUT : ERROR : Invalid data type (data must be integer)
console.log(checkTypeNumber([])); // OUTPUT : ERROR : Invalid data type (data must be integer)
console.log(checkTypeNumber()); // OUTPUT : ERROR: Bro where is the parameter?

//////////////  
//   NO.3   //
////////////// 

// Buatlah sebuah function yang berfungsi untuk melakukan pengecekan apakah alamat email yang diberikan sebagai parameter, adalah alamat email yang formatnya benar atau tidak.
// email ⇒ email yang akan dicek oleh function
// checkEmail ⇒ nama function yang digunakan

function checkEmail(email){
  let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   
   let result;
   if (email == undefined){
     return "ERROR: Where is the email?";
   }else if (typeof email == "string") {
     if (email.match(re)) {
         result = "VALID";
     }else {
         result = "INVALID";
       }
       return result;
     } else {
       return "ERROR: harusnya ada @ dan .";
     }
   }
 
 console.log(checkEmail('apranata@binar.co.id')); // OUTPUT : VALID
 console.log(checkEmail('apranata@binar.com')); // OUTPUT : VALID
 console.log(checkEmail('apranata@binar')); // OUTPUT : INVALID
 console.log(checkEmail('apranata')); // OUTPUT : 
 console.log(checkEmail(3322)); // OUTPUT : 
 console.log(checkEmail()); // OUTPUT : 
 
 



//////////////  
//   NO.4   //
////////////// 

// Buatlah sebuah function yang berfungsi untuk melakukan pengecekan apakah password yang diberikan sebagai parameter memenuhi kreteria yang telah ditentukan atau tidak.
// isValidPassword ⇒ nama function yang digunakan
// givenPassword ⇒ Password berupa string dan akan dicek oleh function tersebut.

function isValidPassword(givenPassword) {

    /* Pemberian regex untuk penggunaan minimal 1 huruf kecil: (?=.*[a-z]) */
    let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    let result;
    if (givenPassword == null) {
      return "ERROR: Where is the password?";
    } else if (typeof givenPassword == "string") {
      if (givenPassword.match(re)) {
        result = true;
      } else {
        result = "false";
      }
      return result;
    } else {
      return "ERROR: Invalid data type (password must be string)";
    }
  }

 
  console.log(isValidPassword("Meong2021")); // OUTPUT : true (karena memenuhi requirement, Meong2021 terdiri dari 8 huruf, ada huruf besar ada huruf kecil, dan ada angka )
  console.log(isValidPassword("meong2021")); // OUTPUT : false (karena meong2021 tidak ada huruf besar)
  console.log(isValidPassword("@eong")); // OUTPUT : false (karena @eong tidak ada angka dan terdiri hanya 5 huruf)
  console.log(isValidPassword("Meong2")); // OUTPUT : false (karena Meong2 hanya 6 huruf)
  console.log(isValidPassword(0)); // OUTPUT : ERROR: Invalid data type (password must be string)
  console.log(isValidPassword()); // OUTPUT : ERROR: Invalid data type (password must be string)

  //////////////  
//   NO.5   //
////////////// 

// Buatlah sebuah function yang berfungsi untuk membagikan sebuah nama menjadi Nama Depan, Nama Tengah, Nama Belakang. 
// Function ini nantinya akan menerima satu parameter yang berisi nama lengkap seseorang. Apabila nama lengkap dari seseorang tersebut lebih dari 3 suku kata, maka function tersebut harus menghasilkan sebuah error.
// Tapi apabila parameter yang diberikan valid (tidak lebih dari 3 suku kata), maka function ini akan menghasilkan sebuah object dengan properti firstName, middleName, lastName.


function getSplitName(personName) {
  const name = personName.split(" ");
  const lengthName = name.length;

  switch (lengthName) {
    case 1:
      return {
        firstName: name[0],
        middleName: null,
        lastName: null,
      };
    case 2:
      return {
        firstName: name[0],
        middleName: null,
        lastName: name[1],
      };
    case 3:
      return {
        firstName: name[0],
        middleName: name[1],
        lastName: name[2],
      };
      
    default:
      return "ERROR : This function is only for 3 characters name";
  }
}

console.log(getSplitName("Aldi Daniela Pranata")); // OUTPUT : {"firstName":Aldi, "middleName":Daniela, "lastName":Pranata}
console.log(getSplitName("Dwi Kuncoro")); // OUTPUT : {"firstName":Dwi, "middleName": null , "lastName":Kuncoro}
console.log(getSplitName("Aurora")); // OUTPUT : {"firstName":Aurora, "middleName": null , "lastName": null }
console.log(getSplitName("Aurora Aureliya Sukma Darma")); //  OUTPUT : ERROR : This function is only for 3 characters name
console.log(getSplitName(0)); // OUTPUT : ERROR: Invalid data type (password must be string)



//////////////  
//   NO.6   //
//////////////  

// Buatlah sebuah function yang berfungsi untuk mendapatkan angka terbesar kedua dari sebuah array. 
// Misal diberikan sebuah array yang terdiri dari beberapa angka [2,3,5,6,6,4], berdasarkan data dari array tersebut dapat kita simpulkan bahwasanya angka terbesar dari array tersebut adalah 6, angka kedua terbesar adalah 5, dan angka ketiga terbesar adalah 4. 
// Maka dari itu function yang akan kamu buat ini akan me-return angka kedua terbesar pada array yang telah diberikan, yaitu angka 5.


// dataNumbers ⇒ Array yang berisi beberapa angka
// getAngkaTerbesarKedua ⇒ nama function yang digunakan

function getAngkaTerbesarKedua(personName){
  let max = -Infinity, result = -Infinity;

  if (Array.isArray(personName)){
      for (const value of personName) {
      const nr = Number(value)

      if (nr > max) {
        [result, max] = [max, nr]
      } else if (nr < max && nr > result) {
        result = nr;
      }
    }
  }else if(personName == null){
    result = "ERROR: Invalid data type (password must be string)"; 
  }else{
    result = "ERROR: Invalid data type (password must be string)";
  }
  
  return result;

}

const dataAngka = [9,4,7,7,4,3,2,2,8]

console.log(getAngkaTerbesarKedua(dataAngka)); // OUTPUT : 8 
console.log(getAngkaTerbesarKedua(0)); // OUTPUT : "ERROR: Invalid data type (password must be string)"
console.log(getAngkaTerbesarKedua()); // OUTPUT :  "ERROR: Invalid data type (password must be string)"

//////////////  
//   NO.7   //
//////////////  

// Buatlah sebuah function yang berfungsi membantu Pak Aldi untuk menghitung total seluruh sepatu yang terjual.

// dataPenjualan ⇒ Array yang berisi beberapa object, object terdiri dari properti yang memiliki informasi penjualan product.
// getTotalPenjualan ⇒ nama function yang digunakan

const dataPenjualanPakAldi = [
  {
      namaProduct : 'Sepatu Futsal Nike Vapor Academy 8',
      hargaSatuan : 760000,
      kategori :"Sepatu Sport",
      totalTerjual : 90,
  },
{
      namaProduct : 'Sepatu Warrior Tristan Black Brown High',
      hargaSatuan : 960000,
      kategori :"Sepatu Sneaker",
      totalTerjual : 37,
  },
{
      namaProduct : 'Sepatu Warrior Tristan Maroon High',
      kategori :"Sepatu Sneaker",
      hargaSatuan : 360000,
      totalTerjual : 90,
  },
{
      namaProduct : 'Sepatu Warrior Tristan Maroon High',
      hargaSatuan : 120000,
      kategori :"Sepatu Sneaker",
      totalTerjual : 90,
  },

]

function getTotalPenjualan(dataPenjualan){
  var sum = 0;
  for (var i = 0; i < dataPenjualan.length; i++) {
    sum += (dataPenjualan[i].totalTerjual)
  }
  return sum;
}

console.log(getTotalPenjualan(dataPenjualanPakAldi)); // OUTPUT : 307

//////////////  
//   NO.8   //
//////////////  

// Hari ini Toko buku milik Ibu Daniela berhasil menjual banyak sekali buku-buku novel. Gambar disamping adalah data penjualan buku-buku novel yang dijual di Toko buku milik
// Ibu Daniela, dalam format array of object. Tugas kamu adalah membuat sebuah function yang berfungsi membantu Ibu Daniela untuk mendapatkan informasi berupa Total Keuntungan, Total Modal, Produk
// Buku Terlaris, Penulis Buku Terlaris dan Persentase Keuntungan dari data penjualan yang telah disediakan diatas. function yang kamu buat ini akan me-return sebuah data yang berbentuk sebuah object yang dari beberapa properti.

// dataPenjualan ⇒ Array yang berisi beberapa object, object terdiri dari properti yang memiliki informasi penjualan product.
// getInfoPenjualan ⇒  nama function yang digunakan

const dataPenjualNovel = [
  {
      idProduct : 'BOOK002421',
      namaProduk : 'Pulang - Pergi',
      penulis : 'Tere Liye',
      hargaBeli : 60000,
      hargaJual : 86000,
      totalTerjual :150,
      sisaStok : 17,
  },
  {
      idProduct : 'BOOK002351',
      namaProduk : 'Selamat Tinggal',
      penulis : 'Tere Liye',
      hargaBeli : 75000,
      hargaJual : 103000,
      totalTerjual :171,
      sisaStok : 20,
  },
  {
      idProduct : 'BOOK002941',
      namaProduk : 'Garis Waktu',
      penulis : 'Fiersa Besari',
      hargaBeli : 67000,
      hargaJual : 99000,
      totalTerjual :213,
      sisaStok : 5,
  },
  {
      idProduct : 'BOOK002941',
      namaProduk : 'Laskar Pelangi',
      penulis : 'Andrea Hirata',
      hargaBeli : 55000,
      hargaJual : 68000,
      totalTerjual :20,
      sisaStok : 56,
  },

];
function getInfoPenjualan(dataPenjualan){
var profit = 0;
var modal = 0;
let obj = [];
  for (var i = 0; i < dataPenjualan.length; i++) {
    profit += dataPenjualan[i].totalTerjual * (dataPenjualan[i].hargaJual - dataPenjualan[i].hargaBeli)
    modal += dataPenjualan[i].hargaBeli * (dataPenjualan[i].totalTerjual + dataPenjualan[i].sisaStok)
  }
 var persentase = Math.floor((profit / modal * 100));
  
 let max = dataPenjualan.sort((a, b) => (a.totalTerjual < b.totalTerjual) ? 1 : -1);
 var bukuTerlaris = max[0].namaProduk;
 var penulisTerlaris = max[0].penulis;


var formatter = new Intl.NumberFormat('in-ID', {
style: 'currency',
currency: 'IDR',
});

profit = formatter.format(profit);
modal = formatter.format(modal);

let result = '{"totalKeuntungan":'+ profit +', "totalModal":'+ modal +', "presentaseKeuntungan":'+ persentase +'%, "produkBukuTerlaris":'+ bukuTerlaris +', "penulisTerlaris":'+ penulisTerlaris +'}';

return result;
}

console.log(getInfoPenjualan(dataPenjualNovel)); 

// OUTPUT :{
//           "totalKeuntungan":Rp 15.764.000,00, 
//           "totalModal":Rp 43.131.000,00, 
//           "presentaseKeuntungan":36%, 
//           "produkBukuTerlaris":Garis Waktu, 
//           "penulisTerlaris":Fiersa Besari
//          }