/**
 * A company has a simple data-processing engine used to analyze transaction records.
 */

const transactions = [
    {
        id: "TRX001",
        customer: "Alya",
        amount: 850000,
        status: "paid"
    },
    {
        id: "TRX002",
        customer: "Budi",
        amount: 1250000,
        status: "pending"
    },
    {
        id: "TRX003",
        customer: "Citra",
        amount: 450000,
        status: "paid"
    },
    {
        id: "TRX004",
        customer: "Dimas",
        amount: 2100000,
        status: "paid"
    },
    {
        id: "TRX005",
        customer: "Eka",
        amount: 780000,
        status: "cancelled"
    }
];

/** TASKS:
 * - Extract customer's name only in array
 * - Determine Transaction Category with rules below:
 *   - ≥ Rp2,000,000 → HIGH VALUE
 *   - ≥ Rp1,000,000 → MEDIUM VALUE
 *   - < Rp1,000,000 → LOW VALUE
 * - Calculate platform fee:
 *   - Paid transactions → 2%
 *   - Pending transactions → 1%
 *   - Cancelled transactions → 0%
 */

// 1. nama pelanggan tambahan
function getCustomerName(
    transaction: typeof transactions[number]
) {
    return transaction.customer;
}

// 2. kategori transaksi
function getTransactionCategory(
    transaction: typeof transactions[number]
) {
    if (transaction.amount >= 2000000) {
        return {
            ...transaction,
            category: "HIGH VALUE"
        };
    } else if (transaction.amount >= 1000000) {
        return {
            ...transaction,
            category: "MEDIUM VALUE"
        };
    } else {
        return {
            ...transaction,
            category: "LOW VALUE"
        };
    }
}

// 3. Hitung Biaya Platform
function calculatePlatformFee(
    transaction: typeof transactions[number]
) {
    let feeRate = 0;

    if (transaction.status === "paid") {
        feeRate = 0.02;
    } else if (transaction.status === "pending") {
        feeRate = 0.01;
    } else if (transaction.status === "cancelled") {
        feeRate = 0;
    }

    const fee = transaction.amount * feeRate;

    return {
        ...transaction,
        platformFee: fee
    };
}

function processTransactions<T>(
    arr: typeof transactions,
    callback: (transaction: typeof transactions[number]) => T
): T[] {
    return arr.map(callback);
}

// Memproses transaksi
const customerNames =
    processTransactions(transactions, getCustomerName);

const transactionCategories =
    processTransactions(transactions, getTransactionCategory);

const transactionFees =
    processTransactions(transactions, calculatePlatformFee);

console.log(`====== CUSTOMER NAMES ======`);
console.log(customerNames);

console.log(`====== TRANSACTION CATEGORIES ======`);
console.log(transactionCategories);

console.log(`====== PLATFORM FEES ======`);
console.log(transactionFees);