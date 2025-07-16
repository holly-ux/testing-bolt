import '@/index.css'
import { Chart } from '@prism/chart'
import { Card } from '@prism/card'

export default function Charts() {
  const lineChartOptions = {
    title: { text: '' },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      title: { text: 'Month' }
    },
    yAxis: {
      title: { text: 'Amount ($)' }
    },
    series: [{
      type: 'line' as const,
      name: 'Product A',
      data: [43934, 52503, 57177, 69658, 97031, 119931]
    }, {
      type: 'line' as const,
      name: 'Product B',
      data: [24916, 24064, 29742, 29851, 32490, 30282]
    }]
  }

  const barChartOptions = {
    chart: { type: 'column' },
    title: { text: '' },
    xAxis: {
      categories: ['Q1', 'Q2', 'Q3', 'Q4'],
      title: { text: 'Quarter' }
    },
    yAxis: {
      title: { text: 'Revenue ($)' }
    },
    series: [{
      type: 'column' as const,
      name: '2023',
      data: [49.9, 71.5, 106.4, 129.2]
    }, {
      type: 'column' as const,
      name: '2024',
      data: [83.6, 78.8, 98.5, 93.4]
    }]
  }

  const pieChartOptions = {
    chart: { type: 'pie' },
    title: { text: '' },
    series: [{
      type: 'pie' as const,
      name: 'Share',
      data: [
        ['Desktop', 45.0],
        ['Mobile', 35.8],
        ['Tablet', 12.8],
        ['Other', 6.4]
      ]
    }]
  }

  return (
    <div className="prism-preview">
      <h1>Charts</h1>
      <p className="description">
        Our chart components use Highcharts to create beautiful, interactive data visualizations
        with consistent styling and accessibility features.
      </p>
      
      <section className="space-y-8">
        <div>
          <p className="description">Used for showing trends over time.</p>
          <Card title="Monthly Sales">
            <Chart options={lineChartOptions} height="400px" />
          </Card>
        </div>

        <div>
          <p className="description">Perfect for comparing quantities across categories.</p>
          <Card title="Quarterly Revenue">
            <Chart options={barChartOptions} height="400px" />
          </Card>
        </div>

        <div>
          <p className="description">Ideal for showing composition and proportions.</p>
          <Card title="Market Share">
            <Chart options={pieChartOptions} height="400px" />
          </Card>
        </div>
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
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">options</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">Highcharts.Options</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Highcharts configuration object</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">-</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">height</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">string</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Container height</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">'400px'</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">width</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">string</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Container width</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">'100%'</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </section>
    </div>
  )
}