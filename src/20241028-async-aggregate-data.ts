/*20241028-async-aggregate-data.ts

Tantangan Async Hari Ini: "Async Aggregate Data"
Buatlah fungsi yang menggunakan async/await untuk mengambil data array objek dengan struktur yang mirip transaksi finansial, lalu:
1. Filter data dengan transaksi type: "income" saja.
2. Hitung total jumlah amount dari transaksi bertipe "income" tersebut.
3. Return total tersebut.


Langkah-langkah
1. Ambil data transaksi secara asynchronous (bisa data dummy atau dari API).
2. Gunakan await untuk memastikan semua langkah (filter dan aggregate) selesai sebelum fungsi mengembalikan hasil.
3. Output berupa total amount untuk semua transaksi bertipe "income".

*/


// program penyelesaian
type Transaction = {
    id: number;
    type: "income" | "expense";
    amount: number;
    description: string;
}


// fungsi untuk mendapatkan data transaksi secara async
async function fetchTransaction(): Promise<Transaction[]> {
    return [
        { id: 1, type: "income", amount: 500, description: "Salary" },
        { id: 2, type: "expense", amount: 150, description: "Groceries" },
        { id: 3, type: "income", amount: 200, description: "Freelance" },
        { id: 4, type: "expense", amount: 80, description: "Transport" },
        { id: 5, type: "income", amount: 300, description: "Investment" }
    ];
}


// fungsi utuk filter dan menghitung total income
async function calculateTotalIncome(): Promise<number> {
    const transaction = await fetchTransaction();

    // filter transaksi bertipe income
    const incomeTransaction = transaction.filter(transaction => transaction.type === "income");

    // menghitung total amount dari income transactions
    const taotalIncome = incomeTransaction.reduce((total, transaction) => total + transaction.amount, 0);

    return taotalIncome;
}


// menjalankan fungsi dan menampilkan hasil
calculateTotalIncome()
.then(total => console.log("total income amount:", total)) // output: total income amount: 1000
.catch(error => console.error("error:", error));


// pembahasan

/*

1. Tipe Data: Transaction berisi informasi id, type (income atau expense), amount, dan description.
2. fetchTransactions: Fungsi async yang mengembalikan array transaksi sebagai data dummy.
3. calculateTotalIncome:
   - Menggunakan await pada fetchTransactions() untuk mengambil data transaksi.
   - Filter data hanya yang bertipe "income".
   - Gunakan reduce() untuk menghitung total amount dari semua transaksi "income".
4. Output: Total amount dari transaksi bertipe "income".

Nantinya, jika ada error, akan muncul di console, tapi jika berhasil, akan menampilkan Total income amount.

*/