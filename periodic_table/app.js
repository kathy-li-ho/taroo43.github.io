$(document).ready(function() {

  function requestFeed(){
    $.ajax({
      url: './periodic-table.json',
      dataType: "json",
      success: function(data){
        var information = _.map(data, dataMarkup);
        $('#example').html(information);
      }
    });
  }
  function dataMarkup(e) {
          return `<li><a href="${e.wikipedia}" class="${e.classes}">${e['atomic number']}, ${e['atomic symbol']}, ${e.name}, ${e.category}</a></li>`;
        }
  requestFeed();
});
