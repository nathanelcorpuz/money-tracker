import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

export default function NewSource() {
	return (
		<main className="p-2 flex flex-col gap-6">
			<p>New source</p>
			<form className="flex flex-col gap-6">
				<Input label="Name" type="text" name="name" />
				<Input label="Initial Amount" type="number" name="initialAmount" />
				<Button>Submit</Button>
			</form>
		</main>
	);
}
