<?php
$response = [
    'status' => 'success',
    'message' => 'All processes ok.',
    'data' => [
        'server' => 'running',
        'database' => 'running'
    ]
    ];

header('Content-type: application/json'); 

echo json_encode($response);