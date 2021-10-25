import './MenuCategories.scss'

const MenuCategories = (props) => {
    return (
        <ul className="menu-list">
            {
                props.menuCategoriesItems.map((item, i) => (
                    <li key={`${item}_${i}`}
                        className={`menu-list__item ${i === props.categoryActive ? 'menu-list__item_active' : ''}`}
                        onClick={() => props.onChangeCategory(i)}>{item}
                    </li>
                ))
            }
        </ul>
    )
}

export default MenuCategories