// 「Webアプリ」としてホーム画面に追加された場合（iPhone では Safari とログイン状態が別になる）の案内。
(function () {
  var standalone = window.navigator.standalone === true ||
    (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches);
  if (standalone) document.getElementById('webapp-note').hidden = false;
})();
