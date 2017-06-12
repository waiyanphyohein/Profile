function initMap()
{
    var map ;
    // Constructor creates a new map - only center and zoom are required.
    //Below line of code is an extra.
    //document.getElementById('demo').innerHTML = "Hi and Hello";
    map = new google.maps.Map(document.getElementById('map'),{
        center: {lat: 40.7413549, lng: -73.9980244},
        zoom: 13
    });
    var Somet = map.getCenter();
   
}  
    //THIS PROGRAM WILL PINPOINT THE GOOGLE MAP LOCATION THROUGH WEB BROWSER. GOOGLE API IS REQUIRED TO BE ENABLE OTHERWISE WILL NOT SHOW THE LOCATION OR A MAP.

