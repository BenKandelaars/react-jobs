var IntroTourQueue=function(i,t){"use strict";var o=function(o,n){this.options=i.extend({remainingTours:[{name:"introTour",showDate:new Date,isLater:!1,isAvailable:function(){return!t.allowOmarIA()}},{name:"omarMigrationTour",showDate:new Date,isLater:!1,isAvailable:function(){return t.allowOmarIA()&&t.allowFormfillMigration()}}]},n),this.tourSetData=o};return o.prototype.laterThisTour=function(){if(this.options.remainingTours&&this.options.remainingTours.length>0){var i=this.options.remainingTours.shift();i.showDate=new Date,i.showDate.setDate(i.showDate.getDate()+3),i.isLater=!0,this.options.remainingTours.push(i)}},o.prototype.neverThisTour=function(){this.options.remainingTours&&this.options.remainingTours.length>0&&this.options.remainingTours.shift()},o.prototype.takeThisTour=function(){this.options.remainingTours&&this.options.remainingTours.length>0&&this.options.remainingTours.shift()},o.prototype.neverAllTours=function(){this.options.remainingTours=[]},o.prototype.getAvailableTour=function(){var t=null;if(this.options.remainingTours&&this.options.remainingTours.length>0){var o=this._findNextAvailableTour();o&&this.tourSetData&&this.tourSetData[o.name]&&(t=i.extend(!0,{},o,{tour:this.tourSetData[o.name]}))}return t},o.prototype._findNextAvailableTour=function(){return this.options.remainingTours.find(function(i){return void 0===i.isAvailable||!0===i.isAvailable||"function"==typeof i.isAvailable&&i.isAvailable()})},o.prototype.getOptions=function(){for(var i=[],t=this.options.remainingTours,o=0;o<t.length;o++)(void 0===t[o].isAvailable||!0===t[o].isAvailable||"function"==typeof t[o].isAvailable&&t[o].isAvailable())&&i.push(t[o]);return{remainingTours:i}},o}(jQuery,LPFeatures);