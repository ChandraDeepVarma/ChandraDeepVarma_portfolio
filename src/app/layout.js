import "./globals.css";

export const metadata = {
  title: "Alex Morgan — Full Stack Developer",
  description: "I craft scalable digital products from concept to deployment — combining precise engineering with thoughtful design to build things that actually matter.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
