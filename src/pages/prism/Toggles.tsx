import '@/index.css'
import { Toggle } from '@prism/toggle'
import { Card } from '@prism/card'
import { useState } from 'react'

export default function Toggles() {
  const [checked, setChecked] = useState(false)

  return (
    <div className="prism-preview">
      <h1>Toggles</h1>
      <p className="description">
        Toggle switches allow users to turn an option on or off. They provide a visual way to enable or disable a setting.
      </p>
      
      <section className="space-y-8">
        <div className="space-y-4">
          <h2>States</h2>
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-8">
              <div className="w-24">Active</div>
              <div className="flex gap-8">
                <Toggle checked={checked} onCheckedChange={setChecked} />
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="w-24">Disabled</div>
              <div className="flex gap-8">
                <Toggle disabled checked={false} />
                <Toggle disabled checked={true} />
              </div>
            </div>
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
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">checked</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">boolean</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Whether the toggle is checked</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">false</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">disabled</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">boolean</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Whether the toggle is disabled</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">false</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">onCheckedChange</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">(checked: boolean) =&gt; void</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Callback when the toggle state changes</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">-</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </section>
    </div>
  )
}