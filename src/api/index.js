let devUrl = "http://localhost:3000/"
let prodUrl = "https://glacial-beyond-28619.herokuapp.com/"

export function createAccount(params) {
  return fetch( prodUrl + "/api/v1/accounts", {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(params)
  }).then( res => res.json() )
}


export function logIn(params){
  console.log(params)
  return fetch(prodUrl + "api/v1/auth", {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(params)
  }).then( res => res.json() )
}

export function fetchUser(id){
  const url = prodUrl + "api/v1/users/" + id
  return fetch(url)
  .then( res => res.json() )
}

export function editUser(user){
  const url = prodUrl + "api/v1/users/" + user.id
  return fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('jwt')
    },
    method: 'PATCH',
    body: JSON.stringify( { user: user } )
  }).then( res => res.json() )
}

export function fetchArticles() {
  return fetch(prodUrl + "api/v1/articles", {
    headers: {
      'Authorization': localStorage.getItem('jwt')
    }
  })
  .then( res => res.json() )
}

export function createArticle(title, body, id){ //needs title
  // console.log('trying to create article from the api/index')
  return fetch(prodUrl + "api/v1/articles", {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('jwt')
    },
    method: 'POST',
    body: JSON.stringify( {article: {title: title, body: body, user_id: id}} )
  }).then( res => res.json() )
}

export function editArticle(title, body, id ){
  const url = prodUrl + "api/v1/articles/" + id
  return fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('jwt')
    },
    method: 'PATCH',
    body: JSON.stringify( {article: {title: title, body: body}} )
  }).then( res => res.json() )
}

export function followUser(id){
  const url = prodUrl + "api/v1/follow/" + id
  return fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('jwt')
    },
    method: 'POST'
    }).then( res => res.json() )
}

export function unfollowUser(id){
  const url = prodUrl + "api/v1/unfollow/" + id
  return fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('jwt')
    },
    method: 'POST'
    }).then( res => res.json() )
}

export function deleteArticle(id){
  return fetch( prodUrl + `api/v1/articles/${id}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('jwt')
    },
    method: 'DELETE'})
    .then( res => res.json() )
}
