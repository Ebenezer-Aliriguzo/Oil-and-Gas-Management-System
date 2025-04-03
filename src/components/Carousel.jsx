import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';
import img1 from '../assets/image1.jpg';
import img2 from '../assets/image2.jpg';
import img3 from '../assets/image3.jpg';
import img4 from '../assets/image4.jpg';
import img5 from '../assets/image5.jpg';
import img6 from '../assets/image6.webp';
import img7 from '../assets/image7.jpg';
import img8 from '../assets/image8.jpg';
import img9 from '../assets/image9.jpg';
import img10 from '../assets/image10.jpg';
import img11 from '../assets/image11.jpg';
import img12 from '../assets/image12-gasterminalling-lite-gas.jpg';
import img13 from '../assets/image13.jpg';
import img14 from '../assets/image14.PNG';
import img15 from '../assets/image15.PNG';
import img16 from '../assets/image16.webp';
import img17 from '../assets/image17.jpg';
import img18 from '../assets/image18.webp';
import img19 from '../assets/image19.jpg';
import img20 from '../assets/image20.jpg';
import img21 from '../assets/image21gas-cylinders-icons-petroleum-safety-260nw-1192790263.jpg';
import img22 from '../assets/image22.jpg';
import img23 from '../assets/image23.jpg';
import img24 from '../assets/image24.jpg';
import img25 from '../assets/image25.webp';
import img26 from '../assets/image26.jpg';
import img27 from '../assets/image27-Compressed_gas_cylinders.mapp_and_oxygen.triddle.jpg';

const ImageCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel
        autoPlay
        interval={4000}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        swipeable={true}
        emulateTouch={true}
      >
        <div>
          <img src={img1} alt="Image 1" />
          <p className="carousel-caption">Wonderful Modern Gas Dispenser</p>
        </div>
        <div>
          <img src={img2} alt="Image 2" />
          <p className="carousel-caption">Our Modern Oil and Gas Plant</p>
        </div>
        <div>
          <img src={img3} alt="Image 3" />
          <p className="carousel-caption">Our Modern Gas Cyliders</p>
        </div>
        <div>
          <img src={img4} alt="Image 4" />
          <p className="carousel-caption">The Modern Cooking Gas Accesseries</p>
        </div>
        <div>
          <img src={img5} alt="Image 5" />
          <p className="carousel-caption">Our Modern Gas Cyliders</p>
        </div>
        <div>
          <img src={img6} alt="Image 6" />
          <p className="carousel-caption">Our Modern Gas Cyliders</p>
        </div>
        <div>
          <img src={img7} alt="Image 7" />
          <p className="carousel-caption">Our Modern Gas Cyliders</p>
        </div>
        <div>
          <img src={img8} alt="Image 8" />
          <p className="carousel-caption">Other Modern Gas Cyliders</p>
        </div>
        <div>
          <img src={img9} alt="Image 9" />
          <p className="carousel-caption">Our Staff in Action</p>
        </div>
        <div>
          <img src={img10} alt="Image 10" />
          <p className="carousel-caption">Available Products at Chidest Oil and Gas</p>
        </div>
        <div>
          <img src={img11} alt="Image 11" />
          <p className="carousel-caption">Cylinders in Stock</p>
        </div>
        <div>
          <img src={img12} alt="Image 12" />
          <p className="carousel-caption">The Gasterminalling Lite Gas</p>
        </div>
        <div>
          <img src={img13} alt="Image 13" />
          <p className="carousel-caption">We are Ready for You</p>
        </div>
        <div>
          <img src={img14} alt="Image 14" />
          <p className="carousel-caption">Chidest Truck for LPG</p>
        </div>
        <div>
          <img src={img15} alt="Image 15" />
          <p className="carousel-caption">The Chidest Tanks for LPG</p>
        </div>
        <div>
          <img src={img16} alt="Image 16" />
          <p className="carousel-caption">Chidest Modern Accessories</p>
        </div>
        <div>
          <img src={img17} alt="Image 17" />
          <p className="carousel-caption">Chidest Machineries</p>
        </div>
        <div>
          <img src={img18} alt="Image 18" />
          <p className="carousel-caption">Chidest Modern Accessories</p>
        </div>
        <div>
          <img src={img19} alt="Image 19" />
          <p className="carousel-caption">Chidest Modern Gas Cyliders</p>
        </div>
        <div>
          <img src={img20} alt="Image 20" />
          <p className="carousel-caption">Chidest Modern Gas Cyliders</p>
        </div>
        <div>
          <img src={img21} alt="Image 21" />
          <p className="carousel-caption">Gas Cylinders Icons Petroleum Safety 260nw</p>
        </div>
        <div>
          <img src={img22} alt="Image 22" />
          <p className="carousel-caption">Chidest Modern Gas Cyliders</p>
        </div>
        <div>
          <img src={img23} alt="Image 23" />
          <p className="carousel-caption">Chidest Modern Gas Cyliders</p>
        </div>
        <div>
          <img src={img24} alt="Image 24" />
          <p className="carousel-caption">Chidest Staff Serving Customers Perfectly</p>
        </div>
        <div>
          <img src={img25} alt="Image 25" />
          <p className="carousel-caption">Chidest Modern Gas Cyliders</p>
        </div>
        <div>
          <img src={img26} alt="Image 26" />
          <p className="carousel-caption">Chidest Installations in Progress</p>
        </div>
        <div>
          <img src={img27} alt="Image 27" />
          <p className="carousel-caption">Compressed Gas Cylinders Mapp and Oxygen Triddle</p>
        </div>
      </Carousel>
      <div className="carousel-center-text">
        Welcome to Chidex Oil and Gas Plant
      </div>
    </div>
  );
};

export default ImageCarousel;