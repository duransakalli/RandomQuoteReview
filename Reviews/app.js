const reviews = [
    {
      id: 1,
      name: "José Mourinho",
      job: "Coach",
      img:
        "https://asroma2-cloudinary.corebine.com/asroma2-production/image/upload/c_fill,dpr_3.0,f_webp,g_auto,q_auto,w_768/v1/asroma2-prod/HeadshotMourinho2_iwlwuc",
      text:
        "Football is a game about feelings and intelligence.",
    },
    {
      id: 2,
      name: "José Mourinho",
      job: "Coach",
      img:
        "https://asroma2-cloudinary.corebine.com/asroma2-production/image/upload/c_fill,dpr_3.0,f_webp,g_auto,q_auto,w_768/v1/asroma2-prod/HeadshotMourinho2_iwlwuc",
      text:
        "I enjoy the work, I enjoy every minute of my professional life.",
    },
    {
      id: 3,
      name: "José Mourinho",
      job: "Coach",
      img:
        "https://asroma2-cloudinary.corebine.com/asroma2-production/image/upload/c_fill,dpr_3.0,f_webp,g_auto,q_auto,w_768/v1/asroma2-prod/HeadshotMourinho2_iwlwuc",
      text:
        "I hate to speak about individuals. Players don't win you trophies, teams win trophies, squads win trophies.",
    },
    {
      id: 4,
      name: "José Mourinho",
      job: "Coach",
      img:
        "https://asroma2-cloudinary.corebine.com/asroma2-production/image/upload/c_fill,dpr_3.0,f_webp,g_auto,q_auto,w_768/v1/asroma2-prod/HeadshotMourinho2_iwlwuc",
      text:
        "Sometimes you see beautiful people with no brains. Sometimes you have ugly people who are intelligent, like scientists.",
    },
    {
        id: 5,
        name: "Fatih Terim",
        job: "Coach",
        img:
          "https://ahvalnews.com/sites/default/files/styles/social_image/public/2017-12/20171222143249tphp-aa_tr_pho_gen-20171222171842-14090182-galatasarayda_dorduncu_fatih_terim_donemi.h.jpg?itok=SxDtVoxz",
        text:
          "We're not going to be afraid of taking risks. Certainly we're going to press, but we're aware that if we eat a goal, this is going to be a job left to miracles. We'll take risks at any second, but the smarter we do it, the better."
      },
      {
        id: 6,
        name: "Fatih Terim",
        job: "Coach",
        img:
          "https://ahvalnews.com/sites/default/files/styles/social_image/public/2017-12/20171222143249tphp-aa_tr_pho_gen-20171222171842-14090182-galatasarayda_dorduncu_fatih_terim_donemi.h.jpg?itok=SxDtVoxz",
        text:
          "We don't have the luxury to lose."
      },
      {
        id: 7,
        name: "Pep Guardiola",
        job: "Coach",
        img:
          "https://i.guim.co.uk/img/media/939511832ce304130da85e4210638add046a5c04/0_219_4938_2963/master/4938.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c1f390057cf2b8f6741f8bfa86798b92",
        text:
          "In football, the worst things are excuses. Excuses mean you cannot grow or move forward."
      },
      {
        id: 8,
        name: "Pep Guardiola",
        job: "Coach",
        img:
          "https://i.guim.co.uk/img/media/939511832ce304130da85e4210638add046a5c04/0_219_4938_2963/master/4938.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c1f390057cf2b8f6741f8bfa86798b92",
        text:
          "Why am I here? Yes, to win titles, because then I will feel happy for the people. But the process is the reason why."
      },
      {
        id: 9,
        name: "José Mourinho",
        job: "Coach",
        img:
          "https://asroma2-cloudinary.corebine.com/asroma2-production/image/upload/c_fill,dpr_3.0,f_webp,g_auto,q_auto,w_768/v1/asroma2-prod/HeadshotMourinho2_iwlwuc",
        text:
          "Pressure? What pressure? Pressure is poor people in the world trying to feed their families. There is no pressure in football.",
      }
  ];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn')

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function () {
    showPerson(currentItem)
});

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function() {
    currentItem++;
    currentItem = currentItem >= reviews.length ? 0 : currentItem;
    showPerson(currentItem);
});

prevBtn.addEventListener('click', function() {
    currentItem--;
    currentItem = currentItem < 0 ? reviews.length-1 : currentItem;
    showPerson(currentItem);
})

randomBtn.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random()*reviews.length);
    showPerson(randomIndex);
})

