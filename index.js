function getRepositories() {
  const req = new XMLHttpRequest();
  req.open('GET', 'https://api.github.com/users/certilremy/repos');
  req.send();
  console.log(req);
}
