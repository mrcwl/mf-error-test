import './App.css';
import Test from 'remote/Test';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    const worker = new Worker(new URL('./test.worker.ts', import.meta.url));
    worker.onmessage = (e) => {
      console.log(e);
    };

    worker.postMessage([1, 2, 3]);
  }, []);
  return (
    <div className="content">
      123123
      <Test />
    </div>
  );
};

export default App;
