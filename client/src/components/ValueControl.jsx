import { useEffect, useRef } from 'react'

function ValueControl({ value, onIncrease, onDecrease }) {

    return (
        <>
            <div tabIndex="0">
                <button onClick={onDecrease}>Decrease</button>
                {value.toFixed(1)}
                <button onClick={onIncrease}>Increase</button>
            </div>
        </>
    );
}

export default ValueControl