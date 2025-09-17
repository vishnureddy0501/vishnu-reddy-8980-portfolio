"use client"

import { useEffect, useState } from "react";
import axios from "axios";

function Research() {
	const [currentPage, setCurrentPage] = useState("");
	const [loading, setLoading] = useState(true); // track loading

	useEffect(() => {
		init();
	}, []);

	const init = async () => {
		try {
			setLoading(true);
			const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/google-proxy`);
			setCurrentPage(data);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div
			id="education"
			className="relative z-50 border-t my-16 lg:my-28 border-[#25213b] px-4 sm:px-6 lg:px-8"
		>
			{loading ? (
				// Spinning loader
				<div className="flex justify-center items-center h-64">
					<div className="w-12 h-12 border-4 border-t-4 border-gray-300 border-t-purple-500 rounded-full animate-spin"></div>
				</div>
			) : (
				// Render fetched HTML
				<div
					dangerouslySetInnerHTML={{ __html: currentPage }}
					style={{ width: "100%", height: "50vh" }}
				/>
			)}
		</div>
	);
}

export default Research;
