import { Helmet } from 'react-helmet-async';

export default function NoMatch() {
	return (
		<div className="page-error">
			<Helmet>
                <title>Сторінка не знайдена!</title>
            </Helmet>
			<div className="container">
				<h1>Сторінка не знайдена!</h1>
			</div>
		</div>
	);
  }