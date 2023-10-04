export default function Input({ label, name, type }) {
	return (
		<div className="flex flex-col">
			<label for={name}>{label}</label>
			<input
				id={name}
				name={name}
				className="border rounded p-2 bg-slate-50"
				type={type || "text"}
			/>
		</div>
	);
}
