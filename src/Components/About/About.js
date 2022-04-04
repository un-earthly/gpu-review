import React from 'react'
import Article from '../Article/Article'

export default function About() {
    return (
        <div>
            <Article
                className='min-h-[87.7vh]'
                heading={' About this site'}
                paragraph={`This is web application showing users reviews about new rtx 3080 graphics card.i've used react to make this application a single page application. used react router dom to navigate between deiffernt routes.tailwind css to design this application, recharts for the charts show in dashboard area,fonts from google fonts to make the font better.`} />
        </div>
    )
}
