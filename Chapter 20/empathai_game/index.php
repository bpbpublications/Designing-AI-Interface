<?php
session_start();

/* =========================
   CONFIG
========================= */
$api_key = "sk-XXXXXXXXX"; // ← replace this with your OPENAI TOKEN

$OPENAI_API_KEY = $api_key;
$openai_url = "https://api.openai.com/v1/chat/completions";
$model = "gpt-5";
  $imgNEWId = bin2hex(random_bytes(8)); 


  //echo $imgNEWId ;

// init session stores
if (!isset($_SESSION['rounds'])) $_SESSION['rounds'] = [];
if (!isset($_SESSION['custom_challenges'])) $_SESSION['custom_challenges'] = [];

/* =========================
   CARD DECKS (FULL VALUES)
========================= */
// Personas (50)
$personas = [
  "Amina – low-vision college student using screen readers",
  "Ravi – hard-of-hearing software tester",
  "Jia – dyslexic high schooler preparing for exams",
  "Leela – elderly woman with arthritis using a tablet",
  "Arjun – partially paralyzed graphic designer",
  "Fatima – blind poet who loves storytelling",
  "Leo – retired teacher relying on voice AI assistant",
  "Priya – autistic teenager sensitive to bright colors",
  "Raj – delivery worker with limited literacy",
  "Tara – wheelchair user who commutes via metro",
  "Imran – visually impaired photographer",
  "Kavi – stammering student learning online",
  "Maya – person with ADHD trying to focus during meetings",
  "Noor – non-native English speaker using translation tools",
  "Sandeep – cognitive decline due to early Alzheimer’s",
  "Lata – cashier with one functional arm",
  "Dhruv – color-blind gamer",
  "Anjali – hearing-impaired HR manager",
  "Naveen – visually impaired coder",
  "Bhavya – motion sickness in VR environments",
  "Gopal – diabetic patient managing health app data",
  "Esha – trans woman facing voice-recognition bias",
  "Sunil – rural user on low bandwidth networks",
  "Ritu – elderly caregiver juggling multiple apps",
  "Aria – visually impaired artist using AR tools",
  "Jiten – taxi driver with limited digital literacy",
  "Sana – person with anxiety during online interviews",
  "Harish – amputee using smart prosthetics",
  "Zara – child with speech delay",
  "Vijay – deaf sign-language interpreter",
  "Pooja – night-shift nurse with eye strain",
  "Meera – Parkinson’s patient using adaptive devices",
  "Nisha – immigrant worker using government forms",
  "Vivek – student with poor concentration span",
  "Kabir – writer with color sensitivity",
  "Hema – visually impaired mother managing home devices",
  "Rohan – teenage gamer with dyslexia",
  "Neel – partially sighted museum guide",
  "Farah – non-verbal child using communication boards",
  "Karan – wheelchair-bound college professor",
  "Mohan – stroke survivor relearning digital tools",
  "Sneha – ADHD product designer using AI assistants",
  "Ishaan – student with memory recall issues",
  "Tashi – blind monk accessing ancient manuscripts",
  "Priyanka – office worker using magnifier apps",
  "Aarav – child with mild autism spectrum disorder",
  "Kavya – color-blind fashion designer",
  "Dev – aging farmer managing smart irrigation",
  "Kiran – taxi dispatcher with repetitive strain injury",
  "Asha – senior user struggling with digital payments"
];

