import React from "react";

export default function User({ user }) {
	const {
		avatar_url,
		followers,
		following,
		public_repos,
		name,
		login,
		created_at,
	} = user;

	const createdDate = new Date(created_at);

	return (
		<>
			<div>
				<img src={avatar_url} alt="user" className="w-[400px] h-[400px] border-2 border-black" />
			</div>
			<div className="bg-sky-500 rounded-b-md">
				<a href={`https://github.com/${login}`}>{name || login}</a>
				<p>
					User joined on{" "}
					{`${createdDate.getDate()} ${createdDate.toLocaleString("en-US", {
						month: "short",
					})} ${createdDate.getFullYear()}`}
				</p>
			</div>
			<div className="flex justify-center mt-4 bg-sky-500 p-4 rounded-md">
				<div>
					<p>Public repos</p>
					<p>{public_repos}</p>
				</div>
				<div className="ml-4">
					<p>Followers</p>
					<p>{followers}</p>
				</div>
				<div className="ml-4">
					<p>Following</p>
					<p>{following}</p>
				</div>
			</div>
		</>
	);
}
