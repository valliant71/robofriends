import React from 'react';

const Card = ( { name, email, id }) => {
    return(
        <div className='tc bg-light-blue dib br3 pa2  ma2  grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?2000x200`} />
            <div>
                <h2>{name}</h2>
                <p className='cardColor'>{email}</p>
            </div>
        </div>
    );
}

export default Card;