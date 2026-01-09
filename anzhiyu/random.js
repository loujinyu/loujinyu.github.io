var posts=["posts/970f.html","posts/629f.html","posts/f723.html","posts/1eaa.html","posts/337a.html","posts/123c.html","posts/536e.html","posts/2cd7.html","posts/cf95.html","posts/8b7.html","posts/d1d.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };