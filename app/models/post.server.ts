
import { prisma } from '~/db.server';


type Post = {
	slug: string;
	title: string;
};

export async function getPosts(){
	// return [
	// 	{
	// 		slug: "My-first-post",
	// 		title: "My first post",
	// 	},
	// 	{
	// 		slug: "990s-mixtape",
	// 		title: "a mixtap I made just for you",
	// 	},
	// ];

	return prisma.post.findMany();
}
