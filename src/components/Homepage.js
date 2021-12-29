import React from 'react';
import HomepagePlayerContainer from './HomepagePlayerContainer';

export default function Homepage({ mixesList }) {
    return (
        <div className='home'>
            <HomepagePlayerContainer mixesList={mixesList}/>
        </div>
    )
}