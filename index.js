const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  title: "Workintech",
  logo: "https://i.ibb.co/ZmRv388/logo.png",
  links: [
    {
      href: "programlarimiz.html",
      text: "Programlarımız",
    },
    {
      href: "blog.html",
      text: "Blog",
    },
    {
      href: "sorulariniz.html",
      text: "Sorularınız",
    },
    {
      href: "hakkimizda.html",
      text: "Hakkımızda",
    },
  ],
};

/* Kodlar Buradan aşağıya */

document.addEventListener("DOMContentLoaded", function () {
  navModel();
});

function navModel() {
  let navUrl = document.getElementById("logo-img");
  navUrl.setAttribute("src", siteContent.logo);
  for (let i = 0; i <= 4; i++) {
    let aHref = document.getElementsByTagName("a")[i];
    aHref.setAttribute("href", siteContent.links[i].href);
    aHref.textContent = siteContent.links[i].text;
  }
}

let title = document.getElementsByTagName("title")[0];

title.textContent = siteContent.title;
