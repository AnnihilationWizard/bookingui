import React from 'react'
import './header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendar, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className='header'>
            <div className='headerContainer'>
                <h1 className='headerTitle'>
                    尋找下趟住宿
                </h1>
                <p className='headerDes'>
                    搜尋飯店、民宿及其他住宿類型的優惠...
                    <br />
                    Booking.com clone挑戰(為SamKo Demo使用不為盈利)
                </p>
                <div className='headerSearchBar'>
                    <div className='SearchBarItem'>
                        <FontAwesomeIcon icon={faBed} />
                        <input type="Search" placeholder='你要去哪裡?' className='SearchInput' />
                    </div>
                    <div className='SearchBarItem'>
                        <FontAwesomeIcon icon={faCalendar} />
                        <span className='SearchText'>09/05/2024-09/05/2024</span>
                    </div>
                    <div className='SearchBarItem'>
                        <FontAwesomeIcon icon={faPeopleGroup} />
                        <span className='SearchText'>3位成人，2位小孩，1間房</span>
                    </div>
                    <button className='SearchBarBtn'>搜尋</button>
                </div>
            </div>
        </div>
    )
}

export default Header