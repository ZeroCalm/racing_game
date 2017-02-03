//
// $(document).ready(function() {
//
//   var p1 = $('.p1 li.current');
//   var p2 = $('.p2 li.current');
//
//   document.addEventListener("keydown", (event) => {
//     const key = event.which;
//
//     if (key === 65) {
//       var next = p1.next();
//       p1.removeClass('current');
//       p1.next().addClass('current');
//       p1 = next;
//
//     } else {
//       var next = p2.next();
//       p2.removeClass('current');
//       p2.next().addClass('current');
//       p2 = next;
//     }
//   });
//
// });


$(document).ready(function() {

  let p1 = $('.p1 li.current');
  let p2 = $('.p2 li.current');

  document.addEventListener("keydown", function(event){
    const key = event.which;

    if (key === 65) {
      const next = p1.next();
      p1.removeClass('current');
      p1.next().addClass('current');
      p1 = next;

    } else {
      const next = p2.next();
      p2.removeClass('current');
      p2.next().addClass('current');
      p2 = next;
    }
  });

});
