import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FirmLock — The client portal for independent consultants',
  description:
    'FirmLock gives independent consultants and small agencies a white-labeled portal for contracts, retainers, deliverables, and payments.',
  openGraph: {
    title: 'FirmLock',
    description: 'Software that works the way a Partner thinks.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
