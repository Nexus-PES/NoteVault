import {notesData} from '../../../data'



export async function GET(req, res) {
	const {note} = req;
	const id = 10;
	const noteData = notesData.find((note) => note.id === id);
	return new Response(JSON.stringify(noteData));
}
