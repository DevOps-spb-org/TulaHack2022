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
    'title' => 'Греческая ваза',
    'category' => 'Антиквариат',
    'description' => 'Ваза I в до н.э., растоможена. Достал со дна политик.',
    'deadline' => '2022-04-26 16:30:00',
    'image' => '/img/lot1.png',
    'isDone' => false,
    'status' => 1,
    'owner' => 1,
    'worker' => null,
    'createdAt' => '2022-01-15 02:00:00',
    'updatedAt' => '2022-01-15 02:00:00',
    'USER' => [
        'name' => 'Слава К.',
        'avatar' => '/img/ava1.png'
    ]
],
    [
        'id' => 2,
        'title' => 'VW Golf VI GTI 2.0',
        'category' => 'Автомобиль',
        'description' => 'Культовый хотхэтч немецкой сборки на 245 л.с.',
        'deadline' => '2022-04-26 16:30:00',
        'image' => '/img/lot2.png',
        'isDone' => false,
        'status' => 1,
        'owner' => 2,
        'worker' => 6,
        'createdAt' => '2022-01-17 02:00:00',
        'updatedAt' => '2022-01-17 02:00:00',
        'USER' => [
            'name' => 'КФХ “АгроФуд”',
            'avatar' => '/img/ava2.png'
        ]
    ],
    [
        'id' => 3,
        'title' => 'Коллекционная монета',
        'category' => 'Антиквариат',
        'description' => 'Швейцарская монета 20 раппенов 2011 года.',
        'deadline' => '2022-04-26 16:30:00',
        'image' => '/img/lot3.png',
        'isDone' => false,
        'status' => 3,
        'owner' => 5,
        'worker' => 7,
        'createdAt' => '2022-01-19 02:00:00',
        'updatedAt' => '2022-01-19 02:00:00',
        'USER' => [
            'name' => 'Anonimus #0570',
            'avatar' => '/img/ava3.png'
        ]
    ],
    [
        'id' => 4,
        'title' => 'BitMonkey NFT',
        'category' => 'Антиквариат',
        'description' => 'Известный NFT-токен на холсте маслом.',
        'deadline' => '2022-04-26 16:30:00',
        'image' => '/img/lot4.jpeg',
        'isDone' => false,
        'status' => 3,
        'owner' => 5,
        'worker' => 7,
        'createdAt' => '2022-01-19 02:00:00',
        'updatedAt' => '2022-01-19 02:00:00',
        'USER' => [
            'name' => 'Tesla, Inc.',
            'avatar' => '/img/ava4.png'
        ]
    ]
];

returnJsonHttpResponse(200, $data);
