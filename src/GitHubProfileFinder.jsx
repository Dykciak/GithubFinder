import React, { useEffect, useState } from "react";
import User from "./User"

export default function GitHubProfileFinder() {
	const [userName, setUserName] = useState("Dykciak");
	const [userData, setUserData] = useState(null);
	const [loading, setLoading] = useState(true);

	async function fetchGithubUserData() {
		setLoading(true);
		const res = await fetch(`https://api.github.com/users/${userName}`);
		const data = await res.json();
		if (data) {
			setUserData(data);
			setLoading(false);
		}
		console.log(data);
	}	
	function handleSubmit() {
		fetchGithubUserData()
	}

	useEffect(() => {
		fetchGithubUserData();
	}, []);

	if (loading) {
		return (
			<h1 className="bg-stone-600 p-2 text-stone-950 font-bold">
				Loading data!
			</h1>
		);
	}
	return (
		<>
			<div className="container">
				<div>
					<input
						name="search-by-username"
						type="text"
						placeholder="Search Github username..."
						value={userName}
						onChange={(e) => setUserName(e.target.value)}
						className="bg-amber-400 p-2 rounded-t-md w-full"
					/>
					<button onClick={handleSubmit} className="bg-yellow-300 w-full p-2">Search</button>
					{userData !== null ? <User user={userData} /> : null}
				</div>
			</div>
		</>
	);
}
