import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { HelmetProvider } from 'react-helmet-async';
import store, { persistor } from './store';
import './style.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<HelmetProvider >
				<App />
			</HelmetProvider>
		</PersistGate>
	</Provider>
);