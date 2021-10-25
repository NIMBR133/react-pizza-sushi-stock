import { useEffect } from 'react';

import './Humburger.scss'

const Humburger = (props) => {

    useEffect(() => {
        if (props.activeMenu) {
            document.body.addEventListener('click', clickOutside)
            return () => document.body.removeEventListener('click', clickOutside)
        }
    })

    const clickOutside = (e) => {
        props.onClickHumburger()
    }

    return (
        <div className={`humburger ${props.activeMenu && 'humburger_active'}`}
            onClick={props.onClickHumburger}>
                <span></span>
                <span></span>
                <span></span>
        </div>
    )
}

export default Humburger