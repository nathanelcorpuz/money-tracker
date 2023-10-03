"use client";

import { useState } from "react";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const menu = (
		<div className="absolute top-0 right-0 bottom-0 left-0 bg-white p-4">
			<div className="text-end">
				<button className="p-1" onClick={() => setIsOpen((isOpen) => !isOpen)}>
					Close
				</button>
			</div>
			<menu className="flex flex-col gap-4">
				<li>
					<a>home</a>
				</li>
				<li>
					<a>new transaction</a>
				</li>
				<li>
					<a>transactions</a>
				</li>
				<li>
					<a>settings</a>
				</li>
				<li>
					<a>logout</a>
				</li>
			</menu>
		</div>
	);
	return (
		<header className="flex p-2">
			<button onClick={() => setIsOpen((isOpen) => !isOpen)}>menu</button>
			{isOpen ? menu : null}
		</header>
	);
}
