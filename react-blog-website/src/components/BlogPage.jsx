import React, { useState } from 'react'
import { useEffect } from 'react'
import BlogCards from './BlogCards';

function BlogPage() {
    const [blogs, setBlogs] = useState([])
    const [currentPage, setcurrentPage] = useState(1)
    const pageSize = 12 //Blogs per page
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [activeCategory, setActiveCategory] = useState(null)

    useEffect ( () => {
        async function fetchBlogs() {
            let url = `http://localhost:5000/blogs?page=${currentPage}&${pageSize}`;

            // filter by category
            if (selectedCategory){
                url +=`&category=${selectedCategory}`; // Par exemple : si selectedCategory est "tech", l’URL deviendrait :
                                                       //http:localhost:5000/blogs&category=tech.
            }

            const response = await fetch(url);
            const data = await response.json();
            setBlogs(data)
        } 

        fetchBlogs();
        }, [currentPage, pageSize, selectedCategory])
    
        const handlePageChange = (pageNumber) => {
            setcurrentPage(pageNumber)
        }

        const handleCategoryChange = (category) => {
            setSelectedCategory(category)
            setcurrentPage(1)
            setActiveCategory(category)
        }

    return (
        <div>
            {/*Categorie section */}
            <div>Page Category</div>

            {/*Blogcards section*/}
            <div>
                <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} 
                pageSize = {pageSize}/> {/* we are creating a variable to extract data  */}
            </div>

            {/*pagination section*/}
            <div>Pagination</div>


        </div>
    )
}

export default BlogPage