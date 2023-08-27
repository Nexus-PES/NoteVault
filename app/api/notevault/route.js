import { notesData } from "../../../data";

export async function GET(req, res) {
	const { note } = req;
	const id = 10;
	const noteData = notesData.find((note) => note.id === id);
	return new Response(JSON.stringify(noteData));
}

export async function POST(req, res) {
	const body = await req.json()

	console.log(body);
	try {
		console.log('try')
		return new Response(JSON.stringify(body));
	} catch {
		return new Response(JSON.stringify({ name: "hello" , body}));
	}
}
