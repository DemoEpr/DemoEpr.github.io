angular.module("myApp",["reporte"]).controller("myController",function(o,t){var a=this;a.options={},a.data_source={},t.get("salida.json").then(function(o){a.data_source=o.data,console.log(a.data_source)},function(o){})});