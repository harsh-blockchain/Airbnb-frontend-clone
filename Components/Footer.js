import React from 'react'

const Footer = () => {
    return (
        <div className='grid grid-cols-1 bg-gray-100 py-14 md:grid-cols-4 px-32 gap-y-10 text-center '>
            <div className='space-y-4 text-gray-800'>
                <h5 className=' text-bold uppercase text-xl text-w-[5px]'>About</h5>
                <p>How Airbnb Works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>
            <div className='space-y-4 text-gray-800'>
                <h5 className=' text-bold uppercase text-xl text-w-[5px]'>Community</h5>
                <p>Accessibility</p>
                <p>Feasibility</p>
                <p>Flexibility</p>
                <p>Referrals Plus</p>
                <p>Luxury</p>
            </div>
            <div className='space-y-4 text-gray-800'>
                <h5 className=' text-bold uppercase text-xl text-w-[5px]'>Host</h5>
                <p>Harsh</p>
                <p>Presents</p>
                <p>Airbnb</p>
                <p>Clone</p>
                <p>Amazing</p>
            </div>
            <div className='space-y-4 text-gray-800'>
                <h5 className=' text-bold uppercase text-xl text-w-[5px]'>Support</h5>
                <p>Help Center</p>
                <p>Say Hi Youtube</p>
                <p>Trust & Safty</p>
                <p>Easter Eggs</p>
                <p>For the Win</p>
            </div>

        </div>
    )
}

export default Footer