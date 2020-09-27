import DataApi from '../DataApi';
import { data } from '../react-blog-mockup-data.json';


const api = new DataApi(data);

describe('DataApi', ()=>{
    it('exposes articled as an object', ()=>{
        const articles = api.getArticles();
        articleId = data.articles[0].id;
        const articleTitle = data.article[0].title;

        expect (articles).toHaveProperty(articleId);
    });

});