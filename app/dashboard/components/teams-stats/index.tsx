import TeamsStatsCards from './cards';
import TeamsStatsChart from './chart';

const TeamsStats = () => {
	return (
		<div className="flex flex-col gap-4">
			<TeamsStatsCards />
			<TeamsStatsChart />
		</div>
	);
};

export default TeamsStats;
