/* ================================
   MENU HAMBURGER
=================================== */
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
}

/* ================================
   BUREAU - Accordéon
=================================== */
const toggles = document.querySelectorAll(".toggle");

toggles.forEach((btn) => {
  btn.addEventListener("click", () => {
    const dirBody = btn.closest(".dir").querySelector(".dir-body");
    dirBody.style.display =
      dirBody.style.display === "block" ? "none" : "block";
  });
});

/* ================================
   FORMULAIRE CONTACT
=================================== */
const form = document.querySelector(".form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("✅ Merci ! Votre message a bien été envoyé.");
    form.reset();
  });
}

/* ================================
   EVENTS - MODAL
=================================== */
// Création de la modal
const modal = document.createElement("div");
modal.id = "modal";
modal.style.position = "fixed";
modal.style.top = "0";
modal.style.left = "0";
modal.style.width = "100%";
modal.style.height = "100%";
modal.style.background = "rgba(0,0,0,0.6)";
modal.style.display = "none";
modal.style.alignItems = "center";
modal.style.justifyContent = "center";
modal.style.zIndex = "2000";

const modalContent = document.createElement("div");
modalContent.style.background = "#fff";
modalContent.style.padding = "20px";
modalContent.style.borderRadius = "10px";
modalContent.style.width = "90%";
modalContent.style.maxWidth = "500px";
modalContent.style.boxShadow = "0 6px 18px rgba(0,0,0,0.2)";
modalContent.style.textAlign = "center";

modal.appendChild(modalContent);
document.body.appendChild(modal);

// Fermer modal en cliquant dehors
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Gestion des boutons "Détails" et "Participer"
const eventButtons = document.querySelectorAll(".event-btn");

eventButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const type = btn.textContent.trim();

    if (type === "Détails") {
      modalContent.innerHTML = `
        <h3>📅 Détails de l'événement</h3>
        <p>Cet événement aura lieu très bientôt. Restez connectés !</p>
        <button id="closeModal" style="margin-top:15px; background:#FF6600; color:#fff; border:none; padding:8px 14px; border-radius:6px; cursor:pointer;">
          Fermer
        </button>
      `;
    } else if (type === "Participer") {
      modalContent.innerHTML = `
        <h3>✅ Participation confirmée</h3>
        <p>Merci pour votre intérêt ! Nous avons bien enregistré votre participation.</p>
        <button id="closeModal" style="margin-top:15px; background:#0A1F44; color:#fff; border:none; padding:8px 14px; border-radius:6px; cursor:pointer;">
          Fermer
        </button>
      `;
    }

    modal.style.display = "flex";

    // Attacher bouton fermer
    document.querySelector("#closeModal").addEventListener("click", () => {
      modal.style.display = "none";
    });
  });
});
