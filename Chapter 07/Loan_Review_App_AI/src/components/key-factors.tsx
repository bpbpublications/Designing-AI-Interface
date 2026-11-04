import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface KeyFactorsProps {
  factors: string[];
}

export function KeyFactors({ factors }: KeyFactorsProps) {
  return (
    <Card className="shadow-md border-0 bg-white">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Key Factors Considered:</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="space-y-2">
          {factors.map((factor, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-muted-foreground mt-2">•</span>
              <span className="text-muted-foreground">{factor}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}