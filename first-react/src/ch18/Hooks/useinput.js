import { useState } from "react";

export function useInput( defaltValue, length ) { //hook 함수는 앞에 use가 붙음
    const [value, setValue] = useState(defaltValue);

    const onChange = (e) => {
        if (e.target.value.length < length + 1) {
            setValue(e.target.value)
        }
    }
    return {
        "value": value,
        "setValue": setValue,
        "onChange": onChange
    }
}