export const ManageCell = () => {
    return (<div className="cell">
    <div className="section">
        <input className="checkbox" type="checkbox" checked disabled />
    </div>
    <div className="section section_grow">
        <div className="section_block">
            <div className="manage">Заказ</div>
        </div>
        <div className="section_block">
            <div className="manage">Дата</div>
        </div>
        <div className="section_block">
            <div className="manage">Площадка</div>
        </div>
        <div className="section_block">
            <div className="manage">Статус</div>
        </div>
        <div className="section_block">
            <div className="manage">Оплата</div>
        </div>
        <div className="section_block">
            <div className="manage">Город</div>
        </div>
        <div className="manage">Сумма</div>
    </div>
</div>)
}