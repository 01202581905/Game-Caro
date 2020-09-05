import React from 'react';
import Square from './Square';

function Board(props) {

    const renderSquare = index => {
        return <Square value={props.squares[index]} onClick={() => props.onClick(index)} />
    };

    return (
        <div className="board">
            <div className="board__row">
                {renderSquare(1)}
                {renderSquare(2)}
                {renderSquare(3)}
            </div>
            <div className="board__row">
                {renderSquare(4)}
                {renderSquare(5)}
                {renderSquare(6)}
            </div>
            <div className="board__row">
                {renderSquare(7)}
                {renderSquare(8)}
                {renderSquare(9)}
            </div>
        </div>
    );
}

export default Board;