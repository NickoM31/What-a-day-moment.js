(function() {
	"use strict"
	var app = {  

		jours: null,
		mois : null,
		ans : null,


		init: function() {
			this.listeners();
		},

		listeners:function() {
			$('#verif').on('click', this.dataTime.bind(this));
			$('#restart').on('click', this.restart.bind(this));
		},
		dataTime: function() {
			this.days =($('#days').val());
			this.month =($('#mois').val());
			this.years =($('#years').val());	
			var date = moment(this.days + this.month + this.years, 'DD-MM-YYYY').format('dddd');

			if(date){
				$('.content').hide();
				$('#affichage').show();
			};

			$('#affichage').append(date);
			this.updateView();	
		},

		updateView: function() {

			if(this.jours < 0 || this.jours > 31 || this.ans < 0){
				this.erreur();
			}
		},

		erreur: function() {
			$("#message").text("Le jour doit être compris entre 1 et 31 !");     
			$('#days').css('border', '2px solid #ff7473');
			$('.content').show();	
		},
		restart: function(){

			location.reload(true);
		},
	};


	app.init();

})();