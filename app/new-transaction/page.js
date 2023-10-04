export default function NewTransaction() {
	return (
		<main>
			<form className="p-2 flex flex-col gap-8">
				<div className="flex flex-col">
					<label for="date">Date</label>
					<input
						id="date"
						name="date"
						className="border rounded p-2 bg-slate-50"
						type="date"
					/>
				</div>
				<div className="flex flex-col">
					<label for="source">Source</label>
					<select
						className="border rounded p-2 bg-slate-50"
						name="source"
						id="source"
					>
						<option value="gcash">GCash</option>
						<option value="cash">Cash</option>
						<option value="BDO">BDO</option>
					</select>
				</div>
				<div className="flex flex-col">
					<label for="name">Name</label>
					<input
						id="name"
						name="name"
						className="border rounded p-2 bg-slate-50"
					/>
				</div>
				<div className="flex flex-col">
					<label for="amount">Amount</label>
					<input
						className="border rounded p-2 bg-slate-50"
						id="amount"
						name="amount"
						type="number"
					/>
				</div>
				<div>
					<p className="pb-4">Type</p>
					<div className="flex gap-8">
						<div className="flex gap-1">
							<input type="radio" id="debit" name="debit" value="debit" />
							<label for="debit">Debit</label>
						</div>
						<div className="flex gap-1">
							<input type="radio" id="credit" name="credit" value="credit" />
							<label for="credit">Credit</label>
						</div>
					</div>
				</div>
				<button className="bg-black text-white p-3 rounded">Submit</button>
			</form>
		</main>
	);
}
