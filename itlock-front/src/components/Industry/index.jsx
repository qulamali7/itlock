import React from 'react'
import "./index.scss";
import IndustryCards from '../IndustryCards';
const Industry = () => {
  return (
    <>
    <section id='industry'>
        <div className='industry_container'>
            <div className='industry_content'>
                <p>INDUSTRY WE OFFER</p>
                <IndustryCards/>
            </div>
        </div>
    </section>
    </>
  )
}

export default Industry