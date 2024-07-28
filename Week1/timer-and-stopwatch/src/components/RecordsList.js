import './RecordsList.scss';
import RecordItem from './RecordItem';

const RecordsList = ({records}) =>{
    return(
        <div className='RecordsList'>
            <div className='title'>기록</div>
            {/* map을 이용한 records 순회 */}
            {records.map(record =>(
                <RecordItem record={record} key={record.id}></RecordItem>
            ))}
        </div>
    );
}

export default RecordsList;