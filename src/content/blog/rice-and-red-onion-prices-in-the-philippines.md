---
title: 'Rice and Red Onion Prices in the Philippines'
description: 'This is an analysis of the data that I gathered from the Food Prices in the Philippines dataset from the World Food Programme.'
pubDate: 'August 16, 2024'
heroImage: '/a-bunch-of-red-onions-banner-image-rice-and-red-onion-prices-in-the-philippines.jpg'
---
This is an analysis of the data that I gathered from the <a href="https://data.humdata.org/dataset/wfp-food-prices-for-philippines">Food Prices in the Philippines dataset from the World Food Programme</a>.

Since this is just a practice run, this analysis (or whatever you might call it) only includes **descriptive statistics for rice and red onion prices**. There are no correlations, no testing, and absolutely no post-ad hoc here.

Also, my writing is kinda rusty. I know. Deal with it.

## Average Yearly Price of Rice in Nueva Ecija
<canvas id="average_yearly_price_per_kilo_of_rice_in_nueva_ecija" style="width:100%;max-width:700px"></canvas>
**Figure 1.** *The average yearly price per kilo of rice in Nueva Ecija.*

The province of **Nueva Ecija**, better known as the ***Rice Granary of the Philippines***, is considered as the main <a href="https://region3.dilg.gov.ph/index.php/news-events/54-provincial-and-city-pages/nueva-ecija/484-the-province-of-nueva-ecija">rice-producing province</a> of the country. As of 2021, the province is <a href="https://rfo3.da.gov.ph/central-luzon-attains-3-7m-mt-or-2-92-increase-in-rice-production/">known to have produced 3 million metric tons of rice</a>, feeding a nation of mainly rice-consumers on its stellar back.

The average price of rice in Nueva Ecija seems to have jumped in the years 2007-2008 and 2013-2014. These years coincide with two <a href="https://www.investopedia.com/articles/investing/011116/3-financial-crises-21st-century.asp">economic financial crises</a> that may have had an adverse effect on the global economy: the <a href="https://www.investopedia.com/articles/economics/09/financial-crisis-review.asp">2007-2008 financial crisis</a> and the <a href="https://en.wikipedia.org/wiki/Russian_financial_crisis_(2014%E2%80%932016)">2014-2016 Russian financial crisis</a>. How these crises may have affected the price of rice, however, remains unexplained. In fact, they might not even have had much of an effect at all.

## Average Yearly Prices of Rice in NCR
<canvas id="average_yearly_price_per_kilo_of_rice_in_ncr" style="width:100%;max-width:700px"></canvas>
**Figure 2.** *The average yearly price per kilo of rice in NCR.*

