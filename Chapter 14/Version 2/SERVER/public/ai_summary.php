<?php
require __DIR__ . '/_cors.php';
header('Content-Type: application/json');

$body = file_get_contents('php://input');
$payload = json_decode($body, true) ?: [];
$period     = $payload['period']     ?? 'Q?';
$sales      = $payload['sales']      ?? 0;
$growthPct  = $payload['growthPct']  ?? 0;
$riskAlerts = $payload['riskAlerts'] ?? 0;

$summary = sprintf(
  "Summary (%s): Sales %s; growth %.1f%% with %d risk alerts. Focus on Orion-XL, Nova-Mini.",
  $period,
  number_format((float)$sales, 0, '.', ','),
  (float)$growthPct,
  (int)$riskAlerts
);

echo json_encode([
  "summary"    => $summary,
  "confidence" => 0.91
], JSON_UNESCAPED_SLASHES);

?>