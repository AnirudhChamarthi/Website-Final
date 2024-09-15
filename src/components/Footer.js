import React from 'react';
import './Footer.css'; // Assuming you're using CSS modules for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Anirudh Chamarthi. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;