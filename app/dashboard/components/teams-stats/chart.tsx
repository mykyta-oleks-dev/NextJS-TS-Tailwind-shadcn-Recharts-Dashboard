'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ListChecksIcon } from 'lucide-react';
import {
	ResponsiveContainer,
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	CartesianGrid,
} from 'recharts';
import data from '@/lib/supportTicketsData';

const TeamsStatsChart = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-lg flex items-center gap-2">
					<ListChecksIcon />
					<span>Support tickets resolved</span>
				</CardTitle>
			</CardHeader>
			<CardContent className="px-0">
				<ResponsiveContainer width="100%" height={350}>
					<LineChart
						data={data}
						margin={{
							top: 20,
							right: 30,
							left: 20,
							bottom: 5,
						}}
						className="[&_.recharts-tooltip-cursor]:fill-zinc-200 dark:[&_.recharts-tooltip-cursor]:fill-zinc-800"
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" stroke="#888" fontSize={12} />
						<YAxis stroke="#888" fontSize={12} />
						<Tooltip
							separator=": "
							labelClassName="font-bold"
							wrapperClassName="!text-sm dark:!bg-black rounded-md dark:!border-border"
							formatter={(value, name) => {
								const firstLetter = name
									.toString()
									.charAt(0)
									.toUpperCase();
								const restOfWord = name.toString().slice(1);
								return [value, firstLetter + restOfWord];
							}}
						/>
						<Legend
							iconType="circle"
							formatter={(value) => (
								<span className="capitalize">{value}</span>
							)}
						/>
						<Line
							type="monotone"
							dataKey="delta"
							stroke="#84cc16"
						/>
						<Line
							type="monotone"
							dataKey="alpha"
							stroke="#3b82f6"
						/>
						<Line
							type="monotone"
							dataKey="canary"
							stroke="#f97316"
						/>
					</LineChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	);
};

export default TeamsStatsChart;
