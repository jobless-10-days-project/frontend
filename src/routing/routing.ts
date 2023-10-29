
let beforeStartCallback: ((target: string) => void | boolean | string | Promise<void | boolean | string>) = () => { };

/**
 * 
 * @param fn function that may return a string (or promise returning a string) if it want 
 * to route to different route instead or return false (or promise returning false) if 
 * it want to stop the route changing, otherwise true (or promise returning true).
 */
export const beforeRouteChange = (fn: (target: string) => void | boolean | string | Promise<void | boolean | string>) => beforeStartCallback = fn;

// export const removeRouteListener = (fn: (target: string) => void | boolean | string | Promise<void | boolean | string>) => beforeStartCallbacks = beforeStartCallbacks.filter(f => f != fn);
/**
 * 
 * @returns the first string or boolean returning false, otherwise true
 */
export const fireBeforeRouteChange = async (target: string) => {
    const pathname = new URL(target || '', `https://www.example.com/${target}`).pathname;
    const result = await Promise.resolve(beforeStartCallback(target));
    return result === undefined ? true : result;
    // const promises = beforeStartCallbacks.map(fn => Promise.resolve(fn(pathname)));
    // const result = await Promise.all(promises);
    // return result.find(r => typeof r === 'string' || r === false) ?? true; // must be boolean value false, undefined doesn't count.
}