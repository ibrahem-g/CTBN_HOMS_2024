var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Boarders_1 = new ol.format.GeoJSON();
var features_Boarders_1 = format_Boarders_1.readFeatures(json_Boarders_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boarders_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boarders_1.addFeatures(features_Boarders_1);
var lyr_Boarders_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Boarders_1, 
                style: style_Boarders_1,
                interactive: true,
                title: '<img src="styles/legend/Boarders_1.png" /> Boarders'
            });
var format_Merged_2 = new ol.format.GeoJSON();
var features_Merged_2 = format_Merged_2.readFeatures(json_Merged_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Merged_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Merged_2.addFeatures(features_Merged_2);
var lyr_Merged_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Merged_2, 
                style: style_Merged_2,
                interactive: true,
                title: '<img src="styles/legend/Merged_2.png" /> Merged'
            });
var format_Rapid_Registry_Sectors_3 = new ol.format.GeoJSON();
var features_Rapid_Registry_Sectors_3 = format_Rapid_Registry_Sectors_3.readFeatures(json_Rapid_Registry_Sectors_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rapid_Registry_Sectors_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rapid_Registry_Sectors_3.addFeatures(features_Rapid_Registry_Sectors_3);
var lyr_Rapid_Registry_Sectors_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rapid_Registry_Sectors_3, 
                style: style_Rapid_Registry_Sectors_3,
                interactive: true,
    title: 'Rapid_Registry_Sectors<br />\
    <img src="styles/legend/Rapid_Registry_Sectors_3_0.png" /> A<br />\
    <img src="styles/legend/Rapid_Registry_Sectors_3_1.png" /> AAA<br />\
    <img src="styles/legend/Rapid_Registry_Sectors_3_2.png" /> B<br />\
    <img src="styles/legend/Rapid_Registry_Sectors_3_3.png" /> C<br />\
    <img src="styles/legend/Rapid_Registry_Sectors_3_4.png" /> CC<br />\
    <img src="styles/legend/Rapid_Registry_Sectors_3_5.png" /> D<br />\
    <img src="styles/legend/Rapid_Registry_Sectors_3_6.png" /> DD<br />\
    <img src="styles/legend/Rapid_Registry_Sectors_3_7.png" /> DDD<br />\
    <img src="styles/legend/Rapid_Registry_Sectors_3_8.png" /> EE<br />\
    <img src="styles/legend/Rapid_Registry_Sectors_3_9.png" /> EEE<br />\
    <img src="styles/legend/Rapid_Registry_Sectors_3_10.png" /> FFF<br />\
    <img src="styles/legend/Rapid_Registry_Sectors_3_11.png" /> J<br />\
    <img src="styles/legend/Rapid_Registry_Sectors_3_12.png" /> JJ<br />\
    <img src="styles/legend/Rapid_Registry_Sectors_3_13.png" /> K<br />\
    <img src="styles/legend/Rapid_Registry_Sectors_3_14.png" /> KK<br />\
    <img src="styles/legend/Rapid_Registry_Sectors_3_15.png" /> L<br />\
    <img src="styles/legend/Rapid_Registry_Sectors_3_16.png" /> M<br />\
    <img src="styles/legend/Rapid_Registry_Sectors_3_17.png" /> O<br />\
    <img src="styles/legend/Rapid_Registry_Sectors_3_18.png" /> OO<br />\
    <img src="styles/legend/Rapid_Registry_Sectors_3_19.png" /> P<br />\
    <img src="styles/legend/Rapid_Registry_Sectors_3_20.png" /> R<br />\
    <img src="styles/legend/Rapid_Registry_Sectors_3_21.png" /> S<br />\
    <img src="styles/legend/Rapid_Registry_Sectors_3_22.png" /> T<br />\
    <img src="styles/legend/Rapid_Registry_Sectors_3_23.png" /> U<br />\
    <img src="styles/legend/Rapid_Registry_Sectors_3_24.png" /> VV<br />\
    <img src="styles/legend/Rapid_Registry_Sectors_3_25.png" /> WW<br />\
    <img src="styles/legend/Rapid_Registry_Sectors_3_26.png" /> XX<br />\
    <img src="styles/legend/Rapid_Registry_Sectors_3_27.png" /> YY<br />\
    <img src="styles/legend/Rapid_Registry_Sectors_3_28.png" /> ZZ<br />\
    <img src="styles/legend/Rapid_Registry_Sectors_3_29.png" /> <br />'
        });

        var lyr_GoogleMaps_directions_4 = new ol.layer.Tile({
            'title': 'Google Maps_directions',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

lyr_GoogleHybrid_0.setVisible(true);lyr_Boarders_1.setVisible(true);lyr_Merged_2.setVisible(true);lyr_Rapid_Registry_Sectors_3.setVisible(true);lyr_GoogleMaps_directions_4.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Boarders_1,lyr_Merged_2,lyr_Rapid_Registry_Sectors_3,lyr_GoogleMaps_directions_4];
lyr_Boarders_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', });
lyr_Merged_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'layer': 'layer', 'path': 'path', });
lyr_Rapid_Registry_Sectors_3.set('fieldAliases', {'fid': 'fid', '_index': '_index', 'القطاع': 'القطاع', 'اسم المراقب الميداني': 'اسم المراقب الميداني', 'اسم المشرف': 'اسم المشرف', 'تاريخ التسجيل': 'تاريخ التسجيل', 'صلة قرابة الطفل بالمجيب': 'صلة قرابة الطفل بالمجيب', 'صلة القرابة الأخرى': 'صلة القرابة الأخرى', 'اسم المجيب الثلاثي': 'اسم المجيب الثلاثي', 'رقم الموبايل': 'رقم الموبايل', 'إذا كانت العائلة تعيلها أنثى يرجى اختيار النوع': 'إذا كانت العائلة تعيلها أنثى يرجى اختيار النوع', 'إثبات العائلة تعيلها أنثى': 'إثبات العائلة تعيلها أنثى', 'العنوان التفصيلي': 'العنوان التفصيلي', 'ملاحظات حول الأسرة': 'ملاحظات حول الأسرة', 'الموقع الجغرافي باستخدام الاحداثيات GPS': 'الموقع الجغرافي باستخدام الاحداثيات GPS', '_الموقع الجغرافي باستخدام الاحداثيات GPS_latitude': '_الموقع الجغرافي باستخدام الاحداثيات GPS_latitude', '_الموقع الجغرافي باستخدام الاحداثيات GPS_longitude': '_الموقع الجغرافي باستخدام الاحداثيات GPS_longitude', '_الموقع الجغرافي باستخدام الاحداثيات GPS_altitude': '_الموقع الجغرافي باستخدام الاحداثيات GPS_altitude', '_الموقع الجغرافي باستخدام الاحداثيات GPS_precision': '_الموقع الجغرافي باستخدام الاحداثيات GPS_precision', 'field_19': 'field_19', });
lyr_Boarders_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Merged_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Rapid_Registry_Sectors_3.set('fieldImages', {'fid': 'TextEdit', '_index': 'RelationReference', 'القطاع': 'TextEdit', 'اسم المراقب الميداني': 'TextEdit', 'اسم المشرف': 'TextEdit', 'تاريخ التسجيل': 'TextEdit', 'صلة قرابة الطفل بالمجيب': 'TextEdit', 'صلة القرابة الأخرى': 'Hidden', 'اسم المجيب الثلاثي': 'TextEdit', 'رقم الموبايل': 'Range', 'إذا كانت العائلة تعيلها أنثى يرجى اختيار النوع': 'TextEdit', 'إثبات العائلة تعيلها أنثى': 'TextEdit', 'العنوان التفصيلي': 'TextEdit', 'ملاحظات حول الأسرة': 'TextEdit', 'الموقع الجغرافي باستخدام الاحداثيات GPS': 'Hidden', '_الموقع الجغرافي باستخدام الاحداثيات GPS_latitude': 'Hidden', '_الموقع الجغرافي باستخدام الاحداثيات GPS_longitude': 'Hidden', '_الموقع الجغرافي باستخدام الاحداثيات GPS_altitude': 'Hidden', '_الموقع الجغرافي باستخدام الاحداثيات GPS_precision': 'Hidden', 'field_19': 'Hidden', });
lyr_Boarders_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', });
lyr_Merged_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Rapid_Registry_Sectors_3.set('fieldLabels', {'fid': 'no label', '_index': 'inline label', 'القطاع': 'inline label', 'اسم المراقب الميداني': 'inline label', 'اسم المشرف': 'inline label', 'تاريخ التسجيل': 'inline label', 'صلة قرابة الطفل بالمجيب': 'inline label', 'اسم المجيب الثلاثي': 'inline label', 'رقم الموبايل': 'inline label', 'إذا كانت العائلة تعيلها أنثى يرجى اختيار النوع': 'inline label', 'إثبات العائلة تعيلها أنثى': 'inline label', 'العنوان التفصيلي': 'inline label', 'ملاحظات حول الأسرة': 'inline label', });
lyr_Rapid_Registry_Sectors_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});