import { Providers } from "./providers";
import Main from "@/components/layout.js/main";

export const metadata = {
  title: "Kanban Task Management Wep App",
  description: "This is a mordern task anagement app",
  icons: {
    icon: "/images/favicon-32x32.png",
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Main>{children}</Main>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
