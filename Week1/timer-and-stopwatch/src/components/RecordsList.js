import './RecordsList.scss';
import RecordItem from './RecordItem';

const RecordsList = ({className, records}) =>{
    return(
        <div className={className}>
            <div className='RecordsList'>
                <div className='title'>기록</div>
                {records.map(record =>(
                    <RecordItem record={record} key={record.id}></RecordItem>
                ))}
                
            </div>
        </div>
    );
}

export default RecordsList;