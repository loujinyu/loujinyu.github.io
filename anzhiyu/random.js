var posts=["posts/970f.html","posts/123c.html","posts/1eaa.html","posts/337a.html","posts/536e.html","posts/2cd7.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };