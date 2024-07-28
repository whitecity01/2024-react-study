import './SelectMode.scss';

const SelectMode = ({className}) => {
    return(
        <div className={className}>
            <div className='SelectMode'>
                <div className='timer'>타이머</div>
                <div className='stopwatch'>스톱워치</div>
            </div>
        </div>
        
    );
}

export default SelectMode;