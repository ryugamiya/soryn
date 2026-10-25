// ホーム画面・Dock のアイコンから開いたときは、そのまま SORYN の画面へ進む。
// Safari で普通に開いたときは「ホーム画面に追加」できるよう、この入口ページを表示したままにする。
(function () {
  var standalone = window.navigator.standalone === true ||
    (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches);
  if (!standalone) return;
  document.getElementById('guide').hidden = true;
  document.getElementById('opening').hidden = false;
  location.replace(document.getElementById('open').href);
})();
