"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const handleMenuToggle = () => setIsOpen((isOpen) => !isOpen);

	const menu = (
		<div className="absolute top-0 right-0 bottom-0 left-0 bg-white p-2">
			<div className="text-end">
				<button className="p-1" onClick={handleMenuToggle}>
					Close
				</button>
			</div>
			<menu className="flex flex-col gap-4">
				<li>
					<Link onClick={handleMenuToggle} href="/">
						home
					</Link>
				</li>
				<li>
					<Link onClick={handleMenuToggle} href="/new-transaction">
						new transaction
					</Link>
				</li>
				<li>
					<Link onClick={handleMenuToggle} href="/transactions">
						transactions
					</Link>
				</li>
				<li>
					<Link onClick={handleMenuToggle} href="/settings">
						settings
					</Link>
				</li>
				<li>
					<Link onClick={handleMenuToggle} href="/logout">
						logout
					</Link>
				</li>
			</menu>
		</div>
	);
	return (
		<header className="flex p-2 justify-end">
			<button className="p-1" onClick={() => setIsOpen((isOpen) => !isOpen)}>
				menu
			</button>
			{isOpen ? menu : null}
		</header>
	);
}
