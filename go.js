// SORYN 入口ページの振り分け（画面を描く前に実行する）。
// ・ふだん（ホーム画面・Dock のアイコンから開いたとき）：すぐ SORYN の本番ページへ進む。
//   アプリとして開くので、ブラウザの枠は出ない（最初の1回だけ、アプリの中で claude.ai にログインする）。
// ・設定用（?setup を付けて開いたとき）：案内を表示する。ホーム画面に追加されるアドレスから ?setup を外しておく。
// 行き先はこのファイルに固定（外から行き先を変えられないようにする）。
(function () {
  var APP = 'https://claude.ai/artifact/CJvSWTnB9JkKLFFefg5f6g';
  if (/(^|[?&])setup(=|&|$)/.test(location.search.slice(1))) {
    try { history.replaceState(null, '', location.pathname); } catch (e) { /* 古いブラウザでは何もしない */ }
    return;
  }
  document.documentElement.className = 'go';
  location.replace(APP);
})();
