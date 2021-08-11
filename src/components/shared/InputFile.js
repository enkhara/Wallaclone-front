import React from 'react';

import placeholder from '../../assets/images/placeholder.png';

function InputFile({ type, value, onChange, ...props }) {
  const inputRef = React.createRef(null);
  const [src, setSrc] = React.useState(null);

  const loadSrcFromFile = file => {
    if (!file) {
      setSrc(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = function () {
      setSrc(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleChange = (ev, image) => {
    console.log('en handleChange de inputFile');
    const file = image || ev.target.files[0];
    loadSrcFromFile(file);
    onChange(ev);
  };

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleChange}
        {...props}
      />
      <img
        onClick={handleClick}
        src={src || placeholder}
        alt=""
        width="200"
        height="200"
        style={{ objectFit: 'contain' }}
      />
    </>
  );
}

export default InputFile;
