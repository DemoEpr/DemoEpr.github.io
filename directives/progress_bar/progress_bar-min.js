var mod=angular.module("utilities",[]);mod.directive("progressBar",["$compile",function(a){function e(e,s){function l(){var l=angular.element('                        <div disabled style="padding-top: 5px">                             <div class="progress">                                 <div class="progress-bar" role="progressbar" aria-valuenow="{{ value }}"                                      aria-valuemin="0" aria-valuemax="100" style="width:{{ value }}%">                                 </div>                             </div>                            <div class="col-md-1"></div>                                    <div class="col-md-10">                                             <span>{{ state }}</span>                                       </div>                                                          <span class="col-md-1">{{ value }}%</span>                                </div>                        '),i=a(l)(e);s.replaceWith(i)}l(),e.$watchGroup(["value","state"],l)}return{scope:{value:"=",state:"=",enabled:"="},link:e}}]);