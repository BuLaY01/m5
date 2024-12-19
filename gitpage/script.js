let key = document.getElementById("key");
let search = document.getElementById("search");
let card = document.getElementById("card");
let setting = document.getElementById("setting");

let saver;

search.addEventListener("click", result);

async function result() {
  setting.classList.remove("hider");
  search.classList.add("hider");
  key.classList.add("hider");
  card.classList.add('hider')

  let responce = await fetch(`https://api.github.com/users/${key.value}`);

  key.value = ''

  if (responce.ok) {
    saver = await responce.json();
    console.log(saver.login);
    card_gen();
  } else {
    console.log("Данного пользователя не существует.");
    setting.classList.add("hider");
    search.classList.remove("hider");
    key.classList.remove("hider");
  }
}

function card_gen() {
  card.innerHTML = `
        <img
        src="${saver.avatar_url}"
      />
      <h1>${saver.login}</h1>
      <p>${saver.bio}</p>
      <nav>
        <div>
          <i class="fas fa-map-marker-alt"></i>
          <span>${saver.location}</span>
        </div>
        <div>
          <i class="fas fa-heart-circle"></i>
          <span>${saver.followers}</span>
        </div>
        <div>
          <i class="fas fa-book"></i>
          <span>${saver.public_repos}</span>
        </div>
      </nav>
      <a href="${saver.html_url}" target = "_blank">Перейти</a>
    `;

  card.classList.remove("hider");
  setting.classList.add("hider");
  search.classList.remove("hider");
  key.classList.remove("hider");
}
