import React from "react";

const Footer = () => {
  const copyrightStyle = {
    backgroundColor: "rgba(0,0,0,0.05)",
    color: "#fff",
  };
  return (
    <footer className="mt-4 text-center text-lg-start bg-dark text-muted">
      <div className="text-center p-4" style={copyrightStyle}>
        Made by Mohammed Puthawala
      </div>
    </footer>
  );
};

export default Footer;
