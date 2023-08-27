import React from "react";

function FooterRibbon({ id, title, createdDate, lastModifiedDate, content,isRecording , userNotes }) {
	return (
		<div className="fixed border-t border-text-200 gap-4 flex justify-between items-center left-0 bottom-0 bg-dark-100 w-full px-2 py-2">
			<div className="flex gap-4 text-[8px] gap-x-2 font-poppins">
				<span className="mx-1">{userNotes.length} words</span>
				<span className="mx-1">Created on: {createdDate}</span>
				<span className="mx-1">
					Last Modified on: {lastModifiedDate}
				</span>
			</div>
			<div className="flex gap-4 text-[8px] gap-x-2 font-poppins">
				<span className="">{isRecording && 'Recording'}</span>
				<span className="text-secondary">Pending</span>
			</div>
		</div>
	);
}

export default FooterRibbon;
