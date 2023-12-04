const sqlTables = document.querySelectorAll('.sql-table');

function generateCreateTableSQL(table) {
    if (!table || !table.name || !table.columns || table.columns.length === 0) {
        return "Error: Invalid table object";
    }

    let sql = `CREATE TABLE ${table.name} (\n`;

    table.columns.forEach((column, index) => {
        if (!column.name || !column.type) {
            console.error("Invalid column object:", column);
            return;
        }

        sql += `    ${column.name} ${column.type}`;

        if (column.length) {
            sql += `(${column.length})`;
        }

        if (column.default) {
            sql += ` DEFAULT ${column.default}`;
        }

        sql += index < table.columns.length - 1 ? ",\n" : "\n";
    });

    sql += ");";

    return sql;
}


function getSQL(){
    sqlTables.forEach(sqlTable => {
        const tableName = sqlTable.querySelector('.sql-table-name').value;
        const table = {
            name: tableName,
            columns: []
        }

        const forms = sqlTable.querySelectorAll('form');
        forms.forEach(form => {
            const formData = new FormData(form);
            const formProps = Object.fromEntries(formData);

            table.columns.push({
                name: formProps.column_name,
                type: formProps.type,
                length: formProps.length,
                default: formProps.default
            })
        })

        const sql = generateCreateTableSQL(table);
        console.log(sql);
    })
}

