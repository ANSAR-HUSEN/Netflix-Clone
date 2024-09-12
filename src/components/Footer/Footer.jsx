import React from "react";
import "./footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <>
      <div className="footer-outer">
        <div className="footer-inner">
         <div className="footer-icon">
           <ul>
            <li><FacebookOutlinedIcon /></li>
            <li> <InstagramIcon /></li>
            <li> <YouTubeIcon /></li>
            </ul> 
           
           
         </div>
         <div className="footer-data">
            <div>
                <ul>
                    <li>Audio Description</li>
                    <li>Investor Relations</li>
                    <li>Legal Notices</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Help Center</li>
                    <li>Jobs</li>
                    <li>Cookies Preferences</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Gift Cards</li>
                    <li>Terms of Use</li>
                    <li>Corporate Information</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Media Center</li>
                    <li>Privacy</li>
                    <li>Contact Us</li>
                </ul>
            </div>

         </div>
         <div className="service">
            <p>
                Service Code
            </p>

         </div>
         <div className="copy">
            &copy; 1997-2024 Netflix, Inc.

         </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
