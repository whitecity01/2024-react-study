import { useState, useRef, useCallback } from 'react';

import './App.scss';
import SelectMode from './components/SelectMode';
import Clock from './components/Clock';
import RecordsList from './components/RecordsList';

const App = () =>{
  const [selectedMode, setSelectedMode] = useState('타이머'); // 처음 모드는 타이머

  const [records, setRecords] = useState([]); // 시간 기록 배열
  const nextId = useRef(1); // record의 id 초기화
  const onPlus = useCallback(
    text => {
      const record = {
        id: nextId.current,
        text,
      };

      setRecords(records.concat(record)); // 리스트에 새 recods추가
      nextId.current +=1;
    },
    [records],
  );

  return (
    <div className='App'>
      <SelectMode selectedMode={selectedMode} changeMode={setSelectedMode}></SelectMode>
      <Clock onPlus={onPlus} mode={selectedMode}></Clock>
      <RecordsList records={records}></RecordsList>
    </div>
  );
}

export default App;
