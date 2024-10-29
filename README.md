# typescript-exercises

Repository ini berisi tantangan algoritma harian dengan TypeScript. Setiap pagi, akan mengerjakan satu atau lebih tantangan algoritma sederhana untuk "menghangatkan" kepala dan melatih logika pemrograman.

## Kenapa Repositori ini Dibuat?
- Melatih algoritma dasar setiap hari untuk menjaga konsistensi dan meningkatkan keterampilan.
- Dengan TypeScript sebagai bahasa utama untuk mengasah pemahaman tentang tipe data dan konsep pemrograman.

## Gimana Alurnya?
1. Setiap hari, akan ada satu tantangan algoritma yang di kerjakan, ini bisa dari ide sendiri atau cari refrensi soal.
2. Tantangan akan diselesaikan dengan TypeScript.
3. Solusi akan di-commit ke dalam repository ini dengan format nama file `YYYY-MM-DD-nama-tantangan.ts`.
4. README ini akan diperbarui setiap kali tantangan baru ditambahkan dengan daftar tantangan.

## Gimana Struktur Foldernya?
- `src/`: Berisi direktori dan file solusi algoritma harian.
- `test/`: (Opsional) Berisi pengujian unit jika ingin menambahkan tes untuk setiap solusi.

## Apa Saja Tantangan yang Dikerjakan?
1. [2024-10-23 Tantangan 1: Sum of Multiples](src/20241023-sum-of-multiples.ts)
2. [2024-10-24 Tantangan 2: Find Missing Number](src/20241024-find-missing-number.ts)
3. [2024-10-25 Tantangan 3: Palindrome Check](src/20241025-palindrome-check.ts)
4. [2024-10-26 Tantangan 4: Async Fetch Data Sum](src/20241026-async-fetch-data-sum.ts)
5. [2024-10-27 Tantangan 5: Async Sort and Filter Data](src/20241027-async-sort-and-filter-data.ts)
6. [2024-10-28 Tantangan 6: Async Aggregate Data](src/20241028-async-aggregate-data.ts)
7. [2024-10-29 Tantangan 7: Async Filter and Map Arrow](src/20241029-async-filter-and-map-arrow.ts)


## Cara Memulai

### 1. Inisialisasi Proyek

Pertama, inisialisasi proyek dengan menjalankan perintah berikut di terminal:

```bash
npm init -y
```

Ini akan membuat file `package.json` yang diperlukan untuk mengelola dependensi proyek.

### 2. Install TypeScript dan ts-node

Setelah itu, install `typescript` dan `ts-node` sebagai dependensi untuk menjalankan file TypeScript:

```bash
npm install typescript ts-node @types/node --save-dev
```

### 3. Buat Struktur Folder

Buat dua folder `src/` dan `test/` untuk menampung solusi dan pengujian unit (jika ada):

```bash
mkdir src
mkdir test
```

### 4. Inisialisasi TypeScript

Untuk inisialisasi TypeScript, jalankan perintah berikut untuk membuat file konfigurasi `tsconfig.json`:

```bash
npx tsc --init
```

### 5. Menjalankan Tantangan

Kamu bisa menjalankan tantangan harian dengan salah satu cara berikut:

Tanpa kompilasi (menggunakan `ts-node`):

```bash
npx ts-node src/YYYY-MM-DD-nama-tantangan.ts
```

Dengan kompilasi ke JavaScript terlebih dahulu:

```bash
npx tsc src/YYYY-MM-DD-nama-tantangan.ts
node src/YYYY-MM-DD-nama-tantangan.js
```

---
