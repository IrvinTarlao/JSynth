import React from 'react';
import KeysFrame from './KeysFrame';
import Filters from './Filters';
import Oscs from './Oscs';

const Frame = () => {
    return (
        <div style={{width:'1000px', height:'500px', border:'2px solid red'}}>
            <Oscs />
            <div style={{width:'100%', height:'70%', backgroundColor:'orange', display:'flex'}}>
                <Filters />
                <KeysFrame />
            </div>
        </div>
    )
}

export default Frame;