// Challenges (base 100)
$baseChallenges = [
  "Text embedded in images is unreadable by screen readers",
  "Low contrast between text and background colors",
  "Tiny font size with no zoom option",
  "Color-only cues (e.g., red = error)",
  "Missing alt text for images",
  "Dynamic text not read by screen readers",
  "Inconsistent heading structures",
  "Poor keyboard focus visibility",
  "Complex data visualizations with no text alternative",
  "CAPTCHA requiring visual identification",
  "Graphs and charts lack descriptive summaries",
  "Auto-scrolling carousels skip important information",
  "Poor support for high-contrast or dark mode",
  "Links described only as “click here”",
  "Overlapping text when zoomed to 200%",
  "PDF documents without proper tagging",
  "Videos without described visual content",
  "Icons without labels or ARIA roles",
  "Decorative animations distract from main content",
  "AR or VR interfaces not optimized for low vision",
  "No subtitles or captions in videos",
  "Inaccurate auto-captions for accented speech",
  "Audio-only podcasts without transcripts",
  "Notifications rely solely on sound",
  "Voice assistants don’t support sign language",
  "Online meetings lack live captioning",
  "Critical system alerts only use sound cues",
  "No visual indicator for muted microphone",
  "Multi-speaker audio impossible to follow",
  "No tone or text feedback for alarms",
  "Background music masks important dialogue",
  "AI agents fail to detect speech from hearing-impaired users",
  "Speech recognition ignores regional pronunciation",
  "Inaccessible emergency alerts (audio-only)",
  "Tutorials rely on spoken explanations without alternatives",
  "Buttons too small to tap accurately",
  "Drag-and-drop required for key tasks",
  "Interfaces lack keyboard-only navigation",
  "No support for switch devices or eye-tracking",
  "Short time limits for typing or form completion",
  "Hover menus inaccessible on touch screens",
  "Multi-finger gestures needed to trigger actions",
  "Forms reset on accidental page reload",
  "Scrollbars vanish or are too thin to grab",
  "Zoom disables layout responsiveness",
  "Long scrolling lists without shortcuts",
  "Unclear focus indicators on keyboard tabbing",
  "On-screen keyboards obscure important fields",
  "Sticky headers or modals trap focus",
  "No way to undo accidental gestures",
  "Overly dense text with no summaries",
  "Technical jargon without explanation",
  "Inconsistent navigation layout",
  "Missing progress indicators",
  "No option for text simplification",
  "Confusing error messages (“Invalid input”)",
  "Complex sign-up processes",
  "Ambiguous icons with multiple meanings",
  "Long paragraphs without headings or bullets",
  "Time-limited quizzes without pause option",
  "Non-linear user flows cause disorientation",
  "Visual clutter overwhelms attention",
  "Lack of consistent feedback after each step",
  "Sudden page reloads break user memory",
  "Too many notifications interrupt focus",
  "Voice recognition fails for users with speech disorders",
  "Accent bias in voice assistants",
  "Misgendering by AI based on vocal pitch",
  "No alternative to voice input",
  "Chatbots misunderstand non-standard phrasing",
  "Speech synthesis sounds robotic or harsh",
  "AI fails to recognize stammering or pauses",
  "Users with low verbal clarity can’t access speech tools",
  "Limited customization of TTS (speed, tone)",
  "Live caption AI misinterprets tone or humor",
  "Low-bandwidth environments break accessibility tools",
  "Poor lighting affects camera-based AI assistance",
  "Screen glare reduces readability",
  "Outdoor noise disrupts voice assistants",
  "Offline mode removes key accessibility functions",
  "Devices overheat or drain battery during assistive AI use",
  "AI tools unavailable in regional languages",
  "Public touch screens hard to reach for wheelchair users",
  "GPS inaccuracies mislead blind navigation users",
  "Crowded interface on small devices like smartwatches",
  "Chatbots use insensitive or triggering language",
  "Overly formal tone feels intimidating",
  "Lack of empathy in AI-generated responses",
  "Sudden pop-ups cause anxiety",
  "Stressful color palettes (e.g., flashing red)",
  "No calming feedback during long waits",
  "Repetitive error messages frustrate neurodivergent users",
  "AI feedback sounds judgmental (“You failed”)",
  "Notifications designed for urgency cause stress",
  "Lack of content warnings for sensitive topics",
  "Accessibility added at the end of design process",
  "Lack of testing with people with disabilities",
  "Biased AI datasets misrepresent certain demographics",
  "Language models fail to understand local dialects",
  "Accessibility standards (WCAG) not enforced in updates",
  "No budget for inclusive testing",
  "Designers unaware of assistive tech behavior",
  "Lack of cross-device accessibility consistency",
  "Voice interfaces not localized culturally",
  "Bias in facial recognition for darker skin tones"
];
// Merge base + custom challenges for dropdown
$challenges = array_merge($baseChallenges, $_SESSION['custom_challenges']);

// Capabilities (50)
$capabilities = [
  "Image captioning (machine vision)",
  "Speech recognition",
  "Voice synthesis (text-to-speech)",
  "Natural language understanding",
  "Language simplification",
  "Sentiment analysis",
  "Emotion detection",
  "Context-aware personalization",
  "Predictive text completion",
  "Real-time translation",
  "Adaptive interface scaling",
  "Gesture recognition",
  "OCR (Optical Character Recognition)",
  "Auto summarization",
  "Adaptive color contrast",
  "Reinforcement learning feedback loops",
  "Face recognition with privacy filters",
  "Multi-modal understanding (voice + image + text)",
  "Generative adaptation (auto rewrite content)",
  "Topic-based clustering",
  "Content simplification for cognitive load",
  "User intent prediction",
  "Voice cloning with consent",
  "Smart transcription",
  "Real-time captioning",
  "AI sign language recognition",
  "Adaptive timing control",
  "Error-tolerant input correction",
  "Multilingual speech synthesis",
  "Gaze tracking",
  "AI coach for user guidance",
  "Automatic sentiment-based tone adaptation",
  "Haptic feedback generation",
  "AI-driven layout adjustment",
  "User emotion mirroring",
  "Bias detection",
  "Explainability layer (XAI)",
  "Generative audio description",
  "Personalized difficulty calibration",
  "Data summarization dashboard",
  "Visual similarity recognition",
  "Smart context tagging",
  "Attention tracking for fatigue",
  "Auto keyword extraction",
  "Voice-triggered accessibility mode",
  "Adaptive text-to-emoji conversion",
  "Cognitive assistant for task breakdown",
  "Adaptive reward feedback for motivation",
  "Cross-device continuity",
  "AI-powered proofreading for inclusivity"
];

