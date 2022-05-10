import { useStore } from "../../store/Store";
import cn from "classnames";


export const Cell = () => {
    const [store] = useStore()
    return (
        <>
        {store.map(({
        order_id,
        agenda,
        time,
        success,
        district,
        city,
        marketplace,
        status,
        pay,
        amount

    }) => (<div className="cell big" key={order_id}>
        <div className="section">
            <input className="checkbox" type="checkbox" />
        </div>
        <div className="section section_grow">
            <a href="#" className="number_order section_block">№{order_id}</a>
            <div className="date section_block">{agenda}<div className="time">{time}</div></div>
            <div className="marketplace section_block">{marketplace}</div>
            <div className={cn("status section_block", success ? "success" : "fail")}>{status}</div>
            <div className={cn("pay section_block", pay ? "success" : "fail")} />
            <div className="city section_block">{city} 
            {district && <div className="district">({district})</div>}
            </div>
            <div className="amount">{amount.toLocaleString()}</div>
        </div>
    </div>
    ))}
        </>
    )
}