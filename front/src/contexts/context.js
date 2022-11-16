import {
    useState, createContext
} from 'react';

export const Context = createContext({});

export default function ContextProvider({ children }) {

    const [list, setList] = useState([]);
    const [listUpdate, setListUpdate] = useState(true);

    return (
        <Context.Provider
            value={{
                list, 
                setList,
                listUpdate, 
                setListUpdate,
            }}
        >
            {children}
        </Context.Provider>
    );
};
