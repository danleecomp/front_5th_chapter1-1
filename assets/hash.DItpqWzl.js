import{P as u,L as f,M as h,E as d,U as w}from"./main.BG59EcP4.js";function m(e){const t={"/":h,"/login":f,"/profile":u};function n(){let o=window.location.hash;return!o||o==="#"?"/":o.startsWith("#/")?o.replace("#",""):"/"+o.replace("#","")}function i(o){o.startsWith("/")&&(o=o.substring(1)),window.location.hash="/"+o}function l(){const o=n();let s=t[o];if(o==="/profile"&&!e.isLoggedIn()){window.location.hash="/login";return}else if(o==="/login"&&e.isLoggedIn()){window.location.hash="/";return}s||(s=d),document.getElementById("root").innerHTML=s(e)}function c(){window.addEventListener("hashchange",l),!window.location.hash||window.location.hash==="#"?window.location.hash="/":setTimeout(l,10)}return{navigate:i,init:c}}const v=navigator.userAgent.includes("Playwright"),r=w(),a=m(r),p=()=>"/front_5th_chapter1-1",g=p();document.addEventListener("click",e=>{if(e.target.id==="logout"&&(e.preventDefault(),console.log("로그아웃"),r.logout(),a.navigate("/login")),e.target.matches('a[href^="#/"], a[href^="/"]')){e.preventDefault();let t=e.target.getAttribute("href");if(t.startsWith(g)&&(t=t.replace(g,"")),t==="#")return;t.startsWith("#/")&&(t=t.substring(1)),a.navigate(t)}});document.addEventListener("submit",e=>{if(e.preventDefault(),e.target.id==="login-form"){const t=e.target.querySelector("#username").value,n=e.target.querySelector("#password").value||"";console.log("로그인:",{username:t,password:n}),t&&(r.login({username:t,email:"",bio:""}),console.log("로그인 성공"),a.navigate("/profile"))}if(e.target.id==="profile-form"){const t=e.target.querySelector("#username").value,n=e.target.querySelector("#email").value||"",i=e.target.querySelector("#bio").value||"";console.log("프로필 업데이트:",{username:t,email:n,bio:i}),t&&(r.updateProfile({username:t,email:n,bio:v?i+" "+i:i}),alert("프로필이 업데이트되었습니다!"),a.navigate("/profile"))}});a.init();
