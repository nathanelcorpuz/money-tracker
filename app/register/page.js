import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

export default function Register() {
	return (
		<main>
			<p className="p-2 pb-6">Register</p>
			<form className="p-2 flex flex-col gap-6">
				<Input name="username" label="Username" />
				<Input name="email" label="Email" type="email" />
				<Input name="pw" label="Password" type="password" />
				<Input name="confirm-pw" label="Confirm Password" type="password" />
				<Button>Submit</Button>
			</form>
		</main>
	);
}
