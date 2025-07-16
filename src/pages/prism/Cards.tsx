import '@/index.css'
import { Card } from '@prism/card'
import { Button } from '@prism/button'
import { Icon } from '@prism/icon'

export default function Cards() {
  return (
    <div className="prism-preview">
      <h1>Cards</h1>
      <p className="description">
        Cards are containers that group related content and actions. They provide a flexible and extensible content container with multiple variants and options.
      </p>
      
      <section className="space-y-8">
        <div className="space-y-4">
          <h2>Basic Card</h2>
          <p className="description">A simple card with a title and content.</p>
          <div className="max-w-md">
            <Card title="Card Title">
              <p className="m-0">This is the card content. Cards can contain any content, including text, images, and other components.</p>
            </Card>
          </div>
        </div>

        <div className="space-y-4">
          <h2>With Header Actions</h2>
          <p className="description">Cards can include action buttons in the header.</p>
          <div className="max-w-md">
            <Card 
              title="Settings"
              headerActions={
                <>
                  <Button size="small" variant="secondary">
                    <Icon name="X" size="small" className="mr-1" />
                    Cancel
                  </Button>
                  <Button size="small">
                    <Icon name="Check" size="small" className="mr-1" />
                    Save
                  </Button>
                </>
              }
            >
              <p className="m-0">Content with header actions for common operations.</p>
            </Card>
          </div>
        </div>

        <div className="space-y-4">
          <h2>With Footer</h2>
          <p className="description">Add a footer section for additional actions or information.</p>
          <div className="max-w-md">
            <Card 
              title="Document"
              footer={
                <div className="flex gap-2">
                  <Button size="small" variant="secondary">
                    <Icon name="Download" size="small" className="mr-1" />
                    Download
                  </Button>
                  <Button size="small">
                    <Icon name="Share2" size="small" className="mr-1" />
                    Share
                  </Button>
                </div>
              }
            >
              <p className="m-0">Card content with a footer containing actions.</p>
            </Card>
          </div>
        </div>

        <div className="space-y-4">
          <h2>No Padding</h2>
          <p className="description">Remove padding from the card body for custom content layouts.</p>
          <div className="max-w-md">
            <Card 
              title="Image Preview"
              noPadding
            >
              <div className="bg-[var(--color-gray-20)] aspect-video flex items-center justify-center">
                <Icon name="Image" size="large" className="text-[var(--color-gray-70)]" />
              </div>
            </Card>
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
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">title</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">string</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Title text displayed in the header</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">-</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">headerActions</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">ReactNode</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Optional action buttons to display in the header</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">-</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">footer</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">ReactNode</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Optional footer content</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">-</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">noPadding</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">boolean</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Whether to remove padding from the card body</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">false</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </section>
    </div>
  )
}