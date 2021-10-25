import FilterList from '../FilterList/FilterList';
import Select from '../Select/Select';
import './MenuBlock.scss'
import MenuCards from '../MenuCards/MenuCards';

const MenuBlock = (props) => {

    return (
        <div className={'menu-section__items'}>
            <div className="filter">
                <FilterList categoryProduct={props.categoryProduct} />
                <Select />
            </div>
            <MenuCards {...props} />
        </div>
    )
}

export default MenuBlock