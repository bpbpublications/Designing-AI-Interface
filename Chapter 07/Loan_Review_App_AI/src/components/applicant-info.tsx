import { Card, CardContent } from "./ui/card";

interface ApplicantInfoProps {
  applicant: string;
  loanType: string;
  location: string;
  requestedAmount: string;
}

export function ApplicantInfo({ applicant, loanType, location, requestedAmount }: ApplicantInfoProps) {
  return (
    <Card className="shadow-md border-0 bg-white">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Applicant:</span>
              <span className="font-medium">{applicant}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Loan Type:</span>
              <span className="font-medium text-purple-600">{loanType}</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground text-purple-600">Location:</span>
              <span className="font-medium">{location}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Requested Amount:</span>
              <span className="font-medium text-orange-600">{requestedAmount}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}