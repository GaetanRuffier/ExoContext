import React, { createContext, useReducer, useContext } from "react";

// État initial pour le contexte
const initialState = {
    messages: [], // Liste des textes
};

// Reducer pour gérer les actions
const reducer = (state, action) => {
    switch (action.type) {
        // Ajout d'un nouveau texte
        case "ADD_MESSAGE":
            return {
                ...state,
                messages: [...state.messages, action.payload],
            };

        // Suppression d'un texte par index 
        case "REMOVE_MESSAGE":
            return {
                ...state,
                messages: state.messages.filter((msg, index) => index !== action.payload),
            };
        default:
            return state;
    }
};

// Context creation
const MessageContext = createContext();

// Context provider
export const MessageProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <MessageContext.Provider value={{ state, dispatch }}>
            {children}
        </MessageContext.Provider>
    );
};

// Custom hook to use the context
export const useMessages = () => {
    return useContext(MessageContext);
};
