import './App.css';
import InputJob from './components/InputJob';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='container'>
        <div className='title'>일정관리</div>
        <InputJob/>
    </div>
  );
}

export default App;