import './App.css';
import SideMenu from './components/SideMenu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';

function App() {
	return (
		<div className="App">
			<AppRoutes/>
		</div>
	);
}

export default App;
