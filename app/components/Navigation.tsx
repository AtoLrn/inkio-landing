export default function Nav() {
	return <nav className="px-8 h-32 bg-neutral-900 text-white flex items-center absolute w-full z-10">
		<h1 className="text-xl font-bold flex-1">Josef Klug</h1>
		<ul className="flex flex-col flex-1 text-gray-100">
			<li>Portfolio</li>
			<li>Models</li>
			<li>Possibility</li>
		</ul>
		<ul className="flex flex-col flex-1 text-gray-100">
			<li>Portfolio</li>
			<li>Models</li>
			<li>Possibility</li>
		</ul>
		<button className="rounded-xl px-2 border border-gray-100 text-gray-100">
            Contact {'->'}
		</button>
	</nav>
}