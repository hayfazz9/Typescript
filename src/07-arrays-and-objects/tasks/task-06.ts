/**
 * A school library records book borrowing transactions.
 * Tasks:
 * 1. Find all borrowing transactions for "Andi".
 * 2. Find the book information for every borrowing transaction.
 * 3. Find students who borrowed a programming book.
 * 4. Calculate the total number of borrowing transactions.
 * 5. Calculate the average borrowing duration.
 * 6. Find students who borrowed books for more than 7 days.
 */

const books = [
    { id: 1, title: "Clean Code", category: "Programming", stock: 3 },
    { id: 2, title: "Atomic Habits", category: "Self Development", stock: 5 },
    { id: 3, title: "The Pragmatic Programmer", category: "Programming", stock: 2 },
    { id: 4, title: "Design Patterns", category: "Programming", stock: 1 },
];

const borrowings = [
    { student: "Andi", bookId: 1, days: 7 },
    { student: "Budi", bookId: 2, days: 3 },
    { student: "Citra", bookId: 1, days: 10 },
    { student: "Deni", bookId: 3, days: 5 },
    { student: "Eka", bookId: 1, days: 4 },
    { student: "Andi", bookId: 3, days: 8 },
];

// 1. Mencari semua transaksi peminjaman Andi
const andiBorrowings = borrowings.filter(
    borrowing => borrowing.student === "Andi"
);

console.log("Andi Borrowings:");
console.log(andiBorrowings);


// 2. Mencari informasi buku untuk setiap transaksi
const borrowingBooks = borrowings.map(borrowing => {
    const book = books.find(book => book.id === borrowing.bookId);

    return {
        student: borrowing.student,
        book: book?.title,
        days: borrowing.days
    };
});

console.log("Borrowing Book Information:");
console.log(borrowingBooks);


// 3. Mencari siswa yang meminjam buku Programming
const programmingBorrowers = borrowings
    .filter(borrowing => {
        const book = books.find(book => book.id === borrowing.bookId);
        return book?.category === "Programming";
    })
    .map(borrowing => borrowing.student);

console.log("Programming Book Borrowers:");
console.log(programmingBorrowers);


// 4. Menghitung total transaksi peminjaman
const totalBorrowings = borrowings.length;

console.log("Total Borrowing Transactions:");
console.log(totalBorrowings);


// 5. Menghitung rata-rata lama peminjaman
const totalDays = borrowings.reduce(
    (total, borrowing) => total + borrowing.days,
    0
);

const averageDays = totalDays / borrowings.length;

console.log("Average Borrowing Duration:");
console.log(averageDays);


// 6. Mencari siswa yang meminjam lebih dari 7 hari
const longBorrowers = borrowings
    .filter(borrowing => borrowing.days > 7)
    .map(borrowing => borrowing.student);

console.log("Students Borrowing More Than 7 Days:");
console.log(longBorrowers);