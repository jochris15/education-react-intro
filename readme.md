# React Intro

## Why use React?
1. Component based, reusable component sehingga lebih dinamis dan lebih mudah di maintain
2. Flexible, karena strukturnya modular
3. Performance, secara performance bisa menjalankan aplikasi yang kompleks dengan cepat
4. Popular, sehingga community supportnya banyak 

## What is ReactJS ?

[Dokumentasi React](https://react.dev/)

Berdasarkan dokumentasi, kita bisa tau bahwa React adalah sebuah library javascript untuk membuat user interfaces.

Ingat yah penekanannya di sini adalah sebuah Library. Ya, React tidak menempatkan dirinya sebagai sebuah Framework, melainkan sebagai sebuah Library.

Apa perbedaan antara **library & framework?**

TL;DR: Library memiliki magic yang lebih sedikit daripada Framework.

Secara garis besarnya, Library umumnya tidak memiliki fitur yang wah dibandingkan dengan sebuah Framework.

Jadi bersiaplah, ketika kita menggunakan React, kita akan bermain dengan cukup banyak standar HTML pada umumnya


## What is JSX?
[Dokumentasi JSX](https://react.dev/learn/writing-markup-with-jsx)

Bedasarkan dokumentasi, simplenya jsx adalah sebuah syntax extension yang memungkinkan kita menuliskan HTML-like markup didalam file javascript.

Dikarenakan website semakin menjadi interactive, logicnya meningkat , supaya lebih mudah handlenya Javascript yang mengurus HTML daripada menjadi bagian yang terpisah. 

Itu kenapa alasan React react rendering logic & html markup di dalam 1 file yang sama dan menggunakan extension JSX

## Demo React + Vite

Demo ini menggunakan Vite dengan template React sebagai permulaannya

**Setup**
1. `npm create vite@latest`
1. Masukkan `<nama_folder>`
1. Pilih `React`
1. Pilih `Javascript`
1. `cd <nama_folder>`
1. `npm install`
1. `npm run dev`
1. Ganti Title dan Jika menggunakan Framework CSS dengan CDN , tambahkan script yang dibutuhkan di `index.html`
1. Hapus seluruh code yang ada di dalam file src/index.css (file jangan dihapus, akan digunakan ketika mau install framework CSS tailwind etc)
1. Hapus file src/App.css
1. Hapus seluruh code yang ada di dalam function App
1. Hapus seluruh import yang tidak digunakan
1. Copy isi dari body yang ada di template (`template.html`) ke `src/App.jsx`
1. Ganti cara untuk melakukan comment (dari HTML ke JSX)
1. Ganti cara untuk menggunakan class (class -> className)
    
**Part 1**
   1. Import function yang dibutuhkan untuk mengakses data reaktif (state) pada React
   1. Membuat "data" reaktif (state) untuk email dan password
   1. Tampilkan isi state email & password
   1. Membuat fungsi untuk membaca perubahan input
   1. Memodifikasi input untuk bisa menerima dan mengganti state email dan password

**Part 2**
   1. Membuat Tampilan yang akan muncul berdasarkan kondisi tertentu (conditional rendering)
   1. Menambahkan event onClick pada button untuk bisa berpindah halaman
   1. Mengambil data dummy untuk Product (ambil dari product.json)
   1. Membuat "data" reaktif (state) untuk data Product
   1. Membuat looping element (Rendering List untuk product)

