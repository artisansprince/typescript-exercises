/*

Tantangan hari ini: KMP Substring Search
Kita akan membuat program untuk mencari indeks pertama kali substring muncul dalam sebuah string, menggunakan algoritma Knuth-Morris-Pratt (KMP). Algoritma ini lebih efisien dari pencarian biasa karena menghindari pemeriksaan ulang karakter yang sudah cocok.

Detail Tantangan:
Buat fungsi kmpSearch(text: string, pattern: string): number.
Fungsi harus mengembalikan indeks awal dari substring pattern dalam text.
Jika pattern tidak ditemukan, kembalikan -1.
Buat algoritma KMP yang membangun tabel Longest Prefix Suffix (LPS) untuk mempercepat pencarian.
Contoh Input dan Output:
Input:
kmpSearch("hello world", "world");

Output:
6


Input:
kmpSearch("abcdabcabcd", "abcab");

Output:
4

Tips:
Algoritma KMP bekerja dengan mencari pola yang cocok sebagian, jadi bikin fungsi tambahan untuk membuat tabel LPS yang menyimpan panjang prefix yang cocok sebagai suffix.
Dengan menggunakan LPS, kita bisa menghindari pengulangan karakter yang tidak perlu, membuat pencarian lebih cepat.


*/

