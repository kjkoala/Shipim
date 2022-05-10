import { Cell } from './Cell';
import { ManageCell } from './ManageCell';
import './Table.scss';

export const Table = () => {
    return (<div className='wrapper'>
        <ManageCell />
        <Cell />
    </div>)
}