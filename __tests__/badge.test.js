import assert from 'node:assert';
import test from 'node:test';
import { BadgeGenerator } from '../dist/badge.js';

test('BadgeGenerator produces valid SVG with given parameters', () => {
  const svg = BadgeGenerator.generate({ label: 'coverage', message: '98%', color: '#2ea44f' });
  assert.ok(svg.includes('<svg'));
  assert.ok(svg.includes('coverage'));
  assert.ok(svg.includes('98%'));
  assert.ok(svg.includes('#2ea44f'));
});
