jQuery(document).ready(function($) {
$('#add_assemblage_idc_maindiv').remove();
$('#add_add_assemblage_idc').click(function () {
$( '#add_add_assemblage_idc' ).removeClass("list-group-item add-layer").addClass("list-group-item add-layer disabled");
    var add_assemblage_idc_main_div = document.createElement("li");
        add_assemblage_idc_main_div.className = "list-group-item";
        add_assemblage_idc_main_div.setAttribute("id", "add_assemblage_idc_maindiv");
        add_assemblage_idc_main_div.innerHTML = ('<div class="nom-calque text-left">Asemblage 12-45 1777</div><div class="btn btn-circle btn-xs loc-wkt" id="set_center_add_assemblage_idc"><span class="philicon philicon-Logo-header"></span></div><div id="stop-swipe-add_assemblage_idc" class="swipe-main disabled"><div class="swipe-wrapper swipe_off"><span class="swipe-btn"></span></div></div><div id="start-swipe-add_assemblage_idc" class="swipe-main"><div class="swipe-wrapper"><span class="swipe-btn"></span></div></div><div id="slider_add_assemblage_idc"><span class="ui-slider-handle"></span></div><div id="add_assemblage_idc_rm" class="glyphicon glyphicon-remove-circle rm-layer"></div><div id="set_visibility_add_assemblage_idc" class="layer-opacity on"></div>');
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
var div_before = document.getElementById("add_add_assemblage_idc");
    document.getElementById("ol-dynamique-layer");
    insertAfter(div_before, add_assemblage_idc_main_div);
          map = $('.openlayers-map').data('openlayers');
    var add_assemblage_idc = new OpenLayers.Layer.TMS(
        "Asemblage 12-45 1777",
        "https://sous-paris.com/geoserver/gwc/service/tms/",
        {
            layername: "Wokspace:LayerName",
            type: "png",
            alpha: true,
            transitionEffect: 'resize',
            isBaseLayer: false,
            displayInLayerSwitcher: false,
            // set if different than the bottom left of map.maxExtent
            tileOrigin: new OpenLayers.LonLat(-20037508.34, -20037508.34)
        });
    map.openlayers.addLayers([add_assemblage_idc]);
    add_assemblage_idc.setZIndex( 100 );
              map.openlayers.panRatio     = 100;
            map.openlayers.panDuration     = 100;
            map.openlayers.zoomDuration = 100;
        var position_add_assemblage_idc     = new OpenLayers.LonLat(SetMapCenter);
        var zoom_add_assemblage_idc         = 17;
$('#set_center_add_assemblage_idc').click(function () {
                map.openlayers.setCenter(position_add_assemblage_idc, zoom_add_assemblage_idc);
});
$(function() {
      $( "#slider_add_assemblage_idc" ).slider({
      range: "min",
      min: 0,
      value: 100,
      slide: function(e, ui) {
          add_assemblage_idc.setOpacity(ui.value / 100);
          $( "#amount" ).val( ui.value );
          }
      });
      $("#amount" ).val($( "#slider_add_assemblage_idc" ).slider( "value" ) );
  });
// SWIPE
    swipe = new OpenLayers.Control.Swipe(add_assemblage_idc);
    map.openlayers.addControl(swipe);
    $('#start-swipe-add_assemblage_idc').click(function () {
$(this).addClass('disabled').siblings().removeClass('disabled');
        swipe.deactivate();
        swipe.activate();
});
    $('#stop-swipe-add_assemblage_idc').click(function () {
$(this).addClass('disabled').siblings().removeClass('disabled');
        swipe.deactivate();
});
$('#add_assemblage_idc_rm').click(function () {
$('#add_assemblage_idc_maindiv').remove();
map.openlayers.removeLayer(add_assemblage_idc);
$( '#add_add_assemblage_idc' ).removeClass("list-group-item add-layer disabled").addClass("list-group-item add-layer");
});
    $('#set_visibility_add_assemblage_idc').click(function () {
 if ($('#set_visibility_add_assemblage_idc').hasClass('on')){
    add_assemblage_idc.setVisibility (false);
    $('#set_visibility_add_assemblage_idc').removeClass("layer-opacity on").addClass("layer-opacity off");
    }
else {
        add_assemblage_idc.setVisibility (true);
    $('#set_visibility_add_assemblage_idc').removeClass("layer-opacity off").addClass("layer-opacity on");
}
});
});
$});
