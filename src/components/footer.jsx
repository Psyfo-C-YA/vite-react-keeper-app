import React from "react";
import "../style.css"

 function Footer() {
    const currentYear = new Date().getFullYear();

    return <footer>
        <p> © {currentYear} Siyabonga Hadebe</p>
    </footer>
        
    
}

export default Footer;