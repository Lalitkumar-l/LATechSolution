 
    // Mobile menu toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    menuBtn?.addEventListener('click',()=> mobileMenu.classList.toggle('show'));

    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Back to top visibility
    const toTop = document.getElementById('toTop');
    window.addEventListener('scroll',()=>{
      toTop.style.display = window.scrollY > 500 ? 'block' : 'none';
    });
    toTop.addEventListener('click',()=> window.scrollTo({top:0,behavior:'smooth'}));

    // Prefill contact subject via data-prefill
    const prefillLinks = document.querySelectorAll('[data-prefill]');
    const messageBox = document.getElementById('message');
    prefillLinks.forEach(a=>{
      a.addEventListener('click',()=>{
        const tag = a.getAttribute('data-prefill');
        if(messageBox && !messageBox.value.includes(tag)){
          messageBox.value = `[${tag}] I would like a demo and pricing details.\n` + messageBox.value;
        }
      })
    });

    // Simple modal open
    document.querySelectorAll('[data-open-modal]').forEach(btn=>{
      btn.addEventListener('click', (e)=>{
        e.preventDefault();
        const id = btn.getAttribute('data-open-modal');
        const dlg = document.getElementById('modal-' + id);
        dlg?.showModal();
      })
    });

    // Contact form: open mail client pre-filled
    const emailTo = 'lalitkumar962789@gmail.com';
    document.getElementById('contactForm').addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const msg = messageBox.value.trim();
      const subject = encodeURIComponent(`Inquiry from LATechSolution — ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${msg}`);
      window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
    });

    // Quick WhatsApp from form
    document.getElementById('waQuick').addEventListener('click', function(e){
      e.preventDefault();
      const name = document.getElementById('name').value || 'Client';
      const msg = encodeURIComponent(`Hi Lalit, I am ${name}. I visited LATechSolution.com and want to discuss a project.`);
      window.open(`https://wa.me/916397908139?text=${msg}`, '_blank');
    });

    // Brochure placeholder
    document.getElementById('downloadBrochure').addEventListener('click', function(e){
      e.preventDefault();
      const data = new Blob([`LATechSolution\n\nProducts:\n- Hospital Management System\n- School Management System\n\nContact: ${emailTo} | +91 6397908139`], {type:'text/plain'});
      const url = URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url; a.download = 'LATechSolution-Brochure.txt'; a.click();
      URL.revokeObjectURL(url);
    });
