import { Volume1 } from 'lucide-react';
import ControlButtons from '@components/ControlButtons';

export default function VolumeBar () {
	return (
		<div className="flex items-center gap-2">
			<ControlButtons
				title="Unmute/Mute"
				icon={ <Volume1 /> }
			/>

			<div className="h-1 rounded-full w-24 bg-zinc-600 mx-2">
				<div className="bg-zinc-200 w-12 h-1 rounded-full"></div>
			</div>
		</div>
	);
}
