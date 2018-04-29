$(document).ready(function(){

  $('form').on('submit', function(){
      
      var item = $('form input');
      var search = {item: item.val()};
      console.log(wanted_item)
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

  $('li').on('click', function(){

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
