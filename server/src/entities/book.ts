
export interface Book{
    bookId: string;
    name: string;
    genre: string;
    isbn: string;
    authorId: string;
    publisherId: string;
}

export const tableDefinition = [
    {
        columnName: "bookId",
        columnType: "VARCHAR(255) PRIMARY KEY"
    },
    {
        columnName: "name",
        columnType: "VARCHAR(255) DEFAULT NULL"
    },
    {
        columnName: "genre",
        columnType: "VARCHAR(255) DEFAULT NULL"
    },
    {
        columnName: "isbn",
        columnType: "VARCHAR(255) DEFAULT NULL"
    },
    {
        columnName: "authorId",
        columnType: "VARCHAR(255) DEFAULT NULL"
    },
    {
        columnName: "publisherId",
        columnType: "VARCHAR(255) DEFAULT NULL"
    }
];