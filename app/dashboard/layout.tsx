'use client';

import { PropsWithChildren } from 'react';
import MainMenu from './components/main-menu';
import MobileMenu from './components/mobile-menu';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const DashboardLayout = ({ children }: PropsWithChildren) => {
	const isDesktop = useMediaQuery('(min-width: 768px)');

	return (
		<div className="md:grid md:grid-cols-[250px_1fr] min-h-screen">
			{isDesktop ? (
				<MainMenu />
			) : (
				<MobileMenu />
			)}
			<div className="overflow-auto my-2 mx-4">
				<h1 className="mb-4">Welcome back!</h1>
				{children}
			</div>
		</div>
	);
};

export default DashboardLayout;
