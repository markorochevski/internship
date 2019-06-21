import { connection } from "../index";
import * as uuid from "uuid";

export class Book {

    public getAllBooks() {
        return new Promise((resolve, reject) => {
            console.log("Get all books");
            const query = "SELECT * FROM bookstore.book";
            connection.query(query, (err, res) => {
                if (err) {
                    console.log("Error getting all books: ", err);
                    reject(err);
                }
                console.log("Books: ", res);
                resolve(res);
            });
        });
    }

    public getBook(bookId: string) {
        return new Promise((resolve, reject) => {
            console.log("Get book ", bookId);
            const query = `SELECT * FROM bookstore.author WHERE bookId = '${bookId}'`;
            connection.query(query, (err, res) => {
                if (err) {
                    console.log("Error getting book: ", err);
                    reject(err);
                }
                console.log("Book: ", res);
                resolve(res);
            });
        });
    }


    public deleteBook(bookId: string) {
        return new Promise((resolve, reject) => {
            console.log("Delete book ", bookId);
            const query = `DELETE FROM bookstore.book WHERE bookId = '${bookId}'`;
            connection.query(query, (err, res) => {
                if (err) {
                    console.log("Error deleting book: ", err);
                    reject(err);
                }
                resolve({ done: true });
            });
        });
    }

    public addBook(book: any) {
        return new Promise((resolve, reject) => {
            console.log("Add book: ", book);
            const bookId = uuid.v4();
            let query = "INSERT INTO bookstore.book (bookId, name, genre, isbn, authorId, publisherId) ";
            query += `VALUES ('${bookId}', '${book.name}', '${book.genre}', '${book.isbn}, '${book.authorId}', '${book.publisherId}'')`;
            connection.query(query, (err, res) => {
                if (err) {
                    console.log("Error adding book: ", err);
                    reject(err);
                }
                resolve({ done: true });
            });
        });
    }

    public updateBook(bookId: string, book: any) {
        return new Promise((resolve, reject) => {
            console.log("Update book ", bookId);
            const query = `UPDATE bookstore.book SET name='${book.name}', genre='${book.genre}', isbn='${book.isbn}' WHERE bookId='${bookId}'`;
            connection.query(query, (err, res) => {
                if (err) {
                    console.log("Error updating book: ", err);
                    reject(err);
                }
                resolve({ done: true });
            });
        });
    }

}