
import { Providers } from "./providers";

export const metadata = {
  title: "Kanban Task Management Wep App",
  description: "This is a mordern task anagement app",
  icons: {
    icon: '/images/favicon-32x32.png',
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
