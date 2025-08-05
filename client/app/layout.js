import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Vishnu Vardhan Reddy G - Software Developer",
  description:
    "This is the portfolio of Vishnu Vardhan Reddy G. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <div className="sticky top-0 z-[9999] backdrop-blur-md bg-[#0d1224]/80 border-b border-[#1a1f3a]">
          <Navbar />
        </div>
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[80rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

