/* 20241030-duplicate-characters-count.ts

Tantangan hari ini: Duplicate Characters Count
Buat fungsi yang bisa menghitung jumlah karakter duplikat dalam sebuah string. Misalnya, diberikan string "programming", maka hasilnya adalah 3 (karakter yang berulang: r, g, m).

Langkah Tantangannya:
Buat fungsi countDuplicates(str: string): number.
Loop atau gunakan metode lain untuk menghitung setiap karakter yang muncul lebih dari sekali dalam string.
Return jumlah karakter unik yang memiliki duplikat.
Contoh Input dan Output:
Input: "programming"

Output: 3 (karena karakter r, g, dan m muncul lebih dari sekali)

Input: "typescript"

Output: 1 (karena hanya karakter t yang muncul dua kali)


*/

// program penyelesaian

function countDuplicates(str: string): number {
    // Ubah string ke lowercase biar case-insensitive
    const lowerStr = str.toLowerCase();
    
    // Buat objek untuk menyimpan jumlah setiap karakter
    const charCount: Record<string, number> = {};

    // Loop setiap karakter dalam string
    for (const char of lowerStr) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Hitung jumlah karakter yang muncul lebih dari sekali
    let duplicateCount = 0;
    for (const count of Object.values(charCount)) {
        if (count > 1) duplicateCount++;
    }

    return duplicateCount;
}

// Contoh pengujian
console.log(countDuplicates("programming")); // Output: 3
console.log(countDuplicates("typescript"));  // Output: 2
console.log(countDuplicates("hello world")); // Output: 2 (karena 'l' dan 'o' muncul lebih dari sekali)


