import React, { useState } from 'react'
import './MidNavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const MidNavBar = () => {
    const [active, setActive] = useState(1)
    const handleState = () => {
        if(active===1){
            setActive(0)
        }
        else{
            setActive(1)
        }
    }
  return (
    <div className='midNavBar'>
        <div className='textDiv'>
            <p className='textP'>مبيعات التذاكر</p>
        </div>
        <div className='searchBar'>
            <svg className='searchIcon' width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.91665 14.5C4.14998 14.5 1.08331 11.4333 1.08331 7.66668C1.08331 3.90001 4.14998 0.833344 7.91665 0.833344C11.6833 0.833344 14.75 3.90001 14.75 7.66668C14.75 11.4333 11.6833 14.5 7.91665 14.5ZM7.91665 1.83334C4.69665 1.83334 2.08331 4.45334 2.08331 7.66668C2.08331 10.88 4.69665 13.5 7.91665 13.5C11.1366 13.5 13.75 10.88 13.75 7.66668C13.75 4.45334 11.1366 1.83334 7.91665 1.83334Z" fill="#292D32"/>
                <path d="M14.9167 15.1667C14.79 15.1667 14.6634 15.12 14.5634 15.02L13.23 13.6867C13.0367 13.4934 13.0367 13.1734 13.23 12.98C13.4234 12.7867 13.7434 12.7867 13.9367 12.98L15.27 14.3134C15.4634 14.5067 15.4634 14.8267 15.27 15.02C15.17 15.12 15.0434 15.1667 14.9167 15.1667Z" fill="#292D32"/>
            </svg>
            <input className='searchP form-control'style={{borderColor:'transparent'}} placeholder={'بحث عن ...'}/>
        </div>
        <div className='adjust'>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="36" rx="7.5" fill="white"/>
                <rect x="0.375" y="0.375" width="35.25" height="35.25" rx="7.125"/>
                <path d="M24.6666 14.8333H20.6666C20.3933 14.8333 20.1666 14.6067 20.1666 14.3333C20.1666 14.06 20.3933 13.8333 20.6666 13.8333H24.6666C24.94 13.8333 25.1666 14.06 25.1666 14.3333C25.1666 14.6067 24.94 14.8333 24.6666 14.8333Z" fill="#8B8B8B"/>
                <path d="M14 14.8333H11.3333C11.06 14.8333 10.8333 14.6067 10.8333 14.3333C10.8333 14.06 11.06 13.8333 11.3333 13.8333H14C14.2733 13.8333 14.5 14.06 14.5 14.3333C14.5 14.6067 14.2733 14.8333 14 14.8333Z" fill="#8B8B8B"/>
                <path d="M16.6666 17.1667C15.1066 17.1667 13.8333 15.8933 13.8333 14.3333C13.8333 12.7733 15.1066 11.5 16.6666 11.5C18.2266 11.5 19.5 12.7733 19.5 14.3333C19.5 15.8933 18.2266 17.1667 16.6666 17.1667ZM16.6666 12.5C15.6533 12.5 14.8333 13.32 14.8333 14.3333C14.8333 15.3467 15.6533 16.1667 16.6666 16.1667C17.68 16.1667 18.5 15.3467 18.5 14.3333C18.5 13.32 17.68 12.5 16.6666 12.5Z" fill="#8B8B8B"/>
                <path d="M24.6667 22.1667H22C21.7267 22.1667 21.5 21.94 21.5 21.6667C21.5 21.3933 21.7267 21.1667 22 21.1667H24.6667C24.94 21.1667 25.1667 21.3933 25.1667 21.6667C25.1667 21.94 24.94 22.1667 24.6667 22.1667Z" fill="#8B8B8B"/>
                <path d="M15.3333 22.1667H11.3333C11.06 22.1667 10.8333 21.94 10.8333 21.6667C10.8333 21.3933 11.06 21.1667 11.3333 21.1667H15.3333C15.6066 21.1667 15.8333 21.3933 15.8333 21.6667C15.8333 21.94 15.6066 22.1667 15.3333 22.1667Z" fill="#8B8B8B"/>
                <path d="M19.3333 24.5C17.7733 24.5 16.5 23.2266 16.5 21.6666C16.5 20.1066 17.7733 18.8333 19.3333 18.8333C20.8933 18.8333 22.1667 20.1066 22.1667 21.6666C22.1667 23.2266 20.8933 24.5 19.3333 24.5ZM19.3333 19.8333C18.32 19.8333 17.5 20.6533 17.5 21.6666C17.5 22.68 18.32 23.5 19.3333 23.5C20.3467 23.5 21.1667 22.68 21.1667 21.6666C21.1667 20.6533 20.3467 19.8333 19.3333 19.8333Z" fill="#8B8B8B"/>
            </svg>
        </div>
        <div className='upDown'>
            <svg width="36" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.03316 4.97998C9.15983 4.97998 9.28651 4.93333 9.38651 4.83333L11.5132 2.70667L13.6399 4.83333C13.8332 5.02667 14.1532 5.02667 14.3465 4.83333C14.5398 4.64 14.5398 4.32 14.3465 4.12667L11.8665 1.64665C11.7732 1.55331 11.6465 1.5 11.5132 1.5C11.3798 1.5 11.2532 1.55331 11.1598 1.64665L8.67985 4.12667C8.48652 4.32 8.48652 4.64 8.67985 4.83333C8.77985 4.93333 8.9065 4.97998 9.03316 4.97998Z" fill="#8B8B8B"/>
                <path d="M11.5133 14.5C11.7866 14.5 12.0133 14.2733 12.0133 14V2C12.0133 1.72667 11.7866 1.5 11.5133 1.5C11.24 1.5 11.0133 1.72667 11.0133 2V14C11.0133 14.2733 11.24 14.5 11.5133 14.5Z" fill="#8B8B8B"/>
                <path d="M4.47998 14.5C4.61331 14.5 4.74 14.4467 4.83333 14.3533L7.31331 11.8733C7.50665 11.68 7.50665 11.36 7.31331 11.1666C7.11998 10.9733 6.79998 10.9733 6.60665 11.1666L4.47998 13.2933L2.35335 11.1666C2.16002 10.9733 1.83998 10.9733 1.64665 11.1666C1.45331 11.36 1.45331 11.68 1.64665 11.8733L4.12667 14.3533C4.22 14.4467 4.35331 14.5 4.47998 14.5Z" fill="#8B8B8B"/>
                <path d="M4.48669 14.5C4.76003 14.5 4.98669 14.2733 4.98669 14V2C4.98669 1.72667 4.76003 1.5 4.48669 1.5C4.21336 1.5 3.98669 1.72667 3.98669 2V14C3.98669 14.2733 4.20669 14.5 4.48669 14.5Z" fill="#8B8B8B"/>
            </svg>
        </div>
        <div className='switchDiv'>
            <label className='switch'>
                <input type='checkbox' />
                <span className='slider' onClick={handleState}></span>
            </label>
            {active===1 &&<p className='switchP'>مفعلة</p>}
            {active===0 &&<p className='switchP'>غير مفعلة</p>}
        </div>
        <div className='ReserveDiv'>
            <p className='ReserveP'>حجز تذكره جديده</p>
        </div>
    </div>
  )
}

export default MidNavBar