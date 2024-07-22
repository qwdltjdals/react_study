import React, { useState } from 'react';

function useinput() {
    cpnst [ value, setValue] = useState("");

    const onChange = (e) => {
        setValue(e.target.value);
    }
    return { value, setValue, onChange };
}

export default useinput;