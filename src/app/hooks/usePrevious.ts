import { useEffect, useRef } from "react";

/**
 * 
 * @see https://blog.logrocket.com/accessing-previous-props-state-react-hooks/#what-previous-state
 */
function usePrevious<T>(value: T) {
    const ref = useRef<undefined | T>();
    useEffect(() => {
        ref.current = value; //assign the value of ref to the argument
    }, [value]); //this code will run when the value of 'value' changes
    return ref.current; //in the end, return the current ref value.
}
export default usePrevious;