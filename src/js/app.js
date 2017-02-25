

import { githubApiKey } from '../../secrets.js'
import $ from 'jquery'


let myPersonalInfo = $.getJSON(`https://api.github.com/users/grosspath?access_token=${githubApiKey}`).then(function(serverRes){


let myPersonalRepos = $.getJSON(`https://api.github.com/users/grosspath/repos?access_token=${githubApiKey}`).then(function(serverRes2){

let myPersonalInfo = document.querySelector('#app-container')
myPersonalInfo.innerHTML = `
<div class="nav-bar">
  <input type="text" placeholder="Search GitHub"></input>
  <p class="nav-bar-content">Pull Requests</p>
  <p class="nav-bar-content">Issues</p>
  <p class="nav-bar-content">Gist</p>

</div>
<div class="overview container">
  <p class="nav-bar-content">Overview</p>
  <p class="nav-bar-content">Repositories: ${serverRes.public_repos}</p>
  <p class="nav-bar-content">Stars</p>
  <p class="nav-bar-content">Followers: ${serverRes.followers}</p>
  <p class="nav-bar-content">Following: ${serverRes.following}</p>
</div>
<div class="body-margin">
  <img src='${serverRes.avatar_url}'>
  <h4>${serverRes.name}</h4>
  <h4>${serverRes.blog}</h4>
  <h4>${serverRes.location}</h4>
  <h4>${serverRes.email}</h4>
  <h4>${serverRes.html_url}</h4>
  <button>Follow</button>
  <h6>Block or report user</h6>
</div>
<div class="side-text">
</div>
`

let repoData = serverRes2.map(function(userObj){

let repoDataHtml = document.querySelector('.side-text')

repoDataHtml.innerHTML += `

<div class="repo-data">
  <a class="narrow" href="#">${userObj.name}</a>
  <p class="narrow">${userObj.description}</p>
  <p class="narrow">${userObj.url}</p>
</div>`
})
// var newInputEl = `grosspath`
// var pageRouterEl = document.querySelector('#app-container')
// pageRouterEl.addEventListener('input', function(evt){
//    newInputEl = evt.target.value
// })
// console.log(newInputEl);
//   return newInputEl

})
})
