import React from 'react';
import { BsTwitter } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'


const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>

                <a href="https://www.linkedin.com/in/amirhossein-salehi-mjsl/" target="_blank" rel="noreferrer">
                    <AiFillLinkedin />
                </a>
            </div>
            <div>
                <a href="https://twitter.com/Amir_dash_hash" target="_blank" rel="noreferrer">
                    <BsTwitter />
                </a>
            </div>
            <div>
                <a href="https://github.com/Amirhossein2292" target="_blank" rel="noreferrer">
                    <AiFillGithub />
                </a>
            </div>
        </div>
    );
};

export default SocialMedia;