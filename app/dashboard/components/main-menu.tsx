import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import MenuItem from './menu-item';
import MenuTitle from './menu-title';
import Link from 'next/link';
import LightDarkToggle from '@/components/ui/light-dark-toggle';

const menuItems = [
	{ href: '/dashboard', label: 'Dashboard' },
	{ href: '/dashboard/employees', label: 'Employees' },
	{ href: '/dashboard/billing', label: 'Billing' },
	{ href: '/dashboard/teams', label: 'Teams' },
	{ href: '/dashboard/settings', label: 'Settings' },
];

const MainMenu = () => {
	return (
		<nav className="bg-muted overflow-auto p-4 flex flex-col gap-4">
			<header>
				<MenuTitle />
			</header>

			<hr className="dark:bg-black light:bg-zinc-300 h-0.5" />

			<ul className="flex flex-col gap-2 grow">
				{menuItems.map((item) => (
					<MenuItem key={item.href} href={item.href}>
						{item.label}
					</MenuItem>
				))}
			</ul>

			<footer className="flex gap-2 items-center">
				<Avatar>
					<AvatarFallback className="bg-pink-300 dark:bg-pink-800">
						MV
					</AvatarFallback>
				</Avatar>
				<Link href="/" className="hover:underline">
					Logout
				</Link>
				<LightDarkToggle className="ml-auto" />
			</footer>
		</nav>
	);
};

export default MainMenu;
