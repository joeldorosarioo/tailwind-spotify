import clsx from 'clsx';

type MenuButtonProps = {
	title?: string;
	className?: string;
	icon: React.FC;
}

export default function MenuButton ({ title, icon, className }: MenuButtonProps) {
	const IconComponent = icon;

	return (
		<button
			type="button"
			className={clsx(className,
				'px-3 py-2 flex items-center gap-3 text-base font-semibold text-zinc-400 hover:text-zinc-200 transition-colors',
			)}
		>
			<IconComponent /> { title }
		</button>
	);
}
