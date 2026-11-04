import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Star, Heart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  badge?: string;
  isRecommended?: boolean;
}

export function ProductCard({ 
  name, 
  price, 
  originalPrice, 
  image, 
  rating, 
  reviewCount, 
  badge,
  isRecommended = false 
}: ProductCardProps) {
  return (
    <Card className="group relative overflow-hidden bg-card shadow-sm hover:shadow-md transition-all duration-300 border-0">
      {isRecommended && (
        <div className="absolute top-3 left-3 z-10">
          <Badge className="bg-primary text-primary-foreground shadow-sm">
            AI Pick
          </Badge>
        </div>
      )}
      
      {badge && !isRecommended && (
        <div className="absolute top-3 left-3 z-10">
          <Badge variant="secondary" className="shadow-sm">
            {badge}
          </Badge>
        </div>
      )}

      <button className="absolute top-3 right-3 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-background">
        <Heart className="w-4 h-4 text-muted-foreground hover:text-destructive" />
      </button>

      <div className="aspect-square overflow-hidden bg-muted/30">
        <ImageWithFallback 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <CardContent className="p-4 space-y-3">
        <div className="space-y-1">
          <h3 className="font-medium line-clamp-2 text-card-foreground">{name}</h3>
          
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-3 h-3 ${
                    i < Math.floor(rating) 
                      ? 'fill-yellow-400 text-yellow-400' 
                      : 'text-muted-foreground/30'
                  }`} 
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">({reviewCount})</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-lg">${price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice}
              </span>
            )}
          </div>
          
          <Button size="sm" className="shadow-sm">
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}