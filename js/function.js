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

function ShareButton()
{
    
         document.getElementById('OptionConfig').onclick(function() 
                {
                    FB.ui
                        ({
                        method: 'share',
                        display: 'popup',
                        href: 'https://developers.facebook.com/docs/',
                    }, function(response){});
                }   
         )
             window.fbAsyncInit = function()
            {
                FB.init
                ({
                    appId      : '453319881676584',
                    xfbml      : true,
                    version    : 'v2.9'
                });
                FB.AppEvents.logPageView(); 
            };

                (function(d, s, id){
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) {return;}
                    js = d.createElement(s); js.id = id;
                    js.src = "//connect.facebook.net/en_US/sdk.js";
                    fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));

}

function ourRandomRange(ourMin, ourMax) 
{
  //Generating random integers between the min and max inclusive.
  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}



function StringMatch(Statement,Target)
{
    // Setup
    var testString = Statement;

    //We can use RegExp object class to make match command line accept variable values.
    
    var re = new RegExp(Target, 'g');
    alert(testString.match(re));


//************************************************************** */
   
    // Example
    var expressionToGetSoftware = /software/gi;
    var softwareCount = testString.match(expressionToGetSoftware).length;
    

    // Only change code below this line.

    var expression = /and/gi;  // Change this Line

    // Only change code above this line

    // This code counts the matches of expression in testString
    var andCount = testString.match(expression).length;
    //Due to .length, it will give out amount of strings matched in the statment.
}
