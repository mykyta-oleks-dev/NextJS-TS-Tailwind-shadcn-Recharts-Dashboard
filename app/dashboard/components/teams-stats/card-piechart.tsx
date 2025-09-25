'use client';

import teamDistributionData from '@/lib/teamDistributionData';
import { cn } from '@/lib/utils';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const TeamDistributionPieChart = () => {
	return (
		<ResponsiveContainer width="100%" height={150}>
			<PieChart>
				<Tooltip
					separator=": "
					labelClassName="font-bold"
					wrapperClassName={cn(
						'dark:[&_.recharts-tooltip-item]:!text-white',
						'[&_.recharts-tooltip-item]:!text-black',
						'!text-sm',
						'dark:!bg-black',
						'rounded-md',
						'dark:!border-border'
					)}
				/>
				<Pie data={teamDistributionData} dataKey="value" nameKey="name">
					{teamDistributionData.map((entry, index) => (
						<Cell key={`slice-${index}`} fill={entry.color} />
					))}
				</Pie>
			</PieChart>
		</ResponsiveContainer>
	);
};

export default TeamDistributionPieChart;
