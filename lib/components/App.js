import React, { Component } from 'react';

import  DataApi from '../DataApi';
import { data } from '../react-blog-mockup-data';
import ArticleList from '../components/ArticleList';

const api = new DataApi(data);

export default class componentName extends Component {
   constructor(){
       super();
       this.state = {
           articles: api.getArticles(),
           authors: api.getAuthors(),
       }
    }

    articleActions = {
        lookupAuthor: authorId => this.state.authors[authorId],
    };
    

    render() {
        return (
            <ArticleList 
                articles = {this.state.articles}
                authors = {this.state.authors}
                actions = {this.articleActions}
            />     
        )
  }
}
