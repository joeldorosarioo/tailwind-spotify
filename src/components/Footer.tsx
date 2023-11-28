import {
	Laptop2, LayoutList, Maximize2, Mic, Play, Repeat, Shuffle, SkipBack, SkipForward
} from 'lucide-react';

import CurrentMusic from '@components/CurrentMusic';
import ControlButtons from '@components/ControlButtons';
import VolumeBar from '@components/VolumeBar';
import PlaybackBar from '@components/PlaybackBar';

export default function Footer () {
	return (
		<footer className="bg-zinc-900 border-t border-zinc-800 px-6 py-4 flex items-center justify-between">
			<CurrentMusic
				title="Glimpse of Us"
				artist="Joji"
			/>

			<div className="flex flex-col items-center gap-2 max-xl:hidden">
				<div className="flex items-center gap-6">
					<ControlButtons
						title="Enable/Disable Shuffle"
						icon={ <Shuffle size={ 20 } /> }
					/>

					<ControlButtons
						title="Previous"
						icon={ <SkipBack size={ 20 } /> }
					/>

					<ControlButtons
						title="Play"
						icon={ <Play fill="#18181b" /> }
						className="pl-1 bg-white hover:bg-white/90 text-black"
					/>

					<ControlButtons
						title="Next"
						icon={ <SkipForward size={ 20 } /> }
					/>

					<ControlButtons
						title="Enable/Disable Repeat"
						icon={ <Repeat size={ 20 } /> }
					/>
				</div>

				<PlaybackBar />
			</div>

			<div className="flex items-center gap-2 max-xl:hidden">
				<ControlButtons
					title="Lyrics"
					icon={ <Mic size={ 20 } /> }
				/>

				<ControlButtons
					title="Queue"
					icon={ <LayoutList size={ 20 } /> }
				/>

				<ControlButtons
					title="Connect to a Device"
					icon={ <Laptop2 size={ 20 } /> }
				/>

				<VolumeBar />

				<ControlButtons
					title="Full Screen"
					icon={ <Maximize2 size={ 20 } /> }
				/>
			</div>

			<div className="hidden items-center gap-2 max-sm:hidden max-xl:flex">
				<ControlButtons
					title="Previous"
					icon={ <SkipBack size={ 20 } /> }
				/>

				<ControlButtons
					title="Play"
					icon={ <Play fill="#18181b" /> }
					className="pl-1 bg-white hover:bg-white/90 text-black"
				/>

				<ControlButtons
					title="Next"
					icon={ <SkipForward size={ 20 } /> }
				/>
			</div>
		</footer>
	);
}
