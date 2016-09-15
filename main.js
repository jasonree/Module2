var myAPI = "AIzaSyCWy7rPbHfl3O6pPL0Pv0-mGIsGed7_p4A";
var goBtn = $("#goButton");
var input = $("#city");


$('form').submit(function (event) {
    event.preventDefault();
    if (input.val().length !== 0) {
        var city = input.val();
        console.log(city);
        input.val('');
        var cityEdit = city.split(' ').join('%20');
        var geoLocation = "https://maps.googleapis.com/maps/api/geocode/json?address=" + cityEdit + "&key=" + myAPI;
        
        $.ajax({
         type: 'GET',
         url: geoLocation,
         success: function(data) {
             console.log('success', data)
         }
})
}});
