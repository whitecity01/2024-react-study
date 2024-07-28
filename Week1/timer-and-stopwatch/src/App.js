import { useState, useRef, useCallback } from 'react';

import Template from './components/Template';
import SelectMode from './components/SelectMode';
import Clock from './components/Clock';
import RecordsList from './components/RecordsList';

const App = () =>{
  const [records, setRecords] = useState([
    
  ]);

  const nextId = useRef(4);
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
    <Template>
      <SelectMode className='select-mode'></SelectMode>
      <Clock className='clock' onPlus={onPlus}></Clock>
      <RecordsList className='records-list' records={records}></RecordsList>
    </Template>
  );
}

export default App;
