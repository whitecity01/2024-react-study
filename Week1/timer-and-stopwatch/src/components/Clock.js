import { useState, useCallback, useEffect} from 'react';
import './Clock.scss';

const Clock = ({className, onPlus}) =>{
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                setTime(prevTime => prevTime + 10);
            }, 10);
        }
        return () => clearInterval(timer);
    }, [isRunning]);

    const play = () => setIsRunning(true);
    const pause = () => setIsRunning(false);
    const stop = () => {
        setIsRunning(false);
        setTime(0);
    };
    const plus = useCallback(
        e=>{
            onPlus(formatTime(time));
        },
        [onPlus, time],
    );


    const formatTime = (time) => {
        const milliseconds = (time % 1000)/10;
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / (1000 * 60)) % 60);
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);

        return `${String(hours).padStart(2, '0')}:
                ${String(minutes).padStart(2, '0')}:
                ${String(seconds).padStart(2, '0')}:
                ${String(milliseconds).padStart(2, '0')}`;
    };

    return(
        <div className={className}>
            <div className='Clock'>
                <div className='title'>스톱워치</div>
                <div className='time'>{formatTime(time)}</div>
                <div className='buttons'>
                    <button className='button' onClick={play}>
                        <img src={process.env.PUBLIC_URL + 'icons/play.png'}/>
                    </button>
                    <button className='button' onClick={plus}>
                        <img src={process.env.PUBLIC_URL + 'icons/plus.png'}/>
                    </button>
                    <button className='button' onClick={pause}>
                        <img src={process.env.PUBLIC_URL + 'icons/pause.png'}/>
                    </button>
                    <button className='button' onClick={stop}>
                        <img src={process.env.PUBLIC_URL + 'icons/stop.png'}/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Clock;