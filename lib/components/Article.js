import React from 'react';

const formatDate = (dateStr) =>{
    return new Date(dateStr).toDateString();
}

const  Article = ({article, actions}) =>{
    const author = actions.lookupAuthor(article.authorId);
    return (
        <div>
            <div>{article.title}</div>
            <div>{formatDate(article.date)}</div>
            <div>
                <a href={author.website}>
                    {author.firtName} {author.lastName}
                </a>
            </div>
            <div>
                {article.body}
            </div>
        </div>
    )
}


export default  Article;