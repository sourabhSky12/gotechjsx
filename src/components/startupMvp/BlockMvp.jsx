import React from 'react'
import TechStackContent from '../common/TechStackContent';
const BlockMvp = () => {
     const title = "BLOCKCHAIN";
  const description = "Use our state-of-the-art approach to blockchain development to innovate your startup MVPs. We make use of cutting-edge instruments and technologies to guarantee reliable, scalable, and secure blockchain solutions. Our company uses a variety of platforms and programming languages, precisely customizing each project to match its specific needs.";
  
  const stats = [
    " Smart Contract Development;",
    " Decentralized Application (dApp) Creation;",
    "Cryptocurrency Wallet Integration;",
    " Blockchain Network Customization;",
    " NFT and Tokenization.",
  ];

  const technologies = [
    { name: ".NET", image: "/NET-1.png" },
    { name: "Go", image: "/GOlang-1.png" },
    { name: "Java", image: "/Java-1.png" },
    { name: "Scala", image: "/Scala-1.png" },
    { name: "Node JS", image: "/NodeJS-1.png" },
    { name: "PHP", image: "/PHP-1.png" },
    { name: "Python", image: "/Python-1.png" },
    { name: "Ruby", image: "/Ruby-1.png" },
    { name: "Rust", image: "/Rust-1.png" }
  ];

  return (
    <>
     <TechStackContent
      title={title}
      description={description}
      stats={stats}
      technologies={technologies}
      
    />
    
    </>
  )
}

export default BlockMvp