import { CrosshairMode, CrosshairOptions } from '../../model/crosshair';
import { LineStyle } from '../../renderers/draw-line';

export const crosshairOptionsDefaults: CrosshairOptions = {
	vertLine: {
		color: '#9598A1',
		width: 1,
		style: LineStyle.LargeDashed,
		visible: true,
		labelVisible: true,
		labelBackgroundColor: '#131722',
		labelCornerRadius: 10,
	},
	horzLine: {
		color: '#9598A1',
		width: 1,
		style: LineStyle.LargeDashed,
		visible: true,
		labelVisible: true,
		labelBackgroundColor: '#131722',
		labelCornerRadius: 10,
	},
	mode: CrosshairMode.Magnet,
	centerMarker: {
		visible: false,
		color: '#9598A1',
		lineWidth: 1,
		lineLength: 10,
	},
};
