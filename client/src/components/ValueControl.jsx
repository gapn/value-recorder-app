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
        <div className='text-center'>
            <div className='input-group mt-2'>
                <input
                    type='number'
                    className='form-control text-center'
                    value={startValue}
                    onChange={(e) => setStartValue(e.target.value)}
                    onKeyDown={handleSetStartValueKeyDown}
                />
                <button onClick={handleSetValue} className='input-group-text fw-bold'>Set Start Value</button>
            </div>
            <div>
                <button onClick={onDecrease} className='btn-emoji'>⬇️</button>
                    <span className='mx-3 fs-3 fw-bold'>{value.toFixed(1)}</span>
                <button onClick={onIncrease} className='btn-emoji'>⬆️</button>
            </div>
        </div>
    );
}

export default ValueControl