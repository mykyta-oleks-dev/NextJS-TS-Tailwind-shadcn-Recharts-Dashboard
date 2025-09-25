import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const DashboardPage = () => {
	return (
		<Tabs defaultValue="employees">
			<TabsList>
				<TabsTrigger value="employees">Employees stats</TabsTrigger>
				<TabsTrigger value="teams">Teams stats</TabsTrigger>
			</TabsList>
			<TabsContent value="employees" className="mt-4">
				<p>Employees stats will be displayed here.</p>
			</TabsContent>
			<TabsContent value="teams" className="mt-4">
				<p>Teams stats will be displayed here.</p>
			</TabsContent>
		</Tabs>
	);
};

export default DashboardPage;
