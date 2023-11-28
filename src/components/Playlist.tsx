import Link from 'next/link';

export default function Playlist (
	{ title, description }: { title: string; description: string }
) {
	return (
		<Link href="/" className="bg-white/5 p-3 hover:bg-white/10 rounded-md transition-colors flex flex-col gap-2 w-48">
			<div className="w-full h-36 rounded-md bg-zinc-500 block" />

			<strong className="font-semibold text-ellipsis whitespace-nowrap overflow-hidden">{ title }</strong>
			<span className="text-sm text-zinc-400 text-ellipsis whitespace-nowrap overflow-hidden">{ description }</span>
		</Link>
	);
}
