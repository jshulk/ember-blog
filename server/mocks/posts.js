module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();
  var posts = [
        {
          id: 1,
          title: "Apples",
          author: 1,
          body: "body for apples post"
        },
        {
          id: 2,
          title: "Bananas",
          author: 1,
          body: "body for Bananas"
        }
      ];

  var authors = [
        {
          id: 1,
          name: "George",
          posts: [1,2]
        }
    ];

  postsRouter.get('/', function(req, res) {
    res.send({
      'posts': posts,
      'authors': authors
    });
  });

  postsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  postsRouter.get('/:id', function(req, res) {
    res.send({
      'posts': {
        id: req.params.id
      }
    });
  });

  postsRouter.put('/:id', function(req, res) {
    res.send({
      'posts': posts.find(function(post){
        return post.id == req.params.id;
      }),
      'authors': authors
    });
  });

  postsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/posts', postsRouter);
};
