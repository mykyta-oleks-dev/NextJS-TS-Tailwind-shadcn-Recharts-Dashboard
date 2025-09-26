import LightDarkToggle from '@/components/ui/light-dark-toggle';
import { PropsWithChildren } from 'react';

const LoggedOutLayout = ({ children }: PropsWithChildren) => {
	return (
		<>
			<div className="flex flex-col gap-4 min-h-screen items-center justify-center p-24">
				{children}
			</div>
			<LightDarkToggle className="fixed right-3 top-1/2 -translate-y-1/2" />
		</>
	);
};

export default LoggedOutLayout;
