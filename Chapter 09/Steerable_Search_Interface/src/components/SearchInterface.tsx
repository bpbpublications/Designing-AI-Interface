import { useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from './ui/input'
import { RankingControls } from './RankingControls'
import { SearchResults } from './SearchResults'

export interface RankingWeights {
  relevance: number
  recency: number
  authority: number
  popularity: number
}

export function SearchInterface() {
  const [query, setQuery] = useState('machine learning algorithms')
  const [weights, setWeights] = useState<RankingWeights>({
    relevance: 50,
    recency: 30,
    authority: 40,
    popularity: 35
  })

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-medium">Steerable Search</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Traditional search engines use fixed algorithms. Here, you control the ranking factors—adjust the importance of recency, relevance, authority, and popularity to see how results change in real-time.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          type="text"
          placeholder="Search for anything..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 h-12 text-lg"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Ranking Controls */}
        <div className="lg:col-span-1">
          <RankingControls weights={weights} onWeightsChange={setWeights} />
        </div>

        {/* Search Results */}
        <div className="lg:col-span-2">
          <SearchResults query={query} weights={weights} />
        </div>
      </div>
    </div>
  )
}