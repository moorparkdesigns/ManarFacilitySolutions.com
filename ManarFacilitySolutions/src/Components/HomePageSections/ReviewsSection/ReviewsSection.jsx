import { useRef } from "react";
import "./ReviewsSection.css";

const reviewsData = [
  {
    name: "Dan B.",
    rating: 5,
    text: `I was nervous letting people in my home for a deep clean and
    carpet steam but they were very easy to get along with and quick
    on task. My house has never looked better. Will be hiring from now
    on for weekly cleans. Thanks MANAR!`,
  },
  {
    name: "Ashley C.",
    rating: 5,
    text: `We hired MANAR Home Services to spruce up our front yard and 
    all I can say is WOW! Our curb appeal has tripled since they came 
    in and refreshed our yard. They are definitely our go-to for yard 
    work. Kind and professional. 10/10 stars!`,
  },
  {
    name: "Nancy K.",
    rating: 5,
    text: `I had a pretty difficult task that MANAR executed flawlessly 
    and for a very good price – cleaning out and fixing my gutters. Thank 
    you so much for the hard work! Have already recommended to all of my 
    neighbors.`,
  },
  {
    name: "David Y.",
    rating: 5,
    text: `Had a tenant move out that left the unit in an absolute mess. 
    The smell was horrendous and disgusting. The after is incredible. Manar 
    Facility Solutions responded promptly, charged a very fair price, and 
    got the job done. Highly recommend for any deep cleaning needs.`,
  },
  {
    name: "Rahul S.",
    rating: 5,
    text: `We had a great experience with move out cleaning. Showed up at 
    the time promised, pricing was very reasonable, service was great. 
    Five stars all the way!`,
  },
  {
    name: "Jakob W.",
    rating: 5,
    text: `I had a great experience with Manar Facility Solutions. I was 
    moving into a new apartment and wanted it deep cleaned before I brought 
    my stuff in. They were able to come with only 24 hours notice and left 
    the apartment looking spotless. Great value for the work done!`,
  },
  {
    name: "Abdulla A.",
    rating: 5,
    text: `They clean with honesty and dedication, taking their time to 
    ensure everything is spotless before finishing. I truly appreciate 
    their work and highly recommend them to anyone looking for reliable 
    house or apartment cleaning.`,
  },
  {
    name: "Nikki B.",
    rating: 5,
    text: `Manar Facility Solutions was so quick to reply to my message. 
    They offered an extremely fair price compared to other companies 
    which is great. More importantly, I was really impressed with their 
    care and attention to detail for my property...`,
  },
  {
    name: "Anthony S.",
    rating: 5,
    text: `They were able to perform services same day. Went above and 
    beyond. Insisted on me inspecting everything to make sure I was 
    happy. Highly recommend.`,
  },
];

function ReviewsSection() {
  const carouselRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="reviews-section">
      <div className="container-2">
        <h1>What people say</h1>
        <p>See what people have to say for our cleaning services.</p>
      </div>

      <div className="carousel-container">
        <div className="carousel-viewport">
          <div
            className="carousel-viewport"
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={(e) => handleMouseDown(e.touches[0])}
            onTouchMove={(e) => handleMouseMove(e.touches[0])}
            onTouchEnd={handleMouseUp}
          >
            <div className="reviews-track">
              {reviewsData.map((review, index) => (
                <div className="review" key={index}>
                  <div className="stars">
                    {[...Array(review.rating)].map((_, i) => (
                      <img
                        key={i}
                        src="/Images/Icons/Star.png"
                        alt="star"
                        className="star-icon"
                      />
                    ))}
                  </div>
                  <p>“{review.text}”</p>
                  <span>{review.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewsSection;
