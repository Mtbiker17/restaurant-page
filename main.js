(()=>{"use strict";function e(){let e=document.createElement("div");return e.classList.add("title"),e.textContent="DENIZEN",e}function t(){let e=document.createElement("div");e.classList.add("slogan");let t=document.createElement("div"),n=document.createElement("div");return e.appendChild(t),e.appendChild(n),t.textContent="|| denizen (noun). a person who inhabits a particular place.",n.textContent="* Local flair from local fare *",e}function n(e){for(;"navbar"!==e.lastChild.id;)e.removeChild(e.lastChild)}!function(){const n=document.getElementById("content");n.appendChild(function(){let e=document.createElement("div");e.setAttribute("id","navbar"),e.classList.add("navbar");let t=document.createElement("div");t.setAttribute("id","home"),t.classList.add("navItems"),t.textContent="Home",e.appendChild(t);let n=document.createElement("div");n.setAttribute("id","about"),n.classList.add("navItems"),n.textContent="About",e.appendChild(n);let d=document.createElement("div");d.setAttribute("id","menu"),d.classList.add("navItems"),d.textContent="Menu",e.appendChild(d);let i=document.createElement("div");return i.setAttribute("id","info"),i.classList.add("navItems"),i.textContent="Location + Info",e.appendChild(i),e}()),n.appendChild(e()),n.appendChild(t())}();let d=document.getElementById("content");home.addEventListener("click",(()=>{n(d),d.appendChild(e()),d.appendChild(t()),console.log("home clicked")})),about.addEventListener("click",(()=>{n(d),d.appendChild(function(){let e=document.createElement("div");e.classList.add("about");let t=document.createElement("div");return t.classList.add("aboutText"),t.setAttribute("id","aboutText"),e.appendChild(t),t.textContent="We Are Good, I Promise!",e}()),console.log("about clicked")})),menu.addEventListener("click",(()=>{n(d),d.appendChild(function(){let e=document.createElement("div");e.setAttribute("id","menuPage"),e.classList.add("menuPage");let t=document.createElement("div");t.setAttribute("id","itemOne"),t.classList.add("menuItems"),t.textContent="itemOne",e.appendChild(t);let n=document.createElement("div");n.setAttribute("id","itemTwo"),n.classList.add("menuItems"),n.textContent="itemTwo",e.appendChild(n);let d=document.createElement("div");d.setAttribute("id","itemThree"),d.classList.add("menuItems"),d.textContent="itemThree",e.appendChild(d);let i=document.createElement("div");return i.setAttribute("id","itemFour"),i.classList.add("menuItems"),i.textContent="itemFour",e.appendChild(i),e}()),console.log("clicked")})),info.addEventListener("click",(()=>{console.log("clicked")}))})();