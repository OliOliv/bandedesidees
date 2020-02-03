import React from "react";
import Link from "next/link";

class Header extends React.Component {
  render() {
    return (
      
      <header className="header">
        <Link href="/about">
          <h1>la bande des idées</h1>
        </Link>
        <p>Le rendez-vous mensuel des bédéphiles</p>



        <style jsx>{`
           .header {
            background-color: black;
            color: white;
            display: flex;
            align-items: center;
            position: fixed;
            height: 3rem;
            width: 100%;
            top: 0;
            z-index: 1;
          }
          
          .header h1 {
            font-size: 1rem;
            padding-left: 2rem;
          }
          
          .header p {
            margin-left: auto;
            padding-right: 3rem;
          }
      `}</style>



      </header>
    );
  }
}

export default Header;