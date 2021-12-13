import React from 'react';
import {Link}  from "gatsby"

const CustomPagination = () => {
    return (
        <div className="ps-pagination">
            <ul className="pagination">
                <li className="active">
                    <Link href="#">1</Link>
                </li>
                <li>
                    <Link href="#">2</Link>
                </li>
                <li>
                    <Link href="#">3</Link>
                </li>
                <li>
                    <Link href="#">
                        Next Page
                        <i className="icon-chevron-right"></i>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default CustomPagination;
