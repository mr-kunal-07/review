import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const reviews = [
    {
        title: "Everything I need in one place",
        content: "Great booking app as you can easily book appointments, pay and rate your experience all through this platform.",
        name: "Rahul",
        location: "Bangalore, India",
        image: "./image1.png"
    },
    {
        title: "Found my favorite salon",
        content: "Brilliant salon app for discovering new local businesses. Easy to book appointments online and great reminders. I found my new favorite salon on Fresha.",
        name: "Sunita",
        location: "Delhi, India",
        image: "./image.png"
    },
    {
        title: "Great app",
        content: "I wish everyone in the service beauty industry had this system. So easy and convenient to use. It’s the best salon booking system I've ever used.",
        name: "Raj",
        location: "Mumbai, India",
        image: "./image3.png"
    },
    {
        title: "On-the-move appointments",
        content: "Easy to use on the go. Once you're signed in, you can book, amend or cancel appointments anytime. Seamless appointment booking!",
        name: "Sarita",
        location: "Chennai, India",
        image: "./image6.png"
    },
    {
        title: "Book appointments online directly",
        content: "Love to be able to book online instead of having to ring salons several times. Fresha is a game changer — top app.",
        name: "Gaurav",
        location: "Hyderabad, India",
        image: "./image4.png"
    },
    {
        title: "Great to find local hairdressers",
        content: "So easy to use and great to find the best salons in my area! Fresha is a great app.",
        name: "Nalini",
        location: "Kolkata, India",
        image: "https://imgs.search.brave.com/IFS3Gc0k-cSv2nrjOps9t31IZZF9fx-bGkeXfZdOZLg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzg3LzgzLzI2/LzM2MF9GXzE4Nzgz/MjYyNl9aMEs1NE51/RkR6UE0xME5adzZn/V2RSWU1DNzYzeEpR/TS5qcGc"
    },
    {
        title: "Barbers in my area",
        content: "This app is great for scheduling and keeping up with my barbers appointments. The best appointment scheduling system I've used.",
        name: "Suresh",
        location: "Pune, India",
        image: "./image5.png"
    },
    {
        title: "Sleek look & feel, easy to use",
        content: "I love the slick and sleek look and feel of this booking software. It’s the best in the industry and I highly recommend it.",
        name: "Priya",
        location: "Ahmedabad, India",
        image: "https://imgs.search.brave.com/vuBcrZZypB27GD44bHMp_0YVA3DeqjA3fCdFAPn0tY4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzY0LzEzLzA1/LzM2MF9GXzI2NDEz/MDUwM185ZTNIbzZu/ZGxNYWI2VlhSNjMy/ZVRQSWVQemxFemZi/ei5qcGc"
    }
];

const ReviewCard = ({ title, content, name, location, image }) => (
    <div className="bg-gray-100 rounded-xl shadow-md p-6 w-[230px] md:w-[340px] lg:w-[290px] flex flex-col justify-between flex-shrink-0">
        <div>
            <div className="flex items-center mb-3 text-yellow-500">
                {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>★</span>
                ))}
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
            <p className="text-gray-700 font-medium text-sm">{content}</p>
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
    const scrollAmount = 350;

    const scrollLeft = () => {
        scrollRef.current?.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" });
    };

    return (
        <section className="p-4 md:p-6 bg-gray-50 relative">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 text-center">Reviews</h2>

            <div className="relative">
                {/* Left arrow */}
                <button
                    onClick={scrollLeft}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 md:p-3 rounded-full shadow hover:bg-gray-100"
                >
                    <FaArrowLeft className="text-gray-700 text-xl" />
                </button>

                {/* Right arrow */}
                <button
                    onClick={scrollRight}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 md:p-3 rounded-full shadow hover:bg-gray-100"
                >
                    <FaArrowRight className="text-gray-700 text-xl" />
                </button>

                <div
                    ref={scrollRef}
                    className="flex space-x-4 overflow-x-auto scroll-smooth py-4 px-2 md:px-4"
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
