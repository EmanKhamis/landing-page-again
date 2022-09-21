// built a navbar
for (let i = 2; i < 6; i++) {
  let ulist = document.querySelector("ul");
  let sec = document.createElement("section");
  sec.className = "your-active-class";
  sec.id = "section1";
  sec.setAttribute("data-nav", `section ${i}`);
  let liList1 = document.createElement("li");
  let anchor = document.createElement("a");
  anchor.className = "menu__link";
  anchor.setAttribute("href", `#section${i}`);
  anchor.textContent = sec.getAttribute("data-nav");

  // append ankour to li
  liList1.appendChild(anchor);
  //append li to ul
  ulist.appendChild(liList1);
}

// get section 1
let section1 = document.getElementById("section1");
console.log(section1);

// get rect
let rect = section1.getBoundingClientRect();
console.log(rect.top);

// select section
let section = document.getElementsByTagName("section");

// select all sections
let allSections = document.querySelectorAll("section");
// select all links
let allLinks = document.querySelectorAll("a");
allLinks.className = "active-link";
console.log(allLinks[1]);

// scroll event
window.addEventListener("scroll", function () {
  for (let i = 0; i < allSections.length; i++) {
    if (
      allSections[i].getBoundingClientRect().top >= 0 &&
      allSections[i].getBoundingClientRect().top < 450
    ) {
      allSections[i].classList.add("your-active-class");
      allLinks[i].classList.add("active-link");
    } else {
      allSections[i].classList.remove("your-active-class");
      allLinks[i].classList.remove("active-link");
    }
  }
});
let sec = document.querySelector("section");
// get active link
let activeLink = document.querySelector(`[href="#${section.id}"]`);

for (let i = 0; i < allLinks.length; i++) {
  allLinks[i].addEventListener("click", function (eve) {
    eve.preventDefault();
    allSections[i].scrollIntoView({
      behavior: "smooth",
    });
  });
}
