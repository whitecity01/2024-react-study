import { useState, useCallback, useEffect} from 'react';
import './Clock.scss';

const Clock = ({className, onPlus, mode}) =>{
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (isRunning) {
            const delta = mode === '타이머' ? -10 : 10;
            timer = setInterval(() => {
                setTime(prevTime => prevTime + delta);
            }, 10);
        }
        return () => clearInterval(timer);
    }, [isRunning, mode]);

    useEffect(() => {
        if (mode === '타이머' && time <= 0) {
            onClickStop();
        }
    }, [time, mode]);

    const onClickPlay = () => setIsRunning(true);
    const onClickPause = () => setIsRunning(false);
    const onClickStop = () => {
        setIsRunning(false);
        setTime(0);
    };
    const onClickPlus = useCallback(
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
                <div className='title'>{mode}</div>
                <div className='time'>{formatTime(time)}</div>
                <div className='buttons'>
                    <button className='button' onClick={onClickPlay}>
                        <img src={process.env.PUBLIC_URL + 'icons/play.png'}/>
                    </button>
                    <button className='button' onClick={onClickPlus}>
                        <img src={process.env.PUBLIC_URL + 'icons/plus.png'}/>
                    </button>
                    <button className='button' onClick={onClickPause}>
                        <img src={process.env.PUBLIC_URL + 'icons/pause.png'}/>
                    </button>
                    <button className='button' onClick={onClickStop}>
                        <img src={process.env.PUBLIC_URL + 'icons/stop.png'}/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Clock;