import React from 'react'

function Chatform({text, handleChange, handleSend}) {
    return (
        <div>
            <form onSubmit={handleSend}>
                <input 
                    value={text}
                    onChange={handleChange}
                />
                <button 
                    onClick={handleSend}
                >Send</button>
            </form>
        </div>
    );
}

export default Chatform;