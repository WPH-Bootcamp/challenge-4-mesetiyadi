// code here, goodluck!!
'use strict';

const prompt = require('prompt-sync')();

function ambilAngka(pesanPrompt) {
  while (true) {
  let input = prompt(pesanPrompt);

  if (input.trim() === '') {
    console.log("Input kosong, Ketik Angkanya dulu dong!\n");
    continue;
    }

    let angka = Number(input);

    if (isNaN(angka)) {
      console.log("Gess, itu bukan angka. Coba lagi!\n");
    } else {
      return angka;
    }
  }
}

function ambilOperator() {
  const daftarValid= ['+', '-', '*', '/', '%', '**'];

  while (true) {
    let input = prompt("Pilih operator (+, -, *, /, %, **): ");

    if (daftarValid.includes(input)) {
      return input;
    } else {
      console.log("Gess, itu bukan operator. Coba lagi!\n");
    }
  }
}

// ==========================================
// KUMPULAN FUNCTION MATEMATIKA
// ==========================================

function tambah(a, b) {
  return a + b;
}

function kurang(a, b) {
  return a - b;
}

function kali(a, b) {
  return a * b;
}

function bagi(a, b) {
  // Fitur Penting : Handle edge case pembagian dengan nol
  if (b === 0) {
    return "Error: Gak bisa dong dibagi dengan nol, Emang Mau bikin black hole?";
  }
  return a / b;
}

function modulo(a, b) {
  // Fitur Penting : Handle edge case nol dibagi dengan angka
  if (b === 0) {
    return "Error: Gak bisa dong dibagi dengan nol, Ganti dulu angka 0 nya gess!";
  }
  return a % b;
}

function pangkat(a, b) {
  return a ** b;
}

// ==========================================
// MAIN LOOP KALKULATOR
// ==========================================

function mulaiKalkulator() {
  console.log("\n==========================================");
  console.log(" KALKULATOR BY MES ");
  console.log("==========================================\n");

  while (true) {
    console.log("--- Mulai Perhitungan ---");
    
    let angka1 = ambilAngka("Masukkan angka pertama: ");
    let operator = ambilOperator();
    let angka2 = ambilAngka("Masukkan angka kedua: ");

    let hasil;


    switch (operator) {
      case '+':
        hasil = tambah(angka1, angka2);
        break;
      case '-':
        hasil = kurang(angka1, angka2);
        break;
      case '*':
        hasil = kali(angka1, angka2);
        break;
      case '/':
        hasil = bagi(angka1, angka2);
        break;
      case '%':
        hasil = modulo(angka1, angka2);
        break;
      case '**':
        hasil = pangkat(angka1, angka2);
        break;
    }

    console.log(`\n=> HASIL: ${angka1} ${operator} ${angka2} = ${hasil}`);

    // ==========================================
    // Analisis Hasil
    // ==========================================
    console.log("\n--- Analisis Hasil ---");

    let hasilAkhir = hasil ?? "Hasil tidak ditemukan (null/undefined)";

    if (typeof hasilAkhir === 'string') {
      console.log(`Peringatan: ${hasilAkhir}`);
    } else if (typeof hasilAkhir === 'number') {
      
      let tanda = (hasilAkhir > 0) ? "Positif" : (hasilAkhir < 0) ? "Negatif" : "Nol";
      let tipeAngka = Number.isInteger(hasilAkhir) ? "Bilangan Bulat" : "Bilangan Desimal";
      
      let sifatAngka = "";
      if (Number.isInteger(hasilAkhir)) {
        sifatAngka = (hasilAkhir % 2 === 0) ? " dan Genap" : " dan Ganjil";
      }

      console.log(`Kategori : Angka ${tanda}`);
      console.log(`Tipe     : ${tipeAngka}${sifatAngka}`);
    }


    break; 
  }
}

mulaiKalkulator();