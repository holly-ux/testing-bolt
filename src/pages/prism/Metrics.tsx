import '@/index.css'
import { Metric } from '@prism/metric'
import { Card } from '@prism/card'

interface PropExample {
  title: string
  description: string
  examples: React.ReactNode
}

export default function Metrics() {
  const propExamples: PropExample[] = [
    {
      title: 'Sizes',
      description: 'Metrics come in four sizes to accommodate different use cases.',
      examples: (
        <div className="grid grid-cols-2 gap-8">
          <Metric
            size="large"
            metricText="1,234"
            seriesName="Large"
            unitLabel="Default size for primary metrics"
          />
          <Metric
            size="medium"
            metricText="1,234"
            seriesName="Medium"
            unitLabel="Good for secondary metrics"
          />
          <Metric
            size="small"
            metricText="1,234"
            seriesName="Small"
            unitLabel="Compact display"
          />
          <Metric
            size="xs"
            metricText="1,234"
            seriesName="Extra Small"
            unitLabel="Minimal footprint"
          />
        </div>
      )
    },
    {
      title: 'Change Indicators',
      description: 'Show trends with positive, negative, or neutral change indicators.',
      examples: (
        <div className="grid grid-cols-3 gap-8">
          <Metric
            size="medium"
            metricText="85.3%"
            seriesName="Positive Change"
            unitLabel="Conversion rate"
            changeMetric="12.5%"
            changeMetricType="positive"
          />
          <Metric
            size="medium"
            metricText="$12.4k"
            seriesName="Negative Change"
            unitLabel="Revenue"
            changeMetric="8.1%"
            changeMetricType="negative"
          />
          <Metric
            size="medium"
            metricText="1,234"
            seriesName="Neutral Change"
            unitLabel="Page views"
            changeMetric="0%"
            changeMetricType="neutral"
          />
        </div>
      )
    },
    {
      title: 'Alignment',
      description: 'Metrics can be aligned left (default) or center.',
      examples: (
        <div className="grid grid-cols-2 gap-8">
          <div className="border border-[var(--color-gray-30)] rounded-md p-4">
            <Metric
              size="medium"
              alignment="left"
              metricText="98.1%"
              seriesName="Left Aligned"
              unitLabel="Default alignment"
              changeMetric="0.2%"
              changeMetricType="positive"
            />
          </div>
          <div className="border border-[var(--color-gray-30)] rounded-md p-4">
            <Metric
              size="medium"
              alignment="center"
              metricText="1.2s"
              seriesName="Center Aligned"
              unitLabel="Centered content"
              changeMetric="0.1s"
              changeMetricType="negative"
            />
          </div>
        </div>
      )
    },
    {
      title: 'Loading State',
      description: 'Display a loading skeleton while data is being fetched.',
      examples: (
        <div className="grid grid-cols-2 gap-8">
          <Metric
            size="large"
            state="loading"
            metricText="--"
            seriesName="Loading"
            unitLabel="loading"
            changeMetric="--"
          />
          <Metric
            size="medium"
            state="loading"
            metricText="--"
            seriesName="Loading"
            unitLabel="loading"
          />
        </div>
      )
    },
    {
      title: 'Optional Elements',
      description: 'Show or hide various elements of the metric.',
      examples: (
        <div className="grid grid-cols-2 gap-8">
          <Metric
            size="medium"
            metricText="1,234"
            seriesName="All Elements"
            unitLabel="Complete metric"
            secondaryLabel="Updated just now"
            changeMetric="5%"
            changeMetricType="positive"
          />
          <Metric
            size="medium"
            metricText="1,234"
            showSeriesName={false}
            showUnitLabel={false}
            showSecondaryLabel={false}
            showChangeMetric={false}
          />
        </div>
      )
    }
  ]

  return (
    <div className="prism-preview">
      <h1>Metrics</h1>
      <p className="description">
        Display numerical data and statistics with optional context and change indicators. Metrics are highly customizable and support various sizes, states, and layouts.
      </p>
      
      <section className="space-y-16">
        {propExamples.map((example) => (
          <div key={example.title} className="space-y-4">
            <h2>{example.title}</h2>
            <p className="description">{example.description}</p>
            {example.examples}
          </div>
        ))}
      </section>

      <section className="mt-16">
        <Card title="Props" className="mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-2 border-b border-[var(--color-gray-40)] paragraph-base-bold">Prop</th>
                <th className="text-left p-2 border-b border-[var(--color-gray-40)] paragraph-base-bold">Type</th>
                <th className="text-left p-2 border-b border-[var(--color-gray-40)] paragraph-base-bold">Description</th>
                <th className="text-left p-2 border-b border-[var(--color-gray-40)] paragraph-base-bold">Default</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">size</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">'xs' | 'small' | 'medium' | 'large'</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">The size of the metric</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">'medium'</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">alignment</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">'left' | 'center'</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">The alignment of the metric</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">'left'</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">state</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">'loaded' | 'loading'</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">The loading state of the metric</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">'loaded'</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">metricText</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">string</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">The main metric value</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">-</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">seriesName</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">string</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">The name of the metric series</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">-</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">unitLabel</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">string</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">The unit label for the metric</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">-</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">secondaryLabel</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">string</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Additional descriptive text</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">-</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">changeMetric</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">string</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">The change value to display</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">-</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">changeMetricType</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">'positive' | 'negative' | 'neutral'</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">The type of change</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">'positive'</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </section>
    </div>
  )
}