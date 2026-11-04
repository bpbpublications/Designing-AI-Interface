import { Search, Bell, User, Shield, Heart, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';

export function HealthHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Heart className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-lg hidden sm:block">HealthAI</span>
          </div>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-xl relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Search symptoms, conditions, treatments..." 
            className="pl-10 bg-input-background border-0 shadow-sm"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="gap-1 bg-accent/50 hidden sm:flex">
            <Shield className="w-3 h-3" />
            HIPAA Compliant
          </Badge>
          
          <Button variant="ghost" size="icon" className="relative hidden sm:flex">
            <Bell className="w-5 h-5" />
            <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center text-xs bg-destructive">
              2
            </Badge>
          </Button>
          
          <Button variant="ghost" size="icon">
            <User className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}