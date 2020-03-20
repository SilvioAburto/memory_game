import React, {Component} from 'react';
import Grid from './Grid/Grid';
import './MemoryGame.css'
import Confetti from 'react-confetti'
import Popup from "reactjs-popup";

export default class MemoryGame extends Component {
    constructor(props){
        super(props);
        this.state = {
            grid:[],
            mouseIsPressed:false,
            nodesPlayed:[],
            gameWonBool:false
        };
    }
    componentDidMount() {
        const grid = getInitialGrid();
        this.setState({grid});
      }
    handleMouseDown(row, col) {
      var _this = this
      const newGrid = getUpdatedGrid(this.state.grid, row, col);
      const node = newGrid[row][col];
      _this.state.nodesPlayed.push(node.cellId)
      if(_this.state.nodesPlayed.length === 1){
        this.startGame()
      }
      this.gameLogic(node.cellId);
      this.setState({grid: newGrid,
                    mouseIsPressed: true
                  }); 
    }

    startGame(){
      let screenSize = window.screen.width;
      var cols;
      var rows;
      if(screenSize <= 800){
        cols =5;
        rows = 8;
      }
      else{
        cols = 10;
        rows = 5;
      }
      const Grid = this.state.grid
      for(var i=0; i < rows; i++){
          for(var j=0; j < cols; j++){
            const node = Grid[i][j]
            setTimeout(() => {
              if(node.isActive === 1){
                document.getElementById(`node-${node.row}-${node.col}`).style.color = 'white';
              }
              console.log(node.isActive)
            }, 10 *i)
            //console.log(Grid[i][j])
          }
      }
    }

    gameOver(){
      let screenSize = window.screen.width;
      var cols;
      var rows;

      document.getElementById(`gameOverId`).style.visibility = 'visible';
      if(screenSize <= 800){
        cols =5;
        rows = 8;
      }
      else{
        cols = 10;
        rows = 5;
      }
      const Grid = this.state.grid
      for(var i=0; i < rows; i++){
          for(var j=0; j < cols; j++){
            const node = Grid[i][j]
            setTimeout(() => {
              document.getElementById(`node-${node.row}-${node.col}`).className =
              'node node-gamefinished';
            }, 100 *i)
          }
      }
    }

    gameWon(){
      let screenSize = window.screen.width;
      var cols;
      var rows;

      document.getElementById(`gameWonId`).style.visibility = 'visible';
      if(screenSize <= 800){
        cols =5;
        rows = 8;
      }
      else{
        cols = 10;
        rows = 5;
      }
      const Grid = this.state.grid
      for(var i=0; i < rows; i++){
          for(var j=0; j < cols; j++){
            const node = Grid[i][j]
            setTimeout(() => {
              document.getElementById(`node-${node.row}-${node.col}`).className =
              'node node-gamefinished';
            }, 100 *i)
          }
      }

      this.setState({
        gameWonBool: true
      }); 
    }


