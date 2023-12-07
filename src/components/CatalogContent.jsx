import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import ProductCard from './ProductCard';

const CatalogContent = ({ products, loading, error }) => {
	
	// Формуємо зверення до сховища
	const dispatch = useDispatch();

	// Добавляємо товар в корзину
    const setAddToCart = (productId) => dispatch(addToCart(productId));
	
	// Дивимося чи отримали помилку від сервера
	if (error) return <p className="no-result">Отримали помилку: { error }</p>;
	
	// Якщо йде завантаження, повертаємо простий текст
	if (loading) return <p className="no-result">Завантаження...</p>;

	return (
        <div className="catalog__content">

            {(products.length === 0)
				? <h2 className="no-result">Товарів не знайдено...</h2>
				: products.map((product) => (
					<ProductCard key={product.id} product={product} setAddToCart={setAddToCart} />
				))}

        </div>
    );
}

export default CatalogContent;