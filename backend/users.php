<?php

/**
 * returnJsonHttpResponse
 * @param $success => Boolean
 * @param $data => Object or Array
 */
function returnJsonHttpResponse($success, $data)
{
    //ob_clean();

    //header_remove();

    header('Access-Control-Allow-Origin: *');
    header("Content-type: application/json; charset=utf-8");

    if ($success) {
        http_response_code(200);
    } else {
        http_response_code(500);
    }

    echo json_encode($data);

    exit();
}

$data = $data = [[
    'id' => 1,
    'name' => 'Слава К.',
    'email' => 'merch@gmail.com',
    'role' => 2,
    'avatar' => '/img/ava1.png',
    'password' => '123',
    'resume' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'createdAt' => '2013-10-27 02:00:00',
    'updatedAt' => '2013-10-27 02:00:00',
],
    [
        'id' => 2,
        'name' => 'КФХ “АгроФуд"',
        'email' => 'merch@gmail.com',
        'role' => 2,
        'avatar' => '/img/ava2.png',
        'password' => '123',
        'resume' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'createdAt' => '2013-10-27 02:00:00',
        'updatedAt' => '2013-10-27 02:00:00',
    ],
    [
        'id' => 3,
        'name' => 'Anonimus #0570',
        'email' => 'merch@gmail.com',
        'role' => 3,
        'avatar' => '/img/ava3.png',
        'password' => '123',
        'resume' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'createdAt' => '2013-10-27 02:00:00',
        'updatedAt' => '2013-10-27 02:00:00',
    ],
    [
        'id' => 4,
        'name' => 'Tesla, Inc.',
        'email' => 'merch@gmail.com',
        'role' => 3,
        'avatar' => '/img/ava4.png',
        'password' => '123',
        'resume' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'createdAt' => '2013-10-27 02:00:00',
        'updatedAt' => '2013-10-27 02:00:00',
    ],
    [
        'id' => 5,
        'name' => 'Федор Достоевский',
        'email' => 'merch@gmail.com',
        'role' => 3,
        'avatar' => '/img/ava0.png',
        'password' => '123',
        'resume' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'createdAt' => '2013-10-27 02:00:00',
        'updatedAt' => '2013-10-27 02:00:00',
    ]
];

returnJsonHttpResponse(200, $data);
