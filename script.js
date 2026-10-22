$(function () {
  // Current year in footer
  $("#year").text(new Date().getFullYear());

  // Smooth-scroll to section links, then close mobile navigation
  $('a.nav-link, a.navbar-brand, a[href^="#"]').on("click", function (event) {
    const target = $(this).attr("href");
    if (target && target.length > 1 && $(target).length) {
      event.preventDefault();
      $("html, body").stop().animate({
        scrollTop: $(target).offset().top - 76
      }, 550);
      $(".navbar-collapse").collapse("hide");
    }
  });

  // Highlight the current navigation section while scrolling
  const sections = $("main section[id]");
  $(window).on("scroll", function () {
    const position = $(this).scrollTop() + 120;
    sections.each(function () {
      const top = $(this).offset().top;
      const bottom = top + $(this).outerHeight();
      if (position >= top && position < bottom) {
        const id = $(this).attr("id");
        $("#mainNav .nav-link").removeClass("active");
        $('#mainNav .nav-link[href="#' + id + '"]').addClass("active");
      }
    });
  });

  // Subtle reveal animation for cards
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    $(".surface, .skill-card, .project-card, .timeline-card").each(function () {
      $(this).addClass("reveal");
      observer.observe(this);
    });
  }
});
