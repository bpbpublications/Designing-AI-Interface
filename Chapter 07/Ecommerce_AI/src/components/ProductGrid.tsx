import { ProductCard } from './ProductCard';

const products = [
  {
    id: '4',
    name: 'Apple Watch Series 9',
    price: 399,
    originalPrice: 429,
    image: 'https://images.unsplash.com/photo-1716234479503-c460b87bdf98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNoJTIwd2VhcmFibGV8ZW58MXx8fHwxNzU4MzkzNzg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.5,
    reviewCount: 1234,
    badge: 'New'
  },
  {
    id: '5',
    name: 'Canon EOS R5 Camera',
    price: 3899,
    originalPrice: 4199,
    image: 'https://images.unsplash.com/photo-1740265556009-796449091cf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NTgzNzQxMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.9,
    reviewCount: 567,
    badge: 'Pro'
  },
  {
    id: '6',
    name: 'iPad Pro 12.9"',
    price: 1099,
    originalPrice: 1199,
    image: 'https://images.unsplash.com/photo-1672239069328-dd1535c0d78a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBkZXZpY2V8ZW58MXx8fHwxNzU4NDUyMzI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.7,
    reviewCount: 2134,
    badge: 'Popular'
  },
  {
    id: '7',
    name: 'MacBook Air M3',
    price: 1099,
    image: 'https://images.unsplash.com/photo-1754928864131-21917af96dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsYXB0b3AlMjBjb21wdXRlcnxlbnwxfHx8fDE3NTgzOTEyMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.6,
    reviewCount: 892,
  },
  {
    id: '8',
    name: 'AirPods Pro 2',
    price: 249,
    originalPrice: 279,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXN8ZW58MXx8fHwxNzU4NDYxMzUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.4,
    reviewCount: 1567,
  },
  {
    id: '9',
    name: 'Samsung Galaxy S24 Ultra',
    price: 1199,
    originalPrice: 1299,
    image: 'https://images.unsplash.com/photo-1732998360037-4857039d77a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwZGV2aWNlfGVufDF8fHx8MTc1ODQ1Mzc1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.5,
    reviewCount: 756,
    badge: 'Trending'
  }
];

export function ProductGrid() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">All Products</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Discover our full collection
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          {products.length} items
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}