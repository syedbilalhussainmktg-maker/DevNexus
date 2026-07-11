    export const metadata = {
      title: 'DevNexus',
      description: 'AI Chat App',
    }

    export default function RootLayout({
      children,
    }: {
      children: React.ReactNode
    }) {
      return (
        <html lang="en">
          <body>{children}</body>
        </html>
      )
    }
