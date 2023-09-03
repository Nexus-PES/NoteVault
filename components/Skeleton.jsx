import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const CardSkeleton = () => {
	return (
		<>
			<SkeletonTheme
				baseColor="#292929"
				highlightColor="#444"
			>
				<div className="h-28 group relative bg-dark-100 text-white gap-2 cursor-pointer hover:bg-dark/40 hover:shadow-md rounded p-5 hover:border-stone-500 transition duration-150 ease-in-out">
					{/* <Skeleton count={5} /> */}
					<Skeleton className="h-8 w-20" />
				</div>
			</SkeletonTheme>
		</>
	);
};

export const SkeletonProfile = () => {
	return (
		<SkeletonTheme
			baseColor="#292929"
			highlightColor="#444"
		>
			<div className="w-10 h-10 ">
				<Skeleton className="w-10 h-10 rounded" />
			</div>
		</SkeletonTheme>
	);
};
export const SkeletonHeading = () => {
	return (
		<SkeletonTheme
			baseColor="#292929"
			highlightColor="#444"
		>
			<div className="w-full h-10">
				<Skeleton className="" />
			</div>
		</SkeletonTheme>
	);
};
