export default function PlaybackBar () {
	return (
		<div className="flex items-center gap-2">
			<span className="text-sm text-zinc-500">0:48</span>

			<div className="h-1 rounded-full w-96 bg-zinc-600">
				<div className="bg-zinc-200 w-16 h-1 rounded-full"></div>
			</div>

			<span className="text-sm text-zinc-500">3:53</span>
		</div>
	);
}
