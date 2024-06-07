import React from 'react';
import logo from './images/logo.png'
import {HeaderBgContext} from '../App'
import SwitchBtn from './SwitchBtn'

function Header(promps){
    const year=new Date().getFullYear();
    function changetheme(){
        promps.theme();
    }
    return (
        <HeaderBgContext.Consumer>
            {(contextpromp)=>{
                return (
                    <header className='flex justify-between items-center' style={{backgroundColor:contextpromp.headerbg}}>
                    <div className='flex items-center relative ml-2 w-full' >
                    <img src={logo} className='h-20 w-20'/>
                    <span className='text-3xl absolute left-10 font-semibold italic translate-y-2'>araz Keep</span>
                    </div>

                 
                     <SwitchBtn theme={promps.theme}/>
                    
                    
                </header>
                );
            }}
       
        </HeaderBgContext.Consumer>
    );
}

export default Header;