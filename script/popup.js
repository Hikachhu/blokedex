function openTab(){chrome.tabs.create({active:!0,url:"options.html"},null)}document.getElementById("ouvrir-blokedex").addEventListener("click",function(){console.log("Le Blokedex est ouvert."),openTab()}),document.getElementById("capturer-profil").addEventListener("click",function(){console.log("Profil actuel captur\xE9.")});const addElementToLocalStorage=function(){function a(){const a=g.value,b=h.value,c=i.value;if(""===a.trim()||""===b.trim()||""===c.trim())return void alert("Please fill in all fields.");const d=localStorage.getItem("profils");let f=[];d&&(f=JSON.parse(d)),f.push({site:a,pseudo:b,raison:c}),localStorage.setItem("profils",JSON.stringify(f)),e.remove()}const b=function(a,b={},c=""){const d=document.createElement(a);for(const[e,f]of Object.entries(b))d[e]=f;return d.textContent=c,d},c=b("button",{className:"btn"},"Close"),d=b("button",{className:"btn"},"Add"),e=b("div",{className:"settings-dialog"});e.append(b("h2",{},"Add Element"));const f=b("form"),g=b("input",{type:"text",placeholder:"Site",required:!0}),h=b("input",{type:"text",placeholder:"Pseudo",required:!0}),i=b("input",{type:"text",placeholder:"Raison",required:!0});f.append(g,h,i,d,c),e.append(f),c.addEventListener("click",function(){e.remove()}),f.addEventListener("submit",function(b){b.preventDefault(),a()}),document.body.append(e)};document.getElementById("enregistrer-profil").addEventListener("click",function(){console.log("Un autre profil a \xE9t\xE9 enregistr\xE9."),addElementToLocalStorage()});const addTwitterProfileToLocalStorage=function(){function a(){const a=g.value,b=h.value,c=i.value;if(""===b.trim()||""===c.trim())return void alert("Please fill in all fields.");const d=localStorage.getItem("profils");let f=[];d&&(f=JSON.parse(d)),f.push({site:a,pseudo:b,raison:c}),localStorage.setItem("profils",JSON.stringify(f)),e.remove()}const b=function(a,b={},c=""){const d=document.createElement(a);for(const[e,f]of Object.entries(b))d[e]=f;return d.textContent=c,d},c=b("button",{className:"btn"},"Close"),d=b("button",{className:"btn"},"Add"),e=b("div",{className:"settings-dialog"});e.append(b("h2",{},"Add Twitter Profile"));const f=b("form"),g=b("input",{type:"text",value:"Twitter",disabled:!0}),h=b("input",{type:"text",placeholder:"Twitter Username",required:!0}),i=b("input",{type:"text",placeholder:"Reason",required:!0});f.append(g,h,i,d,c),e.append(f),c.addEventListener("click",function(){e.remove()}),f.addEventListener("submit",function(b){b.preventDefault(),a()}),document.body.append(e),chrome.tabs.query({active:!0,currentWindow:!0},function(a){const b=a[0].url,c=b.split("/"),d=c.indexOf("twitter.com");if(-1!==d&&d+1<c.length){const a=c[d+1];h.value=a,e.style.display="block"}else e.remove(),alert("Désolé, mais vous ne semblez pas être sur twitter :/")})};document.getElementById("capturer-profil").addEventListener("click",function(){console.log("Le Blokedex est ouvert."),addTwitterProfileToLocalStorage()});const displayLocalStorageContents=function(){const a=function(a,b={},c=""){const d=document.createElement(a);for(const[e,f]of Object.entries(b))d[e]=f;return d.textContent=c,d},b=a("button",{className:"btn"},"Close"),c=a("div",{className:"settings-dialog"});c.append(a("h2",{},"LocalStorage Contents"));const d=a("textarea",{rows:10,readOnly:!0,style:"width: 100%; resize: none; font-family: monospace;"}),e=localStorage.getItem("profils");d.textContent=e?e:"Aucun contenu disponible",c.append(d,b),b.addEventListener("click",function(){c.remove()}),document.body.append(c)};document.getElementById("exporter").addEventListener("click",function(){console.log("Le Blokedex est ouvert."),displayLocalStorageContents()});const importToLocalStorage=function(){const a=function(a,b={},c=""){const d=document.createElement(a);for(const[e,f]of Object.entries(b))d[e]=f;return d.textContent=c,d},b=a("button",{className:"btn"},"Close"),c=a("button",{className:"btn"},"Import"),d=a("div",{className:"settings-dialog"});d.append(a("h2",{},"Importer"));const e=a("textarea",{rows:10,placeholder:"Coller le contenu à importer",style:"width: 100%; resize: none; font-family: monospace;"});d.append(e,c,b),b.addEventListener("click",function(){d.remove()}),c.addEventListener("click",function(){const a=e.value;try{const b=JSON.parse(a);localStorage.setItem("profils",JSON.stringify(b)),d.remove(),alert("Import réussi bravo :D")}catch(a){alert("Désolé mais le contenu est invalide :/")}}),document.body.append(d)};document.getElementById("importer").addEventListener("click",function(){console.log("Le Blokedex est ouvert."),importToLocalStorage()});