import React from 'react';

const InputField = ({title, updateText, handleAction}) => {
    return (
        <div className="input">
            <form onSubmit={e => e.preventDefault()}>
                <input type="text" placeholder="Add ToDo..." value={title} onChange={(e) => updateText(e.target.value)}/>
                <button
                    onClick={handleAction}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default InputField;