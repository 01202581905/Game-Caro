import React from 'react';
import Board from './Board';

function Game() {
    const [data, setData] = React.useState({
        xIsNext: true,
        stepNumber: 0,
        squares: Array(10).fill(null)
    });

    const calculateResult = square => {
        const lines = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 4, 7],
            [1, 5, 9],
            [2, 5, 8],
            [3, 6, 9],
            [3, 5, 7]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (square[a] && square[a] === square[b] && square[b] === square[c]) {
                return square[a];
            }
        }
        return false;
    };

    const rePlayGame = () => {
        window.location.reload(true);
    };

    const renderWinResult = () => {
        const result = data.squares;
        if (calculateResult(result)) {
            return (
                <div className="popup">
                    <div className="popup__content">
                        <h3>Thắng rùiiiiiiiii, xin chúc mừng : {data.xIsNext ? "O" : "X"} nha</h3>
                        <button className="btn_replay" onClick={rePlayGame}>Chơi lại nè</button>
                    </div>
                </div>
            );
        }
        return '';

    };

    const handleOnClick = index => {
        console.log('click');
        const tempSquares = data.squares;
        tempSquares[index] = data.xIsNext ? 'X' : 'O';
        setData({
            xIsNext: !data.xIsNext,
            stepNumber: data.stepNumber + 1,
            squares: tempSquares
        })
    };

    const renderPopupResult = () => {
        if (data.stepNumber === 9) {
            return (
                <div className="popup">
                    <div className="popup__content">
                        <h3>Hòa rùi ! Không vuiiii, chơi lại điiiiiiiiiiiii !</h3>
                        <button className="btn_replay" onClick={rePlayGame}>Chơi lại nè</button>
                    </div>
                </div>
            );
        };
        return '';
    };

    return (
        <div className="game">
            {renderPopupResult()}
            {renderWinResult()}
            <Board onClick={(index) => handleOnClick(index)} squares={data.squares} />
        </div>
    );
}

export default Game;