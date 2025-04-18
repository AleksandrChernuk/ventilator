import { ReactNode } from "react";
import logo from "../assets/ventilator_logo_new_ua.png";

type Props = {
  children: ReactNode;
};

export const Layout = (props: Props) => {
  return (
    <div className="min-h-full">
      <header className="bg-blue-100/80">
        <div className="max-w-6xl py-2 px-4">
          <img src={logo} width={93} height={39} alt="logo" />
        </div>
      </header>
      <main className="py-10 mx-auto">{props.children}</main>
    </div>
  );
};
