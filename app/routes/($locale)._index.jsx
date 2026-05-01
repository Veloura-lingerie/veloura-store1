import {useEffect, useState} from 'react';

export default function Homepage() {
  const [index, setIndex] = useState(0);

  const images = [
    "https://i.imgur.com/dOglHEn.jpg",
    "https://i.imgur.com/EGKP5pI.jpg",
    "https://i.imgur.com/D7dx3Qa.jpg",
    "https://i.imgur.com/7pKNTYi.jpg",
  ];

  useEffect(() => {
    const i = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(i);
  }, []);

  return (
    <div style={{fontFamily: "Arial", padding: "40px"}}>
      
      <h1 style={{fontSize: "40px", marginBottom: "20px"}}>
        VELOURA
      </h1>

      <img
        src={images[index]}
        style={{width: "100%", maxWidth: "500px", borderRadius: "20px"}}
      />

      <h2 style={{marginTop: "40px"}}>After Dark</h2>

      <p>Luxury sets designed for bold nights.</p>

    </div>
  );
}