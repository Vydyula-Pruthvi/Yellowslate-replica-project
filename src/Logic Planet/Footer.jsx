import React from 'react'
import'../App.css'

const Footer = () => {
  return (
    <>
    

    <div className='container-fluid'>
      <div className='row' id='office'>
        <div className='col-sm-2'>
          <img src='https://www.logicplanet.com/wp-content/uploads/2023/12/image-18.png' width={100} className='mt-2'/><br/><br/>
          <p className='text-light'>Connect : <i class="fa-brands fa-linkedin"></i> <i class="fa-brands fa-facebook"></i> <i class="fa-brands fa-instagram"></i> </p>
        </div>
        <div className='col-sm-10'>
<div className='row' >

        <h5 className='text-light fw-bolder mt-1'>Global Offices / Locations </h5>
        <div className='col-sm-3'>
          <h6 className='fw-bolder text-light'><i class="fa-solid fa-location-dot"></i> New Jersey Office</h6>
<p className='pp text-light fw-bolder'>4525 Route 27, Princeton, NJ 08540</p>
<p className='pp text-light fw-bolder'>Phone: 732-512-0009</p>
<p className='pp text-light fw-bolder'>Mail: info@logicplanet.com</p>

        </div>
        <div className='col-sm-3'>
   <h6 className='fw-bolder text-light'>  <i class="fa-solid fa-location-dot"></i>   Michigan Office</h6>
<p className='pp text-light fw-bolder'>250 Monroe NW, Suite 400, Grand Rapids, Michigan, 49503, United States of America</p>
<p className='pp text-light fw-bolder'>Phone: 616-717-5787</p>
<p className='pp text-light fw-bolder'>Mail: info@logicplanet.com</p>
</div>
<div className='col-sm-3'>

<h6  className='fw-bolder text-light'><i class="fa-solid fa-location-dot"></i> Hyderabad, India Office</h6>
<p className='pp text-light fw-bolder' >4th Floor, Unit # D 1, D No : 1-89/A/8/C/2, Vittal Rao Nagar, Madhapur, Hyderabad-500081 Telangana State.</p>
<p className='pp text-light fw-bolder'>Phone: 040-49901212</p>
<p className='pp text-light fw-bolder'>Mail: info@logicplanet.com</p>
</div>
<div className='col-sm-3'>

<h6  className='fw-bolder text-light'><i class="fa-solid fa-location-dot"></i> Gurugram, India Office</h6>
<p className='pp text-light fw-bolder'>Unit 002 Ground Floor, Tower C, Unitech Cyber Park, Sector 39, Gurugram, Haryana -122003</p>
<p className='pp text-light fw-bolder'>Phone: 0124-6831814</p>
<p className='pp text-light fw-bolder'>Mail: info@logicplanet.com</p>
</div>
</div></div><hr/>
   

</div></div>
    
    <div className='container-fluid'>
     <div className='row' id='office'>
<div className='col-sm-6'>
       <span className='pp text-light'> © Copyright 2023 by Logic Planet</span></div>
<div className='col-sm-6'>

<p  className='pp text-light float-end p-1'>Sitemap</p> 
<p  className='pp text-light float-end p-1'>Terms & Conditions</p>
<p  className='pp text-light float-end p-1'>Privacy Policy</p>
  </div></div></div>
    </>
     )
}

export default Footer