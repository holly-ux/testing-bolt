import '@/index.css'
import { Radio } from '@prism/radio'
import { Card } from '@prism/card'
import { useState } from 'react'

export default function Radios() {
  const [selected, setSelected] = useState('option1')

  return (
    <div className="prism-preview">
      <h1>Radio Buttons</h1>
      <p className="description">
        Radio buttons allow users to select a single option from a list of mutually exclusive choices.
        They support various states including selected, unselected, and disabled.
      </p>
      
      <section className="space-y-8">
        <div className="space-y-4">
          <h2>States</h2>
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-8">
              <div className="w-24">Default</div>
              <Radio />
            </div>
            <div className="flex items-center gap-8">
              <div className="w-24">Selected</div>
              <Radio checked />
            </div>
            <div className="flex items-center gap-8">
              <div className="w-24">Disabled</div>
              <Radio disabled />
            </div>
            <div className="flex items-center gap-8">
              <div className="w-24">Selected Disabled</div>
              <Radio checked disabled />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2>Interactive Example</h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Radio
                name="example"
                value="option1"
                checked={selected === 'option1'}
                onCheckedChange={() => setSelected('option1')}
              />
              <label className="paragraph-base text-[var(--color-gray-90)] cursor-pointer">
                Option 1
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Radio
                name="example"
                value="option2"
                checked={selected === 'option2'}
                onCheckedChange={() => setSelected('option2')}
              />
              <label className="paragraph-base text-[var(--color-gray-90)] cursor-pointer">
                Option 2
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Radio
                name="example"
                value="option3"
                checked={selected === 'option3'}
                onCheckedChange={() => setSelected('option3')}
              />
              <label className="paragraph-base text-[var(--color-gray-90)] cursor-pointer">
                Option 3
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
                <td className="p-2 border-b border-[var(--color-gray-40)]">Whether the radio is checked</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">false</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">disabled</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">boolean</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Whether the radio is disabled</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">false</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">onCheckedChange</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">(checked: boolean) =&gt; void</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Callback when the radio state changes</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">-</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </section>
    </div>
  )
}