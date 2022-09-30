import './App.css';
import Canvas from './components/Canvas';
import ControlBar from './components/ControlBar';

function App() {


  class Cell{
    constructor(x,y){
      this.x = x;
      this.y=y;
      this.width=100;
      this.height=100;
    }
  
    draw(context){
      context.strokeStyle = 'black';
      context.strokeRect(this.x,this.y,this.width,this.height);
    }
  }
  
  const gameGrid = [];

  function creatGrid(){
    for(let y = 100; y< 600; y+=100){
      for(let x = 0; x< 900; x+=100){
        gameGrid.push(new Cell(x,y));
      }
    }
  }

  creatGrid();

  function handleGameGrid(context){
    for(let i= 0; i < gameGrid.length;i++){
      gameGrid[i].draw(context);
    }
  }

  const draw = context => {
    context.fillStyle = 'blue';
    context.fillRect(0,0,900,100)
    handleGameGrid(context)
    requestAnimationFrame(draw);
  };

  return (
    <div className="App">
      <ControlBar></ControlBar>
      <Canvas draw={draw} height={600} width={900}></Canvas>
    </div>
  );
}

export default App;
