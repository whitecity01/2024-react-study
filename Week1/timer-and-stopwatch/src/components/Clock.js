import { useState, useCallback, useEffect} from 'react';
import './Clock.scss';

const Clock = ({onPlus, mode}) =>{
    const [time, setTime] = useState(0); // time 0으로 초기화
    const [isRunning, setIsRunning] = useState(false); // isRunning은 초기 false

    // 타이머 작동
    useEffect(() => {
        let timer;
        if (isRunning) {
            const delta = mode === '타이머' ? -10 : 10; // mode에 따라 증가/감소 결정됨
            timer = setInterval(() => {
                setTime(prevTime => prevTime + delta);
            }, 10);
        }
        return () => clearInterval(timer); // 변화가 감지되었을 때 이전의 setInterval작업 종료
    }, [isRunning, mode]);

    // 타이머 모드일 때 시간이 0이되면 더 감소하지 않고 멈추기
    useEffect(() => {
        if (mode === '타이머' && time <= 0) {
            onClickStop();
        }
    }, [time]);

    // 버튼 onClick함수들
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


    // 시간을 00: 00: 00: 00 형식으로 반환
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
    );
}

export default Clock;