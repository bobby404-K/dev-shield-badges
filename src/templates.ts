import { BadgeOptions, RenderMetrics } from './types.js';

export function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function renderFlatSvg(options: BadgeOptions, metrics: RenderMetrics): string {
  const { totalWidth, labelWidth, messageWidth, height } = metrics;
  const labelColor = options.labelColor || '#555555';
  const color = options.color || '#4c1';
  const escLabel = escapeXml(options.label);
  const escMessage = escapeXml(options.message);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${totalWidth}" height="${height}" role="img" aria-label="${escLabel}: ${escMessage}">
  <linearGradient id="s" x2="0" y2="100%">
    <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
    <stop offset="1" stop-opacity=".1"/>
  </linearGradient>
  <clipPath id="r">
    <rect width="${totalWidth}" height="${height}" rx="3" fill="#fff"/>
  </clipPath>
  <g clip-path="url(#r)">
    <rect width="${labelWidth}" height="${height}" fill="${labelColor}"/>
    <rect x="${labelWidth}" width="${messageWidth}" height="${height}" fill="${color}"/>
    <rect width="${totalWidth}" height="${height}" fill="url(#s)"/>
  </g>
  <g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110">
    <text aria-hidden="true" x="${(labelWidth * 10) / 2}" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)">${escLabel}</text>
    <text x="${(labelWidth * 10) / 2}" y="140" transform="scale(.1)" fill="#fff">${escLabel}</text>
    <text aria-hidden="true" x="${(labelWidth * 10) + (messageWidth * 10) / 2}" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)">${escMessage}</text>
    <text x="${(labelWidth * 10) + (messageWidth * 10) / 2}" y="140" transform="scale(.1)" fill="#fff">${escMessage}</text>
  </g>
</svg>`;
}
