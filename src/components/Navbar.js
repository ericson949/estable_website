import React from 'react';

const Navbar = props => {
    return (
        <nav class="border-gray-200 w-full flex pl-4 pr-6 py-3.5 ">
            <div class="container w-full mx-auto flex flex-wrap items-center">
                <div className='w-fit text-white text-[14px]'>Menu</div>
                <div className='w-fit ml-auto flex items-center'>
                    <div className='w-fit text-[14px] text-white'>Login</div>
                    <button className='w-fit ml-3 text-[14px] rounded-sm        font-semibold text-myback uppercase py-4 px-8 bg-mygreen'>Sign up</button>
                </div>
            </div>
        </nav>
            




    );
};

export default Navbar;