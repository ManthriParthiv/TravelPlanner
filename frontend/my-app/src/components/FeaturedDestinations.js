import React from 'react';

const FeaturedDestinations = () => {
    const destinations = [
        { name: 'Paris', image: 'https://via.placeholder.com/150' },
        { name: 'New York', image: 'https://via.placeholder.com/150' },
        { name: 'Tokyo', image: 'https://via.placeholder.com/150' },
    ];

    return (
        <div className="destinations" id="destinations">
            <h3>Featured Destinations</h3>
            <div className="destination-list">
                {destinations.map((dest, index) => (
                    <div key={index} className="destination">
                        <img src={dest.image} alt={dest.name} />
                        <h4>{dest.name}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedDestinations;
