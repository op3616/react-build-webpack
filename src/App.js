import React from 'react';
import logo from '../public/logo192.png';
import './App.css';

const App = () => {
	return (
		<div className="app">
			<div className="container">
				<div className="image">
					<img src={logo} className="app-logo" alt="logo" />
				</div>
				<div className="title">Ứng dụng đã chạy thành công</div>
				<div className="description">
					Hãy viết ứng dụng của bạn bằng ReactJS
				</div>
				<div className="my-information">
					<a
						className="my-information__link"
						href="https://facebook.com/op3616"
						target="_blank"
					>
						Facebook của tui
					</a>
				</div>
			</div>
		</div>
	);
};

export default App;
