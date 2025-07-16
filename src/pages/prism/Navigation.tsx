import '@/index.css'
import { PendoNavigation } from '@prism/pendo-navigation'
import { useState } from 'react'
import { Card } from '@prism/card'
import { cn } from '@lib/utils'

export default function NavigationDemo() {
  const [isOpen, setIsOpen] = useState(true)
  const [selectedItem] = useState<'product'>('product')

  return (
    <div className="prism-preview">
      <h1>Navigation</h1>
      <p className="description">
        The navigation component provides a consistent way to navigate between different sections of the application.
        It supports both expanded and collapsed states, with smooth transitions and hover effects.
      </p>
      
      <section className="space-y-8">
        <div className="space-y-4">
          <h2>Preview</h2>
          <div className="border border-[var(--color-gray-40)] rounded-[3px] h-[800px] relative overflow-hidden flex">
            <div className="relative">
              <PendoNavigation 
                isOpen={isOpen}
                selectedItem={selectedItem}
                onCollapseClick={() => setIsOpen(!isOpen)}
                disableNavigation
                fixed={false}
              />
            </div>
            <div className={cn(
              "flex-1 bg-[var(--color-gray-10)] p-8"
            )}>
              <h2 className="text-[var(--font-heading-2)] text-[var(--color-gray-100)] m-0">Content Area</h2>
              <p className="paragraph-base text-[var(--color-gray-70)] mt-2 mb-0">
                This is where your application content would appear.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2>Properties</h2>
          <Card title="Props">
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
                  <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">isOpen</td>
                  <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">boolean</td>
                  <td className="p-2 border-b border-[var(--color-gray-40)]">Controls whether the navigation is expanded or collapsed</td>
                  <td className="p-2 border-b border-[var(--color-gray-40)]">true</td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">selectedItem</td>
                  <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">NavigationItemType</td>
                  <td className="p-2 border-b border-[var(--color-gray-40)]">Currently selected navigation item</td>
                  <td className="p-2 border-b border-[var(--color-gray-40)]">'product'</td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">onCollapseClick</td>
                  <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">{'() => void'}</td>
                  <td className="p-2 border-b border-[var(--color-gray-40)]">Callback when the collapse button is clicked</td>
                  <td className="p-2 border-b border-[var(--color-gray-40)]">-</td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">disableNavigation</td>
                  <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">boolean</td>
                  <td className="p-2 border-b border-[var(--color-gray-40)]">Whether to disable navigation functionality</td>
                  <td className="p-2 border-b border-[var(--color-gray-40)]">false</td>
                </tr>
              </tbody>
            </table>
          </Card>
        </div>
      </section>
    </div>
  )
}