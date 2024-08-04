import { useState , useRef } from "react";
import React from "react";
import circle from "../assets/circle.png"
import cross from "../assets/X.png"

export default function TicTacToe()
{
    const [lock,setLock] = useState(false);

    let box3 = useRef(null);                // created for the
    let box1 = useRef(null);                // refernce of each block
    let box2 = useRef(null);                // so that upon reset the game
    let box4 = useRef(null);                // each box will be cleared
    let box5 = useRef(null);                //
    let box6 = useRef(null);                //
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);
    
    let boxArray = [box1 , box2 , box3 , box4 , box5 , box6 , box7 , box8 , box9];

    const [dataList,setDataList] = useState(["","","","","","","","",""]);    //to execute win logic...

    const [turn , setTurn] = useState(true);  // true -> player 1(circle) and false -> player-2(cross)          

    const [winner , setWinner] = useState("");  // TO set the winner.
    
  const checkWin = () => {
    if (
        (dataList[0] === dataList[1] && dataList[1] === dataList[2] && dataList[2] !== "") ||
        (dataList[3] === dataList[4] && dataList[4] === dataList[5] && dataList[5] !== "") ||
        (dataList[6] === dataList[7] && dataList[7] === dataList[8] && dataList[8] !== "") ||
        (dataList[0] === dataList[3] && dataList[3] === dataList[6] && dataList[6] !== "") ||
        (dataList[1] === dataList[4] && dataList[4] === dataList[7] && dataList[7] !== "") ||
        (dataList[2] === dataList[5] && dataList[5] === dataList[8] && dataList[8] !== "") ||
        (dataList[0] === dataList[4] && dataList[4] === dataList[8] && dataList[8] !== "") ||
        (dataList[2] === dataList[4] && dataList[4] === dataList[6] && dataList[6] !== "")
      ) {
        setLock(true);
        setWinner(turn ? `X Wins!!` : `O Wins!!`);
      } else if (!dataList.includes("")) {
        setWinner("It's a tie");
        setLock(true);
      }
    }

    const handleClick = (e,index) => {
        if(dataList[index] === "" && !lock)
            {
                const updateddataList = [...dataList];
                updateddataList[index] = turn ? "O" : "X";
                console.log(updateddataList)
                setDataList(updateddataList);
                e.target.innerHTML = `<img src = ${turn?circle:cross} class="h-32 w-32"}>`
                setTurn(!turn);
                // console.log(dataList)
                console.log("Wiiner function called")
                checkWin();
            }
    };

    const resetGame = (e) => {
        console.log("Game Reset");
        boxArray.forEach((boxRef) => {
            boxRef.current.innerHTML = ``;
        })
        setWinner("");
        setLock(false)
        setTurn(true);
        setDataList(["","","","","","","","",""]);
    }

    return (
        <>
        <div className="container mx-auto p-4 m-4 bg-green-400 flex flex-col items-center">
            <h2 className="text-center m-4 text-lg ">Tic Tac Toe Game in <span className="font-bold text-orange-700">React</span></h2>
            <div className="board">
                <div className="flex justify-center">
                    <div className="h-32 w-32 bg-black ml-2 mt-2 shadow-[0_0_15px_rgba(0,0,255,0.8)]"
                    onClick={(e)=> handleClick(e,0)}
                    ref={box1}
                    > </div>
                    <div className="h-32 w-32 bg-black ml-2 mt-2 shadow-[0_0_15px_rgba(0,0,255,0.8)]"
                    onClick={(e)=> handleClick(e,1)}
                    ref={box2}
                    > 
                    </div>

                    <div className="h-32 w-32 bg-black ml-2 mt-2 shadow-[0_0_15px_rgba(0,0,255,0.8)]"
                    onClick={(e)=> handleClick(e,2)}
                    ref={box3}
                    >
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="h-32 w-32 bg-black ml-2 mt-2 shadow-[0_0_15px_rgba(0,0,255,0.8)]"
                    onClick={(e)=> handleClick(e,3)}
                    ref={box4}
                    ></div>
                    <div className="h-32 w-32 bg-black ml-2 mt-2 shadow-[0_0_15px_rgba(0,0,255,0.8)]"
                    onClick={(e)=> handleClick(e,4)}
                    ref={box5}
                    ></div>
                    <div className="h-32 w-32 bg-black ml-2 mt-2 shadow-[0_0_15px_rgba(0,0,255,0.8)]"
                    onClick={(e)=> handleClick(e,5)}
                    ref={box6}
                    ></div>
                </div>
                <div className="flex justify-center">
                    <div className="h-32 w-32 bg-black ml-2 mt-2 shadow-[0_0_15px_rgba(0,0,255,0.8)]"
                    onClick={(e)=> handleClick(e,6)}
                    ref={box7}
                    ></div>
                    <div className="h-32 w-32 bg-black ml-2 mt-2 shadow-[0_0_15px_rgba(0,0,255,0.8)]"
                    onClick={(e)=> handleClick(e,7)}
                    ref={box8}
                    ></div>
                    <div className="h-32 w-32 bg-black ml-2 mt-2 shadow-[0_0_15px_rgba(0,0,255,0.8)]"
                    onClick={(e)=> handleClick(e,8)}
                    ref={box9}
                    ></div>
                </div>
            </div>

            {winner != "" && (
            <>
                <div className="winner-table">
                <span className="winner-text">{winner}</span>
                </div>
            </>
            )}

                <button className="bg-black text-white rounded-3xl
                  p-4 mt-4 h-12 w-32 flex justify-center items-center"
                onClick={resetGame}
                > Reset</button>
        </div>
        </>
    )
}
