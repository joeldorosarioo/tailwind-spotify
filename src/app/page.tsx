import {
	ChevronLeft, ChevronRight
} from 'lucide-react';

import Sidebar from '@components/Sidebar';
import FeaturedPlaylist from '@components/FeaturedPlaylist';
import Playlist from '@components/Playlist';
import Footer from '@components/Footer';

export default function Home () {
	return (
		<div className="h-screen flex flex-col">
			<div className="flex flex-1 max-h-full overflow-y-auto gap-2 p-2">
				<Sidebar />

				<main className="max-h-full overflow-y-auto p-6 max-sm:p-4 rounded-lg bg-zinc-900">
					<div className="flex items-center gap-4 mb-8">
						<button type="button" className="rounded-full bg-black/40 p-1">
							<ChevronLeft />
						</button>

						<button type="button" className="rounded-full bg-black/40 p-1">
							<ChevronRight />
						</button>
					</div>

					<h1 className="font-semibold text-3xl mb-8">Good Afternoon</h1>

					<div className="grid gap-4 grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
						<FeaturedPlaylist title="An Overwhelming Sense of Loneliness" />

						<FeaturedPlaylist title="Call Me If You Get Lost" />

						<FeaturedPlaylist title="O Pior Disco do Ano" />

						<FeaturedPlaylist title="I Love My '90s Hip-Hop" />

						<FeaturedPlaylist title="Are & Be" />

						<FeaturedPlaylist title="As Mais Belas da Rádio Alpha FM" />
					</div>

					<h2 className="font-semibold text-2xl my-8">Made for Joel Oliveira</h2>

					<div className="flex items-center space-x-4 overflow-y-auto">
						<Playlist
							title="Daily Mix 1"
							description="Kendrick Lamar, Kanye West and Tyler, The Creator"
						/>

						<Playlist
							title="Daily Mix 2"
							description="Djonga, Froid, KayBlack and Racionais MC"
						/>

						<Playlist
							title="Daily Mix 3"
							description="Hollow Coves, Joji and The Lumineers"
						/>

						<Playlist
							title="Daily Mix 4"
							description="Kali Uchis, Wallows and Masego"
						/>

						<Playlist
							title="Daily Mix 5"
							description="Cuco, The Smiths and Two Doors Cinema Club"
						/>

						<Playlist
							title="Daily Mix 6"
							description="Jaden, G-Easy and Machine Gun Kelly"
						/>

						<Playlist
							title="Daily Mix 7"
							description="Bruno Mars, Billie Eilish and Adele"
						/>
					</div>

					<h2 className="font-semibold text-2xl my-8">Recently Played</h2>

					<div className="flex items-center space-x-4 overflow-y-auto">
						<Playlist
							title="Daily Mix 1"
							description="Kendrick Lamar, Kanye West and Tyler, The Creator"
						/>

						<Playlist
							title="Daily Mix 2"
							description="Djonga, Froid, KayBlack and Racionais MC"
						/>

						<Playlist
							title="Daily Mix 3"
							description="Hollow Coves, Joji and The Lumineers"
						/>

						<Playlist
							title="Daily Mix 4"
							description="Kali Uchis, Wallows and Masego"
						/>

						<Playlist
							title="Daily Mix 5"
							description="Cuco, The Smiths and Two Doors Cinema Club"
						/>

						<Playlist
							title="Daily Mix 6"
							description="Jaden, G-Easy and Machine Gun Kelly"
						/>

						<Playlist
							title="Daily Mix 7"
							description="Bruno Mars, Billie Eilish and Adele"
						/>
					</div>
				</main>
			</div>

			<Footer />
		</div>
	);
}
