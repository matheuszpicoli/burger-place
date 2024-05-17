import React from "react"
import { MdLocationPin as Location } from "react-icons/md"

export default function Footer({
	location
}) {
	return (
		<div className="fixed bottom-0 w-full backdrop-blur text-white flex justify-center items-center h-8">
			<Location className="text-red-500 w-7 h-7 mr-2" />
			<i>
				{location}
			</i>
		</div>
	)
}
