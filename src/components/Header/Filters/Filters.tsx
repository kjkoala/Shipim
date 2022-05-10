import { useState } from "react"
import { Button } from "../../Button/Button"

const buttons = [{
    text: 'Все',
    notif: 14,
}, {
    text: 'Согласование',
    notif: 6,
}, {
    text: 'Комплектация',
    notif: 0,
}, {
    text: 'Доставка',
    notif: 0,
}, {
    text: 'Возраты',
    notif: 0,
}, {
    text: 'Отмена',
    notif: 0,
}]

export const Filters = () => {
    const [select, setSelect] = useState('Все');

    return (<div className="header__item header__button">
        {buttons.map((item) => <Button key={item.text} onClick={setSelect} select={select === item.text} {...item} />)}
</div>)
}