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
			
			
		},

		dataTime : function(){
			this.days = $("#day").val();;
			this.month = $("#month").val();
			this.years = $("#year").val();
			if(this.days >= 1 && this.days <= 31 && this.years >= 0){
				this.confirmTheTime();
			}else if(this.days >= 32){
				$("#message1").show();
				$("#day").css('border-color','#ff7473');
			}else if (this.years <= 0){
				$("#message2").show();
			}

		},

		confirmTheTime : function(){
			var theDay = moment(this.years + "-" + this.month + "-" + this.days);
			console.log(theDay.format('dddd'));

			$(".overlay").show();
			$(".overlay").text(theDay.format('dddd'));
			$(".overlay").css('color', '#D499B9');
			$(".restart").show();
			$(".restart").css('border','#D499B9');

			$(".cache").hide();
		},

		hiddenMessage : function(){
			$("#message1").hide();
			$("#message2").hide();
			$(".overlay").hide();
			$(".restart").hide();
		},

		







	};
	app.init();
})();