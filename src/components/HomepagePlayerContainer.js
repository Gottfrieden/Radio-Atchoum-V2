import React, { useState } from 'react';
import playIcon from '../images/play-icon.png';
import ModalVideo from 'react-modal-video';


export default function HomepagePlayerContainer({ mixesList }) {
    const [isOpen, setOpen] = useState(false);
    
    // const embededVideo = mixesList[0].fields.embed;

    return (
        <>
            <ModalVideo 
                channel='youtube' 
                autoPlay={1}
                isOpen={isOpen} 
                videoId={mixesList[0].fields.video_id} 
                onClose={() => setOpen(false)} 
            />
            <div className='homepage-player-info'>
                <div 
                    className='player-container' 
                    style={{ backgroundImage: `url(${mixesList[0].fields.cover_big[0].url})`}}
                    onClick={() => setOpen(true)}
                >
                    <div className='play-button' style={{ backgroundImage: `url(${playIcon})`}} />
                </div>
                <div className='homepage-mix-info'>
                    <h2>{mixesList[0].fields.name}</h2>
                    <p>{mixesList[0].fields.year}</p>
                </div>
            </div>
        </>
    )
}