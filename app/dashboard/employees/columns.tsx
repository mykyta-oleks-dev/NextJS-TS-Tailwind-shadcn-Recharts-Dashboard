'use client';

import { ColumnDef } from '@tanstack/react-table';

export type Employee = {
	id: number;
	firstName: string;
	lastName: string;
	teamName: string;
	isTeamLeader: boolean;
	avatar?: string;
};

export const columns: ColumnDef<Employee>[] = [
	{
		accessorKey: 'avatar',
		header: '',
	},
	{
		accessorKey: 'firstName',
		header: 'First Name',
	},
	{
		accessorKey: 'lastName',
		header: 'Last Name',
	},
	{
		accessorKey: 'teamName',
		header: 'Team',
	},
	{
		accessorKey: 'isTeamLeader',
		header: '',
	},
];
