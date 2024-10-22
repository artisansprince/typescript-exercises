# typescript-exercises

Repository ini berisi latihan algoritma harian dengan TypeScript. Setiap pagi, akan mengerjakan satu atau lebih tantangan algoritma sederhana untuk "menghangatkan" kepala dan melatih logika pemrograman.

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
1. [YYYY-MM-DD] Tantangan 1: Nama Tantangan
2. [YYYY-MM-DD] Tantangan 2: Nama Tantangan

## Cara Menjalankan
1. Instal dependensi (jika ada):
   ```
   npm install
   ```

2. Jalankan file TypeScript sesuai kebutuhan:
   - Tanpa kompilasi menggunakan `ts-node`:
     ```
     npx ts-node src/YYYY-MM-DD-nama-tantangan.ts
     ```

   - Dengan kompilasi ke JavaScript terlebih dahulu:
     ```
     tsc src/YYYY-MM-DD-nama-tantangan.ts
     node src/YYYY-MM-DD-nama-tantangan.js
     ```
