import React from 'react'
import { Container } from 'react-bootstrap';
import Video from '../Video/Video';
import './main.css'


function Stream() {
    return (
        <div >
            <h2 className="stream-head mb-4">Stream</h2>
            <Container className="video" fluid="md"><Video  url="http://195.148.104.124:1935/jakelu/jekaters/playlist.m3u8" type="application/x-mpegurl" /> </Container>     
            
        </div>
    )
}

export default Stream
