import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import {
	AlertTriangleIcon,
	BadgeCheckIcon,
	PartyPopperIcon,
	UserCheck2Icon,
	UserIcon,
	UserRoundXIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import cm from '@/public/users/cm.jpg';

const EmployeeStatsCards = () => {
	const totalEmployees = 100;
	const employeesPresent = 80;
	const presentPercentage = Math.round(
		(employeesPresent / totalEmployees) * 100
	);
	const isOk = presentPercentage >= 75;

	return (
		<div className="grid lg:grid-cols-3 gap-4">
			<Card className="gap-2">
				<CardHeader>
					<CardTitle className="text-base">Total Employees</CardTitle>
				</CardHeader>
				<CardContent className="flex items-center justify-between">
					<div className="flex gap-2 items-center">
						<UserIcon />
						<div className="text-5xl font-bold">
							{totalEmployees}
						</div>
					</div>
					<div>
						<Button size="xs" asChild>
							<Link href="/dashbord/employees">View All</Link>
						</Button>
					</div>
				</CardContent>
			</Card>

			<Card className="gap-2">
				<CardHeader>
					<CardTitle className="text-base">
						Employees present
					</CardTitle>
				</CardHeader>
				<CardContent className="flex items-center justify-between">
					<div className="flex gap-2 items-center">
						{isOk ? <UserCheck2Icon /> : <UserRoundXIcon />}
						<div className="text-5xl font-bold">
							{employeesPresent}
						</div>
					</div>
				</CardContent>
				<CardFooter className="mt-auto">
					<span
						className={cn(
							'text-xs',
							'flex',
							'items-center',
							'gap-1',
							isOk ? 'text-green-500' : 'text-red-500'
						)}
					>
						{isOk ? (
							<BadgeCheckIcon />
						) : (
							<>
								<AlertTriangleIcon /> Only
							</>
						)}{' '}
						{presentPercentage}% of employees are present!
					</span>
				</CardFooter>
			</Card>

			<Card className="border-pink-500 gap-2">
				<CardHeader>
					<CardTitle className="text-base">
						Employee of the Month
					</CardTitle>
				</CardHeader>
				<CardContent className="flex gap-2 items-center">
					<Avatar>
						<Image src={cm} alt="Employee of the Month!" />
						<AvatarFallback>CM</AvatarFallback>
					</Avatar>
					<span className="text-2xl">Collin Murray!</span>
				</CardContent>
				<CardFooter className="mt-auto">
					<span
						className={cn(
							'text-xs',
							'flex',
							'items-center',
							'gap-1',
							'text-muted-foreground'
						)}
					>
						<PartyPopperIcon className="text-pink-500" />{' '}
						Congratulations, Collin!
					</span>
				</CardFooter>
			</Card>
		</div>
	);
};

export default EmployeeStatsCards;
