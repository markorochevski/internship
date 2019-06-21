import { connection } from "../index";
import * as uuid from "uuid";

export class Publisher {

    public getAllPublishers() {
        return new Promise((resolve, reject) => {
            console.log("Get all publishers");
            const query = "SELECT * FROM bookstore.publisher";
            connection.query(query, (err, res) => {
                if (err) {
                    console.log("Error getting all publishers: ", err);
                    reject(err);
                }
                console.log("Publishers: ", res);
                resolve(res);
            });
        });
    }

    public getPublisher(publisherId: string) {
        return new Promise((resolve, reject) => {
            console.log("Get publisher ", publisherId);
            const query = `SELECT * FROM bookstore.publisher WHERE publisherId='${publisherId}'`;
            connection.query(query, (err, res) => {
                if (err) {
                    console.log("Error getting publisher: ", err);
                    reject(err);
                }
                console.log("Publisher: ", res);
                resolve(res);
            });
        });
    }


    public deletePublisher(publisherId: string) {
        return new Promise((resolve, reject) => {
            console.log("Delete publisher: ", publisherId);
            const query = `DELETE FROM bookstore.publisher WHERE publisherId='${publisherId}'`;
            connection.query(query, (err, res) => {
                if (err) {
                    console.log("Error deleting publisher: ", err);
                    reject(err);
                }
                resolve({ done: true });
            });
        });
    }

    public addPublisher(publisher: any) {
        return new Promise((resolve, reject) => {
            console.log("Add publisher: ", publisher);
            const publisherId = uuid.v4();
            let query = "INSERT INTO bookstore.publisher (publisherId, name, street, email) ";
            query += `VALUES ('${publisherId}', '${publisher.name}', '${publisher.street}', '${publisher.email}')`;
            connection.query(query, (err, res) => {
                if (err) {
                    console.log("Error adding publisher: ", err);
                    reject(err);
                }
                resolve({ done: true });
            });
        });
    }

    public updatePublisher(publisherId: string, publisher: any) {
        return new Promise((resolve, reject) => {
            console.log("Update publisher: ", publisherId);
            const query = `UPDATE bookstore.publisher SET name='${publisher.name}', street='${publisher.street}', email='${publisher.email}' WHERE publisherId='${publisherId}'`;
            connection.query(query, (err, res) => {
                if (err) {
                    console.log("Error updating publisher: ", err);
                    reject(err);
                }
                resolve({ done: true });
            });
        });
    }

}