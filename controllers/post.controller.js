function index(req, res){
  const posts = "posts list"
  res.send(posts)
}

module.exports = {
  index : index
}
