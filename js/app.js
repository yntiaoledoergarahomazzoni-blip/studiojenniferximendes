const data = {
  coverImage: "assets/img/cover.jpg",
  avatar: "assets/img/avatar.jpg",

  name: "Studio  Nail",
  handle: "@studiojenniferximendes",
  bio: "💅 Realçando sua beleza em cada detalhe ",

  links: [
    {
      title: "📅 Agendar Atendimento",
      subtitle: "Escolha seu horário e garanta seu atendimento VIP",
      href: "https://wa.me/5511981766358",
      icon: "💅🏻"
    },
    
    {
      title: "📲 Instagram",
      subtitle: "Imagens do meu trabalho",
      href: "https://instagram.com/studiojenniferximendes",
      icon: "📲"
    },
    {
      title: "📍 Localização do Estúdio",
      subtitle: "Veja como chegar facilmente até nós",
      href: "https://maps.app.goo.gl/aB4NYscUwHxHjbbC9?g_st=ipc",
      icon: "📍"
    }
  ],

  socials: [
    { icon: "assets/icons/instagram.svg", href: "https://instagram.com/studiojenniferximendes" },
    { icon: "assets/icons/whatsapp.svg", href: "https://wa.me/5511981766358" }
  ]
};


// COVER
document.getElementById("cover").style.backgroundImage =
  `url('${data.coverImage}')`;

// HEADER
document.getElementById("avatar").src = data.avatar;
document.getElementById("name").textContent = data.name;
document.getElementById("handle").textContent = data.handle;
document.getElementById("bio").textContent = data.bio;

// LINKS
const linksEl = document.getElementById("links");
data.links.forEach(link => {
  const a = document.createElement("a");
  a.className = "link";
  a.href = link.href;
  a.target = "_blank";
  a.innerHTML = `
    <div class="icon">${link.icon}</div>
    <div class="text">
      <div class="title">${link.title}</div>
      <div class="subtitle">${link.subtitle}</div>
    </div>
  `;
  linksEl.appendChild(a);
});

// SOCIALS
const socialsEl = document.getElementById("socials");
data.socials.forEach(s => {
  const a = document.createElement("a");
  a.className = "sbtn";
  a.href = s.href;
  a.target = "_blank";
  a.innerHTML = `<img src="${s.icon}" alt="social icon">`;
  socialsEl.appendChild(a);
});
