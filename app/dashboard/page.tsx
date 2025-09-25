import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EmployeesStats from './components/employees-stats';
import TeamsStats from './components/teams-stats';

const DashboardPage = () => {
	return (
		<Tabs defaultValue="employees">
			<TabsList>
				<TabsTrigger value="employees">Employees stats</TabsTrigger>
				<TabsTrigger value="teams">Teams stats</TabsTrigger>
			</TabsList>
			<TabsContent value="employees" className="mt-4">
				<EmployeesStats />
			</TabsContent>
			<TabsContent value="teams" className="mt-4">
				<TeamsStats />
			</TabsContent>
		</Tabs>
	);
};

export default DashboardPage;
