import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div id="f">
        ABOUT    HELP   PRESS   API   JOBS   PRIVACY   TERMS   LOCATIONS   TOP   ACCOUNTS   HASHTAGS   LANGUAGE
      </div>
      &copy; {new Date().getFullYear()} INSTAGRAM FROM FACEBOOK
    </footer>
  );
}

export default Footer;
