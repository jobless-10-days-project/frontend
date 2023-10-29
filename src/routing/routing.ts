
const beforeStartCallbacks: ((target: string) => void)[] = [];

export const beforeRouteChange = (fn: (target: string) => void) => beforeStartCallbacks.push(fn);

export const fireBeforeRouteChange = (target: string) => {
    const pathname = new URL(target || '', `https://www.example.com/${target}`).pathname;
    beforeStartCallbacks.forEach(fn => fn(pathname));
}