import Select from "@/components/common/Select";

export default function Transactions() {
	const sampleOptions = [
		{
			value: "gcash",
			label: "GCash",
		},
		{
			value: "cash",
			label: "Cash",
		},
		{
			value: "BDO",
			label: "BDO",
		},
	];

	return (
		<main className="p-2 flex flex-col gap-6">
			<Select label="Source" options={sampleOptions} />
			<div className="flex flex-col">
				<p>Total</p>
				<p>₱230.36</p>
			</div>
			<div>
				<table className="w-[100%]">
					<tr>
						<th className="text-start h-[40px]">Name</th>
						<th className="text-start h-[40px]">Amount</th>
						<th className="text-start h-[40px]">Date</th>
					</tr>
					<tr className="h-[40px]">
						<td>Subscription</td>
						<td>-₱369.00</td>
						<td>Sep 25, 2023</td>
					</tr>
					<tr className="h-[40px]">
						<td>Food</td>
						<td>-₱414.00</td>
						<td>Sep 13, 2023</td>
					</tr>
					<tr className="h-[40px]">
						<td>Initial amount</td>
						<td>₱4,000.00</td>
						<td>Sep 8, 2023</td>
					</tr>
				</table>
			</div>
		</main>
	);
}
