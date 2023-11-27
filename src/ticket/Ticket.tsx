import React from 'react'
import './Ticket.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash} from '@fortawesome/free-solid-svg-icons'


const Ticket = () => {
  return (
    <div className='ticketBox'>
      <div style={{display: 'flex'}}>
        <div style={{display: 'flex', margin: 30, width:'auto'}}>
          <FontAwesomeIcon icon={faTrash} size="xl" style={{color: "#ffffff",}} />
        </div>
        <div className='title'>
          <p className='titleText'>عرض التذكرة الخاصة بالفيلم</p>
          <div style={{backgroundColor: 'white', borderRadius: '15px', alignItems:'center', display: 'flex'}}>
            <svg style={{margin:'0px 30px'}} width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.11467 14.1373H2.84083C1.6228 14.1373 0.631897 13.1464 0.631897 11.9283V4.44558C0.631897 3.22754 1.6228 2.23664 2.84083 2.23664H8.11467C9.3327 2.23664 10.3236 3.22754 10.3236 4.44558V11.9283C10.3236 13.1464 9.3327 14.1373 8.11467 14.1373ZM2.84083 3.34111C2.23186 3.34111 1.73636 3.8366 1.73636 4.44558V11.9283C1.73636 12.5373 2.23186 13.0328 2.84083 13.0328H8.11467C8.72364 13.0328 9.21914 12.5373 9.21914 11.9283V4.44558C9.21914 3.8366 8.72364 3.34111 8.11467 3.34111H2.84083ZM12.5325 10.5478V2.20903C12.5325 0.990993 11.5416 9.15527e-05 10.3236 9.15527e-05H4.19381C3.88878 9.15527e-05 3.64157 0.247299 3.64157 0.552326C3.64157 0.857352 3.88878 1.10456 4.19381 1.10456H10.3236C10.9326 1.10456 11.4281 1.60005 11.4281 2.20903V10.5478C11.4281 10.8528 11.6753 11.1 11.9803 11.1C12.2853 11.1 12.5325 10.8528 12.5325 10.5478Z" fill="#8A74F9"/>
            </svg>
            <p style={{paddingRight: '20px'}}>www.tazkty.com/473847</p>
          </div>
          <p className='endHeader'>فعال حتي 15 يوليو 2023</p>
        </div>
      </div>
      <div className='ticketFooter'>
        <p>خصم 25%</p>
      </div>
    </div>
  )
}

export default Ticket