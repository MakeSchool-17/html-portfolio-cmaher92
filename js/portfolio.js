$( document ).ready(function() {
  $("#gallery").justifiedGallery({
    rowHeight : 200,
    lastRow : 'justify',
    margins : 3,
    randomize: true
  }).on('jg.complete', function () {
      $('#gallery a').swipebox({
        hideBarsDelay : false
      });
  });
});
