import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Filter, SlidersHorizontal, X } from 'lucide-react';

export function FilterBar() {
  const activeFilters = [
    { id: '1', label: 'Electronics', removable: true },
    { id: '2', label: '$100 - $500', removable: true },
    { id: '3', label: '4+ Stars', removable: true }
  ];

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 bg-muted/30 rounded-lg border">
      <div className="flex flex-wrap items-center gap-3">
        <Button variant="outline" size="sm" className="gap-2">
          <Filter className="w-4 h-4" />
          Filters
        </Button>
        
        <div className="h-4 w-px bg-border hidden sm:block" />
        
        <div className="flex flex-wrap items-center gap-2">
          {activeFilters.map((filter) => (
            <Badge 
              key={filter.id} 
              variant="secondary" 
              className="gap-1 pr-1 bg-background shadow-sm"
            >
              {filter.label}
              {filter.removable && (
                <button className="ml-1 hover:bg-muted rounded-full p-0.5">
                  <X className="w-3 h-3" />
                </button>
              )}
            </Badge>
          ))}
          
          {activeFilters.length > 0 && (
            <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
              Clear all
            </Button>
          )}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm" className="gap-2">
          <SlidersHorizontal className="w-4 h-4" />
          More filters
        </Button>
        
        <Select defaultValue="recommended">
          <SelectTrigger className="w-[140px] h-8">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recommended">AI Recommended</SelectItem>
            <SelectItem value="popular">Most Popular</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}