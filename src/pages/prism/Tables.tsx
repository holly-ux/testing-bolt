import '@/index.css'
import { Table } from '@prism/table'
import { Button } from '@prism/button'
import { Icon } from '@prism/icon'
import { cn } from '@lib/utils'
import { Card } from '@prism/card'

interface User {
  id: number
  name: string
  email: string
  role: string
  status: string
  starred: boolean
  selected: boolean
}

const mockData: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', starred: true, selected: false },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Inactive', starred: false, selected: true },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor', status: 'Active', starred: true, selected: false },
]

export default function Tables() {
  return (
    <div className="prism-preview">
      <h1>Tables</h1>
      <p className="description">
        Tables display structured data in rows and columns, with support for sorting, custom cell rendering, and row actions.
      </p>
      
      <section className="space-y-8">
        <div className="space-y-4">
          <h2>Basic Table</h2>
          <Table<User>
            title="Users"
            headerActions={
              <Button size="small">
                <Icon name="UserPlus" size="small" className="mr-1" />
                Add User
              </Button>
            }
            columns={[
              { key: 'name', title: 'Name', type: 'text', sortable: true },
              { key: 'email', title: 'Email', type: 'text', sortable: true },
              { key: 'role', title: 'Role', type: 'text' },
              { key: 'status', title: 'Status', type: 'text' },
            ]}
            data={mockData}
          />
        </div>

        <div className="space-y-4">
          <h2>Advanced Features</h2>
          <Table<User>
            title="Users with Actions"
            headerActions={
              <Button size="small">
                <Icon name="UserPlus" size="small" className="mr-1" />
                Add User
              </Button>
            }
            columns={[
              { key: 'selected', title: '', type: 'checkbox', width: '48px' },
              { key: 'starred', title: '', type: 'star', width: '48px' },
              { 
                key: 'name',
                title: 'Name',
                type: 'icon-text',
                icon: 'User',
                sortable: true
              },
              { key: 'email', title: 'Email', type: 'text', sortable: true },
              { key: 'role', title: 'Role', type: 'text' },
              {
                key: 'status',
                title: 'Status',
                type: 'custom',
                render: (value) => (
                  <span className={cn(
                    "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium",
                    value === 'Active' 
                      ? "bg-[var(--color-green-20)] text-[var(--color-green-100)]"
                      : "bg-[var(--color-gray-20)] text-[var(--color-gray-70)]"
                  )}>
                    {value}
                  </span>
                )
              },
            ]}
            data={mockData}
            onCheckboxChange={(checked, record) => console.log('Checkbox changed:', checked, record)}
            onStarClick={(record) => console.log('Star clicked:', record)}
            isStarred={(record) => record.starred}
            defaultSortKey="name"
            defaultSortDirection="asc"
          />
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
              <td className="p-2 border-b border-[var(--color-gray-40)]">Title displayed in the card header</td>
              <td className="p-2 border-b border-[var(--color-gray-40)]">-</td>
            </tr>
            <tr>
              <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">headerActions</td>
              <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">ReactNode</td>
              <td className="p-2 border-b border-[var(--color-gray-40)]">Optional actions displayed in the header</td>
              <td className="p-2 border-b border-[var(--color-gray-40)]">-</td>
            </tr>
            <tr>
              <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">columns</td>
              <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">Column[]</td>
              <td className="p-2 border-b border-[var(--color-gray-40)]">Array of column definitions</td>
              <td className="p-2 border-b border-[var(--color-gray-40)]">[]</td>
            </tr>
            <tr>
              <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">data</td>
              <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">T[]</td>
              <td className="p-2 border-b border-[var(--color-gray-40)]">Array of data items to display</td>
              <td className="p-2 border-b border-[var(--color-gray-40)]">[]</td>
            </tr>
            <tr>
              <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">defaultSortKey</td>
              <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">string</td>
              <td className="p-2 border-b border-[var(--color-gray-40)]">Initial column key to sort by</td>
              <td className="p-2 border-b border-[var(--color-gray-40)]">-</td>
            </tr>
            <tr>
              <td className="p-2 border-b border-[var(--color-gray-40)] font-mono text-[var(--color-teal-70)]">defaultSortDirection</td>
              <td className="p-2 border-b border-[var(--color-gray-40)] font-mono">'asc' | 'desc' | null</td>
              <td className="p-2 border-b border-[var(--color-gray-40)]">Initial sort direction</td>
              <td className="p-2 border-b border-[var(--color-gray-40)]">null</td>
            </tr>
          </tbody>
        </table>
      </Card>
      </section>
    </div>
  )
}