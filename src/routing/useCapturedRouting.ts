import { fireBeforeRouteChange } from "@/routing/routing";
import { useRouter } from "next/navigation";

export default function useCapturedRouting<T>(value: T) {
    const router = useRouter();

    const push = (target: string) => {
        fireBeforeRouteChange(target);
        router.push(target);
    }

    return { push };
}