import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="w-screen mx-auto relative h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/bgi.jpg')" }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-60">
        {children}
      </div>
    </div>
  );
};

export default Layout;
