import React from 'react';
// import a from 'next/a';

const BreadCrumb = ({ breacrumb }) => {
    return (
        <div className="">
            <ul className="">
                {breacrumb.map(item => {
                    if (!item.url) {
                        return <li key={item.text}>{item.text}</li>;
                    } else {
                        return (
                            <li key={item.text}>
                                <a href={item.url}>
                                    <a>{item.text}</a>
                                </a>
                            </li>
                        );
                    }
                })}
            </ul>
        </div>
    );
};

export default BreadCrumb;
