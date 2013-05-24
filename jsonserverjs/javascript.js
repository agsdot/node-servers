$(document).ready(function() {

$.ajax({
  url: "http://localhost:1234",
  method: 'get',
  jsonpCallback: 'callback',
  dataType: 'jsonp',
  success: function(data) {
    return Morris.Bar({
      element: 'bar-example',
      data: data,
      xkey: 'title',
      stacked: false,
      ykeys: ['value'],
      labels: ['Githubish']
    });
  }
});


});