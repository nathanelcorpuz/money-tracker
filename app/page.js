"use client";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center p-4">
			<p>Total</p>
			<p>₱1,753.03</p>
			<div className="flex gap-4 p-4">
				<div>
					<p>GCash</p>
					<p>₱230.36</p>
				</div>
				<div>
					<p>BDO</p>
					<p>₱522.67</p>
				</div>
				<div>
					<p>Cash</p>
					<p>₱1,000.00</p>
				</div>
			</div>
		</main>
	);
}
