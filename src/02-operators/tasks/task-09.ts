/**
 * Sebuah marketplace online ingin menghitung total pembayaran akhir pelanggan serta poin reward yang diperoleh setelah proses checkout.
 * Pelanggan membeli produk berikut:
 * | Product             |  Harga | Jumlah |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Informasi pelanggan:
 * | Informasi             | Nilai                             |
 * | --------------------- | --------------------------------- |
 * | Nilai Voucher         | 100000                         |
 * | Anggota Premium       | Ya                                |
 * | Poin Reward           | 1 poin setiap Rp50.000 belanja    |
 *
 * 
 * Aturan Bisnis:
 * - Anggota premium mendapatkan diskon 10%.
 * - Voucher dipotong setelah diskon keanggotaan.
 * - Poin reward dihitung dari total pembayaran sebelum pajak.
 * - PPN sebesar 11%.
 * - Gratis ongkir diberikan jika:
 *      - Pelanggan adalah anggota premium, ATAU
 *      - Total pembayaran sebelum pajak melebihi Rp1.500.000.
 * 
 * Sistem checkout harus menghitung:
 * - Subtotal produk
 * - Diskon member
 * - Potongan voucher
 * - Total pembayaran sebelum pajak
 * - PPN
 * - Total pembayaran akhir
 * - Poin reward
 * - Status gratis ongkir

 */
//Harga produk
const mechanicalKeyboardPrice: number = 850000;
const wirelessMousePrice: number = 275000;
const monitorStandPrice: number = 420000;

//jumlah produk
const mechanicalKeyboardQuantity: number = 1;
const wirelessMouseQuantity: number = 2;
const monitorStandQuantity: number = 1;

//informasi pelanggan
const voucherValue: number = 100000; 
const premiumMember: boolean = true;
const rewardPointRate: number = 50000;

//mengihung subtotal
const productSubtotal: number = 
(mechanicalKeyboardPrice * mechanicalKeyboardQuantity) + 
(wirelessMousePrice * wirelessMouseQuantity) + 
(monitorStandPrice * monitorStandQuantity);

//Menghitung diskon membership
const membershipDiscount: number = premiumMember ? productSubtotal * 0.10 : 0;
//sebelum voucher
const paymentBeforeVoucher: number = productSubtotal - membershipDiscount;
const finalPaymentBeforePajak: number = paymentBeforeVoucher - voucherValue;
const vat: number = finalPaymentBeforePajak * 0.11;

const finalPayment: number = finalPaymentBeforePajak + vat;
const rewardPoints: number = Math.floor(finalPaymentBeforePajak / rewardPointRate);
const freeShippingEligibility: boolean = premiumMember || finalPaymentBeforePajak > 1500000;

console.log("Product Subtotal:", productSubtotal);
console.log("Membership Discount:", membershipDiscount);
console.log("Voucher Deduction:", voucherValue);
console.log("Payment Before Tax:", finalPaymentBeforePajak);
console.log("VAT:", vat);
console.log("Final Payment:", finalPayment);
console.log("Reward Points:", rewardPoints);
console.log("Free Shipping Eligibility:", freeShippingEligibility);