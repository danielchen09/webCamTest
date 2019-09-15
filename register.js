function register(){
  axios.post('http://127.0.0.1:8080/signup', {username: "asfd", password: "asdf", name: "asdf"}, {
  }).then(res => console.log(res));
}
