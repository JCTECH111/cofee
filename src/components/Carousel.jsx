
import Slider from "react-slick";  // Import the Slider from react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/slide1.jpeg"
import image2 from "../assets/slide2.jpeg"
import image3 from "../assets/slide3.jpeg"
import image4 from "../assets/slide4.jpeg"


const slides = [
    { id: 1, content: 'Italian Black cofee', image: image1 },
    { id: 2, content: 'Nigerian made Coffee', image: image2 },
    { id: 3, content: 'Algerian coffee cup', image: image3 },
    { id: 4, content: 'Chocolate coffee drink', image: image4 },
];

const Carousel = () => {
    // Slider settings
    const settings = {
        dots: true,               // Shows dots below the carousel
        infinite: true,           // Enables infinite loop scrolling
        speed: 500,               // Transition speed in ms
        slidesToShow: 1,          // Default number of slides to show
        slidesToScroll: 1,        // Number of slides to scroll at once
        autoplay: true,           // Enables automatic scrolling
        autoplaySpeed: 3000,      // Delay between transitions (in ms)
        arrows: false,            // Disable previous and next arrows
        responsive: [
          {
            breakpoint: 1024,     // Screens larger than 1024px (large screens)
            settings: {
              slidesToShow: 2     // Show 2 slides on large screens
            }
          },
          {
            breakpoint: 600,      // Screens smaller than 600px (small screens)
            settings: {
              slidesToShow: 1     // Show 1 slide on small screens
            }
          }
        ]
      };
      

    return (
        <div className="carousel">
            <Slider {...settings}>
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className={`h-40 w-full border-none !grid !grid-cols-2 !rounded-2xl`}
                    >
                        <div className='flex flex-col items-center justify-between flex-grow p-4'>
                            <h3 className='text-xl font-bold text-gray-700 '>{slide.content}</h3>
                            <button className='bg-brown-600 text-white py-2 px-4 rounded-2xl mt-2'>Read more</button>
                        </div>
                        <img
                            src={slide.image}
                            alt={slide.content}
                            className='h-full w-full rounded-bl-[5rem]'
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
