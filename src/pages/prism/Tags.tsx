import '@/index.css'
import { Tag } from '@prism/tag'
import { Card } from '@prism/card'

const shapes = ['rectangular', 'rectangular-subtle', 'rounded', 'rounded-subtle']
const sizes = ['medium', 'small', 'mini']
const types = ['default', 'filter', 'info', 'error', 'success', 'warning']

export default function Tags() {
  return (
    <div className="prism-preview">
      <h1>Tags</h1>
      <p className="description">
        Tags help label, organize, and categorize items. They come in different shapes, sizes, and styles to match various use cases.
      </p>
      
      <section id="tags" className="space-y-8">
        {types.map(type => (
          <div key={type} className="space-y-4">
            <h2 className="capitalize">{type === 'default' ? 'Standard' : type} Tags</h2>
            {shapes.map(shape => (
              <div key={shape} className="space-y-4">
                <h4 className="text-sm font-medium text-[var(--color-gray-100)] capitalize">{shape}</h4>
                <div className="flex gap-4">
                  {sizes.map(size => (
                    <Tag key={size} shape={shape as any} size={size as any} type={type as any}>
                      {type === 'info' ? 'Status: Info' :
                        type === 'error' ? 'Status: Error' :
                        type === 'success' ? 'Status: Success' :
                        type === 'warning' ? 'Status: Warning' :
                        size}
                    </Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}

        <div className="space-y-4">
          <h2>Custom Colors</h2>
          <div className="flex gap-4">
            <Tag backgroundColor="var(--color-teal-70)" textColor="white">
              Teal Tag
            </Tag>
            <Tag backgroundColor="var(--color-pink-100)" textColor="white">
              Pink Tag
            </Tag>
          </div>
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
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">shape</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">TagShape</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">The shape of the tag</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">'rectangular'</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">size</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">TagSize</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">The size of the tag</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">'medium'</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">type</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">TagType</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">The type of tag</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">'default'</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">backgroundColor</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">string</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Custom background color</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">-</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">textColor</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">string</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Custom text color</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">-</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </section>
    </div>
  )
}