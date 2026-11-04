import { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Slider } from './ui/slider';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Sparkles, FileText, Wand2 } from 'lucide-react';

interface TransformationOptions {
  formality: number;
  creativity: number;
}

export function WritingAssistant() {
  const [inputText, setInputText] = useState("The meeting went really well and everyone was happy with the results.");
  const [formality, setFormality] = useState([50]);
  const [creativity, setCreativity] = useState([50]);
  const [transformedText, setTransformedText] = useState("");

  // Mock AI transformation function
  const transformText = (text: string, options: TransformationOptions): string => {
    if (!text.trim()) return "";

    const { formality: formalLevel, creativity: creativeLevel } = options;
    
    // Mock transformations based on formality and creativity levels
    let result = text;

    // Formality transformations
    if (formalLevel < 30) {
      // Very informal
      result = result
        .replace(/The meeting/g, "So the meeting")
        .replace(/went really well/g, "was awesome")
        .replace(/everyone was happy/g, "everyone loved it")
        .replace(/with the results/g, "with how things turned out");
    } else if (formalLevel > 70) {
      // Very formal
      result = result
        .replace(/The meeting/g, "The scheduled conference")
        .replace(/went really well/g, "proceeded exceptionally successfully")
        .replace(/everyone was happy/g, "all stakeholders expressed satisfaction")
        .replace(/with the results/g, "with the achieved outcomes");
    }

    // Creativity transformations
    if (creativeLevel < 30) {
      // Very straightforward
      result = result
        .replace(/went really well/g, "was successful")
        .replace(/everyone was happy/g, "participants were satisfied");
    } else if (creativeLevel > 70) {
      // Very creative
      if (formalLevel < 50) {
        result = result
          .replace(/The meeting/g, "Our brainstorming session")
          .replace(/went really well/g, "sparked incredible energy")
          .replace(/everyone was happy/g, "the whole team was buzzing")
          .replace(/with the results/g, "with the breakthrough ideas we generated");
      } else {
        result = result
          .replace(/The meeting/g, "The collaborative symposium")
          .replace(/went really well/g, "yielded remarkable insights")
          .replace(/everyone was happy/g, "all participants demonstrated enthusiasm")
          .replace(/with the results/g, "regarding the innovative solutions developed");
      }
    }

    return result;
  };

  useEffect(() => {
    const transformed = transformText(inputText, {
      formality: formality[0],
      creativity: creativity[0]
    });
    setTransformedText(transformed);
  }, [inputText, formality, creativity]);

  const getFormalityLabel = (value: number) => {
    if (value < 30) return "Casual";
    if (value < 70) return "Balanced";
    return "Formal";
  };

  const getCreativityLabel = (value: number) => {
    if (value < 30) return "Direct";
    if (value < 70) return "Balanced";
    return "Creative";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Wand2 className="w-8 h-8 text-purple-600" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Creative Writing Assistant
            </h1>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transform your writing in real-time. Adjust formality and creativity to find the perfect tone for any context.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-semibold">Your Text</h2>
            </div>
            
            <Textarea
              placeholder="Type your sentence or paragraph here..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="min-h-[200px] resize-none"
            />

            {/* Controls */}
            <div className="space-y-6 pt-4 border-t">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="flex items-center gap-2">
                    <span>Formality</span>
                    <Badge variant="outline">{getFormalityLabel(formality[0])}</Badge>
                  </Label>
                  <span className="text-sm text-muted-foreground">{formality[0]}%</span>
                </div>
                <Slider
                  value={formality}
                  onValueChange={setFormality}
                  max={100}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Casual</span>
                  <span>Formal</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="flex items-center gap-2">
                    <span>Creativity</span>
                    <Badge variant="outline">{getCreativityLabel(creativity[0])}</Badge>
                  </Label>
                  <span className="text-sm text-muted-foreground">{creativity[0]}%</span>
                </div>
                <Slider
                  value={creativity}
                  onValueChange={setCreativity}
                  max={100}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Direct</span>
                  <span>Creative</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Output Section */}
          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <h2 className="text-xl font-semibold">AI Rewrite</h2>
            </div>
            
            <div className="min-h-[200px] p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg border">
              {transformedText ? (
                <p className="text-foreground leading-relaxed">{transformedText}</p>
              ) : (
                <p className="text-muted-foreground italic">Your rewritten text will appear here...</p>
              )}
            </div>

            {/* Style Indicators */}
            <div className="flex flex-wrap gap-2 pt-4 border-t">
              <Badge 
                variant={formality[0] < 30 ? "default" : "secondary"}
                className="flex items-center gap-1"
              >
                <span className="w-2 h-2 rounded-full bg-current"></span>
                Casual Tone
              </Badge>
              <Badge 
                variant={formality[0] > 70 ? "default" : "secondary"}
                className="flex items-center gap-1"
              >
                <span className="w-2 h-2 rounded-full bg-current"></span>
                Formal Tone
              </Badge>
              <Badge 
                variant={creativity[0] > 70 ? "default" : "secondary"}
                className="flex items-center gap-1"
              >
                <span className="w-2 h-2 rounded-full bg-current"></span>
                Creative Style
              </Badge>
            </div>
          </Card>
        </div>

        {/* Quick Examples */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Try These Examples</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "The project deadline is approaching fast.",
              "I need to discuss this with my team.",
              "The presentation went better than expected.",
              "We should consider alternative solutions.",
              "The client feedback was very positive.",
              "This solution might work for our needs."
            ].map((example, index) => (
              <button
                key={index}
                onClick={() => setInputText(example)}
                className="p-3 text-left bg-muted hover:bg-muted/80 rounded-lg transition-colors text-sm"
              >
                {example}
              </button>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}