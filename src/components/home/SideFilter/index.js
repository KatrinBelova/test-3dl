import React, { useState } from 'react';
import SortSelect from '../SortSelect';
import { useDispatch } from 'react-redux';
import { getProducts, getCoats, getSneakers, getShirts, getPants, resetFilter } from '../../../redux/actions/productsActions';

const categoties = [ "Все", "плащи", "кроссовки", "рубашки", "брюки" ];

const SideFilter = () => {
    const [activeCategory, setActiveCategory] = useState(0);
    const dispatch = useDispatch();

    const getByCategory = (category, idx) => {
        setActiveCategory(idx)
        
        switch (category) {
            case categoties[0]:
                dispatch( getProducts() )
                dispatch( resetFilter() )
                break;
			case categoties[1]: 
				dispatch( getProducts() )
				dispatch( resetFilter() )
                dispatch( getCoats() )
                break;
			case categoties[2]: 
				dispatch( getProducts() )
				dispatch( resetFilter() )
                dispatch( getSneakers() )
                break;
			case categoties[3]: 
				dispatch( getProducts() )
				dispatch( resetFilter() )
                dispatch( getShirts() )
                break;
			case categoties[4]: 
				dispatch( getProducts() )
				dispatch( resetFilter() )
                dispatch( getPants() )
                break;
            default: break;
        }

    }

    return (
        <aside className="side-filter">
            <ul className="side-filter__list">
                {categoties.map( (category, index) => {
                    return <li 
                        key={index} 
                        className={`category ${activeCategory === index ? 'category-active' : ''}`}
                        onClick={() => getByCategory( category, index )}
                        >
                            {category}
                        </li>
                })}
            </ul>
            <SortSelect/>
        </aside>
    );
}

export default SideFilter;
