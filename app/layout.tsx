import type { Metadata } from "next";
import "./globals.css";
import { BalanceProvider } from "./contexts/BalanceContext";

export const metadata: Metadata = {
  title: "Farm Game",
  description: "4x4 tarla oyunu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>
        <BalanceProvider>
          {children}
        </BalanceProvider>
      </body>
    </html>
  );
}

//contexti burada sarmalıyoruz ki tüm uygulama bu contexti kullanabilsin
//contexti gamede kullanacağız çünkü sadece game sayfasında balance kullanılıyor