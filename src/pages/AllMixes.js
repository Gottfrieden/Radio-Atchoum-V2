import React, { useState } from 'react';
import parse from 'html-react-parser';
import ModalVideo from 'react-modal-video';

export default function AllMixes({ mixesList }) {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className='all-mixes-container'>
            {mixesList.map((mix, i) => (
                <>
                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={mix.fields.video_id} onClose={() => setOpen(false)} />
                    <div 
                        className='mix-container' 
                        onClick={()=> setOpen(true)}
                        key={i}
                    >
                        <div className='mix-cover' style={{ backgroundImage: `url(${mix.fields.cover_small[0].url})` }}/>
                        <div className='mix-info'>
                            <h2>{mix.fields.name}</h2>
                            <p>{mix.fields.year}</p>
                        </div>
                    </div>
                </>
            ))}
        </div>
    )
}