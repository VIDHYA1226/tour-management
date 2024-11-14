
import React from "react";
import Slider from "react-slick";
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg';


const Testimonials = () => {
    const settings={
        dots : true,
        infinite: true,
        autoplay: true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow: 3,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1,
                },
            }
        ]
    }
   return <Slider {...settings}>
    <div className="testimonial py-4 px-3">
        <p>I had an amazing experience booking my European tour through
             Tour World! The website was so easy to use, and I loved the 
             detailed itineraries. The customer reviews helped me choose 
             the best package, and everything went smoothly from booking 
             to the trip itself. Highly recommend!</p>

             <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">John Doe</h6>
                    <p>Customer</p>
                </div>
             </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p>Great platform with plenty of tour options! I booked a
             cultural tour to Japan, and the itinerary was spot on.
              The booking process was simple, and the payment 
              system was secure. 
               Overall, a fantastic experience.</p>

             <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Lia Franklin</h6>
                    <p>Customer</p>
                </div>
             </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p>Tour World made planning my beach holiday so effortless. 
            The deals they offered were amazing, and the entire booking 
            process was smooth. I appreciated the customer support team 
            who answered my questions quickly. Definitely my go-to for future trips!</p>

             <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">John Doe</h6>
                    <p>Customer</p>
                </div>
             </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p>The website is good for booking tours, but I had some 
            issues with tour availability during peak season. Some
             of the packages I wanted were already sold out, which 
             was disappointing. However, I managed to find a similar option. 
             Would recommend, but maybe plan ahead.</p>

             <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Lia Franklin</h6>
                    <p>Customer</p>
                </div>
             </div>
    </div>
   </Slider>
}

export default Testimonials;