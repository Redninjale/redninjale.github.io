import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='FooterContainer' id="Footer">
        <div className='FooterGrid'>
            <h1>Contact Me!</h1>
            {/* <form>
              <div action="https://formsubmit.co/le.ph.cameron@gmail.com" method="POST">
                <label for="firstName" className="form-label">First Name</label>
                <input type="text" className="form-control" name="First" id="firstName" required/>
              </div>
              <div>
                <label for="lastName" className="form-label">Last Name</label>
                <input type="text" className="form-control" name="Last" id="lastName" required/>
              </div>
              <div>
                <label for="lastName" className="form-label">Email</label>
                <input type="text" className="form-control" name="Email" id="email" required/>
              </div>
              <div>
                <label for="lastName" className="form-label">Phone Number</label>
                <input type="text" className="form-control" name="Phone" id="phone" required/>
              </div>
              <div>
                <label for="lastName" className="form-label">Comments, questions?</label>
                <input type="text" className="form-control" name="Comments" id="comments" required/>
              </div>
              <div>
                <button type="submit" className="submit">Submit</button>
              </div>
            </form> */}
            <p>(281)-301-8588 | le.ph.cameron@gmail.com</p>
            <p>Github: <a href="https://github.com/Redninjale" target="_blank">Redninjale</a> | Linkedin: <a href="https://www.linkedin.com/in/cameron-le-09430a24a/" target="_blank">Cameron Le</a></p>
        </div>
    </div>
  )
}

export default Footer