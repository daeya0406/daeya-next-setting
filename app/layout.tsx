import { pretendard } from '@/shared/fonts';
import './globals.css';
import { ModalProvider } from '@/shared/ui/Modal';
import { ReactQueryProvider } from '@/lib/react-query';
import { ToastProvider } from '@/shared/ui/Toast';
import { Navbar } from '@/shared/ui/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body className="font-sans">
        <ReactQueryProvider>
          <Navbar />
          <main>{children}</main>
          <ModalProvider />
          <ToastProvider />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
