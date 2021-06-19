
import "./script/nav.js";
import "./script/article-blog.js";
import "./script/article-list.js";
import blogs from "./script/blogs.js";

const articleListElement = document.querySelector("article-list");
articleListElement.articles = blogs;
