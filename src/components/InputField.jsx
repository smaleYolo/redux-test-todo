import React from 'react';

const InputField = ({text, handleInput, handleSubmit}) => {
    return (
        <div className="input">
            <div>
                <input type="text" placeholder="Add ToDo..." value={text} onChange={(e) => handleInput(e.target.value)}/>
                <button
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default InputField;