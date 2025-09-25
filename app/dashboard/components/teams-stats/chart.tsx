'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ListChecksIcon } from 'lucide-react';
import {
	ResponsiveContainer,
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
} from 'recharts';
import data from '@/lib/workLocationsData';

const TeamsStatsChart = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-lg flex items-center gap-2">
					<ListChecksIcon />
					<span>Support tickets resolved</span>
				</CardTitle>
			</CardHeader>
			<CardContent className="px-0"></CardContent>
		</Card>
	);
};

export default TeamsStatsChart;