// Principles (50)
$principles = [
  "Perceivable – make information available to all senses",
  "Operable – all actions should be possible via multiple inputs",
  "Understandable – clear, predictable interactions",
  "Robust – compatible with assistive tech",
  "Universal Design – one solution fits all users",
  "Emotional Accessibility – design for comfort & empathy",
  "Human-in-the-Loop AI",
  "Transparency & Explainability",
  "Fairness and Bias Mitigation",
  "Contextual Adaptivity",
  "Error Forgiveness",
  "Cognitive Simplicity",
  "Inclusive Language",
  "Personalization without exclusion",
  "Multimodal Redundancy",
  "Safety & Trust",
  "Data Privacy & Consent",
  "Edge Case Inclusivity",
  "Progressive Disclosure",
  "Non-visual Feedback",
  "Temporal Flexibility (control over time)",
  "Cultural Sensitivity",
  "Calm Technology",
  "Proactive Assistance",
  "Clear Affordance",
  "Ethical Automation",
  "Transparency Ladder",
  "Adaptive Complexity",
  "User Autonomy",
  "Explainable Recommendations",
  "Accessibility-by-Default",
  "Bias Auditing",
  "Layered Feedback",
  "Learnability",
  "Accessibility Continuum",
  "Contextual Error Prevention",
  "Emotional Calibration",
  "Scalable Simplicity",
  "Multi-sensory Design",
  "Trust Anchors",
  "Human Oversight",
  "Sustainable Accessibility",
  "Situational Awareness",
  "Delightful Inclusion",
  "Cross-Device Consistency",
  "Psychological Comfort",
  "Purposeful AI Use",
  "Transparency over Magic",
  "Continuous Learning Feedback",
  "Humane Design"
];

/* =========================
   AJAX HANDLERS
========================= */
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['ajax'])) {
  header('Content-Type: application/json');

  // RESET
  if ($_POST['ajax'] === 'reset') {
    $_SESSION['rounds'] = [];
    $_SESSION['custom_challenges'] = [];
    echo json_encode([
      "ok" => true,
      "reset" => true,
      "sidebarHtml" => renderSidebarHtml([]),
      "lastOutcome" => "",
      "imgID" => $imgNEWId 
    ]);
    exit;
  }

  // ADD CUSTOM CHALLENGE (optional utility route)
  if ($_POST['ajax'] === 'add_challenge') {
    $new = trim($_POST['new_challenge'] ?? "");
    if ($new !== "") {
      // Avoid duplicates
      if (!in_array($new, $_SESSION['custom_challenges'], true) && !in_array($new, $baseChallenges, true)) {
        $_SESSION['custom_challenges'][] = $new;
      }
      echo json_encode(["ok" => true, "added" => $new]);
      exit;
    }
    echo json_encode(["ok" => false, "error" => "Empty challenge"]);
    exit;
  }

  // GENERATE / REFINE
  if ($_POST['ajax'] === '1') {
    $persona = $_POST['persona'] ?? '';
    // If custom option chosen, use custom text
    $challengeSelected = $_POST['challenge'] ?? '';
    $customChallenge = trim($_POST['custom_challenge'] ?? '');
    $challenge = ($challengeSelected === '__CUSTOM__' && $customChallenge !== '') ? $customChallenge : $challengeSelected;
    // If a custom challenge was used, store it for future rounds
    if ($challengeSelected === '__CUSTOM__' && $customChallenge !== '') {
      if (!in_array($customChallenge, $_SESSION['custom_challenges'], true)) {
        $_SESSION['custom_challenges'][] = $customChallenge;
      }
    }

    $ai_capability = $_POST['ai_capability'] ?? '';
    $principle = $_POST['principle'] ?? '';

    $last_outcome = (!empty($_SESSION['rounds'])) ? end($_SESSION['rounds'])['idea'] : "";
    $round_num = count($_SESSION['rounds']) + 1;






    $user_prompt = "You are facilitating the EmpathAI accessibility game.
We are at Round {$round_num}.

Selected cards:
- Persona: {$persona}
- Challenge: {$challenge}
- AI Capability: {$ai_capability}
- Principle/Framework: {$principle}";

    if ($round_num >= 2 && $last_outcome) {
      $user_prompt .= "\n\nLast Outcome (to refine further):\n\"{$last_outcome}\"\n\nRefine this concept using AI solution involving the persona, principle and AI capability mentioned. Keep it inclusive and practical. Improve clarity, add one concrete interaction detail. Keep under 100 words. At the end say in 5-8 words what is improved from last concept. Also a section if there is feature is reduced or got impacted from current idea which is possible, then practicality score will also reduce. Also analyse and write a score (out of 5) on how practically this can be used on ground ex Practicality Score: 3/5. Each section keep in separate <div></div> ";
    } else {
      $user_prompt .= "\n\nGenerate a concise concept (<=100 words) applying these cards to solve the challenge inclusively using AI solution involving the persona, principle and AI capability mentioned. Mention one core interaction detail. Also analyse and write a score (out of 5) on how practically this can be used on ground. Each section keep in separate  <div></div>";
    }
















    // Call OpenAI

 
 


$payload = [
  "model" => defined('OPENAI_MODEL') ? OPENAI_MODEL : "gpt-4o",
  "messages" => [
    ["role" => "system", "content" => "You are EmpathAI, an inclusive design game master who gives crisp, practical concepts."],
        ["role" => "user", "content" => $user_prompt]
  ],
  "temperature" => 0.2
];

$ch = curl_init("https://api.openai.com/v1/chat/completions");
curl_setopt_array($ch, [
  CURLOPT_POST => true,
  CURLOPT_HTTPHEADER => [
    "Authorization: Bearer " . $OPENAI_API_KEY,
    "Content-Type: application/json"
  ],
  CURLOPT_POSTFIELDS => json_encode($payload),
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_TIMEOUT => 30
]);

$response = curl_exec($ch);
   $http_status = curl_getinfo($ch, CURLINFO_HTTP_CODE);

$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$err      = curl_error($ch);
curl_close($ch);

if ($err || $httpCode >= 400) {
  echo json_encode(["error" => "OpenAI API error", "detail" => $err ?: $response]);
  exit;
}

$data = json_decode($response, true);
$text = $data['choices'][0]['message']['content'] ?? 'No summary generated.';

/*
echo json_encode([
  "summary"    => trim($text),
  "confidence" => 0.9
], JSON_UNESCAPED_SLASHES);

*/




    //


    $idea = "No response.";
    if ($err) {
      $idea = "API error: {$err}";
    } else {
      $j = json_decode($response, true);
      $idea = $j['choices'][0]['message']['content'] ?? "No response.";
      if ($http_status >= 400) {
        $idea = "API HTTP $http_status: " . substr($response, 0, 400);
      }
    }






     




    // Store round
    $_SESSION['rounds'][] = [
      "persona" => $persona,
      "challenge" => $challenge,
      "ai_capability" => $ai_capability,
      "principle" => $principle,
      "idea" => $idea,
      "time" => date('Y-m-d H:i:s'),
      "imgID" => $imgNEWId 
    ];

    echo json_encode([
      "ok" => true,
      "round" => $round_num,
      "idea" => $idea,
      "lastOutcomeUsed" => ($round_num >= 2 && !empty($last_outcome)),
      "sidebarHtml" => renderSidebarHtml($_SESSION['rounds']),
      "lastOutcome" => $idea,
      "imgID" => $imgNEWId 
    ]);
    exit;
  }

  echo json_encode(["ok" => false, "error" => "Unknown action"]);
  exit;
}

