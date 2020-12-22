import "./src/nav.js";
import "./src/article-blog.js";
import "./src/article-list.js";
import blogs from "./src/blogs.js";

const articleListElement = document.querySelector("article-list");
articleListElement.articles = blogs;
