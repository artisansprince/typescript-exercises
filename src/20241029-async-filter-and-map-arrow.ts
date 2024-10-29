/* 20241029-async-filter-and-map-arrow.ts

Tantangan Hari Ini: "Async Filter and Map with Arrow Functions"
Buatlah fungsi yang menggunakan async/await dan arrow functions untuk:
1. Filter data objek produk berdasarkan price di atas 100.
2. Map hasil filter untuk mengubah setiap produk menjadi hanya berisi name dan price saja.
3. Return data yang sudah difilter dan diubah formatnya.

Langkah-langkah
1. Ambil data produk secara asynchronous (gunakan data dummy atau bisa dari API).
2. Gunakan await dengan arrow function untuk melakukan filter dan map.
3. Return hasil akhir dalam array yang berisi produk dengan price > 100 dan hanya menampilkan name serta price.

*/

// program penyelesaian
type Product = {
    id: number;
    name: string;
    price: number;
    category: string;
};

// fungsi async untuk mendapatkan data produk
const fetchProducts = async (): Promise<Product[]> => [
    { id: 1, name: "Laptop", price: 1200, category: "Electronics" },
    { id: 2, name: "Book", price: 30, category: "Education" },
    { id: 3, name: "Phone", price: 800, category: "Electronics" },
    { id: 4, name: "Pen", price: 10, category: "Stationery" },
    { id: 5, name: "Headphones", price: 150, category: "Electronics" }
];

// fungsi utama untuk filter dan map produk
const filterAndMapProducts = async (): Promise<{ name: string; price: number }[]> => {
    const products = await fetchProducts();

    // filter produk dengan harga di atas 100 dan map hanya ke name dan price
    const filteredAndMappedProducts = products
        .filter(product => product.price > 100) // arrow function untuk filter
        .map(product => ({ name: product.name, price: product.price })); // arrow function untuk map

    return filteredAndMappedProducts;
};

// menjalankan fungsi dan menampilkan hasil
filterAndMapProducts()
    .then(result => console.log("Filtered and mapped products:", result))
    .catch(error => console.error("Error:", error));


    