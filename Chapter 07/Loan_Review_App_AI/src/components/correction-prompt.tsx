import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

interface CorrectionPromptProps {
  question: string;
  onAddFamilyIncome: () => void;
  onAddCommunityGuarantee: () => void;
  onUploadCollateral: () => void;
}

export function CorrectionPrompt({ 
  question, 
  onAddFamilyIncome, 
  onAddCommunityGuarantee, 
  onUploadCollateral 
}: CorrectionPromptProps) {
  return (
    <Card className="shadow-md border-0 bg-white">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Correction Prompt:</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-muted-foreground mb-4">"{question}"</p>
        <div className="flex flex-wrap gap-3">
          <Button 
            variant="outline" 
            onClick={onAddFamilyIncome}
            className="border-purple-200 text-purple-700 hover:bg-purple-50"
          >
            [ Add Family Income Proof ]
          </Button>
          <Button 
            variant="outline" 
            onClick={onAddCommunityGuarantee}
            className="border-purple-200 text-purple-700 hover:bg-purple-50"
          >
            [ Add Community Guarantee ]
          </Button>
          <Button 
            variant="outline" 
            onClick={onUploadCollateral}
            className="border-purple-200 text-purple-700 hover:bg-purple-50"
          >
            [ Upload Collateral ]
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}