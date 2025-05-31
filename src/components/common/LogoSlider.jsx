import "/src/LogoSlider.css";



import logo1 from "../../assets/images/clients/AFS.jpg";


import logo2 from '../../assets/images/clients/aryavart.png';
import logo3 from '../../assets/images/clients/eklingnath.png';
import logo4 from '../../assets/images/clients/ganesh-digital.jpg';
import logo5 from '../../assets/images/clients/image-art-studio.png';
import logo6 from '../../assets/images/clients/jaymadi.png';
import logo7 from '../../assets/images/clients/krishna-tours.png';
import logo8 from '../../assets/images/clients/lakecity.png';
import logo9 from '../../assets/images/clients/mps-udaipur.png';
import logo10 from '../../assets/images/clients/pds-clicks.webp';
import logo11 from '../../assets/images/clients/ranjeet-septic.png';
import logo12 from '../../assets/images/clients/travenex.png';
import logo13 from '../../assets/images/clients/weddings-for-u.png';
import logo14 from '../../assets/images/clients/yk-1.png';

const LogoSlider = () => {
  // Array of logo image paths (replace with your actual logo paths)
  const logos = [
    logo1,
    logo2,
    logo3,  
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
    logo13,
    logo14,
  ];

  // Duplicate the logos array to create seamless infinite loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="logo-slider-container ">
      <div className="logo-slider-track">
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="logo-slide">
            <img src={logo} alt={`Logo ${index % logos.length + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;