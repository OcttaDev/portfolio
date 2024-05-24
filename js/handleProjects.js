const projectContainer = document.getElementById("container-projects");

const projects = [
  {
    Id: 0,
    title: "News Letter SignUp",
    description:
      "A login page, made in Angular TS, made to practice and improve my programming logic.",
    path: "https://newsletter-signup-octtadev.vercel.app/",
    image: "../assets/vector/image.png",
  },
  {
    Id: 1,
    title: "BarCode Generator",
    description:
      "A barcode generator in Python using Flask in the backend, creating models and processing data. Developed during the NLW 2024 event.",
    path: "https://github.com/OcttaDev/barcode-generator/tree/main/src",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.NZ2j97zvyHF-EwJTpeQsGwHaGW&pid=Api&P=0&h=180",
  },
];

function handleRedirect(path) {
  window.location.href = path;
}

function handleProjects() {
  for (let project of projects) {
    // Verifique se o título não está vazio
    if (project.title) {
      projectContainer.innerHTML += `<div class="flex flex-col gap-2 items-center w-[300px] h-96 bg-zinc-800/80 rounded-xl backdrop-blur-2xl">
        <img src="${project.image}" class="rounded-t-xl"/>

        <div class="flex flex-col gap-2 items-left w-full px-3">
         <h1 class="text-white text-xl font-semibold">${project.title}</h1>
         <p class="text-ellipsis overflow-hidden text-zinc-400 max-w-[300px]">${project.description}</p>
        </div>
        
        <button class="absolute bottom-5 w-[90%] h-10 bg-zinc-700 rounded-md text-zinc-200 shadow-xl shadow-black/20" onclick="handleRedirect('${project.path}')">Visitar</button>
      </div>`;
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  handleProjects();
});
