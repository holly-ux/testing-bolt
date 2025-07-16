import '@/index.css'
import { Checkbox } from '@prism/checkbox'
import { Card } from '@prism/card'
import { useState } from 'react'

export default function Checkboxes() {
  const [checked, setChecked] = useState(false)
  const [indeterminate, setIndeterminate] = useState(true)

  return (
    <div className="prism-preview">
      <h1>Checkboxes</h1>
      <p className="description">
        Checkboxes allow users to select one or multiple items from a list, or toggle a single option on/off.
        They support various states including checked, unchecked, indeterminate, and disabled.
      </p>
      
      <section className="space-y-8">
        <div className="space-y-4">
          <h2>States</h2>
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-8">
              <div className="w-24">Selected</div>
              <Checkbox checked />
            </div>
            <div className="flex items-center gap-8">
              <div className="w-24">Indeterminate</div>
              <Checkbox indeterminate />
            </div>
            <div className="flex items-center gap-8">
              <div className="w-24">Default</div>
              <Checkbox />
            </div>
            <div className="flex items-center gap-8">
              <div className="w-24">Hover</div>
              <div className="hover-preview">
                <Checkbox />
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="w-24">Selected Disabled</div>
              <Checkbox checked disabled />
            </div>
            <div className="flex items-center gap-8">
              <div className="w-24">Disabled</div>
              <Checkbox disabled />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2>Interactive Example</h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Checkbox
                checked={checked}
                onCheckedChange={setChecked}
              />
              <label className="paragraph-base text-[var(--color-gray-90)] cursor-pointer">
                Toggle me
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                indeterminate={indeterminate}
                checked={!indeterminate}
                onCheckedChange={(checked) => {
                  setIndeterminate(false)
                  setChecked(checked)
                }}
              />
              <label className="paragraph-base text-[var(--color-gray-90)] cursor-pointer">
                Indeterminate example
              </label>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
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
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">checked</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">boolean</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Whether the checkbox is checked</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">false</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">indeterminate</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">boolean</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Whether the checkbox is in an indeterminate state</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">false</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">disabled</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">boolean</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Whether the checkbox is disabled</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">false</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">onCheckedChange</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">(checked: boolean) =&gt; void</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Callback when the checkbox state changes</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">-</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </section>
    </div>
  )
}