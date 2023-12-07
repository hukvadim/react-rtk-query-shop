import { useGetProductsQuery } from '../store/catalogApi';

import CatalogHeader from './CatalogHeader';
import CatalogContent from './CatalogContent';

const Catalog = ({ categoryId = '', queryType = 'catalog' }) => {

	// Отримуємо дані товарів
	const {data: products = [], error, isLoading} = useGetProductsQuery({queryType, queryKey: categoryId});

	return (
		<div className="catalog">
			<div className="container">
				<CatalogHeader categoryId={categoryId} productsSumm={products.length} />
				<CatalogContent products={products} loading={isLoading} error={error} />
			</div>
		</div>
	);
}

export default Catalog;