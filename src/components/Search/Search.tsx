import React from 'react';
import { useStore } from '../../store/Store';
import './Search.scss';

export const Search = () => {
    const [,dispatch] = useStore();

    const inputHandler = (e: React.ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        if(target.value.length > 0) {
            dispatch({ type: 'Search', payload: target.value })
        } else {
            dispatch({ type: 'Clear' })
        }
    }

    return (
    <input 
        placeholder="Найти товар"
        className="search"
        onChange={inputHandler}
    />)
}