
export interface Publisher {
    publisherId: string;
    name: string;
    street: string;
    email: string;
}

export const tableDefinition = [
    {
        columnName: "publisherId",
        columnType: "VARCHAR(255) PRIMARY KEY"
    },
    {
        columnName: "name",
        columnType: "VARCHAR(255) DEFAULT NULL"
    },
    {
        columnName: "street",
        columnType: "VARCHAR(255) DEFAULT NULL"
    },
    {
        columnName: "email",
        columnType: "VARCHAR(255) DEFAULT NULL"
    }
];