import './App.css';
import Test from 'federation_provider/button';
// import { useEffect } from 'react';
import 'remote-web-worker';

const App = () => {
  // useEffect(() => {
  //   const worker = new Worker(new URL('./test.worker.ts', import.meta.url));
  //   worker.onmessage = (e) => {
  //     console.log(e);
  //   };
  //
  //   worker.postMessage([1, 2, 3]);
  // }, []);
  return (
    <div className="content">
      123123
      <Test />
    </div>
  );
};

export default App;
