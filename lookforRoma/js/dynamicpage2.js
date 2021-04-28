$(function () {
  var newHash = "",
    $mainContent = $("#main-content2"),
    $pageWrap = $("#page-wrap2"),
    baseHeight = 0,
    $el;
  $pageWrap.height($pageWrap.height());
  baseHeight = $pageWrap.height() - $mainContent.height();
  $("ul").delegate("a", "click", function () {
    window.location.hash = $(this).attr("href");
    return false;
  });
  $(window).bind("hashchange", function () {
    newHash = window.location.hash.substring(1);
    if (newHash) {
      $mainContent.find("#guts2").fadeOut(0, function () {
        $mainContent.hide().load(newHash + " #guts2", function () {
          $mainContent.fadeIn(0, function () {
            $pageWrap.animate({
              height: baseHeight + $mainContent.height() + "px",
            });
          });
        });
      });
    }
  });

  $(window).trigger("hashchange");
});
