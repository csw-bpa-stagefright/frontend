import React from 'react'

// Component Imports 
import DefaultNavbar from '@/~/libs/components/global/Navbar/DefaultNavbar'
import AboutContents from './AboutContent'

const About = () => {
	return (
		<>
			<DefaultNavbar whitebg />
			<AboutContents />
		</>
	)
}

export default About;
