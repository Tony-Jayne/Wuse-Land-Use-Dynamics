var wms_layers = [];


        var lyr_GoogleEarth_0 = new ol.layer.Tile({
            'title': 'Google Earth',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ResidentialEstates_1 = new ol.format.GeoJSON();
var features_ResidentialEstates_1 = format_ResidentialEstates_1.readFeatures(json_ResidentialEstates_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidentialEstates_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidentialEstates_1.addFeatures(features_ResidentialEstates_1);
var lyr_ResidentialEstates_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidentialEstates_1, 
                style: style_ResidentialEstates_1,
                popuplayertitle: "Residential Estates",
                interactive: true,
                title: 'Residential Estates'
            });
var format_Commercial_2 = new ol.format.GeoJSON();
var features_Commercial_2 = format_Commercial_2.readFeatures(json_Commercial_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Commercial_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Commercial_2.addFeatures(features_Commercial_2);
var lyr_Commercial_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Commercial_2, 
                style: style_Commercial_2,
                popuplayertitle: "Commercial",
                interactive: true,
                title: 'Commercial'
            });
var format_School_3 = new ol.format.GeoJSON();
var features_School_3 = format_School_3.readFeatures(json_School_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_School_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_School_3.addFeatures(features_School_3);
var lyr_School_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_School_3, 
                style: style_School_3,
                popuplayertitle: "School",
                interactive: true,
                title: 'School'
            });
var format_2020Feature_4 = new ol.format.GeoJSON();
var features_2020Feature_4 = format_2020Feature_4.readFeatures(json_2020Feature_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2020Feature_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2020Feature_4.addFeatures(features_2020Feature_4);
var lyr_2020Feature_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2020Feature_4, 
                style: style_2020Feature_4,
                popuplayertitle: "2020 Feature",
                interactive: true,
                title: '<img src="styles/legend/2020Feature_4.png" /> 2020 Feature'
            });
var format_2015Feature_5 = new ol.format.GeoJSON();
var features_2015Feature_5 = format_2015Feature_5.readFeatures(json_2015Feature_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2015Feature_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2015Feature_5.addFeatures(features_2015Feature_5);
var lyr_2015Feature_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2015Feature_5, 
                style: style_2015Feature_5,
                popuplayertitle: "2015 Feature",
                interactive: true,
                title: '<img src="styles/legend/2015Feature_5.png" /> 2015 Feature'
            });
var format_2005Feature_6 = new ol.format.GeoJSON();
var features_2005Feature_6 = format_2005Feature_6.readFeatures(json_2005Feature_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2005Feature_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2005Feature_6.addFeatures(features_2005Feature_6);
var lyr_2005Feature_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2005Feature_6, 
                style: style_2005Feature_6,
                popuplayertitle: "2005 Feature",
                interactive: true,
                title: '<img src="styles/legend/2005Feature_6.png" /> 2005 Feature'
            });
var format_2010Feature_7 = new ol.format.GeoJSON();
var features_2010Feature_7 = format_2010Feature_7.readFeatures(json_2010Feature_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2010Feature_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2010Feature_7.addFeatures(features_2010Feature_7);
var lyr_2010Feature_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2010Feature_7, 
                style: style_2010Feature_7,
                popuplayertitle: "2010 Feature",
                interactive: true,
                title: '<img src="styles/legend/2010Feature_7.png" /> 2010 Feature'
            });
var format_2022Feature_8 = new ol.format.GeoJSON();
var features_2022Feature_8 = format_2022Feature_8.readFeatures(json_2022Feature_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2022Feature_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2022Feature_8.addFeatures(features_2022Feature_8);
var lyr_2022Feature_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2022Feature_8, 
                style: style_2022Feature_8,
                popuplayertitle: "2022 Feature",
                interactive: true,
                title: '<img src="styles/legend/2022Feature_8.png" /> 2022 Feature'
            });
var format_ROADS_9 = new ol.format.GeoJSON();
var features_ROADS_9 = format_ROADS_9.readFeatures(json_ROADS_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROADS_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROADS_9.addFeatures(features_ROADS_9);
var lyr_ROADS_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROADS_9, 
                style: style_ROADS_9,
                popuplayertitle: "ROADS",
                interactive: true,
                title: '<img src="styles/legend/ROADS_9.png" /> ROADS'
            });
var format_2010Features_10 = new ol.format.GeoJSON();
var features_2010Features_10 = format_2010Features_10.readFeatures(json_2010Features_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2010Features_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2010Features_10.addFeatures(features_2010Features_10);
var lyr_2010Features_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2010Features_10, 
                style: style_2010Features_10,
                popuplayertitle: "2010Features",
                interactive: true,
                title: '<img src="styles/legend/2010Features_10.png" /> 2010Features'
            });
