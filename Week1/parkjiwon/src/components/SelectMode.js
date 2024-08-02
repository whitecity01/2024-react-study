import './SelectMode.scss';

const SelectMode = ({selectedMode, changeMode}) => {

    return(
        <div className='SelectMode'>
            {/* 선택된 모드에 selected 스타일 적용 */}
            <div className={`timer ${selectedMode === '타이머' ? 'selected' : ''}`} onClick={() => changeMode('타이머')}>타이머</div>
            <div className={`stopwatch ${selectedMode === '스톱워치' ? 'selected' : ''}`} onClick={() => changeMode('스톱워치')}>스톱워치</div>
        </div>
    );
}

export default SelectMode;