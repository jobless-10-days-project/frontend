import { fireBeforeRouteChange } from "@/routing/routing";
import { useRouter } from "next/navigation";

export default function useCapturedRouting() {
    const router = useRouter();

    const push = async (target: string) => {
        const next = await fireBeforeRouteChange(target);
        console.log('next', next);
        if (next === true) router.push(target); // must be boolean true
        else if (typeof next === 'string') router.push(next);
    }

    return { push };
}