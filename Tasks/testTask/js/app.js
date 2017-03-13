$(window).ready(function(){
   $('button').click(function(){
       var val = $('textarea').val();
       var txt1 = '<div class="comment"> ' +
           '<div><strong> User </strong>' +
           '<span style="color:rgb(128,128,128);font-size: smaller">just now </span></div>' +
           '<div class="bubble">';
       $('.last').before(txt1 + val + '</div></div>');
       $('textarea').val('');
   })
});
