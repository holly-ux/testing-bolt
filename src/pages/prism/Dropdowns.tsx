import '@/index.css'
import { Dropdown, DropdownOption } from '@prism/dropdown'
import { Icon } from '@prism/icon'
import { Card } from '@prism/card'

export default function Dropdowns() {
  return (
    <div className="prism-preview">
      <h1>Dropdowns</h1>
      <p className="description">
        Dropdowns allow users to select a value from a list of options. They support different styles,
        states, and can include icons and custom triggers.
      </p>
      
      <section className="space-y-8">
        <div className="space-y-4">
          <h2>Basic Dropdown</h2>
          <div className="max-w-xs">
            <Dropdown placeholder="Select a fruit">
              <DropdownOption value="apple">Apple</DropdownOption>
              <DropdownOption value="banana">Banana</DropdownOption>
              <DropdownOption value="orange">Orange</DropdownOption>
            </Dropdown>
          </div>
        </div>

        <div className="space-y-4">
          <h2>With Label and Error</h2>
          <div className="max-w-xs">
            <Dropdown
              label="Favorite Fruit"
              placeholder="Select a fruit"
              error="Please select a fruit"
            >
              <DropdownOption value="apple">Apple</DropdownOption>
              <DropdownOption value="banana">Banana</DropdownOption>
              <DropdownOption value="orange">Orange</DropdownOption>
            </Dropdown>
          </div>
        </div>

        <div className="space-y-4">
          <h2>With Prefix Icon</h2>
          <div className="max-w-xs">
            <Dropdown
              placeholder="Select a status"
              prefixIcon={<Icon name="Circle" size="small" className="text-[var(--color-gray-50)]" />}
            >
              <DropdownOption value="active">Active</DropdownOption>
              <DropdownOption value="inactive">Inactive</DropdownOption>
              <DropdownOption value="pending">Pending</DropdownOption>
            </Dropdown>
          </div>
        </div>

        <div className="space-y-4">
          <h2>Text Trigger</h2>
          <div className="max-w-xs">
            <Dropdown
              triggerType="text"
              placeholder="Sort by"
            >
              <DropdownOption value="name">Name</DropdownOption>
              <DropdownOption value="date">Date</DropdownOption>
              <DropdownOption value="size">Size</DropdownOption>
            </Dropdown>
          </div>
        </div>

        <div className="space-y-4">
          <h2>Disabled State</h2>
          <div className="max-w-xs space-y-4">
            <Dropdown
              placeholder="Select an option"
              disabled
            >
              <DropdownOption value="1">Option 1</DropdownOption>
              <DropdownOption value="2">Option 2</DropdownOption>
            </Dropdown>

            <Dropdown
              triggerType="text"
              placeholder="Sort by"
              disabled
            >
              <DropdownOption value="name">Name</DropdownOption>
              <DropdownOption value="date">Date</DropdownOption>
            </Dropdown>
          </div>
        </div>

        <div className="space-y-4">
          <h2>Disabled Options</h2>
          <div className="max-w-xs">
            <Dropdown placeholder="Select an option">
              <DropdownOption value="1">Option 1</DropdownOption>
              <DropdownOption value="2" disabled>Option 2 (Disabled)</DropdownOption>
              <DropdownOption value="3">Option 3</DropdownOption>
            </Dropdown>
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
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">value</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">string</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">The currently selected value</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">-</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">placeholder</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">string</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Placeholder text when no value is selected</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">'Select an option'</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">label</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">string</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Label text displayed above the dropdown</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">-</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">error</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">string</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Error message to display below the dropdown</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">-</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">disabled</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">boolean</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Whether the dropdown is disabled</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">false</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">prefixIcon</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">ReactNode</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Optional icon to display before the text</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">-</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">triggerType</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">'default' | 'text'</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">The type of trigger to display</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">'default'</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </section>
    </div>
  )
}