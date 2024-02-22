import { Metadata } from 'next';
import '../styles/index.css';

export const metadata: Metadata = {
  title: "Safary",
  description: "Tour Guide Application",
};
export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <>
        {children}
        </>
    </html>
  );
}
