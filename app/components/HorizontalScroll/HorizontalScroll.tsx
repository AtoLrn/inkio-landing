import React, { useEffect, useRef } from 'react'

export interface HorizontalScrollProps {
	paddingTop?: number
	paddingBottom?: number
    children: React.ReactNode
}

export const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ children, paddingBottom, paddingTop }) => {
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		document.addEventListener('scroll',() => {
			if (!ref.current) {
				return
			}

			const divHeight = (window.innerHeight + ref.current.clientHeight) - (paddingBottom ?? 0) - (paddingTop ?? 0)

			const { top } = ref.current.getBoundingClientRect()

			const scrollMax = ref.current.scrollWidth - ref.current.clientWidth

			const scrollTop = window.innerHeight - top - (paddingTop ?? 0)

			console.log(scrollMax, scrollTop, divHeight)

			if (scrollTop < 0) {
				return ref.current.scrollTo({
					top: 0,
					left: 0,
					behavior: 'smooth'
				}) 				
			}

			if (scrollTop > divHeight) {
				return ref.current.scrollTo({
					top: 0,
					left: scrollMax,
					behavior: 'smooth'
				}) 	
			}

			const percentageFromTop = scrollTop / divHeight

			// ref.current.scrollLeft = scrollMax * percentageFromTop
			ref.current.scrollTo({
				top: 0,
				left: scrollMax * percentageFromTop,
				behavior: 'smooth'
			}) 
		})

		if (ref.current)
			ref.current.scrollLeft = 0
	}, [])

	return <div className='overflow-scroll'
		ref={ref}
	>
		{children}
	</div>
}