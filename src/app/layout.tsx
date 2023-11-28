import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Spotify',
	description: 'Recreating the Spotify interface, using Next.js and Tailwind CSS.',
}

export default function RootLayout ({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="bg-zinc-950 text-zinc-100">
				{ children }
			</body>
		</html>
	);
}
