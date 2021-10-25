import { Route } from 'react-router';

import './scss/app.scss'
import Cart from './Pages/Cart/Cart';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';

const App = () => {
	return (
		<>
			<Header />
			<div className="wrapper">
				<Route exact path="/" component={Home} />
				<Route exact path="/cart" component={Cart} />
			</div>
		</>
	)
}

export default App
