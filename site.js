const data = window.PORTFOLIO;
data.experience.forEach(job => {
  const article=document.createElement('article'); article.className='timeline-item'+(job.current?' current':'');
  const meta=document.createElement('div'); meta.className='job-meta';
  const date=document.createElement('span'); date.textContent=job.dates; meta.append(date);
  const company=document.createElement('h3'); company.textContent=job.company; meta.append(company);
  if(job.type){const type=document.createElement('p');type.textContent=job.type;meta.append(type);}
  const body=document.createElement('div'); body.className='job-body';
  const title=document.createElement('h3');title.textContent=job.role;body.append(title);
  if(job.current){const badge=document.createElement('span');badge.className='current-badge';badge.textContent='CURRENT ROLE';body.append(badge);}
  const list=document.createElement('ul');job.points.forEach(point=>{const li=document.createElement('li');li.textContent=point;list.append(li);});body.append(list);article.append(meta,body);document.querySelector('#experience-list').append(article);
});
const projects = document.querySelector('#project-list');
data.projects.forEach(project => {
  const item = document.createElement('details');
  item.className = 'project';
  const summary = document.createElement('summary');
  const number = document.createElement('span'); number.className = 'project-number'; number.textContent = project.number;
  const title = document.createElement('h3'); title.textContent = project.name;
  const status = document.createElement('span'); status.className = 'project-status'; status.textContent = 'EXPLORE CASE STUDY';
  const icon = document.createElement('span'); icon.className = 'project-toggle'; icon.textContent = '+'; icon.setAttribute('aria-hidden','true');
  const markets = document.createElement('span'); markets.className = 'project-markets'; markets.textContent = project.marketplaces.join(' · ');
  summary.append(number,title,icon,markets,status);
  const body = document.createElement('div'); body.className = 'project-body';
  const challenge=document.createElement('h4'); challenge.textContent='The challenge';
  const text=document.createElement('p'); text.textContent=project.situation;
  const heading=document.createElement('h4'); heading.textContent='My work';
  const list=document.createElement('ul'); project.work.forEach(point=>{const li=document.createElement('li');li.textContent=point;list.append(li);});
  const result=document.createElement('h4'); result.textContent='Outcome & current focus';
  const outcome=document.createElement('p'); outcome.textContent=project.outcome;
  body.append(challenge,text,heading,list,result,outcome); item.append(summary,body); projects.append(item);
});
data.tools.forEach(([name,description]) => { const row=document.createElement('div'); const title=document.createElement('h3'); title.textContent=name; const detail=document.createElement('p'); detail.textContent=description; row.append(title,detail); document.querySelector('#tool-list').append(row); });
const contact=document.querySelector('#contact-action');
if(data.email) { const link=document.createElement('a'); link.className='button light'; link.href='mailto:'+data.email; link.textContent='Email me ↗'; contact.append(link); const label=document.createElement('p'); label.className='contact-address'; label.textContent=data.email; contact.append(label); }
else { const label=document.createElement('p'); label.className='contact-pending'; label.textContent='Contact details coming soon.'; contact.append(label); }
if(data.workEmail){const line=document.createElement('p');const link=document.createElement('a');link.href='mailto:'+data.workEmail;link.className='text-link';link.textContent='Connect ZonHack ↗';line.append(link);contact.append(line);}
const social=document.createElement('div');social.className='contact-links';
const addLink=(parent,label,url)=>{const a=document.createElement('a');a.textContent=label;a.href=url;parent.append(a);};
addLink(social,'ZonHack Success Stories',data.zonhackStories);
addLink(social,'Connect Me on LinkedIn',data.linkedin);
const whatsappRow=document.createElement('div');whatsappRow.className='whatsapp-links';
addLink(whatsappRow,'WhatsApp Me','https://wa.me/'+data.whatsapp.replace(/\D/g,''));
whatsappRow.append(document.createTextNode(' | '));
addLink(whatsappRow,'WhatsApp ZonHack',data.zonhackWhatsapp);
social.append(whatsappRow);contact.append(social);

