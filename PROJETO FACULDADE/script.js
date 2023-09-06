document.addEventListener("DOMContentLoaded", function() {
    const sobreMimLink = document.querySelector('a[href="#sobre-mim"]');
  
    sobreMimLink.addEventListener("click", function(event) {
      event.preventDefault(); // Impede o comportamento padrão do link
  
      const sobreMimSection = document.getElementById("sobre-mim");
      sobreMimSection.scrollIntoView({ behavior: "smooth" });
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const sobreMimLink = document.querySelector('a[href="##Minhas_Formações"]');
  
    sobreMimLink.addEventListener("click", function(event) {
      event.preventDefault(); // Impede o comportamento padrão do link
  
      const sobreMimSection = document.getElementById("Minhas_Formações");
      sobreMimSection.scrollIntoView({ behavior: "smooth" });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const sobreMimLink = document.querySelector('a[href="#Portfolio"]');
  
    sobreMimLink.addEventListener("click", function(event) {
      event.preventDefault(); // Impede o comportamento padrão do link
  
      const sobreMimSection = document.getElementById("Portfolio");
      sobreMimSection.scrollIntoView({ behavior: "smooth" });
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const sobreMimLink = document.querySelector('a[href="#contato"]');
  
    sobreMimLink.addEventListener("click", function(event) {
      event.preventDefault(); // Impede o comportamento padrão do link
  
      const sobreMimSection = document.getElementById("Portfolio");
      sobreMimSection.scrollIntoView({ behavior: "smooth" });
    });
  });

  