import { Skeleton } from "@/components/ui/skeleton";

export function ProductSkelecttion({
    width,
    height,
}: {
    width?: number;
    height?: number;
}) {
    return (
        <div className="grid  gap-4 md:grid-cols-3 mt-3 md:w-[95%] md:absolute top-[7%]">
            {Array.from({ length: 10 }, (v, i) => i).map((i) => (
                <div className="flex flex-col space-y-3 w-full" key={i}>
                    <Skeleton className="h-[125px] md:w-[250px] w-full rounded-xl" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 md:w-[250px] w-full" />
                        <Skeleton className="h-4 md:w-[250px] w-full " />
                    </div>
                </div>
            ))}
        </div>
    );
}
