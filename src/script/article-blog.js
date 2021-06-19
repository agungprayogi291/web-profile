class ArticleBlog extends HTMLElement{

    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode:"open"});
    }
    set items(item){
        this._items = item;
        this.render()
    }
    render(){
        this.shadowDOM.innerHTML =`
        <style>

            .article-item{
                width:100%:
                display:flex;
                color:black;
                box-shadow:1px 1px 8px rgba(0,0,0,0.5), -1px -1px 8px rgba(0,0,0,0.5);
                margin:20px auto;
                background-color:orange;
                padding:50px;
                font-family:sans-serif;
                
                
            }
            img{
                max-width:300px;
                object-fit:cover;
                object-position:center;
        
            }
           
        </style>
            <div class="article-item">
                <h2>${this._items.title} </h2>
                <img src="${this._items.image}">
                <p>${this._items.description}</p>
            </div>
        `;
    }
}

customElements.define('article-blog',ArticleBlog);