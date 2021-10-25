import { useState } from 'react'

import MenuBlock from './MenuBlock/MenuBlock';
import MenuCategories from './MenuCategories/MenuCategories';


const MenuSection = () => {
    const [categoryActive, setCategoryActive] = useState(0)

    const onChangeCategory = (i) => {
        setCategoryActive(i)
    }

    return (
        <div className="menu-section">
            <h2 className="title">Меню</h2>
            <MenuCategories
                menuCategoriesItems={menuCategoriesItems}
                onChangeCategory={onChangeCategory}
                categoryActive={categoryActive} />
            {
                categoryActive === 0 &&
                <MenuBlock categoryProduct='pizza'
                    sizeProduct={pizzaSize} />
            }
            {
                categoryActive === 1 &&
                <MenuBlock categoryProduct='rolls'
                    sizeProduct={rollsSize} />
            }
            {
                categoryActive === 2 &&
                <MenuBlock categoryProduct='burgers'
                    sizeProduct={burgersSize} />
            }
            {
                categoryActive === 3 &&
                <MenuBlock categoryProduct='salads'
                    sizeProduct={saladsSize} />
            }
        </div>

    )
}

const menuCategoriesItems = ['Пицца', 'Роллы', 'Гамбургеры', 'Салаты']
const pizzaSize = ['26 см', '32 см', '40 см']
const rollsSize = []
const burgersSize = ['Маленький', 'Большой']
const saladsSize= []

export default MenuSection