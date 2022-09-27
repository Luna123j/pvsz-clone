import './App.css';
import Canvas from './components/Canvas';

function App() {
  const draw = context => {
    context.beginPath();
    context.arc(95, 50, 40, 0, 2 * Math.PI);
    context.stroke();
  };
  return (
    <div className="App">
      <Canvas draw={draw} height={100} width={100}></Canvas>
    </div>
  );
}

export default App;
