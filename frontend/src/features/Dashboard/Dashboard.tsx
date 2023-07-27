import { ReactNode } from "react";

interface contentProps {
  children: ReactNode;
}

export default function Dashboard(content: contentProps) {
  return (
    <>
      <div className="w-8/12 h-full bg-orange-500">{content.children}</div>
    </>
  );
}
