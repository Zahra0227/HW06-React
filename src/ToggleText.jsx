import { useState } from 'react';

const ToggleText = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle Text
      </button>
      {isVisible && <p>Hello, World!</p>}
    </div>
  );
};

export default ToggleText;