/* =========================
   HELPERS
========================= */
function renderOptions($arr, $withNumbersPrefix = true) {
  $out = "";
  foreach ($arr as $idx => $val) {
    $num = $idx + 1;
    $label = $withNumbersPrefix ? "#{$num} — {$val}" : $val;
    $safeVal = htmlspecialchars($val, ENT_QUOTES, 'UTF-8');
    $safeLabel = htmlspecialchars($label, ENT_QUOTES, 'UTF-8');
    $out .= "<option value=\"{$safeVal}\">{$safeLabel}</option>";
  }
  return $out;
}
function renderSidebarHtml($rounds) {
  $html = "";
  $count = count($rounds);
  for ($i = $count - 1; $i >= 0; $i--) {
    $r = $rounds[$i];
    $n = $i + 1;
    $html .= '<div class="round-card">';
    $html .= '<h4>Round ' . $n . '</h4>';
   // $html .= '<h4>imgID ' .$r['imgID']. '</h4>';
// $html .= '<img style="width:100%;" src="outputs/' .$r['imgID']. '.png" />';
    $html .= '<p><strong>Persona:</strong> ' . htmlspecialchars($r['persona']) . '</p>';
    $html .= '<p><strong>Challenge:</strong> ' . htmlspecialchars($r['challenge']) . '</p>';
    $html .= '<p><strong>AI:</strong> ' . htmlspecialchars($r['ai_capability']) . '</p>';
    $html .= '<p><strong>Principle:</strong> ' . htmlspecialchars($r['principle']) . '</p>';
    $html .= '<p><strong>Outcome:</strong><br>' . htmlspecialchars_decode(nl2br(htmlspecialchars($r['idea'])), ENT_QUOTES);nl2br(htmlspecialchars($r['idea'])) . '</p>';
    $html .= '</div>';
  }

  
  return $html;
}
$lastOutcome = !empty($_SESSION['rounds']) ? end($_SESSION['rounds'])['idea'] : "";
$lastOutcome = preg_replace('/(<br\s*\/?>\s*){2,}/i', '<br/>', $lastOutcome);
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>EmpathAI </title>
<meta name="viewport" content="width=device-width, initial-scale=1" />



