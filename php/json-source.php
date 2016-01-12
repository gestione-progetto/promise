<?php
    sleep(2);

    $languages = array(
        array(
            'language' => 'Java',
            'developer' => 'Oracle'
        ),
        array(
            'language' => 'C Sharp',
            'developer' => 'Microsoft'
        ),
        array(
            'language' => 'Swift',
            'developer' => 'Apple'
        ),
        array(
            'language' => 'JavaScript',
            'developer' => 'ECMA'
        ),
        array(
            'language' => 'PHP',
            'developer' => 'Zend Technologies'
        ),
    );
    echo json_encode($languages);
