import"./assets/styles-1ec4f954.js";const a="feedback-form-state",t=document.querySelector(".feedback-form"),s=t.querySelector("textarea"),r=t.querySelector("input");l();t.addEventListener("submit",e=>{e.preventDefault();const o=JSON.parse(localStorage.getItem(a));console.log(o),e.currentTarget.reset(),localStorage.removeItem(a)});t.addEventListener("input",e=>{const o={email:t.email.value,message:t.message.value};localStorage.setItem(a,JSON.stringify(o))});function l(){const e=JSON.parse(localStorage.getItem(a));e&&(s.value=e.message||"",r.value=e.email||"")}
//# sourceMappingURL=commonHelpers2.js.map
