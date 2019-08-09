import JSC from './jscharting';

export default function makePie(targetDiv) {
	const widthQuery = window.matchMedia('(max-width: 500px)');

	const widthChange = () =>
		pieChart.options({ defaultPoint_label_visible: !widthQuery.matches });

	const pieChart = new JSC.Chart(
		targetDiv,
		{
			type: 'pie',
			title: {
				label_text: 'Household Income Ranges'
			},
			legend_visible: false,
			palette: ['#52E5E7', '#45BADD', '#398ED4', '#2C63CA', '#2037C1', '#130CB7'],
			defaultPoint: {
				tooltip:
					'<b>%description (%name)</b><br> %yValue Millions of Households (%percentOfTotal%)',
				outline_width: 0,
				label: {
					text: '%description',
					autoHide: true
				}
			},
			defaultBox_boxVisible: false,
			series: [
				{
					points: [
						{
							name: 'Less than $20,000',
							y: 19.7,
							attributes_description: 'Below or near poverty level'
						},
						{ name: '$20,000 - $44,999', y: 28.7, attributes_description: 'Low income' },
						{ name: '$45,000 - $139,999', y: 57.7, attributes_description: 'Middle class' },
						{ name: '$140,000 - $149,999', y: 2.6, attributes_description: 'Upper middle class' },
						{ name: '$150,000 - $199,999', y: 9.0, attributes_description: 'High income' },
						{ name: '$200,000+', y: 9.9, attributes_description: 'Highest tax brackets' }
					]
				}
			]
		},
		widthChange
	);
	widthQuery.addListener(widthChange);
	return pieChart;
}
