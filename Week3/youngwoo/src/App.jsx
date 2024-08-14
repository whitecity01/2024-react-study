import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Todo from './components/todo';
import MyApp from './components/myApp';

const App = () => {
	return (
		
			<BrowserRouter>
				
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/todos" element={<Todo />}></Route>
					<Route path="/myapp" element={<MyApp />}></Route>
					{/* 잘못된 주소일 경우 NotFound 출력 */}
				</Routes>
			</BrowserRouter>
		
	);
}

export default App;