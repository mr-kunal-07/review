import React, { useRef } from "react";

const reviews = [
    {
        title: "Everything I need in one place",
        content:
            "Great booking app as you can easily book appointments, pay and rate your experience all through this platform.",
        name: "Jordan",
        location: "Cape Town, South Africa",
        image: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
        title: "Found my favorite salon",
        content:
            "Brilliant salon app for discovering new local businesses. Easy to book appointments online and great reminders. I found my new favorite salon on Fresha.",
        name: "Emily",
        location: "New York, USA",
        image: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
        title: "Great app",
        content:
            "I wish everyone in the service beauty industry had this system. So easy and convenient to use. It’s the best salon booking system I've ever used.",
        name: "Yuri",
        location: "Vancouver, Canada",
        image: "https://randomuser.me/api/portraits/men/33.jpg",
    },
    {
        title: "On-the-move appointments",
        content:
            "Easy to use on the go. Once you're signed in, you can book, amend or cancel appointments anytime. Seamless appointment booking!",
        name: "Amanda",
        location: "Los Angeles, USA",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        title: "Book appointments online directly",
        content:
            "Love to be able to book online instead of having to ring salons several times. Fresha is a game changer — top app.",
        name: "Josie",
        location: "Chicago, USA",
        image: "https://randomuser.me/api/portraits/women/55.jpg",
    },
    {
        title: "Great to find local hairdressers",
        content:
            "So easy to use and great to find the best salons in my area! Fresha is a great app.",
        name: "Kevin",
        location: "Vancouver, Canada",
        image: "https://randomuser.me/api/portraits/men/66.jpg",
    },
    {
        title: "Barbers in my area",
        content:
            "This app is great for scheduling and keeping up with my barbers appointments. The best appointment scheduling system I've used.",
        name: "Nathaniel",
        location: "London, UK",
        image: "https://randomuser.me/api/portraits/men/77.jpg",
    },
    {
        title: "Sleek look & feel, easy to use",
        content:
            "I love the slick and sleek look and feel of this booking software. It’s the best in the industry and I highly recommend it.",
        name: "Sylvester",
        location: "Melbourne, Australia",
        image: "https://randomuser.me/api/portraits/men/88.jpg",
    },
];

const ReviewCard = ({ title, content, name, location, image }) => (
    <div className="bg-gray-100 h-85 rounded-xl shadow-md p-6 w-70 flex flex-col justify-between flex-shrink-0">
        <div>
            <div className="flex items-center mb-3 text-yellow-500">
                {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>★</span>
                ))}
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">{title}</h3>
            <p className="text-gray-700 font-medium text-[15px]">{content}</p>
        </div>
        <div className="flex items-center mt-6">
            <img
                src={image}
                alt={name}
                className="w-10 h-10 rounded-full object-cover mr-3"
            />
            <div>
                <div className="font-medium text-gray-800">{name}</div>
                <div className="text-sm text-gray-500">{location}</div>
            </div>
        </div>
    </div>
);

const ReviewsSection = () => {
    const scrollRef = useRef(null);
    const cardWidth = 4000;
    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
        }
    };

    return (
        <section className="p-6 bg-gray-50 relative">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Reviews</h2>

            <div className="relative">
                {/* Left arrow */}
                <button
                    onClick={scrollLeft}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100"
                >
                    ←
                </button>

                {/* Right arrow */}
                <button
                    onClick={scrollRight}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100"
                >
                    →
                </button>

                <div
                    ref={scrollRef}
                    className="flex space-x-4 overflow-x-hidden scroll-smooth"
                >
                    {reviews.map((review, index) => (
                        <ReviewCard key={index} {...review} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;
