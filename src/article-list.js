import "./article-blog.js";
class ArticleList extends HTMLElement{

    set articles(article){
        this._articles= article;
        this.render();
    }
    render(){
        this._articles.forEach(article=>{
            const articleBlogElement = document.createElement('article-blog');
            articleBlogElement.items = article;
            this.appendChild(articleBlogElement);
        })
    }
}

customElements.define("article-list",ArticleList);