'use client';

import { Input } from './input';
import { EyeClosedIcon, EyeIcon } from 'lucide-react';
import { Button } from './button';
import { ComponentProps, useState } from 'react';
import { cn } from '@/lib/utils';

function PasswordInput({ className, ...props }: ComponentProps<'input'>) {
	const [visible, setVisible] = useState(false);
	return (
		<div className="relative">
			<Input
				{...props}
				type={visible ? 'text' : 'password'}
				placeholder={visible ? 'Password!1!' : '••••••••'}
				onKeyDown={(e) => {
					if (/\s/.test(e.key)) {
						e.preventDefault();
					}
				}}
				className={cn('pr-10', className)}
			/>
			<Button
				asChild
				variant="ghost"
				className={cn(
					'p-0',
					'absolute',
					'right-2',
					'hover:bg-transparent',
					'top-1/2',
					'-translate-y-1/2',
					'select-none'
				)}
				onClick={() => setVisible(!visible)}
			>
				{visible ? <EyeClosedIcon /> : <EyeIcon />}
			</Button>
		</div>
	);
}

export { PasswordInput };
