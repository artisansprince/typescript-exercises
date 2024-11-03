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

// program penyelesaian
function kmpSearch(text: string, pattern: string): number {
    const lps = buildLPS(pattern); // Step 1: Buat tabel LPS
    let i = 0; // Indeks pada `text`
    let j = 0; // Indeks pada `pattern`

    while (i < text.length) {
        if (text[i] === pattern[j]) {
            i++;
            j++;
        }

        if (j === pattern.length) {
            return i - j; // Substring ditemukan, kembalikan posisi awal
        } else if (i < text.length && text[i] !== pattern[j]) {
            if (j !== 0) {
                j = lps[j - 1]; // Geser ke posisi yang disarankan oleh LPS
            } else {
                i++;
            }
        }
    }

    return -1; // Jika tidak ditemukan
}

function buildLPS(pattern: string): number[] {
    const lps = Array(pattern.length).fill(0); // Inisialisasi LPS array
    let length = 0; // Panjang prefix yang juga suffix
    let i = 1;

    while (i < pattern.length) {
        if (pattern[i] === pattern[length]) {
            length++;
            lps[i] = length;
            i++;
        } else {
            if (length !== 0) {
                length = lps[length - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }

    return lps;
}

// Contoh pengujian
console.log(kmpSearch("hello world", "world")); // Output yang diharapkan: 6
console.log(kmpSearch("abcdabcabcd", "abcab")); // Output yang diharapkan: 4
console.log(kmpSearch("teststring", "string")); // Output yang diharapkan: 4
console.log(kmpSearch("abcd", "xyz"));          // Output yang diharapkan: -1
