<?php
require $_SERVER['DOCUMENT_ROOT'] . '/api/db_config.php';

header('Access-Control-Allow-Origin: *');

$login = htmlspecialchars($_POST['login']);
$password = htmlspecialchars($_POST['password']);

$error = 0;
$error_text = "";
$params = (object)[];

if (strlen($login) > 72) {
    $error = 1;
    $error_text = "Ошибка, логин или пароль введен неверно";
}
if (strlen($password) > 72) {
    $error = 1;
    $error_text = "Ошибка, логин или пароль введен неверно";
}

if($login == "1234" && $password == "1234"){

    $params = (object)[

        'token' => "qqq",
        'ID' => 1,
        'title' => "Людмила Васильевна И.",
        'login' => $login,
        'email' => "test@test.ru",
        'role' => "user",
        'position' => "Классный руководитель",
        'work' => "ГБОУ дополнительного профессионального образования города Москвы “Московский центр “Патриот.Спорт”",

    ];

}
else
    $error = 1;

$content = (object)[
    'entry' => (object)[],
    'error' => $error,
    'error_text' => $error_text,
    'result' => $params,
];

echo json_encode($content);