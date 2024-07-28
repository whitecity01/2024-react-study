import { useState, useRef, useCallback } from 'react';

import './App.scss';
import SelectMode from './components/SelectMode';
import Clock from './components/Clock';
import RecordsList from './components/RecordsList';

const App = () =>{
  const [selectedMode, setSelectedMode] = useState('타이머'); // 처음 모드는 타이머

  const [records, setRecords] = useState([]); // 시간 기록 배열
  const nextId = useRef(1);
  const onPlus = useCallback(
    text => {
      const record = {
        id: nextId.current,
        text,
      };

      setRecords(records.concat(record));
      nextId.current +=1;
    },
    [records],
  );

  return (
    <div className='App'>
      <SelectMode className='select-mode' selectedMode={selectedMode} changeMode={setSelectedMode}></SelectMode>
      <Clock className='clock' onPlus={onPlus} mode={selectedMode}></Clock>
      <RecordsList className='records-list' records={records}></RecordsList>
    </div>
  );
}

export default App;
