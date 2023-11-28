import {
	ArrowRight, Home, Library, Plus, Search
} from 'lucide-react';

import PlaylistButton from '@components/PlaylistButton';
import MenuButton from '@components/MenuButton';

export default function Sidebar () {
	return (
		<aside className="flex-1 max-xl:hidden flex flex-col gap-2">
			<nav className="space-y-2 p-3 bg-zinc-900 rounded-lg">
				<MenuButton title="Home" icon={ Home } />
				<MenuButton title="Search" icon={ Search } />
			</nav>

			<nav className="flex flex-col max-h-full overflow-y-auto bg-zinc-900 rounded-lg">
				<div className="sticky top-0 p-3 space-y-3">
					<div className="flex">
						<MenuButton title="Your Library" icon={ Library } className="mr-auto" />
						<MenuButton icon={ Plus } />
						<MenuButton icon={ ArrowRight } />
					</div>

					<div className="flex gap-2">
						<span className="bg-zinc-800 rounded-full px-3 py-1 text-sm">Playlists</span>
						<span className="bg-zinc-800 rounded-full px-3 py-1 text-sm">Artists</span>
						<span className="bg-zinc-800 rounded-full px-3 py-1 text-sm">Albums</span>
						<span className="bg-zinc-800 rounded-full px-3 py-1 text-sm">Podcasts & Shows</span>
					</div>
				</div>

				<div className="flex flex-col max-h-full p-3 overflow-y-auto">
					<PlaylistButton
						title="I Love My '90s Hip-Hop"
						author="Joel Oliveira"
					/>

					<PlaylistButton
						title="On Repeat"
						author="Spotify"
					/>

					<PlaylistButton
						title="2023: The Comeback"
						author="Joel Oliveira"
					/>

					<PlaylistButton
						title="The Rhythm"
						author="Spotify"
					/>

					<PlaylistButton
						title="An Overwhelming Sense of Loneliness"
						author="Joel Oliveira"
					/>

					<PlaylistButton
						title="Hot Hits Brazil"
						author="Spotify"
					/>

					<PlaylistButton
						title="Best Rap Songs of 1995"
						author="Spotify"
					/>

					<PlaylistButton
						title="Mi Español es Muy Ratata"
						author="Joel Oliveira"
						/>

					<PlaylistButton
						title="Signed XOXO"
						author="Spotify"
					/>
				</div>
			</nav>
		</aside>
	);
}
