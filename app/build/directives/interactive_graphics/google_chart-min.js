function zip(a){return a&&a[0]?a[0].map(function(t,i){return a.map(function(a){return a[i]})}):null}var mod=angular.module("charts",[]);google.charts.load("visualization","1",{packages:["annotationchart","corechart","table"]}),mod.directive("drawChart",["$timeout",function(a){function t(a,t){function i(){var t=a.standardOptions,i=a.options;t=t?jQuery.extend(!0,{},a.standardOptions):{},i||(i={});for(item in i)t[item]=i[item];return t}function o(){var t,i;if("tuple"===a.dFormat)t=a.data,i=new google.visualization.arrayToDataTable(t);else if("sep"===a.dFormat){var o=a.data[0],n=a.data.slice(1);if(!(t=zip(n)))return null;t.unshift(o),i=new google.visualization.arrayToDataTable(t)}else{if("dis"!==a.dFormat)throw"Unknown data type '"+a.dFormat+"'.";t=zip(a.data),i=new google.visualization.arrayToDataTable(t)}return i}function n(){var a=o();if(!a)return null;null===l&&(l=new r(t[0])),l.draw(a,i())}function e(){if("pie"===u)r=google.visualization.PieChart;else if("line"==u)r=google.visualization.LineChart;else if("annotation"==u)r=google.visualization.AnnotationChart;else if("table"==u)r=google.visualization.Table;else if("bar"==u)r=google.visualization.BarChart;else{if("column"!=u)throw"Unable to draw a '"+u+"'";r=google.visualization.ColumnChart}a.$watchGroup(["options","data"],n),n()}var r,l=null,u="line";a.chartType&&(u=a.chartType),a.width&&(a.options.width=a.width),a.height&&(a.options.height=a.height),a.dFormat||(a.dFormat="tuple"),google.charts.setOnLoadCallback(e)}return{link:t,scope:{data:"=",options:"=?",standardOptions:"=?",chartType:"@?",width:"@?",height:"@?",dFormat:"@?"},controller:["$scope",function(a){a.s=3,this.s=3}]}}]);