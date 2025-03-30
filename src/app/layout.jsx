import Navbar from "@/components/layouts/navbar";
import "../styles/globals.css";
import Footer from "@/components/layouts/footer";
export const metadata = {
  title: "Log-U - Home",
  description:
    "Log-U - You have the idea. We have the expertise. At Log-U, we build and scale high-performance tech teams and deliver turnkey software solutions that move your business forward.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
