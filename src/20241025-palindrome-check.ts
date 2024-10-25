/* 20241025-palindrome-check.ts

Tantangan: Palindrome Check
Diberikan sebuah string, tentukan apakah string tersebut adalah palindrome. String dianggap palindrome jika dibaca sama dari depan maupun belakang (tidak memperhatikan spasi, tanda baca, atau huruf kapital).

Input:
Sebuah string.
Contoh: "A man, a plan, a canal, Panama"


Output:
Boolean true jika string tersebut adalah palindrome, dan false jika tidak.
Contoh: true


Langkah Penyelesaian:
Bersihkan string dari karakter yang tidak penting seperti spasi, tanda baca, dan ubah semua ke huruf kecil.
Bandingkan string tersebut dengan versi terbaliknya.

*/

// program penyelesaian

function isPalindrome(str:string): boolean {
    // beriskan string
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLocaleLowerCase();

    // bandingkan string dengan versi terbaliknya
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

// penggunaan
const input = "Kasur ini rusak";
console.log(isPalindrome(input));

if (isPalindrome(input) === true) {
    console.log(`kalimat "${input}" adalah palindrome.`);
}
else {
    console.log(`kalimat "${input}" bukan palindrome.`)
}