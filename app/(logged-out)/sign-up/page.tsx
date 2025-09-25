'use client';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { CalendarIcon, PersonStandingIcon } from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z
	.object({
		email: z.email('Invalid email address'),
		accountType: z.enum(
			['personal', 'company'],
			'Select a valid account type'
		),
		companyName: z.string().optional(),
		employeesNum: z.number().optional(),
		dateOfBirth: z.date('Date of Birth is required').refine((date) => {
			const today = new Date();
			const eighteenYearsAgo = new Date(
				today.getFullYear() - 18,
				today.getMonth(),
				today.getDate()
			);

			return date <= eighteenYearsAgo;
		}, 'You must be at least 18 years old'),
		// password: z
		// 	.string()
		// 	.nonempty('Password is required')
		// 	.min(6, 'Password is too short')
		// 	.max(20, 'Password is too long'),
	})
	.superRefine((data, ctx) => {
		if (data.accountType === 'company') {
			if (!data.companyName || data.companyName.trim() === '') {
				ctx.addIssue({
					code: 'custom',
					path: ['companyName'],
					message: 'Company name is required for company accounts',
				});
			}

			if (!data.employeesNum || data.employeesNum < 1) {
				ctx.addIssue({
					code: 'custom',
					path: ['employeesNum'],
					message:
						'Number of employees must be at least 1 for company accounts',
				});
			}
		}
	});

const SignUpPage = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			companyName: '',
			employeesNum: 0,
			// password: '',
		},
	});

	const handleSubmit = (values: z.infer<typeof formSchema>) => {
		console.log(values);
	};

	const accountType = form.watch('accountType');

	return (
		<>
			<PersonStandingIcon size={50} />
			<Card className="w-full max-w-sm">
				<CardHeader>
					<CardTitle>Sign Up</CardTitle>
					<CardDescription>
						Log in to your SupportMe account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(handleSubmit)}
							className="flex flex-col gap-4"
						>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input
												placeholder="john.doe@mail.com"
												// type="email"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="accountType"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Account Type</FormLabel>
										<Select onValueChange={field.onChange}>
											<FormControl>
												<SelectTrigger className="w-full">
													<SelectValue placeholder="Select account type" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value="personal">
													Personal
												</SelectItem>
												<SelectItem value="company">
													Company
												</SelectItem>
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>
							{accountType === 'company' && (
								<>
									<FormField
										control={form.control}
										name="companyName"
										render={({ field }) => (
											<FormItem>
												<FormLabel>
													Company Name
												</FormLabel>
												<FormControl>
													<Input
														placeholder="Your company name"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="employeesNum"
										render={({ field }) => (
											<FormItem>
												<FormLabel>
													Number of Employees
												</FormLabel>
												<FormControl>
													<Input
														type="number"
														placeholder="e.g., 50"
														{...field}
														value={
															field.value || '0'
														}
														onChange={(e) =>
															field.onChange(
																e.target.value
																	? parseInt(
																			e
																				.target
																				.value,
																			10
																	  )
																	: undefined
															)
														}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</>
							)}
							<FormField
								control={form.control}
								name="dateOfBirth"
								render={({ field }) => {
									const dobFrom = new Date();

									dobFrom?.setFullYear(
										dobFrom.getFullYear() - 120
									);

									return (
										<FormItem>
											<FormLabel>Date of Birth</FormLabel>
											<FormControl>
												<Popover>
													<PopoverTrigger asChild>
														<FormControl>
															<Button
																variant="outline"
																className={cn(
																	'justify-between',
																	'font-normal',
																	'tracking-normal',
																	'capitalize'
																)}
															>
																{field.value
																	? field.value
																			.toISOString()
																			.substring(
																				0,
																				10
																			)
																	: 'Select date'}
																<CalendarIcon />
															</Button>
														</FormControl>
													</PopoverTrigger>
													<PopoverContent
														className="w-auto p-0"
														align="start"
													>
														<Calendar
															mode="single"
															selected={
																field.value
															}
															onSelect={
																field.onChange
															}
															defaultMonth={
																field.value
															}
															fixedWeeks
															weekStartsOn={1}
															captionLayout="dropdown"
															startMonth={dobFrom}
															disabled={{
																before: dobFrom,
																after: new Date(),
															}}
														/>
													</PopoverContent>
												</Popover>
											</FormControl>
											<FormMessage />
										</FormItem>
									);
								}}
							/>
							{/* <FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Password</FormLabel>
										<FormControl>
											<Input
												placeholder="••••••••"
												type="password"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/> */}
							<Button type="submit">Sign Up</Button>
						</form>
					</Form>
				</CardContent>
				<CardFooter className="justify-between">
					<small>Already have an account?</small>
					<Button asChild variant="outline" size="sm">
						<Link href="/login">Log In</Link>
					</Button>
				</CardFooter>
			</Card>
		</>
	);
};

export default SignUpPage;
