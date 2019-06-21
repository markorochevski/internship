import { connection } from "../index";
import * as uuid from "uuid";

export class Author {

    public getAllAuthors() {
        return new Promise((resolve, reject) => {

            console.log("Get all authors");
            const query = "SELECT * FROM bookstore.author";
            connection.query(query, (err, res) => {
                if (err) {
                    console.log("Error getting all authors: ", err);
                    reject(err);
                }
                console.log("Authors: ", res);
                resolve(res);
            });
        })
    }

    public getAuthor(authorId: string) {
        return new Promise((resolve, reject) => {
            console.log("Get author ", authorId);
            const query = `SELECT * FROM bookstore.author WHERE authorId = '${authorId}'`;
            connection.query(query, (err, res) => {
                if (err) {
                    console.log("Error getting author: ", err);
                    reject(err);
                }
                console.log("Author: ", res);
                resolve(res);
            });
        });
    }


    public deleteAuthor(authorId: string) {
        return new Promise((resolve, reject) => {
            console.log("Delete author ", authorId);
            const query = `DELETE FROM bookstore.author WHERE authorId = '${authorId}'`;
            connection.query(query, (err, res) => {
                if (err) {
                    console.log("Error deleting author: ", err);
                    reject(err);
                }
                resolve({ done: true });
            });
        });
    }

    public addAuthor(author: any) {
        return new Promise((resolve, reject) => {
            console.log("Add author ", author);
            const authorId = uuid.v4();
            const query = `INSERT INTO bookstore.author (authorId, name, dateOfBirth) VALUES ('${authorId}', '${author.name}', '${author.dateOfBirth}')`;
            connection.query(query, (err, res) => {
                if (err) {
                    console.log("Error adding author: ", err);
                    reject(err);
                }
                resolve({ done: true });
            });
        });
    }

    public updateAuthor(authorId: string, author: any) {
        return new Promise((resolve, reject) => {
            console.log("Update author ", authorId);
            const query = `UPDATE bookstore.author SET name = '${author.name}', dateOfBirth = '${author.dateOfBirth}' WHERE authorId = '${authorId}'`;
            connection.query(query, (err, res) => {
                if (err) {
                    console.log("Error updating author: ", err);
                    reject(err);
                }
                resolve({ done: true });
            });
        });
    }

}