<?php

require __DIR__ . '/_cors.php';
require __DIR__ . '/config.php';
header('Content-Type: application/json');

$body = json_decode(file_get_contents('php://input'), true) ?: [];
$period     = $body['period']     ?? 'Q?';
$sales      = $body['sales']      ?? 0;
$growthPct  = $body['growthPct']  ?? 0;
$riskAlerts = $body['riskAlerts'] ?? 0;

$userPrompt = sprintf(
  "Create a one-sentence executive insight from: period=%s, sales=%s, growthPct=%.1f, riskAlerts=%d. Be crisp and factual.",
  $period,
  number_format((float)$sales, 0, '.', ','),
  (float)$growthPct,
  (int)$riskAlerts
);

$payload = [
  "model" => defined('OPENAI_MODEL') ? OPENAI_MODEL : "gpt-4o-mini",
  "messages" => [
    ["role" => "system", "content" => "You are a concise analytics assistant. Reply with one actionable sentence."],
    ["role" => "user",   "content" => $userPrompt]
  ],
  "temperature" => 0.2
];

$ch = curl_init("https://api.openai.com/v1/chat/completions");
curl_setopt_array($ch, [
  CURLOPT_POST => true,
  CURLOPT_HTTPHEADER => [
    "Authorization: Bearer " . OPENAI_API_KEY,
    "Content-Type: application/json"
  ],
  CURLOPT_POSTFIELDS => json_encode($payload),
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_TIMEOUT => 30
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$err      = curl_error($ch);
curl_close($ch);

if ($err || $httpCode >= 400) {
  echo json_encode(["error" => "OpenAI API error", "detail" => $err ?: $response]);
  exit;
}

$data = json_decode($response, true);
$text = $data['choices'][0]['message']['content'] ?? 'No summary generated.';

echo json_encode([
  "summary"    => trim($text),
  "confidence" => 0.9
], JSON_UNESCAPED_SLASHES);

?>