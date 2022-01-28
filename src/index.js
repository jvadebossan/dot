import ReactDOM from 'react-dom';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Global from "./global.jsx";

//import views and components
import Home from './views/Home';

ReactDOM.render(
	<Router>
		<Global/>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/contato" element={<h1>Contato</h1>} />
		</Routes>
	</Router>,
  document.getElementById('root')
);