    gameLogic(nodeId){
      var playedCount = this.state.nodesPlayed.length
      //Since the game will end as soon as the order logic breaks we can use a simple comparisson
      if(playedCount !== nodeId){
        //console.log("Game Over")
        this.gameOver();
      }
      else if (playedCount === 9){
        this.gameWon();
      }
    }
    render(){
        const {grid} = this.state;
        //const nodesPlayed = this.state;
        return (
            <>
              <div className="grid">
                <Confetti
                  run={this.state.gameWonBool}
                />
                <div id="gameOverId" className = "gameOver">
                  Game Over!
                </div>
                <div id="gameWonId" className = "gameWon">
                  You Win!
                </div>
                {grid.map((row, rowIdx) => {
                  return (
                    <div key={rowIdx}>
                      {row.map((node, nodeIdx) => {
                        const {row, col,isActive,cellId} = node;
                        return (
                          <Grid
                            key={nodeIdx}
                            col={col}
                            onMouseDown={(row, col) => this.handleMouseDown(row, col)}
                            row={row}
                            isActive = {isActive}
                            cellId = {cellId}
                            >
                        </Grid>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
              <button id ="play" onClick= {()=> {window.location.reload();}}>New Game</button>
              <Popup trigger={<button className="button">Instructions</button>} modal>
                  {close => (
                    <div className="modal">
                      <a className="close" onClick={close}>
                        &times;
                      </a>
                      <div className="header">Instructions! </div>
                      <div className="content">
                      <ul>
                        <li>
                          Memorize the numbers in the board. They are unique numbers from 1 to 9.
                        </li>
                        <li>
                          To begin a game press on number 1 and procede to reveal the rest of the numbers in numerical order.
                        </li>
                        <li>
                          If you reveal all numbers in order you win the game!
                        </li>
                      </ul>
                      </div>
                      <div className="actions">
                        <button
                          className="button"
                          onClick={() => {close();}}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  )}
                </Popup>
            </>
          );
    }
}


const RandomNine = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
    //temporaryValue & randomIndex are undefined at this point
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        //console.log(randomIndex)
        currentIndex -= 1; //substract 1 from current index
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
        //newArray.push(Object.assign(array[currentIndex], {id:currentIndex}))
    }

    let NinePositions = array.slice(0,9)
    for(var i=0; i < NinePositions.length; i++){
        Object.assign(NinePositions[i], {id:i+1})
    }
    //Filter the first 9 
    //console.log(NinePositions)
    return NinePositions;
}

const GridPositions = () => {
    let IndexRandom = [];
    let screenSize = window.screen.width;
    var cols;
    var rows;
    if(screenSize <= 800){
      cols =5;
      rows = 8;
    }
    else{
      cols = 10;
      rows = 5;
    }
    let counter = 0;
    for(var i=0; i < rows; i++){
        for(var j=0; j < cols; j++){
            counter = counter + 1
            const dict  = {
                index:counter,
                row: i,
                col: j,
                id:0
            }
            IndexRandom.push(dict)
            //console.log(i+"-"+j)
        }
    }
    return IndexRandom
}

//console.log(GridPositions())
const getInitialGrid = () => {
    const grid = [];
    var cols;
    var rows;
    let screenSize = window.screen.width;
    if(screenSize <= 800){
      cols =5;
      rows = 8;
    }
    else{
      cols = 10;
      rows = 5;
    }
    for (let row = 0; row < rows; row++) {
      const currentRow = [];
      for (let col = 0; col < cols; col++) {
        currentRow.push(createNode(col, row));
      }
      grid.push(currentRow);
    }
    //console.log("Initial Grid")
    //console.log(grid)
    return grid;
  };

  let randomCells = RandomNine(GridPositions())


  const filterNodeNum = (nodeArray, row, col) => {
      let Num = nodeArray.filter(function(el){
          return el.row === row &&
                 el.col === col
      });
      //console.log(Num)
      if(Num === undefined || Num.length === 0){
          return;
      }
      else{
          return Num[0].id
      }
  }

  //var b = filterNodeNum(randomCells,randomCells[6]["row"],randomCells[6]["col"])
  //console.log(b)
  const createNode = (col, row) => {
    return {
      col,
      row,
      isActive: (row === randomCells[0]["row"]  && col === randomCells[0]["col"] ) |
                (row === randomCells[1]["row"]  && col === randomCells[1]["col"] ) | 
                (row === randomCells[2]["row"]  && col === randomCells[2]["col"] ) |  
                (row === randomCells[3]["row"]  && col === randomCells[3]["col"] ) | 
                (row === randomCells[4]["row"]  && col === randomCells[4]["col"] ) | 
                (row === randomCells[5]["row"]  && col === randomCells[5]["col"] ) |  
                (row === randomCells[6]["row"]  && col === randomCells[6]["col"] ) | 
                (row === randomCells[7]["row"]  && col === randomCells[7]["col"] ) | 
                (row === randomCells[8]["row"]  && col === randomCells[8]["col"] ) ,
      cellId: filterNodeNum(randomCells,row,col)
    };
  };

  const getUpdatedGrid = (grid, row, col) => {
    const newGrid = grid.slice(); //extract current grid
    const node = newGrid[row][col]; //extract node attributes from row, col position
    const newNode = {
      ...node,
      isActive: !node.isActive, //when a node is clicked set attribute isActive to false.
    };
    //console.log(newNode)
    newGrid[row][col] = newNode;
    return newGrid; //re-render new grid with updated values
  };
