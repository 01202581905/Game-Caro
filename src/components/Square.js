import React from 'react';

function Square(props) {

    const [disable, setDisable] = React.useState(false);

    const handleClick = () => {
        props.onClick();
        setDisable(true);
    };

    return (
        <button disabled={disable} className="square" onClick={() => handleClick()}>
            {props.value}
        </button>
    );
}

export default Square;