<style>



  :root{--bg:#f6f7f9;--card:#fff;--ink:#1c1c1c;--muted:#666;--accent:#6b8afd;--sidebar:#1f2430;}
  *{box-sizing:border-box}
  body{margin:0;font-family:Inter,system-ui,Arial,sans-serif;background:var(--bg);color:var(--ink);display:flex;min-height:100vh}
  .sidebar{width:300px;background:var(--sidebar);color:#fff;overflow:auto;padding:18px; margin-left: calc(100% - 300px); }
  .main{width:calc(100% - 300px);;position: fixed; padding:28px;display:flex;flex-direction:column;gap:18px; }
  h1{margin:0 0 8px}

  .pane{background:var(--card);border-radius:12px;box-shadow:0 6px 16px rgba(0,0,0,.06);padding:16px}

  label{font-weight:600;margin-top:8px;display:block}

  select,button,textarea,input[type="text"]{width:100%;padding:10px;border-radius:10px;border:1px solid #e1e4ea;font-size:14px}













  textarea{height:130px;resize:vertical}
  button{background:var(--accent);color:#fff;border:none;cursor:pointer;font-weight:600}
  button:disabled{opacity:.6;cursor:not-allowed}
  .btn-reset{background:#e74c3c}
  .row{display:grid;grid-template-columns:1fr 1fr;gap:12px}
  .round-card{background:#2a3040;border-radius:12px;padding:12px;margin-bottom:12px; 
    font-size: 12px; }
  .round-card h4{margin:2px 0 6px;color:#ffd76b}
  .muted{color:var(--muted);font-size:13px}
  .chip{display:inline-block;background:#eef2ff;color:#3b4acb;border-radius:999px;padding:2px 10px;font-size:12px;margin-left:6px}
  .stack{display:flex;gap:10px;flex-wrap:wrap}



select{
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #e1e4ea;
    font-size: 14px;
    height: 40px;
    white-space: pre-wrap;
    background: yellow;
}

#lastOutcomeBox div{

  margin-top: 12px; 
  padding-top: 8px; 
  border-top:1px solid #cecece; 
}





</style>


<script>
window.imgID =  "<?php echo $imgNEWId; ?>"; 


  </script>


 <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <style>
       
        .container {
            background: white;
            border-radius: 20px;
            padding: 40px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        h1 {
            text-align: center;
            color: #333;
            margin-bottom: 30px;
            font-size: 2em;
        }

        .roulette-container {
            position: relative;
            width: 600px;
            height: 600px;
            margin: 0 auto 30px;
        }

        /* Canvas element for drawing roulette */
        #rouletteCanvas {
            display: block;
            border-radius: 50%;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .spin-button {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(135deg, #000000 0%, #333333 100%);
            border: 4px solid #fff;
            color: white;
            font-size: 14px;
            font-weight: bold;
            cursor: pointer;
            z-index: 100;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
            transition: transform 0.2s, box-shadow 0.2s;
            padding: 0; 
        }

        .spin-button:hover {
            transform: translate(-50%, -50%) scale(1.1);
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
        }

        .spin-button:active {
            transform: translate(-50%, -50%) scale(0.95);
        }

        .spin-button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }

        .results {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            max-width: 600px;
            margin: 0 auto;
        }

        .result-field {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .result-field label {
            font-weight: bold;
            color: #333;
            font-size: 14px;
        }

        .result-field input {
            padding: 12px;
            border: 2px solid #ddd;
            border-radius: 8px;
            font-size: 24px;
            text-align: center;
            font-weight: bold;
            background: #f8f9fa;
            color: #333;
        }

        .result-field:nth-child(1) input {
            border-color: #fcbf49;
        }

        .result-field:nth-child(2) input {
            border-color: #f77f00;
        }

        .result-field:nth-child(3) input {
            border-color: #d62828;
        }

        .result-field:nth-child(4) input {
            border-color: #5f0f40;
        }
    </style>




</head>
<body>



<!-- Main -->
<main class="main">





<div class="pane" style="width:58%; background:transparent;box-shadow:none;   ">


 <div class="roulette-container">
            <!-- Canvas element for drawing -->
            <canvas id="rouletteCanvas" width="600" height="600"></canvas>
            <button class="spin-button" id="spinButton">SPIN</button>
        </div>
    




    <form id="gameForm">
      <div class="row">
        <div>
          <label>Persona Card</label>
          <select  name="persona" id="persona" required style="background:#ffd24e">
            <?php echo renderOptions($personas); ?>
          </select>
        </div>
        <div>
          <label>Challenge Card</label>
          <select  name="challenge" id="challengeSelect" required style="background:#93e44c">
            <?php echo renderOptions($challenges); ?>
            <option value="__CUSTOM__">➕ Enter custom challenge…</option>
          </select>
          <input type="text" id="customChallenge" name="custom_challenge" placeholder="Type your custom challenge…" style="display:none;margin-top:6px" />
        </div>
      </div>

      <div class="row">
        <div>
          <label>AI Capability Card</label>
          <select   name="ai_capability" id="ai_capability"  required style="background:#e63946">
            <?php echo renderOptions($capabilities); ?>
          </select>
        </div>
        <div>
          <label>Principle / Framework Card</label>
          <select   name="principle" id="principle" required style="background:#00b4d8">
            <?php echo renderOptions($principles); ?>
          </select>
        </div>
      </div>
<br/>
      <div class="stack">
        <button id="submitBtn" type="submit" style="background:black; color:white; ">Generate / Refine Outcome</button>
      </div>


    </form>



        <div class="results" style="display:none;">
            <div class="result-field">
                <label>Donut 1 Result:</label>
                <input type="text" id="result1" readonly value="-">
            </div>
            <div class="result-field">
                <label>Donut 2 Result:</label>
                <input type="text" id="result2" readonly value="-">
            </div>
            <div class="result-field">
                <label>Donut 3 Result:</label>
                <input type="text" id="result3" readonly value="-">
            </div>
            <div class="result-field">
                <label>Donut 4 Result:</label>
                <input type="text" id="result4" readonly value="-">
            </div>
        </div>
    </div>





    <script>
        $(document).ready(function() {
            const canvas = $('#rouletteCanvas')[0];
            const ctx = canvas.getContext('2d');
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            const donuts = [
                { 
                    outerRadius: 260, 
                    innerRadius: 200, 
                    color: '#ffd24e', 
                    rotation: 0, 
                    speed: 0, 
                    ballAngle: 0, 
                    ballBounce: 0,
                    finalNumber: null,
                    isSpinning: false,
                    resultField: '#result1'
                },
                { 
                    outerRadius: 190, 
                    innerRadius: 130, 
                    color: '#93e44c', 
                    rotation: 0, 
                    speed: 0, 
                    ballAngle: 0, 
                    ballBounce: 0,
                    finalNumber: null,
                    isSpinning: false,
                    resultField: '#result2'
                },
                { 
                    outerRadius: 120, 
                    innerRadius: 70, 
                    color: '#e63946', 
                    rotation: 0, 
                    speed: 0, 
                    ballAngle: 0, 
                    ballBounce: 0,
                    finalNumber: null,
                    isSpinning: false,
                    resultField: '#result3'
                },
                { 
                    outerRadius: 60, 
                    innerRadius: 20, 
                    color: '#00b4d8', 
                    rotation: 0, 
                    speed: 0, 
                    ballAngle: 0, 
                    ballBounce: 0,
                    finalNumber: null,
                    isSpinning: false,
                    resultField: '#result4'
                }
            ];

            const totalNumbers = 50;
            const angleStep = (2 * Math.PI) / totalNumbers;

            function drawOuterNumberRing() {
                const ringInnerRadius = 265; // Just outside donut 1
                const ringOuterRadius = 295; // Outer edge of number ring
                const numberRadius = 280; // Where numbers are positioned

                ctx.save();
                ctx.translate(centerX, centerY);

                // Draw outer ring background
                ctx.beginPath();
                ctx.arc(0, 0, ringOuterRadius, 0, 2 * Math.PI);
                ctx.arc(0, 0, ringInnerRadius, 0, 2 * Math.PI, true);
                ctx.fillStyle = '#f5f5f5';
                ctx.fill();
                ctx.strokeStyle = '#333';
                ctx.lineWidth = 3;
                ctx.stroke();

                // Draw inner border
                ctx.beginPath();
                ctx.arc(0, 0, ringInnerRadius, 0, 2 * Math.PI);
                ctx.strokeStyle = '#333';
                ctx.lineWidth = 2;
                ctx.stroke();

                // Draw cell divider lines
                ctx.strokeStyle = '#666';
                ctx.lineWidth = 1.5;
                for (let i = 0; i < totalNumbers; i++) {
                    const angle = i * angleStep;
                    ctx.beginPath();
                    ctx.moveTo(
                        Math.cos(angle) * ringInnerRadius,
                        Math.sin(angle) * ringInnerRadius
                    );
                    ctx.lineTo(
                        Math.cos(angle) * ringOuterRadius,
                        Math.sin(angle) * ringOuterRadius
                    );
                    ctx.stroke();
                }

                // Draw numbers
                ctx.fillStyle = '#000';
                ctx.font = 'bold 14px Arial';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';

                for (let i = 1; i <= totalNumbers; i++) {
                    const angle = i * angleStep - angleStep / 2;
                    const x = Math.cos(angle) * numberRadius;
                    const y = Math.sin(angle) * numberRadius;

                    ctx.save();
                    ctx.translate(x, y);
                    ctx.rotate(angle + Math.PI / 2);
                    ctx.fillText(i.toString(), 0, 0);
                    ctx.restore();
                }

                ctx.restore();
            }

            function drawDonut(donut) {
                ctx.save();
                ctx.translate(centerX, centerY);
                ctx.rotate(donut.rotation);

                // Draw donut ring
                ctx.beginPath();
                ctx.arc(0, 0, donut.outerRadius, 0, 2 * Math.PI);
                if (donut.innerRadius > 0) {
                    ctx.arc(0, 0, donut.innerRadius, 0, 2 * Math.PI, true);
                }
                ctx.fillStyle = donut.color;
                ctx.fill();
                ctx.strokeStyle = '#333';
                ctx.lineWidth = 3;
                ctx.stroke();

                // Draw cell divider lines
                ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
                ctx.lineWidth = 2;
                for (let i = 0; i < totalNumbers; i++) {
                    const angle = i * angleStep;
                    ctx.beginPath();
                    const startRadius = donut.innerRadius > 0 ? donut.innerRadius : 0;
                    ctx.moveTo(
                        Math.cos(angle) * startRadius,
                        Math.sin(angle) * startRadius
                    );
                    ctx.lineTo(
                        Math.cos(angle) * donut.outerRadius,
                        Math.sin(angle) * donut.outerRadius
                    );
                    ctx.stroke();
                }

                // Numbers removed from spinning donuts

                ctx.restore();
            }

            function drawBall(donut) {


                const ballRadius = (donut.outerRadius + donut.innerRadius) / 2;
                const bounceScale = donut.isSpinning ? (1 + donut.ballBounce * 0.3) : 1;
                
                // Calculate ball size relative to cell width
                const donutWidth = donut.outerRadius - donut.innerRadius;
                const cellArcLength = ballRadius * angleStep; // Arc length of one cell
                const ballSize = Math.min(donutWidth * 0.2, cellArcLength * 0.7) * bounceScale;

                const x = centerX + Math.cos(donut.ballAngle) * ballRadius;
                const y = centerY + Math.sin(donut.ballAngle) * ballRadius;

                // Ball shadow
                ctx.beginPath();
                ctx.arc(x + 2, y + 2, ballSize, 0, 2 * Math.PI);
                ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
                ctx.fill();

                // Ball gradient
                const gradient = ctx.createRadialGradient(x - ballSize/3, y - ballSize/3, ballSize/4, x, y, ballSize);
                gradient.addColorStop(0, '#088cadff');
                gradient.addColorStop(1, '#000000');

                ctx.beginPath();
                ctx.arc(x, y, ballSize, 0, 2 * Math.PI);
                ctx.fillStyle = gradient;
                ctx.fill();
                ctx.strokeStyle = '#ffffff';
                ctx.lineWidth = 2;
                ctx.stroke();






            }

            function render() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // Draw outer static number ring first
                drawOuterNumberRing();

                // Draw all donuts from outer to inner
                donuts.forEach(donut => {
                    drawDonut(donut);
                });

                // Draw all balls
                donuts.forEach(donut => {
                    drawBall(donut);
                });
            }

            // Animation loop
            function animate() {
                render();
                requestAnimationFrame(animate);
            }

            // Spin a single donut
            function spinDonut(donut, index) {
                donut.isSpinning = true;
                const baseSpeed = 0.08 + index * 0.02;
                donut.speed = baseSpeed + Math.random() * 0.03;
                const spinDuration = 3000 + Math.random() * 2000;
                const startTime = Date.now();

                donut.index = index;

                // Pre-calculate final number
                donut.finalNumber = Math.floor(Math.random() * totalNumbers) + 1;
                const targetAngle = (donut.finalNumber - 1) * angleStep + angleStep / 2;
                const extraRotations = 5 + Math.floor(Math.random() * 3);
                const targetRotation = extraRotations * 2 * Math.PI + targetAngle;

                function animateSpin() {
                    if (!donut.isSpinning) return;

                    const elapsed = Date.now() - startTime;
                    const progress = Math.min(elapsed / spinDuration, 1);

                    // Easing function for smooth deceleration
                    const easeOut = 1 - Math.pow(1 - progress, 3);

                    donut.rotation = targetRotation * easeOut;
                    
                    // Update ball position and bounce
                    const currentSpeed = donut.speed * (1 - easeOut);

                    donut.ballAngle = donut.rotation;

                    donut.ballBounce = Math.sin(Date.now() * 0.02) * (currentSpeed / donut.speed);

                    if (progress < 1) {
                        requestAnimationFrame(animateSpin);
                    } else {
                        stopDonut(donut);
                    }
                }

                animateSpin();
            }

            // Stop donut and show result
            function stopDonut(donut) {

                

                donut.isSpinning = false;
                donut.speed = 0;
                donut.ballBounce = 0;

                /*

                const finalAngle = (donut.finalNumber - 1) * angleStep + angleStep / 2;
                donut.ballAngle = finalAngle - donut.rotation;

                */




                // Update result field
                $(donut.resultField).val(donut.finalNumber);

             //alert(donut.index)

          if(donut.index == 0){document.getElementById("persona").selectedIndex =  (donut.finalNumber-1)}
          if(donut.index == 1){document.getElementById("challengeSelect").selectedIndex =  (donut.finalNumber-1)}
          if(donut.index == 2){document.getElementById("ai_capability").selectedIndex =  (donut.finalNumber-1)}
          if(donut.index == 3){document.getElementById("principle").selectedIndex =  (donut.finalNumber-1)}



            }

            // Spin button click handler
            $('#spinButton').on('click', function() {
                if (donuts.some(d => d.isSpinning)) return;

                $(this).prop('disabled', true);

                // Clear previous results
                $('.result-field input').val('-');

                // Spin all donuts with different speeds
                donuts.forEach((donut, index) => {
                    spinDonut(donut, index);

                   
                    
                });

                // Re-enable button after longest possible spin
                setTimeout(() => {
                    $('#spinButton').prop('disabled', false);
                }, 5500);
            });

            // Start animation loop
            animate();
        });
    </script>






</div>

<h1 style="position:absolute; top: 20px; ;eft: 20px; ">EmpathAI <span class="chip"></span></h1>

  <div class="pane" style="width:40%; position:absolute; right: 20px;  ">
    <div class="stack" style="justify-content:space-between;align-items:center">
      
      <button id="resetBtn" class="btn-reset" title="Clear all rounds and start fresh">Reset Game</button>
    </div>
    <p class="muted">Pick cards, generate an outcome and refine further.</p>


      <!-- -->



<br/>
    <?php if ($lastOutcome): ?>
      
      <div class="pane" style="background:#fafbff;border:1px dashed #dfe3ff;; height: 285px; height: auto;">
        
        <strong>  Outcome:</strong>


                      <?php


                          $input_string =  htmlspecialchars_decode($lastOutcome, ENT_QUOTES);
                          $score = '';

                          // Regular expression pattern to find a number followed by a slash and another number
                          $pattern = '/[\d.]+\/\d+/'; 


                         
                          if (preg_match($pattern, $input_string, $matches)) {
                              $score = $matches[0];
                              echo $score; // Output: 5/5
                          } else {
                              echo "Score not found.";
                          }




                          ?>
       
        <div id="lastOutcomeBox" style="max-height:height: 285px; ;overflow:auto;margin-top:8px;">
          <?php 
          
          
         

// Use preg_replace to replace two or more <br> tags (with optional whitespace and closing slash)
// with a single <br/> tag. The 'i' flag makes the match case-insensitive.
$lastOutcome = preg_replace('/(<br\s*\/?>\s*){2,}/i', '<br/>', $lastOutcome);
 echo htmlspecialchars_decode($lastOutcome, ENT_QUOTES);






          ?>
        </div>
      </div>
    <?php else: ?>
      <div id="lastOutcomeBox" style="display:none;"></div>
    <?php endif; ?>



    

  </div>

  <div class="pane" style="display:none;">
    <h3>💡 Outcome</h3>
    <textarea id="outcome" readonly placeholder="Your generated/refined concept will appear here..."></textarea>
  </div>
</main>



<!-- Sidebar: Round Tracker -->
<aside class="sidebar" >
  <h2> EmpathAI Rounds</h2>
  <div id="rounds">
    <?php echo renderSidebarHtml($_SESSION['rounds'] ?? []); ?>
  </div>
</aside>


<script>
const form = document.getElementById('gameForm');
const btn = document.getElementById('submitBtn');
const outcome = document.getElementById('outcome');
const rounds = document.getElementById('rounds');
const resetBtn = document.getElementById('resetBtn');
const challengeSelect = document.getElementById('challengeSelect');
const customChallenge = document.getElementById('customChallenge');
const lastOutcomeBox = document.getElementById('lastOutcomeBox');

// Toggle custom challenge input
challengeSelect.addEventListener('change', () => {
  if (challengeSelect.value === '__CUSTOM__') {
    customChallenge.style.display = 'block';
    customChallenge.required = true;
    customChallenge.focus();
  } else {
    customChallenge.style.display = 'none';
    customChallenge.required = false;
    customChallenge.value = '';
  }
});

// Submit (Generate / Refine)
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  btn.disabled = true; btn.textContent = 'Thinking…';

  const fd = new FormData(form);
  fd.append('ajax', '1');

  try {
    const res = await fetch(location.href, { method: 'POST', body: fd });
    const data = await res.json();
    if (!data.ok) throw new Error(data.error || 'API error');

    outcome.value = data.idea || '';
    rounds.innerHTML = data.sidebarHtml || '';

    if (data.lastOutcome) {
      lastOutcomeBox.style.display = 'block';
      lastOutcomeBox.innerHTML = (data.lastOutcome || '').replace(/\n/g, '<br>');
       btn.disabled = false; btn.textContent = 'Generate / Refine Outcome';


    }
  } catch (err) {
    outcome.value = 'Error: ' + err.message;
  } finally {
   //window.reload();
    btn.disabled = false; btn.textContent = 'Generate / Refine Outcome';
  }
});

// Reset game
resetBtn.addEventListener('click', async () => {
  if (!confirm('Reset all rounds and clear the sidebar?')) return;
  const fd = new FormData();
  fd.append('ajax', 'reset');
  resetBtn.disabled = true; resetBtn.textContent = 'Resetting…';
  try {
    const res = await fetch(location.href, { method: 'POST', body: fd });
    const data = await res.json();
    if (!data.ok && !data.reset) throw new Error('Reset failed');
    rounds.innerHTML = data.sidebarHtml || '';
    outcome.value = '';
    // Hide last outcome
    lastOutcomeBox.style.display = 'none';
    lastOutcomeBox.innerHTML = '';
    // Reset selects and custom field
    form.reset();
    customChallenge.style.display = 'none';
    customChallenge.required = false;
    customChallenge.value = '';
  } catch (err) {
    alert('Error: ' + err.message);
  } finally {
    resetBtn.disabled = false; resetBtn.textContent = 'Reset Game';
  }
});
</script>
</body>
</html>
