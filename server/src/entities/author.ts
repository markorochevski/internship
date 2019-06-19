
export interface Author {
    authorId: string;
    name: string;
    dateOfBirth: Date;
}

export const tableDefinition = [
    {
        columnName: "authorId",
        columnType: "VARCHAR(255) PRIMARY KEY"
    },
    {
        columnName: "name",
        columnType: "VARCHAR(255) DEFAULT NULL"
    },
    {
        columnName: "dateOfBirth",
        columnType: "DATE DEFAULT NULL"
    }
];