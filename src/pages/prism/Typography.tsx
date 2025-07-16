import '@/index.css'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'

export default function Typography() {
  const [searchParams] = useSearchParams()
  const section = searchParams.get('section') || 'text-presets'
  
  useEffect(() => {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [section])

  return (
    <div className="prism-preview">
      <h1>Modular type scale</h1>
      <p className="description">
        Heading styles and scales using the modular major second scale (8:9 / multiplier 1.125x) to achieve relational
        harmony. Follow these typographic standards to ensure consistency and inject personality wherever writing for
        Pendo. See <a href="https://type-scale.com/">https://type-scale.com/</a> for more insight
      </p>
      
      <section id="text-presets">
        <h2>Text Presets</h2>
        <table className="typography-table">
          <thead>
            <tr>
              <th>Token Name</th>
              <th>Size (px)</th>
              <th>Size (rem)</th>
              <th>Line Height %</th>
              <th>Weight</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>text-preset-46</td>
              <td>46.184px</td>
              <td>2.887rem</td>
              <td>130%</td>
              <td>400</td>
              <td><span className="text-preset-46">Example</span></td>
            </tr>
            <tr>
              <td>text-preset-41</td>
              <td>41.053px</td>
              <td>2.566rem</td>
              <td>130%</td>
              <td>400</td>
              <td><span className="text-preset-41">Example</span></td>
            </tr>
            <tr>
              <td>text-preset-36</td>
              <td>36.491px</td>
              <td>2.281rem</td>
              <td>130%</td>
              <td>400</td>
              <td><span className="text-preset-36">Example</span></td>
            </tr>
            <tr>
              <td>text-preset-32</td>
              <td>32.437px</td>
              <td>2.027rem</td>
              <td>130%</td>
              <td>400</td>
              <td><span className="text-preset-32">Example</span></td>
            </tr>
            <tr>
              <td>text-preset-28</td>
              <td>28.833px</td>
              <td>1.802rem</td>
              <td>130%</td>
              <td>400</td>
              <td><span className="text-preset-28">Example</span></td>
            </tr>
            <tr>
              <td>text-preset-25</td>
              <td>25.629px</td>
              <td>1.602rem</td>
              <td>130%</td>
              <td>400</td>
              <td><span className="text-preset-25">Example</span></td>
            </tr>
            <tr>
              <td>text-preset-22</td>
              <td>22.781px</td>
              <td>1.424rem</td>
              <td>130%</td>
              <td>400</td>
              <td><span className="text-preset-22">Example</span></td>
            </tr>
            <tr>
              <td>text-preset-20</td>
              <td>20.25px</td>
              <td>1.266rem</td>
              <td>135%</td>
              <td>400</td>
              <td><span className="text-preset-20">Example</span></td>
            </tr>
            <tr>
              <td>text-preset-18</td>
              <td>18px</td>
              <td>1.125rem</td>
              <td>135%</td>
              <td>400</td>
              <td><span className="text-preset-18">Example</span></td>
            </tr>
            <tr>
              <td>text-preset-16</td>
              <td>16px</td>
              <td>1rem</td>
              <td>150%</td>
              <td>400</td>
              <td><span className="text-preset-16">Example</span></td>
            </tr>
            <tr>
              <td>text-preset-14</td>
              <td>14.22px</td>
              <td>0.889rem</td>
              <td>150%</td>
              <td>400</td>
              <td><span className="text-preset-14">Example</span></td>
            </tr>
            <tr>
              <td>text-preset-12</td>
              <td>12.64px</td>
              <td>0.79rem</td>
              <td>150%</td>
              <td>400</td>
              <td><span className="text-preset-12">Example</span></td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="headings">
        <h2>Headings</h2>
        <p className="description">These heading styles use our text presets to create clear visual hierarchy.</p>
        <table className="typography-table">
          <thead>
            <tr>
              <th>Token Name</th>
              <th>Size (px)</th>
              <th>Size (rem)</th>
              <th>Line Height %</th>
              <th>Weight</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>font-heading-1</td>
              <td>46.184px</td>
              <td>2.887rem</td>
              <td>130%</td>
              <td>600</td>
              <td><h1 style={{ fontSize: 'var(--font-heading-1)', margin: 0 }}>Heading 1</h1></td>
            </tr>
            <tr>
              <td>font-heading-2</td>
              <td>36.491px</td>
              <td>2.281rem</td>
              <td>130%</td>
              <td>600</td>
              <td><h2 style={{ fontSize: 'var(--font-heading-2)', margin: 0 }}>Heading 2</h2></td>
            </tr>
            <tr>
              <td>font-heading-3</td>
              <td>22.781px</td>
              <td>1.424rem</td>
              <td>130%</td>
              <td>600</td>
              <td><h3 style={{ fontSize: 'var(--font-heading-3)', margin: 0 }}>Heading 3</h3></td>
            </tr>
            <tr>
              <td>font-heading-4</td>
              <td>18px</td>
              <td>1.125rem</td>
              <td>135%</td>
              <td>600</td>
              <td><h4 style={{ fontSize: 'var(--font-heading-4)', margin: 0 }}>Heading 4</h4></td>
            </tr>
            <tr>
              <td>font-heading-5</td>
              <td>16px</td>
              <td>1rem</td>
              <td>135%</td>
              <td>600</td>
              <td><h5 style={{ fontSize: 'var(--font-heading-5)', margin: 0 }}>Heading 5</h5></td>
            </tr>
            <tr>
              <td>font-heading-6</td>
              <td>14.222px</td>
              <td>0.889rem</td>
              <td>135%</td>
              <td>600</td>
              <td><h6 style={{ fontSize: 'var(--font-heading-6)', margin: 0 }}>Heading 6</h6></td>
            </tr>
          </tbody>
        </table>
      </section>
      
      <section id="paragraphs">
        <h2>Paragraphs</h2>
        <p className="description">Paragraph styles and scales. Follow these typographic standards to ensure consistency and inject personality wherever you write for Pendo.</p>
        
        <table className="typography-table">
          <thead>
            <tr>
              <th>Token Name</th>
              <th>Size (px)</th>
              <th>Size (rem)</th>
              <th>Line Height %</th>
              <th>Weight</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>paragraph-base</td>
              <td>14.222px</td>
              <td>0.889rem</td>
              <td>150%</td>
              <td>400</td>
              <td><p className="paragraph-base" style={{ margin: 0 }}>The quick, brown fox jumps over a lazy dog.</p></td>
            </tr>
            <tr>
              <td>paragraph-base-bold</td>
              <td>14.222px</td>
              <td>0.889rem</td>
              <td>150%</td>
              <td>600</td>
              <td><p className="paragraph-base-bold" style={{ margin: 0 }}>The quick, brown fox jumps over a lazy dog.</p></td>
            </tr>
            <tr>
              <td>paragraph-small</td>
              <td>12.642px</td>
              <td>0.79rem</td>
              <td>150%</td>
              <td>400</td>
              <td><p className="paragraph-small" style={{ margin: 0 }}>The quick, brown fox jumps over a lazy dog.</p></td>
            </tr>
            <tr>
              <td>paragraph-small-bold</td>
              <td>12.642px</td>
              <td>0.79rem</td>
              <td>150%</td>
              <td>600</td>
              <td><p className="paragraph-small-bold" style={{ margin: 0 }}>The quick, brown fox jumps over a lazy dog.</p></td>
            </tr>
          </tbody>
        </table>
      </section>
      
      <section id="metrics">
        <h2>Metrics</h2>
        <p className="description">Metric styles and scales for displaying numerical data and statistics.</p>
        
        <table className="typography-table">
          <thead>
            <tr>
              <th>Token Name</th>
              <th>Size (px)</th>
              <th>Size (rem)</th>
              <th>Line Height %</th>
              <th>Weight</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>metric-large</td>
              <td>32px</td>
              <td>2rem</td>
              <td>120%</td>
              <td>700</td>
              <td><span className="metric-large">3.61k</span></td>
            </tr>
            <tr>
              <td>metric-medium</td>
              <td>26px</td>
              <td>1.625rem</td>
              <td>120%</td>
              <td>700</td>
              <td><span className="metric-medium">3.61k</span></td>
            </tr>
            <tr>
              <td>metric-small</td>
              <td>22px</td>
              <td>1.375rem</td>
              <td>120%</td>
              <td>700</td>
              <td><span className="metric-small">3.61k</span></td>
            </tr>
            <tr>
              <td>metric-xs</td>
              <td>16px</td>
              <td>1rem</td>
              <td>120%</td>
              <td>700</td>
              <td><span className="metric-xs">3.61k</span></td>
            </tr>
          </tbody>
        </table>
      </section>
      
      <section id="misc">
        <h2>Misc</h2>
        <p className="description">Miscellaneous type styles used across the interface.</p>
        
        <table className="typography-table">
          <thead>
            <tr>
              <th>Token Name</th>
              <th>Font Family</th>
              <th>Size (px)</th>
              <th>Weight</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>nav-eyebrow</td>
              <td>Inter</td>
              <td>10px</td>
              <td>600</td>
              <td><span className="nav-eyebrow">THE QUICK BROWN FOX</span></td>
            </tr>
            <tr>
              <td>code</td>
              <td>Monaco</td>
              <td>14px</td>
              <td>400</td>
              <td><span className="code">&lt;p&gt;Hello&lt;/p&gt;</span></td>
            </tr>
            <tr>
              <td>extra-small</td>
              <td>Inter</td>
              <td>8px</td>
              <td>400</td>
              <td><span className="extra-small">Extra Small</span></td>
            </tr>
            <tr>
              <td>extra-small-bold</td>
              <td>Inter</td>
              <td>8px</td>
              <td>600</td>
              <td><span className="extra-small-bold">Extra Small</span></td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  )
}