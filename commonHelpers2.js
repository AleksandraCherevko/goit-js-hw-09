import"./assets/styles-1ec4f954.js";const r="feedback-form-state",e=document.querySelector(".feedback-form"),s=e.querySelector("textarea"),o=e.querySelector("input");l();e.addEventListener("submit",t=>{t.preventDefault();const a=JSON.parse(localStorage.getItem(r));if(a)console.log(a);else return;t.currentTarget.reset(),localStorage.removeItem(r)});e.addEventListener("input",t=>{const a={email:e.email.value.trim(),message:e.message.value.trim()};!e.email.value||!e.message.value||localStorage.setItem(r,JSON.stringify(a))});function l(){const t=JSON.parse(localStorage.getItem(r));t&&(s.value=t.message||"",o.value=t.email||"")}
//# sourceMappingURL=commonHelpers2.js.map
