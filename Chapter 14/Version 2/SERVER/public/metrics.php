<?php
require __DIR__ . '/_cors.php';
header('Content-Type: application/json');

echo json_encode([
  "period"    => "Q3",
  "sales"     => 1245000,
  "growthPct" => 12.4,
  "riskAlerts"=> 2,
  "topSkus"   => [
    ["name" => "Orion-XL",  "revenue" => 245000],
    ["name" => "Nova-Mini", "revenue" => 182000],
    ["name" => "Vega-Pro",  "revenue" => 171000]
  ]
], JSON_UNESCAPED_SLASHES);

?>