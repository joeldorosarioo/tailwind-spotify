'use client';

import FavoriteButton from '@components/FavoriteButton';

type CurrentMusicProps = {
	title: string;
	artist: string;
}

export default function CurrentMusic ({ title, artist }: CurrentMusicProps) {
	return (
		<div className="flex items-center gap-3">
			<div className="h-14 w-14 rounded-md bg-zinc-500 block" />

			<div className="flex flex-col">
				<strong className="font-normal">{ title }</strong>
				<span className="text-sm text-zinc-400">{ artist }</span>
			</div>

			<FavoriteButton />
		</div>
	);
}
