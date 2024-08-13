import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import InputJob from './pages/todos/InputJob';
import { Myapp } from './pages/myapp/Myapp';
//Route는 Routes컴포넌트 내부에서 사용되어야 한다.
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/todos" element={<InputJob />}/>
        <Route path="/myapp" element={<Myapp />}/>
      </Routes>
    </div>
  );
}

export default App;
