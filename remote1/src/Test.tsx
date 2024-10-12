import { useEffect } from 'react';

const Test = () => {
  useEffect(() => {
    const worker = new Worker(new URL('./test.worker.ts', import.meta.url), { name: 'test-worker' });
    worker.postMessage({})
  }, [])
  return (
    <div>
      <h1>Test</h1>
    </div>
  );
};

export default Test;
