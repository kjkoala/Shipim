import React from 'react';
import { useContext, useReducer, createContext } from "react";

import db from '../db.json';

interface Item {
    order_id: number,
    agenda: string,
    time: string,
    marketplace: string,
    success: boolean,
    status: string,
    pay: boolean,
    city: string,
    district?: string,
    amount: number,
}

type Actions = {
    type: 'Search',
    payload: string
} | {type: 'Clear'}

const Context = createContext([] as any)


function reducer (_state: Item[], action: Actions) {

    switch(action.type) {
        case 'Search': {
            return db.filter(item => Object.values(item).find(value => String(value).toLowerCase().includes(action.payload.toLowerCase())))
        }

        case 'Clear': {
            return db;
        }

        default: {
            return db;
        }

    }
}

export const useStore = () => useContext<[Item[], React.Dispatch<Actions>]>(Context);

export const Provider = ({ children }: { children: React.ReactNode }) => {

    const store = useReducer(reducer, db);

    return (<Context.Provider value={store}>
            {children}
        </Context.Provider>)
}
