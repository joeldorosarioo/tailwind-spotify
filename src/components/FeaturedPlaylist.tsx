import Link from 'next/link';
import { Play } from 'lucide-react';

export default function FeaturedPlaylist ({ title }: { title: string }) {
	return (
		<Link
			href="/"
			className="bg-white/5 hover:bg-white/10 rounded-md flex items-center gap-4 overflow-hidden transition-colors pe-4 group"
		>
			<div className="h-20 w-20 bg-zinc-500 block" />

			<strong className="font-semibold text-ellipsis whitespace-nowrap overflow-hidden flex-1">
				{ title }
			</strong>

			<button
				type="button"
				className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto invisible group-hover:visible"
			>
				<Play fill="bg-black" size={ 20 }/>
			</button>
		</Link>
	);
}
