import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";

export const metadata = {
  title: "Vishnu Vardhan Reddy Gujjula | Full Stack Software Engineer",
  description:
    "Portfolio of Vishnu Vardhan Reddy Gujjula, a Full Stack Software Engineer with 3+ years of experience building scalable frontend, backend, and distributed systems.",
};
import { ChatProvider } from "./contexts/chatContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChatProvider>
          <div className="sticky top-0 z-[9999] backdrop-blur-md bg-[#0d1224]/80 border-b border-[#1a1f3a]">
            <Navbar />
          </div>
          <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[80rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
            {children}
          </main>
          <Footer />
        </ChatProvider>
      </body>
    </html>
  );
}
