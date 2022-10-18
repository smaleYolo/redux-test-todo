import React from 'react';

const InputField = ({text, handleInput, handleSubmit}) => {
    return (
        <div className="input">
            <form onSubmit={e => e.preventDefault()}>
                <input type="text" placeholder="Add ToDo..." value={text} onChange={(e) => handleInput(e.target.value)}/>
                <button
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default InputField;