import './RecordItem.scss';

const RecordItem = ({record}) =>{
    const {text} = record;

    return(
        <div className='RecordItem'>
            {text}
        </div>
    );
}

export default RecordItem;