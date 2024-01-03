"use client";

type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <a href="#" className="btn">
      {children}
    </a>
  );
}
