import { useState } from 'react';
import clsx from 'clsx';
import { Heart } from 'lucide-react';

export default function FavoriteButton () {
	const [isFavorite, setIsFavorite] = useState(true);

	return (
		<button
			type="button"
			onClick={ () => setIsFavorite(!isFavorite) }
			className={clsx(
				isFavorite ? 'text-green-400' : 'text-zinc-200',
				'ml-6 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors'
			)}
		>
			<Heart
				size={ 20 }
				fill={ isFavorite ? '#4ade80' : '#18181b' }
			/>
		</button>
	);
}
