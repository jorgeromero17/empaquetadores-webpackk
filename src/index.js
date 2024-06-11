const $links = document.getElementById("links");
const $name = document.querySelector("h1");
const $description = document.querySelector("#description");
const $profession = document.querySelector("h2");
const $avatar = document.querySelector("img");
const $profile = document.querySelector("#profile");

const data = {
  name: "Jorge Romero",
  profession: "Web Developer",
  profile: "React, Tailwind CSS, Python, PostgreSQL",
  description: "Me gusta programar, las buenas historias y jugar a la pelota.",
  avatar:
    "https://pbs.twimg.com/profile_images/964908108714860544/7BkCNP2X_400x400.jpg",
  social: [
    {
      name: "twitter",
      url: "https://x.com/17jorge_romero",
      username: "17jorge_romero",
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/17jorge_romero/",
      username: "17jorge_romero",
    },
  ],

  links: [
    {
      name: "blog",
      url: "https://example.com/",
      color: "red",
      emoji: "📖",
    },
    {
      name: "otro link",
      url: "https://example.com/",
      color: "blue",
      emoji: "😎",
    },
  ],
  footer: "Made with Love on El Salvador",
};

const main = () => {
  // Agregar nombre
  const name = document.createTextNode(data?.name);
  $name.appendChild(name);
  // Agregar profession
  const profession = document.createTextNode(data?.profession);
  $profession.appendChild(profession);
  // Agregar descripción
  const profile = document.createTextNode(data?.profile);
  $profile.appendChild(profile);
  // Agregar descripción
  const description = document.createTextNode(data?.description);
  $description.appendChild(description);
  // Agregar avatar
  $avatar.src = data.avatar;
  $avatar.alt = "Jorge Romero García";

  // Agregar enlaces
  const links = data?.links
    ?.map((link) => {
      return `<div class="bg-${link.color}-200 px-4 py-5 w-full flex justify-between">
          <a class="text-sm font-bold text-${link.color}-600 text-center hover:text-${link.color}-800 cursor-pointer"
            href="${link.url}" target="_blank">
            ${link.name}
          </a>
          <span>${link.emoji}</span>
        </div>`;
    })
    .join("");

  $links.innerHTML = links;
};

main();
