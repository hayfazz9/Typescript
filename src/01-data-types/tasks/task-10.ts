/**
 * Sebuah platform belanja online memungkinkan pelanggan membeli beberapa produk dalam satu transaksi.
 * Setiap produk yang ditambahkan ke keranjang belanja menyimpan informasi berupa kode produk,
 * nama produk, harga satuan, jumlah yang dibeli, serta apakah produk tersebut memenuhi syarat
 * untuk mendapatkan gratis ongkir.
 * Hari ini, seorang pelanggan menambahkan produk-produk berikut ke dalam keranjang belanja.

| Product Code | Product Name        | Price   | Quantity | Free Shipping |
| ------------ | ------------------- | ------- | -------- | ------------- |
| KB001        | Mechanical Keyboard | 850000  | 1        | Yes           |
| MS002        | Wireless Mouse      | 275000  | 2        | Yes           |
| HD003        | External SSD 1TB    | 1650000 | 1        | No            |
| HP004        | Gaming Headset      | 720000  | 1        | Yes           |
 
* Tasks:
 * 1. Definisikan tipe data yang sesuai untuk informasi produk.
 * 2. Simpan seluruh data produk ke dalam satu koleksi.
 * 3. Tampilkan data produk menggunakan `console.log`.
 */

type Product = {
  productCode: string;
  productName: string;
  unitPrice: number;
  quantity: number;
  isFreeShipping: boolean;
};

const shoppingCart: Product[] = [
{
    productCode: "KB001",
    productName: "Mechanical Keyboard",
    unitPrice: 850000,
    quantity: 1,
    isFreeShipping: true 
},
{
    productCode: "MS002",
    productName: "Wireless Mouse",
    unitPrice: 275000,
    quantity: 2,
    isFreeShipping: true
},
{ 
    productCode: "HD003", 
    productName: "External SSD 1TB", 
    unitPrice: 1650000, 
    quantity: 1, 
    isFreeShipping: false
},
{ 
    productCode: "HP004",
    productName: "Gaming Headset",
    unitPrice: 720000,
    quantity: 1,
    isFreeShipping: true
}
];  

console.log("Shopping Cart Data:");
shoppingCart.forEach(product => {
    console.log(`Product Code: ${product.productCode}, Product Name: ${product.productName}, Unit Price: ${product.unitPrice}, Quantity Purchased: ${product.quantity}, Free Shipping: ${product.isFreeShipping}`);
});