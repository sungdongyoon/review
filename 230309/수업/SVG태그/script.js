$(document).ready(function () {
  // Create Function
  function randomColor() {
      let letters = '0123456789ABCDEF'.split('');
      let color = '#';
      for (let i = 0; i < 6; i++)
          color += letters[Math.round(Math.random() * 15)];
      return color;
  }

  // Create Variable
  let canvas = document.getElementById('map_image');
  let paper = Raphael(canvas, 500, 716);

  $.each(koreaMapPathData, function (index, item) {
      // Create Path
      let path = paper.path(item['d']);

      // Stroke Path
      path.attr('stroke', item['stroke']);

      // Fill Path
      if (item['fill'] != 'none') {
          path.attr('fill', randomColor());
      }
  });
});