import { BitmapCoordinatesRenderingScope } from 'fancy-canvas';

import { BitmapCoordinatesPaneRenderer } from './bitmap-coordinates-pane-renderer';
import { drawHorizontalLine, drawVerticalLine, LineStyle, LineWidth, setLineStyle } from './draw-line';

export interface CrosshairLineStyle {
	lineStyle: LineStyle;
	lineWidth: LineWidth;
	color: string;
	visible: boolean;
}

export interface CenterMarkerStyle {
	lineLength: number;
	lineWidth: number;
	color: string;
	visible: boolean;
}

export interface CrosshairRendererData {
	vertLine: CrosshairLineStyle;
	horzLine: CrosshairLineStyle;
	centerMarker: CenterMarkerStyle;
	x: number;
	y: number;
}

export class CrosshairRenderer extends BitmapCoordinatesPaneRenderer {
	private readonly _data: CrosshairRendererData | null;

	public constructor(data: CrosshairRendererData | null) {
		super();
		this._data = data;
	}

	// eslint-disable-next-line complexity
	protected override _drawImpl({ context: ctx, bitmapSize, horizontalPixelRatio, verticalPixelRatio }: BitmapCoordinatesRenderingScope): void {
		if (this._data === null) {
			return;
		}

		const vertLinesVisible = this._data.vertLine.visible;
		const horzLinesVisible = this._data.horzLine.visible;

		if (!vertLinesVisible && !horzLinesVisible) {
			return;
		}

		const x = Math.round(this._data.x * horizontalPixelRatio);
		const y = Math.round(this._data.y * verticalPixelRatio);

		ctx.lineCap = 'butt';

		if (vertLinesVisible && x >= 0) {
			ctx.lineWidth = Math.floor(this._data.vertLine.lineWidth * horizontalPixelRatio);
			ctx.strokeStyle = this._data.vertLine.color;
			ctx.fillStyle = this._data.vertLine.color;
			setLineStyle(ctx, this._data.vertLine.lineStyle);
			drawVerticalLine(ctx, x, 0, bitmapSize.height);
		}

		if (horzLinesVisible && y >= 0) {
			ctx.lineWidth = Math.floor(this._data.horzLine.lineWidth * verticalPixelRatio);
			ctx.strokeStyle = this._data.horzLine.color;
			ctx.fillStyle = this._data.horzLine.color;
			setLineStyle(ctx, this._data.horzLine.lineStyle);
			drawHorizontalLine(ctx, y, 0, bitmapSize.width);
		}

		if (this._data.centerMarker && this._data.centerMarker.visible && vertLinesVisible && horzLinesVisible && x >= 0 && y >= 0) {
			this._drawCenterMarker(ctx, x, y, this._data.centerMarker);
		}
	}

	private _drawCenterMarker(ctx: CanvasRenderingContext2D, x: number, y: number, centerMarker: CenterMarkerStyle): void {
		ctx.lineWidth = centerMarker.lineWidth;
		ctx.strokeStyle = centerMarker.color;
		ctx.beginPath();
		ctx.moveTo(x - centerMarker.lineLength, y);
		ctx.lineTo(x + centerMarker.lineLength, y);
		ctx.moveTo(x, y - centerMarker.lineLength);
		ctx.lineTo(x, y + centerMarker.lineLength);
		ctx.stroke();
	}
}
