import Image from 'next/image';
import styles from '@/components/shop/index.module.scss';
import FavoriteIcon from './FavoriteIcon';

export default function Index({ shop, onToggleFav }) {
	const Size = 130;
	return (
		<div className={styles['TIL-shop-item']}>
			<Image
				src={`/photos/shop_logo/${shop.logo}`}
				alt={shop.name}
				width={Size}
				height={Size}
				className={styles['TIL-Image']}
			/>
			<h4>{shop.name}</h4>
			<div className={styles['test']}>
				<FavoriteIcon isFavorite={shop.fav} onClick={() => onToggleFav(shop.id)} />
			</div>
		</div>
	);
}
