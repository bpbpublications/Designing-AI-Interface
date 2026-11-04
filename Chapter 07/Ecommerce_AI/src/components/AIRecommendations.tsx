import { ProductCard } from './ProductCard';
import { Badge } from './ui/badge';
import { Sparkles } from 'lucide-react';

const recommendedProducts = [
  {
    id: '1',
    name: 'MacBook Pro 16-inch',
    price: 2499,
    originalPrice: 2699,
    image: 'https://images.unsplash.com/photo-1754928864131-21917af96dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsYXB0b3AlMjBjb21wdXRlcnxlbnwxfHx8fDE3NTgzOTEyMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.8,
    reviewCount: 2847,
    isRecommended: true
  },
  {
    id: '2', 
    name: 'Sony WH-1000XM5 Headphones',
    price: 399,
    originalPrice: 449,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXN8ZW58MXx8fHwxNzU4NDYxMzUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.6,
    reviewCount: 1923,
    isRecommended: true
  },
  {
    id: '3',
    name: 'iPhone 15 Pro Max',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1732998360037-4857039d77a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwZGV2aWNlfGVufDF8fHx8MTc1ODQ1Mzc1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.7,
    reviewCount: 3456,
    isRecommended: true
  }
];

export function AIRecommendations() {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">AI Curated</span>
        </div>
        <div className="h-px bg-border flex-1" />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Picked for You</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Based on your browsing and purchase history
            </p>
          </div>
          <Badge variant="outline" className="bg-accent/50">
            95% match
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}