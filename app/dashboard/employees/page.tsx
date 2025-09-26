import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import employeesData from "@/lib/employeesData";
import { setTimeout } from "timers/promises";
import { columns } from "./columns";

const EmployeesPage = async () => {
	await setTimeout(5000);
	return (
		<Card>
			<CardHeader>
				<CardTitle>Employees</CardTitle>
			</CardHeader>
			<CardContent>
				<DataTable data={employeesData} columns={columns} />
			</CardContent>
		</Card>
	);
};

export default EmployeesPage;
