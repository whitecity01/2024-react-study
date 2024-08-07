import './RecordsList.scss';
import RecordItem from './RecordItem';

const RecordsList = ({records}) =>{
    return(
        <div className='records-list-container'>
            <div className='title'>기록</div>
            {/* map을 이용한 records 순회 */}
            {/* {records.map(record =>(
                <RecordItem record={record} key={record.id} />
            ))} */}
            {records.map((record, index)=>(
                <RecordItem record={record} key={record.index} />
            ))}
        </div>
    );
}

export default RecordsList;