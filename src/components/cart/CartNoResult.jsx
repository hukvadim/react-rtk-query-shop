import config from '../../utils/config';
import Image from '../ui/Image';

function CartNoResult({text = 'Результатів не знайдено', img = 'no-result-v2.webp'}) {
	return (
		<span className="no-result no-result--inline">
			<Image src={config.pathImgNoResult + img} alt={'No results'} className="no-result__img" w='96' h='62' />
			<span className="no-result__title">{text}</span>
		</span>
	)
}


export default CartNoResult;