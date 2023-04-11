console.log("hello world")

class chessBoard{
    constructor(){
        this.positions=[]
        for (let i=0;i<8;i++){
            this.positions.push([" "," "," "," "," "," "," "," "])
        }
    }
    printBoard(){
        console.log("******************************")
        
        this.positions.forEach(element => {
           
           console.log(element);
           
        });
    }

    movePiece(xorig,yorig,x,y){
        this.positions[yorig][xorig]=" ";
        this.positions[y][x]="x";
        this.printBoard();
    }

    placePiece(x,y){        
        this.positions[y][x]="x";
        this.printBoard();
    }

    possibleMovements(x,y){
        let output=[];
        if((x-2)>0){
            if((y-1)>0){
                output.push([x-2,y-1])
            }
            if((y+1)<8){
                output.push([x-2,y+1])
            }
        }
        if((x+2)<8){
            if((y-1)>0){
                output.push([x+2,y-1])
            }
            if((y+1)<8){
                output.push([x+2,y+1])
            }
        }
        if((x-1)>0){
            if((y-2)>0){
                output.push([x-1,y-2])
            }
            if((y+2)<8){
                output.push([x-1,y+2])
            }
        }
        if((x+1)<8){
            if((y-1)>0){
                output.push([x+1,y-2])
            }
            if((y+1)<8){
                output.push([x+1,y+2])
            }
        }
        return output;
    }

    knightMoves([x,y],[xf,yf]) {
        let firstLevel= this.possibleMovements(x,y);
        let secondLevel=[];
        firstLevel.forEach(element => {
            if(xf==element[0] && yf==element[1])
                console.log( "=> You made it in 1 moves!")
            
        });
    }
}

let myboard= new chessBoard;

console.log(myboard.possibleMovements(4,4))
console.log(myboard.possibleMovements(0,0))

myboard.knightMoves([0,0],[2,1]);
myboard.knightMoves([0,0],[1,2]);