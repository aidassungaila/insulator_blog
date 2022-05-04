const baseUrl = "https://bottlegreen.no/wp-json/wp/v2/posts";
const postContainer = document.querySelector(".blog-posts");

async function getBlogPosts(url) {
  try {
    const response = await fetch(url);
    const posts = await response.json();

    console.log(posts);

    posts.forEach(function(post) {
      postContainer.innerHTML += `
    <div class="blog-post">
      <div ><h2>${post.title.rendered}</h2></div>
        <div><p>${post.content.rendered}</p></div>
        <div><a href="blogspecific.html?id=${post.id}">read more</a>
        </div> </div>`;
    });
  } catch (error) {
    console.log(error);
    postContainer.innerHTML = message("error", error);
  }
}

getBlogPosts(baseUrl);
