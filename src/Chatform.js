import React from 'react';

function Chatform({text, handleChange, handleSend}) {
    return (
        <div>
            <form 
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSend();
                }}>
                <input 
                    value={text}
                    onChange={handleChange}
                />
                <button>Send</button>
            </form>
        </div>
    );
}

export default Chatform;