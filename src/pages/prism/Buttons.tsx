import '@/index.css'
import { Button } from '@prism/button'
import { Icon } from '@prism/icon'
import { Card } from '@prism/card'

const buttonSizes = ['default', 'small', 'mini'] as const
const buttonVariants = ['default', 'secondary', 'tertiary', 'tertiary-link', 'destructive'] as const

export default function Buttons() {
  return (
    <div className="prism-preview">
      <h1>Buttons</h1>
      <p className="description">
        Our button components come in different variants and states to help create clear and consistent actions throughout the interface.
      </p>
      
      <section className="space-y-12">
        {buttonVariants.map(variant => (
          <div key={variant}>
            <h2 className="mb-8 capitalize">{variant} Buttons</h2>
            <div className="space-y-8">
              {buttonSizes.map(size => (
                <div key={size} className="space-y-4">
                  <h4 className="text-sm font-medium text-[var(--color-gray-100)] capitalize">{size}</h4>
                  <div className="space-y-4">
                    {/* Default State */}
                    <div className="flex items-center gap-4">
                      <div className="w-24 text-sm text-gray-500">Default</div>
                      <div className="flex items-center gap-4">
                        <Button variant={variant} size={size}>Button</Button>
                        <Button variant={variant} size={size}>
                          <Icon name="Plus" size="small" className="mr-1" />
                          With Prefix
                        </Button>
                        <Button variant={variant} size={size}>
                          With Suffix
                          <Icon name="ArrowRight" size="small" className="ml-1" />
                        </Button>
                        <Button variant={variant} size={size}>
                          <Icon name="Plus" size="small" className="mr-1" />
                          Both Icons
                          <Icon name="ArrowRight" size="small" className="ml-1" />
                        </Button>
                      </div>
                    </div>

                    {/* Disabled State */}
                    <div className="flex items-center gap-4">
                      <div className="w-24 text-sm text-gray-500">Disabled</div>
                      <div className="flex items-center gap-4">
                        <Button variant={variant} size={size} disabled>Button</Button>
                        <Button variant={variant} size={size} disabled>
                          <Icon name="Plus" size="small" className="mr-1" />
                          With Prefix
                        </Button>
                        <Button variant={variant} size={size} disabled>
                          With Suffix
                          <Icon name="ArrowRight" size="small" className="ml-1" />
                        </Button>
                        <Button variant={variant} size={size} disabled>
                          <Icon name="Plus" size="small" className="mr-1" />
                          Both Icons
                          <Icon name="ArrowRight" size="small" className="ml-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Icon Only Buttons */}
        <div>
          <h2 className="mb-8">Icon Only</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-24 text-sm text-gray-500">Default</div>
              <div className="flex items-center gap-4">
                <Button size="icon">
                  <Icon name="Plus" size="small" />
                </Button>
                <Button variant="secondary" size="icon">
                  <Icon name="Plus" size="small" />
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 text-sm text-gray-500">Disabled</div>
              <div className="flex items-center gap-4">
                <Button size="icon" disabled>
                  <Icon name="Plus" size="small" />
                </Button>
                <Button variant="secondary" size="icon" disabled>
                  <Icon name="Plus" size="small" />
                </Button>
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
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">variant</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">'default' | 'secondary' | 'tertiary' | 'tertiary-link'</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">The style variant of the button</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">'default'</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">size</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">'default' | 'small' | 'mini' | 'icon'</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">The size of the button</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">'default'</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">disabled</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">boolean</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Whether the button is disabled</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">false</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">asChild</td>
                <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">boolean</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">Whether to merge props onto child element</td>
                <td className="p-2 border-b border-[var(--color-gray-40)]">false</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </section>
    </div>
  )
}