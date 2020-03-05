			$(document).on('click', '#left-arrow', function(event) {
			// left
			let id = $($(`.tabletActive`)[0]).attr('id');
			doStep(id,'previous');


		});
		$(document).on('click', '#right-arrow', function(event) {
			let id = $($(`.tabletActive`)[0]).attr('id');
			doStep(id,'next');
		});
		function doStep(id,stepType){
			let carousell = ['Voertuiginformatie','VoertuigAfstand','VoorradenEten','voertuigBrandstof'];
			let activeindex = carousell.indexOf(id);
			let nextid;
			$.each(carousell, function(index, identifier) {
				$(`#${identifier}`).removeClass('tabletActive');
			});
			if(stepType == 'previous'){
				if(activeindex == 0){
					$('#'+carousell[carousell.length - 1]).addClass('tabletActive');
				}else{
					$('#'+carousell[activeindex - 1]).addClass('tabletActive');
				}
			}else{
				if(activeindex == carousell.length - 1){
					$('#'+carousell[0]).addClass('tabletActive');
				}else{
					$('#'+carousell[activeindex + 1]).addClass('tabletActive');

				}
			}
			
		}
		var ctx = document.getElementById('voertuiginfo');
var voertuiginfo = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [{
            label: '',
            data: [30, 25, 20, 15, 13, 10],
            backgroundColor: [
                '#2699FB',
                '#2699FB',
                '#2699FB',
                '#2699FB',
                '#2699FB',
                '#2699FB'
            ],
            borderColor: [
               '#2699FB',
                '#2699FB',
                '#2699FB',
                '#2699FB',
                '#2699FB',
                '#2699FB'
            ],
            borderWidth: 1
        }]
    },
    options: {
    		responsive:true,
    	 legend: {
    	display: false
    },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
	var omgeving = document.getElementById('omgeving');
	let omgevingChart = new Chart(omgeving, {
	    type: 'line',
	     data: {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [{
            label: '',
            data: [0,12, 15, 20, 25 , 30],
           fill: false,
            borderColor: [
               '#2699FB',
                '#2699FB',
                '#2699FB',
                '#2699FB',
                '#2699FB',
                '#2699FB'
            ]
        }]
    },
	    options: {
	    		responsive:true,
	    	scales: {
			  yAxes: [{
			    scaleLabel: {
			    	display: true,
			        labelString: 'Afstand in km',
			        fontColor: '#2699FB'
			    }
			  }]
			},
	        legend: {
    			display: false
    		}
	    }
    });

    var voorraadData = {
    labels: ["Overig voedsel ", "Geconsumeerd voedsel"],
      datasets: [
        {
            fill: true,
            backgroundColor: [
                '#7FC4FD',
                '#2699FB'],
            data: [66.5, 33.5],
// Notice the borderColor 
            borderColor:	['#7FC4FD', '#2699FB'],
            borderWidth: [2,2]
        }
    ]
};

var voorraad = document.getElementById('eten');
	let voorraadChart = new Chart(voorraad, {
	    type: 'pie',
	     data: voorraadData,

	    options: { 
	    	 legend: {
                position: 'bottom',
               
            },

	    		responsive:true,
        
		        rotation: -0.7 * Math.PI
		}
    });