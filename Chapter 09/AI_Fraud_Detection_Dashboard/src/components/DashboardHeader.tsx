import { Shield, Bell, User, Settings } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export function DashboardHeader() {
  return (
    <header className="border-b bg-card px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-semibold">SecureBank AI</h1>
              <p className="text-sm text-muted-foreground">Fraud Detection System</p>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            AI System Active
          </Badge>
          
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs">3</Badge>
          </Button>
          
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          
          <div className="flex items-center space-x-2 border-l pl-4">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback>SJ</AvatarFallback>
            </Avatar>
            <div className="text-sm">
              <p className="font-medium">Sarah Johnson</p>
              <p className="text-muted-foreground">Compliance Officer</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}