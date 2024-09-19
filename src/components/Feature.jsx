import React from 'react'
import Categories from '../subcomponents/Categories'
import { CategoriesCities, CategoriesType } from '../data'

const Feature = () => {
    return (
        <div className='feature'>
            <div className='listTitle'>
                <h2>依住宿類型瀏覽</h2>
            </div>
            <div className='listItems'>
                <Categories dataArray={CategoriesType} />
            </div>
            <div className='listItems'>
                <Categories dataArray={CategoriesCities} />
            </div>
        </div>
    )
}

export default Feature