'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';

const MenuItem = ({ href, children }: PropsWithChildren<{ href: string }>) => {
	const pathName = usePathname();
	const isActive = pathName === href;

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
			>
				{children}
			</Link>
		</li>
	);
};

export default MenuItem;
