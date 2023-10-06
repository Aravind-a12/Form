import React, { useState } from 'react';
import '../App.css';


function CustomizableForm() {
  const [fields, setFields] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');

  const addField = (fieldType) => {
    const newField = {};
    switch (fieldType) {
      case 'name':
        newField.name = '';
        break;
      case 'email':
        newField.email = '';
        break;
      case 'course':
        newField.course = '';
        break;
      case 'phone':
        newField.phone = '';
        break;
      case 'department':
        newField.department = '';
        break;
      default:
        break;
    }
    setFields([...fields, newField]);
  };

  const removeField = (index) => {
    const updatedFields = [...fields];
    updatedFields.splice(index, 1);
    setFields(updatedFields);
  };

  const handleFieldChange = (index, fieldName, value) => {
    const updatedFields = [...fields];
    updatedFields[index][fieldName] = value;
    setFields(updatedFields);
  };

  const handleBackgroundColorChange = (e) => {
    setBackgroundColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fields); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ backgroundColor }}>
        <h2>FORM 1</h2>
        <div className="background-color-picker">
          <label htmlFor="backgroundColor">BG Color:</label>
          <input
            type="color"
            id="backgroundColor"
            name="backgroundColor"
            value={backgroundColor}
            onChange={handleBackgroundColorChange}
          />
        </div>
        {fields.map((field, index) => (
          <div key={index} className="field-container">
            <div className="input-container">
              {Object.keys(field).map((fieldName) => (
                <div key={fieldName} className="field-wrapper">
                  <input
                    type="text"
                    placeholder={fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
                    value={field[fieldName] || ''}
                    onChange={(e) => handleFieldChange(index, fieldName, e.target.value)}
                  />
                  <button
                    type="button"
                    className="remove-field-button"
                    style={{ marginLeft: "10px", backgroundColor: "#FF0000" }}
                    onClick={() => removeField(index)}
                  >
                    &#10006;
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div>
          <select onChange={(e) => addField(e.target.value)}>
            <option value="">Select Field</option>
            <option value="name">Name</option>
            <option value="email">Email</option>
            <option value="course">Course</option>
            <option value="phone">Phone</option>
            <option value="department">Department</option>
          </select>
          <div>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CustomizableForm;
