$(document).ready(function(){

  $('#list').on('submit', function(){

      var item = $('#list input');
      var search = {item: item.val()};
      console.log(search)
      $.ajax({
        type: 'POST',
        url: '/search',
        data: search,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });

      return false;

  });

  $('.searchItems').on('click', function(){

      var item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/search/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});
