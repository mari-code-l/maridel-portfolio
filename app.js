(function($){
    var createMap = function(coords, zoom) {
      var coordsParts = coords.split( "," );
      if(typeof google !== "undefined") {
        var options = {
          zoom: zoom,
          styles: [
    { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{ color: "#263c3f" }],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [{ color: "#6b9a76" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#38414e" }],
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [{ color: "#212a37" }],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [{ color: "#9ca5b3" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ color: "#746855" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{ color: "#1f2835" }],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [{ color: "#f3d19c" }],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [{ color: "#2f3948" }],
    },
    {
      featureType: "transit.station",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#17263c" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{ color: "#515c6d" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.stroke",
      stylers: [{ color: "#17263c" }],
    },
  ],
          center: new google.maps.LatLng(coordsParts[0], coordsParts[1]),
          mapTypeId: google.maps.MapTypeId.ROADMAP
              };	
              var infowindow = new google.maps.InfoWindow({
              content: '<strong>I am here!</strong> <br> Munich, Germany'
              });
        var map = new google.maps.Map(document.getElementById( "map" ), options);	
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng( coordsParts[0], coordsParts[1] ),
          map: map
              });
              marker.addListener('click', function() {
              infowindow.open(map, marker);
              });
      }
    };
    
    $(function() {
      $( "li", "#places").on("click", function(){
        var $li = $(this);
        $li.addClass("selected" ).siblings().removeClass("selected");
        createMap($li.data( "coords" ), $li.data( "zoom" ));
      });
      $("li", "#places" ).eq( 0 ).trigger( "click");
    });
  })(jQuery);
  