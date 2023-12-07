import { useParams } from "react-router-dom";
import Catalog from '../components/Catalog';
import { Helmet } from 'react-helmet-async';
import { useGetCategoriesByIdQuery } from '../store/catalogApi';

export default function Category() {

	// Отрмиуємо id категорії
	const { categoryId } = useParams();
	
	// Отримуємо дані категорій
	const {data: catData = false} = useGetCategoriesByIdQuery(categoryId);

	// Виводимо каталог
	return <>
		<Helmet>
			<title>{catData ? `Категорія ${catData.title}` :  'Перегляд категорії'}</title>
		</Helmet>
		<Catalog categoryId={categoryId} queryType={'category'} />
	</>;
}