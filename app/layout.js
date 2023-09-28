import { AuthContextProvider } from "@/context/AuthContext";
import Header from "../_components/header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Money Tracker",
	description: "Track your money easily",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<AuthContextProvider>
					<Header />
					{children}
				</AuthContextProvider>
			</body>
		</html>
	);
}
