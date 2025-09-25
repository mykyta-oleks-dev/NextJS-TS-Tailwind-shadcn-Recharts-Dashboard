'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LaptopIcon } from 'lucide-react';
import {
	ResponsiveContainer,
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts';
import data from '@/lib/data';

const EmployeesStatsChart = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-lg flex items-center gap-2">
					<LaptopIcon />
					<span>Employee work location trends</span>
				</CardTitle>
			</CardHeader>
			<CardContent>
				<ResponsiveContainer width="100%" height={350}>
					<BarChart
						data={data}
						margin={{
							top: 20,
							right: 30,
							left: 20,
							bottom: 5,
						}}
					>
						<XAxis dataKey="name" stroke="#888" fontSize={12} />
						<YAxis stroke='#888' fontSize={12} />
						<Tooltip />
						<Legend />
						<Bar dataKey="office" stackId="a" fill="#ec4899" />
						<Bar dataKey="wfh" stackId="a" fill="#6b7280" radius={[4, 4, 0, 0]} />
					</BarChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	);
};

export default EmployeesStatsChart;
