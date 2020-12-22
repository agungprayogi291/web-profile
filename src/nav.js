class NavigasiBar extends HTMLElement{
    // constructor(){
    //     super()
    //     this.shadowDOM = this.attachShadow({mode:"open"});
    // }
    connectedCallback(){
        this.render();
    }
    render(){
        this.innerHTML =`
        
        <style>
            navigasi-bar{
                display:block;
            }
            .kotak{  
                background-color: #a3b9a3;
                padding:10px 20px 10px 20px;
                height: 100%;
                border-top-right-radius:500px ;
                border-bottom-left-radius: 500px;
                
            }
            .kotak p{
                color:white;
                font-size: 24px;
                
            }


            .navbar-nav li:hover a {
                border-top-right-radius:300px ;
                border-bottom-left-radius: 300px;
                transition: 2s;
            }
            .navbar-nav li:hover a{
            
                background-color: #a3b9a3;
            }
        </style>
        
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
                <div class="container-fluid">
                <div class="kotak">
                    <p>Agung.p</p>
                </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="index.html">profile</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#work">work</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#carier">carier</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#addres">contact</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="blog.html">blog</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        `
    }
}

customElements.define('navigasi-bar',NavigasiBar);