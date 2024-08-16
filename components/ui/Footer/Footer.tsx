import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full h-auto bg-gray-100 text-gray-600 border-t border-gray-200 shadow-sm flex items-center justify-center p-4">
      <p className="text-center">
        &copy; {new Date().getFullYear()} All rights reserved by{" "}
        <strong>@thyy</strong>
      </p>
    </footer>
  );
};

export default Footer;
