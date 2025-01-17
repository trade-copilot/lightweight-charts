/**
 * Fills rectangle's inner border (so, all the filled area is limited by the [x, x + width]*[y, y + height] region)
 * ```
 * (x, y)
 * O***********************|*****
 * |        border         |  ^
 * |   *****************   |  |
 * |   |               |   |  |
 * | b |               | b |  h
 * | o |               | o |  e
 * | r |               | r |  i
 * | d |               | d |  g
 * | e |               | e |  h
 * | r |               | r |  t
 * |   |               |   |  |
 * |   *****************   |  |
 * |        border         |  v
 * |***********************|*****
 * |                       |
 * |<------- width ------->|
 * ```
 *
 * @param ctx - Context to draw on
 * @param x - Left side of the target rectangle
 * @param y - Top side of the target rectangle
 * @param width - Width of the target rectangle
 * @param height - Height of the target rectangle
 * @param borderWidth - Width of border to fill, must be less than width and height of the target rectangle
 */
export function fillRectInnerBorder(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, borderWidth: number): void {
	// horizontal (top and bottom) edges
	ctx.fillRect(x + borderWidth, y, width - borderWidth * 2, borderWidth);
	ctx.fillRect(x + borderWidth, y + height - borderWidth, width - borderWidth * 2, borderWidth);
	// vertical (left and right) edges
	ctx.fillRect(x, y, borderWidth, height);
	ctx.fillRect(x + width - borderWidth, y, borderWidth, height);
}

export function clearRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, clearColor: string): void {
	ctx.save();
	ctx.globalCompositeOperation = 'copy';
	ctx.fillStyle = clearColor;
	ctx.fillRect(x, y, w, h);
	ctx.restore();
}

export type LeftTopRightTopRightBottomLeftBottomRadii = [number, number, number, number];

function changeBorderRadius(borderRadius: LeftTopRightTopRightBottomLeftBottomRadii, offset: number): typeof borderRadius {
	return borderRadius.map((x: number) => x === 0 ? x : x + offset) as typeof borderRadius;
}

export function drawRoundRect(
	// eslint:disable-next-line:max-params
	ctx: CanvasRenderingContext2D,
	x: number,
	y: number,
	w: number,
	h: number,
	radii: LeftTopRightTopRightBottomLeftBottomRadii
): void {
	const leftX = x + 2.5; // changing this to make label centered in the price pill

	/**
	 * As of May 2023, all of the major browsers now support ctx.roundRect() so we should
	 * be able to switch to the native version soon.
	 */
	ctx.beginPath();
	ctx.lineTo(leftX + w - radii[1], y);
	if (radii[1] !== 0) {
		ctx.arcTo(leftX + w, y, leftX + w, y + radii[1], radii[1]);
	}

	ctx.lineTo(leftX + w, y + h - radii[2]);
	if (radii[2] !== 0) {
		ctx.arcTo(leftX + w, y + h, leftX + w - radii[2], y + h, radii[2]);
	}

	ctx.lineTo(leftX + radii[3], y + h);
	if (radii[3] !== 0) {
		ctx.arcTo(leftX, y + h, leftX, y + h - radii[3], radii[3]);
	}

	ctx.lineTo(leftX, y + radii[0]);
	if (radii[0] !== 0) {
		ctx.arcTo(leftX, y, leftX + radii[0], y, radii[0]);
	}
}

// eslint-disable-next-line max-params
export function drawRoundRectWithInnerBorder(
	ctx: CanvasRenderingContext2D,
	left: number,
	top: number,
	width: number,
	height: number,
	backgroundColor: string,
	borderWidth: number = 0,
	borderRadius: LeftTopRightTopRightBottomLeftBottomRadii = [0, 0, 0, 0],
	borderColor: string = ''
): void {
	ctx.save();

	if (!borderWidth || !borderColor || borderColor === backgroundColor) {
		// Adjust left and top coordinates by half of the borderWidth
		const adjustedLeft = left + borderWidth / 2;
		const adjustedTop = top + borderWidth / 2;
		drawRoundRect(ctx, adjustedLeft, adjustedTop, width - borderWidth, height - borderWidth, borderRadius);
		ctx.fillStyle = backgroundColor;
		ctx.fill();
		ctx.restore();
		return;
	}

	const halfBorderWidth = borderWidth / 2;

	// Draw body
	if (backgroundColor !== 'transparent') {
		const innerRadii = changeBorderRadius(borderRadius, - halfBorderWidth);
		drawRoundRect(ctx, left + borderWidth, top + borderWidth, width - borderWidth * 2, height - borderWidth * 2, innerRadii);

		ctx.fillStyle = backgroundColor;
		ctx.fill();
	}

	// Draw border
	if (borderColor !== 'transparent') {
		const outerRadii = changeBorderRadius(borderRadius, - halfBorderWidth);
		drawRoundRect(ctx, left + halfBorderWidth, top + halfBorderWidth, width - borderWidth, height - borderWidth, outerRadii);

		ctx.lineWidth = borderWidth;
		ctx.strokeStyle = borderColor;
		ctx.closePath();
		ctx.stroke();
	}

	ctx.restore();
}

// eslint-disable-next-line max-params
export function clearRectWithGradient(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, topColor: string, bottomColor: string): void {
	ctx.save();

	ctx.globalCompositeOperation = 'copy';
	const gradient = ctx.createLinearGradient(0, 0, 0, h);
	gradient.addColorStop(0, topColor);
	gradient.addColorStop(1, bottomColor);
	ctx.fillStyle = gradient;
	ctx.fillRect(x, y, w, h);

	ctx.restore();
}
