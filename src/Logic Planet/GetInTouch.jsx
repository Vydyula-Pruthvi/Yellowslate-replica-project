import React from 'react'
import '../App.css'

const GetInTouch = () => {
  return (
    <>
    
    
<div className='container-fluid'>
  <div className='row' id='bi'>
    
<h2 className='p-5'>Get In Touch</h2>


    </div>
    </div><br/>
<div className='container-fluid'>
  <div className='row'>
<div className='col-sm-6'>
  <div className='row' id='textarea'>
  <h3>Curious About Opportunities?
  Let's Discuss Your Path at Logic Planet – Apply Today!</h3>
  <div className='col-sm-6'>
                  <input class="form-control" type="search" placeholder="First Name*" aria-label="Search"/><br/>
                  <input class="form-control me-2" type="search" placeholder="Email" aria-label="Search"/><br/>
</div>  <div className='col-sm-6'>
                  <input class="form-control me-2" type="search" placeholder="Last Name" aria-label="Search"/><br/>
                  <input class="form-control me-2" type="search" placeholder="Phone" aria-label="Search"/><br/>
                  </div>       <div className='select'>           
                  <select className='select w-100'>
                    <option>Select Preference</option>
                    <option>Graduate</option>
                    <option>Employers</option>
                  </select></div>

                  
                  <textarea placeholder='Message*' className='txt'></textarea><br/>
                  <button type="button" class="btn  m-2 text-center fw-bolder" id='btnn' >Submit</button>
      
</div></div>
<div className='col-sm-6' id='fs'>
        
          <h6 className='fw-bolder dark'><i class="fa-solid fa-location-dot"></i> New Jersey Office</h6>
<p className='pp text-dark fw-bolder'>4525 Route 27, Princeton, NJ 08540</p>
<p className='pp text-dark fw-bolder'>Phone: 732-512-0009</p>
<p className='pp text-dark fw-bolder'>Mail: info@logicplanet.com</p>

   <h6 className='fw-bolder text-dark'>  <i class="fa-solid fa-location-dot"></i>   Michigan Office</h6>
<p className='pp text-dark fw-bolder'>250 Monroe NW, Suite 400, Grand Rapids, Michigan, 49503, United States of America</p>
<p className='pp text-dark fw-bolder'>Phone: 616-717-5787</p>
<p className='pp text-dark fw-bolder'>Mail: info@logicplanet.com</p>

<h6  className='fw-bolder text-dark'><i class="fa-solid fa-location-dot"></i> Hyderabad, India Office</h6>
<p className='pp text-dark fw-bolder' >4th Floor, Unit # D 1, D No : 1-89/A/8/C/2, Vittal Rao Nagar, Madhapur, Hyderabad-500081 Telangana State.</p>
<p className='pp text-dark fw-bolder'>Phone: 040-49901212</p>
<p className='pp text-dark fw-bolder'>Mail: info@logicplanet.com</p>

<h6  className='fw-bolder text-dark'><i class="fa-solid fa-location-dot"></i> Gurugram, India Office</h6>
<p className='pp text-dark fw-bolder'>Unit 002 Ground Floor, Tower C, Unitech Cyber Park, Sector 39, Gurugram, Haryana -122003</p>
<p className='pp text-dark fw-bolder'>Phone: 0124-6831814</p>
<p className='pp text-dark fw-bolder'>Mail: info@logicplanet.com</p>
    
    </div></div></div>
    </>
      )
}

export default GetInTouch