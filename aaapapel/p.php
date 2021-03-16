<?php
    sleep(2);
    $recibe = json_decode($_GET['x']);
    $recibe = json_encode($recibe);
    echo $recibe;
?>