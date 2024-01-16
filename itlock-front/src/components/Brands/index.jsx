import React from 'react'
import "./index.scss";
import BrandsCards from '../BrandsCards';
const Brands = () => {
  return (
    <>
    <section id='brands'>
        <div className='brands_container'>
            <div className='brands_content'>
                <div className='brands_title'>
                    <p>OUR CASE STUDY</p>
                    <h2>We work with global brands</h2>
                </div>
                <BrandsCards/>
            </div>
        </div>
    </section>
    </>
  )
}

export default Brands