import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Select from "@/components/common/Select";

export default function NewTransaction() {
	const sourceOptions = [
		{
			value: "gcash",
			label: "GCash",
		},
		{
			value: "cash",
			label: "Cash",
		},
		{
			value: "bdo",
			label: "BDO",
		},
	];
	return (
		<main>
			<form className="p-2 flex flex-col gap-8">
				<Input name="date" type="date" label="Date" />
				<Select label="Source" name="source" options={sourceOptions} />
				<Input name="name" type="text" label="Name" />
				<Input name="amount" type="number" label="Number" />
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
				<Button>Submit</Button>
			</form>
		</main>
	);
}
