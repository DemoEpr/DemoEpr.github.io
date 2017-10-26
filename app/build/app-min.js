"use strict";angular.module("sarl",["ngRoute","sarl.dashboard","sarl.dashboard.reportes","sarl.dashboard.inicio","sarl.dashboard.instrumentos","sarl.dashboard.irl","sarl.directives","sarl.login","myApp.version","utilities","custom_filters","charts","reporte","angular-js-xlsx"]).config(["$locationProvider","$routeProvider",function(a,t){a.hashPrefix(""),t.otherwise({redirectTo:"/dashboard"})}]).factory("LogFactory",[function(){return{alm_1:{alm_1_campo1:[{username:"Juan Camilo",date:new Date(2017,1,1),last:1e3,actual:1200},{username:"Juan Camilo",date:new Date(2017,1,2),last:1200,actual:1e4}],alm_1_campo2:[{username:"Sebastián Álvarez",date:new Date(2017,1,2),last:1200,actual:1e4}]}}}]).factory("ConfigFactory",function(){return{instrumentos_config:{categories:[{type:"income",text:"Activos Líquidos Netos",id:"in_alm"},{type:"income",text:"Ingresos Esperados",id:"in_ing_esp"},{type:"outcome",text:"Salidas No Contractuales",id:"out_no_contract"},{type:"outcome",text:"Salidas Contractuales",id:"out_contract"}],meta:{in_alm:[{id:"alm_1",text:"Efectivo Disponible",active:!0,components:[{text:"1110: Efectivo en Bancos",active:!0,campos:[{text:"",confirmed:!1,campos:[{id:"a1",value:null,placeholder:"Valor cuenta PUC",type:"number",icon:"number",tam:4}]}]},{text:"1115: Compromisos de Pago",active:!0,campos:[{text:"",confirmed:!1,campos:[{id:"a2",value:35e5,placeholder:"Valor cuenta PUC",type:"number",icon:"number",tam:4}]}]},{text:"1120: Efectivo de Uso Restringido y/o con Destinación Específica",active:!0,campos:[{text:"",confirmed:!1,campos:[{id:"a3",value:5500580,placeholder:"Valor cuenta PUC",type:"number",icon:"number",tam:4}]}]}]},{id:"alm_2",text:"Inversiones",active:!0,components:[{text:"1204: Inversiones Negociables en Títulos de Deuda",active:!0,campos:[{text:"",confirmed:!1,campos:[{id:"b1",value:null,placeholder:"Valor Razonable",type:"number",icon:"number",tam:4},{id:"b2",value:null,placeholder:"Haircut",type:"number",icon:"percent",tam:3}]},{text:"",confirmed:!1,campos:[{id:"b3",value:175e4,placeholder:"Valor Razonable",type:"number",icon:"number",tam:4},{id:"b4",value:5,placeholder:"Haircut",type:"number",icon:"percent",tam:3}]}]},{text:"1206: Inversiones Negociables en Títulos Participativos",active:!0,confirm:!1,campos:[{text:"",confirmed:!1,campos:[{id:"b5",value:null,placeholder:"Valor Razonable",type:"number",icon:"number",tam:4},{id:"b6",value:null,placeholder:"Haircut",type:"number",icon:"percent",tam:3}]}]},{text:"1213: Inversiones Disponible para la Venta en Títulos de Deuda",active:!0,confirm:!1,campos:[{text:"",confirmed:!1,campos:[{id:"b7",value:null,placeholder:"Valor Razonable",type:"number",icon:"number",tam:4},{id:"b8",value:null,placeholder:"Haircut",type:"number",icon:"percent",tam:3}]}]},{text:"1216: Inversiones Disponible para la Venta en Títulos Participativos",active:!0,confirm:!1,campos:[{text:"",confirmed:!1,campos:[{id:"b9",value:null,placeholder:"Valor Razonable",type:"number",icon:"number",tam:4},{id:"b10",value:null,placeholder:"Haircut",type:"number",icon:"percent",tam:3}]}]}]}],in_ing_esp:[{id:"ing_esp_1",text:"Recaudos de Cartera",active:!0,components:{facial:[{codigo:1,text:"concepto con nombre",confirmed:!1,campos:[{id:"a1",value:15e5,placeholder:"Saldo Capital",type:"number",icon:"number",tam:3},{id:"b1",value:2.7,placeholder:"Tasa Periódica",type:"number",icon:"percent",tam:2},{id:"c1",value:40,placeholder:"Cuotas",type:"number",icon:"integer",tam:2},{id:"d1",value:new Date(2017,1,1),placeholder:"Fecha Inicio",type:"date",icon:"calendar",tam:3}]}],cuotas:[]}},{id:"ing_esp_2",text:"Recaudos de aportes",active:!0,campos:[]},{id:"in_esp_3",text:"Recaudos de Ahorro Contractual",active:!0,campos:[]},{id:"ing_esp_4",text:"Recaudos de Ahorro Permanente",active:!0,campos:[]},{id:"ing_esp_5",text:"Cuentas por Cobrar",active:!0,campos:[]}],out_no_contract:[{id:"out_no_contract_1",text:"Depósitos de Ahorro Ordinario",active:!0,campos:[{id:"out_no_contract_1_campo1",text:"Campo1",active:!0,value:""},{id:"out_no_contract_1_campo2",text:"Campo2",active:!0,value:""}]},{id:"out_no_contract_2",text:"Aportes",active:!0,campos:[{id:"out_no_contract_2_campo1",text:"Campo1",active:!0,value:""},{id:"out_no_contract_2_campo2",text:"Campo2",active:!0,value:""}]},{id:"out_no_contract_3",text:"Ahorro Permanente",active:!0,campos:[{id:"out_no_contract_3_campo1",text:"Campo1",active:!0,value:""},{id:"out_no_contract_3_campo2",text:"Campo2",active:!0,value:""}]},{id:"out_no_contract_4",text:"Fondos Pasivos",active:!0,campos:[{id:"out_no_contract_4_campo1",text:"Campo1",active:!0,value:""},{id:"out_no_contract_4_campo2",text:"Campo2",active:!0,value:""}]}],out_contract:[{id:"out_contract_1",text:"CDATs",active:!0,campos:[{id:"out_contract_1_campo1",text:"Campo1",active:!0,value:""},{id:"out_contract_1_campo2",text:"Campo2",active:!0,value:""}]},{id:"out_contract_2",text:"Ahorro Contractual",active:!0,campos:[{id:"out_contract_2_campo1",text:"Campo1",active:!0,value:""},{id:"out_contract_2_campo2",text:"Campo2",active:!0,value:""}]},{id:"out_contract_3",text:"Obligaciones",active:!0,campos:[{id:"out_contract_3_campo1",text:"Campo1",active:!0,value:""},{id:"out_contract_3_campo2",text:"Campo2",active:!0,value:""}]},{id:"out_contract_3",text:"Créditos Aprobados",active:!0,campos:[{id:"out_contract_3_campo1",text:"Campo1",active:!0,value:""},{id:"out_contract_3_campo2",text:"Campo2",active:!0,value:""}]},{id:"out_contract_4",text:"Gastos Administrativos",active:!0,campos:[{id:"out_contract_4_campo1",text:"Campo1",active:!0,value:""},{id:"out_contract_4_campo2",text:"Campo2",active:!0,value:""}]},{id:"out_contract_5",text:"Servicios de Recaudo y remanentes por pagar",active:!0,campos:[{id:"out_contract_5_campo1",text:"Campo1",active:!0,value:""},{id:"out_contract_5_campo2",text:"Campo2",active:!0,value:""}]},{id:"out_contract_6",text:"Cuentas por pagar",active:!0,campos:[{id:"out_contract_6_campo1",text:"Campo1",active:!0,value:""},{id:"out_contract_6_campo2",text:"Campo2",active:!0,value:""}]}]},get_categories:function(){return this.categories},get_meta:function(){return this.meta}},get_config_instrumentos:function(){return this.instrumentos_config}}}).factory("UserInfo",function(){return{name:"Javier",lastname:"Vélez",email:"javier.velez@sarl.com",tel:45852454,cel:35455544,id:154446546,sex:"h",alias:"Elena",coop:{company:"Compañia AAA"},privileges:{deleteReports:!0,calculateIRL:!0,viewReports:!0,modifyUsers:!0},get_username:function(){return this.name+" "+this.lastname},get_company:function(){return this.coop.company}}}).factory("UserRsc",function(){return{validate_username:function(a){return"math"===a},validate_password:function(a){return"mathroot"===a},validate_email:function(a){return"math@mathdecision.com"===a}}}).factory("infaggInst",function(){var a=this;return a.data=[["","Monto"],["Ingresos por Instrumentos Vigentes",100056676],["Egresos por Instrumentos Vigentes",34995999],["Activos Líquidos Netos",123908829874]],a.data}).factory("InitRsc",function(){var a=this;return a.FinData=[["Indicador","Valor"],["DTF (%)",6.43],["CDT180 (%)",6.62],["CDT360 (%)",7.06],["TCC (%)",6.85],["Dollar TRM (USD)",2854.89],["UVR (COP)",248.6858],["Desempleo",10.5],["IPC (%)",.47],["PIB (%)",2]],a.FinData}).factory("standardPlotOptions",[function(){return{standardPlotOptions:{width:700,height:300,chartArea:{width:"400",height:"200"},hAxis:{direction:1,slantedText:!0,slantedTextAngle:30},explorer:{actions:["dragToPan","rightClickToReset"],keepInBounds:!1}},standardTableOptions:{width:600,height:150,chartArea:{width:"600",height:"150"}},standardPieOptions:{width:500,chartArea:{width:"300",height:"150"},hAxis:{direction:1,slantedText:!0,slantedTextAngle:30},is3D:!0}}}]).factory("newReport",[function(){function a(a,t){return Math.random()*(t-a)+a}function t(a,t){return Math.floor(Math.random()*(t-a+1))+a}function e(e){var n=[];for(var r in self.productDescription)for(var i=t(200,300),c=0;c<=i;c++){for(var s=t(1,20),l=[],u=0;u<=s;u++){var d=o(e,t(0,90)),p=a(-1e5,1e5);l.push({fecha:d,monto_esperado:p})}var m={tipo_instrumento:r,flujos_futuros:l};n.push(m)}return n}function o(a,t){return new Date((new Date).setTime(a.getTime()+864e5*t))}function n(a,t,e,n){for(var r=[],i=t;i<=e;i+=n){var c=o(new Date(a),i);r.push(c)}return r}function r(a,t){return Math.floor((t-a)/864e5)}function i(a,t){for(var e=[],o=[],n=[],i=0;i<=90;i++)o[i]=0,n[i]=0,e[i]={entradas:0,salidas:0,fecha:null,compInst:{}};var c={true:o,false:n},s={true:"entradas",false:"salidas"},l={true:"+",false:"-"};for(var i in t){var u=t[i];for(var d in u.flujos_futuros){var p=u.flujos_futuros[d],m=r(a,p.fecha),v=p.monto_esperado,f=Math.abs(v);e[m][s[v>=0]]+=f,e[m].fecha=p.fecha,u.tipo_instrumento in e[m].compInst||(e[m].compInst[u.tipo_instrumento]={"+":0,"-":0}),e[m].compInst[u.tipo_instrumento][l[v>=0]]+=f,c[p.monto_esperado>=0][m]+=p.monto_esperado}}return e}function c(a,t,e,o){for(var n=[],r=e;r<=o;r++){var i=a[r];n[r]=i[t]}return n}function s(a,t,e){var o=c(a,"compInst",t,e),n={};for(var r in o){var i=o[r];for(var s in i)s in n||(n[s]={"+":0,"-":0}),n[s]["+"]+=i[s]["+"],n[s]["-"]+=i[s]["-"]}return n}function l(a,t){var e=[];for(var o in t)e[o]=t[o]+a;return e}function u(a){var t=[],e=0;for(var o in a){e+=a[o],t[o]=e}return t}function d(a){var t=0;for(var e in a)t+=a[e];return t}function p(a){var t=[];for(var e in a){var o=a[e];t[e]=-o}return t}function m(a,t){var e=[];for(var o in a){var n=a[o],r=t[o];e[o]=n+r}return e}function v(a){return{dia1:{bandID:"dia1",alias:"Día 1",iniDay:0,finDay:0,iniDayDate:o(a,0),finDayDate:o(a,0)},dia2:{bandID:"dia2",alias:"Día 2",iniDay:1,finDay:1,iniDayDate:o(a,1),finDayDate:o(a,1)},dia3:{bandID:"dia3",alias:"Día 3",iniDay:2,finDay:2,iniDayDate:o(a,2),finDayDate:o(a,2)},dia4:{bandID:"dia4",alias:"Día 4",iniDay:3,finDay:3,iniDayDate:o(a,3),finDayDate:o(a,3)},dia5:{bandID:"dia5",alias:"Día 5",iniDay:4,finDay:4,iniDayDate:o(a,4),finDayDate:o(a,4)},dia6:{bandID:"dia6",alias:"Día 6",iniDay:5,finDay:5,iniDayDate:o(a,5),finDayDate:o(a,5)},dia7:{bandID:"dia7",alias:"Día 7",iniDay:6,finDay:6,iniDayDate:o(a,6),finDayDate:o(a,6)},banda7:{bandID:"banda7",alias:"Banda 7",iniDay:0,finDay:6,iniDayDate:o(a,0),finDayDate:o(a,6)},banda15:{bandID:"banda15",alias:"Banda 15",iniDay:7,finDay:14,iniDayDate:o(a,7),finDayDate:o(a,14)},banda30:{bandID:"banda30",alias:"Banda 30",iniDay:15,finDay:30,iniDayDate:o(a,15),finDayDate:o(a,30)},banda90:{bandID:"banda90",alias:"Banda 90",iniDay:31,finDay:90,iniDayDate:o(a,31),finDayDate:o(a,90)}}}function f(a,t){var e=[],o=u(t),n=u(a);for(var r in n)n[r]>=.75*o[r]?e[r]=.75*o[r]:e[r]=n[r];return e}function _(a,t,e){var o={};for(var n in t){var r=t[n].iniDay,i=t[n].finDay,l=c(a,"entradas",r,i),v=c(a,"salidas",r,i),_=u(c(a,"entradas",0,i)),D=u(c(a,"salidas",0,i)),b=d(m(_,p(D))),y=f(l,v),h=y.slice(-1)[0],g=d(v)-h,R=d(v)-d(l);o[n]={input:{inflowsAgg:h,outflowsAgg:d(v),inflowsAggNP:d(l),totalFlows:d(l)-d(v),totalCumFlows:b},output:{irlr:e/(g+1),irlm:e-g,irle:e/(2*(g+1)),irlem:e-2*g,irlnp:R,rln:g,centralization:s(a,r,i)}}}return o}function D(a,t,e,r){a||(a=new Date(Date.now()));var s=o(a,-1),u=v(s),d=n(o(s,1),0,90,1),f=i(a,r),D=c(f,"entradas",0,90),y=c(f,"salidas",0,90),h=c(f,"fecha",0,90),g=_(f,u,e);return{reportID:a.toString(),reportDate:a,cutOffDate:s,author:t,iniDay:1,firstDayDate:o(s,1),finDay:91,lastDayDate:o(s,91),orderedBands:b,orderedDays:d,bands:u,stages:{projected:{alm:e,input:{dates:h,inflowsAgg:D,outflowsAgg:y,centralization:c(f,"compInst",0,90),inflowsAggNP:null},output:{rln:3,balance:l(e,m(D,p(y)))},centralization:centralization,bands:g},others:[]}}}self.productDescription={credito_vehiculo:{alias:"Crédito de vehículo",shortAlias:"Cred. Vehic.",color:"#057243",description:"Este producto corresponde con créditos exclusivamente para compra de vehículo."},credito_vivienda:{alias:"Crédito de vivienda",shortAlias:"Cred. viv.",color:"#0a6272",description:"Este producto corresponde con créditos exclusivamente para compra de vehículo."},factoring:{alias:"Factoring",shortAlias:"Factoring",color:"#4b3772",description:"Este producto corresponde con créditos exclusivamente para compra de vehículo."},triangulacion:{alias:"Triangulación",shortAlias:"Triangulación",color:"#727106",description:"Este producto corresponde con créditos exclusivamente para compra de vehículo."}};var b=["dia1","dia2","dia3","dia4","dia5","dia6","dia7","banda7","banda15","banda30","banda90"];return self.centralization={product:{instruments:{credito_vehiculo:{"+":141,"-":545},credito_vivienda:{"+":110,"-":250}},ranking:["credito_vehiculo","credito_vivienda"]}},{crearReporteDummy:D,generarInstrumentosRandom:e}}]).factory("IRLReports",["UserInfo","newReport","$timeout",function(a,t,e){function o(a,t){return Math.floor((t-a)/864e5)}function n(){var e=new Date(Date.now()),o=t.generarInstrumentosRandom(e),n=t.crearReporteDummy(e,a.get_username(),1525445477,o);n.reportID="underConstruction",s.currentReports.modeledReport=n,s.states.IRLCalculated=!0,s.states.confirmedReport=!1,s.currentReports.selectedReport=n,s.availableReports.underConstruction=n,s.states.ready2Calc=!0,s.states.performingCalculation=!1}function r(a,t){s.states.performingCalculation&&!t||(s.states.performingCalculation=!0,s.states.IRLCalculated=!1,s.states.confirmedReport=!1,t?1==t?(a("Evaluando concentración de los datos.",20),e(function(){r(a,2)},700)):2==t?(a("Calculando ALM",40),e(function(){r(a,3)},500)):3==t?(a("Calculando indicadores de riesgo de liquidez.",90),e(function(){r(a,4)},1200)):4==t&&(a("Proceso finalizado.",100),n()):(a("Procesando flujos de colocaciones.",0),e(function(){r(a,1)},700)))}function i(){if(s.availableReports.underConstruction){var a=s.availableReports.underConstruction.reportDate;s.availableReports[a]=s.availableReports.underConstruction,s.availableReports[a].reportID=a,s.states.confirmedReport=!0,s.availableReports.underConstruction=null,s.currentReports.latestReport=s.availableReports[a],s.currentReports.daysElapsed=o(s.currentReports.latestReport.reportDate,new Date(Date.now())),s.currentReports.dummyVariable=!0,s.currentReports.modeledReport=s.availableReports[a],s.currentReports.selectedReport=s.availableReports[a]}}function c(a,t){e(function(){t(s.availableReports[a])},500)}var s=this;s.availableReports={underConstruction:null};var l=new Date("2017-01-01T12:27:12Z"),l=function(a,t){return new Date((new Date).setTime(a.getTime()+864e5*t))}(new Date(Date.now()),-3),u=t.generarInstrumentosRandom(l),d=t.crearReporteDummy(l,"Daniel Osorio Guzman",1525445477,u);return s.availableReports[d.reportID]=d,s.currentReports={dummyVariable:!1,selectedReport:d,latestReport:d,daysElapsed:o(l,new Date(Date.now())),modeledReport:d},s.states={confirmedReport:!1,IRLCalculated:!1,ready2Calc:!0,performingCalculation:!1},{states:s.states,calculateIRL:r,confirmCurrentReport:i,availableReports:s.availableReports,getReport:c,currentReports:s.currentReports,productDescription:s.productDescription}}]).factory("IndRsc",function(){var a=this;return a.IndData={rfl:{name:"Relación Fondo de Liquidez",value:123456,color:"green"},CalCart:{name:"Calidad de cartera",value:234567,color:"green"},QuebPat:{name:"Quebranto Patrimonial",value:345678,color:"red"},MargFin:{name:"Margen Financiero",value:456789,color:"yellow"},RentAct:{name:"Rentabilidad del Activo",value:567890,color:"yellow"}},a.IndData}).factory("CalculateIRL",["IRLReports",function(a){return{report:a.currentReport,fieldsAreConfirmed:!1,calculateALN:function(){this.result.aln=123050888},calculateRLN:function(){this.result.rln=null}}}]);