import React from "react";
import prisma from "../../prisma/prisma";

async function Testing() {
  
  const reading = await prisma.titles.findMany({})
	console.log(reading);

	return <div>Testing</div>;
}

export default Testing;
