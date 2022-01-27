import ReactDOM from 'react-dom';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
	<Router>
		<Routes>
			<Route path="/" element={<h1>Home</h1>} />
		</Routes>
	</Router>,
  document.getElementById('root')
);