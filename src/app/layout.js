import "@/styles/globals.css";
import Navbar from "@/components/Nav/Navbar";
import Footer from "@/components/Footer";


//The structure that each page on the website follows
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-slate-800 text-slate-100">
        <header>
          <Navbar />
        </header>
        <main className="flex-1 px-8 sm:px-12 lg:px-16 pt-8 pb-6">
          {children}
        </main>
          <Footer />
      </body>
    </html>
  );
}
