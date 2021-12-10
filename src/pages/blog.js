import React from 'react';
import BreadCrumb2 from "../components/blog/BreadCrumb2";
import BlogItemsGridView from "../components/blog/BlogItemsGridView";

const BlogGridPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Our Press',
        },
    ];
    return (
        <div >
            <div className="ps-page--blog">
                <div className="container">
                    <div className="ps-page__header">
                        <h1>Our Press</h1>
                        <BreadCrumb2 breacrumb={breadCrumb} />
                    </div>
                    <BlogItemsGridView columns={4} />
                </div>
            </div>
        </div>
    );
};

export default BlogGridPage
