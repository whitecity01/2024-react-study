import { useState} from 'react';

import './App.scss';
import SelectMode from './components/SelectMode';
import Clock from './components/Clock';
import RecordsList from './components/RecordsList';

const App = () =>{
  const [selectedMode, setSelectedMode] = useState('타이머'); // 처음 모드는 타이머

  const [records, setRecords] = useState([]); // 시간 기록 배열

  const onPlus = (text)=>{
    const record = text;
    setRecords(records.concat(record));
  };

  return (
    <div className='app-container'>
      <SelectMode selectedMode={selectedMode} changeMode={setSelectedMode} />
      <Clock onPlus={onPlus} mode={selectedMode} clearRecords={setRecords} />
      <RecordsList records={records} />
    </div>
  );
}

export default App;
