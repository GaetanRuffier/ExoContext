import { useMessages } from "../contexts/MessageContext";

const RenderedMessages = () => {
    // Accès au contexte
    const { state, dispatch } = useMessages();

    return (
        <div>
            {state.messages.length === 0 && <p>Aucun texte à afficher.</p>}

            {state.messages.map((msg, index) => (
                <div key={index} style={{ marginBottom: "10px" }}>
                    <p
                        style={{
                            color: msg.color,
                            fontSize: `${msg.fontSize}px`,
                            margin: 0,
                        }}
                    >
                        {msg.text}
                    </p>
                    <button onClick={() => dispatch({ type: "REMOVE_MESSAGE", payload: index })}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default RenderedMessages;
