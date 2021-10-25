import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import './Select.scss'
import { setSelect } from './../../../../redux/actions/filters';

const Select = () => {
    const dispatch = useDispatch()
    const filterSelect = useSelector(state => state.filters.filterSelect)
    const activeFilter = useSelector(state => state.filters.sortBy)

    const [selectDrop, setSelectDrop] = useState(false)
    const ref = useRef()
    
    const toggleSelect = () => {
        setSelectDrop(!selectDrop)
    }

    const onClickFilter = (i) => {
        if (activeFilter.id !== i) {
            toggleSelect()
        }
        dispatch(setSelect(i))
    }

    useEffect(() => {
        document.body.addEventListener('click', clickOutside)
        return () => document.body.removeEventListener('click', clickOutside)
    })

    const clickOutside = (e) => {
        if (!e.path.includes(ref.current)) {
            setSelectDrop(false)
        }
    }
    return (
        <div ref={ref} className="select">
            <div className={`select__value ${selectDrop && "select__value_active"}`} onClick={toggleSelect}>
                <div>{activeFilter.name}</div>
                <svg width="10" height="6" viewBox="0 0 10 6"className="select__value-arrow">
                    <path d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z" fill="#2C2C2C"></path>
                </svg>
            </div>
            {
            selectDrop &&
                <ul className="select__drop">
                    {
                        filterSelect.map((item, i) => (
                            <li 
                                key={`${item.type}_${i}`}
                                className={`select__drop-item ${activeFilter.id === i ? "select__drop-item_active" : ''}`}
                                onClick={() => onClickFilter(i)}>{item.name}
                            </li>
                        ))
                    }
                </ul>
            }
        </div>
    )
}

export default Select