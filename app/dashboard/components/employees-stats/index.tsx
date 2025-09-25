import EmployeesStatsCards from './cards';
import EmployeesStatsChart from './chart';

const EmployeesStats = () => {
	return (
		<div className="flex flex-col gap-4">
			<EmployeesStatsCards />
			<EmployeesStatsChart />
		</div>
	);
};

export default EmployeesStats;
