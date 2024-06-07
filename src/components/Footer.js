import React from 'react';

function Footer(){
    const year=new Date().getFullYear();
    return (
        <footer className='absolute bottom-0 w-full flex justify-center self-start 
        '>
            <p className=' text-center'>copyright &copy; {year} FarazKeep all rights reserved</p>
        </footer>
    );
}

export default Footer;