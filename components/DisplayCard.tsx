

import React from 'react';

interface Artwork {
    id: number;
    title: string;
    url: string;
    artist: string;
    price: number;
}

interface DisplayCardProps {
    artwork: Artwork;
}

const DisplayCard: React.FC<DisplayCardProps> = ({ artwork }) => {
    return (
        <div>
            <img src={artwork.url} alt={artwork.title} />
            <h3>{artwork.title}</h3>
            <p>Artist: {artwork.artist}</p>
            <p>Price: ${artwork.price.toFixed(2)}</p>
        </div>
    );
};

export default DisplayCard;

