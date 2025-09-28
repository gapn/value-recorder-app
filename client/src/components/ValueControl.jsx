import { useEffect, useRef } from 'react'

function ValueControl({ value, setValue }) {
    
    const divRef = useRef(null);

    useEffect(() => {
        if (divRef.current) {
            divRef.current.focus();
        }
    }, []);

    const decreaseValue = () => {
        setValue(parseFloat((value - 0.1).toFixed(1)));
    };

    const increaseValue = () => {
        setValue(parseFloat((value + 0.1).toFixed(1)));
    };

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowUp') {
            increaseValue();
        } else if (event.key === 'ArrowDown') {
            decreaseValue();
        };
    };

    return (
        <>
            <div ref={divRef} onKeyDown={handleKeyDown} tabIndex="0">
                <button onClick={decreaseValue}>Decrease</button>
                {value.toFixed(1)}
                <button onClick={increaseValue}>Increase</button>
            </div>
        </>
    );
}

export default ValueControl