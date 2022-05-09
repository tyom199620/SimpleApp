import * as React from 'react';

// import { AuthContext } from './';

const UserContext = React.createContext({});
const UserContextProvider = (props) => {
    // const { state: { user, userToken } } = React.useContext(AuthContext);
    const [state, dispatch] = React.useReducer((prevState, action) => {

    }, {

    });

    // React.useEffect(() => {
    //     console.log(user)
    // }, []);

    return (
        <UserContext.Provider
            value={{
                state,
                dispatch
            }}>
            {props.children}
        </UserContext.Provider>
    )
};

export { UserContext, UserContextProvider };