import { useState, useEffect } from 'react'

function LiveClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, []);

    const day = time.getDate().toString().padStart(2, '0');
    const month = (time.getMonth()+1).toString().padStart(2, '0');
    const year = time.getFullYear().toString();
    const hour = time.getHours().toString().padStart(2, '0');
    const minute = time.getMinutes().toString().padStart(2, '0');
    const second = time.getSeconds().toString().padStart(2, '0');

    return (
        <div>
            <div>
                {day}.{month}.{year} {hour}:{minute}:{second}
            </div>
        </div>
    );
}

export default LiveClock