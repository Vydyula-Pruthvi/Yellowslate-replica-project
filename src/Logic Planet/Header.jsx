import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
        <>
        <div className='container'>
        <div className='row'>

            <div className='col-sm-2'>

      <Link to="/">

                <img src='https://www.logicplanet.com/wp-content/uploads/2023/12/image-32.png' className='lcl mt-2'/>
           </Link> </div>

<div className='col-sm-8'>

  <div class="bg">
      <nav class="navbar navbar-expand-md p-0">

         <button class="navbar-toggler my-2" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav" 
            aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
         </button>
       <div class="collapse navbar-collapse justify-content-center lh-lg" id="main_nav">
            <ul class="navbar-nav p-3 p-md-0">
               <li class="nav-item dropdown">
                 
                  
                  <Link class="nav-link fw-bolder" to="/Body" data-bs-toggle="/Body" >Solutions
                  </Link>
                 
                 <ul class="dropdown-menu">
                     <li><a class="dropdown-item" href="#">Workforce Augmentation</a></li>

                     <li><a class="dropdown-item" href="#">IT Services</a></li>
                     <li><a class="dropdown-item" href="#">Enterprise Solutions</a></li>
                     <li><a class="dropdown-item" href="#">AI Augmentation</a></li>
                  </ul>
               </li>
               <li class="nav-item dropdown">
               
               
                  <Link class="nav-link fw-bolder" to="/Industries" data-bs-toggle="/Industries">Industries
                 </Link>
               
                 <ul class="dropdown-menu">
                     <li><a class="dropdown-item" href="#">Information Technology</a></li>
                     <li><a class="dropdown-item" href="#">Telecommunications</a></li>
                     <li><a class="dropdown-item" href="#">Banking & Finance</a></li>
                     <li><a class="dropdown-item" href="#">Pharmaceuticals</a></li>
                     <li><a class="dropdown-item" href="#">Oil & Energy</a></li>

                     <li><a class="dropdown-item" href="#">Automotive</a></li>
                  </ul>
               </li>
               <li class="nav-item dropdown">
               <Link class="nav-link fw-bolder" to="/Staffing" data-bs-toggle="/Staffing">Staffing
               </Link>
                 <ul class="dropdown-menu">
                     <li><a class="dropdown-item" href="#">Candidates</a></li>
                     <li><a class="dropdown-item" href="#">Clients</a></li>
                  </ul>
               </li> 
                <li class="nav-item dropdown">
                <Link to="/Locations">
                <a class="nav-link fw-bolder" href="#">Locations</a></Link>
               </li>
            </ul>
         </div>
      </nav>
   </div>
<hr className='hr ' id='lin'/>
</div>

<div className='col-sm-2'>
<Link to="/GetInTouch">
   
<button type="button" class="btn btn-warning  mt-4" id='get'>Get In touch</button>
</Link></div>

</div></div>

  </>
  )
}

export default Header