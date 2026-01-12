var posts=["posts/970f.html","posts/629f.html","posts/123c.html","posts/f723.html","posts/1eaa.html","posts/337a.html","posts/8b7.html","posts/536e.html","posts/2cd7.html","posts/cf95.html","posts/b16d.html","posts/c5d9.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };