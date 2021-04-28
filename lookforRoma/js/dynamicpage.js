$(function () {
  var newHash = "",
    $mainContent = $("#main-content"),
    $pageWrap = $("#page-wrap"),
    baseHeight = 500,
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
      $mainContent.find("#guts").fadeOut(500, function () {
        $mainContent.hide().load(newHash + " #guts", function () {
          $mainContent.fadeIn(500, function () {
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
