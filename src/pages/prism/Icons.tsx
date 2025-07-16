import '@/index.css'
import { Icon } from '@prism/icon'
import { Card } from '@prism/card'

const sizes = ['small', 'medium', 'large'] as const
const icons = ['ArrowRight', 'Plus', 'Check', 'X', 'Search', 'Settings', 'User', 'Bell', 'Mail', 'Home'] as const

export default function Icons() {
  return (
    <div className="prism-preview">
      <h1>Icons</h1>
      <p className="description">
        Our icon system uses Lucide icons with consistent sizing and stroke weights across the interface.
      </p>
      
      <section id="icons">
        <div className="space-y-8">
          {sizes.map((size) => (
            <div key={size} className="space-y-4">
              <h4 className="text-sm font-medium text-[var(--color-gray-100)] capitalize">{size}</h4>
              <div className="grid grid-cols-5 gap-8">
                {icons.map((name) => (
                  <div key={name} className="flex flex-col items-center gap-2">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[var(--color-gray-20)]">
                      <Icon name={name} size={size} />
                    </div>
                    <code className="text-xs text-[var(--color-gray-70)]">{name}</code>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">name</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">keyof typeof LucideIcons</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">The name of the icon from Lucide icons</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">-</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">size</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">'small' | 'medium' | 'large' | 'nav'</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">The size of the icon</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">'medium'</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">color</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">string</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">The color of the icon</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">'currentColor'</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">className</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">string</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Additional CSS classes</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">-</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </section>
    </div>
  )
}