var format_2015Features_11 = new ol.format.GeoJSON();
var features_2015Features_11 = format_2015Features_11.readFeatures(json_2015Features_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2015Features_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2015Features_11.addFeatures(features_2015Features_11);
var lyr_2015Features_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2015Features_11, 
                style: style_2015Features_11,
                popuplayertitle: "2015Features",
                interactive: true,
                title: '<img src="styles/legend/2015Features_11.png" /> 2015Features'
            });
var format_2020features_12 = new ol.format.GeoJSON();
var features_2020features_12 = format_2020features_12.readFeatures(json_2020features_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2020features_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2020features_12.addFeatures(features_2020features_12);
var lyr_2020features_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2020features_12, 
                style: style_2020features_12,
                popuplayertitle: "2020features",
                interactive: true,
                title: '<img src="styles/legend/2020features_12.png" /> 2020features'
            });
var format_2022Features_13 = new ol.format.GeoJSON();
var features_2022Features_13 = format_2022Features_13.readFeatures(json_2022Features_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2022Features_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2022Features_13.addFeatures(features_2022Features_13);
var lyr_2022Features_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2022Features_13, 
                style: style_2022Features_13,
                popuplayertitle: "2022Features",
                interactive: true,
                title: '<img src="styles/legend/2022Features_13.png" /> 2022Features'
            });
var format_2005Features_14 = new ol.format.GeoJSON();
var features_2005Features_14 = format_2005Features_14.readFeatures(json_2005Features_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2005Features_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2005Features_14.addFeatures(features_2005Features_14);
var lyr_2005Features_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2005Features_14, 
                style: style_2005Features_14,
                popuplayertitle: "2005Features",
                interactive: true,
                title: '<img src="styles/legend/2005Features_14.png" /> 2005Features'
            });
var format_ROADScopy_15 = new ol.format.GeoJSON();
var features_ROADScopy_15 = format_ROADScopy_15.readFeatures(json_ROADScopy_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROADScopy_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROADScopy_15.addFeatures(features_ROADScopy_15);
var lyr_ROADScopy_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROADScopy_15, 
                style: style_ROADScopy_15,
                popuplayertitle: "ROADS copy",
                interactive: true,
                title: '<img src="styles/legend/ROADScopy_15.png" /> ROADS copy'
            });
var format_RESIDENTIAL_16 = new ol.format.GeoJSON();
var features_RESIDENTIAL_16 = format_RESIDENTIAL_16.readFeatures(json_RESIDENTIAL_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RESIDENTIAL_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESIDENTIAL_16.addFeatures(features_RESIDENTIAL_16);
var lyr_RESIDENTIAL_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESIDENTIAL_16, 
                style: style_RESIDENTIAL_16,
                popuplayertitle: "RESIDENTIAL",
                interactive: true,
                title: '<img src="styles/legend/RESIDENTIAL_16.png" /> RESIDENTIAL'
            });
var format_School_17 = new ol.format.GeoJSON();
var features_School_17 = format_School_17.readFeatures(json_School_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_School_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_School_17.addFeatures(features_School_17);
var lyr_School_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_School_17, 
                style: style_School_17,
                popuplayertitle: "School",
                interactive: true,
                title: '<img src="styles/legend/School_17.png" /> School'
            });
var format_Commercial_18 = new ol.format.GeoJSON();
var features_Commercial_18 = format_Commercial_18.readFeatures(json_Commercial_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Commercial_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Commercial_18.addFeatures(features_Commercial_18);
var lyr_Commercial_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Commercial_18, 
                style: style_Commercial_18,
                popuplayertitle: "Commercial",
                interactive: true,
                title: '<img src="styles/legend/Commercial_18.png" /> Commercial'
            });
var group_EDITABLE = new ol.layer.Group({
                                layers: [lyr_RESIDENTIAL_16,lyr_School_17,lyr_Commercial_18,],
                                fold: "open",
                                title: "EDITABLE"});
var group_Ademola = new ol.layer.Group({
                                layers: [lyr_2010Features_10,lyr_2015Features_11,lyr_2020features_12,lyr_2022Features_13,lyr_2005Features_14,lyr_ROADScopy_15,],
                                fold: "open",
                                title: "Ademola"});
var group_Aminu = new ol.layer.Group({
                                layers: [lyr_2020Feature_4,lyr_2015Feature_5,lyr_2005Feature_6,lyr_2010Feature_7,lyr_2022Feature_8,lyr_ROADS_9,],
                                fold: "open",
                                title: "Aminu"});
