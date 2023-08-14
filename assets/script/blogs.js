const blogPosts = [
  {
    title: "First Blog Post",
    content: "Still a blank post, dont waste your time reading this post",
    author: "Mfrakhman",
    date: "14-08-2023",
  },

  {
    title: "Second Blog Post",
    content:
      "Still a blank post brother, please dont waste your time reading this post",
    author: "Mfrakhman",
    date: "15-08-2023",
  },
];

function createBlogPostElement(post) {
  const blogPostElement = document.createElement("article");
  blogPostElement.className = "blog-post";

  const titleElement = document.createElement("h2");
  titleElement.textContent = post.title;

  const authorElement = document.createElement("p");
  authorElement.textContent = `By ${post.author} on ${post.date}`;

  const contentElement = document.createElement("p");
  contentElement.textContent = post.content;

  blogPostElement.appendChild(titleElement);
  blogPostElement.appendChild(authorElement);
  blogPostElement.appendChild(contentElement);

  return blogPostElement;
}

function showBlogDeteails(post) {
  const detailContainer = document.getElementById("blog-detail");
  detailContainer.innerHTML = "";

  const titleElement = document.createElement("h2");
  titleElement.textContent = post.title;

  const authorElement = document.createElement("p");
  authorElement.textContent = `By ${post.author} on ${post.date}`;

  const contentElement = document.createElement("p");
  contentElement.textContent = post.content;

  detailContainer.appendChild(titleElement);
  detailContainer.appendChild(authorElement);
  detailContainer.appendChild(contentElement);
}

const blogList = document.getElementById("blog-list");

blogPosts.forEach((post, index) => {
  const blogPostElement = createBlogPostElement(post);
  blogPostElement.addEventListener("click", () => {
    showBlogDeteails(post);
  });
  blogList.appendChild(blogPostElement);
});
