const targets = document.querySelectorAll("img");
const h1 = document.querySelector("h1");

const lazyLoad = (target) => {
  let tick = false;

  const io = new IntersectionObserver((entries, observer) => {
    console.log("entries", entries);

    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        tick = !tick;
        console.log("tick", tick);

        const img = entry.target;
        console.log("entry", entry);
        console.log("observer", observer);
        const src = img.getAttribute("data-src");

        img.setAttribute("src", src);

        if (tick) {
          img.classList.remove("fade-out");
          img.classList.add("fade-in");
        } else {
          img.classList.remove("fade-in");
          img.classList.add("fade-out");
        }

        // observer.disconnect();
      }
    });
  });

  io.observe(target);
};

targets.forEach(lazyLoad);
