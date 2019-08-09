import JSC from './jscharting';

export default function makeGrid(targetDiv) {
	return new JSC.Chart(targetDiv, {
		type: 'map',
		description: 'US Map with Real Median Household Income by state',
		defaultBox_boxVisible: false,
		grid: {
			enabled: true,
			exportFile: true,
			headerCol: true,
			description: 'chart or grid switch',
			height: 400,
			width: 300,
			columns: [{ header: 'State', value: '{%name}' }, { header: 'Income', value: '{%zValue:c0}' }],
			buttons: {
				chart: {
					description: 'chart button'
				},
				grid: {
					description: 'grid button'
				},
				export: { description: 'download CSV' }
			}
		},
		toolbar: {
			visible: true,
			items: {
				export_description: 'export menu',
				zoom_visible: false
			}
		},
		legend_position: 'bottom',
		title: {
			label_text: 'Real Median Household Income in US by state',
			description: 'Real Median Household Income in US by state'
		},
		palette: {
			pointValue: '{%zValue}',
			colors: ['#52E5E7', '#130CB7']
		},
		defaultPoint: {
			tooltip: '<b>%name</b><br>{%zValue:c0}',
			description: 'Real Median Household Income in %name: {%zValue:c0}'
		},
		series: [getSeries()]
	});
}

function getSeries() {
	let byState = [
		['AL', 51113],
		['AK', 72231],
		['AZ', 61125],
		['AR', 48829],
		['CA', 69759],
		['CO', 74172],
		['CT', 72780],
		['DE', 62318],
		['DC', 83382],
		['FL', 53681],
		['GA', 57016],
		['HI', 73575],
		['ID', 60208],
		['IL', 64609],
		['IN', 58873],
		['IA', 63481],
		['KS', 57872],
		['KY', 51348],
		['LA', 43903],
		['ME', 51664],
		['MD', 81084],
		['MA', 73227],
		['MI', 57700],
		['MN', 71920],
		['MS', 43441],
		['MO', 56885],
		['MT', 59087],
		['NE', 59619],
		['NV', 56550],
		['NH', 74801],
		['NJ', 72997],
		['NM', 47855],
		['NY', 62447],
		['NC', 50343],
		['ND', 59886],
		['OH', 59768],
		['OK', 55006],
		['OR', 64610],
		['PA', 63173],
		['RI', 66390],
		['SC', 54971],
		['SD', 56894],
		['TN', 55240],
		['TX', 59295],
		['UT', 71319],
		['VT', 63805],
		['VA', 71293],
		['WA', 75418],
		['WV', 45392],
		['WI', 63451],
		['WY', 57837]
	];
	let series = {
		map: 'us',
		points: []
	};
	series.points = byState.map(function(arrItem) {
		return {
			map: 'US.' + arrItem[0],
			z: arrItem[1]
		};
	});
	return series;
}
