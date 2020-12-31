import React from 'react';

const ApiContext = React.createContext({
    folders: [],
    notes: [],
    onDeleteNote: () => { },
    updateNoteState: () => { },
    addFolder: () => { },
    addNote: () => { }
});

export default ApiContext;