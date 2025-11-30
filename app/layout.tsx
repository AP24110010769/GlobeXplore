import "./globals.css";

export const metadata = {
  title: "GlobeXplore - Your Gateway to the World",
  description: "Discover breathtaking destinations with GlobeXplore.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
