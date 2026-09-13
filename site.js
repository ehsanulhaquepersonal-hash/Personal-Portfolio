const data = window.PORTFOLIO;
data.tools.forEach(([name, description]) => {
 const row=document.createElement('div'); const title=document.createElement('h3'); title.textContent=name; const detail=document.createElement('p');detail.textContent=description;row.append(title,detail);document.querySelector('#tool-list').append(row);
});
document.querySelector('#contact-action').innerHTML = `<button class="button" type="button" id="email-open">Email me ↗</button><div class="contact-links"><a class="button" href="https://www.linkedin.com/in/ehsanul-h/">Connect on LinkedIn ↗</a><a class="button" href="https://wa.me/8801794946293">WhatsApp Me ↗</a><a class="button" href="https://api.whatsapp.com/send?phone=12134038668">WhatsApp ZonHack ↗</a></div><dialog id="email-dialog" aria-labelledby="email-title"><h2 id="email-title">Email me</h2><p>Choose your email service to start a conversation.</p><div class="email-options"><a class="button" target="_blank" rel="noopener" href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=ehsanhaque98%40gmail.com">Open Gmail ↗</a><a class="button" target="_blank" rel="noopener" href="https://outlook.live.com/mail/0/deeplink/compose?to=ehsanhaque98%40gmail.com">Open Outlook ↗</a><a class="button" href="mailto:ehsanhaque98@gmail.com">Use my email app ↗</a><button class="button" id="email-close" type="button">Close</button></div></dialog>`;
const dialog=document.querySelector('#email-dialog');
document.querySelector('#email-open').addEventListener('click',()=>dialog.showModal());
document.querySelector('#email-close').addEventListener('click',()=>dialog.close());
document.querySelectorAll('[data-email-picker]').forEach(link=>link.addEventListener('click',event=>{event.preventDefault();dialog.showModal();}));

