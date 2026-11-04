import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Slider } from './ui/slider'
import { Badge } from './ui/badge'
import { Clock, Target, Shield, TrendingUp, RotateCcw } from 'lucide-react'
import { Button } from './ui/button'
import { RankingWeights } from './SearchInterface'

interface RankingControlsProps {
  weights: RankingWeights
  onWeightsChange: (weights: RankingWeights) => void
}

export function RankingControls({ weights, onWeightsChange }: RankingControlsProps) {
  const controls = [
    {
      key: 'relevance' as keyof RankingWeights,
      label: 'Relevance',
      description: 'How well content matches search terms',
      icon: Target,
      color: 'bg-blue-500'
    },
    {
      key: 'recency' as keyof RankingWeights,
      label: 'Recency',
      description: 'How recently content was published',
      icon: Clock,
      color: 'bg-green-500'
    },
    {
      key: 'authority' as keyof RankingWeights,
      label: 'Authority',
      description: 'Credibility and expertise of source',
      icon: Shield,
      color: 'bg-purple-500'
    },
    {
      key: 'popularity' as keyof RankingWeights,
      label: 'Popularity',
      description: 'Social engagement and views',
      icon: TrendingUp,
      color: 'bg-orange-500'
    }
  ]

  const handleSliderChange = (key: keyof RankingWeights, value: number[]) => {
    onWeightsChange({
      ...weights,
      [key]: value[0]
    })
  }

  const resetWeights = () => {
    onWeightsChange({
      relevance: 50,
      recency: 30,
      authority: 40,
      popularity: 35
    })
  }

  return (
    <Card>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            Ranking Factors
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={resetWeights}
            className="h-8 px-2"
          >
            <RotateCcw className="h-3 w-3 mr-1" />
            Reset
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Adjust the importance of each factor to steer your search results
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {controls.map((control) => {
          const Icon = control.icon
          const value = weights[control.key]
          
          return (
            <div key={control.key} className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${control.color}`} />
                  <span className="font-medium">{control.label}</span>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {value}%
                </Badge>
              </div>
              
              <div className="space-y-2">
                <Slider
                  value={[value]}
                  onValueChange={(newValue) => handleSliderChange(control.key, newValue)}
                  max={100}
                  min={0}
                  step={5}
                  className="w-full"
                />
                <p className="text-xs text-muted-foreground">
                  {control.description}
                </p>
              </div>
            </div>
          )
        })}
        
        {/* Weight Distribution Visualization */}
        <div className="pt-4 border-t">
          <p className="text-sm font-medium mb-2">Weight Distribution</p>
          <div className="flex h-2 rounded-full overflow-hidden bg-muted">
            {controls.map((control, index) => (
              <div
                key={control.key}
                className={`${control.color} transition-all duration-300`}
                style={{
                  width: `${(weights[control.key] / (weights.relevance + weights.recency + weights.authority + weights.popularity)) * 100}%`
                }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-1">
            {controls.map((control) => (
              <span key={control.key} className="text-xs text-muted-foreground">
                {control.label.slice(0, 3)}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}