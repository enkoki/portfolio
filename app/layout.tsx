import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({
	variable: "--font-fira-code",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Meet Reason Dahal | Portfolio",
	description: "Portfolio website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${firaCode.variable} h-full antialiased`}>
			<body className="min-h-full flex flex-col bg-secondary border-x-171 border-background">
				{children}
			</body>
		</html>
	);
}
