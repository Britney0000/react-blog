import React, { useState } from 'react'
import { useEffect } from 'react'
import BlogCards from './BlogCards';

function BlogPage() {
    const [blogs, setBlogs] = useState([])

    useEffect ( () => {
        async function fetchBlogs() {
            let url = `http://localhost:5000/blogs`;

            const response = await fetch(url);
            const data = await response.json();
            setBlogs(data)
        } 

        fetchBlogs();
        }, [])
    
        console.log(blogs)

    return (
        <div>
            {/*Categorie section */}
            <div>Page Category</div>

            {/*Blogcards section*/}
            <div>
                <BlogCards blogs={blogs}/>
            </div>

            {/*pagination section*/}
            <div>Pagination</div>


        </div>
    )
}

export default BlogPage