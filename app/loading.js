import React from "react";
import NotesNavbar from "../components/NotesNavbar";
import { CardSkeleton, SkeletonHeading } from "../components/Skeleton";

const RootLoading = () => {
	return (
		<>
			<main className="flex flex-col flex-1 w-full overflow-x-hidden font-poppins">
				<NotesNavbar
					username="Loading.."
					params={"/"}
					loading={true}
					className="-pl-10"
				/>
				<div
					style={{ maxHeight: "100vh" }}
					className="flex-1 overflow-y-auto"
				>
					{/* <div className="mx-6 flex flex-col items-center space-x-6"> */}
					<div className="mx-6 flex justify-start items-center my-14">
						<SkeletonHeading />
					</div>

					<div className="my-6">
						<div className="mx-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
							<CardSkeleton />
							<CardSkeleton />
							<CardSkeleton />
							<CardSkeleton />
							<CardSkeleton />
							<CardSkeleton />
							<CardSkeleton />
							<CardSkeleton />
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default RootLoading;
