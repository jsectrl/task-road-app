import { ReactNode } from "react";

interface pageProps {
  children: ReactNode;
}

export default function Main(content: pageProps) {
  return (
    <div className="w-screen h-screen fixed px-8 sm:px-12 md:px-16 lg:px-20 bg-black">
      {content.children}
    </div>
  );
}
