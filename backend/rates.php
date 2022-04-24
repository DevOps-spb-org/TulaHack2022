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
    'comment' => '2000',
    'user_id' => 1,
    'task_id' => 1,
],
    [
        'id' => 2,
        'comment' => '3000',
        'user_id' => 2,
        'task_id' => 1,
    ],
    [
        'id' => 3,
        'comment' => '5000',
        'user_id' => 1,
        'task_id' => 1,
    ]
];

returnJsonHttpResponse(200, $data);
