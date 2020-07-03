import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNew, getChip, getExpensive, getPopular, resetFilter } from '../../../redux/actions/productsActions';
import Select from 'react-select';

const options = [
    {value: "", label: "Сортировать"},
    {value: "expFirst", label: "От дорогих к дешевым"},
    {value: "chipFirst", label: "От дешевых к дорогим"},
    {value: "popular", label: "Популярные"},
    {value: "new", label: "Новые"},
]

const SortSelect = () => {
    const [sortValue, setSortValue] = useState(options[0]);
    const dispatch = useDispatch();
    const filtered = useSelector( state => state?.products?.filtered);

    
    useEffect(() => {
        if(!filtered) {
            setSortValue(options[0]);
        }
    }, [filtered, sortValue]);

    const handleChange = (selected) => {
        setSortValue(selected)
        
        if(options[0].value === "") {
            options[0] = {value: "all", label: "Все продукты"}
        }

        if(selected?.value === "all" || selected?.value === "") {
            dispatch( resetFilter() )
        } else {
            
            switch (selected?.value) {
                case options[1].value :
                    dispatch( getExpensive(selected?.value) );
                    break;
                case options[2].value :
                    dispatch( getChip(selected?.value) );
                    break;
                case options[3].value :
                    dispatch( getPopular(selected?.value) );
                    break;
                case options[4].value :
                    dispatch( getNew(selected?.value) );
                    break;
                default: break;
            }
        }
    }

    return (
        <div className="sort-select">
            <Select
                defaultValue={options[0]}
                className='react-select-container'
                classNamePrefix='react-select'
                value={sortValue}
                options={options} 
                onChange={selected => handleChange(selected)}
                />
        </div>
    );
}

export default SortSelect;
