import Link from "next/link";
import { twMerge } from "tailwind-merge";

const Button = ({
	children,
	href,
	size = "default",
	className,
	type = "default",
	...props
}) => {
	if (href) {
		return (
			<Link
				href={href}
				{...props}
				className={twMerge(
					type === "glory"
						? `text-center ${
								size === "default"
									? "w-[100px] sm:w-[150px] py-2 sm:py-3 "
									: size == "sm"
									? "p-2 sm:p-3"
									: ""
						  } bg-gradient-to-br from-primary to-secondary rounded-lg font-medium sm:font-semibold text-xs sm:text-sm text-white font-poppins`
						: type === "default"
						? `text-center ${
								size === "default"
									? "w-[100px] sm:w-[150px] py-2 sm:py-3 "
									: size == "sm"
									? "p-2 sm:p-3"
									: ""
						  } bg-white rounded-lg font-medium sm:font-semibold text-xs sm:text-sm text-dark-200 font-poppins`
						: "",
					className
				)}
			>
				{children}
			</Link>
		);
	}
	return (
		<button
			{...props}
			className={twMerge(
				type === "glory"
					? `text-center ${
							size === "default"
								? "w-[100px] sm:w-[150px] py-2 sm:py-3 "
								: size == "sm"
								? "p-2 sm:p-3"
								: ""
					  } bg-gradient-to-br from-primary to-secondary rounded-lg font-medium sm:font-semibold text-xs sm:text-sm text-white font-poppins`
					: type === "default"
					? `text-center ${
							size === "default"
								? "w-[100px] sm:w-[150px] py-2 sm:py-3 "
								: size == "sm"
								? "p-2 sm:p-3"
								: ""
					  } bg-white rounded-lg font-medium sm:font-semibold text-xs sm:text-sm text-dark-200 font-poppins`
					: "",
				className
			)}
		>
			{children}
		</button>
	);
};

export default Button;
