import Button from "@/components/Button";
import Textarea from "@/components/Textarea";
import React from "react";

const Notes = ({ params }) => {
	return (
		<div className="font-handlee flex text-text-100 flex-col gap-8 sm:p-8 w-full">

			<div className=''>
				<Button>
					Save
				</Button>
				<Button>
					Help
				</Button>
			</div>

			<input
				type="text"
				autoFocus
				placeholder="Your Notes"
				defaultValue={
					decodeURI(params.note)
				}
				className="text-2xl md:text-4xl font-bold block w-full rounded-md border-0 px-3.5 py-2 text-text-100 sm:text-sm sm:leading-6 bg-transparent focus:ring-0 focus:border-2 focus:border-white"
				maxLength={100}
				minLength={3}
				required
			/>

			<Textarea />
		</div>
	);
};

export default Notes;
