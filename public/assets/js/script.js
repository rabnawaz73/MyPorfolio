$(document).ready(function () {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    window.addEventListener("load", function () {
      preloader.classList.add("hidden");
      setTimeout(function () {
        preloader.style.display = "none";
      }, 450);
    });
  }

  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    if (window.scrollY > 60) {
      document.querySelector("#scroll-top").classList.add("active");
    } else {
      document.querySelector("#scroll-top").classList.remove("active");
    }

    $("section").each(function () {
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let top = $(window).scrollTop();
      let id = $(this).attr("id");

      if (top > offset && top < offset + height) {
        $(".navbar ul li a").removeClass("active");
        $('.navbar').find(`[href="#${id}"]`).addClass("active");
      }
    });
  });

  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });

  $("#contact-form").submit(function (event) {
    const submitBtn = $("#contact-form .btn.primary");
    submitBtn.addClass("loading");
    submitBtn.prop("disabled", true);

    emailjs.init("5kwhexi0O7lOYzEK8");

    emailjs.sendForm("service_eoe0hf6", "template_4mz71fo", "#contact-form").then(
      function () {
        document.getElementById("contact-form").reset();
        submitBtn.removeClass("loading");
        submitBtn.prop("disabled", false);
        alert("Form submitted successfully.");
      },
      function () {
        submitBtn.removeClass("loading");
        submitBtn.prop("disabled", false);
        alert("Form submission failed. Please try again.");
      }
    );
    event.preventDefault();
  });

});

var typed = new Typed(".typing-text", {
  strings: [
    "Flutter development",
    "cloud development",
    "AI products",
  ],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 800,
});

VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 12,
});

const srtop = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 900,
  reset: false,
});

srtop.reveal(".home .content", { delay: 200 });
srtop.reveal(".home .image", { delay: 300 });
srtop.reveal(".about-grid .about-card", { interval: 150 });
srtop.reveal(".skills-grid .skill-card", { interval: 120 });
srtop.reveal(".featured-projects .featured-card", { interval: 140 });
srtop.reveal(".projects-subtitle", { delay: 200 });
srtop.reveal(".experience-grid .exp-card", { interval: 140 });
srtop.reveal(".projects-grid .project-card", { interval: 120 });
srtop.reveal(".awards-grid .award-card", { interval: 120 });
srtop.reveal(".leadership-grid .lead-card", { interval: 120 });
srtop.reveal(".education-grid .edu-card", { interval: 120 });
srtop.reveal(".cert-group", { interval: 120 });
srtop.reveal(".contact-modern", { delay: 200 });
srtop.reveal(".stack-strip", { delay: 200 });
