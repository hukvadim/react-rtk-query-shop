import { useCallback, useState } from 'react';
import { useGetProductsQuery } from '../store/catalogApi';
import CatalogContent from '../components/CatalogContent';
import { Helmet } from 'react-helmet-async';

const Search = () => {
		
	// Захищаємо пошук від повторного запитування
	const [searchTimeId, setSearchTimeId] = useState(0);
		
	// Захищаємо пошук від повторного запитування
	const [searchVal, setSearchVal] = useState('');

	// Отримуємо дані товарів
	const {data: products = [], error, isLoading} = useGetProductsQuery({queryType: 'search', queryKey: searchVal});

	// Пошук товарів
	const setSearchProducts = useCallback((e) => {
		
		// Запам'ятовуємо пошукову фразу
		const searchQuery = e.target.value;

		// Видаляємо старі запити
		clearTimeout(searchTimeId);
		
		// Виконувати пошук по таймеру
		const timeId = setTimeout(() => {
	
			// Виводимо товари каталогу
			setSearchVal(searchQuery);
		
		// Час затримки в мілісекундах
		}, 1000);
	
		// Зберігаємо id запиту
		setSearchTimeId(timeId);
	
	// Залежності при події пошуку
	}, [searchTimeId]);


	return (
		<div className="catalog" id="catalog">
			<Helmet>
                <title>Пошук товарів</title>
            </Helmet>
			<div className="container">
				<div className="catalog__header">
					<div className="catalog__form">
						<input
							type="search"
							className="catalog__form-search"
							placeholder="Що хочете знайти?"
							onInput={setSearchProducts}
						/>
					</div>
					<h3 className="catalog__products-summ">
						Знайдено товарів: <span className="count-products">{products.length}</span>
					</h3>
				</div>
				<CatalogContent products={products} loading={isLoading} error={error} />
			</div>
		</div>
	);
}

export default Search;