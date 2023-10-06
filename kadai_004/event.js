// HTMLドキュメントが読み込み完了した際に、「loadイベントが発生しました」とコンソールに出力
  $(window).on('load', function(){
    console.log('loadイベントが発生しました');
  });


// 画面スクロールした際に、「scrollイベントが発生しました」とコンソールに出力
  $(window).on('scroll', function(){
    console.log('scrollイベントが発生しました');
  });
