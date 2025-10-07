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
1. Pilih `No` untuk `Use rolldown-vite?`
1. Pilih `Yes` untuk `Install with npm and start now`
1. Setelah itu aplikasi langsung di install dan dijalankan, untuk instalasi manual bisa dilakukan dengan pindah ke hasil folder yang sudah dibuat tadi lalu jalankan `npm install` dan `npm run dev`
1. Ganti Title dan Jika menggunakan Framework CSS dengan CDN , tambahkan script yang dibutuhkan di `index.html`
1. Hapus seluruh code yang ada di dalam file src/index.css (file jangan dihapus, akan digunakan ketika mau install framework CSS tailwind etc)
1. Hapus file src/App.css
1. Hapus seluruh code yang ada di dalam function App
1. Hapus seluruh import yang tidak digunakan
1. Copy isi dari body yang ada di template (`template.html`) lalu ubah format `HTML` menjadi `JSX` (bisa gunakan [tool ini](https://transform.tools/html-to-jsx))
1. Paste di dalam return function App
    
**Part 1**
   1. Di part ini kita akan membuat variabel reaktif (state) untuk menyimpan hasil input dari email dan password
   1. Import function yang dibutuhkan untuk mengakses variabel reaktif (state) pada React
   1. Membuat "data" reaktif (state) untuk email dan password dengan menggunakan `useState()`
   1. Tampilkan isi state email & password di dalam html dengan menggunakan curly braces `{}`
   1. Menambahkan event handler `onChange` pada input email dan password
   1. Event handler hanya menerima callback function, jadi kita buat function callback di dalamnya
   1. Setiap ada perubahan di input email dan password, kita akan mengubah value dari state email dan password dengan menggunakan function setter yang sudah dibuat menggunakan `useState()`

**Part 2**
   1. Di part ini kita akan menampilkan data dari `product.json` ke dalam bentuk card
   1. Mengambil data dummy untuk Product (ambil dari product.json)
   1. Membuat "data" reaktif (state) untuk data Product
   1. Kita akan melakukan perubahan yang tadinya state product itu valuenya array of object, kita kan rubah menjadi array of "Card" dan ditampilkan ke react
   1. Setiap kita melakukan looping di react, kita harus kasih sebuah prop bernama "key" agar react tau perbedaan antara item yang di looping

