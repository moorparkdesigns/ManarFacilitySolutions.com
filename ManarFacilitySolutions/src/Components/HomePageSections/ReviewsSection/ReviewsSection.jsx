import { useRef, useEffect } from "react";
import "./ReviewsSection.css";

// Import star icon image
import StarIcon from "../../../assets/Icons/Star.png";

// Sample review data array with name, rating, and review text
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
  // Reference to the carousel container div, used for scrolling manipulation
  const carouselRef = useRef(null);
  // Ref to track whether user is currently dragging (for mouse/touch drag scrolling)
  const isDragging = useRef(false);
  // Ref to store initial pointer X position on drag start
  const startX = useRef(0);
  // Ref to store carousel's scrollLeft value at drag start
  const scrollLeft = useRef(0);

  // To create an endless loop effect, duplicate the reviews array 3 times
  const loopedReviews = [...reviewsData, ...reviewsData, ...reviewsData];
  // The middle index to start showing (center) in the duplicated list
  const middleIndex = reviewsData.length;

  // On component mount, set initial scroll position to the middle of the duplicated reviews
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Get width of one review card + 20px gap between cards
    const card = carousel.querySelector(".review");
    if (card) {
      const cardWidth = card.offsetWidth + 20;
      // Set scrollLeft to middleIndex * cardWidth to center the carousel
      carousel.scrollLeft = cardWidth * middleIndex;
    }
  }, []);

  // Function to handle scroll event for endless loop effect
  const handleScroll = () => {
    const carousel = carouselRef.current;
    const card = carousel?.querySelector(".review");
    if (!carousel || !card) return;

    const cardWidth = card.offsetWidth + 20; // Card width + margin
    const totalWidth = cardWidth * loopedReviews.length; // Total scrollable width
    const visibleWidth = carousel.offsetWidth; // Visible carousel width
    const left = carousel.scrollLeft; // Current scroll position
    const threshold = cardWidth * reviewsData.length; // One full set width

    // If scrolled too far to the left, jump ahead by one set width to loop
    if (left <= threshold) {
      carousel.scrollLeft = left + threshold;
    }
    // If scrolled too far to the right, jump back by one set width to loop
    else if (left + visibleWidth >= totalWidth - threshold) {
      carousel.scrollLeft = left - threshold;
    }
  };

  // Function to add visual effect on scroll: highlights the card centered in view
  const handleScrollEffect = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Get all review cards
    const cards = carousel.querySelectorAll(".review");
    // Calculate center X coordinate of the visible carousel area
    const centerX = carousel.offsetWidth / 2;

    cards.forEach((card) => {
      const box = card.getBoundingClientRect();
      // Calculate center X position of the card relative to viewport
      const cardCenter = box.left + box.width / 2;
      const distanceToCenter = Math.abs(centerX - cardCenter);

      // If card's center is close enough to carousel center, mark as active
      if (distanceToCenter < box.width / 2) {
        card.classList.add("review--center");
        card.classList.remove("review--side");
      } else {
        // Otherwise mark as side card (smaller, less prominent)
        card.classList.remove("review--center");
        card.classList.add("review--side");
      }
    });
  };

  // Setup scroll event listener on mount for continuous effect updates
  useEffect(() => {
    const node = carouselRef.current;
    if (!node) return;

    // Combined scroll handler calls both looping and visual effects functions
    const combinedScrollHandler = () => {
      handleScroll();
      handleScrollEffect();
    };

    node.addEventListener("scroll", combinedScrollHandler);
    handleScrollEffect(); // Initial highlight of center card

    // Cleanup event listener on unmount
    return () => node.removeEventListener("scroll", combinedScrollHandler);
  }, []);

  // Mouse / touch drag handlers for dragging the carousel horizontally

  // When mouse/touch drag starts, set dragging state and initial positions
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
  };

  // On mouse leave, stop dragging to prevent unwanted scrolling
  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  // On mouse up, stop dragging
  const handleMouseUp = () => {
    isDragging.current = false;
  };

  // While dragging, calculate how far the pointer has moved and scroll carousel accordingly
  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    if (e && typeof e.preventDefault === "function") {
      e.preventDefault(); // Prevent default to avoid unwanted selections
    }
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Multiplied to increase scroll speed
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="reviews-section">
      <div className="container-2">
        <h1>What people say</h1>
        <p>See what people have to say for our cleaning services.</p>
      </div>

      <div className="carousel-container">
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
            {/* Map over duplicated reviews to render cards continuously */}
            {loopedReviews.map((review, index) => (
              <div className="review" key={index}>
                <div className="stars">
                  {/* Render stars based on rating */}
                  {[...Array(review.rating)].map((_, i) => (
                    <img
                      key={i}
                      src={StarIcon}
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
  );
}

export default ReviewsSection;
