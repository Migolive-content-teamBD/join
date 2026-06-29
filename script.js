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
});