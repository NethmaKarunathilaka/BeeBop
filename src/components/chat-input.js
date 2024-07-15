//import react
import React from 'react';
import TextField from '@mui/material/TextField';

//const
const ChatInput = () => {
    return (
        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
        />
    );
}

//export
export default ChatInput;


