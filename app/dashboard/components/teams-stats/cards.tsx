import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import teamLeaders from '@/lib/teamLeaders';
import { ChartPieIcon, StarIcon, UsersIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import TeamDistributionPieChart from './card-piechart';

const TeamsStatsCards = () => {
	return (
		<div className="grid lg:grid-cols-3 gap-4">
			<Card className="gap-2">
				<CardHeader>
					<CardTitle className="text-base">Total Teams</CardTitle>
				</CardHeader>
				<CardContent className="flex items-center justify-between">
					<div className="flex gap-2 items-center">
						<UsersIcon />
						<div className="text-5xl font-bold">8</div>
					</div>
					<div>
						<Button size="xs" asChild>
							<Link href="/dashbord/teams">View All</Link>
						</Button>
					</div>
				</CardContent>
			</Card>

			<Card className="gap-2">
				<CardHeader>
					<CardTitle className="text-base flex justify-between">
						<span>Team Leaders</span>
						<StarIcon className="text-yellow-500" />
					</CardTitle>
				</CardHeader>
				<CardContent className="flex items-center gap-2 flex-wrap">
					{teamLeaders.map((leader) => (
						<TooltipProvider key={leader.id}>
							<Tooltip>
								<TooltipTrigger asChild>
									<Avatar>
										{leader.avatar && (
											<Image
												src={leader.avatar}
												alt={`${leader.firstName} ${leader.lastName}`}
											/>
										)}
										<AvatarFallback>{`${leader.firstName[0]}${leader.lastName[0]}`}</AvatarFallback>
									</Avatar>
								</TooltipTrigger>
								<TooltipContent>
									{leader.firstName} {leader.lastName}
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					))}
				</CardContent>
			</Card>

			<Card className="gap-2">
				<CardHeader>
					<CardTitle className="text-base flex justify-between">
						<span>Team Distribution</span>
						<ChartPieIcon className="text-foreground" />
					</CardTitle>
				</CardHeader>
				<CardContent className="flex items-center justify-center">
					<TeamDistributionPieChart />
				</CardContent>
			</Card>
		</div>
	);
};

export default TeamsStatsCards;
