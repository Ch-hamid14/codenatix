import React from 'react'
import '../styles/footer.scss';
const Footer = () => {
  return (
    <footer id='contact'>
      <div>
        <h3>All<span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />Rights are reserved by CodeNatix.com</h3>
      </div>
    </footer>
  )
}

export default Footer;