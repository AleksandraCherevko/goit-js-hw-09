import"./assets/styles-1ec4f954.js";const t="feedback-form-state",e=document.querySelector(".feedback-form"),o=e.elements.message;o.value=localStorage.getItem(t)??"";const m=e.elements.email;m.value=localStorage.getItem(t)??"";JSON.stringify(localStorage.getItem(t));e.addEventListener("input",a=>{localStorage.setItem(t,a)});e.addEventListener("submit",a=>{a.preventDefault();let l={Email:e.elements.email.value,Message:e.elements.message.value};console.log(l),localStorage.removeItem(t),e.reset()});
//# sourceMappingURL=commonHelpers2.js.map
