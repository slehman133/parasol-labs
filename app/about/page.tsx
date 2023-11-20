import React from 'react'
import Contact from '../components/Form/contact'

export async function generateMetadata() {
    return {
        title: 'About Parasol Labs',
    }
}

const AboutPage = () => {
    return (

        <main>
            <p>
                At Parasol Labs, we are fueled by an unwavering commitment to innovate and deliver life-changing biotechnology solutions for marginalized communities and womens health. Through our relentless pursuit of rigorous research and the deployment of cutting-edge technology, we develop products that are safe, effective, and accessible.
                By targeting niche markets, we create new opportunities for brand disruption and lead the way in providing effective treatments for those who need them the most. Our passion, expertise, and ingenuity set us apart and position us to redefine the landscape of biotechnology for generations to come.
            </p>

        </main>
    )
}

export default AboutPage