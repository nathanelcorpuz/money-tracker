import Link from "next/link";

export default function Settings() {
	return (
		<main>
			<menu className="flex flex-col gap-6 p-2">
				<li>
					<Link href="/settings/new-source">Create new source</Link>
				</li>
				<li>
					<Link href="/">Change password</Link>
				</li>
				<li>
					<Link href="/">Change username</Link>
				</li>
			</menu>
		</main>
	);
}
