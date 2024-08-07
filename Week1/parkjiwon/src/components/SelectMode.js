import './SelectMode.scss';

const SelectMode = ({selectedMode, changeMode}) => {

    return(
        <div className='select-mode-container'>
            {/* 선택된 모드에 selected 스타일 적용 */}
            <button className={`timer ${selectedMode === '타이머' ? 'selected' : ''}`} onClick={() => changeMode('타이머')}>타이머</button>
            <button className={`stopwatch ${selectedMode === '스톱워치' ? 'selected' : ''}`} onClick={() => changeMode('스톱워치')}>스톱워치</button>
        </div>
    );
}

export default SelectMode;