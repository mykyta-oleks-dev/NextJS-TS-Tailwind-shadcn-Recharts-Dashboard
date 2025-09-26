'use client';

import { DrawerContext } from '@/components/ui/drawer';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PropsWithChildren, useContext } from 'react';

const MenuItem = ({ href, children }: PropsWithChildren<{ href: string }>) => {
	const pathName = usePathname();
	const isActive = pathName === href;

	const { onClose } = useContext(DrawerContext);

	return (
		<li>
			<Link
				href={href}
				className={cn(
					'block',
					'p-2',
					'rounded',
					'rounded-md',
					'text-muted-foreground',
					isActive
						? 'bg-primary text-primary-foreground'
						: 'hover:bg-white dark:hover:bg-zinc-600 hover:text-foreground'
				)}
				onClick={onClose}
			>
				{children}
			</Link>
		</li>
	);
};

export default MenuItem;
