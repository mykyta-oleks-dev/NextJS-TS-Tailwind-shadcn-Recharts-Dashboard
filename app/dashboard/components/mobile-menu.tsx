'use client';

import { cn } from '@/lib/utils';
import MenuTitle from './menu-title';
import { MenuIcon } from 'lucide-react';
import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer';
import MainMenu from './main-menu';
import { useState } from 'react';

const MobileMenu = ({ className }: { className?: string }) => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header
			className={cn(
				'sticky flex justify-between top-0 left-0 bg-background border-b border-border p-4',
				className
			)}
		>
			<MenuTitle />
			<Drawer
				direction="right"
				open={mobileMenuOpen}
				onClose={() => setMobileMenuOpen(false)}
				onOpenChange={(open) => setMobileMenuOpen(open)}
			>
				<DrawerTrigger asChild className="self-center">
					<MenuIcon />
				</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader className="hidden">
						<DrawerTitle>
							<DrawerDescription>
								A mobile side menu
							</DrawerDescription>
						</DrawerTitle>
					</DrawerHeader>
					<MainMenu isMobile />
				</DrawerContent>
			</Drawer>
		</header>
	);
};

export default MobileMenu;
