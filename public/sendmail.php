<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// POSTリクエストのみ受け付ける
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// JSONデータを取得
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// バリデーション
if (empty($data['name']) || empty($data['email']) || empty($data['message'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => '必須項目が入力されていません']);
    exit;
}

// メールアドレスの検証
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'メールアドレスの形式が正しくありません']);
    exit;
}

// メール送信先
$to = 'info@twopiece-holdings.com';

// 件名
$subject = '【お問い合わせ】' . ($data['company'] ? $data['company'] . ' - ' : '') . $data['name'] . '様より';

// メール本文
$message = "以下の内容でお問い合わせがありました。\n\n";
$message .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
$message .= "会社名: " . ($data['company'] ?: '未入力') . "\n";
$message .= "お名前: " . $data['name'] . "\n";
$message .= "メールアドレス: " . $data['email'] . "\n";
$message .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
$message .= "お問い合わせ内容:\n";
$message .= $data['message'] . "\n";

// メールヘッダー
$headers = [
    'From: ' . $data['email'],
    'Reply-To: ' . $data['email'],
    'X-Mailer: PHP/' . phpversion(),
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit'
];

// メール送信
$success = mail($to, $subject, $message, implode("\r\n", $headers));

if ($success) {
    echo json_encode([
        'success' => true,
        'message' => 'メールを送信しました'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'メールの送信に失敗しました'
    ]);
}
?>

