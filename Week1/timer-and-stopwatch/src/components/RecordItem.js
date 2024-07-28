import './RecordItem.scss';

const RecordItem = ({record}) =>{
    const {text} = record;

    return(
        <div className='RecordItem'>
            <div className='record'>{text}</div>
        </div>
    );
}

export default RecordItem;