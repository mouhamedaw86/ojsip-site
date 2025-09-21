document.addEventListener('DOMContentLoaded', function(){
  // mobile menu
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');
  hamburger && hamburger.addEventListener('click', ()=>{
    menu.style.display = (menu.style.display==='flex')?'none':'flex';
  });

  // scroll active link
  document.querySelectorAll('.menu-link').forEach(link=>{
    link.addEventListener('click', function(e){
      document.querySelectorAll('.menu-link').forEach(l=>l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // toggle directions
  document.querySelectorAll('.dir').forEach(dir=>{
    const btn = dir.querySelector('.toggle');
    const body = dir.querySelector('.dir-body');
    btn.addEventListener('click', ()=>{
      const open = body.style.display === 'block';
      // close others
      document.querySelectorAll('.dir-body').forEach(d=>d.style.display='none');
      if(!open) body.style.display = 'block';
      else body.style.display = 'none';
    });
  });

  // form (simulation)
  const form = document.getElementById('contactForm');
  form && form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if(!name||!email||!message){ alert('Veuillez remplir tous les champs'); return; }
    const msg = document.getElementById('formMsg');
    msg.style.display = 'block';
    msg.textContent = `Merci ${name} — votre message a bien été reçu.`;
    form.reset();
  });

  // modal for event details (simple)
  document.querySelectorAll('[data-event]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const id = btn.getAttribute('data-event');
      openEventModal(id);
    });
  });

  function openEventModal(id){
    const modal = document.getElementById('modal');
    modal.innerHTML = `<div class="modal-inner"><div class="modal-card"><button class="close">✕</button><h3>Détails évènement</h3><p>Informations complémentaires pour l'événement #${id}.</p></div></div>`;
    modal.style.display = 'flex';
    modal.querySelector('.close').addEventListener('click', ()=>modal.style.display='none');
    modal.addEventListener('click', (e)=>{ if(e.target===modal) modal.style.display='none'; });
  }

  // set year
  const y = document.getElementById('year'); if(y) y.textContent = new Date().getFullYear();
});