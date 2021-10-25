import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Loading from './Components/Loading/Loading';
import store from './redux/store'
const App = React.lazy(() => import('./App'))


ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<Suspense fallback={<Loading classes={'h100'} />}>
				<App />
			</Suspense>
		</Provider>
	</BrowserRouter>,
	document.getElementById('root')
)
