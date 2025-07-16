import '@/index.css'
import { Input } from '@prism/input'
import { Card } from '@prism/card'
import { useState } from 'react'

export default function Inputs() {
  const [value, setValue] = useState('')
  const [multilineValue, setMultilineValue] = useState('')

  return (
    <div className="prism-preview">
      <h1>Inputs</h1>
      <p className="description">
        Input components allow users to enter text. They support different states, validation,
        and can be configured as either single-line inputs or multi-line textareas.
      </p>
      
      <section className="space-y-8">
        <div className="space-y-4">
          <h2>Basic Input</h2>
          <div className="max-w-sm">
            <Input 
              placeholder="Enter text..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h2>With Label</h2>
          <div className="max-w-sm">
            <Input
              label="Email"
              placeholder="Enter your email"
              type="email"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h2>With Error</h2>
          <div className="max-w-sm">
            <Input
              label="Username"
              placeholder="Enter username"
              error="This username is already taken"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h2>Disabled State</h2>
          <div className="max-w-sm">
            <Input
              label="Disabled Input"
              placeholder="This input is disabled"
              disabled
            />
          </div>
        </div>

        <div className="space-y-4">
          <h2>Multiline Input</h2>
          <div className="max-w-sm">
            <Input
              label="Description"
              placeholder="Enter a description..."
              multiline
              rows={4}
              value={multilineValue}
              onChange={(e) => setMultilineValue(e.target.value)}
            />
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
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">label</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">string</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Label text displayed above the input</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">-</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">error</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">string</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Error message to display below the input</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">-</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">multiline</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">boolean</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Whether to use a textarea instead of an input</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">false</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">rows</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">number</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Number of rows for textarea</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">3</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </section>
    </div>
  )
}