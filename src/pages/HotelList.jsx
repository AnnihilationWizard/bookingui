import React, { useState } from 'react'
import SearchItem from '../components/SearchItem'
import Navbar from '../components/Navbar'
import "./hotelsList.scss"
import { DateRange } from 'react-date-range'
import { format } from 'date-fns'
import * as locales from 'react-date-range/dist/locale';
import { useLocation } from 'react-router-dom'

const HotelList = () => {
    const [openCalendar, setOpenCalendar] = useState(false);
    const [destination, setDestination] = useState("");

    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }
    ]);

    const [conditions, setConditions] = useState(
        {
            adult: 1,
            children: 0,
            room: 1
        }
    );

    return (
        <>
            <div>
                <Navbar />
                <div className='listContainer'>
                    <div className='listWrapper'>
                        <div className='listSearch'>
                            <div className='searchTitle'>
                                搜尋
                            </div>
                            <div className='listItem'>
                                <label>目的地 / 住宿名稱 : </label>
                                <input type="text" className="searchInput" placeholder={destination === "" ? '要去哪裡?' : destination} onChange={(e) => setDestination(e.target.value)} />
                            </div>
                            <div className='listItem'>
                                <label>入住 / 退房日期 {format(dates[0].startDate, "MM/dd/yyyy")} - {format(dates[0].endDate, "MM/dd/yyyy")}</label>
                                <span className='dates'>
                                    <div className="searchInput" onClick={() => setOpenCalendar(!openCalendar)} >入住時間 - 退房時間</div>
                                    {openCalendar && <DateRange
                                        editableDateInputs={true}
                                        onChange={item => setDates([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        className="calendar"
                                        ranges={dates}
                                        minDate={new Date()}
                                    //locale={locales['zhTW']}
                                    />}
                                </span>
                            </div>
                            <div className='listItem'>
                                <div className='listItemLimitPrice'>
                                    <span className='limitTitle'>每晚最低價格</span>
                                    <input type="text" className='searchInput' />
                                </div>
                                <div className='listItemLimitPrice'>
                                    <span className='limitTitle'>每晚最高價格</span>
                                    <input type="text" className='searchInput' />
                                </div>
                                <div className='listItmConditions'>
                                    <span className='SearchText'>3位成人，2位小孩，1間房間</span>
                                </div>
                            </div>
                            <div className='listItem'>
                                <button className='searchbtn'>搜尋</button>
                            </div>
                        </div>
                        <div className='listResult'>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HotelList