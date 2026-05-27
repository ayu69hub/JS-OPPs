let searchBtn = document.querySelector(".search");
let usernameinp = document.querySelector(".usernameinp");
let card = document.querySelector(".card");
function getProfileData(username) {
    fetch(`https://api.github.com/users/${username}`).then(raw => {
        if(!raw.ok) throw new Error ("User not found.");
        return raw.json();
    });
}

function getRepos(username) {
  return fetch(`https://api.github.com/users/${username}/repos?sort=updated`).then(raw => {
     if(!raw.ok) throw new Error ("Failed to fetch repoosss...");
     return raw.json();
    });
}

function decorateProfileData(details){
  console.log("details")
 let data = ` <img id="${details.avatar_url}" class="w-32 h-32 rounded-full border-4 border-blue-500 mx-auto" src="#" alt="User Avatar" />
          <div class="space-y-2">
            <h2 id="name" class="text-xl font-semibold text-gray-800">Name Placeholder</h2>
            <p id="bio" class="text-gray-600 text-sm">User bio goes here.</p>
            <div class="card flex gap-4 text-sm text-gray-700">
              <span id="followers">0 Followers</span>
              <span id="following">0 Following</span>
              <span id="repos">0 Repos</span>
            </div>
          </div>
        </div>
      </section>
    </div>` ;
    card.innerHTML = data;
}




searchBtn.addEventListener("click", function (){
    let username = usernameinp.value.trim();
    if(username.length>0){
       getProfileData(username).then((data)=>{
        decorateProfileData(data);
       });

    } else{
        alert();
    }
    });
