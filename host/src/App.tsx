import './App.css';
import Test from 'federation_provider/button';
import 'remote-web-worker';
import { useEffect } from 'react';

const App = () => {

  // Uncaught Error: should have __webpack_require__.f.remotes
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
