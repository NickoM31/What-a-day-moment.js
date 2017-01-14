(function(){
	'use strict';
	var app = {

		days:null,
		month:null,
		years:null,

		init : function(){
			app.listeners();
			app.hiddenMessage();
			
		},
		listeners : function(){
			$('#valid').on('click',this.dataTime.bind(this));
			$('.restart').on('click',this.reinit.bind(this));
			
		},
		dataTime : function(){
			this.days = $("#day").val();
			this.month = $("#month").val();
			this.years = $("#year").val();
			if(this.days >= 1 && this.days <= 31 && this.years > 0){
				this.confirmTheTime();
				$('#errorEmpty').hide();
				$("#errorMessageDay").hide();
				$("#errorMessageYear").hide();
			}else if (this.days ==="") {
				$('#errorEmpty').show();
				$("#day").css('border-color','#ff7473');
			}else if (this.years === "") {
				$('#errorEmpty').show();
				$("#year").css('border-color','#ff7473');
			}else if(this.years <= 0) { 
				$('#errorMessageYear').show();
				$('#year').css('border-color','#ff7473');
				
			}else if (this.days <= 0){  
				$('#errorMessageDay').show();
				$('#day').css('border-color','#ff7473');
				
			}else if (this.days >= 32){
				$('#errorMessageDay').show();
				$('#day').css('border-color','#ff7473');
				
			}
		},
		confirmTheTime : function(){
			var theDay = moment(this.years + "-" + this.month + "-" + this.days);
			$(".overlay").show();
			$(".overlay").text(theDay.format('dddd'));
			$(".overlay").css('color', '#D499B9');
			$(".restart").show();
			$(".restart").css('border','#D499B9');
			$(".cache").hide();
		},
		hiddenMessage : function(){
			$("#errorEmpty").hide();
			$("#errorMessageDay").hide();
			$("#errorMessageYear").hide();
			$(".overlay").hide();
			$(".restart").hide();
		},
		reinit : function(){
			$(".cache").show();
			$(".overlay").hide();
			$(".restart").hide();
			$("#errorEmpty").hide();
			$("#errorMessageDay").hide();
			$("#errorMessageYear").hide();
		},
	};
	app.init();
})();