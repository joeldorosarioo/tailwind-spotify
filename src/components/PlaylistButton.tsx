import Link from 'next/link';

type PlaylistButtonProps = {
	title: string;
	author: string;
}

export default function PlaylistButton ({ title, author }: PlaylistButtonProps) {
	return (
		<Link href="/" className="flex items-center gap-3 hover:bg-zinc-800 rounded-md p-3 transition-colors">
			<span className="h-12 w-12 rounded-md bg-yellow-500 block" />

			<span className="flex flex-col overflow-hidden">
				<span className="text-ellipsis whitespace-nowrap overflow-hidden">{ title }</span>
				<span className="text-zinc-400">{ author }</span>
			</span>
		</Link>
	);
}
