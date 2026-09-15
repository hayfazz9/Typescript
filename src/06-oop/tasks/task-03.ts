/**
 * A school library wants to create a digital system for managing books.
 * 
 * Each book has:
 * - ISBN
 * - Title
 * - Author
 * - Total pages
 * - Borrowing status
 * 
 * The library wants to prevent users from directly changing the borrowing status.
 * Instead, the status can only change through:
 * - borrow()
 * - returnBook()
 * 
 * Business Rules
 * - A book can only be borrowed when: status = available
 * - When a book is borrowed: available → borrowed
 * - A borrowed book cannot be borrowed again.
 * - When the book is returned: borrowed → available
 * - An available book cannot be returned.
 * 
 * Tasks:
 * - create class Book that minimum has property and method below:
 *   - private status: string;
 *   - borrow()
 *   - returnBook()
 *   - showInfo()
 *   - isAvailable()
 * - implement class with at least 2 objects
 */

class Book {
    constructor(
        private ISBN: string,
        private title: string,
        private author: string,
        private totalPages: number,
        private status: string = "available"
    ) {}

    public borrow(): void {
        if (this.status === "available") {
            this.status = "borrowed";
        }
    }

    public returnBook(): void {
        if (this.status === "borrowed") {
            this.status = "available";
        }
    }

    showInfo(): void {
        console.log("=== Book Info ===")
        console.log("ISBN:" + this.ISBN)
        console.log("Title:" + this.title)
        console.log("Author:" + this.author)
        console.log("total Pages:" + this.totalPages)
        console.log("Status:" + this.status)
        console.log();
    }

    public isAvailable(): boolean {
        return this.status === "available";
    }
}

const book1 = new Book(
    "978-602-03-1234-5",
    "Laskar Pelangi",
    "Andrea Hirata",
    529
);

const book2 = new Book(
    "978-602-03-5963-0",
    "Malioboro at Midnight",
    "Skysphire",
    430
);

book1.showInfo();
console.log();

book1.borrow();
console.log(book1.isAvailable());

book1.returnBook();
console.log(book1.isAvailable());

book2.showInfo();