Possibly due to its close geographic proximity and easy land transportation access via the [Pan-Philippine Highway](https://en.wikipedia.org/wiki/Pan-Philippine_Highway) (aka Maharlika Highway / *Daang Maharlika* / *Dalang Halangdon*), the price of rice in the **National Capital Region** (NCR) shares the same economic trends as that of Nueva Ecija's. As such, there were huge jumps in price during 2007-2008 and 2013-2014. Further, the sudden drop in average price during 2018-2019 is more noticeable in the NCR graph than in the Nueva Ecija graph, suggesting a sudden drop in the price of rice even before the [lockdowns of the COVID-19 pandemic in the Philippines](https://foreignpolicy.com/2020/03/14/duterte-quarantine-philippines-coronavirus-lockdown-launches-manila-into-pandemonium/).

## Average Yearly Prices of Red Onions in Nueva Ecija
<canvas id="average_yearly_price_per_kilo_of_red_onions_in_nueva_ecija" style="width:100%;max-width:700px"></canvas>
**Figure 3.** *The average yearly price per kilo of red onions in Nueva Ecija.*

**Nueva Ecija** is also [a major producer of red onions](https://www.pna.gov.ph/articles/1218193), projected to produce 300,000 metric tons in 2024. As such, the average price of onions has fallen by 14.29% from its historical peak of 160 per kilo in 2022.

## Average Yearly Prices of Red Onions in NCR
<canvas id="average_yearly_price_per_kilo_of_red_onions_in_ncr" style="width:100%;max-width:700px"></canvas>
**Figure 4.** *The average yearly price per kilo of red onions in NCR.*

On the other hand, the average price for red onions in NCR jumped to a historical peak of 188 per kilogram in 2023. It is possible that this price would have gone down by 2024 [due to importation](https://www.philstar.com/headlines/2023/12/02/2315802/21000-mt-imported-onions-arrive-yearend). In fact, this could have been part of the reason why the prices in NCR appear more stable at face value.

## Conclusion
In both rice and red onions, the trend seems to favor an increase in price per kilogram of produce. However, this increase seems more noticeable in the prices of rice than in the prices of red onions. Further research is required to show just how much these prices are affected by economic trends in the global market, as well as the effect of price changes in other domestic areas which produce similar produce.
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>
<script>
		// average_yearly_price_per_kilo_of_rice_in_nueva_ecija
		const figure1Data = [
			{"year":2000,"avg":18.1833333333333333}, 
			{"year":2001,"avg":18.9791666666666667}, 
			{"year":2002,"avg":19.0041666666666667}, 
			{"year":2003,"avg":19.0000000000000000}, 
			{"year":2004,"avg":18.7541666666666667}, 
			{"year":2005,"avg":20.3833333333333333}, 
			{"year":2006,"avg":20.3583333333333333}, 
			{"year":2007,"avg":21.2866666666666667}, 
			{"year":2008,"avg":30.0375000000000000}, 
			{"year":2009,"avg":30.2541666666666667}, 
			{"year":2010,"avg":30.1875000000000000}, 
			{"year":2011,"avg":31.4041666666666667}, 
			{"year":2012,"avg":31.7041666666666667}, 
			{"year":2013,"avg":32.5791666666666667}, 
			{"year":2014,"avg":39.4266666666666667}, 
			{"year":2015,"avg":38.0754545454545455}, 
			{"year":2016,"avg":37.8941666666666667}, 
			{"year":2017,"avg":38.7818181818181818}, 
			{"year":2018,"avg":40.6263636363636364}, 
			{"year":2019,"avg":36.5427272727272727}, 
			{"year":2020,"avg":35.9200000000000000}, 
			{"year":2021,"avg":35.1366666666666667}, 
			{"year":2022,"avg":36.3550000000000000}, 
			{"year":2023,"avg":41.2920000000000000}
		]

		let figure1XValues = [];
		let figure1YValues = [];

		for (let i = 0; i < figure1Data.length; i++) {
			figure1XValues[figure1XValues.length] = figure1Data[i].year;
			figure1YValues[figure1YValues.length] = figure1Data[i].avg;
		}
		
		new Chart("average_yearly_price_per_kilo_of_rice_in_nueva_ecija", {
		  type: "line",
		  data: {
		    labels: figure1XValues,
		    datasets: [{
		      fill: false,
		      lineTension: 0,
		      backgroundColor: "rgba(0,0,255,1.0)",
		      borderColor: "rgba(0,0,255,0.1)",
		      data: figure1YValues
		    }]
		  },
		  options: {
		    legend: {display: false},
		  }
		});
	
		// average_yearly_price_per_kilo_of_rice_in_ncr
		const figure2Data = [
			{"year":2000,"avg":17.3656250000000000}, 
			{"year":2001,"avg":17.2125000000000000}, 
			{"year":2002,"avg":17.3033333333333333}, 
			{"year":2003,"avg":17.5611764705882353}, 
			{"year":2004,"avg":17.8383333333333333}, 
			{"year":2005,"avg":19.7600000000000000}, 
			{"year":2006,"avg":20.2576470588235294}, 
			{"year":2007,"avg":21.4446153846153846}, 
			{"year":2008,"avg":29.3681818181818182}, 
			{"year":2009,"avg":28.8553333333333333}, 
			{"year":2010,"avg":29.0050000000000000}, 
			{"year":2011,"avg":29.1853333333333333}, 
			{"year":2012,"avg":29.4786666666666667}, 
			{"year":2013,"avg":31.1233333333333333}, 
			{"year":2014,"avg":38.2438461538461538}, 
			{"year":2015,"avg":35.6742857142857143}, 
			{"year":2016,"avg":34.1720000000000000}, 
			{"year":2017,"avg":35.4884615384615385}, 
			{"year":2018,"avg":39.2046153846153846}, 
			{"year":2019,"avg":34.3241666666666667}, 
			{"year":2020,"avg":35.3085714285714286}, 
			{"year":2021,"avg":38.0714285714285714}, 
			{"year":2022,"avg":38.9762500000000000}, 
			{"year":2023,"avg":40.0571428571428571}, 
			{"year":2024,"avg":44.0100000000000000}
		]
		let figure2XValues = [];
		let figure2YValues = [];

		for (let i = 0; i < figure2Data.length; i++) {
			figure2XValues[figure2XValues.length] = figure2Data[i].year;
			figure2YValues[figure2YValues.length] = figure2Data[i].avg;
		}
		
		new Chart("average_yearly_price_per_kilo_of_rice_in_ncr", {
		  type: "line",
		  data: {
		    labels: figure2XValues,
		    datasets: [{
		      fill: false,
		      lineTension: 0,
		      backgroundColor: "rgba(0,0,255,1.0)",
		      borderColor: "rgba(0,0,255,0.1)",
		      data: figure2YValues
		    }]
		  },
		  options: {
		    legend: {display: false},
		  }
		});

		// average_yearly_price_per_kilo_of_red_onions_in_nueva_ecija
		const figure3Data = [
			{"year":2008,"avg":79.1400000000000000}, 
			{"year":2009,"avg":64.5283333333333333}, 
			{"year":2010,"avg":52.5360000000000000}, 
			{"year":2012,"avg":75.6416666666666667}, 
			{"year":2013,"avg":60.8200000000000000}, 
			{"year":2014,"avg":56.0000000000000000}, 
			{"year":2015,"avg":56.3980000000000000}, 
			{"year":2016,"avg":86.6883333333333333}, 
			{"year":2017,"avg":64.4925000000000000}, 
			{"year":2018,"avg":84.6400000000000000}, 
			{"year":2019,"avg":55.9050000000000000}, 
			{"year":2020,"avg":149.2500000000000000}, 
			{"year":2021,"avg":108.3333333333333333}, 
			{"year":2022,"avg":161.6666666666666667}, 
			{"year":2023,"avg":121.6666666666666667}, 
			{"year":2024,"avg":126.2500000000000000}
		]
		let figure3XValues = [];
		let figure3YValues = [];

		for (let i = 0; i < figure3Data.length; i++) {
			figure3XValues[figure3XValues.length] = figure3Data[i].year;
			figure3YValues[figure3YValues.length] = figure3Data[i].avg;
		}
		
		new Chart("average_yearly_price_per_kilo_of_red_onions_in_nueva_ecija", {
		  type: "line",
		  data: {
		    labels: figure3XValues,
		    datasets: [{
		      fill: false,
		      lineTension: 0,
		      backgroundColor: "rgba(0,0,255,1.0)",
		      borderColor: "rgba(0,0,255,0.1)",
		      data: figure3YValues
		    }]
		  },
		  options: {
		    legend: {display: false},
		  }
		});

		// average_yearly_price_per_kilo_of_red_onions_in_ncr
		const figure4Data = [
			{"year":2008,"avg":86.8966666666666667}, 
			{"year":2009,"avg":63.3114285714285714}, 
			{"year":2010,"avg":51.3133333333333333}, 
			{"year":2012,"avg":74.5780000000000000}, 
			{"year":2013,"avg":57.4125000000000000}, 
			{"year":2014,"avg":42.7900000000000000}, 
			{"year":2017,"avg":65.5525000000000000}, 
			{"year":2018,"avg":93.0066666666666667}, 
			{"year":2019,"avg":66.7600000000000000}, 
			{"year":2020,"avg":116.4733333333333333}, 
			{"year":2021,"avg":122.9016666666666667}, 
			{"year":2022,"avg":87.0925000000000000}, 
			{"year":2023,"avg":188.5300000000000000}
		]
		let figure4XValues = [];
		let figure4YValues = [];

		for (let i = 0; i < figure4Data.length; i++) {
			figure4XValues[figure4XValues.length] = figure4Data[i].year;
			figure4YValues[figure4YValues.length] = figure4Data[i].avg;
		}
		
		new Chart("average_yearly_price_per_kilo_of_red_onions_in_ncr", {
		  type: "line",
		  data: {
		    labels: figure4XValues,
		    datasets: [{
		      fill: false,
		      lineTension: 0,
		      backgroundColor: "rgba(0,0,255,1.0)",
		      borderColor: "rgba(0,0,255,0.1)",
		      data: figure4YValues
		    }]
		  },
		  options: {
		    legend: {display: false},
		  }
		});
</script>
