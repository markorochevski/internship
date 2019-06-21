import express from "express";
import * as bodyParser from "body-parser";
import * as mysql from "mysql";
import * as fs from "fs";
import { bookRouter } from "./routes/book";
import { authorRouter } from "./routes/author";
import { publisherRouter } from "./routes/publisher";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/book", bookRouter);
app.use("/author", authorRouter);
app.use("/publisher", publisherRouter);

export const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "database123"
});

// set to false after table has data
const fillTable = false;

connection.connect((err) => {
    if (err) {
        console.log("Error connecting to db: ", err);
        throw err;
    }
    console.log("Connected to database!");
    connection.query("CREATE DATABASE IF NOT EXISTS bookstore", (e, result) => {
        if (e) {
            console.log("Error creating database: ", e);
            throw e;
        }
        console.log("Database created!");
        createTables(__dirname + "/entities");
        fillTables(__dirname + "/../../files");
    });
});

app.listen(5000, () => {
    console.log("Server running on port 5000!");
});

function createTables(path: string) {
    fs.readdir(path, (err, files) => {
        if (err) {
            console.log(err);
            throw err;
        }
        files.forEach(file => {
            const tableDefinition = require(path + "/" + file).tableDefinition;
            const entityName = file.split(".")[0];
            let query = `CREATE TABLE IF NOT EXISTS bookstore.${entityName} (`;
            for (const column of tableDefinition) {
                query += `${column.columnName} ${column.columnType},`;
            }
            query = query.slice(0, query.length - 1);
            query += ")";
            connection.query(query, (e, res) => {
                if (e) {
                    console.log(e);
                    throw e;
                }
                console.log(`Table ${entityName} created`)
            });
        });
    });
}

function fillTables(path: string) {
    if (fillTable) {
        fs.readdir(path, (err, files) => {
            if (err) {
                console.log("Can not read directory ", path);
                throw err;
            }
            files.forEach(file => {
                const filePath = path + "/" + file;
                const entityName = file.split(".")[0];
                console.log("Reading file ", filePath);
                fs.readFile(filePath, "utf8", (e, data) => {
                    const fileData = JSON.parse(data);
                    for (const object of fileData) {
                        let query = `INSERT INTO bookstore.${entityName} `;
                        let columns = "(";
                        let values = "("
                        for (const property in object) {
                            columns += `${property},`;
                            values += `'${object[property]}',`;
                        }
                        columns = columns.slice(0, columns.length - 1);
                        values = values.slice(0, values.length - 1);
                        columns += ") VALUES ";
                        values += ")";
                        query += columns + values;
                        connection.query(query, (error, res) => {
                            if (error) {
                                console.log("Error filling tables: ", error);
                                throw error;
                            }
                        });
                    }
                });
            });
        });
    }
}