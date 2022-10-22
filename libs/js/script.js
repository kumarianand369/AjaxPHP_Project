// Preloader Script

let timeTable;
const myFunction = () => {
  timeTable = setTimeout(showPage, 1000);
}
const showPage = () => {
  document.getElementById('table').style.display = 'block';
  document.getElementById('preloader').style.display = 'none';
}

// Earthquakes Script:
$('#earthquakesBtn').click(function () {
  $.ajax({
    url: 'libs/php/earthquakes.php',
    type: 'GET',
    dataType: 'json',
    success: function (result) {
      $('#results').html('');
      $.each(result, function (i, item) {
        $.each(item, function (index, value) {

            $('#results').append('Date Time: ' + value.datetime + '<br/>')
			      $('#results').append('Depth: ' + value.depth + '<br/>')
			      $('#results').append('Lng: ' + value.lng + '<br/>')
		      	$('#results').append('SRC: ' + value.src + '<br/>')
            $('#results').append('Equid: ' + value.eqid + '<br/>')
		     
          })
      })
    }
  })
});

// Hierarchy Script
$('#hierarchyBtn').click(function () {
 // alert("test");
  $.ajax({
    url: 'libs/php/hierarchy.php',
    type: 'GET',
    dataType: 'json',
    success: function (result) {
      $('#results').html('');
      $.each(result, function (i, item) {
        $.each(item, function (index, value) {

          $('#results').append('ToponymName: ' + value.toponymName + '<br/>')
          $('#results').append('GeonameId: ' + value.geonameId + '<br/>')
            $('#results').append('Population: ' + value.population + '<br/>')
            $('#results').append('Astergdem: ' + value.astergdem + '<br/>')
           
           
          })
      })
    }
  })
});

// Country Subdivsion Script
$('#countrySubBtn').click(function () {
  $.ajax({
    url: 'libs/php/countrySubdivision.php',
    type: 'GET',
    dataType: 'json',
    success: function (result) {
      $('#results').html('');
      $.each(result, function (i, item) {
        $.each(item, function (index, value) {
            
            $('#results').append('Code: ' + value.code + '<br/>')
			      $('#results').append('Code level: ' + value.level + '<br/>')
			      $('#results').append('Code type: ' + value.type + '<br/>')
		      
		     
          })
      })
    }
  })
});

