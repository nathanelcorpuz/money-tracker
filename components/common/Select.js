export default function Select({ label, name, options }) {
	return (
		<div className="flex flex-col">
			<label for={name}>{label}</label>
			<select className="border rounded p-2 bg-slate-50" name={name} id={name}>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
}
