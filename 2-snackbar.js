import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{i}from"./assets/vendor-BbbuE1sJ.js";const t=document.querySelector(".form");t.addEventListener("submit",o=>{o.preventDefault();const s=Number(t.elements.delay.value),r=t.elements.state.value;new Promise((e,m)=>{setTimeout(()=>{r==="fulfilled"?e(s):m(s)},s)}).then(e=>{i.success({title:"Success",message:`✅ Fulfilled promise in ${e}ms`,position:"topRight"})}).catch(e=>{i.error({title:"Error",message:`❌ Rejected promise in ${e}ms`,position:"topRight"})}),t.reset()});
//# sourceMappingURL=2-snackbar.js.map
