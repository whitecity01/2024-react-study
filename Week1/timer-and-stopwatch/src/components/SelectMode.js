import { useState } from 'react';
import './SelectMode.scss';

const SelectMode = ({className, selectedMode, changeMode}) => {

    return(
        <div className={className}>
            <div className='SelectMode'>
                <div className={`timer ${selectedMode === '타이머' ? 'selected' : ''}`} onClick={() => changeMode('타이머')}>타이머</div>
                <div className={`stopwatch ${selectedMode === '스톱워치' ? 'selected' : ''}`} onClick={() => changeMode('스톱워치')}>스톱워치</div>
            </div>
        </div>
        
    );
}

export default SelectMode;