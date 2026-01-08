import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Client.css";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      text: "The team was professional and delivered exactly what we needed on time.Amazing service and great support throughout the project. Highly recommended!",
      name: "John Smith",
      role: "Product Manager",
    },
    {
      text: "The team was professional and delivered exactly what we needed on time.Amazing service and great support throughout the project.",
      name: "Sarah Johnson",
      role: "UI/UX Designer",
    },
    {
      text: "Excellent experience.Amazing service and great support throughout the project. Communication was smooth and results were outstanding.",
      name: "Michael Lee",
      role: "Startup Founder",
    },
    {
      text: "Very reliable and skilled team. I would definitely work with them again.Amazing service and great support throughout the project.",
      name: "Emma Brown",
      role: "Marketing Specialist",
    },
    {
      text: "Top-quality work with attention to detail. Truly impressive service.Amazing service and great support throughout the project.",
      name: "David Wilson",
      role: "Software Engineer",
    },
  ];

  return (
    <div className="testimonial-container">
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop={true}
    >
      {testimonials.map((item, index) => (
        <SwiperSlide className="swiper-slide" key={index}>
          <div className="testimonial">
            <FaQuoteLeft className="testimonial-icon" />
            <p className="testimonial-text">{item.text}</p>
            <h4 className="testimonial-name">{item.name}</h4>
            <span className="testimonial-role">{item.role}</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default TestimonialCarousel;


