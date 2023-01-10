import React from 'react';

function Textarea({ value }) {
  // Set the initial number of rows and columns to 1
  const [rows, setRows] = React.useState(1);

  // Update the rows and columns when the component mounts
  React.useEffect(() => {
    updateTextarea();
  }, []);

  // Update the rows and columns when the value of the textarea changes
  const handleChange = event => {
    updateTextarea();
  };

  const updateTextarea = () => {
    // Set the number of rows and columns based on the length of the string
    setRows(value.split('\n').length);
  };

  return (
    <textarea
      style={{ resize: 'none' }}
      rows={rows}
      onChange={handleChange}
      value={value}
    />
  );
}

export default Textarea;