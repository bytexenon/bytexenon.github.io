// later.
/*
window.addEventListener("load", function () {
  fetch("blogs.json")
    .then((response) => response.json())
    .then((data) => {
      const blogList = document.querySelector("#blog-list");
      data.blogs.forEach((blog) => {
        const blogItem = document.createElement("div");
        blogItem.classList.add("blog-item");

        if (blog.banner) {
          const blogBanner = document.createElement("img");
          blogBanner.classList.add("blog-banner");
          blogBanner.src = blog.banner;
          blogItem.appendChild(blogBanner);
        }

        const blogTitle = document.createElement("a");
        blogTitle.classList.add("blog-title");
        blogTitle.href = blog.link;
        blogTitle.textContent = blog.name;
        blogItem.appendChild(blogTitle);

        const blogDescription = document.createElement("p");
        blogDescription.classList.add("blog-description");
        blogDescription.textContent = blog.description;
        blogItem.appendChild(blogDescription);

        blogList.appendChild(blogItem);
      });
    });
});
*/