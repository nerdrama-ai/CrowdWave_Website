export const metadata = {
  title: "CrowdWave | Decentralized Offline Messaging",
  description: "Offline-first mesh messaging",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
