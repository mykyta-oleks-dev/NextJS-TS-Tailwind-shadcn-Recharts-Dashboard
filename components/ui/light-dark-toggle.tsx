'use client';

import { MoonIcon, SunIcon } from 'lucide-react';
import { Button } from './button';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from './tooltip';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

const LightDarkToggle = ({ className }: { className?: string }) => {
	const { setTheme } = useTheme();

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger
					asChild
					className={cn(className, 'cursor-pointer')}
					onClick={() =>
						setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
					}
				>
					<Button variant="outline">
						<SunIcon className="block dark:hidden" />
						<MoonIcon className="hidden dark:block" />
					</Button>
				</TooltipTrigger>
				<TooltipContent className='bg-primary text-primary-foreground fill-primary'>
					<span className="inline dark:hidden">Enable Dark Mode</span>
					<span className="hidden dark:inline">
						Enable Light Mode
					</span>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};

export default LightDarkToggle;
