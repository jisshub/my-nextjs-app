"use client"

import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function FilterDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Filter By
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/service">Service</Dropdown.Item>
        <Dropdown.Item href="/service-type">Service Type</Dropdown.Item>
        <Dropdown.Item href="/service-name">Service Name</Dropdown.Item>
        <Dropdown.Item href="/schedule">Schedule</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default FilterDropdown;
