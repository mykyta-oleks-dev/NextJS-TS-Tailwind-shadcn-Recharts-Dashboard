import { setTimeout } from "timers/promises";

const EmployeesPage = async () => {
	await setTimeout(5000);
	return (
		<div>
			<h2>Employees</h2>
		</div>
	);
};

export default EmployeesPage;
