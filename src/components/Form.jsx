import React, { useState } from "react";
import { useMessages } from "../contexts/MessageContext";

const Form = () => {
    // Accès au contexte
    const { dispatch } = useMessages();

    // État local pour gérer les champs du formulaire
    const [text, setText] = useState("");
    const [color, setColor] = useState("palevioletred");
    const [fontSize, setFontSize] = useState(15);

    // Gestionnaire de submit du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();

        if (text.trim() === "") {
            alert("Veuillez entrer un texte.");
            return;
        }

        const newMessage = {
            text,
            color,
            fontSize,
        };

        // Envoi de l'action ADD_TEXT
        dispatch({ type: "ADD_MESSAGE", payload: newMessage });
        setText("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Saisir le texte :
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </label>

            <label>
                Sélectionnez un rendu :
                <select value={color} onChange={(e) => setColor(e.target.value)}>
                    <option value="palevioletred">PaleVioletRed</option>
                    <option value="tomato">Tomato</option>
                </select>
            </label>

            <label>
                Taille du texte :
                <select value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))}>
                    {[15, 16, 17, 18, 19, 20].map((size) => (
                        <option key={size} value={size}>
                            {size}
                        </option>
                    ))}
                </select>
            </label>

            <button type="submit">Valider</button>
        </form>
    );
};

export default Form;
