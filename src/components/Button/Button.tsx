import { FC } from 'react'

import cn from 'classnames';

import './Button.scss'

interface Props {
    text: string,
    notif: string | number,
    select: boolean,
    onClick: React.Dispatch<React.SetStateAction<string>>
}

export const Button: FC<Props> = ({ text, notif, onClick, select }) => {
    return (<button type="button" className={cn('button', select && 'select')} onClick={() => onClick(text)}>
    {text}
    <span className="notif">{notif}</span>
</button>)
}