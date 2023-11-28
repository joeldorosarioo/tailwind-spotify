import clsx from 'clsx';

type ControlButtonsProps = {
	title: string;
	icon: React.ReactNode;
	className?: string;
}

export default function ControlButtons ({ title, icon, className }: ControlButtonsProps) {
	return (
		<button
			type="button"
			aria-label={ title }
			className={clsx(
				'w-10 h-10 flex items-center justify-center rounded-full transition-colors',
				className, className ? className : 'hover:bg-white/5 text-zinc-200'
			)}
		>
			{ icon }
		</button>
	);
}
