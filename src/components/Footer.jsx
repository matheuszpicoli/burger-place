import React from "react"
import { MdLocationPin as Location } from "react-icons/md"

export default function Footer({
	location
}) {
	return (
		<div className="bg-gradient-to-t from-stone-800 via-stone-800 to-stone-700 text-white flex justify-center items-center h-12">
			<Location className="text-red-500 w-7 h-7 mr-2" />
			<i>
				{location}
			</i>
		</div>
	)
}
