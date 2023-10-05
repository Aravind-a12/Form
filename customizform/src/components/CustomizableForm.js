import React, { useState } from 'react';

function CustomizableForm() {
  const [fields, setFields] = useState([
    { name: 'name', label: 'Name', value: '' },
    { name: 'email', label: 'Email', value: '' },
  ]);

  const addField = () => {
    setFields([...fields, { name: '', label: '', value: '' }]);
  };

  const handleChange = (index, event) => {
    const newFields = [...fields];
    newFields[index][event.target.name] = event.target.value;
    setFields(newFields);
  };

  return (
    <div>
      <form>
        {fields.map((field, index) => (
          <div key={index}>
            <label>{field.label}</label>
            <input
              type="text"
              name="label"
              value={field.label}
              onChange={(event) => handleChange(index, event)}
            />
            <input
              type="text"
              name="name"
              placeholder="Field Name"
              value={field.name}
              onChange={(event) => handleChange(index, event)}
            />
          </div>
        ))}
      </form>
      <button onClick={addField}>+</button>
    </div>
  );
}

export default CustomizableForm;
