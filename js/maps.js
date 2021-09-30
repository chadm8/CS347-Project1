let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("kangnammap"), {
    center: { lat: 38.44003, lng: -78.85615 },
    zoom: 18,
  });
  map = new google.maps.Map(document.getElementById("tacoselprimomap"), {
    center: { lat: 38.43979, lng: -78.8558 },
    zoom: 18,
  });
  map = new google.maps.Map(document.getElementById("smokinqmap"), {
    center: { lat: 38.53796, lng: -78.77045 },
    zoom: 18,
  });
  map = new google.maps.Map(document.getElementById("tacomexmap"), {
    center: { lat: 38.4231, lng: -78.89138 },
    zoom: 18,
  });
  map = new google.maps.Map(document.getElementById("lataurinamap"), {
    center: { lat: 38.45949, lng: -78.85766 },
    zoom: 18,
  });
  map = new google.maps.Map(document.getElementById("scottysmap"), {
    center: { lat: 38.4328, lng: -78.8823 },
    zoom: 18,
  });
}