var group_FromMymaps = new ol.layer.Group({
                                layers: [lyr_ResidentialEstates_1,lyr_Commercial_2,lyr_School_3,],
                                fold: "open",
                                title: "From My maps"});

lyr_GoogleEarth_0.setVisible(true);lyr_ResidentialEstates_1.setVisible(true);lyr_Commercial_2.setVisible(true);lyr_School_3.setVisible(true);lyr_2020Feature_4.setVisible(true);lyr_2015Feature_5.setVisible(true);lyr_2005Feature_6.setVisible(true);lyr_2010Feature_7.setVisible(true);lyr_2022Feature_8.setVisible(true);lyr_ROADS_9.setVisible(true);lyr_2010Features_10.setVisible(true);lyr_2015Features_11.setVisible(true);lyr_2020features_12.setVisible(true);lyr_2022Features_13.setVisible(true);lyr_2005Features_14.setVisible(true);lyr_ROADScopy_15.setVisible(true);lyr_RESIDENTIAL_16.setVisible(true);lyr_School_17.setVisible(true);lyr_Commercial_18.setVisible(true);
var layersList = [lyr_GoogleEarth_0,group_FromMymaps,group_Aminu,group_Ademola,group_EDITABLE];
lyr_ResidentialEstates_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Commercial_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_School_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_2020Feature_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_2015Feature_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_2005Feature_6.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_2010Feature_7.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_2022Feature_8.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ROADS_9.set('fieldAliases', {'id': 'id', });
lyr_2010Features_10.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_2015Features_11.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_2020features_12.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_2022Features_13.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_2005Features_14.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ROADScopy_15.set('fieldAliases', {'id': 'id', });
lyr_RESIDENTIAL_16.set('fieldAliases', {'id': 'id', });
lyr_School_17.set('fieldAliases', {'id': 'id', });
lyr_Commercial_18.set('fieldAliases', {'id': 'id', });
lyr_ResidentialEstates_1.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Commercial_2.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_School_3.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_2020Feature_4.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_2015Feature_5.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_2005Feature_6.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_2010Feature_7.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_2022Feature_8.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_ROADS_9.set('fieldImages', {'id': '', });
lyr_2010Features_10.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_2015Features_11.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_2020features_12.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_2022Features_13.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_2005Features_14.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_ROADScopy_15.set('fieldImages', {'id': '', });
lyr_RESIDENTIAL_16.set('fieldImages', {'id': '', });
lyr_School_17.set('fieldImages', {'id': '', });
lyr_Commercial_18.set('fieldImages', {'id': '', });
lyr_ResidentialEstates_1.set('fieldLabels', {'Name': 'header label - always visible', 'description': 'header label - always visible', 'timestamp': 'header label - always visible', 'begin': 'header label - always visible', 'end': 'header label - always visible', 'altitudeMode': 'header label - always visible', 'tessellate': 'header label - always visible', 'extrude': 'header label - always visible', 'visibility': 'header label - always visible', 'drawOrder': 'header label - always visible', 'icon': 'header label - always visible', });
lyr_Commercial_2.set('fieldLabels', {'Name': 'header label - always visible', 'description': 'header label - always visible', 'timestamp': 'header label - always visible', 'begin': 'header label - always visible', 'end': 'header label - always visible', 'altitudeMode': 'header label - always visible', 'tessellate': 'header label - always visible', 'extrude': 'header label - always visible', 'visibility': 'header label - always visible', 'drawOrder': 'header label - always visible', 'icon': 'header label - always visible', });
lyr_School_3.set('fieldLabels', {'Name': 'header label - always visible', 'description': 'header label - always visible', 'timestamp': 'header label - always visible', 'begin': 'header label - always visible', 'end': 'header label - always visible', 'altitudeMode': 'header label - always visible', 'tessellate': 'header label - always visible', 'extrude': 'header label - always visible', 'visibility': 'header label - always visible', 'drawOrder': 'header label - always visible', 'icon': 'header label - always visible', });
lyr_2020Feature_4.set('fieldLabels', {'Name': 'header label - always visible', 'descriptio': 'header label - always visible', 'timestamp': 'header label - always visible', 'begin': 'header label - always visible', 'end': 'header label - always visible', 'altitudeMo': 'header label - always visible', 'tessellate': 'header label - always visible', 'extrude': 'header label - always visible', 'visibility': 'header label - always visible', 'drawOrder': 'header label - always visible', 'icon': 'header label - always visible', });
lyr_2015Feature_5.set('fieldLabels', {'Name': 'header label - always visible', 'descriptio': 'header label - always visible', 'timestamp': 'header label - always visible', 'begin': 'header label - always visible', 'end': 'header label - always visible', 'altitudeMo': 'header label - always visible', 'tessellate': 'header label - always visible', 'extrude': 'header label - always visible', 'visibility': 'header label - always visible', 'drawOrder': 'header label - always visible', 'icon': 'header label - always visible', });
lyr_2005Feature_6.set('fieldLabels', {'Name': 'header label - always visible', 'descriptio': 'header label - always visible', 'timestamp': 'header label - always visible', 'begin': 'header label - always visible', 'end': 'header label - always visible', 'altitudeMo': 'header label - always visible', 'tessellate': 'header label - always visible', 'extrude': 'header label - always visible', 'visibility': 'header label - always visible', 'drawOrder': 'header label - always visible', 'icon': 'header label - always visible', });
lyr_2010Feature_7.set('fieldLabels', {'Name': 'header label - always visible', 'descriptio': 'header label - always visible', 'timestamp': 'header label - always visible', 'begin': 'header label - always visible', 'end': 'header label - always visible', 'altitudeMo': 'header label - always visible', 'tessellate': 'header label - always visible', 'extrude': 'header label - always visible', 'visibility': 'header label - always visible', 'drawOrder': 'header label - always visible', 'icon': 'header label - always visible', });
lyr_2022Feature_8.set('fieldLabels', {'Name': 'header label - always visible', 'descriptio': 'header label - always visible', 'timestamp': 'header label - always visible', 'begin': 'header label - always visible', 'end': 'header label - always visible', 'altitudeMo': 'header label - always visible', 'tessellate': 'header label - always visible', 'extrude': 'header label - always visible', 'visibility': 'header label - always visible', 'drawOrder': 'header label - always visible', 'icon': 'header label - always visible', });
lyr_ROADS_9.set('fieldLabels', {'id': 'header label - always visible', });
lyr_2010Features_10.set('fieldLabels', {'Name': 'header label - always visible', 'descriptio': 'header label - always visible', 'timestamp': 'header label - always visible', 'begin': 'header label - always visible', 'end': 'header label - always visible', 'altitudeMo': 'header label - always visible', 'tessellate': 'header label - always visible', 'extrude': 'header label - always visible', 'visibility': 'header label - always visible', 'drawOrder': 'header label - always visible', 'icon': 'header label - always visible', });
lyr_2015Features_11.set('fieldLabels', {'Name': 'header label - always visible', 'descriptio': 'header label - always visible', 'timestamp': 'header label - always visible', 'begin': 'header label - always visible', 'end': 'header label - always visible', 'altitudeMo': 'header label - always visible', 'tessellate': 'header label - always visible', 'extrude': 'header label - always visible', 'visibility': 'header label - always visible', 'drawOrder': 'header label - always visible', 'icon': 'header label - always visible', });
lyr_2020features_12.set('fieldLabels', {'Name': 'header label - always visible', 'descriptio': 'header label - always visible', 'timestamp': 'header label - always visible', 'begin': 'header label - always visible', 'end': 'header label - always visible', 'altitudeMo': 'header label - always visible', 'tessellate': 'header label - always visible', 'extrude': 'header label - always visible', 'visibility': 'header label - always visible', 'drawOrder': 'header label - always visible', 'icon': 'header label - always visible', });
lyr_2022Features_13.set('fieldLabels', {'Name': 'header label - always visible', 'descriptio': 'header label - always visible', 'timestamp': 'header label - always visible', 'begin': 'header label - always visible', 'end': 'header label - always visible', 'altitudeMo': 'header label - always visible', 'tessellate': 'header label - always visible', 'extrude': 'header label - always visible', 'visibility': 'header label - always visible', 'drawOrder': 'header label - always visible', 'icon': 'header label - always visible', });
lyr_2005Features_14.set('fieldLabels', {'Name': 'header label - always visible', 'descriptio': 'header label - always visible', 'timestamp': 'header label - always visible', 'begin': 'header label - always visible', 'end': 'header label - always visible', 'altitudeMo': 'header label - always visible', 'tessellate': 'header label - always visible', 'extrude': 'header label - always visible', 'visibility': 'header label - always visible', 'drawOrder': 'header label - always visible', 'icon': 'header label - always visible', });
lyr_ROADScopy_15.set('fieldLabels', {'id': 'header label - always visible', });
lyr_RESIDENTIAL_16.set('fieldLabels', {'id': 'header label - always visible', });
lyr_School_17.set('fieldLabels', {'id': 'header label - always visible', });
lyr_Commercial_18.set('fieldLabels', {'id': 'header label - always visible', });
lyr_Commercial_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});