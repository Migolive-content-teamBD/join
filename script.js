/* ==========================================================
   MIGO WEBSITE V4
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       WEBSITE INFORMATION
    ========================================== */

    document.title = CONFIG.website.title;

    document.getElementById("websiteName").textContent =
        CONFIG.website.name;

    document.getElementById("websiteCountry").textContent =
        CONFIG.website.country;



    /* ==========================================
       HERO
    ========================================== */

    document.getElementById("heroBadge").textContent =
        CONFIG.hero.badge;

    document.getElementById("heroTitle").innerHTML =
        CONFIG.hero.title.replace(/\n/g,"<br>");

    document.getElementById("heroDescription").textContent =
        CONFIG.hero.description;



    /* ==========================================
       HERO TAGS
    ========================================== */

    const heroTags =
        document.getElementById("heroTags");

    heroTags.innerHTML = "";

    CONFIG.hero.tags.forEach(tag=>{

        const span=document.createElement("span");

        span.textContent=tag;

        heroTags.appendChild(span);

    });



    /* ==========================================
       HERO BUTTONS
    ========================================== */

    const heroDownload =
        document.getElementById("downloadHeroBtn");

    heroDownload.textContent =
        CONFIG.hero.buttons.download;

    heroDownload.href =
        CONFIG.links.download;

    heroDownload.target="_blank";



    const heroTutorial =
        document.getElementById("tutorialHeroBtn");

    heroTutorial.textContent =
        CONFIG.hero.buttons.tutorial;

    heroTutorial.href =
        CONFIG.links.tutorial;

    heroTutorial.target="_blank";


     /* ==========================================
       WHY MIGO
    ========================================== */

    document.getElementById("whyTitle").textContent =
        CONFIG.whyMigo.title;

    document.getElementById("whySubtitle").textContent =
        CONFIG.whyMigo.subtitle;

    const whyCards =
        document.getElementById("whyCards");

    CONFIG.whyMigo.cards.forEach(item=>{

        whyCards.innerHTML += `
        <div class="card">
            <div class="icon">${item.icon}</div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        </div>
        `;

    });



    /* ==========================================
       BECOME HOST
    ========================================== */

    document.getElementById("hostTitle").textContent =
        CONFIG.becomeHost.title;

    document.getElementById("hostSubtitle").textContent =
        CONFIG.becomeHost.subtitle;

    const hostCards =
        document.getElementById("hostCards");

    CONFIG.becomeHost.cards.forEach(item=>{

        hostCards.innerHTML += `
        <div class="card">
            <div class="icon">${item.icon}</div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        </div>
        `;

    });



    /* ==========================================
       HOST BENEFITS
    ========================================== */

    document.getElementById("benefitsTitle").textContent =
        CONFIG.hostBenefits.title;

    document.getElementById("benefitsSubtitle").textContent =
        CONFIG.hostBenefits.subtitle;

    const benefitsCards =
        document.getElementById("benefitsCards");

    CONFIG.hostBenefits.cards.forEach(item=>{

        benefitsCards.innerHTML += `
        <div class="card">
            <div class="icon">${item.icon}</div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        </div>
        `;

    });

      /* ==========================================
       TUTORIAL
    ========================================== */

    document.getElementById("tutorialTitle").textContent =
        CONFIG.tutorial.title;

    document.getElementById("tutorialSubtitle").textContent =
        CONFIG.tutorial.subtitle;

    const tutorialSteps =
        document.getElementById("tutorialSteps");

    tutorialSteps.innerHTML = "";

    CONFIG.tutorial.steps.forEach(step => {

        tutorialSteps.innerHTML +=
        `<li>✅ ${step}</li>`;

    });

    document.getElementById("tutorialVideo").src =
        CONFIG.tutorial.video;

    document.getElementById("tutorialBtn").href =
        CONFIG.links.tutorial;

    document.getElementById("tutorialBtn").target =
        "_blank";


    /* ==========================================
       FAQ
    ========================================== */

    document.getElementById("faqTitle").textContent =
        CONFIG.faq.title;

    document.getElementById("faqSubtitle").textContent =
        CONFIG.faq.subtitle;

    const faqContainer =
        document.getElementById("faqContainer");

    faqContainer.innerHTML = "";

    CONFIG.faq.questions.forEach(item => {

        faqContainer.innerHTML += `
        <div class="faq-item">
            <div class="faq-question">
                ${item.question}
            </div>

            <div class="faq-answer">
                ${item.answer}
            </div>
        </div>
        `;

    });


    document.querySelectorAll(".faq-question")
    .forEach(question => {

        question.addEventListener("click", () => {

            question.parentElement
            .classList.toggle("active");

        });

    });


    /* ==========================================
       NEED HELP
    ========================================== */

    document.getElementById("helpTitle").textContent =
        CONFIG.needHelp.title;

    document.getElementById("helpDescription").textContent =
        CONFIG.needHelp.description;

    const whatsappBtn =
        document.getElementById("whatsappBtn");

    whatsappBtn.textContent =
        CONFIG.needHelp.whatsappButton;

    whatsappBtn.href =
        CONFIG.links.whatsapp;

    whatsappBtn.target =
        "_blank";


    const facebookBtn =
        document.getElementById("facebookBtn");

    facebookBtn.textContent =
        CONFIG.needHelp.facebookButton;

    facebookBtn.href =
        CONFIG.links.facebook;

    facebookBtn.target =
        "_blank";


    /* ==========================================
       DOWNLOAD
    ========================================== */

    document.getElementById("downloadTitle").textContent =
        CONFIG.download.title;

    document.getElementById("downloadDescription").textContent =
        CONFIG.download.description;

    const downloadBtn =
        document.getElementById("downloadBtn");

    downloadBtn.textContent =
        CONFIG.download.button;

    downloadBtn.href =
        CONFIG.links.download;

    downloadBtn.target =
        "_blank";


    /* ==========================================
       FOOTER
    ========================================== */

    document.getElementById("footerCompany").textContent =
        CONFIG.footer.company;

    document.getElementById("footerCopyright").textContent =
        CONFIG.footer.copyright;

    document.getElementById("footerMadeWith").textContent =
        CONFIG.footer.madeWith;

      /* ==========================================
       MOBILE MENU
    ========================================== */

    const menuBtn =
        document.getElementById("menuBtn");

    const menu =
        document.getElementById("menu");

    menuBtn.addEventListener("click", () => {

        menu.classList.toggle("show");

    });


    /* ==========================================
       CLOSE MENU AFTER CLICK
    ========================================== */

    document.querySelectorAll("#menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("show");

        });

    });


    /* ==========================================
       SMOOTH SCROLL
    ========================================== */

    document.querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener("click", function(e){

            e.preventDefault();

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

  /* ==========================
   SCROLL REVEAL
========================== */

const revealItems = document.querySelectorAll(
"section,.card,.help-right,.download-box"
);

const revealObserver = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show-item");

        }

    });

},{
    threshold:.12
});

revealItems.forEach(item=>{

    revealObserver.observe(item);

});
});
/* ==========================
   BACK TO TOP
========================== */

const topBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
/* ==========================
   STICKY NAVBAR
========================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
/* ==========================
   LOADER
========================== */

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hide");
    }, 500);
});
const contactLeaderBtn = document.getElementById("contactLeaderBtn");
const leaderModal = document.getElementById("leaderModal");
const closeModal = document.querySelector(".close-modal");
document.querySelector('a[href="#contactLeader"]').addEventListener("click", (e) => {
    e.preventDefault();
    leaderModal.style.display = "flex";
    menu.classList.remove("show");
});

contactLeaderBtn.addEventListener("click", () => {
    leaderModal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
    leaderModal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === leaderModal) {
        leaderModal.style.display = "none";
    }
});