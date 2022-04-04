import React from 'react'

export default function Blogs() {
    return (
        <div className='text-center p-16 min-h-[87.7vh]'>
            <div className="m-2 mx-14">
                <p className="text-gray-50 p-8 text-3xl capitalize">
                    what is context api ? why it is used?
                </p>
                <p>
                    context API is a solution for prop drilling. prop drilling is the way to pass props as child from parents over and over again. which is not the ideal way to handle props.
                    React.createContext() is the way to create context API. it provides .Provider and .Consumer. as the name says the provider is to serve properties globally and consumer is to receive property from anywhere.
                    it is primarily used when some data needs to be accessible by many components at different nesting levels.
                </p>
            </div>
            <div className="m-2 mx-14">
                <p className="text-gray-50 text-3xl p-8 capitalize">
                    What Semantic Tag Are For ?
                </p>
                <p>
                    Semantic tags are newly introduced tags in html5. in addition to communicating better with the search engine and browsing. it lets the browser know the contents of the page. each Semantic tag is like an identifier, for heading there are tags from h1 to h6 which is more convenient than using div over and over again also aside nav code blockquotes, etc help the search engine to find the site easily. Using semantic tags gives you many more hooks for styling your content, too.
                </p>
            </div>
        </div>
    )
}
