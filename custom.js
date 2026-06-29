/* ==========================
   V5 CUSTOM FEATURES
========================== */

window.addEventListener("load", () => {

    function openLeaderModal() {
        const modal = document.getElementById("leaderModal");
        if (modal) {
            modal.style.display = "flex";
        }
    }

    const floatingContact = document.getElementById("floatingContact");
    if (floatingContact) {
        floatingContact.addEventListener("click", (e) => {
            e.preventDefault();
            openLeaderModal();
        });
    }

 const menuContactUs = document.getElementById("menuContactUs");

if (menuContactUs) {
    menuContactUs.addEventListener("click", (e) => {
        e.preventDefault();

        const modal = document.getElementById("leaderModal");
        if (modal) {
            modal.style.display = "flex";
        }

        const menu = document.getElementById("menu");
        if (menu) {
            menu.classList.remove("show");
        }
    });
}
});
/* ===== Move Hero Buttons Below Banner ===== */

window.addEventListener("load", () => {

    const heroButtons = document.querySelector(".hero-buttons");
    const heroRight = document.querySelector(".hero-right");

    if (heroButtons && heroRight) {
        heroRight.appendChild(heroButtons);
    }

});
/* ===== V5 HERO BUTTONS BELOW BANNER ===== */

.hero-right{
    display:flex;
    flex-direction:column;
    align-items:center;
}

.hero-right .hero-image{
    width:100%;
    display:block;
    border-radius:20px;
}

.hero-right .hero-buttons{
    display:flex;
    gap:16px;
    justify-content:center;
    width:100%;
    margin-top:18px;
}

.hero-right .hero-buttons .btn{
    flex:1;
    max-width:220px;
}