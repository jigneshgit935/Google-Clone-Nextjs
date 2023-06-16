import './globals.css';

export const metadata = {
  title: 'Google',
  description: 'Created by Jignesh',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
