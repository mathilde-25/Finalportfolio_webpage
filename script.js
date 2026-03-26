document.addEventListener("DOMContentLoaded", () => { //run code when html fully loaded


  /* --------------------------------------------------
     Fade + slide animation for my images
  -------------------------------------------------- */
  const fadeElements = document.querySelectorAll(".fade-target");

  const observer = new IntersectionObserver((entries)=>{ //scroll watcher
    entries.forEach((entry, index) => { // for each entry (element watched, index is pos 0,1,2,3..)
      
      if (entry.isIntersecting){
        setTimeout(()=>{
        entry.target.classList.add("fade-in");
        }, index * 150); // first element 0ms delay, 2nd 150ms, 3rd 300ms so appear one by one
      }
  });

}, {
  threshold: 0.6 // triggers when 60% is visible
});

  
    fadeElements.forEach(el => { // for each fade element, observe
      observer.observe(el);
    });
});