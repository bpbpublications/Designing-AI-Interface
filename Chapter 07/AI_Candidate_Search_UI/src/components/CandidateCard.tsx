import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star, MapPin, Calendar, CheckCircle, AlertTriangle, MessageSquare, Phone, Mail } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  isStrength: boolean;
}

interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
}

interface CandidateProps {
  id: string;
  name: string;
  title: string;
  location: string;
  avatar?: string;
  matchScore: number;
  skills: Skill[];
  experience: Experience[];
  strengths: string[];
  weaknesses: string[];
  email: string;
  phone: string;
}

export function CandidateCard({ candidate }: { candidate: CandidateProps }) {
  const getMatchColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getMatchBgColor = (score: number) => {
    if (score >= 80) return "bg-green-50 border-green-200";
    if (score >= 60) return "bg-yellow-50 border-yellow-200";
    return "bg-red-50 border-red-200";
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16 shadow-md">
              <AvatarImage src={candidate.avatar} alt={candidate.name} />
              <AvatarFallback className="text-lg">
                {candidate.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h3 className="text-xl font-semibold">{candidate.name}</h3>
              <p className="text-muted-foreground">{candidate.title}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {candidate.location}
                </div>
                <div className="flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  {candidate.email}
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="h-4 w-4" />
                  {candidate.phone}
                </div>
              </div>
            </div>
          </div>
          
          {/* Match Score */}
          <div className={`p-4 rounded-xl border-2 ${getMatchBgColor(candidate.matchScore)}`}>
            <div className="text-center">
              <div className={`text-3xl font-bold ${getMatchColor(candidate.matchScore)}`}>
                {candidate.matchScore}%
              </div>
              <div className="text-sm text-muted-foreground mt-1">Match Score</div>
              <div className="flex items-center justify-center gap-1 mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-4 w-4 ${
                      star <= Math.ceil(candidate.matchScore / 20)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Skills */}
        <div>
          <h4 className="font-semibold mb-3 flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-blue-600" />
            Skills Assessment
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {candidate.skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <Badge variant={skill.isStrength ? "default" : "secondary"}>
                    {skill.level}%
                  </Badge>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
        </div>

        {/* Strengths and Weaknesses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Strengths */}
          <Card className="border-green-200 bg-green-50/50">
            <CardHeader className="pb-3">
              <h4 className="font-semibold text-green-800 flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Key Strengths
              </h4>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-2">
                {candidate.strengths.map((strength, index) => (
                  <li key={index} className="text-sm text-green-700 flex items-start gap-2">
                    <CheckCircle className="h-3 w-3 mt-0.5 text-green-600 flex-shrink-0" />
                    {strength}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Areas for Development */}
          <Card className="border-orange-200 bg-orange-50/50">
            <CardHeader className="pb-3">
              <h4 className="font-semibold text-orange-800 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                Areas for Development
              </h4>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-2">
                {candidate.weaknesses.map((weakness, index) => (
                  <li key={index} className="text-sm text-orange-700 flex items-start gap-2">
                    <AlertTriangle className="h-3 w-3 mt-0.5 text-orange-600 flex-shrink-0" />
                    {weakness}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Experience */}
        <div>
          <h4 className="font-semibold mb-3 flex items-center gap-2">
            <Calendar className="h-4 w-4 text-blue-600" />
            Recent Experience
          </h4>
          <div className="space-y-4">
            {candidate.experience.map((exp, index) => (
              <Card key={index} className="border-l-4 border-l-blue-500 bg-gray-50/50">
                <CardContent className="pt-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h5 className="font-semibold">{exp.title}</h5>
                      <p className="text-sm text-muted-foreground">{exp.company}</p>
                    </div>
                    <Badge variant="outline">{exp.duration}</Badge>
                  </div>
                  <p className="text-sm text-gray-600">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-4 border-t">
          <Button className="flex-1" size="lg">
            <CheckCircle className="h-4 w-4 mr-2" />
            Schedule Interview
          </Button>
          <Button variant="outline" size="lg">
            <MessageSquare className="h-4 w-4 mr-2" />
            Send Message
          </Button>
          <Button variant="outline" size="lg">
            <Star className="h-4 w-4 mr-2" />
            Save Candidate
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}