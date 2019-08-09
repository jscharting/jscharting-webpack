import JSC from './jscharting';

export default function makeLine(targetDiv) {
	return new JSC.Chart(targetDiv, {
		title_label_text: 'Real Median Household Income in US',
		defaultBox_boxVisible: false,
		yAxis: {
			alternateGridFill: 'none'
		},
		palette: ['#3379CF'],
		xAxis: {
			crosshair_enabled: true,
			scale_type: 'time',
			formatString: 'yyyy'
		},
		defaultPoint: {
			marker_visible: false
		},
		legend_visible: false,
		series: [
			{
				points: [
					['1984', 50511],
					['1985', 51455],
					['1986', 53309],
					['1987', 53945],
					['1988', 54390],
					['1989', 55329],
					['1990', 54621],
					['1991', 53025],
					['1992', 52615],
					['1993', 52334],
					['1994', 52942],
					['1995', 54600],
					['1996', 55394],
					['1997', 56533],
					['1998', 58612],
					['1999', 60062],
					['2000', 59938],
					['2001', 58609],
					['2002', 57947],
					['2003', 57875],
					['2004', 57674],
					['2005', 58291],
					['2006', 58746],
					['2007', 59534],
					['2008', 57412],
					['2009', 57010],
					['2010', 55520],
					['2011', 54673],
					['2012', 54569],
					['2013', 56479],
					['2014', 55613],
					['2015', 58476],
					['2016', 60309],
					['2017', 61372]
				]
			}
		]
	});
}