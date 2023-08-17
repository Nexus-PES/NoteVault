"use client";

import React, {
	useState,
	useEffect,
} from "react";
import Card from "./Card";
import Link from "next/link";
const UserPage = ({ params }) => {

	var [greetings, setGreetings] = useState("");
	const [div1, setDiv1] = useState(true);
	const [div2, setDiv2] = useState(false);
	const [input, setInput] = useState('');
	const [info, setInfo] = useState([
		{ title: "Title 1" },
		{ title: "Title 2" },
		{ title: "Title 3" },
		{ title: "Title 4" },
		{ title: "Title 5" },
		{ title: "Title 6" },
		{ title: "Title 7" },
		{ title: "Title 8" },
	  ]);

	var data = [
		"Greetings, my friend! How's life treating you?",
		"Salutations! What's new in your world?",
		"Ahoy there! Long time no chat.",
		"Well met! What's the latest scoop?",
		"Hey you! How's everything on your end?",
		"Hola amigo! It's time for another catch-up.",
		"Hey sunshine! What's been keeping you busy?",
		"Yoohoo! Let's have a splendid chat, shall we?",
		"Hey, hey! Ready to dive into some discussions?",
	];

	useEffect(() => {
		if (data.length > 0) {
			const randomIndex =
				Math.floor(
					Math.random() *
					data.length
				);
			const randomGreeting =
				"Hi " +
				params.name +
				"! " +
				data[randomIndex];

			setGreetings(
				randomGreeting
			);
		}
	}, []);

	const changetodiv1 = (event) => {
		setDiv1(true)
		setDiv2(false)
		setInput('')
		const newTitle = { title: input };
		setInfo([...info, newTitle]);

	}

	const changetodiv2 = () => {
		setDiv2(true)
		setDiv1(false)
	}

	const handleInputChange = (event) => {
		setInput(event.target.value);
	  };

	return (
		<div>
			<div className="flex justify-center items-center">
				<div className="my-[50px]">
					<h1 className="text-white text-[34px] font-semibold font-poppins leading-[20px] ">
						{greetings}
					</h1>
				</div>
			</div>
			<div className="p-6 mx-[60px]">
				<div className="flex flex-wrap justify-evenly">
					{info.map(
						(
							item,
							index
						) => (
							<div
								key={
									index
								}
								className=""
							>
								<Link
									href={
										`${params.name}` +
										"/" +
										`${item.title}`
									}
								>
									<Card
										title={
											item.title
										}
										date=""
									/>
								</Link>
							</div>
						)
					)}

					<div className="box-content h-22 w-[260px] p-4 border-2 bg rounded-[7px] my-[10px] text-white text-md bg-[#343434]">
						<div onClick={changetodiv2}>
							{div1 && (
								<div className="mt-[5px] ml-[115px]">
									<span>+ New</span>
								</div>
							)}
						</div>
						<div>
							{div2 && (
								<div>
								<input className="text-black w-[150px] "
								placeholder="title"
								type="text"
								value={input}
								onChange={handleInputChange}
							  />
							  	<button className="border 1px bg mx-6 px-1 " onClick={changetodiv1}>Submit</button>
								</div>
							)}
						</div>
					</div>

				</div>
			</div>
		</div>
	);
};

export default UserPage;
