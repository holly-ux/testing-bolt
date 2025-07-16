import { useNavigate } from 'react-router-dom'

type Page = 'home' | 'typography' | 'colors' | 'data-vis-colors' | 'buttons' | 'icons' | 'tags' | 'metrics' | 'page-headers' | 'page-templates' | 'cards' | 'hover-card' | 'dropdowns' | 'charts' | 'tables' | 'toggles' | 'checkboxes' | 'inputs' | 'navigation' | 'radios'
type TypographySection = 'text-presets' | 'headings' | 'paragraphs' | 'metrics' | 'misc'
type ColorSection = 'blue' | 'gray' | 'green' | 'lime' | 'magenta' | 'orange' | 'pink' | 'purple' | 'red' | 'teal' | 'yellow'

interface PrismPageLeftSideProps {
  currentPage: Page
  currentColorSection: ColorSection
  currentTypographySection: TypographySection
  isColorsExpanded: boolean
  isTypographyExpanded: boolean
  handleColorClick: () => void
  handleTypographyClick: () => void
  handleColorSectionClick: (section: ColorSection) => void
  handleTypographySectionClick: (section: TypographySection) => void
}

export function PrismPageLeftSide({
  currentPage,
  currentColorSection,
  currentTypographySection,
  isColorsExpanded,
  isTypographyExpanded,
  handleColorClick,
  handleTypographyClick,
  handleColorSectionClick,
  handleTypographySectionClick
}: PrismPageLeftSideProps) {
  const navigate = useNavigate()

  return (
    <div className="nav-sidebar bg-[var(--color-gray-10)] border-r border-[var(--color-gray-40)]">
      <h3 className="text-[var(--font-heading-3)] text-[var(--color-gray-100)] px-8 pt-4 pb-8 m-0">🌈 Re-Prism</h3>
      <h1 className="!mt-0">Design Tokens</h1>
      <ul className="nav-list">          
        <li 
          className={`nav-item ${currentPage === 'colors' ? 'active' : ''} ${isColorsExpanded ? 'expanded' : ''}`}
          onClick={handleColorClick}
        >
          Colors
          {isColorsExpanded && (
            <ul className="nav-sublist">
              <li 
                className={`nav-subitem ${currentColorSection === 'blue' ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation()
                  handleColorSectionClick('blue')
                }}
              >
                Blue
              </li>
              <li 
                className={`nav-subitem ${currentColorSection === 'gray' ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation()
                  handleColorSectionClick('gray')
                }}
              >
                Gray
              </li>
              <li 
                className={`nav-subitem ${currentColorSection === 'green' ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation()
                  handleColorSectionClick('green')
                }}
              >
                Green
              </li>
              <li 
                className={`nav-subitem ${currentColorSection === 'lime' ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation()
                  handleColorSectionClick('lime')
                }}
              >
                Lime
              </li>
              <li 
                className={`nav-subitem ${currentColorSection === 'magenta' ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation()
                  handleColorSectionClick('magenta')
                }}
              >
                Magenta
              </li>
              <li 
                className={`nav-subitem ${currentColorSection === 'orange' ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation()
                  handleColorSectionClick('orange')
                }}
              >
                Orange
              </li>
              <li 
                className={`nav-subitem ${currentColorSection === 'pink' ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation()
                  handleColorSectionClick('pink')
                }}
              >
                Pink
              </li>
              <li 
                className={`nav-subitem ${currentColorSection === 'purple' ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation()
                  handleColorSectionClick('purple')
                }}
              >
                Purple
              </li>
              <li 
                className={`nav-subitem ${currentColorSection === 'red' ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation()
                  handleColorSectionClick('red')
                }}
              >
                Red
              </li>
              <li 
                className={`nav-subitem ${currentColorSection === 'teal' ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation()
                  handleColorSectionClick('teal')
                }}
              >
                Teal
              </li>
              <li 
                className={`nav-subitem ${currentColorSection === 'yellow' ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation()
                  handleColorSectionClick('yellow')
                }}
              >
                Yellow
              </li>
            </ul>
          )}
        </li>
        <li 
          className={`nav-item ${currentPage === 'data-vis-colors' ? 'active' : ''}`}
          onClick={() => navigate('/prism/data-vis-colors')}
        >
          Data Vis Colors
        </li>
        <li 
          className={`nav-item ${currentPage === 'typography' ? 'active' : ''} ${isTypographyExpanded ? 'expanded' : ''}`}
          onClick={handleTypographyClick}
        >
          Typography
          {isTypographyExpanded && (
            <ul className="nav-sublist">
              <li 
                className={`nav-subitem ${currentTypographySection === 'headings' ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation()
                  handleTypographySectionClick('headings')
                }}
              >
                Headings
              </li>
              <li 
                className={`nav-subitem ${currentTypographySection === 'metrics' ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation()
                  handleTypographySectionClick('metrics')
                }}
              >
                Metrics
              </li>
              <li 
                className={`nav-subitem ${currentTypographySection === 'misc' ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation()
                  handleTypographySectionClick('misc')
                }}
              >
                Misc
              </li>
              <li 
                className={`nav-subitem ${currentTypographySection === 'paragraphs' ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation()
                  handleTypographySectionClick('paragraphs')
                }}
              >
                Paragraphs
              </li>
              <li 
                className={`nav-subitem ${currentTypographySection === 'text-presets' ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation()
                  handleTypographySectionClick('text-presets')
                }}
              >
                Text Presets
              </li>
            </ul>
          )}
        </li>
      </ul>
      
      <h1>Components</h1>
      <ul className="nav-list">
        <li 
          className={`nav-item ${currentPage === 'buttons' ? 'active' : ''}`}
          onClick={() => navigate('/prism/buttons')}
        >
          Buttons
        </li>
        <li 
          className={`nav-item ${currentPage === 'cards' ? 'active' : ''}`}
          onClick={() => navigate('/prism/cards')}
        >
          Cards
        </li>
        <li 
          className={`nav-item ${currentPage === 'checkboxes' ? 'active' : ''}`}
          onClick={() => navigate('/prism/checkboxes')}
        >
          Checkboxes
        </li>
        <li 
          className={`nav-item ${currentPage === 'charts' ? 'active' : ''}`}
          onClick={() => navigate('/prism/charts')}
        >
          Charts
        </li>
        <li 
          className={`nav-item ${currentPage === 'dropdowns' ? 'active' : ''}`}
          onClick={() => navigate('/prism/dropdowns')}
        >
          Dropdowns
        </li>
        <li 
          className={`nav-item ${currentPage === 'hover-card' ? 'active' : ''}`}
          onClick={() => navigate('/prism/hover-card')}
        >
          Hover Card
        </li>
        <li 
          className={`nav-item ${currentPage === 'icons' ? 'active' : ''}`}
          onClick={() => navigate('/prism/icons')}
        >
          Icons
        </li>
        <li 
          className={`nav-item ${currentPage === 'inputs' ? 'active' : ''}`}
          onClick={() => navigate('/prism/inputs')}
        >
          Inputs
        </li>
        <li 
          className={`nav-item ${currentPage === 'metrics' ? 'active' : ''}`}
          onClick={() => navigate('/prism/metrics')}
        >
          Metrics
        </li>
        <li 
          className={`nav-item ${currentPage === 'navigation' ? 'active' : ''}`}
          onClick={() => navigate('/prism/navigation')}
        >
          Navigation
        </li>
        <li 
          className={`nav-item ${currentPage === 'page-headers' ? 'active' : ''}`}
          onClick={() => navigate('/prism/page-headers')}
        >
          Page Headers
        </li>
        <li 
          className={`nav-item ${currentPage === 'radios' ? 'active' : ''}`}
          onClick={() => navigate('/prism/radios')}
        >
          Radio Buttons
        </li>
        <li 
          className={`nav-item ${currentPage === 'tags' ? 'active' : ''}`}
          onClick={() => navigate('/prism/tags')}
        >
          Tags
        </li>
        <li 
          className={`nav-item ${currentPage === 'tables' ? 'active' : ''}`}
          onClick={() => navigate('/prism/tables')}
        >
          Tables
        </li>
        <li 
          className={`nav-item ${currentPage === 'toggles' ? 'active' : ''}`}
          onClick={() => navigate('/prism/toggles')}
        >
          Toggles
        </li>
      </ul>
      
      <h1>Composites</h1>
      <ul className="nav-list">
        <li 
          className={`nav-item ${currentPage === 'page-templates' ? 'active' : ''}`}
          onClick={() => navigate('/prism/page-templates')}
        >
          Page Templates
        </li>
      </ul>
    </div>
  )
}