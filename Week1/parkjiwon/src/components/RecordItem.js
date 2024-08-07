import './RecordItem.scss';

// 시간 기록 컴포넌트 record를 받아와 표시
const RecordItem = ({record}) =>{
    const text = record;

    return(
        <div className='record-item-container'>
            {text}
        </div>
    );
}

export default RecordItem;