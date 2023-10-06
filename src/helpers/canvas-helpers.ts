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

export type TopBottomRadii = [number, number];
export type LeftTopRightTopRightBottomLeftBottomRadii = [number, number, number, number];
export type DrawRoundRectRadii = number | TopBottomRadii | LeftTopRightTopRightBottomLeftBottomRadii;

function changeBorderRadius(borderRadius: DrawRoundRectRadii, offset: number): typeof borderRadius {
	if (Array.isArray(borderRadius)) {
		return borderRadius.map((x: number) => x === 0 ? x : x + offset) as typeof borderRadius;
	}
	return borderRadius + offset;
}

export function drawRoundRect(
	// eslint:disable-next-line:max-params
	ctx: CanvasRenderingContext2D,
	x: number,
	y: number,
	w: number,
	h: number,
	radii: DrawRoundRectRadii
): void {
	let radiusLeftTop: number;
	let radiusRightTop: number;
	let radiusRightBottom: number;
	let radiusLeftBottom: number;
	const leftX = x + 2.5; // changing this to make label centered in the price pill
	if (!Array.isArray(radii)) {
		const oneRadius = Math.max(0, radii);
		radiusLeftTop = oneRadius;
		radiusRightTop = oneRadius;
		radiusRightBottom = oneRadius;
		radiusLeftBottom = oneRadius;
	} else if (radii.length === 2) {
		const cornerRadius1 = Math.max(0, radii[0]);
		const cornerRadius2 = Math.max(0, radii[1]);
		radiusLeftTop = cornerRadius1;
		radiusRightTop = cornerRadius1;
		radiusRightBottom = cornerRadius2;
		radiusLeftBottom = cornerRadius2;
	} else if (radii.length === 4) {
		radiusLeftTop = Math.max(0, radii[0]);
		radiusRightTop = Math.max(0, radii[1]);
		radiusRightBottom = Math.max(0, radii[2]);
		radiusLeftBottom = Math.max(0, radii[3]);
	} else {
		throw new Error(`Wrong border radius - it should be like css border radius`);
	}

	ctx.beginPath();
	ctx.moveTo(leftX + radiusLeftTop, y);
	ctx.lineTo(leftX + w - radiusRightTop, y);
	if (radiusRightTop !== 0) {
		ctx.arcTo(leftX + w, y, leftX + w, y + radiusRightTop, radiusRightTop);
	}

	ctx.lineTo(leftX + w, y + h - radiusRightBottom);
	if (radiusRightBottom !== 0) {
		ctx.arcTo(leftX + w, y + h, leftX + w - radiusRightBottom, y + h, radiusRightBottom);
	}

	ctx.lineTo(leftX + radiusLeftBottom, y + h);
	if (radiusLeftBottom !== 0) {
		ctx.arcTo(leftX, y + h, leftX, y + h - radiusLeftBottom, radiusLeftBottom);
	}

	ctx.lineTo(leftX, y + radiusLeftTop);
	if (radiusLeftTop !== 0) {
		ctx.arcTo(leftX, y, leftX + radiusLeftTop, y, radiusLeftTop);
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
	borderRadius: DrawRoundRectRadii = 0,
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
