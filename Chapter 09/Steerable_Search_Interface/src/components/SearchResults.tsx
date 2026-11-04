import { useMemo } from 'react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { ExternalLink, Calendar, Users, Award } from 'lucide-react'
import { RankingWeights } from './SearchInterface'

interface SearchResult {
  id: string
  title: string
  url: string
  description: string
  source: string
  publishDate: string
  views: number
  authorityScore: number
  relevanceScore: number
}

interface SearchResultsProps {
  query: string
  weights: RankingWeights
}

// Mock search results data
const mockResults: SearchResult[] = [
  {
    id: '1',
    title: 'Deep Learning: A Comprehensive Guide to Neural Networks',
    url: 'research.ai/deep-learning-guide',
    description: 'An in-depth exploration of neural networks, covering everything from basic perceptrons to advanced architectures like transformers and GANs.',
    source: 'AI Research Institute',
    publishDate: '2024-09-25',
    views: 125000,
    authorityScore: 95,
    relevanceScore: 98
  },
  {
    id: '2',
    title: 'Machine Learning Algorithms Explained with Python Examples',
    url: 'codelearn.com/ml-algorithms',
    description: 'Practical implementation of popular ML algorithms including linear regression, decision trees, and ensemble methods with real code examples.',
    source: 'CodeLearn',
    publishDate: '2024-09-20',
    views: 89000,
    authorityScore: 75,
    relevanceScore: 92
  },
  {
    id: '3',
    title: 'The Evolution of Machine Learning: From Perceptrons to LLMs',
    url: 'techhistory.edu/ml-evolution',
    description: 'A historical perspective on how machine learning has evolved over the decades, featuring key breakthroughs and paradigm shifts.',
    source: 'Tech History University',
    publishDate: '2024-08-15',
    views: 45000,
    authorityScore: 88,
    relevanceScore: 85
  },
  {
    id: '4',
    title: 'Breaking: New Quantum Machine Learning Algorithm Achieves 99% Accuracy',
    url: 'quantumnews.com/qml-breakthrough',
    description: 'Researchers at Stanford unveil a quantum-enhanced machine learning algorithm that outperforms classical methods on complex optimization problems.',
    source: 'Quantum News',
    publishDate: '2024-09-28',
    views: 15000,
    authorityScore: 70,
    relevanceScore: 78
  },
  {
    id: '5',
    title: 'Machine Learning in Healthcare: Real-World Applications',
    url: 'medtech.org/ml-healthcare',
    description: 'How ML algorithms are revolutionizing medical diagnosis, drug discovery, and personalized treatment plans in modern healthcare systems.',
    source: 'Medical Technology Review',
    publishDate: '2024-09-10',
    views: 67000,
    authorityScore: 82,
    relevanceScore: 80
  },
  {
    id: '6',
    title: 'Top 10 Machine Learning Trends Everyone is Talking About',
    url: 'trendy-tech.blog/ml-trends',
    description: 'The hottest machine learning trends this year including federated learning, explainable AI, and automated machine learning platforms.',
    source: 'TrendyTech Blog',
    publishDate: '2024-09-22',
    views: 234000,
    authorityScore: 45,
    relevanceScore: 75
  }
]

export function SearchResults({ query, weights }: SearchResultsProps) {
  const rankedResults = useMemo(() => {
    return mockResults
      .map((result) => {
        // Calculate recency score (newer = higher score)
        const daysSincePublish = Math.floor(
          (new Date().getTime() - new Date(result.publishDate).getTime()) / (1000 * 60 * 60 * 24)
        )
        const recencyScore = Math.max(0, 100 - daysSincePublish * 2)
        
        // Calculate popularity score based on views
        const maxViews = Math.max(...mockResults.map(r => r.views))
        const popularityScore = (result.views / maxViews) * 100
        
        // Calculate weighted score
        const score = (
          (result.relevanceScore * weights.relevance) +
          (recencyScore * weights.recency) +
          (result.authorityScore * weights.authority) +
          (popularityScore * weights.popularity)
        ) / (weights.relevance + weights.recency + weights.authority + weights.popularity)
        
        return {
          ...result,
          score,
          recencyScore,
          popularityScore
        }
      })
      .sort((a, b) => b.score - a.score)
  }, [weights])

  const formatViews = (views: number) => {
    if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M`
    if (views >= 1000) return `${(views / 1000).toFixed(0)}k`
    return views.toString()
  }

  const getDaysSincePublish = (date: string) => {
    const days = Math.floor(
      (new Date().getTime() - new Date(date).getTime()) / (1000 * 60 * 60 * 24)
    )
    if (days === 0) return 'Today'
    if (days === 1) return 'Yesterday'
    if (days < 7) return `${days} days ago`
    if (days < 30) return `${Math.floor(days / 7)} weeks ago`
    return `${Math.floor(days / 30)} months ago`
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-medium">Search Results</h2>
        <Badge variant="outline" className="text-xs">
          {rankedResults.length} results for "{query}"
        </Badge>
      </div>
      
      <div className="space-y-3">
        {rankedResults.map((result, index) => (
          <Card key={result.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="space-y-3">
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-primary hover:underline cursor-pointer line-clamp-2">
                      {result.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-green-600">{result.url}</span>
                      <ExternalLink className="h-3 w-3 text-muted-foreground" />
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs shrink-0">
                    #{index + 1}
                  </Badge>
                </div>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {result.description}
                </p>
                
                {/* Metadata */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {getDaysSincePublish(result.publishDate)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {formatViews(result.views)} views
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="h-3 w-3" />
                      {result.source}
                    </div>
                  </div>
                  
                  {/* Score indicator */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">Score:</span>
                    <Badge 
                      variant={result.score > 80 ? "default" : result.score > 60 ? "secondary" : "outline"}
                      className="text-xs"
                    >
                      {Math.round(result.score)}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Explanation */}
      <Card className="bg-muted/50">
        <CardContent className="p-4">
          <h3 className="font-medium mb-2">How Ranking Works</h3>
          <p className="text-sm text-muted-foreground">
            Each result gets a weighted score based on your ranking preferences. Adjust the sliders to see how 
            different factors influence the order. Higher weights mean that factor has more influence on the final ranking.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}