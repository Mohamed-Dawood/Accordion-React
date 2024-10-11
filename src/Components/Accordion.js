import { useState } from 'react';
import './Accordion.css';

function Accordion() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="accordion">
      <section>
        <header onClick={handleOpen}>
          <h1>Software Fields</h1>
          <span>{isOpen ? '-' : '+'}</span>
        </header>
        {isOpen && (
          <ul>
            <li>Web Development:</li>
            <li>Mobile Development</li>
            <li>Desktop Development</li>
            <li>Game Development</li>
          </ul>
        )}
      </section>
    </div>
  );
}

export default Accordion;
