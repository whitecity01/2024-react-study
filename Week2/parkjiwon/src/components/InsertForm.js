import { useCallback, useState } from 'react';
import './InsertForm.scss';

const InsertForm = ({onInsert}) =>{
    const [value, setValue] = useState(''); // 입력 값

    const onChange = useCallback( // 입력의 변화를 감지해 반영
        e=>{
            setValue(e.target.value);
        }, []
    );

    const onClick = useCallback( // onInsert를 실행하고, value값 초기화
        () =>{
            onInsert(value);
            setValue('');
        }, [onInsert, value]
    );

    return(
        <div className='insert-form-container'>
            <input placeholder='할 일을 입력하세요' value={value} onChange={onChange}></input>
            <button onClick={onClick}>+</button>
        </div>
    );
};

export default InsertForm;