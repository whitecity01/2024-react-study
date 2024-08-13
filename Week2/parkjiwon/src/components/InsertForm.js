import { useState } from 'react';
import React from 'react';
import './InsertForm.scss';

const InsertForm = React.memo(({onInsert}) =>{
    const [value, setValue] = useState(''); // 입력 값

    const onChange = e=>{ // 입력의 변화 감지하여 value값 반영
        setValue(e.target.value);
    }

    const onClick = () =>{ // 버튼 클릭 시 실행
        if(!value) return;

        onInsert(value);
        setValue('');
    }

    return(
        <div className='insert-form-container'>
            <input placeholder='할 일을 입력하세요' value={value} onChange={onChange}></input>
            <button onClick={onClick}>+</button>
        </div>
    );
});

export default InsertForm;