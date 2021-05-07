(()=>{"use strict";function e(){let e=document.createElement("div");return e.classList.add("title"),e.textContent="DENIZEN",e}function t(){let e=document.createElement("div");e.classList.add("slogan"),document.createElement("div");let t=document.createElement("div");return e.appendChild(t),t.textContent="* Local flair from local fare *",e}function n(e){for(;"navbar"!==e.lastChild.id;)e.removeChild(e.lastChild)}!function(){const n=document.getElementById("content");n.appendChild(function(){let e=document.createElement("div");e.setAttribute("id","navbar"),e.classList.add("navbar");let t=document.createElement("div");t.setAttribute("id","home"),t.classList.add("navItems"),t.textContent="Home",e.appendChild(t);let n=document.createElement("div");n.setAttribute("id","about"),n.classList.add("navItems"),n.textContent="About",e.appendChild(n);let d=document.createElement("div");d.setAttribute("id","menu"),d.classList.add("navItems"),d.textContent="Menu",e.appendChild(d);let a=document.createElement("div");return a.setAttribute("id","info"),a.classList.add("navItems"),a.textContent="Location + Info",e.appendChild(a),e}()),n.appendChild(e()),n.appendChild(t())}();let d=document.getElementById("content");home.addEventListener("click",(()=>{n(d),d.appendChild(e()),d.appendChild(t())})),about.addEventListener("click",(()=>{n(d),d.appendChild(function(){let e=document.createElement("div");e.classList.add("about");let t=document.createElement("div");t.classList.add("aboutText"),t.setAttribute("id","aboutText");let n=document.createElement("div");n.classList.add("aboutText");let d=document.createElement("img");return d.setAttribute("src","./images/kitchen.jpg"),d.setAttribute("height","400"),d.setAttribute("width","600"),d.setAttribute("alt","kitchen"),d.classList.add("kitchenImage"),e.appendChild(t),e.appendChild(d),e.appendChild(n),t.textContent="|| denizen (noun). a person who inhabits a particular place. ||",n.textContent="The name Denizen pays homage to those who claim a local spot as their own.\n                                Located in the city of Portland, Maine and it's compelling food scene,\n                                we offer the environment of everyone's favorite \n                                local joint along with locally - sourced ingredients from surrounding farms.\n                                Since our modest beginnings in 2008, Denizen has served as a spot for\n                                locals and travelers alike.",e}())})),menu.addEventListener("click",(()=>{n(d),d.appendChild(function(){let e=document.createElement("div");e.setAttribute("id","menuPage"),e.classList.add("menuPage");let t=document.createElement("div");t.classList.add("menuItems"),t.textContent="Tropical Lobster Rolls";let n=document.createElement("div");n.classList.add("menuDescription"),t.appendChild(n),n.textContent="Maine lobster from South Bristol Co-op served on buttered dinner roll w/ lemon and orange zest aioli",e.appendChild(t);let d=document.createElement("div");d.classList.add("menuItems"),d.textContent="Venison Tenderloin w/ Spiced Cranberry Relish";let a=document.createElement("div");a.classList.add("menuDescription"),d.appendChild(a),a.textContent="Venison tenderloin sauteed in olive oil, thyme, salt and pepper topped with cranberry relish spiced with ginger, cloves, cinnamon and currants",e.appendChild(d);let i=document.createElement("div");i.classList.add("menuItems"),i.textContent="Corn-Fried Oysters";let s=document.createElement("div");s.classList.add("menuDescription"),i.appendChild(s),s.textContent="Damariscotta Oysters fried in coarse-ground cornmeal with cayenne pepper",e.appendChild(i);let l=document.createElement("div");l.classList.add("menuItems"),l.textContent="Dev's Fish n' Chips";let r=document.createElement("div");r.classList.add("menuDescription"),l.appendChild(r),r.textContent="Haddock from Pepper's Landing, Brunswick, ME. Fried in house-made batter w/ dijon mustard, beer and pepper served with hand-cut Buck Farms russet potato fries",e.appendChild(l);let o=document.createElement("div");o.classList.add("menuItems"),o.textContent="Grilled Chicken n' Cheddar Salad";let c=document.createElement("div");c.classList.add("menuDescription"),o.appendChild(c),c.textContent="Bisson Farms chicken grilled on a romaine and arugula salad. Tossed with shaved cheddar, thinly sliced apple, and roasted red peppers",e.appendChild(o);let m=document.createElement("div");m.classList.add("menuItems"),m.textContent="Chili w/ Blue Cheese Gougeres";let p=document.createElement("div");p.classList.add("menuDescription"),m.appendChild(p),p.textContent="Hearty chili w/ Bisson Farms ground beef with browned gougeres garnished with crumbled blue cheese and fresh cilantro",e.appendChild(m);let u=document.createElement("div");u.classList.add("menuItems"),u.textContent="Double Cheddar Grilled Cheese Sandwich";let h=document.createElement("div");h.classList.add("menuDescription"),u.appendChild(h),h.textContent="Cheddar bread from Standard Baking Co., grilled with excellent cheddar seasoned with baby arugula",e.appendChild(u);let C=document.createElement("div");C.classList.add("menuItems"),C.textContent="Chipotle Bacon Burger";let v=document.createElement("div");return v.classList.add("menuDescription"),C.appendChild(v),v.textContent="A local favorite. Locally-sourced ground beef mixed with adobo sauce, garlic, salt and pepper, served on a brioche bun with chipotle sauce",e.appendChild(C),e}())})),info.addEventListener("click",(()=>{n(d),d.appendChild(function(){let e=document.createElement("div");e.classList.add("locationContainer");let t=document.createElement("div"),n=document.createElement("img");n.setAttribute("src","./images/portland.png"),n.setAttribute("height","600"),n.setAttribute("width","700"),n.setAttribute("alt","portland"),n.classList.add("portland"),t.appendChild(n);let d=document.createElement("div");d.classList.add("informationContainer");let a=document.createElement("div");a.classList.add("addressContainer");let i=document.createElement("img");i.setAttribute("src","./images/ping.png"),i.setAttribute("height","50px"),i.setAttribute("width","50px");let s=document.createElement("div");s.classList.add("address"),s.textContent="555 Fore Street, Portland, Maine";let l=document.createElement("div");l.classList.add("addressContainer");let r=document.createElement("img");r.setAttribute("src","./images/phoneIcon.png"),r.setAttribute("height","40px"),r.setAttribute("width","40px");let o=document.createElement("div");o.classList.add("address"),o.textContent="123-555-1234";let c=document.createElement("div");c.classList.add("addressContainer");let m=document.createElement("img");m.setAttribute("src","./images/hoursIcon.png"),m.setAttribute("height","50px"),m.setAttribute("width","50px");let p=document.createElement("div");return p.classList.add("address"),p.textContent="Mon-Thurs: 12p-11p Fri-Sun:11a-11p",a.appendChild(i),a.appendChild(s),l.appendChild(r),l.appendChild(o),c.appendChild(m),c.appendChild(p),d.appendChild(a),d.appendChild(l),d.appendChild(c),e.appendChild(t),e.appendChild(d),e}())}))})();