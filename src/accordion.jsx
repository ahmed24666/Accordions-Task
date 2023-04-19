import React, { useState } from 'react';
import './accordion.css'
function Accordion() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveAccordion(index === activeAccordion ? null : index);
  };

  return (
    <div className="accordion">
      <div className="accordion-item">
        <button
          className="accordion-header"
          onClick={() => handleAccordionClick(0)}
          aria-expanded={activeAccordion === 0}
        >
          Search Input
          <div className="icon">{activeAccordion===0?'-':'+'}</div>
        </button>
        <div className={`accordion-panel ${activeAccordion === 0 ? 'active' : ''}`}>
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      <div className="accordion-item">
        <button
          className="accordion-header"
          onClick={() => handleAccordionClick(1)}
          aria-expanded={activeAccordion === 1}
        >
          Checkboxes with Labels
          <div className="icon">{activeAccordion===1?'-':'+'}</div>
        </button>
        <div className={`accordion-panel ${activeAccordion === 1 ? 'active' : ''}`}>
          <div className='single'>
            <input type="checkbox" id="checkbox1" name="checkbox1" />
            <label htmlFor="checkbox1">Checkbox 1</label>
          </div>
          <div className='single'>
            <input type="checkbox" id="checkbox2" name="checkbox2" />
            <label htmlFor="checkbox2">Checkbox 2</label>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <button
          className="accordion-header"
          onClick={() => handleAccordionClick(2)}
          aria-expanded={activeAccordion === 2}
        >
          Paragraph
          <div className="icon">{activeAccordion===2?'-':'+'}</div>
        </button>
        <div className={`accordion-panel ${activeAccordion === 2 ? 'active' : ''}`}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo ut turpis mollis elementum.
            Mauris blandit ligula id risus interdum dignissim. Nulla facilisi. Donec accumsan rhoncus libero, ut aliquam
            velit iaculis ac. Duis lacinia vestibulum sapien, sit amet ultrices elit bibendum vel. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia curae; In auctor dui sed orci consequat, ac
            vulputate nibh blandit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Accordion