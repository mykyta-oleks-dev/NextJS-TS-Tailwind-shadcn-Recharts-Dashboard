import { PropsWithChildren } from 'react';
import MainMenu from './components/main-menu';

const DashboardLayout = ({ children }: PropsWithChildren) => {
	return (
		<div className="grid grid-cols-[250px_1fr] min-h-screen">
			<MainMenu />
			<div className="overflow-auto my-2 mx-4">
				<h1 className="mb-4">Welcome back!</h1>
				{children}
			</div>
		</div>
	);
};

export default DashboardLayout;
