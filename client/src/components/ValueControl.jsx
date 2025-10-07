import { useState } from 'react'

function ValueControl({ value, setValue, onIncrease, onDecrease }) {

    const [startValue, setStartValue] = useState(value.toFixed(1));

    const handleSetValue = () => {
        const newValue = parseFloat(startValue);
        if (!isNaN(newValue)) {
            setValue(newValue);
        }
    };

    const handleSetStartValueKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSetValue();
            event.target.blur();
        }
    };

    return (
        <div>
            <div>
                <input
                    type='number'
                    value={startValue}
                    onChange={(e) => setStartValue(e.target.value)}
                    onKeyDown={handleSetStartValueKeyDown}
                />
                <button onClick={handleSetValue}>Set Start Value</button>
            </div>
            <div>
                <button onClick={onDecrease}>Decrease</button>
                {value.toFixed(1)}
                <button onClick={onIncrease}>Increase</button>
            </div>
        </div>
    );
}

export default ValueControl