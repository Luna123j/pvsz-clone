import './App.css';
import Canvas from './components/Canvas';
import ControlBar from './components/ControlBar';

function App() {
  const draw = context => {

  };
  return (
    <div className="App">

      <Canvas draw={draw} height={100} width={100}>
       
      </Canvas>
    </div>
  );
}

export default App;
