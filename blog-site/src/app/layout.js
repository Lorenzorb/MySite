import "./globals.css";

export const metadata = {
  title: "Lorenzo",
  description: "Blog site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
