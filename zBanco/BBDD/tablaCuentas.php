<?PHP
    CREATE TABLE cuentas (
        cu_ncu VARCHAR(10) NOT NULL PRIMARY KEY,
        cu_dn1 VARCHAR(9) NOT NULL FOREIGN KEY,
        cu_dn2 VARCHAR(9) FOREIGN KEY,
        cu_sal INT(8) NOT NULL,
        REFERENCES clientes(cl_dni, cl_dni));
?>