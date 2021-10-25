import { useDispatch, useSelector } from 'react-redux';
import './FilterList.scss'
import { setFilter } from '../../../../redux/actions/filters';

const FilterList = (props) => {
    const categoryProduct = props.categoryProduct
    const dispatch = useDispatch()

    const filterIndex = useSelector(state => state.filters.filterIndex[categoryProduct])
    const filterElements = useSelector(state => state.filters.filterElements[categoryProduct])

    const onClickFilter = (i) => {
        dispatch(setFilter(i, categoryProduct))
    }

    return (
        <ul className="filter-list">
            <li className={`filter-list__button ${filterIndex === null ? 'filter-list__button_active' : ''}`}
                onClick={() => onClickFilter(null)}>Все
            </li>
            {
                filterElements && filterElements.map((item, i) => (
                    <li
                        className={`filter-list__button  ${filterIndex === i ? 'filter-list__button_active' : ''}`}
                        key={`${item}_${i}`}
                        onClick={() => onClickFilter(i)}>{item}
                    </li>
                ))
            }
        </ul>
    )
}

export default FilterList