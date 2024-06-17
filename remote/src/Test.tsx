import { useEffect } from 'react';

const Test = () => {
  useEffect(() => {
    console.log('remote test component');
  }, []);
  return (
    <div>
      <h1>Test</h1>
    </div>
  );
};

export default Test;
