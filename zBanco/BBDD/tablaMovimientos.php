<?php
    CREATE TABLE movimientos (
        mo_ncu VARCHAR(10) NOT NULL PRIMARY KEY,
        mo_fec DATE NOT NULL PRIMARY KEY,
        mo_hor VARCHAR(6) NOT NULL PRIMARY KEY,
        mo_des VARCHAR(80) NOT NULL,
        mo_imp INT(8) NOT NULL;
?>