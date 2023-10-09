import React, { useState } from 'react';
import '../App.css';
import ColorPicker from 'react-best-gradient-color-picker';

function CustomizableForm() {
  const [fields, setFields] = useState([]);
  const [normalBackgroundColor, setNormalBackgroundColor] = useState('#FFFFFF');
  const [gradientBackgroundColor, setGradientBackgroundColor] = useState('transparent');
  const [selectedColorType, setSelectedColorType] = useState('solid');
  const [showColorPicker, setShowColorPicker] = useState(false);

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

  const handleToggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };

  const handleGradientBackgroundColorChange = (color) => {
    setGradientBackgroundColor(color);
    setSelectedColorType('gradient');
  };

  const handleNormalBackgroundColorChange = (color) => {
    setNormalBackgroundColor(color);
    setSelectedColorType('solid');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fields);
  };

  const formStyle = {
    background:
      selectedColorType === 'gradient'
        ? `linear-gradient(to bottom, transparent, ${gradientBackgroundColor}), ${normalBackgroundColor}`
        : normalBackgroundColor,
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2>FORM 1</h2>
        <div className="color-picker-container">
          <div
            className="background-color-picker"
            onClick={handleToggleColorPicker}
          >
            <label htmlFor="gradientColor">BG Color</label>
          </div>

          {showColorPicker && (
            <ColorPicker
              value={selectedColorType === 'gradient' ? gradientBackgroundColor : normalBackgroundColor}
              onChange={
                selectedColorType === 'gradient'
                  ? handleGradientBackgroundColorChange
                  : handleNormalBackgroundColorChange
              }
            />
          )}
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
                    style={{ marginLeft: '10px', backgroundColor: '#FF0000' }}
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
