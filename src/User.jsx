import React from "react";

export default function User({ user }) {
	const { avatar_url, followers, following, public_repos, name, login } = user;
	return (
		<>
			<div>
				<img src={avatar_url} alt="user" />
			</div>
			<div>
				<a href={`https://github.com/${login}`}>{name || login}</a>
			</div>
		</>
	);
}
