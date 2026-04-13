#!/usr/bin/env node
/**
 * AUTO-GENERATED — do not edit by hand.
 * Comprehensive per-property tests for CSSStyleDeclaration.
 *
 * Covers every exposed CSS property with:
 *   - set/get round-trip
 *   - overwrite with a second value
 *   - removeProperty
 *   - global keyword acceptance (inherit)
 *   - invalid value rejection (keyword-only properties)
 *   - shorthand expansion
 *   - alias delegation
 */

import CSSStyleDeclaration from '../out-compiled/css/declaration/CSSStyleDeclaration.js';

let passed = 0;
let failed = 0;
const failures = [];

function assertEq(actual, expected, message) {
  if (actual === expected) {
    passed++;
  } else {
    failed++;
    failures.push(`${message}: expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
  }
}

function fresh() { return new CSSStyleDeclaration(); }

// ============ LONGHAND PROPERTIES ============

// --- animation-composition ---
{
  const s = fresh();
  s.animationComposition = 'replace';
  assertEq(s.animationComposition, 'replace', 'animation-composition: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('animation-composition'), 'replace', 'animation-composition: getPropertyValue matches accessor');
  s.animationComposition = 'add';
  assertEq(s.animationComposition, 'add', 'animation-composition: overwrite with second value');
  s.removeProperty('animation-composition');
  assertEq(s.animationComposition, '', 'animation-composition: removeProperty clears value');
  s.setProperty('animation-composition', 'inherit');
  assertEq(s.getPropertyValue('animation-composition'), 'inherit', 'animation-composition: accepts inherit');
  s.animationComposition = '';
  assertEq(s.animationComposition, '', 'animation-composition: empty string removes');
  s.animationComposition = 'replace';
  s.animationComposition = 'definitely-not-a-valid-value-xyz';
  assertEq(s.animationComposition, 'replace', 'animation-composition: rejects invalid keyword');
}

// --- animation-delay ---
{
  const s = fresh();
  s.animationDelay = '1s';
  assertEq(s.animationDelay, '1s', 'animation-delay: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('animation-delay'), '1s', 'animation-delay: getPropertyValue matches accessor');
  s.animationDelay = 'inherit';
  assertEq(s.animationDelay, 'inherit', 'animation-delay: overwrite with second value');
  s.removeProperty('animation-delay');
  assertEq(s.animationDelay, '', 'animation-delay: removeProperty clears value');
  s.setProperty('animation-delay', 'inherit');
  assertEq(s.getPropertyValue('animation-delay'), 'inherit', 'animation-delay: accepts inherit');
  s.animationDelay = '';
  assertEq(s.animationDelay, '', 'animation-delay: empty string removes');
}

// --- animation-direction ---
{
  const s = fresh();
  s.animationDirection = 'normal';
  assertEq(s.animationDirection, 'normal', 'animation-direction: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('animation-direction'), 'normal', 'animation-direction: getPropertyValue matches accessor');
  s.animationDirection = 'reverse';
  assertEq(s.animationDirection, 'reverse', 'animation-direction: overwrite with second value');
  s.removeProperty('animation-direction');
  assertEq(s.animationDirection, '', 'animation-direction: removeProperty clears value');
  s.setProperty('animation-direction', 'inherit');
  assertEq(s.getPropertyValue('animation-direction'), 'inherit', 'animation-direction: accepts inherit');
  s.animationDirection = '';
  assertEq(s.animationDirection, '', 'animation-direction: empty string removes');
  s.animationDirection = 'normal';
  s.animationDirection = 'definitely-not-a-valid-value-xyz';
  assertEq(s.animationDirection, 'normal', 'animation-direction: rejects invalid keyword');
}

// --- animation-duration ---
{
  const s = fresh();
  s.animationDuration = '1s';
  assertEq(s.animationDuration, '1s', 'animation-duration: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('animation-duration'), '1s', 'animation-duration: getPropertyValue matches accessor');
  s.animationDuration = 'inherit';
  assertEq(s.animationDuration, 'inherit', 'animation-duration: overwrite with second value');
  s.removeProperty('animation-duration');
  assertEq(s.animationDuration, '', 'animation-duration: removeProperty clears value');
  s.setProperty('animation-duration', 'inherit');
  assertEq(s.getPropertyValue('animation-duration'), 'inherit', 'animation-duration: accepts inherit');
  s.animationDuration = '';
  assertEq(s.animationDuration, '', 'animation-duration: empty string removes');
}

// --- animation-fill-mode ---
{
  const s = fresh();
  s.animationFillMode = 'none';
  assertEq(s.animationFillMode, 'none', 'animation-fill-mode: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('animation-fill-mode'), 'none', 'animation-fill-mode: getPropertyValue matches accessor');
  s.animationFillMode = 'forwards';
  assertEq(s.animationFillMode, 'forwards', 'animation-fill-mode: overwrite with second value');
  s.removeProperty('animation-fill-mode');
  assertEq(s.animationFillMode, '', 'animation-fill-mode: removeProperty clears value');
  s.setProperty('animation-fill-mode', 'inherit');
  assertEq(s.getPropertyValue('animation-fill-mode'), 'inherit', 'animation-fill-mode: accepts inherit');
  s.animationFillMode = '';
  assertEq(s.animationFillMode, '', 'animation-fill-mode: empty string removes');
  s.animationFillMode = 'none';
  s.animationFillMode = 'definitely-not-a-valid-value-xyz';
  assertEq(s.animationFillMode, 'none', 'animation-fill-mode: rejects invalid keyword');
}

// --- animation-iteration-count ---
{
  const s = fresh();
  s.animationIterationCount = 'infinite';
  assertEq(s.animationIterationCount, 'infinite', 'animation-iteration-count: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('animation-iteration-count'), 'infinite', 'animation-iteration-count: getPropertyValue matches accessor');
  s.animationIterationCount = 'inherit';
  assertEq(s.animationIterationCount, 'inherit', 'animation-iteration-count: overwrite with second value');
  s.removeProperty('animation-iteration-count');
  assertEq(s.animationIterationCount, '', 'animation-iteration-count: removeProperty clears value');
  s.setProperty('animation-iteration-count', 'inherit');
  assertEq(s.getPropertyValue('animation-iteration-count'), 'inherit', 'animation-iteration-count: accepts inherit');
  s.animationIterationCount = '';
  assertEq(s.animationIterationCount, '', 'animation-iteration-count: empty string removes');
}

// --- animation-name ---
{
  const s = fresh();
  s.animationName = 'none';
  assertEq(s.animationName, 'none', 'animation-name: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('animation-name'), 'none', 'animation-name: getPropertyValue matches accessor');
  s.animationName = 'inherit';
  assertEq(s.animationName, 'inherit', 'animation-name: overwrite with second value');
  s.removeProperty('animation-name');
  assertEq(s.animationName, '', 'animation-name: removeProperty clears value');
  s.setProperty('animation-name', 'inherit');
  assertEq(s.getPropertyValue('animation-name'), 'inherit', 'animation-name: accepts inherit');
  s.animationName = '';
  assertEq(s.animationName, '', 'animation-name: empty string removes');
  s.animationName = 'none';
  s.animationName = 'definitely-not-a-valid-value-xyz';
  assertEq(s.animationName, 'none', 'animation-name: rejects invalid keyword');
}

// --- animation-play-state ---
{
  const s = fresh();
  s.animationPlayState = 'running';
  assertEq(s.animationPlayState, 'running', 'animation-play-state: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('animation-play-state'), 'running', 'animation-play-state: getPropertyValue matches accessor');
  s.animationPlayState = 'paused';
  assertEq(s.animationPlayState, 'paused', 'animation-play-state: overwrite with second value');
  s.removeProperty('animation-play-state');
  assertEq(s.animationPlayState, '', 'animation-play-state: removeProperty clears value');
  s.setProperty('animation-play-state', 'inherit');
  assertEq(s.getPropertyValue('animation-play-state'), 'inherit', 'animation-play-state: accepts inherit');
  s.animationPlayState = '';
  assertEq(s.animationPlayState, '', 'animation-play-state: empty string removes');
  s.animationPlayState = 'running';
  s.animationPlayState = 'definitely-not-a-valid-value-xyz';
  assertEq(s.animationPlayState, 'running', 'animation-play-state: rejects invalid keyword');
}

// --- animation-range-start ---
{
  const s = fresh();
  s.animationRangeStart = 'initial';
  assertEq(s.animationRangeStart, 'initial', 'animation-range-start: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('animation-range-start'), 'initial', 'animation-range-start: getPropertyValue matches accessor');
  s.animationRangeStart = 'inherit';
  assertEq(s.animationRangeStart, 'inherit', 'animation-range-start: overwrite with second value');
  s.removeProperty('animation-range-start');
  assertEq(s.animationRangeStart, '', 'animation-range-start: removeProperty clears value');
  s.setProperty('animation-range-start', 'inherit');
  assertEq(s.getPropertyValue('animation-range-start'), 'inherit', 'animation-range-start: accepts inherit');
  s.animationRangeStart = '';
  assertEq(s.animationRangeStart, '', 'animation-range-start: empty string removes');
}

// --- animation-range-end ---
{
  const s = fresh();
  s.animationRangeEnd = 'initial';
  assertEq(s.animationRangeEnd, 'initial', 'animation-range-end: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('animation-range-end'), 'initial', 'animation-range-end: getPropertyValue matches accessor');
  s.animationRangeEnd = 'inherit';
  assertEq(s.animationRangeEnd, 'inherit', 'animation-range-end: overwrite with second value');
  s.removeProperty('animation-range-end');
  assertEq(s.animationRangeEnd, '', 'animation-range-end: removeProperty clears value');
  s.setProperty('animation-range-end', 'inherit');
  assertEq(s.getPropertyValue('animation-range-end'), 'inherit', 'animation-range-end: accepts inherit');
  s.animationRangeEnd = '';
  assertEq(s.animationRangeEnd, '', 'animation-range-end: empty string removes');
}

// --- animation-timeline ---
{
  const s = fresh();
  s.animationTimeline = 'none';
  assertEq(s.animationTimeline, 'none', 'animation-timeline: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('animation-timeline'), 'none', 'animation-timeline: getPropertyValue matches accessor');
  s.animationTimeline = 'auto';
  assertEq(s.animationTimeline, 'auto', 'animation-timeline: overwrite with second value');
  s.removeProperty('animation-timeline');
  assertEq(s.animationTimeline, '', 'animation-timeline: removeProperty clears value');
  s.setProperty('animation-timeline', 'inherit');
  assertEq(s.getPropertyValue('animation-timeline'), 'inherit', 'animation-timeline: accepts inherit');
  s.animationTimeline = '';
  assertEq(s.animationTimeline, '', 'animation-timeline: empty string removes');
  s.animationTimeline = 'none';
  s.animationTimeline = 'definitely-not-a-valid-value-xyz';
  assertEq(s.animationTimeline, 'none', 'animation-timeline: rejects invalid keyword');
}

// --- animation-timing-function ---
{
  const s = fresh();
  s.animationTimingFunction = 'linear';
  assertEq(s.animationTimingFunction, 'linear', 'animation-timing-function: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('animation-timing-function'), 'linear', 'animation-timing-function: getPropertyValue matches accessor');
  s.animationTimingFunction = 'ease';
  assertEq(s.animationTimingFunction, 'ease', 'animation-timing-function: overwrite with second value');
  s.removeProperty('animation-timing-function');
  assertEq(s.animationTimingFunction, '', 'animation-timing-function: removeProperty clears value');
  s.setProperty('animation-timing-function', 'inherit');
  assertEq(s.getPropertyValue('animation-timing-function'), 'inherit', 'animation-timing-function: accepts inherit');
  s.animationTimingFunction = '';
  assertEq(s.animationTimingFunction, '', 'animation-timing-function: empty string removes');
  s.animationTimingFunction = 'linear';
  s.animationTimingFunction = 'definitely-not-a-valid-value-xyz';
  assertEq(s.animationTimingFunction, 'linear', 'animation-timing-function: rejects invalid keyword');
}

// --- animation-trigger ---
{
  const s = fresh();
  s.animationTrigger = 'none';
  assertEq(s.animationTrigger, 'none', 'animation-trigger: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('animation-trigger'), 'none', 'animation-trigger: getPropertyValue matches accessor');
  s.animationTrigger = 'inherit';
  assertEq(s.animationTrigger, 'inherit', 'animation-trigger: overwrite with second value');
  s.removeProperty('animation-trigger');
  assertEq(s.animationTrigger, '', 'animation-trigger: removeProperty clears value');
  s.setProperty('animation-trigger', 'inherit');
  assertEq(s.getPropertyValue('animation-trigger'), 'inherit', 'animation-trigger: accepts inherit');
  s.animationTrigger = '';
  assertEq(s.animationTrigger, '', 'animation-trigger: empty string removes');
  s.animationTrigger = 'none';
  s.animationTrigger = 'definitely-not-a-valid-value-xyz';
  assertEq(s.animationTrigger, 'none', 'animation-trigger: rejects invalid keyword');
}

// --- timeline-trigger-name ---
{
  const s = fresh();
  s.timelineTriggerName = 'initial';
  assertEq(s.timelineTriggerName, 'initial', 'timeline-trigger-name: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('timeline-trigger-name'), 'initial', 'timeline-trigger-name: getPropertyValue matches accessor');
  s.timelineTriggerName = 'inherit';
  assertEq(s.timelineTriggerName, 'inherit', 'timeline-trigger-name: overwrite with second value');
  s.removeProperty('timeline-trigger-name');
  assertEq(s.timelineTriggerName, '', 'timeline-trigger-name: removeProperty clears value');
  s.setProperty('timeline-trigger-name', 'inherit');
  assertEq(s.getPropertyValue('timeline-trigger-name'), 'inherit', 'timeline-trigger-name: accepts inherit');
  s.timelineTriggerName = '';
  assertEq(s.timelineTriggerName, '', 'timeline-trigger-name: empty string removes');
}

// --- timeline-trigger-activation-range-start ---
{
  const s = fresh();
  s.timelineTriggerActivationRangeStart = 'initial';
  assertEq(s.timelineTriggerActivationRangeStart, 'initial', 'timeline-trigger-activation-range-start: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('timeline-trigger-activation-range-start'), 'initial', 'timeline-trigger-activation-range-start: getPropertyValue matches accessor');
  s.timelineTriggerActivationRangeStart = 'inherit';
  assertEq(s.timelineTriggerActivationRangeStart, 'inherit', 'timeline-trigger-activation-range-start: overwrite with second value');
  s.removeProperty('timeline-trigger-activation-range-start');
  assertEq(s.timelineTriggerActivationRangeStart, '', 'timeline-trigger-activation-range-start: removeProperty clears value');
  s.setProperty('timeline-trigger-activation-range-start', 'inherit');
  assertEq(s.getPropertyValue('timeline-trigger-activation-range-start'), 'inherit', 'timeline-trigger-activation-range-start: accepts inherit');
  s.timelineTriggerActivationRangeStart = '';
  assertEq(s.timelineTriggerActivationRangeStart, '', 'timeline-trigger-activation-range-start: empty string removes');
}

// --- timeline-trigger-activation-range-end ---
{
  const s = fresh();
  s.timelineTriggerActivationRangeEnd = 'initial';
  assertEq(s.timelineTriggerActivationRangeEnd, 'initial', 'timeline-trigger-activation-range-end: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('timeline-trigger-activation-range-end'), 'initial', 'timeline-trigger-activation-range-end: getPropertyValue matches accessor');
  s.timelineTriggerActivationRangeEnd = 'inherit';
  assertEq(s.timelineTriggerActivationRangeEnd, 'inherit', 'timeline-trigger-activation-range-end: overwrite with second value');
  s.removeProperty('timeline-trigger-activation-range-end');
  assertEq(s.timelineTriggerActivationRangeEnd, '', 'timeline-trigger-activation-range-end: removeProperty clears value');
  s.setProperty('timeline-trigger-activation-range-end', 'inherit');
  assertEq(s.getPropertyValue('timeline-trigger-activation-range-end'), 'inherit', 'timeline-trigger-activation-range-end: accepts inherit');
  s.timelineTriggerActivationRangeEnd = '';
  assertEq(s.timelineTriggerActivationRangeEnd, '', 'timeline-trigger-activation-range-end: empty string removes');
}

// --- timeline-trigger-active-range-start ---
{
  const s = fresh();
  s.timelineTriggerActiveRangeStart = 'initial';
  assertEq(s.timelineTriggerActiveRangeStart, 'initial', 'timeline-trigger-active-range-start: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('timeline-trigger-active-range-start'), 'initial', 'timeline-trigger-active-range-start: getPropertyValue matches accessor');
  s.timelineTriggerActiveRangeStart = 'inherit';
  assertEq(s.timelineTriggerActiveRangeStart, 'inherit', 'timeline-trigger-active-range-start: overwrite with second value');
  s.removeProperty('timeline-trigger-active-range-start');
  assertEq(s.timelineTriggerActiveRangeStart, '', 'timeline-trigger-active-range-start: removeProperty clears value');
  s.setProperty('timeline-trigger-active-range-start', 'inherit');
  assertEq(s.getPropertyValue('timeline-trigger-active-range-start'), 'inherit', 'timeline-trigger-active-range-start: accepts inherit');
  s.timelineTriggerActiveRangeStart = '';
  assertEq(s.timelineTriggerActiveRangeStart, '', 'timeline-trigger-active-range-start: empty string removes');
}

// --- timeline-trigger-active-range-end ---
{
  const s = fresh();
  s.timelineTriggerActiveRangeEnd = 'initial';
  assertEq(s.timelineTriggerActiveRangeEnd, 'initial', 'timeline-trigger-active-range-end: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('timeline-trigger-active-range-end'), 'initial', 'timeline-trigger-active-range-end: getPropertyValue matches accessor');
  s.timelineTriggerActiveRangeEnd = 'inherit';
  assertEq(s.timelineTriggerActiveRangeEnd, 'inherit', 'timeline-trigger-active-range-end: overwrite with second value');
  s.removeProperty('timeline-trigger-active-range-end');
  assertEq(s.timelineTriggerActiveRangeEnd, '', 'timeline-trigger-active-range-end: removeProperty clears value');
  s.setProperty('timeline-trigger-active-range-end', 'inherit');
  assertEq(s.getPropertyValue('timeline-trigger-active-range-end'), 'inherit', 'timeline-trigger-active-range-end: accepts inherit');
  s.timelineTriggerActiveRangeEnd = '';
  assertEq(s.timelineTriggerActiveRangeEnd, '', 'timeline-trigger-active-range-end: empty string removes');
}

// --- timeline-trigger-source ---
{
  const s = fresh();
  s.timelineTriggerSource = 'none';
  assertEq(s.timelineTriggerSource, 'none', 'timeline-trigger-source: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('timeline-trigger-source'), 'none', 'timeline-trigger-source: getPropertyValue matches accessor');
  s.timelineTriggerSource = 'auto';
  assertEq(s.timelineTriggerSource, 'auto', 'timeline-trigger-source: overwrite with second value');
  s.removeProperty('timeline-trigger-source');
  assertEq(s.timelineTriggerSource, '', 'timeline-trigger-source: removeProperty clears value');
  s.setProperty('timeline-trigger-source', 'inherit');
  assertEq(s.getPropertyValue('timeline-trigger-source'), 'inherit', 'timeline-trigger-source: accepts inherit');
  s.timelineTriggerSource = '';
  assertEq(s.timelineTriggerSource, '', 'timeline-trigger-source: empty string removes');
  s.timelineTriggerSource = 'none';
  s.timelineTriggerSource = 'definitely-not-a-valid-value-xyz';
  assertEq(s.timelineTriggerSource, 'none', 'timeline-trigger-source: rejects invalid keyword');
}

// --- transition-delay ---
{
  const s = fresh();
  s.transitionDelay = '1s';
  assertEq(s.transitionDelay, '1s', 'transition-delay: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('transition-delay'), '1s', 'transition-delay: getPropertyValue matches accessor');
  s.transitionDelay = 'inherit';
  assertEq(s.transitionDelay, 'inherit', 'transition-delay: overwrite with second value');
  s.removeProperty('transition-delay');
  assertEq(s.transitionDelay, '', 'transition-delay: removeProperty clears value');
  s.setProperty('transition-delay', 'inherit');
  assertEq(s.getPropertyValue('transition-delay'), 'inherit', 'transition-delay: accepts inherit');
  s.transitionDelay = '';
  assertEq(s.transitionDelay, '', 'transition-delay: empty string removes');
}

// --- transition-duration ---
{
  const s = fresh();
  s.transitionDuration = '1s';
  assertEq(s.transitionDuration, '1s', 'transition-duration: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('transition-duration'), '1s', 'transition-duration: getPropertyValue matches accessor');
  s.transitionDuration = 'inherit';
  assertEq(s.transitionDuration, 'inherit', 'transition-duration: overwrite with second value');
  s.removeProperty('transition-duration');
  assertEq(s.transitionDuration, '', 'transition-duration: removeProperty clears value');
  s.setProperty('transition-duration', 'inherit');
  assertEq(s.getPropertyValue('transition-duration'), 'inherit', 'transition-duration: accepts inherit');
  s.transitionDuration = '';
  assertEq(s.transitionDuration, '', 'transition-duration: empty string removes');
}

// --- transition-property ---
{
  const s = fresh();
  s.transitionProperty = 'none';
  assertEq(s.transitionProperty, 'none', 'transition-property: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('transition-property'), 'none', 'transition-property: getPropertyValue matches accessor');
  s.transitionProperty = 'inherit';
  assertEq(s.transitionProperty, 'inherit', 'transition-property: overwrite with second value');
  s.removeProperty('transition-property');
  assertEq(s.transitionProperty, '', 'transition-property: removeProperty clears value');
  s.setProperty('transition-property', 'inherit');
  assertEq(s.getPropertyValue('transition-property'), 'inherit', 'transition-property: accepts inherit');
  s.transitionProperty = '';
  assertEq(s.transitionProperty, '', 'transition-property: empty string removes');
  s.transitionProperty = 'none';
  s.transitionProperty = 'definitely-not-a-valid-value-xyz';
  assertEq(s.transitionProperty, 'none', 'transition-property: rejects invalid keyword');
}

// --- transition-behavior ---
{
  const s = fresh();
  s.transitionBehavior = 'normal';
  assertEq(s.transitionBehavior, 'normal', 'transition-behavior: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('transition-behavior'), 'normal', 'transition-behavior: getPropertyValue matches accessor');
  s.transitionBehavior = 'allow-discrete';
  assertEq(s.transitionBehavior, 'allow-discrete', 'transition-behavior: overwrite with second value');
  s.removeProperty('transition-behavior');
  assertEq(s.transitionBehavior, '', 'transition-behavior: removeProperty clears value');
  s.setProperty('transition-behavior', 'inherit');
  assertEq(s.getPropertyValue('transition-behavior'), 'inherit', 'transition-behavior: accepts inherit');
  s.transitionBehavior = '';
  assertEq(s.transitionBehavior, '', 'transition-behavior: empty string removes');
  s.transitionBehavior = 'normal';
  s.transitionBehavior = 'definitely-not-a-valid-value-xyz';
  assertEq(s.transitionBehavior, 'normal', 'transition-behavior: rejects invalid keyword');
}

// --- transition-timing-function ---
{
  const s = fresh();
  s.transitionTimingFunction = 'linear';
  assertEq(s.transitionTimingFunction, 'linear', 'transition-timing-function: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('transition-timing-function'), 'linear', 'transition-timing-function: getPropertyValue matches accessor');
  s.transitionTimingFunction = 'ease';
  assertEq(s.transitionTimingFunction, 'ease', 'transition-timing-function: overwrite with second value');
  s.removeProperty('transition-timing-function');
  assertEq(s.transitionTimingFunction, '', 'transition-timing-function: removeProperty clears value');
  s.setProperty('transition-timing-function', 'inherit');
  assertEq(s.getPropertyValue('transition-timing-function'), 'inherit', 'transition-timing-function: accepts inherit');
  s.transitionTimingFunction = '';
  assertEq(s.transitionTimingFunction, '', 'transition-timing-function: empty string removes');
  s.transitionTimingFunction = 'linear';
  s.transitionTimingFunction = 'definitely-not-a-valid-value-xyz';
  assertEq(s.transitionTimingFunction, 'linear', 'transition-timing-function: rejects invalid keyword');
}

// --- trigger-scope ---
{
  const s = fresh();
  s.triggerScope = 'none';
  assertEq(s.triggerScope, 'none', 'trigger-scope: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('trigger-scope'), 'none', 'trigger-scope: getPropertyValue matches accessor');
  s.triggerScope = 'all';
  assertEq(s.triggerScope, 'all', 'trigger-scope: overwrite with second value');
  s.removeProperty('trigger-scope');
  assertEq(s.triggerScope, '', 'trigger-scope: removeProperty clears value');
  s.setProperty('trigger-scope', 'inherit');
  assertEq(s.getPropertyValue('trigger-scope'), 'inherit', 'trigger-scope: accepts inherit');
  s.triggerScope = '';
  assertEq(s.triggerScope, '', 'trigger-scope: empty string removes');
  s.triggerScope = 'none';
  s.triggerScope = 'definitely-not-a-valid-value-xyz';
  assertEq(s.triggerScope, 'none', 'trigger-scope: rejects invalid keyword');
}

// --- color ---
{
  const s = fresh();
  s.color = 'red';
  assertEq(s.color, 'red', 'color: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('color'), 'red', 'color: getPropertyValue matches accessor');
  s.color = 'blue';
  assertEq(s.color, 'blue', 'color: overwrite with second value');
  s.removeProperty('color');
  assertEq(s.color, '', 'color: removeProperty clears value');
  s.setProperty('color', 'inherit');
  assertEq(s.getPropertyValue('color'), 'inherit', 'color: accepts inherit');
  s.color = '';
  assertEq(s.color, '', 'color: empty string removes');
}

// --- direction ---
{
  const s = fresh();
  s.direction = 'ltr';
  assertEq(s.direction, 'ltr', 'direction: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('direction'), 'ltr', 'direction: getPropertyValue matches accessor');
  s.direction = 'rtl';
  assertEq(s.direction, 'rtl', 'direction: overwrite with second value');
  s.removeProperty('direction');
  assertEq(s.direction, '', 'direction: removeProperty clears value');
  s.setProperty('direction', 'inherit');
  assertEq(s.getPropertyValue('direction'), 'inherit', 'direction: accepts inherit');
  s.direction = '';
  assertEq(s.direction, '', 'direction: empty string removes');
  s.direction = 'ltr';
  s.direction = 'definitely-not-a-valid-value-xyz';
  assertEq(s.direction, 'ltr', 'direction: rejects invalid keyword');
}

// --- font-family ---
{
  const s = fresh();
  s.fontFamily = 'Arial';
  assertEq(s.fontFamily, 'Arial', 'font-family: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('font-family'), 'Arial', 'font-family: getPropertyValue matches accessor');
  s.fontFamily = 'inherit';
  assertEq(s.fontFamily, 'inherit', 'font-family: overwrite with second value');
  s.removeProperty('font-family');
  assertEq(s.fontFamily, '', 'font-family: removeProperty clears value');
  s.setProperty('font-family', 'inherit');
  assertEq(s.getPropertyValue('font-family'), 'inherit', 'font-family: accepts inherit');
  s.fontFamily = '';
  assertEq(s.fontFamily, '', 'font-family: empty string removes');
}

// --- font-kerning ---
{
  const s = fresh();
  s.fontKerning = 'auto';
  assertEq(s.fontKerning, 'auto', 'font-kerning: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('font-kerning'), 'auto', 'font-kerning: getPropertyValue matches accessor');
  s.fontKerning = 'normal';
  assertEq(s.fontKerning, 'normal', 'font-kerning: overwrite with second value');
  s.removeProperty('font-kerning');
  assertEq(s.fontKerning, '', 'font-kerning: removeProperty clears value');
  s.setProperty('font-kerning', 'inherit');
  assertEq(s.getPropertyValue('font-kerning'), 'inherit', 'font-kerning: accepts inherit');
  s.fontKerning = '';
  assertEq(s.fontKerning, '', 'font-kerning: empty string removes');
  s.fontKerning = 'auto';
  s.fontKerning = 'definitely-not-a-valid-value-xyz';
  assertEq(s.fontKerning, 'auto', 'font-kerning: rejects invalid keyword');
}

// --- font-optical-sizing ---
{
  const s = fresh();
  s.fontOpticalSizing = 'auto';
  assertEq(s.fontOpticalSizing, 'auto', 'font-optical-sizing: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('font-optical-sizing'), 'auto', 'font-optical-sizing: getPropertyValue matches accessor');
  s.fontOpticalSizing = 'none';
  assertEq(s.fontOpticalSizing, 'none', 'font-optical-sizing: overwrite with second value');
  s.removeProperty('font-optical-sizing');
  assertEq(s.fontOpticalSizing, '', 'font-optical-sizing: removeProperty clears value');
  s.setProperty('font-optical-sizing', 'inherit');
  assertEq(s.getPropertyValue('font-optical-sizing'), 'inherit', 'font-optical-sizing: accepts inherit');
  s.fontOpticalSizing = '';
  assertEq(s.fontOpticalSizing, '', 'font-optical-sizing: empty string removes');
  s.fontOpticalSizing = 'auto';
  s.fontOpticalSizing = 'definitely-not-a-valid-value-xyz';
  assertEq(s.fontOpticalSizing, 'auto', 'font-optical-sizing: rejects invalid keyword');
}

// --- font-palette ---
{
  const s = fresh();
  s.fontPalette = 'normal';
  assertEq(s.fontPalette, 'normal', 'font-palette: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('font-palette'), 'normal', 'font-palette: getPropertyValue matches accessor');
  s.fontPalette = 'light';
  assertEq(s.fontPalette, 'light', 'font-palette: overwrite with second value');
  s.removeProperty('font-palette');
  assertEq(s.fontPalette, '', 'font-palette: removeProperty clears value');
  s.setProperty('font-palette', 'inherit');
  assertEq(s.getPropertyValue('font-palette'), 'inherit', 'font-palette: accepts inherit');
  s.fontPalette = '';
  assertEq(s.fontPalette, '', 'font-palette: empty string removes');
  s.fontPalette = 'normal';
  s.fontPalette = 'definitely-not-a-valid-value-xyz';
  assertEq(s.fontPalette, 'normal', 'font-palette: rejects invalid keyword');
}

// --- font-size ---
{
  const s = fresh();
  s.fontSize = '10px';
  assertEq(s.fontSize, '10px', 'font-size: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('font-size'), '10px', 'font-size: getPropertyValue matches accessor');
  s.fontSize = '20px';
  assertEq(s.fontSize, '20px', 'font-size: overwrite with second value');
  s.removeProperty('font-size');
  assertEq(s.fontSize, '', 'font-size: removeProperty clears value');
  s.setProperty('font-size', 'inherit');
  assertEq(s.getPropertyValue('font-size'), 'inherit', 'font-size: accepts inherit');
  s.fontSize = '';
  assertEq(s.fontSize, '', 'font-size: empty string removes');
}

// --- font-size-adjust ---
{
  const s = fresh();
  s.fontSizeAdjust = '1';
  assertEq(s.fontSizeAdjust, '1', 'font-size-adjust: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('font-size-adjust'), '1', 'font-size-adjust: getPropertyValue matches accessor');
  s.fontSizeAdjust = '2';
  assertEq(s.fontSizeAdjust, '2', 'font-size-adjust: overwrite with second value');
  s.removeProperty('font-size-adjust');
  assertEq(s.fontSizeAdjust, '', 'font-size-adjust: removeProperty clears value');
  s.setProperty('font-size-adjust', 'inherit');
  assertEq(s.getPropertyValue('font-size-adjust'), 'inherit', 'font-size-adjust: accepts inherit');
  s.fontSizeAdjust = '';
  assertEq(s.fontSizeAdjust, '', 'font-size-adjust: empty string removes');
}

// --- font-stretch ---
{
  const s = fresh();
  s.fontStretch = 'normal';
  assertEq(s.fontStretch, 'normal', 'font-stretch: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('font-stretch'), 'normal', 'font-stretch: getPropertyValue matches accessor');
  s.fontStretch = 'ultra-condensed';
  assertEq(s.fontStretch, 'ultra-condensed', 'font-stretch: overwrite with second value');
  s.removeProperty('font-stretch');
  assertEq(s.fontStretch, '', 'font-stretch: removeProperty clears value');
  s.setProperty('font-stretch', 'inherit');
  assertEq(s.getPropertyValue('font-stretch'), 'inherit', 'font-stretch: accepts inherit');
  s.fontStretch = '';
  assertEq(s.fontStretch, '', 'font-stretch: empty string removes');
}

// --- font-style ---
{
  const s = fresh();
  s.fontStyle = 'normal';
  assertEq(s.fontStyle, 'normal', 'font-style: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('font-style'), 'normal', 'font-style: getPropertyValue matches accessor');
  s.fontStyle = 'italic';
  assertEq(s.fontStyle, 'italic', 'font-style: overwrite with second value');
  s.removeProperty('font-style');
  assertEq(s.fontStyle, '', 'font-style: removeProperty clears value');
  s.setProperty('font-style', 'inherit');
  assertEq(s.getPropertyValue('font-style'), 'inherit', 'font-style: accepts inherit');
  s.fontStyle = '';
  assertEq(s.fontStyle, '', 'font-style: empty string removes');
  s.fontStyle = 'normal';
  s.fontStyle = 'definitely-not-a-valid-value-xyz';
  assertEq(s.fontStyle, 'normal', 'font-style: rejects invalid keyword');
}

// --- font-variant-ligatures ---
{
  const s = fresh();
  s.fontVariantLigatures = 'normal';
  assertEq(s.fontVariantLigatures, 'normal', 'font-variant-ligatures: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('font-variant-ligatures'), 'normal', 'font-variant-ligatures: getPropertyValue matches accessor');
  s.fontVariantLigatures = 'none';
  assertEq(s.fontVariantLigatures, 'none', 'font-variant-ligatures: overwrite with second value');
  s.removeProperty('font-variant-ligatures');
  assertEq(s.fontVariantLigatures, '', 'font-variant-ligatures: removeProperty clears value');
  s.setProperty('font-variant-ligatures', 'inherit');
  assertEq(s.getPropertyValue('font-variant-ligatures'), 'inherit', 'font-variant-ligatures: accepts inherit');
  s.fontVariantLigatures = '';
  assertEq(s.fontVariantLigatures, '', 'font-variant-ligatures: empty string removes');
  s.fontVariantLigatures = 'normal';
  s.fontVariantLigatures = 'definitely-not-a-valid-value-xyz';
  assertEq(s.fontVariantLigatures, 'normal', 'font-variant-ligatures: rejects invalid keyword');
}

// --- font-variant-caps ---
{
  const s = fresh();
  s.fontVariantCaps = 'normal';
  assertEq(s.fontVariantCaps, 'normal', 'font-variant-caps: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('font-variant-caps'), 'normal', 'font-variant-caps: getPropertyValue matches accessor');
  s.fontVariantCaps = 'small-caps';
  assertEq(s.fontVariantCaps, 'small-caps', 'font-variant-caps: overwrite with second value');
  s.removeProperty('font-variant-caps');
  assertEq(s.fontVariantCaps, '', 'font-variant-caps: removeProperty clears value');
  s.setProperty('font-variant-caps', 'inherit');
  assertEq(s.getPropertyValue('font-variant-caps'), 'inherit', 'font-variant-caps: accepts inherit');
  s.fontVariantCaps = '';
  assertEq(s.fontVariantCaps, '', 'font-variant-caps: empty string removes');
  s.fontVariantCaps = 'normal';
  s.fontVariantCaps = 'definitely-not-a-valid-value-xyz';
  assertEq(s.fontVariantCaps, 'normal', 'font-variant-caps: rejects invalid keyword');
}

// --- font-variant-east-asian ---
{
  const s = fresh();
  s.fontVariantEastAsian = 'normal';
  assertEq(s.fontVariantEastAsian, 'normal', 'font-variant-east-asian: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('font-variant-east-asian'), 'normal', 'font-variant-east-asian: getPropertyValue matches accessor');
  s.fontVariantEastAsian = 'jis78';
  assertEq(s.fontVariantEastAsian, 'jis78', 'font-variant-east-asian: overwrite with second value');
  s.removeProperty('font-variant-east-asian');
  assertEq(s.fontVariantEastAsian, '', 'font-variant-east-asian: removeProperty clears value');
  s.setProperty('font-variant-east-asian', 'inherit');
  assertEq(s.getPropertyValue('font-variant-east-asian'), 'inherit', 'font-variant-east-asian: accepts inherit');
  s.fontVariantEastAsian = '';
  assertEq(s.fontVariantEastAsian, '', 'font-variant-east-asian: empty string removes');
  s.fontVariantEastAsian = 'normal';
  s.fontVariantEastAsian = 'definitely-not-a-valid-value-xyz';
  assertEq(s.fontVariantEastAsian, 'normal', 'font-variant-east-asian: rejects invalid keyword');
}

// --- font-variant-numeric ---
{
  const s = fresh();
  s.fontVariantNumeric = 'normal';
  assertEq(s.fontVariantNumeric, 'normal', 'font-variant-numeric: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('font-variant-numeric'), 'normal', 'font-variant-numeric: getPropertyValue matches accessor');
  s.fontVariantNumeric = 'lining-nums';
  assertEq(s.fontVariantNumeric, 'lining-nums', 'font-variant-numeric: overwrite with second value');
  s.removeProperty('font-variant-numeric');
  assertEq(s.fontVariantNumeric, '', 'font-variant-numeric: removeProperty clears value');
  s.setProperty('font-variant-numeric', 'inherit');
  assertEq(s.getPropertyValue('font-variant-numeric'), 'inherit', 'font-variant-numeric: accepts inherit');
  s.fontVariantNumeric = '';
  assertEq(s.fontVariantNumeric, '', 'font-variant-numeric: empty string removes');
  s.fontVariantNumeric = 'normal';
  s.fontVariantNumeric = 'definitely-not-a-valid-value-xyz';
  assertEq(s.fontVariantNumeric, 'normal', 'font-variant-numeric: rejects invalid keyword');
}

// --- font-variant-alternates ---
{
  const s = fresh();
  s.fontVariantAlternates = 'normal';
  assertEq(s.fontVariantAlternates, 'normal', 'font-variant-alternates: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('font-variant-alternates'), 'normal', 'font-variant-alternates: getPropertyValue matches accessor');
  s.fontVariantAlternates = 'inherit';
  assertEq(s.fontVariantAlternates, 'inherit', 'font-variant-alternates: overwrite with second value');
  s.removeProperty('font-variant-alternates');
  assertEq(s.fontVariantAlternates, '', 'font-variant-alternates: removeProperty clears value');
  s.setProperty('font-variant-alternates', 'inherit');
  assertEq(s.getPropertyValue('font-variant-alternates'), 'inherit', 'font-variant-alternates: accepts inherit');
  s.fontVariantAlternates = '';
  assertEq(s.fontVariantAlternates, '', 'font-variant-alternates: empty string removes');
  s.fontVariantAlternates = 'normal';
  s.fontVariantAlternates = 'definitely-not-a-valid-value-xyz';
  assertEq(s.fontVariantAlternates, 'normal', 'font-variant-alternates: rejects invalid keyword');
}

// --- font-weight ---
{
  const s = fresh();
  s.fontWeight = '1';
  assertEq(s.fontWeight, '1', 'font-weight: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('font-weight'), '1', 'font-weight: getPropertyValue matches accessor');
  s.fontWeight = '2';
  assertEq(s.fontWeight, '2', 'font-weight: overwrite with second value');
  s.removeProperty('font-weight');
  assertEq(s.fontWeight, '', 'font-weight: removeProperty clears value');
  s.setProperty('font-weight', 'inherit');
  assertEq(s.getPropertyValue('font-weight'), 'inherit', 'font-weight: accepts inherit');
  s.fontWeight = '';
  assertEq(s.fontWeight, '', 'font-weight: empty string removes');
}

// --- font-synthesis-weight ---
{
  const s = fresh();
  s.fontSynthesisWeight = 'auto';
  assertEq(s.fontSynthesisWeight, 'auto', 'font-synthesis-weight: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('font-synthesis-weight'), 'auto', 'font-synthesis-weight: getPropertyValue matches accessor');
  s.fontSynthesisWeight = 'none';
  assertEq(s.fontSynthesisWeight, 'none', 'font-synthesis-weight: overwrite with second value');
  s.removeProperty('font-synthesis-weight');
  assertEq(s.fontSynthesisWeight, '', 'font-synthesis-weight: removeProperty clears value');
  s.setProperty('font-synthesis-weight', 'inherit');
  assertEq(s.getPropertyValue('font-synthesis-weight'), 'inherit', 'font-synthesis-weight: accepts inherit');
  s.fontSynthesisWeight = '';
  assertEq(s.fontSynthesisWeight, '', 'font-synthesis-weight: empty string removes');
  s.fontSynthesisWeight = 'auto';
  s.fontSynthesisWeight = 'definitely-not-a-valid-value-xyz';
  assertEq(s.fontSynthesisWeight, 'auto', 'font-synthesis-weight: rejects invalid keyword');
}

// --- font-synthesis-style ---
{
  const s = fresh();
  s.fontSynthesisStyle = 'auto';
  assertEq(s.fontSynthesisStyle, 'auto', 'font-synthesis-style: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('font-synthesis-style'), 'auto', 'font-synthesis-style: getPropertyValue matches accessor');
  s.fontSynthesisStyle = 'none';
  assertEq(s.fontSynthesisStyle, 'none', 'font-synthesis-style: overwrite with second value');
  s.removeProperty('font-synthesis-style');
  assertEq(s.fontSynthesisStyle, '', 'font-synthesis-style: removeProperty clears value');
  s.setProperty('font-synthesis-style', 'inherit');
  assertEq(s.getPropertyValue('font-synthesis-style'), 'inherit', 'font-synthesis-style: accepts inherit');
  s.fontSynthesisStyle = '';
  assertEq(s.fontSynthesisStyle, '', 'font-synthesis-style: empty string removes');
  s.fontSynthesisStyle = 'auto';
  s.fontSynthesisStyle = 'definitely-not-a-valid-value-xyz';
  assertEq(s.fontSynthesisStyle, 'auto', 'font-synthesis-style: rejects invalid keyword');
}

// --- font-synthesis-small-caps ---
{
  const s = fresh();
  s.fontSynthesisSmallCaps = 'auto';
  assertEq(s.fontSynthesisSmallCaps, 'auto', 'font-synthesis-small-caps: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('font-synthesis-small-caps'), 'auto', 'font-synthesis-small-caps: getPropertyValue matches accessor');
  s.fontSynthesisSmallCaps = 'none';
  assertEq(s.fontSynthesisSmallCaps, 'none', 'font-synthesis-small-caps: overwrite with second value');
  s.removeProperty('font-synthesis-small-caps');
  assertEq(s.fontSynthesisSmallCaps, '', 'font-synthesis-small-caps: removeProperty clears value');
  s.setProperty('font-synthesis-small-caps', 'inherit');
  assertEq(s.getPropertyValue('font-synthesis-small-caps'), 'inherit', 'font-synthesis-small-caps: accepts inherit');
  s.fontSynthesisSmallCaps = '';
  assertEq(s.fontSynthesisSmallCaps, '', 'font-synthesis-small-caps: empty string removes');
  s.fontSynthesisSmallCaps = 'auto';
  s.fontSynthesisSmallCaps = 'definitely-not-a-valid-value-xyz';
  assertEq(s.fontSynthesisSmallCaps, 'auto', 'font-synthesis-small-caps: rejects invalid keyword');
}

// --- font-feature-settings ---
{
  const s = fresh();
  s.fontFeatureSettings = 'normal';
  assertEq(s.fontFeatureSettings, 'normal', 'font-feature-settings: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('font-feature-settings'), 'normal', 'font-feature-settings: getPropertyValue matches accessor');
  s.fontFeatureSettings = 'inherit';
  assertEq(s.fontFeatureSettings, 'inherit', 'font-feature-settings: overwrite with second value');
  s.removeProperty('font-feature-settings');
  assertEq(s.fontFeatureSettings, '', 'font-feature-settings: removeProperty clears value');
  s.setProperty('font-feature-settings', 'inherit');
  assertEq(s.getPropertyValue('font-feature-settings'), 'inherit', 'font-feature-settings: accepts inherit');
  s.fontFeatureSettings = '';
  assertEq(s.fontFeatureSettings, '', 'font-feature-settings: empty string removes');
  s.fontFeatureSettings = 'normal';
  s.fontFeatureSettings = 'definitely-not-a-valid-value-xyz';
  assertEq(s.fontFeatureSettings, 'normal', 'font-feature-settings: rejects invalid keyword');
}

// --- font-variation-settings ---
{
  const s = fresh();
  s.fontVariationSettings = 'normal';
  assertEq(s.fontVariationSettings, 'normal', 'font-variation-settings: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('font-variation-settings'), 'normal', 'font-variation-settings: getPropertyValue matches accessor');
  s.fontVariationSettings = 'inherit';
  assertEq(s.fontVariationSettings, 'inherit', 'font-variation-settings: overwrite with second value');
  s.removeProperty('font-variation-settings');
  assertEq(s.fontVariationSettings, '', 'font-variation-settings: removeProperty clears value');
  s.setProperty('font-variation-settings', 'inherit');
  assertEq(s.getPropertyValue('font-variation-settings'), 'inherit', 'font-variation-settings: accepts inherit');
  s.fontVariationSettings = '';
  assertEq(s.fontVariationSettings, '', 'font-variation-settings: empty string removes');
  s.fontVariationSettings = 'normal';
  s.fontVariationSettings = 'definitely-not-a-valid-value-xyz';
  assertEq(s.fontVariationSettings, 'normal', 'font-variation-settings: rejects invalid keyword');
}

// --- font-language-override ---
{
  const s = fresh();
  s.fontLanguageOverride = 'normal';
  assertEq(s.fontLanguageOverride, 'normal', 'font-language-override: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('font-language-override'), 'normal', 'font-language-override: getPropertyValue matches accessor');
  s.fontLanguageOverride = 'inherit';
  assertEq(s.fontLanguageOverride, 'inherit', 'font-language-override: overwrite with second value');
  s.removeProperty('font-language-override');
  assertEq(s.fontLanguageOverride, '', 'font-language-override: removeProperty clears value');
  s.setProperty('font-language-override', 'inherit');
  assertEq(s.getPropertyValue('font-language-override'), 'inherit', 'font-language-override: accepts inherit');
  s.fontLanguageOverride = '';
  assertEq(s.fontLanguageOverride, '', 'font-language-override: empty string removes');
  s.fontLanguageOverride = 'normal';
  s.fontLanguageOverride = 'definitely-not-a-valid-value-xyz';
  assertEq(s.fontLanguageOverride, 'normal', 'font-language-override: rejects invalid keyword');
}

// --- font-variant-emoji ---
{
  const s = fresh();
  s.fontVariantEmoji = 'normal';
  assertEq(s.fontVariantEmoji, 'normal', 'font-variant-emoji: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('font-variant-emoji'), 'normal', 'font-variant-emoji: getPropertyValue matches accessor');
  s.fontVariantEmoji = 'text';
  assertEq(s.fontVariantEmoji, 'text', 'font-variant-emoji: overwrite with second value');
  s.removeProperty('font-variant-emoji');
  assertEq(s.fontVariantEmoji, '', 'font-variant-emoji: removeProperty clears value');
  s.setProperty('font-variant-emoji', 'inherit');
  assertEq(s.getPropertyValue('font-variant-emoji'), 'inherit', 'font-variant-emoji: accepts inherit');
  s.fontVariantEmoji = '';
  assertEq(s.fontVariantEmoji, '', 'font-variant-emoji: empty string removes');
  s.fontVariantEmoji = 'normal';
  s.fontVariantEmoji = 'definitely-not-a-valid-value-xyz';
  assertEq(s.fontVariantEmoji, 'normal', 'font-variant-emoji: rejects invalid keyword');
}

// --- font-variant-position ---
{
  const s = fresh();
  s.fontVariantPosition = 'normal';
  assertEq(s.fontVariantPosition, 'normal', 'font-variant-position: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('font-variant-position'), 'normal', 'font-variant-position: getPropertyValue matches accessor');
  s.fontVariantPosition = 'sub';
  assertEq(s.fontVariantPosition, 'sub', 'font-variant-position: overwrite with second value');
  s.removeProperty('font-variant-position');
  assertEq(s.fontVariantPosition, '', 'font-variant-position: removeProperty clears value');
  s.setProperty('font-variant-position', 'inherit');
  assertEq(s.getPropertyValue('font-variant-position'), 'inherit', 'font-variant-position: accepts inherit');
  s.fontVariantPosition = '';
  assertEq(s.fontVariantPosition, '', 'font-variant-position: empty string removes');
  s.fontVariantPosition = 'normal';
  s.fontVariantPosition = 'definitely-not-a-valid-value-xyz';
  assertEq(s.fontVariantPosition, 'normal', 'font-variant-position: rejects invalid keyword');
}

// --- -webkit-font-smoothing ---
{
  const s = fresh();
  s.webkitFontSmoothing = 'initial';
  assertEq(s.webkitFontSmoothing, 'initial', '-webkit-font-smoothing: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('-webkit-font-smoothing'), 'initial', '-webkit-font-smoothing: getPropertyValue matches accessor');
  s.webkitFontSmoothing = 'inherit';
  assertEq(s.webkitFontSmoothing, 'inherit', '-webkit-font-smoothing: overwrite with second value');
  s.removeProperty('-webkit-font-smoothing');
  assertEq(s.webkitFontSmoothing, '', '-webkit-font-smoothing: removeProperty clears value');
  s.setProperty('-webkit-font-smoothing', 'inherit');
  assertEq(s.getPropertyValue('-webkit-font-smoothing'), 'inherit', '-webkit-font-smoothing: accepts inherit');
  s.webkitFontSmoothing = '';
  assertEq(s.webkitFontSmoothing, '', '-webkit-font-smoothing: empty string removes');
}

// --- forced-color-adjust ---
{
  const s = fresh();
  s.forcedColorAdjust = 'auto';
  assertEq(s.forcedColorAdjust, 'auto', 'forced-color-adjust: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('forced-color-adjust'), 'auto', 'forced-color-adjust: getPropertyValue matches accessor');
  s.forcedColorAdjust = 'none';
  assertEq(s.forcedColorAdjust, 'none', 'forced-color-adjust: overwrite with second value');
  s.removeProperty('forced-color-adjust');
  assertEq(s.forcedColorAdjust, '', 'forced-color-adjust: removeProperty clears value');
  s.setProperty('forced-color-adjust', 'inherit');
  assertEq(s.getPropertyValue('forced-color-adjust'), 'inherit', 'forced-color-adjust: accepts inherit');
  s.forcedColorAdjust = '';
  assertEq(s.forcedColorAdjust, '', 'forced-color-adjust: empty string removes');
  s.forcedColorAdjust = 'auto';
  s.forcedColorAdjust = 'definitely-not-a-valid-value-xyz';
  assertEq(s.forcedColorAdjust, 'auto', 'forced-color-adjust: rejects invalid keyword');
}

// --- field-sizing ---
{
  const s = fresh();
  s.fieldSizing = 'fixed';
  assertEq(s.fieldSizing, 'fixed', 'field-sizing: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('field-sizing'), 'fixed', 'field-sizing: getPropertyValue matches accessor');
  s.fieldSizing = 'content';
  assertEq(s.fieldSizing, 'content', 'field-sizing: overwrite with second value');
  s.removeProperty('field-sizing');
  assertEq(s.fieldSizing, '', 'field-sizing: removeProperty clears value');
  s.setProperty('field-sizing', 'inherit');
  assertEq(s.getPropertyValue('field-sizing'), 'inherit', 'field-sizing: accepts inherit');
  s.fieldSizing = '';
  assertEq(s.fieldSizing, '', 'field-sizing: empty string removes');
  s.fieldSizing = 'fixed';
  s.fieldSizing = 'definitely-not-a-valid-value-xyz';
  assertEq(s.fieldSizing, 'fixed', 'field-sizing: rejects invalid keyword');
}

// --- -webkit-locale ---
{
  const s = fresh();
  s.webkitLocale = 'initial';
  assertEq(s.webkitLocale, 'initial', '-webkit-locale: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('-webkit-locale'), 'initial', '-webkit-locale: getPropertyValue matches accessor');
  s.webkitLocale = 'inherit';
  assertEq(s.webkitLocale, 'inherit', '-webkit-locale: overwrite with second value');
  s.removeProperty('-webkit-locale');
  assertEq(s.webkitLocale, '', '-webkit-locale: removeProperty clears value');
  s.setProperty('-webkit-locale', 'inherit');
  assertEq(s.getPropertyValue('-webkit-locale'), 'inherit', '-webkit-locale: accepts inherit');
  s.webkitLocale = '';
  assertEq(s.webkitLocale, '', '-webkit-locale: empty string removes');
}

// --- math-depth ---
{
  const s = fresh();
  s.mathDepth = 'initial';
  assertEq(s.mathDepth, 'initial', 'math-depth: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('math-depth'), 'initial', 'math-depth: getPropertyValue matches accessor');
  s.mathDepth = 'inherit';
  assertEq(s.mathDepth, 'inherit', 'math-depth: overwrite with second value');
  s.removeProperty('math-depth');
  assertEq(s.mathDepth, '', 'math-depth: removeProperty clears value');
  s.setProperty('math-depth', 'inherit');
  assertEq(s.getPropertyValue('math-depth'), 'inherit', 'math-depth: accepts inherit');
  s.mathDepth = '';
  assertEq(s.mathDepth, '', 'math-depth: empty string removes');
}

// --- text-orientation ---
{
  const s = fresh();
  s.textOrientation = 'sideways';
  assertEq(s.textOrientation, 'sideways', 'text-orientation: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('text-orientation'), 'sideways', 'text-orientation: getPropertyValue matches accessor');
  s.textOrientation = 'mixed';
  assertEq(s.textOrientation, 'mixed', 'text-orientation: overwrite with second value');
  s.removeProperty('text-orientation');
  assertEq(s.textOrientation, '', 'text-orientation: removeProperty clears value');
  s.setProperty('text-orientation', 'inherit');
  assertEq(s.getPropertyValue('text-orientation'), 'inherit', 'text-orientation: accepts inherit');
  s.textOrientation = '';
  assertEq(s.textOrientation, '', 'text-orientation: empty string removes');
  s.textOrientation = 'sideways';
  s.textOrientation = 'definitely-not-a-valid-value-xyz';
  assertEq(s.textOrientation, 'sideways', 'text-orientation: rejects invalid keyword');
}

// --- -webkit-text-orientation ---
{
  const s = fresh();
  s.webkitTextOrientation = 'initial';
  assertEq(s.webkitTextOrientation, 'initial', '-webkit-text-orientation: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('-webkit-text-orientation'), 'initial', '-webkit-text-orientation: getPropertyValue matches accessor');
  s.webkitTextOrientation = 'inherit';
  assertEq(s.webkitTextOrientation, 'inherit', '-webkit-text-orientation: overwrite with second value');
  s.removeProperty('-webkit-text-orientation');
  assertEq(s.webkitTextOrientation, '', '-webkit-text-orientation: removeProperty clears value');
  s.setProperty('-webkit-text-orientation', 'inherit');
  assertEq(s.getPropertyValue('-webkit-text-orientation'), 'inherit', '-webkit-text-orientation: accepts inherit');
  s.webkitTextOrientation = '';
  assertEq(s.webkitTextOrientation, '', '-webkit-text-orientation: empty string removes');
}

// --- writing-mode ---
{
  const s = fresh();
  s.writingMode = 'horizontal-tb';
  assertEq(s.writingMode, 'horizontal-tb', 'writing-mode: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('writing-mode'), 'horizontal-tb', 'writing-mode: getPropertyValue matches accessor');
  s.writingMode = 'vertical-rl';
  assertEq(s.writingMode, 'vertical-rl', 'writing-mode: overwrite with second value');
  s.removeProperty('writing-mode');
  assertEq(s.writingMode, '', 'writing-mode: removeProperty clears value');
  s.setProperty('writing-mode', 'inherit');
  assertEq(s.getPropertyValue('writing-mode'), 'inherit', 'writing-mode: accepts inherit');
  s.writingMode = '';
  assertEq(s.writingMode, '', 'writing-mode: empty string removes');
  s.writingMode = 'horizontal-tb';
  s.writingMode = 'definitely-not-a-valid-value-xyz';
  assertEq(s.writingMode, 'horizontal-tb', 'writing-mode: rejects invalid keyword');
}

// --- -webkit-writing-mode ---
{
  const s = fresh();
  s.webkitWritingMode = 'initial';
  assertEq(s.webkitWritingMode, 'initial', '-webkit-writing-mode: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('-webkit-writing-mode'), 'initial', '-webkit-writing-mode: getPropertyValue matches accessor');
  s.webkitWritingMode = 'inherit';
  assertEq(s.webkitWritingMode, 'inherit', '-webkit-writing-mode: overwrite with second value');
  s.removeProperty('-webkit-writing-mode');
  assertEq(s.webkitWritingMode, '', '-webkit-writing-mode: removeProperty clears value');
  s.setProperty('-webkit-writing-mode', 'inherit');
  assertEq(s.getPropertyValue('-webkit-writing-mode'), 'inherit', '-webkit-writing-mode: accepts inherit');
  s.webkitWritingMode = '';
  assertEq(s.webkitWritingMode, '', '-webkit-writing-mode: empty string removes');
}

// --- text-rendering ---
{
  const s = fresh();
  s.textRendering = 'auto';
  assertEq(s.textRendering, 'auto', 'text-rendering: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('text-rendering'), 'auto', 'text-rendering: getPropertyValue matches accessor');
  s.textRendering = 'optimizespeed';
  assertEq(s.textRendering, 'optimizespeed', 'text-rendering: overwrite with second value');
  s.removeProperty('text-rendering');
  assertEq(s.textRendering, '', 'text-rendering: removeProperty clears value');
  s.setProperty('text-rendering', 'inherit');
  assertEq(s.getPropertyValue('text-rendering'), 'inherit', 'text-rendering: accepts inherit');
  s.textRendering = '';
  assertEq(s.textRendering, '', 'text-rendering: empty string removes');
  s.textRendering = 'auto';
  s.textRendering = 'definitely-not-a-valid-value-xyz';
  assertEq(s.textRendering, 'auto', 'text-rendering: rejects invalid keyword');
}

// --- zoom ---
{
  const s = fresh();
  s.zoom = 'initial';
  assertEq(s.zoom, 'initial', 'zoom: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('zoom'), 'initial', 'zoom: getPropertyValue matches accessor');
  s.zoom = 'inherit';
  assertEq(s.zoom, 'inherit', 'zoom: overwrite with second value');
  s.removeProperty('zoom');
  assertEq(s.zoom, '', 'zoom: removeProperty clears value');
  s.setProperty('zoom', 'inherit');
  assertEq(s.getPropertyValue('zoom'), 'inherit', 'zoom: accepts inherit');
  s.zoom = '';
  assertEq(s.zoom, '', 'zoom: empty string removes');
}

// --- accent-color ---
{
  const s = fresh();
  s.accentColor = 'red';
  assertEq(s.accentColor, 'red', 'accent-color: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('accent-color'), 'red', 'accent-color: getPropertyValue matches accessor');
  s.accentColor = 'blue';
  assertEq(s.accentColor, 'blue', 'accent-color: overwrite with second value');
  s.removeProperty('accent-color');
  assertEq(s.accentColor, '', 'accent-color: removeProperty clears value');
  s.setProperty('accent-color', 'inherit');
  assertEq(s.getPropertyValue('accent-color'), 'inherit', 'accent-color: accepts inherit');
  s.accentColor = '';
  assertEq(s.accentColor, '', 'accent-color: empty string removes');
}

// --- align-content ---
{
  const s = fresh();
  s.alignContent = 'initial';
  assertEq(s.alignContent, 'initial', 'align-content: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('align-content'), 'initial', 'align-content: getPropertyValue matches accessor');
  s.alignContent = 'inherit';
  assertEq(s.alignContent, 'inherit', 'align-content: overwrite with second value');
  s.removeProperty('align-content');
  assertEq(s.alignContent, '', 'align-content: removeProperty clears value');
  s.setProperty('align-content', 'inherit');
  assertEq(s.getPropertyValue('align-content'), 'inherit', 'align-content: accepts inherit');
  s.alignContent = '';
  assertEq(s.alignContent, '', 'align-content: empty string removes');
}

// --- align-items ---
{
  const s = fresh();
  s.alignItems = 'initial';
  assertEq(s.alignItems, 'initial', 'align-items: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('align-items'), 'initial', 'align-items: getPropertyValue matches accessor');
  s.alignItems = 'inherit';
  assertEq(s.alignItems, 'inherit', 'align-items: overwrite with second value');
  s.removeProperty('align-items');
  assertEq(s.alignItems, '', 'align-items: removeProperty clears value');
  s.setProperty('align-items', 'inherit');
  assertEq(s.getPropertyValue('align-items'), 'inherit', 'align-items: accepts inherit');
  s.alignItems = '';
  assertEq(s.alignItems, '', 'align-items: empty string removes');
}

// --- alignment-baseline ---
{
  const s = fresh();
  s.alignmentBaseline = 'auto';
  assertEq(s.alignmentBaseline, 'auto', 'alignment-baseline: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('alignment-baseline'), 'auto', 'alignment-baseline: getPropertyValue matches accessor');
  s.alignmentBaseline = 'baseline';
  assertEq(s.alignmentBaseline, 'baseline', 'alignment-baseline: overwrite with second value');
  s.removeProperty('alignment-baseline');
  assertEq(s.alignmentBaseline, '', 'alignment-baseline: removeProperty clears value');
  s.setProperty('alignment-baseline', 'inherit');
  assertEq(s.getPropertyValue('alignment-baseline'), 'inherit', 'alignment-baseline: accepts inherit');
  s.alignmentBaseline = '';
  assertEq(s.alignmentBaseline, '', 'alignment-baseline: empty string removes');
  s.alignmentBaseline = 'auto';
  s.alignmentBaseline = 'definitely-not-a-valid-value-xyz';
  assertEq(s.alignmentBaseline, 'auto', 'alignment-baseline: rejects invalid keyword');
}

// --- align-self ---
{
  const s = fresh();
  s.alignSelf = 'initial';
  assertEq(s.alignSelf, 'initial', 'align-self: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('align-self'), 'initial', 'align-self: getPropertyValue matches accessor');
  s.alignSelf = 'inherit';
  assertEq(s.alignSelf, 'inherit', 'align-self: overwrite with second value');
  s.removeProperty('align-self');
  assertEq(s.alignSelf, '', 'align-self: removeProperty clears value');
  s.setProperty('align-self', 'inherit');
  assertEq(s.getPropertyValue('align-self'), 'inherit', 'align-self: accepts inherit');
  s.alignSelf = '';
  assertEq(s.alignSelf, '', 'align-self: empty string removes');
}

// --- anchor-name ---
{
  const s = fresh();
  s.anchorName = 'none';
  assertEq(s.anchorName, 'none', 'anchor-name: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('anchor-name'), 'none', 'anchor-name: getPropertyValue matches accessor');
  s.anchorName = 'inherit';
  assertEq(s.anchorName, 'inherit', 'anchor-name: overwrite with second value');
  s.removeProperty('anchor-name');
  assertEq(s.anchorName, '', 'anchor-name: removeProperty clears value');
  s.setProperty('anchor-name', 'inherit');
  assertEq(s.getPropertyValue('anchor-name'), 'inherit', 'anchor-name: accepts inherit');
  s.anchorName = '';
  assertEq(s.anchorName, '', 'anchor-name: empty string removes');
  s.anchorName = 'none';
  s.anchorName = 'definitely-not-a-valid-value-xyz';
  assertEq(s.anchorName, 'none', 'anchor-name: rejects invalid keyword');
}

// --- anchor-scope ---
{
  const s = fresh();
  s.anchorScope = 'none';
  assertEq(s.anchorScope, 'none', 'anchor-scope: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('anchor-scope'), 'none', 'anchor-scope: getPropertyValue matches accessor');
  s.anchorScope = 'all';
  assertEq(s.anchorScope, 'all', 'anchor-scope: overwrite with second value');
  s.removeProperty('anchor-scope');
  assertEq(s.anchorScope, '', 'anchor-scope: removeProperty clears value');
  s.setProperty('anchor-scope', 'inherit');
  assertEq(s.getPropertyValue('anchor-scope'), 'inherit', 'anchor-scope: accepts inherit');
  s.anchorScope = '';
  assertEq(s.anchorScope, '', 'anchor-scope: empty string removes');
  s.anchorScope = 'none';
  s.anchorScope = 'definitely-not-a-valid-value-xyz';
  assertEq(s.anchorScope, 'none', 'anchor-scope: rejects invalid keyword');
}

// --- aspect-ratio ---
{
  const s = fresh();
  s.aspectRatio = 'auto';
  assertEq(s.aspectRatio, 'auto', 'aspect-ratio: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('aspect-ratio'), 'auto', 'aspect-ratio: getPropertyValue matches accessor');
  s.aspectRatio = 'inherit';
  assertEq(s.aspectRatio, 'inherit', 'aspect-ratio: overwrite with second value');
  s.removeProperty('aspect-ratio');
  assertEq(s.aspectRatio, '', 'aspect-ratio: removeProperty clears value');
  s.setProperty('aspect-ratio', 'inherit');
  assertEq(s.getPropertyValue('aspect-ratio'), 'inherit', 'aspect-ratio: accepts inherit');
  s.aspectRatio = '';
  assertEq(s.aspectRatio, '', 'aspect-ratio: empty string removes');
  s.aspectRatio = 'auto';
  s.aspectRatio = 'definitely-not-a-valid-value-xyz';
  assertEq(s.aspectRatio, 'auto', 'aspect-ratio: rejects invalid keyword');
}

// --- backdrop-filter ---
{
  const s = fresh();
  s.backdropFilter = 'none';
  assertEq(s.backdropFilter, 'none', 'backdrop-filter: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('backdrop-filter'), 'none', 'backdrop-filter: getPropertyValue matches accessor');
  s.backdropFilter = 'inherit';
  assertEq(s.backdropFilter, 'inherit', 'backdrop-filter: overwrite with second value');
  s.removeProperty('backdrop-filter');
  assertEq(s.backdropFilter, '', 'backdrop-filter: removeProperty clears value');
  s.setProperty('backdrop-filter', 'inherit');
  assertEq(s.getPropertyValue('backdrop-filter'), 'inherit', 'backdrop-filter: accepts inherit');
  s.backdropFilter = '';
  assertEq(s.backdropFilter, '', 'backdrop-filter: empty string removes');
  s.backdropFilter = 'none';
  s.backdropFilter = 'definitely-not-a-valid-value-xyz';
  assertEq(s.backdropFilter, 'none', 'backdrop-filter: rejects invalid keyword');
}

// --- backface-visibility ---
{
  const s = fresh();
  s.backfaceVisibility = 'visible';
  assertEq(s.backfaceVisibility, 'visible', 'backface-visibility: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('backface-visibility'), 'visible', 'backface-visibility: getPropertyValue matches accessor');
  s.backfaceVisibility = 'hidden';
  assertEq(s.backfaceVisibility, 'hidden', 'backface-visibility: overwrite with second value');
  s.removeProperty('backface-visibility');
  assertEq(s.backfaceVisibility, '', 'backface-visibility: removeProperty clears value');
  s.setProperty('backface-visibility', 'inherit');
  assertEq(s.getPropertyValue('backface-visibility'), 'inherit', 'backface-visibility: accepts inherit');
  s.backfaceVisibility = '';
  assertEq(s.backfaceVisibility, '', 'backface-visibility: empty string removes');
  s.backfaceVisibility = 'visible';
  s.backfaceVisibility = 'definitely-not-a-valid-value-xyz';
  assertEq(s.backfaceVisibility, 'visible', 'backface-visibility: rejects invalid keyword');
}

// --- background-attachment ---
{
  const s = fresh();
  s.backgroundAttachment = 'scroll';
  assertEq(s.backgroundAttachment, 'scroll', 'background-attachment: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('background-attachment'), 'scroll', 'background-attachment: getPropertyValue matches accessor');
  s.backgroundAttachment = 'fixed';
  assertEq(s.backgroundAttachment, 'fixed', 'background-attachment: overwrite with second value');
  s.removeProperty('background-attachment');
  assertEq(s.backgroundAttachment, '', 'background-attachment: removeProperty clears value');
  s.setProperty('background-attachment', 'inherit');
  assertEq(s.getPropertyValue('background-attachment'), 'inherit', 'background-attachment: accepts inherit');
  s.backgroundAttachment = '';
  assertEq(s.backgroundAttachment, '', 'background-attachment: empty string removes');
  s.backgroundAttachment = 'scroll';
  s.backgroundAttachment = 'definitely-not-a-valid-value-xyz';
  assertEq(s.backgroundAttachment, 'scroll', 'background-attachment: rejects invalid keyword');
}

// --- background-blend-mode ---
{
  const s = fresh();
  s.backgroundBlendMode = 'normal';
  assertEq(s.backgroundBlendMode, 'normal', 'background-blend-mode: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('background-blend-mode'), 'normal', 'background-blend-mode: getPropertyValue matches accessor');
  s.backgroundBlendMode = 'multiply';
  assertEq(s.backgroundBlendMode, 'multiply', 'background-blend-mode: overwrite with second value');
  s.removeProperty('background-blend-mode');
  assertEq(s.backgroundBlendMode, '', 'background-blend-mode: removeProperty clears value');
  s.setProperty('background-blend-mode', 'inherit');
  assertEq(s.getPropertyValue('background-blend-mode'), 'inherit', 'background-blend-mode: accepts inherit');
  s.backgroundBlendMode = '';
  assertEq(s.backgroundBlendMode, '', 'background-blend-mode: empty string removes');
  s.backgroundBlendMode = 'normal';
  s.backgroundBlendMode = 'definitely-not-a-valid-value-xyz';
  assertEq(s.backgroundBlendMode, 'normal', 'background-blend-mode: rejects invalid keyword');
}

// --- background-clip ---
{
  const s = fresh();
  s.backgroundClip = 'border-box';
  assertEq(s.backgroundClip, 'border-box', 'background-clip: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('background-clip'), 'border-box', 'background-clip: getPropertyValue matches accessor');
  s.backgroundClip = 'padding-box';
  assertEq(s.backgroundClip, 'padding-box', 'background-clip: overwrite with second value');
  s.removeProperty('background-clip');
  assertEq(s.backgroundClip, '', 'background-clip: removeProperty clears value');
  s.setProperty('background-clip', 'inherit');
  assertEq(s.getPropertyValue('background-clip'), 'inherit', 'background-clip: accepts inherit');
  s.backgroundClip = '';
  assertEq(s.backgroundClip, '', 'background-clip: empty string removes');
  s.backgroundClip = 'border-box';
  s.backgroundClip = 'definitely-not-a-valid-value-xyz';
  assertEq(s.backgroundClip, 'border-box', 'background-clip: rejects invalid keyword');
}

// --- background-color ---
{
  const s = fresh();
  s.backgroundColor = 'red';
  assertEq(s.backgroundColor, 'red', 'background-color: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('background-color'), 'red', 'background-color: getPropertyValue matches accessor');
  s.backgroundColor = 'blue';
  assertEq(s.backgroundColor, 'blue', 'background-color: overwrite with second value');
  s.removeProperty('background-color');
  assertEq(s.backgroundColor, '', 'background-color: removeProperty clears value');
  s.setProperty('background-color', 'inherit');
  assertEq(s.getPropertyValue('background-color'), 'inherit', 'background-color: accepts inherit');
  s.backgroundColor = '';
  assertEq(s.backgroundColor, '', 'background-color: empty string removes');
}

// --- background-image ---
{
  const s = fresh();
  s.backgroundImage = 'auto';
  assertEq(s.backgroundImage, 'auto', 'background-image: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('background-image'), 'auto', 'background-image: getPropertyValue matches accessor');
  s.backgroundImage = 'none';
  assertEq(s.backgroundImage, 'none', 'background-image: overwrite with second value');
  s.removeProperty('background-image');
  assertEq(s.backgroundImage, '', 'background-image: removeProperty clears value');
  s.setProperty('background-image', 'inherit');
  assertEq(s.getPropertyValue('background-image'), 'inherit', 'background-image: accepts inherit');
  s.backgroundImage = '';
  assertEq(s.backgroundImage, '', 'background-image: empty string removes');
}

// --- background-origin ---
{
  const s = fresh();
  s.backgroundOrigin = 'border-box';
  assertEq(s.backgroundOrigin, 'border-box', 'background-origin: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('background-origin'), 'border-box', 'background-origin: getPropertyValue matches accessor');
  s.backgroundOrigin = 'padding-box';
  assertEq(s.backgroundOrigin, 'padding-box', 'background-origin: overwrite with second value');
  s.removeProperty('background-origin');
  assertEq(s.backgroundOrigin, '', 'background-origin: removeProperty clears value');
  s.setProperty('background-origin', 'inherit');
  assertEq(s.getPropertyValue('background-origin'), 'inherit', 'background-origin: accepts inherit');
  s.backgroundOrigin = '';
  assertEq(s.backgroundOrigin, '', 'background-origin: empty string removes');
  s.backgroundOrigin = 'border-box';
  s.backgroundOrigin = 'definitely-not-a-valid-value-xyz';
  assertEq(s.backgroundOrigin, 'border-box', 'background-origin: rejects invalid keyword');
}

// --- background-position-x ---
{
  const s = fresh();
  s.backgroundPositionX = 'initial';
  assertEq(s.backgroundPositionX, 'initial', 'background-position-x: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('background-position-x'), 'initial', 'background-position-x: getPropertyValue matches accessor');
  s.backgroundPositionX = 'inherit';
  assertEq(s.backgroundPositionX, 'inherit', 'background-position-x: overwrite with second value');
  s.removeProperty('background-position-x');
  assertEq(s.backgroundPositionX, '', 'background-position-x: removeProperty clears value');
  s.setProperty('background-position-x', 'inherit');
  assertEq(s.getPropertyValue('background-position-x'), 'inherit', 'background-position-x: accepts inherit');
  s.backgroundPositionX = '';
  assertEq(s.backgroundPositionX, '', 'background-position-x: empty string removes');
}

// --- background-position-y ---
{
  const s = fresh();
  s.backgroundPositionY = 'initial';
  assertEq(s.backgroundPositionY, 'initial', 'background-position-y: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('background-position-y'), 'initial', 'background-position-y: getPropertyValue matches accessor');
  s.backgroundPositionY = 'inherit';
  assertEq(s.backgroundPositionY, 'inherit', 'background-position-y: overwrite with second value');
  s.removeProperty('background-position-y');
  assertEq(s.backgroundPositionY, '', 'background-position-y: removeProperty clears value');
  s.setProperty('background-position-y', 'inherit');
  assertEq(s.getPropertyValue('background-position-y'), 'inherit', 'background-position-y: accepts inherit');
  s.backgroundPositionY = '';
  assertEq(s.backgroundPositionY, '', 'background-position-y: empty string removes');
}

// --- background-repeat ---
{
  const s = fresh();
  s.backgroundRepeat = 'initial';
  assertEq(s.backgroundRepeat, 'initial', 'background-repeat: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('background-repeat'), 'initial', 'background-repeat: getPropertyValue matches accessor');
  s.backgroundRepeat = 'inherit';
  assertEq(s.backgroundRepeat, 'inherit', 'background-repeat: overwrite with second value');
  s.removeProperty('background-repeat');
  assertEq(s.backgroundRepeat, '', 'background-repeat: removeProperty clears value');
  s.setProperty('background-repeat', 'inherit');
  assertEq(s.getPropertyValue('background-repeat'), 'inherit', 'background-repeat: accepts inherit');
  s.backgroundRepeat = '';
  assertEq(s.backgroundRepeat, '', 'background-repeat: empty string removes');
}

// --- background-size ---
{
  const s = fresh();
  s.backgroundSize = 'auto';
  assertEq(s.backgroundSize, 'auto', 'background-size: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('background-size'), 'auto', 'background-size: getPropertyValue matches accessor');
  s.backgroundSize = 'cover';
  assertEq(s.backgroundSize, 'cover', 'background-size: overwrite with second value');
  s.removeProperty('background-size');
  assertEq(s.backgroundSize, '', 'background-size: removeProperty clears value');
  s.setProperty('background-size', 'inherit');
  assertEq(s.getPropertyValue('background-size'), 'inherit', 'background-size: accepts inherit');
  s.backgroundSize = '';
  assertEq(s.backgroundSize, '', 'background-size: empty string removes');
}

// --- baseline-shift ---
{
  const s = fresh();
  s.baselineShift = 'baseline';
  assertEq(s.baselineShift, 'baseline', 'baseline-shift: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('baseline-shift'), 'baseline', 'baseline-shift: getPropertyValue matches accessor');
  s.baselineShift = 'sub';
  assertEq(s.baselineShift, 'sub', 'baseline-shift: overwrite with second value');
  s.removeProperty('baseline-shift');
  assertEq(s.baselineShift, '', 'baseline-shift: removeProperty clears value');
  s.setProperty('baseline-shift', 'inherit');
  assertEq(s.getPropertyValue('baseline-shift'), 'inherit', 'baseline-shift: accepts inherit');
  s.baselineShift = '';
  assertEq(s.baselineShift, '', 'baseline-shift: empty string removes');
}

// --- baseline-source ---
{
  const s = fresh();
  s.baselineSource = 'auto';
  assertEq(s.baselineSource, 'auto', 'baseline-source: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('baseline-source'), 'auto', 'baseline-source: getPropertyValue matches accessor');
  s.baselineSource = 'first';
  assertEq(s.baselineSource, 'first', 'baseline-source: overwrite with second value');
  s.removeProperty('baseline-source');
  assertEq(s.baselineSource, '', 'baseline-source: removeProperty clears value');
  s.setProperty('baseline-source', 'inherit');
  assertEq(s.getPropertyValue('baseline-source'), 'inherit', 'baseline-source: accepts inherit');
  s.baselineSource = '';
  assertEq(s.baselineSource, '', 'baseline-source: empty string removes');
  s.baselineSource = 'auto';
  s.baselineSource = 'definitely-not-a-valid-value-xyz';
  assertEq(s.baselineSource, 'auto', 'baseline-source: rejects invalid keyword');
}

// --- border-bottom-color ---
{
  const s = fresh();
  s.borderBottomColor = 'red';
  assertEq(s.borderBottomColor, 'red', 'border-bottom-color: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('border-bottom-color'), 'red', 'border-bottom-color: getPropertyValue matches accessor');
  s.borderBottomColor = 'blue';
  assertEq(s.borderBottomColor, 'blue', 'border-bottom-color: overwrite with second value');
  s.removeProperty('border-bottom-color');
  assertEq(s.borderBottomColor, '', 'border-bottom-color: removeProperty clears value');
  s.setProperty('border-bottom-color', 'inherit');
  assertEq(s.getPropertyValue('border-bottom-color'), 'inherit', 'border-bottom-color: accepts inherit');
  s.borderBottomColor = '';
  assertEq(s.borderBottomColor, '', 'border-bottom-color: empty string removes');
}

// --- border-bottom-left-radius ---
{
  const s = fresh();
  s.borderBottomLeftRadius = '10px';
  assertEq(s.borderBottomLeftRadius, '10px', 'border-bottom-left-radius: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('border-bottom-left-radius'), '10px', 'border-bottom-left-radius: getPropertyValue matches accessor');
  s.borderBottomLeftRadius = '20px';
  assertEq(s.borderBottomLeftRadius, '20px', 'border-bottom-left-radius: overwrite with second value');
  s.removeProperty('border-bottom-left-radius');
  assertEq(s.borderBottomLeftRadius, '', 'border-bottom-left-radius: removeProperty clears value');
  s.setProperty('border-bottom-left-radius', 'inherit');
  assertEq(s.getPropertyValue('border-bottom-left-radius'), 'inherit', 'border-bottom-left-radius: accepts inherit');
  s.borderBottomLeftRadius = '';
  assertEq(s.borderBottomLeftRadius, '', 'border-bottom-left-radius: empty string removes');
}

// --- border-bottom-right-radius ---
{
  const s = fresh();
  s.borderBottomRightRadius = '10px';
  assertEq(s.borderBottomRightRadius, '10px', 'border-bottom-right-radius: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('border-bottom-right-radius'), '10px', 'border-bottom-right-radius: getPropertyValue matches accessor');
  s.borderBottomRightRadius = '20px';
  assertEq(s.borderBottomRightRadius, '20px', 'border-bottom-right-radius: overwrite with second value');
  s.removeProperty('border-bottom-right-radius');
  assertEq(s.borderBottomRightRadius, '', 'border-bottom-right-radius: removeProperty clears value');
  s.setProperty('border-bottom-right-radius', 'inherit');
  assertEq(s.getPropertyValue('border-bottom-right-radius'), 'inherit', 'border-bottom-right-radius: accepts inherit');
  s.borderBottomRightRadius = '';
  assertEq(s.borderBottomRightRadius, '', 'border-bottom-right-radius: empty string removes');
}

// --- border-bottom-style ---
{
  const s = fresh();
  s.borderBottomStyle = 'none';
  assertEq(s.borderBottomStyle, 'none', 'border-bottom-style: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('border-bottom-style'), 'none', 'border-bottom-style: getPropertyValue matches accessor');
  s.borderBottomStyle = 'hidden';
  assertEq(s.borderBottomStyle, 'hidden', 'border-bottom-style: overwrite with second value');
  s.removeProperty('border-bottom-style');
  assertEq(s.borderBottomStyle, '', 'border-bottom-style: removeProperty clears value');
  s.setProperty('border-bottom-style', 'inherit');
  assertEq(s.getPropertyValue('border-bottom-style'), 'inherit', 'border-bottom-style: accepts inherit');
  s.borderBottomStyle = '';
  assertEq(s.borderBottomStyle, '', 'border-bottom-style: empty string removes');
  s.borderBottomStyle = 'none';
  s.borderBottomStyle = 'definitely-not-a-valid-value-xyz';
  assertEq(s.borderBottomStyle, 'none', 'border-bottom-style: rejects invalid keyword');
}

// --- border-bottom-width ---
{
  const s = fresh();
  s.borderBottomWidth = '10px';
  assertEq(s.borderBottomWidth, '10px', 'border-bottom-width: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('border-bottom-width'), '10px', 'border-bottom-width: getPropertyValue matches accessor');
  s.borderBottomWidth = '20px';
  assertEq(s.borderBottomWidth, '20px', 'border-bottom-width: overwrite with second value');
  s.removeProperty('border-bottom-width');
  assertEq(s.borderBottomWidth, '', 'border-bottom-width: removeProperty clears value');
  s.setProperty('border-bottom-width', 'inherit');
  assertEq(s.getPropertyValue('border-bottom-width'), 'inherit', 'border-bottom-width: accepts inherit');
  s.borderBottomWidth = '';
  assertEq(s.borderBottomWidth, '', 'border-bottom-width: empty string removes');
}

// --- border-collapse ---
{
  const s = fresh();
  s.borderCollapse = 'separate';
  assertEq(s.borderCollapse, 'separate', 'border-collapse: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('border-collapse'), 'separate', 'border-collapse: getPropertyValue matches accessor');
  s.borderCollapse = 'collapse';
  assertEq(s.borderCollapse, 'collapse', 'border-collapse: overwrite with second value');
  s.removeProperty('border-collapse');
  assertEq(s.borderCollapse, '', 'border-collapse: removeProperty clears value');
  s.setProperty('border-collapse', 'inherit');
  assertEq(s.getPropertyValue('border-collapse'), 'inherit', 'border-collapse: accepts inherit');
  s.borderCollapse = '';
  assertEq(s.borderCollapse, '', 'border-collapse: empty string removes');
  s.borderCollapse = 'separate';
  s.borderCollapse = 'definitely-not-a-valid-value-xyz';
  assertEq(s.borderCollapse, 'separate', 'border-collapse: rejects invalid keyword');
}

// --- border-image-outset ---
{
  const s = fresh();
  s.borderImageOutset = 'none';
  assertEq(s.borderImageOutset, 'none', 'border-image-outset: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('border-image-outset'), 'none', 'border-image-outset: getPropertyValue matches accessor');
  s.borderImageOutset = 'inherit';
  assertEq(s.borderImageOutset, 'inherit', 'border-image-outset: overwrite with second value');
  s.removeProperty('border-image-outset');
  assertEq(s.borderImageOutset, '', 'border-image-outset: removeProperty clears value');
  s.setProperty('border-image-outset', 'inherit');
  assertEq(s.getPropertyValue('border-image-outset'), 'inherit', 'border-image-outset: accepts inherit');
  s.borderImageOutset = '';
  assertEq(s.borderImageOutset, '', 'border-image-outset: empty string removes');
}

// --- border-image-repeat ---
{
  const s = fresh();
  s.borderImageRepeat = 'stretch';
  assertEq(s.borderImageRepeat, 'stretch', 'border-image-repeat: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('border-image-repeat'), 'stretch', 'border-image-repeat: getPropertyValue matches accessor');
  s.borderImageRepeat = 'repeat';
  assertEq(s.borderImageRepeat, 'repeat', 'border-image-repeat: overwrite with second value');
  s.removeProperty('border-image-repeat');
  assertEq(s.borderImageRepeat, '', 'border-image-repeat: removeProperty clears value');
  s.setProperty('border-image-repeat', 'inherit');
  assertEq(s.getPropertyValue('border-image-repeat'), 'inherit', 'border-image-repeat: accepts inherit');
  s.borderImageRepeat = '';
  assertEq(s.borderImageRepeat, '', 'border-image-repeat: empty string removes');
  s.borderImageRepeat = 'stretch';
  s.borderImageRepeat = 'definitely-not-a-valid-value-xyz';
  assertEq(s.borderImageRepeat, 'stretch', 'border-image-repeat: rejects invalid keyword');
}

// --- border-image-slice ---
{
  const s = fresh();
  s.borderImageSlice = 'none';
  assertEq(s.borderImageSlice, 'none', 'border-image-slice: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('border-image-slice'), 'none', 'border-image-slice: getPropertyValue matches accessor');
  s.borderImageSlice = 'inherit';
  assertEq(s.borderImageSlice, 'inherit', 'border-image-slice: overwrite with second value');
  s.removeProperty('border-image-slice');
  assertEq(s.borderImageSlice, '', 'border-image-slice: removeProperty clears value');
  s.setProperty('border-image-slice', 'inherit');
  assertEq(s.getPropertyValue('border-image-slice'), 'inherit', 'border-image-slice: accepts inherit');
  s.borderImageSlice = '';
  assertEq(s.borderImageSlice, '', 'border-image-slice: empty string removes');
}

// --- border-image-source ---
{
  const s = fresh();
  s.borderImageSource = 'none';
  assertEq(s.borderImageSource, 'none', 'border-image-source: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('border-image-source'), 'none', 'border-image-source: getPropertyValue matches accessor');
  s.borderImageSource = 'inherit';
  assertEq(s.borderImageSource, 'inherit', 'border-image-source: overwrite with second value');
  s.removeProperty('border-image-source');
  assertEq(s.borderImageSource, '', 'border-image-source: removeProperty clears value');
  s.setProperty('border-image-source', 'inherit');
  assertEq(s.getPropertyValue('border-image-source'), 'inherit', 'border-image-source: accepts inherit');
  s.borderImageSource = '';
  assertEq(s.borderImageSource, '', 'border-image-source: empty string removes');
}

// --- border-image-width ---
{
  const s = fresh();
  s.borderImageWidth = 'auto';
  assertEq(s.borderImageWidth, 'auto', 'border-image-width: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('border-image-width'), 'auto', 'border-image-width: getPropertyValue matches accessor');
  s.borderImageWidth = 'inherit';
  assertEq(s.borderImageWidth, 'inherit', 'border-image-width: overwrite with second value');
  s.removeProperty('border-image-width');
  assertEq(s.borderImageWidth, '', 'border-image-width: removeProperty clears value');
  s.setProperty('border-image-width', 'inherit');
  assertEq(s.getPropertyValue('border-image-width'), 'inherit', 'border-image-width: accepts inherit');
  s.borderImageWidth = '';
  assertEq(s.borderImageWidth, '', 'border-image-width: empty string removes');
}

// --- border-left-color ---
{
  const s = fresh();
  s.borderLeftColor = 'red';
  assertEq(s.borderLeftColor, 'red', 'border-left-color: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('border-left-color'), 'red', 'border-left-color: getPropertyValue matches accessor');
  s.borderLeftColor = 'blue';
  assertEq(s.borderLeftColor, 'blue', 'border-left-color: overwrite with second value');
  s.removeProperty('border-left-color');
  assertEq(s.borderLeftColor, '', 'border-left-color: removeProperty clears value');
  s.setProperty('border-left-color', 'inherit');
  assertEq(s.getPropertyValue('border-left-color'), 'inherit', 'border-left-color: accepts inherit');
  s.borderLeftColor = '';
  assertEq(s.borderLeftColor, '', 'border-left-color: empty string removes');
}

// --- border-left-style ---
{
  const s = fresh();
  s.borderLeftStyle = 'none';
  assertEq(s.borderLeftStyle, 'none', 'border-left-style: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('border-left-style'), 'none', 'border-left-style: getPropertyValue matches accessor');
  s.borderLeftStyle = 'hidden';
  assertEq(s.borderLeftStyle, 'hidden', 'border-left-style: overwrite with second value');
  s.removeProperty('border-left-style');
  assertEq(s.borderLeftStyle, '', 'border-left-style: removeProperty clears value');
  s.setProperty('border-left-style', 'inherit');
  assertEq(s.getPropertyValue('border-left-style'), 'inherit', 'border-left-style: accepts inherit');
  s.borderLeftStyle = '';
  assertEq(s.borderLeftStyle, '', 'border-left-style: empty string removes');
  s.borderLeftStyle = 'none';
  s.borderLeftStyle = 'definitely-not-a-valid-value-xyz';
  assertEq(s.borderLeftStyle, 'none', 'border-left-style: rejects invalid keyword');
}

// --- border-left-width ---
{
  const s = fresh();
  s.borderLeftWidth = '10px';
  assertEq(s.borderLeftWidth, '10px', 'border-left-width: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('border-left-width'), '10px', 'border-left-width: getPropertyValue matches accessor');
  s.borderLeftWidth = '20px';
  assertEq(s.borderLeftWidth, '20px', 'border-left-width: overwrite with second value');
  s.removeProperty('border-left-width');
  assertEq(s.borderLeftWidth, '', 'border-left-width: removeProperty clears value');
  s.setProperty('border-left-width', 'inherit');
  assertEq(s.getPropertyValue('border-left-width'), 'inherit', 'border-left-width: accepts inherit');
  s.borderLeftWidth = '';
  assertEq(s.borderLeftWidth, '', 'border-left-width: empty string removes');
}

// --- border-right-color ---
{
  const s = fresh();
  s.borderRightColor = 'red';
  assertEq(s.borderRightColor, 'red', 'border-right-color: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('border-right-color'), 'red', 'border-right-color: getPropertyValue matches accessor');
  s.borderRightColor = 'blue';
  assertEq(s.borderRightColor, 'blue', 'border-right-color: overwrite with second value');
  s.removeProperty('border-right-color');
  assertEq(s.borderRightColor, '', 'border-right-color: removeProperty clears value');
  s.setProperty('border-right-color', 'inherit');
  assertEq(s.getPropertyValue('border-right-color'), 'inherit', 'border-right-color: accepts inherit');
  s.borderRightColor = '';
  assertEq(s.borderRightColor, '', 'border-right-color: empty string removes');
}

// --- border-right-style ---
{
  const s = fresh();
  s.borderRightStyle = 'none';
  assertEq(s.borderRightStyle, 'none', 'border-right-style: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('border-right-style'), 'none', 'border-right-style: getPropertyValue matches accessor');
  s.borderRightStyle = 'hidden';
  assertEq(s.borderRightStyle, 'hidden', 'border-right-style: overwrite with second value');
  s.removeProperty('border-right-style');
  assertEq(s.borderRightStyle, '', 'border-right-style: removeProperty clears value');
  s.setProperty('border-right-style', 'inherit');
  assertEq(s.getPropertyValue('border-right-style'), 'inherit', 'border-right-style: accepts inherit');
  s.borderRightStyle = '';
  assertEq(s.borderRightStyle, '', 'border-right-style: empty string removes');
  s.borderRightStyle = 'none';
  s.borderRightStyle = 'definitely-not-a-valid-value-xyz';
  assertEq(s.borderRightStyle, 'none', 'border-right-style: rejects invalid keyword');
}

// --- border-right-width ---
{
  const s = fresh();
  s.borderRightWidth = '10px';
  assertEq(s.borderRightWidth, '10px', 'border-right-width: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('border-right-width'), '10px', 'border-right-width: getPropertyValue matches accessor');
  s.borderRightWidth = '20px';
  assertEq(s.borderRightWidth, '20px', 'border-right-width: overwrite with second value');
  s.removeProperty('border-right-width');
  assertEq(s.borderRightWidth, '', 'border-right-width: removeProperty clears value');
  s.setProperty('border-right-width', 'inherit');
  assertEq(s.getPropertyValue('border-right-width'), 'inherit', 'border-right-width: accepts inherit');
  s.borderRightWidth = '';
  assertEq(s.borderRightWidth, '', 'border-right-width: empty string removes');
}

// --- border-top-color ---
{
  const s = fresh();
  s.borderTopColor = 'red';
  assertEq(s.borderTopColor, 'red', 'border-top-color: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('border-top-color'), 'red', 'border-top-color: getPropertyValue matches accessor');
  s.borderTopColor = 'blue';
  assertEq(s.borderTopColor, 'blue', 'border-top-color: overwrite with second value');
  s.removeProperty('border-top-color');
  assertEq(s.borderTopColor, '', 'border-top-color: removeProperty clears value');
  s.setProperty('border-top-color', 'inherit');
  assertEq(s.getPropertyValue('border-top-color'), 'inherit', 'border-top-color: accepts inherit');
  s.borderTopColor = '';
  assertEq(s.borderTopColor, '', 'border-top-color: empty string removes');
}

// --- border-top-left-radius ---
{
  const s = fresh();
  s.borderTopLeftRadius = '10px';
  assertEq(s.borderTopLeftRadius, '10px', 'border-top-left-radius: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('border-top-left-radius'), '10px', 'border-top-left-radius: getPropertyValue matches accessor');
  s.borderTopLeftRadius = '20px';
  assertEq(s.borderTopLeftRadius, '20px', 'border-top-left-radius: overwrite with second value');
  s.removeProperty('border-top-left-radius');
  assertEq(s.borderTopLeftRadius, '', 'border-top-left-radius: removeProperty clears value');
  s.setProperty('border-top-left-radius', 'inherit');
  assertEq(s.getPropertyValue('border-top-left-radius'), 'inherit', 'border-top-left-radius: accepts inherit');
  s.borderTopLeftRadius = '';
  assertEq(s.borderTopLeftRadius, '', 'border-top-left-radius: empty string removes');
}

// --- border-top-right-radius ---
{
  const s = fresh();
  s.borderTopRightRadius = '10px';
  assertEq(s.borderTopRightRadius, '10px', 'border-top-right-radius: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('border-top-right-radius'), '10px', 'border-top-right-radius: getPropertyValue matches accessor');
  s.borderTopRightRadius = '20px';
  assertEq(s.borderTopRightRadius, '20px', 'border-top-right-radius: overwrite with second value');
  s.removeProperty('border-top-right-radius');
  assertEq(s.borderTopRightRadius, '', 'border-top-right-radius: removeProperty clears value');
  s.setProperty('border-top-right-radius', 'inherit');
  assertEq(s.getPropertyValue('border-top-right-radius'), 'inherit', 'border-top-right-radius: accepts inherit');
  s.borderTopRightRadius = '';
  assertEq(s.borderTopRightRadius, '', 'border-top-right-radius: empty string removes');
}

// --- border-top-style ---
{
  const s = fresh();
  s.borderTopStyle = 'none';
  assertEq(s.borderTopStyle, 'none', 'border-top-style: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('border-top-style'), 'none', 'border-top-style: getPropertyValue matches accessor');
  s.borderTopStyle = 'hidden';
  assertEq(s.borderTopStyle, 'hidden', 'border-top-style: overwrite with second value');
  s.removeProperty('border-top-style');
  assertEq(s.borderTopStyle, '', 'border-top-style: removeProperty clears value');
  s.setProperty('border-top-style', 'inherit');
  assertEq(s.getPropertyValue('border-top-style'), 'inherit', 'border-top-style: accepts inherit');
  s.borderTopStyle = '';
  assertEq(s.borderTopStyle, '', 'border-top-style: empty string removes');
  s.borderTopStyle = 'none';
  s.borderTopStyle = 'definitely-not-a-valid-value-xyz';
  assertEq(s.borderTopStyle, 'none', 'border-top-style: rejects invalid keyword');
}

// --- border-top-width ---
{
  const s = fresh();
  s.borderTopWidth = '10px';
  assertEq(s.borderTopWidth, '10px', 'border-top-width: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('border-top-width'), '10px', 'border-top-width: getPropertyValue matches accessor');
  s.borderTopWidth = '20px';
  assertEq(s.borderTopWidth, '20px', 'border-top-width: overwrite with second value');
  s.removeProperty('border-top-width');
  assertEq(s.borderTopWidth, '', 'border-top-width: removeProperty clears value');
  s.setProperty('border-top-width', 'inherit');
  assertEq(s.getPropertyValue('border-top-width'), 'inherit', 'border-top-width: accepts inherit');
  s.borderTopWidth = '';
  assertEq(s.borderTopWidth, '', 'border-top-width: empty string removes');
}

// --- border-shape ---
{
  const s = fresh();
  s.borderShape = 'none';
  assertEq(s.borderShape, 'none', 'border-shape: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('border-shape'), 'none', 'border-shape: getPropertyValue matches accessor');
  s.borderShape = 'inherit';
  assertEq(s.borderShape, 'inherit', 'border-shape: overwrite with second value');
  s.removeProperty('border-shape');
  assertEq(s.borderShape, '', 'border-shape: removeProperty clears value');
  s.setProperty('border-shape', 'inherit');
  assertEq(s.getPropertyValue('border-shape'), 'inherit', 'border-shape: accepts inherit');
  s.borderShape = '';
  assertEq(s.borderShape, '', 'border-shape: empty string removes');
  s.borderShape = 'none';
  s.borderShape = 'definitely-not-a-valid-value-xyz';
  assertEq(s.borderShape, 'none', 'border-shape: rejects invalid keyword');
}

// --- bottom ---
{
  const s = fresh();
  s.bottom = '10px';
  assertEq(s.bottom, '10px', 'bottom: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('bottom'), '10px', 'bottom: getPropertyValue matches accessor');
  s.bottom = '20px';
  assertEq(s.bottom, '20px', 'bottom: overwrite with second value');
  s.removeProperty('bottom');
  assertEq(s.bottom, '', 'bottom: removeProperty clears value');
  s.setProperty('bottom', 'inherit');
  assertEq(s.getPropertyValue('bottom'), 'inherit', 'bottom: accepts inherit');
  s.bottom = '';
  assertEq(s.bottom, '', 'bottom: empty string removes');
}

// --- box-decoration-break ---
{
  const s = fresh();
  s.boxDecorationBreak = 'slice';
  assertEq(s.boxDecorationBreak, 'slice', 'box-decoration-break: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('box-decoration-break'), 'slice', 'box-decoration-break: getPropertyValue matches accessor');
  s.boxDecorationBreak = 'clone';
  assertEq(s.boxDecorationBreak, 'clone', 'box-decoration-break: overwrite with second value');
  s.removeProperty('box-decoration-break');
  assertEq(s.boxDecorationBreak, '', 'box-decoration-break: removeProperty clears value');
  s.setProperty('box-decoration-break', 'inherit');
  assertEq(s.getPropertyValue('box-decoration-break'), 'inherit', 'box-decoration-break: accepts inherit');
  s.boxDecorationBreak = '';
  assertEq(s.boxDecorationBreak, '', 'box-decoration-break: empty string removes');
  s.boxDecorationBreak = 'slice';
  s.boxDecorationBreak = 'definitely-not-a-valid-value-xyz';
  assertEq(s.boxDecorationBreak, 'slice', 'box-decoration-break: rejects invalid keyword');
}

// --- box-shadow ---
{
  const s = fresh();
  s.boxShadow = 'none';
  assertEq(s.boxShadow, 'none', 'box-shadow: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('box-shadow'), 'none', 'box-shadow: getPropertyValue matches accessor');
  s.boxShadow = 'inherit';
  assertEq(s.boxShadow, 'inherit', 'box-shadow: overwrite with second value');
  s.removeProperty('box-shadow');
  assertEq(s.boxShadow, '', 'box-shadow: removeProperty clears value');
  s.setProperty('box-shadow', 'inherit');
  assertEq(s.getPropertyValue('box-shadow'), 'inherit', 'box-shadow: accepts inherit');
  s.boxShadow = '';
  assertEq(s.boxShadow, '', 'box-shadow: empty string removes');
  s.boxShadow = 'none';
  s.boxShadow = 'definitely-not-a-valid-value-xyz';
  assertEq(s.boxShadow, 'none', 'box-shadow: rejects invalid keyword');
}

// --- box-sizing ---
{
  const s = fresh();
  s.boxSizing = 'content-box';
  assertEq(s.boxSizing, 'content-box', 'box-sizing: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('box-sizing'), 'content-box', 'box-sizing: getPropertyValue matches accessor');
  s.boxSizing = 'border-box';
  assertEq(s.boxSizing, 'border-box', 'box-sizing: overwrite with second value');
  s.removeProperty('box-sizing');
  assertEq(s.boxSizing, '', 'box-sizing: removeProperty clears value');
  s.setProperty('box-sizing', 'inherit');
  assertEq(s.getPropertyValue('box-sizing'), 'inherit', 'box-sizing: accepts inherit');
  s.boxSizing = '';
  assertEq(s.boxSizing, '', 'box-sizing: empty string removes');
  s.boxSizing = 'content-box';
  s.boxSizing = 'definitely-not-a-valid-value-xyz';
  assertEq(s.boxSizing, 'content-box', 'box-sizing: rejects invalid keyword');
}

// --- break-after ---
{
  const s = fresh();
  s.breakAfter = 'auto';
  assertEq(s.breakAfter, 'auto', 'break-after: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('break-after'), 'auto', 'break-after: getPropertyValue matches accessor');
  s.breakAfter = 'avoid';
  assertEq(s.breakAfter, 'avoid', 'break-after: overwrite with second value');
  s.removeProperty('break-after');
  assertEq(s.breakAfter, '', 'break-after: removeProperty clears value');
  s.setProperty('break-after', 'inherit');
  assertEq(s.getPropertyValue('break-after'), 'inherit', 'break-after: accepts inherit');
  s.breakAfter = '';
  assertEq(s.breakAfter, '', 'break-after: empty string removes');
  s.breakAfter = 'auto';
  s.breakAfter = 'definitely-not-a-valid-value-xyz';
  assertEq(s.breakAfter, 'auto', 'break-after: rejects invalid keyword');
}

// --- break-before ---
{
  const s = fresh();
  s.breakBefore = 'auto';
  assertEq(s.breakBefore, 'auto', 'break-before: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('break-before'), 'auto', 'break-before: getPropertyValue matches accessor');
  s.breakBefore = 'avoid';
  assertEq(s.breakBefore, 'avoid', 'break-before: overwrite with second value');
  s.removeProperty('break-before');
  assertEq(s.breakBefore, '', 'break-before: removeProperty clears value');
  s.setProperty('break-before', 'inherit');
  assertEq(s.getPropertyValue('break-before'), 'inherit', 'break-before: accepts inherit');
  s.breakBefore = '';
  assertEq(s.breakBefore, '', 'break-before: empty string removes');
  s.breakBefore = 'auto';
  s.breakBefore = 'definitely-not-a-valid-value-xyz';
  assertEq(s.breakBefore, 'auto', 'break-before: rejects invalid keyword');
}

// --- break-inside ---
{
  const s = fresh();
  s.breakInside = 'auto';
  assertEq(s.breakInside, 'auto', 'break-inside: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('break-inside'), 'auto', 'break-inside: getPropertyValue matches accessor');
  s.breakInside = 'avoid';
  assertEq(s.breakInside, 'avoid', 'break-inside: overwrite with second value');
  s.removeProperty('break-inside');
  assertEq(s.breakInside, '', 'break-inside: removeProperty clears value');
  s.setProperty('break-inside', 'inherit');
  assertEq(s.getPropertyValue('break-inside'), 'inherit', 'break-inside: accepts inherit');
  s.breakInside = '';
  assertEq(s.breakInside, '', 'break-inside: empty string removes');
  s.breakInside = 'auto';
  s.breakInside = 'definitely-not-a-valid-value-xyz';
  assertEq(s.breakInside, 'auto', 'break-inside: rejects invalid keyword');
}

// --- buffered-rendering ---
{
  const s = fresh();
  s.bufferedRendering = 'auto';
  assertEq(s.bufferedRendering, 'auto', 'buffered-rendering: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('buffered-rendering'), 'auto', 'buffered-rendering: getPropertyValue matches accessor');
  s.bufferedRendering = 'dynamic';
  assertEq(s.bufferedRendering, 'dynamic', 'buffered-rendering: overwrite with second value');
  s.removeProperty('buffered-rendering');
  assertEq(s.bufferedRendering, '', 'buffered-rendering: removeProperty clears value');
  s.setProperty('buffered-rendering', 'inherit');
  assertEq(s.getPropertyValue('buffered-rendering'), 'inherit', 'buffered-rendering: accepts inherit');
  s.bufferedRendering = '';
  assertEq(s.bufferedRendering, '', 'buffered-rendering: empty string removes');
  s.bufferedRendering = 'auto';
  s.bufferedRendering = 'definitely-not-a-valid-value-xyz';
  assertEq(s.bufferedRendering, 'auto', 'buffered-rendering: rejects invalid keyword');
}

// --- caption-side ---
{
  const s = fresh();
  s.captionSide = 'top';
  assertEq(s.captionSide, 'top', 'caption-side: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('caption-side'), 'top', 'caption-side: getPropertyValue matches accessor');
  s.captionSide = 'bottom';
  assertEq(s.captionSide, 'bottom', 'caption-side: overwrite with second value');
  s.removeProperty('caption-side');
  assertEq(s.captionSide, '', 'caption-side: removeProperty clears value');
  s.setProperty('caption-side', 'inherit');
  assertEq(s.getPropertyValue('caption-side'), 'inherit', 'caption-side: accepts inherit');
  s.captionSide = '';
  assertEq(s.captionSide, '', 'caption-side: empty string removes');
  s.captionSide = 'top';
  s.captionSide = 'definitely-not-a-valid-value-xyz';
  assertEq(s.captionSide, 'top', 'caption-side: rejects invalid keyword');
}

// --- caret-animation ---
{
  const s = fresh();
  s.caretAnimation = 'auto';
  assertEq(s.caretAnimation, 'auto', 'caret-animation: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('caret-animation'), 'auto', 'caret-animation: getPropertyValue matches accessor');
  s.caretAnimation = 'manual';
  assertEq(s.caretAnimation, 'manual', 'caret-animation: overwrite with second value');
  s.removeProperty('caret-animation');
  assertEq(s.caretAnimation, '', 'caret-animation: removeProperty clears value');
  s.setProperty('caret-animation', 'inherit');
  assertEq(s.getPropertyValue('caret-animation'), 'inherit', 'caret-animation: accepts inherit');
  s.caretAnimation = '';
  assertEq(s.caretAnimation, '', 'caret-animation: empty string removes');
  s.caretAnimation = 'auto';
  s.caretAnimation = 'definitely-not-a-valid-value-xyz';
  assertEq(s.caretAnimation, 'auto', 'caret-animation: rejects invalid keyword');
}

// --- caret-color ---
{
  const s = fresh();
  s.caretColor = 'red';
  assertEq(s.caretColor, 'red', 'caret-color: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('caret-color'), 'red', 'caret-color: getPropertyValue matches accessor');
  s.caretColor = 'blue';
  assertEq(s.caretColor, 'blue', 'caret-color: overwrite with second value');
  s.removeProperty('caret-color');
  assertEq(s.caretColor, '', 'caret-color: removeProperty clears value');
  s.setProperty('caret-color', 'inherit');
  assertEq(s.getPropertyValue('caret-color'), 'inherit', 'caret-color: accepts inherit');
  s.caretColor = '';
  assertEq(s.caretColor, '', 'caret-color: empty string removes');
}

// --- caret-shape ---
{
  const s = fresh();
  s.caretShape = 'auto';
  assertEq(s.caretShape, 'auto', 'caret-shape: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('caret-shape'), 'auto', 'caret-shape: getPropertyValue matches accessor');
  s.caretShape = 'bar';
  assertEq(s.caretShape, 'bar', 'caret-shape: overwrite with second value');
  s.removeProperty('caret-shape');
  assertEq(s.caretShape, '', 'caret-shape: removeProperty clears value');
  s.setProperty('caret-shape', 'inherit');
  assertEq(s.getPropertyValue('caret-shape'), 'inherit', 'caret-shape: accepts inherit');
  s.caretShape = '';
  assertEq(s.caretShape, '', 'caret-shape: empty string removes');
  s.caretShape = 'auto';
  s.caretShape = 'definitely-not-a-valid-value-xyz';
  assertEq(s.caretShape, 'auto', 'caret-shape: rejects invalid keyword');
}

// --- clear ---
{
  const s = fresh();
  s.clear = 'none';
  assertEq(s.clear, 'none', 'clear: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('clear'), 'none', 'clear: getPropertyValue matches accessor');
  s.clear = 'left';
  assertEq(s.clear, 'left', 'clear: overwrite with second value');
  s.removeProperty('clear');
  assertEq(s.clear, '', 'clear: removeProperty clears value');
  s.setProperty('clear', 'inherit');
  assertEq(s.getPropertyValue('clear'), 'inherit', 'clear: accepts inherit');
  s.clear = '';
  assertEq(s.clear, '', 'clear: empty string removes');
  s.clear = 'none';
  s.clear = 'definitely-not-a-valid-value-xyz';
  assertEq(s.clear, 'none', 'clear: rejects invalid keyword');
}

// --- clip ---
{
  const s = fresh();
  s.clip = 'auto';
  assertEq(s.clip, 'auto', 'clip: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('clip'), 'auto', 'clip: getPropertyValue matches accessor');
  s.clip = 'inherit';
  assertEq(s.clip, 'inherit', 'clip: overwrite with second value');
  s.removeProperty('clip');
  assertEq(s.clip, '', 'clip: removeProperty clears value');
  s.setProperty('clip', 'inherit');
  assertEq(s.getPropertyValue('clip'), 'inherit', 'clip: accepts inherit');
  s.clip = '';
  assertEq(s.clip, '', 'clip: empty string removes');
  s.clip = 'auto';
  s.clip = 'definitely-not-a-valid-value-xyz';
  assertEq(s.clip, 'auto', 'clip: rejects invalid keyword');
}

// --- clip-path ---
{
  const s = fresh();
  s.clipPath = 'border-box';
  assertEq(s.clipPath, 'border-box', 'clip-path: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('clip-path'), 'border-box', 'clip-path: getPropertyValue matches accessor');
  s.clipPath = 'padding-box';
  assertEq(s.clipPath, 'padding-box', 'clip-path: overwrite with second value');
  s.removeProperty('clip-path');
  assertEq(s.clipPath, '', 'clip-path: removeProperty clears value');
  s.setProperty('clip-path', 'inherit');
  assertEq(s.getPropertyValue('clip-path'), 'inherit', 'clip-path: accepts inherit');
  s.clipPath = '';
  assertEq(s.clipPath, '', 'clip-path: empty string removes');
  s.clipPath = 'border-box';
  s.clipPath = 'definitely-not-a-valid-value-xyz';
  assertEq(s.clipPath, 'border-box', 'clip-path: rejects invalid keyword');
}

// --- clip-rule ---
{
  const s = fresh();
  s.clipRule = 'nonzero';
  assertEq(s.clipRule, 'nonzero', 'clip-rule: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('clip-rule'), 'nonzero', 'clip-rule: getPropertyValue matches accessor');
  s.clipRule = 'evenodd';
  assertEq(s.clipRule, 'evenodd', 'clip-rule: overwrite with second value');
  s.removeProperty('clip-rule');
  assertEq(s.clipRule, '', 'clip-rule: removeProperty clears value');
  s.setProperty('clip-rule', 'inherit');
  assertEq(s.getPropertyValue('clip-rule'), 'inherit', 'clip-rule: accepts inherit');
  s.clipRule = '';
  assertEq(s.clipRule, '', 'clip-rule: empty string removes');
  s.clipRule = 'nonzero';
  s.clipRule = 'definitely-not-a-valid-value-xyz';
  assertEq(s.clipRule, 'nonzero', 'clip-rule: rejects invalid keyword');
}

// --- color-interpolation ---
{
  const s = fresh();
  s.colorInterpolation = 'auto';
  assertEq(s.colorInterpolation, 'auto', 'color-interpolation: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('color-interpolation'), 'auto', 'color-interpolation: getPropertyValue matches accessor');
  s.colorInterpolation = 'srgb';
  assertEq(s.colorInterpolation, 'srgb', 'color-interpolation: overwrite with second value');
  s.removeProperty('color-interpolation');
  assertEq(s.colorInterpolation, '', 'color-interpolation: removeProperty clears value');
  s.setProperty('color-interpolation', 'inherit');
  assertEq(s.getPropertyValue('color-interpolation'), 'inherit', 'color-interpolation: accepts inherit');
  s.colorInterpolation = '';
  assertEq(s.colorInterpolation, '', 'color-interpolation: empty string removes');
  s.colorInterpolation = 'auto';
  s.colorInterpolation = 'definitely-not-a-valid-value-xyz';
  assertEq(s.colorInterpolation, 'auto', 'color-interpolation: rejects invalid keyword');
}

// --- color-interpolation-filters ---
{
  const s = fresh();
  s.colorInterpolationFilters = 'auto';
  assertEq(s.colorInterpolationFilters, 'auto', 'color-interpolation-filters: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('color-interpolation-filters'), 'auto', 'color-interpolation-filters: getPropertyValue matches accessor');
  s.colorInterpolationFilters = 'srgb';
  assertEq(s.colorInterpolationFilters, 'srgb', 'color-interpolation-filters: overwrite with second value');
  s.removeProperty('color-interpolation-filters');
  assertEq(s.colorInterpolationFilters, '', 'color-interpolation-filters: removeProperty clears value');
  s.setProperty('color-interpolation-filters', 'inherit');
  assertEq(s.getPropertyValue('color-interpolation-filters'), 'inherit', 'color-interpolation-filters: accepts inherit');
  s.colorInterpolationFilters = '';
  assertEq(s.colorInterpolationFilters, '', 'color-interpolation-filters: empty string removes');
  s.colorInterpolationFilters = 'auto';
  s.colorInterpolationFilters = 'definitely-not-a-valid-value-xyz';
  assertEq(s.colorInterpolationFilters, 'auto', 'color-interpolation-filters: rejects invalid keyword');
}

// --- color-rendering ---
{
  const s = fresh();
  s.colorRendering = 'auto';
  assertEq(s.colorRendering, 'auto', 'color-rendering: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('color-rendering'), 'auto', 'color-rendering: getPropertyValue matches accessor');
  s.colorRendering = 'optimizespeed';
  assertEq(s.colorRendering, 'optimizespeed', 'color-rendering: overwrite with second value');
  s.removeProperty('color-rendering');
  assertEq(s.colorRendering, '', 'color-rendering: removeProperty clears value');
  s.setProperty('color-rendering', 'inherit');
  assertEq(s.getPropertyValue('color-rendering'), 'inherit', 'color-rendering: accepts inherit');
  s.colorRendering = '';
  assertEq(s.colorRendering, '', 'color-rendering: empty string removes');
  s.colorRendering = 'auto';
  s.colorRendering = 'definitely-not-a-valid-value-xyz';
  assertEq(s.colorRendering, 'auto', 'color-rendering: rejects invalid keyword');
}

// --- color-scheme ---
{
  const s = fresh();
  s.colorScheme = 'blue';
  assertEq(s.colorScheme, 'blue', 'color-scheme: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('color-scheme'), 'blue', 'color-scheme: getPropertyValue matches accessor');
  s.colorScheme = 'inherit';
  assertEq(s.colorScheme, 'inherit', 'color-scheme: overwrite with second value');
  s.removeProperty('color-scheme');
  assertEq(s.colorScheme, '', 'color-scheme: removeProperty clears value');
  s.setProperty('color-scheme', 'inherit');
  assertEq(s.getPropertyValue('color-scheme'), 'inherit', 'color-scheme: accepts inherit');
  s.colorScheme = '';
  assertEq(s.colorScheme, '', 'color-scheme: empty string removes');
}

// --- column-fill ---
{
  const s = fresh();
  s.columnFill = 'balance';
  assertEq(s.columnFill, 'balance', 'column-fill: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('column-fill'), 'balance', 'column-fill: getPropertyValue matches accessor');
  s.columnFill = 'auto';
  assertEq(s.columnFill, 'auto', 'column-fill: overwrite with second value');
  s.removeProperty('column-fill');
  assertEq(s.columnFill, '', 'column-fill: removeProperty clears value');
  s.setProperty('column-fill', 'inherit');
  assertEq(s.getPropertyValue('column-fill'), 'inherit', 'column-fill: accepts inherit');
  s.columnFill = '';
  assertEq(s.columnFill, '', 'column-fill: empty string removes');
  s.columnFill = 'balance';
  s.columnFill = 'definitely-not-a-valid-value-xyz';
  assertEq(s.columnFill, 'balance', 'column-fill: rejects invalid keyword');
}

// --- contain ---
{
  const s = fresh();
  s.contain = 'none';
  assertEq(s.contain, 'none', 'contain: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('contain'), 'none', 'contain: getPropertyValue matches accessor');
  s.contain = 'strict';
  assertEq(s.contain, 'strict', 'contain: overwrite with second value');
  s.removeProperty('contain');
  assertEq(s.contain, '', 'contain: removeProperty clears value');
  s.setProperty('contain', 'inherit');
  assertEq(s.getPropertyValue('contain'), 'inherit', 'contain: accepts inherit');
  s.contain = '';
  assertEq(s.contain, '', 'contain: empty string removes');
  s.contain = 'none';
  s.contain = 'definitely-not-a-valid-value-xyz';
  assertEq(s.contain, 'none', 'contain: rejects invalid keyword');
}

// --- contain-intrinsic-width ---
{
  const s = fresh();
  s.containIntrinsicWidth = 'none';
  assertEq(s.containIntrinsicWidth, 'none', 'contain-intrinsic-width: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('contain-intrinsic-width'), 'none', 'contain-intrinsic-width: getPropertyValue matches accessor');
  s.containIntrinsicWidth = 'inherit';
  assertEq(s.containIntrinsicWidth, 'inherit', 'contain-intrinsic-width: overwrite with second value');
  s.removeProperty('contain-intrinsic-width');
  assertEq(s.containIntrinsicWidth, '', 'contain-intrinsic-width: removeProperty clears value');
  s.setProperty('contain-intrinsic-width', 'inherit');
  assertEq(s.getPropertyValue('contain-intrinsic-width'), 'inherit', 'contain-intrinsic-width: accepts inherit');
  s.containIntrinsicWidth = '';
  assertEq(s.containIntrinsicWidth, '', 'contain-intrinsic-width: empty string removes');
  s.containIntrinsicWidth = 'none';
  s.containIntrinsicWidth = 'definitely-not-a-valid-value-xyz';
  assertEq(s.containIntrinsicWidth, 'none', 'contain-intrinsic-width: rejects invalid keyword');
}

// --- contain-intrinsic-height ---
{
  const s = fresh();
  s.containIntrinsicHeight = 'none';
  assertEq(s.containIntrinsicHeight, 'none', 'contain-intrinsic-height: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('contain-intrinsic-height'), 'none', 'contain-intrinsic-height: getPropertyValue matches accessor');
  s.containIntrinsicHeight = 'inherit';
  assertEq(s.containIntrinsicHeight, 'inherit', 'contain-intrinsic-height: overwrite with second value');
  s.removeProperty('contain-intrinsic-height');
  assertEq(s.containIntrinsicHeight, '', 'contain-intrinsic-height: removeProperty clears value');
  s.setProperty('contain-intrinsic-height', 'inherit');
  assertEq(s.getPropertyValue('contain-intrinsic-height'), 'inherit', 'contain-intrinsic-height: accepts inherit');
  s.containIntrinsicHeight = '';
  assertEq(s.containIntrinsicHeight, '', 'contain-intrinsic-height: empty string removes');
  s.containIntrinsicHeight = 'none';
  s.containIntrinsicHeight = 'definitely-not-a-valid-value-xyz';
  assertEq(s.containIntrinsicHeight, 'none', 'contain-intrinsic-height: rejects invalid keyword');
}

// --- container-name ---
{
  const s = fresh();
  s.containerName = 'none';
  assertEq(s.containerName, 'none', 'container-name: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('container-name'), 'none', 'container-name: getPropertyValue matches accessor');
  s.containerName = 'inherit';
  assertEq(s.containerName, 'inherit', 'container-name: overwrite with second value');
  s.removeProperty('container-name');
  assertEq(s.containerName, '', 'container-name: removeProperty clears value');
  s.setProperty('container-name', 'inherit');
  assertEq(s.getPropertyValue('container-name'), 'inherit', 'container-name: accepts inherit');
  s.containerName = '';
  assertEq(s.containerName, '', 'container-name: empty string removes');
  s.containerName = 'none';
  s.containerName = 'definitely-not-a-valid-value-xyz';
  assertEq(s.containerName, 'none', 'container-name: rejects invalid keyword');
}

// --- container-type ---
{
  const s = fresh();
  s.containerType = 'normal';
  assertEq(s.containerType, 'normal', 'container-type: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('container-type'), 'normal', 'container-type: getPropertyValue matches accessor');
  s.containerType = 'inline-size';
  assertEq(s.containerType, 'inline-size', 'container-type: overwrite with second value');
  s.removeProperty('container-type');
  assertEq(s.containerType, '', 'container-type: removeProperty clears value');
  s.setProperty('container-type', 'inherit');
  assertEq(s.getPropertyValue('container-type'), 'inherit', 'container-type: accepts inherit');
  s.containerType = '';
  assertEq(s.containerType, '', 'container-type: empty string removes');
  s.containerType = 'normal';
  s.containerType = 'definitely-not-a-valid-value-xyz';
  assertEq(s.containerType, 'normal', 'container-type: rejects invalid keyword');
}

// --- content ---
{
  const s = fresh();
  s.content = '\"hello\"';
  assertEq(s.content, '\"hello\"', 'content: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('content'), '\"hello\"', 'content: getPropertyValue matches accessor');
  s.content = 'inherit';
  assertEq(s.content, 'inherit', 'content: overwrite with second value');
  s.removeProperty('content');
  assertEq(s.content, '', 'content: removeProperty clears value');
  s.setProperty('content', 'inherit');
  assertEq(s.getPropertyValue('content'), 'inherit', 'content: accepts inherit');
  s.content = '';
  assertEq(s.content, '', 'content: empty string removes');
}

// --- corner-bottom-left-shape ---
{
  const s = fresh();
  s.cornerBottomLeftShape = 'notch';
  assertEq(s.cornerBottomLeftShape, 'notch', 'corner-bottom-left-shape: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('corner-bottom-left-shape'), 'notch', 'corner-bottom-left-shape: getPropertyValue matches accessor');
  s.cornerBottomLeftShape = 'scoop';
  assertEq(s.cornerBottomLeftShape, 'scoop', 'corner-bottom-left-shape: overwrite with second value');
  s.removeProperty('corner-bottom-left-shape');
  assertEq(s.cornerBottomLeftShape, '', 'corner-bottom-left-shape: removeProperty clears value');
  s.setProperty('corner-bottom-left-shape', 'inherit');
  assertEq(s.getPropertyValue('corner-bottom-left-shape'), 'inherit', 'corner-bottom-left-shape: accepts inherit');
  s.cornerBottomLeftShape = '';
  assertEq(s.cornerBottomLeftShape, '', 'corner-bottom-left-shape: empty string removes');
  s.cornerBottomLeftShape = 'notch';
  s.cornerBottomLeftShape = 'definitely-not-a-valid-value-xyz';
  assertEq(s.cornerBottomLeftShape, 'notch', 'corner-bottom-left-shape: rejects invalid keyword');
}

// --- corner-bottom-right-shape ---
{
  const s = fresh();
  s.cornerBottomRightShape = 'notch';
  assertEq(s.cornerBottomRightShape, 'notch', 'corner-bottom-right-shape: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('corner-bottom-right-shape'), 'notch', 'corner-bottom-right-shape: getPropertyValue matches accessor');
  s.cornerBottomRightShape = 'scoop';
  assertEq(s.cornerBottomRightShape, 'scoop', 'corner-bottom-right-shape: overwrite with second value');
  s.removeProperty('corner-bottom-right-shape');
  assertEq(s.cornerBottomRightShape, '', 'corner-bottom-right-shape: removeProperty clears value');
  s.setProperty('corner-bottom-right-shape', 'inherit');
  assertEq(s.getPropertyValue('corner-bottom-right-shape'), 'inherit', 'corner-bottom-right-shape: accepts inherit');
  s.cornerBottomRightShape = '';
  assertEq(s.cornerBottomRightShape, '', 'corner-bottom-right-shape: empty string removes');
  s.cornerBottomRightShape = 'notch';
  s.cornerBottomRightShape = 'definitely-not-a-valid-value-xyz';
  assertEq(s.cornerBottomRightShape, 'notch', 'corner-bottom-right-shape: rejects invalid keyword');
}

// --- corner-top-left-shape ---
{
  const s = fresh();
  s.cornerTopLeftShape = 'notch';
  assertEq(s.cornerTopLeftShape, 'notch', 'corner-top-left-shape: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('corner-top-left-shape'), 'notch', 'corner-top-left-shape: getPropertyValue matches accessor');
  s.cornerTopLeftShape = 'scoop';
  assertEq(s.cornerTopLeftShape, 'scoop', 'corner-top-left-shape: overwrite with second value');
  s.removeProperty('corner-top-left-shape');
  assertEq(s.cornerTopLeftShape, '', 'corner-top-left-shape: removeProperty clears value');
  s.setProperty('corner-top-left-shape', 'inherit');
  assertEq(s.getPropertyValue('corner-top-left-shape'), 'inherit', 'corner-top-left-shape: accepts inherit');
  s.cornerTopLeftShape = '';
  assertEq(s.cornerTopLeftShape, '', 'corner-top-left-shape: empty string removes');
  s.cornerTopLeftShape = 'notch';
  s.cornerTopLeftShape = 'definitely-not-a-valid-value-xyz';
  assertEq(s.cornerTopLeftShape, 'notch', 'corner-top-left-shape: rejects invalid keyword');
}

// --- corner-top-right-shape ---
{
  const s = fresh();
  s.cornerTopRightShape = 'notch';
  assertEq(s.cornerTopRightShape, 'notch', 'corner-top-right-shape: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('corner-top-right-shape'), 'notch', 'corner-top-right-shape: getPropertyValue matches accessor');
  s.cornerTopRightShape = 'scoop';
  assertEq(s.cornerTopRightShape, 'scoop', 'corner-top-right-shape: overwrite with second value');
  s.removeProperty('corner-top-right-shape');
  assertEq(s.cornerTopRightShape, '', 'corner-top-right-shape: removeProperty clears value');
  s.setProperty('corner-top-right-shape', 'inherit');
  assertEq(s.getPropertyValue('corner-top-right-shape'), 'inherit', 'corner-top-right-shape: accepts inherit');
  s.cornerTopRightShape = '';
  assertEq(s.cornerTopRightShape, '', 'corner-top-right-shape: empty string removes');
  s.cornerTopRightShape = 'notch';
  s.cornerTopRightShape = 'definitely-not-a-valid-value-xyz';
  assertEq(s.cornerTopRightShape, 'notch', 'corner-top-right-shape: rejects invalid keyword');
}

// --- counter-increment ---
{
  const s = fresh();
  s.counterIncrement = 'none';
  assertEq(s.counterIncrement, 'none', 'counter-increment: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('counter-increment'), 'none', 'counter-increment: getPropertyValue matches accessor');
  s.counterIncrement = 'inherit';
  assertEq(s.counterIncrement, 'inherit', 'counter-increment: overwrite with second value');
  s.removeProperty('counter-increment');
  assertEq(s.counterIncrement, '', 'counter-increment: removeProperty clears value');
  s.setProperty('counter-increment', 'inherit');
  assertEq(s.getPropertyValue('counter-increment'), 'inherit', 'counter-increment: accepts inherit');
  s.counterIncrement = '';
  assertEq(s.counterIncrement, '', 'counter-increment: empty string removes');
  s.counterIncrement = 'none';
  s.counterIncrement = 'definitely-not-a-valid-value-xyz';
  assertEq(s.counterIncrement, 'none', 'counter-increment: rejects invalid keyword');
}

// --- counter-reset ---
{
  const s = fresh();
  s.counterReset = 'none';
  assertEq(s.counterReset, 'none', 'counter-reset: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('counter-reset'), 'none', 'counter-reset: getPropertyValue matches accessor');
  s.counterReset = 'inherit';
  assertEq(s.counterReset, 'inherit', 'counter-reset: overwrite with second value');
  s.removeProperty('counter-reset');
  assertEq(s.counterReset, '', 'counter-reset: removeProperty clears value');
  s.setProperty('counter-reset', 'inherit');
  assertEq(s.getPropertyValue('counter-reset'), 'inherit', 'counter-reset: accepts inherit');
  s.counterReset = '';
  assertEq(s.counterReset, '', 'counter-reset: empty string removes');
  s.counterReset = 'none';
  s.counterReset = 'definitely-not-a-valid-value-xyz';
  assertEq(s.counterReset, 'none', 'counter-reset: rejects invalid keyword');
}

// --- counter-set ---
{
  const s = fresh();
  s.counterSet = 'none';
  assertEq(s.counterSet, 'none', 'counter-set: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('counter-set'), 'none', 'counter-set: getPropertyValue matches accessor');
  s.counterSet = 'inherit';
  assertEq(s.counterSet, 'inherit', 'counter-set: overwrite with second value');
  s.removeProperty('counter-set');
  assertEq(s.counterSet, '', 'counter-set: removeProperty clears value');
  s.setProperty('counter-set', 'inherit');
  assertEq(s.getPropertyValue('counter-set'), 'inherit', 'counter-set: accepts inherit');
  s.counterSet = '';
  assertEq(s.counterSet, '', 'counter-set: empty string removes');
  s.counterSet = 'none';
  s.counterSet = 'definitely-not-a-valid-value-xyz';
  assertEq(s.counterSet, 'none', 'counter-set: rejects invalid keyword');
}

// --- cursor ---
{
  const s = fresh();
  s.cursor = 'auto';
  assertEq(s.cursor, 'auto', 'cursor: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('cursor'), 'auto', 'cursor: getPropertyValue matches accessor');
  s.cursor = 'default';
  assertEq(s.cursor, 'default', 'cursor: overwrite with second value');
  s.removeProperty('cursor');
  assertEq(s.cursor, '', 'cursor: removeProperty clears value');
  s.setProperty('cursor', 'inherit');
  assertEq(s.getPropertyValue('cursor'), 'inherit', 'cursor: accepts inherit');
  s.cursor = '';
  assertEq(s.cursor, '', 'cursor: empty string removes');
  s.cursor = 'auto';
  s.cursor = 'definitely-not-a-valid-value-xyz';
  assertEq(s.cursor, 'auto', 'cursor: rejects invalid keyword');
}

// --- cx ---
{
  const s = fresh();
  s.cx = '10px';
  assertEq(s.cx, '10px', 'cx: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('cx'), '10px', 'cx: getPropertyValue matches accessor');
  s.cx = '20px';
  assertEq(s.cx, '20px', 'cx: overwrite with second value');
  s.removeProperty('cx');
  assertEq(s.cx, '', 'cx: removeProperty clears value');
  s.setProperty('cx', 'inherit');
  assertEq(s.getPropertyValue('cx'), 'inherit', 'cx: accepts inherit');
  s.cx = '';
  assertEq(s.cx, '', 'cx: empty string removes');
}

// --- cy ---
{
  const s = fresh();
  s.cy = '10px';
  assertEq(s.cy, '10px', 'cy: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('cy'), '10px', 'cy: getPropertyValue matches accessor');
  s.cy = '20px';
  assertEq(s.cy, '20px', 'cy: overwrite with second value');
  s.removeProperty('cy');
  assertEq(s.cy, '', 'cy: removeProperty clears value');
  s.setProperty('cy', 'inherit');
  assertEq(s.getPropertyValue('cy'), 'inherit', 'cy: accepts inherit');
  s.cy = '';
  assertEq(s.cy, '', 'cy: empty string removes');
}

// --- d ---
{
  const s = fresh();
  s.d = 'none';
  assertEq(s.d, 'none', 'd: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('d'), 'none', 'd: getPropertyValue matches accessor');
  s.d = 'inherit';
  assertEq(s.d, 'inherit', 'd: overwrite with second value');
  s.removeProperty('d');
  assertEq(s.d, '', 'd: removeProperty clears value');
  s.setProperty('d', 'inherit');
  assertEq(s.getPropertyValue('d'), 'inherit', 'd: accepts inherit');
  s.d = '';
  assertEq(s.d, '', 'd: empty string removes');
  s.d = 'none';
  s.d = 'definitely-not-a-valid-value-xyz';
  assertEq(s.d, 'none', 'd: rejects invalid keyword');
}

// --- display ---
{
  const s = fresh();
  s.display = 'inline';
  assertEq(s.display, 'inline', 'display: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('display'), 'inline', 'display: getPropertyValue matches accessor');
  s.display = 'block';
  assertEq(s.display, 'block', 'display: overwrite with second value');
  s.removeProperty('display');
  assertEq(s.display, '', 'display: removeProperty clears value');
  s.setProperty('display', 'inherit');
  assertEq(s.getPropertyValue('display'), 'inherit', 'display: accepts inherit');
  s.display = '';
  assertEq(s.display, '', 'display: empty string removes');
  s.display = 'inline';
  s.display = 'definitely-not-a-valid-value-xyz';
  assertEq(s.display, 'inline', 'display: rejects invalid keyword');
}

// --- dominant-baseline ---
{
  const s = fresh();
  s.dominantBaseline = 'auto';
  assertEq(s.dominantBaseline, 'auto', 'dominant-baseline: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('dominant-baseline'), 'auto', 'dominant-baseline: getPropertyValue matches accessor');
  s.dominantBaseline = 'alphabetic';
  assertEq(s.dominantBaseline, 'alphabetic', 'dominant-baseline: overwrite with second value');
  s.removeProperty('dominant-baseline');
  assertEq(s.dominantBaseline, '', 'dominant-baseline: removeProperty clears value');
  s.setProperty('dominant-baseline', 'inherit');
  assertEq(s.getPropertyValue('dominant-baseline'), 'inherit', 'dominant-baseline: accepts inherit');
  s.dominantBaseline = '';
  assertEq(s.dominantBaseline, '', 'dominant-baseline: empty string removes');
  s.dominantBaseline = 'auto';
  s.dominantBaseline = 'definitely-not-a-valid-value-xyz';
  assertEq(s.dominantBaseline, 'auto', 'dominant-baseline: rejects invalid keyword');
}

// --- empty-cells ---
{
  const s = fresh();
  s.emptyCells = 'show';
  assertEq(s.emptyCells, 'show', 'empty-cells: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('empty-cells'), 'show', 'empty-cells: getPropertyValue matches accessor');
  s.emptyCells = 'hide';
  assertEq(s.emptyCells, 'hide', 'empty-cells: overwrite with second value');
  s.removeProperty('empty-cells');
  assertEq(s.emptyCells, '', 'empty-cells: removeProperty clears value');
  s.setProperty('empty-cells', 'inherit');
  assertEq(s.getPropertyValue('empty-cells'), 'inherit', 'empty-cells: accepts inherit');
  s.emptyCells = '';
  assertEq(s.emptyCells, '', 'empty-cells: empty string removes');
  s.emptyCells = 'show';
  s.emptyCells = 'definitely-not-a-valid-value-xyz';
  assertEq(s.emptyCells, 'show', 'empty-cells: rejects invalid keyword');
}

// --- fill ---
{
  const s = fresh();
  s.fill = 'red';
  assertEq(s.fill, 'red', 'fill: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('fill'), 'red', 'fill: getPropertyValue matches accessor');
  s.fill = 'blue';
  assertEq(s.fill, 'blue', 'fill: overwrite with second value');
  s.removeProperty('fill');
  assertEq(s.fill, '', 'fill: removeProperty clears value');
  s.setProperty('fill', 'inherit');
  assertEq(s.getPropertyValue('fill'), 'inherit', 'fill: accepts inherit');
  s.fill = '';
  assertEq(s.fill, '', 'fill: empty string removes');
}

// --- fill-opacity ---
{
  const s = fresh();
  s.fillOpacity = '1';
  assertEq(s.fillOpacity, '1', 'fill-opacity: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('fill-opacity'), '1', 'fill-opacity: getPropertyValue matches accessor');
  s.fillOpacity = '2';
  assertEq(s.fillOpacity, '2', 'fill-opacity: overwrite with second value');
  s.removeProperty('fill-opacity');
  assertEq(s.fillOpacity, '', 'fill-opacity: removeProperty clears value');
  s.setProperty('fill-opacity', 'inherit');
  assertEq(s.getPropertyValue('fill-opacity'), 'inherit', 'fill-opacity: accepts inherit');
  s.fillOpacity = '';
  assertEq(s.fillOpacity, '', 'fill-opacity: empty string removes');
}

// --- fill-rule ---
{
  const s = fresh();
  s.fillRule = 'nonzero';
  assertEq(s.fillRule, 'nonzero', 'fill-rule: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('fill-rule'), 'nonzero', 'fill-rule: getPropertyValue matches accessor');
  s.fillRule = 'evenodd';
  assertEq(s.fillRule, 'evenodd', 'fill-rule: overwrite with second value');
  s.removeProperty('fill-rule');
  assertEq(s.fillRule, '', 'fill-rule: removeProperty clears value');
  s.setProperty('fill-rule', 'inherit');
  assertEq(s.getPropertyValue('fill-rule'), 'inherit', 'fill-rule: accepts inherit');
  s.fillRule = '';
  assertEq(s.fillRule, '', 'fill-rule: empty string removes');
  s.fillRule = 'nonzero';
  s.fillRule = 'definitely-not-a-valid-value-xyz';
  assertEq(s.fillRule, 'nonzero', 'fill-rule: rejects invalid keyword');
}

// --- filter ---
{
  const s = fresh();
  s.filter = 'none';
  assertEq(s.filter, 'none', 'filter: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('filter'), 'none', 'filter: getPropertyValue matches accessor');
  s.filter = 'inherit';
  assertEq(s.filter, 'inherit', 'filter: overwrite with second value');
  s.removeProperty('filter');
  assertEq(s.filter, '', 'filter: removeProperty clears value');
  s.setProperty('filter', 'inherit');
  assertEq(s.getPropertyValue('filter'), 'inherit', 'filter: accepts inherit');
  s.filter = '';
  assertEq(s.filter, '', 'filter: empty string removes');
  s.filter = 'none';
  s.filter = 'definitely-not-a-valid-value-xyz';
  assertEq(s.filter, 'none', 'filter: rejects invalid keyword');
}

// --- flex-basis ---
{
  const s = fresh();
  s.flexBasis = '10px';
  assertEq(s.flexBasis, '10px', 'flex-basis: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('flex-basis'), '10px', 'flex-basis: getPropertyValue matches accessor');
  s.flexBasis = '20px';
  assertEq(s.flexBasis, '20px', 'flex-basis: overwrite with second value');
  s.removeProperty('flex-basis');
  assertEq(s.flexBasis, '', 'flex-basis: removeProperty clears value');
  s.setProperty('flex-basis', 'inherit');
  assertEq(s.getPropertyValue('flex-basis'), 'inherit', 'flex-basis: accepts inherit');
  s.flexBasis = '';
  assertEq(s.flexBasis, '', 'flex-basis: empty string removes');
}

// --- flex-direction ---
{
  const s = fresh();
  s.flexDirection = 'row';
  assertEq(s.flexDirection, 'row', 'flex-direction: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('flex-direction'), 'row', 'flex-direction: getPropertyValue matches accessor');
  s.flexDirection = 'row-reverse';
  assertEq(s.flexDirection, 'row-reverse', 'flex-direction: overwrite with second value');
  s.removeProperty('flex-direction');
  assertEq(s.flexDirection, '', 'flex-direction: removeProperty clears value');
  s.setProperty('flex-direction', 'inherit');
  assertEq(s.getPropertyValue('flex-direction'), 'inherit', 'flex-direction: accepts inherit');
  s.flexDirection = '';
  assertEq(s.flexDirection, '', 'flex-direction: empty string removes');
  s.flexDirection = 'row';
  s.flexDirection = 'definitely-not-a-valid-value-xyz';
  assertEq(s.flexDirection, 'row', 'flex-direction: rejects invalid keyword');
}

// --- flex-grow ---
{
  const s = fresh();
  s.flexGrow = '1';
  assertEq(s.flexGrow, '1', 'flex-grow: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('flex-grow'), '1', 'flex-grow: getPropertyValue matches accessor');
  s.flexGrow = '2';
  assertEq(s.flexGrow, '2', 'flex-grow: overwrite with second value');
  s.removeProperty('flex-grow');
  assertEq(s.flexGrow, '', 'flex-grow: removeProperty clears value');
  s.setProperty('flex-grow', 'inherit');
  assertEq(s.getPropertyValue('flex-grow'), 'inherit', 'flex-grow: accepts inherit');
  s.flexGrow = '';
  assertEq(s.flexGrow, '', 'flex-grow: empty string removes');
}

// --- flex-shrink ---
{
  const s = fresh();
  s.flexShrink = '1';
  assertEq(s.flexShrink, '1', 'flex-shrink: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('flex-shrink'), '1', 'flex-shrink: getPropertyValue matches accessor');
  s.flexShrink = '2';
  assertEq(s.flexShrink, '2', 'flex-shrink: overwrite with second value');
  s.removeProperty('flex-shrink');
  assertEq(s.flexShrink, '', 'flex-shrink: removeProperty clears value');
  s.setProperty('flex-shrink', 'inherit');
  assertEq(s.getPropertyValue('flex-shrink'), 'inherit', 'flex-shrink: accepts inherit');
  s.flexShrink = '';
  assertEq(s.flexShrink, '', 'flex-shrink: empty string removes');
}

// --- flex-wrap ---
{
  const s = fresh();
  s.flexWrap = 'nowrap';
  assertEq(s.flexWrap, 'nowrap', 'flex-wrap: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('flex-wrap'), 'nowrap', 'flex-wrap: getPropertyValue matches accessor');
  s.flexWrap = 'wrap';
  assertEq(s.flexWrap, 'wrap', 'flex-wrap: overwrite with second value');
  s.removeProperty('flex-wrap');
  assertEq(s.flexWrap, '', 'flex-wrap: removeProperty clears value');
  s.setProperty('flex-wrap', 'inherit');
  assertEq(s.getPropertyValue('flex-wrap'), 'inherit', 'flex-wrap: accepts inherit');
  s.flexWrap = '';
  assertEq(s.flexWrap, '', 'flex-wrap: empty string removes');
  s.flexWrap = 'nowrap';
  s.flexWrap = 'definitely-not-a-valid-value-xyz';
  assertEq(s.flexWrap, 'nowrap', 'flex-wrap: rejects invalid keyword');
}

// --- float ---
{
  const s = fresh();
  s.cssFloat = 'none';
  assertEq(s.cssFloat, 'none', 'float: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('float'), 'none', 'float: getPropertyValue matches accessor');
  s.cssFloat = 'left';
  assertEq(s.cssFloat, 'left', 'float: overwrite with second value');
  s.removeProperty('float');
  assertEq(s.cssFloat, '', 'float: removeProperty clears value');
  s.setProperty('float', 'inherit');
  assertEq(s.getPropertyValue('float'), 'inherit', 'float: accepts inherit');
  s.cssFloat = '';
  assertEq(s.cssFloat, '', 'float: empty string removes');
  s.cssFloat = 'none';
  s.cssFloat = 'definitely-not-a-valid-value-xyz';
  assertEq(s.cssFloat, 'none', 'float: rejects invalid keyword');
}

// --- flood-color ---
{
  const s = fresh();
  s.floodColor = 'red';
  assertEq(s.floodColor, 'red', 'flood-color: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('flood-color'), 'red', 'flood-color: getPropertyValue matches accessor');
  s.floodColor = 'blue';
  assertEq(s.floodColor, 'blue', 'flood-color: overwrite with second value');
  s.removeProperty('flood-color');
  assertEq(s.floodColor, '', 'flood-color: removeProperty clears value');
  s.setProperty('flood-color', 'inherit');
  assertEq(s.getPropertyValue('flood-color'), 'inherit', 'flood-color: accepts inherit');
  s.floodColor = '';
  assertEq(s.floodColor, '', 'flood-color: empty string removes');
}

// --- flood-opacity ---
{
  const s = fresh();
  s.floodOpacity = '1';
  assertEq(s.floodOpacity, '1', 'flood-opacity: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('flood-opacity'), '1', 'flood-opacity: getPropertyValue matches accessor');
  s.floodOpacity = '2';
  assertEq(s.floodOpacity, '2', 'flood-opacity: overwrite with second value');
  s.removeProperty('flood-opacity');
  assertEq(s.floodOpacity, '', 'flood-opacity: removeProperty clears value');
  s.setProperty('flood-opacity', 'inherit');
  assertEq(s.getPropertyValue('flood-opacity'), 'inherit', 'flood-opacity: accepts inherit');
  s.floodOpacity = '';
  assertEq(s.floodOpacity, '', 'flood-opacity: empty string removes');
}

// --- flow-tolerance ---
{
  const s = fresh();
  s.flowTolerance = 'normal';
  assertEq(s.flowTolerance, 'normal', 'flow-tolerance: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('flow-tolerance'), 'normal', 'flow-tolerance: getPropertyValue matches accessor');
  s.flowTolerance = 'infinite';
  assertEq(s.flowTolerance, 'infinite', 'flow-tolerance: overwrite with second value');
  s.removeProperty('flow-tolerance');
  assertEq(s.flowTolerance, '', 'flow-tolerance: removeProperty clears value');
  s.setProperty('flow-tolerance', 'inherit');
  assertEq(s.getPropertyValue('flow-tolerance'), 'inherit', 'flow-tolerance: accepts inherit');
  s.flowTolerance = '';
  assertEq(s.flowTolerance, '', 'flow-tolerance: empty string removes');
}

// --- frame-sizing ---
{
  const s = fresh();
  s.frameSizing = 'auto';
  assertEq(s.frameSizing, 'auto', 'frame-sizing: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('frame-sizing'), 'auto', 'frame-sizing: getPropertyValue matches accessor');
  s.frameSizing = 'content-width';
  assertEq(s.frameSizing, 'content-width', 'frame-sizing: overwrite with second value');
  s.removeProperty('frame-sizing');
  assertEq(s.frameSizing, '', 'frame-sizing: removeProperty clears value');
  s.setProperty('frame-sizing', 'inherit');
  assertEq(s.getPropertyValue('frame-sizing'), 'inherit', 'frame-sizing: accepts inherit');
  s.frameSizing = '';
  assertEq(s.frameSizing, '', 'frame-sizing: empty string removes');
  s.frameSizing = 'auto';
  s.frameSizing = 'definitely-not-a-valid-value-xyz';
  assertEq(s.frameSizing, 'auto', 'frame-sizing: rejects invalid keyword');
}

// --- grid-auto-columns ---
{
  const s = fresh();
  s.gridAutoColumns = 'auto';
  assertEq(s.gridAutoColumns, 'auto', 'grid-auto-columns: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('grid-auto-columns'), 'auto', 'grid-auto-columns: getPropertyValue matches accessor');
  s.gridAutoColumns = 'min-content';
  assertEq(s.gridAutoColumns, 'min-content', 'grid-auto-columns: overwrite with second value');
  s.removeProperty('grid-auto-columns');
  assertEq(s.gridAutoColumns, '', 'grid-auto-columns: removeProperty clears value');
  s.setProperty('grid-auto-columns', 'inherit');
  assertEq(s.getPropertyValue('grid-auto-columns'), 'inherit', 'grid-auto-columns: accepts inherit');
  s.gridAutoColumns = '';
  assertEq(s.gridAutoColumns, '', 'grid-auto-columns: empty string removes');
}

// --- grid-auto-flow ---
{
  const s = fresh();
  s.gridAutoFlow = 'row';
  assertEq(s.gridAutoFlow, 'row', 'grid-auto-flow: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('grid-auto-flow'), 'row', 'grid-auto-flow: getPropertyValue matches accessor');
  s.gridAutoFlow = 'column';
  assertEq(s.gridAutoFlow, 'column', 'grid-auto-flow: overwrite with second value');
  s.removeProperty('grid-auto-flow');
  assertEq(s.gridAutoFlow, '', 'grid-auto-flow: removeProperty clears value');
  s.setProperty('grid-auto-flow', 'inherit');
  assertEq(s.getPropertyValue('grid-auto-flow'), 'inherit', 'grid-auto-flow: accepts inherit');
  s.gridAutoFlow = '';
  assertEq(s.gridAutoFlow, '', 'grid-auto-flow: empty string removes');
  s.gridAutoFlow = 'row';
  s.gridAutoFlow = 'definitely-not-a-valid-value-xyz';
  assertEq(s.gridAutoFlow, 'row', 'grid-auto-flow: rejects invalid keyword');
}

// --- grid-auto-rows ---
{
  const s = fresh();
  s.gridAutoRows = 'auto';
  assertEq(s.gridAutoRows, 'auto', 'grid-auto-rows: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('grid-auto-rows'), 'auto', 'grid-auto-rows: getPropertyValue matches accessor');
  s.gridAutoRows = 'min-content';
  assertEq(s.gridAutoRows, 'min-content', 'grid-auto-rows: overwrite with second value');
  s.removeProperty('grid-auto-rows');
  assertEq(s.gridAutoRows, '', 'grid-auto-rows: removeProperty clears value');
  s.setProperty('grid-auto-rows', 'inherit');
  assertEq(s.getPropertyValue('grid-auto-rows'), 'inherit', 'grid-auto-rows: accepts inherit');
  s.gridAutoRows = '';
  assertEq(s.gridAutoRows, '', 'grid-auto-rows: empty string removes');
}

// --- grid-column-end ---
{
  const s = fresh();
  s.gridColumnEnd = 'auto';
  assertEq(s.gridColumnEnd, 'auto', 'grid-column-end: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('grid-column-end'), 'auto', 'grid-column-end: getPropertyValue matches accessor');
  s.gridColumnEnd = 'inherit';
  assertEq(s.gridColumnEnd, 'inherit', 'grid-column-end: overwrite with second value');
  s.removeProperty('grid-column-end');
  assertEq(s.gridColumnEnd, '', 'grid-column-end: removeProperty clears value');
  s.setProperty('grid-column-end', 'inherit');
  assertEq(s.getPropertyValue('grid-column-end'), 'inherit', 'grid-column-end: accepts inherit');
  s.gridColumnEnd = '';
  assertEq(s.gridColumnEnd, '', 'grid-column-end: empty string removes');
  s.gridColumnEnd = 'auto';
  s.gridColumnEnd = 'definitely-not-a-valid-value-xyz';
  assertEq(s.gridColumnEnd, 'auto', 'grid-column-end: rejects invalid keyword');
}

// --- grid-column-start ---
{
  const s = fresh();
  s.gridColumnStart = 'auto';
  assertEq(s.gridColumnStart, 'auto', 'grid-column-start: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('grid-column-start'), 'auto', 'grid-column-start: getPropertyValue matches accessor');
  s.gridColumnStart = 'inherit';
  assertEq(s.gridColumnStart, 'inherit', 'grid-column-start: overwrite with second value');
  s.removeProperty('grid-column-start');
  assertEq(s.gridColumnStart, '', 'grid-column-start: removeProperty clears value');
  s.setProperty('grid-column-start', 'inherit');
  assertEq(s.getPropertyValue('grid-column-start'), 'inherit', 'grid-column-start: accepts inherit');
  s.gridColumnStart = '';
  assertEq(s.gridColumnStart, '', 'grid-column-start: empty string removes');
  s.gridColumnStart = 'auto';
  s.gridColumnStart = 'definitely-not-a-valid-value-xyz';
  assertEq(s.gridColumnStart, 'auto', 'grid-column-start: rejects invalid keyword');
}

// --- grid-lanes-direction ---
{
  const s = fresh();
  s.gridLanesDirection = 'normal';
  assertEq(s.gridLanesDirection, 'normal', 'grid-lanes-direction: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('grid-lanes-direction'), 'normal', 'grid-lanes-direction: getPropertyValue matches accessor');
  s.gridLanesDirection = 'row';
  assertEq(s.gridLanesDirection, 'row', 'grid-lanes-direction: overwrite with second value');
  s.removeProperty('grid-lanes-direction');
  assertEq(s.gridLanesDirection, '', 'grid-lanes-direction: removeProperty clears value');
  s.setProperty('grid-lanes-direction', 'inherit');
  assertEq(s.getPropertyValue('grid-lanes-direction'), 'inherit', 'grid-lanes-direction: accepts inherit');
  s.gridLanesDirection = '';
  assertEq(s.gridLanesDirection, '', 'grid-lanes-direction: empty string removes');
  s.gridLanesDirection = 'normal';
  s.gridLanesDirection = 'definitely-not-a-valid-value-xyz';
  assertEq(s.gridLanesDirection, 'normal', 'grid-lanes-direction: rejects invalid keyword');
}

// --- grid-lanes-pack ---
{
  const s = fresh();
  s.gridLanesPack = 'normal';
  assertEq(s.gridLanesPack, 'normal', 'grid-lanes-pack: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('grid-lanes-pack'), 'normal', 'grid-lanes-pack: getPropertyValue matches accessor');
  s.gridLanesPack = 'dense';
  assertEq(s.gridLanesPack, 'dense', 'grid-lanes-pack: overwrite with second value');
  s.removeProperty('grid-lanes-pack');
  assertEq(s.gridLanesPack, '', 'grid-lanes-pack: removeProperty clears value');
  s.setProperty('grid-lanes-pack', 'inherit');
  assertEq(s.getPropertyValue('grid-lanes-pack'), 'inherit', 'grid-lanes-pack: accepts inherit');
  s.gridLanesPack = '';
  assertEq(s.gridLanesPack, '', 'grid-lanes-pack: empty string removes');
  s.gridLanesPack = 'normal';
  s.gridLanesPack = 'definitely-not-a-valid-value-xyz';
  assertEq(s.gridLanesPack, 'normal', 'grid-lanes-pack: rejects invalid keyword');
}

// --- grid-row-end ---
{
  const s = fresh();
  s.gridRowEnd = 'auto';
  assertEq(s.gridRowEnd, 'auto', 'grid-row-end: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('grid-row-end'), 'auto', 'grid-row-end: getPropertyValue matches accessor');
  s.gridRowEnd = 'inherit';
  assertEq(s.gridRowEnd, 'inherit', 'grid-row-end: overwrite with second value');
  s.removeProperty('grid-row-end');
  assertEq(s.gridRowEnd, '', 'grid-row-end: removeProperty clears value');
  s.setProperty('grid-row-end', 'inherit');
  assertEq(s.getPropertyValue('grid-row-end'), 'inherit', 'grid-row-end: accepts inherit');
  s.gridRowEnd = '';
  assertEq(s.gridRowEnd, '', 'grid-row-end: empty string removes');
  s.gridRowEnd = 'auto';
  s.gridRowEnd = 'definitely-not-a-valid-value-xyz';
  assertEq(s.gridRowEnd, 'auto', 'grid-row-end: rejects invalid keyword');
}

// --- grid-row-start ---
{
  const s = fresh();
  s.gridRowStart = 'auto';
  assertEq(s.gridRowStart, 'auto', 'grid-row-start: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('grid-row-start'), 'auto', 'grid-row-start: getPropertyValue matches accessor');
  s.gridRowStart = 'inherit';
  assertEq(s.gridRowStart, 'inherit', 'grid-row-start: overwrite with second value');
  s.removeProperty('grid-row-start');
  assertEq(s.gridRowStart, '', 'grid-row-start: removeProperty clears value');
  s.setProperty('grid-row-start', 'inherit');
  assertEq(s.getPropertyValue('grid-row-start'), 'inherit', 'grid-row-start: accepts inherit');
  s.gridRowStart = '';
  assertEq(s.gridRowStart, '', 'grid-row-start: empty string removes');
  s.gridRowStart = 'auto';
  s.gridRowStart = 'definitely-not-a-valid-value-xyz';
  assertEq(s.gridRowStart, 'auto', 'grid-row-start: rejects invalid keyword');
}

// --- grid-template-areas ---
{
  const s = fresh();
  s.gridTemplateAreas = 'none';
  assertEq(s.gridTemplateAreas, 'none', 'grid-template-areas: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('grid-template-areas'), 'none', 'grid-template-areas: getPropertyValue matches accessor');
  s.gridTemplateAreas = 'inherit';
  assertEq(s.gridTemplateAreas, 'inherit', 'grid-template-areas: overwrite with second value');
  s.removeProperty('grid-template-areas');
  assertEq(s.gridTemplateAreas, '', 'grid-template-areas: removeProperty clears value');
  s.setProperty('grid-template-areas', 'inherit');
  assertEq(s.getPropertyValue('grid-template-areas'), 'inherit', 'grid-template-areas: accepts inherit');
  s.gridTemplateAreas = '';
  assertEq(s.gridTemplateAreas, '', 'grid-template-areas: empty string removes');
  s.gridTemplateAreas = 'none';
  s.gridTemplateAreas = 'definitely-not-a-valid-value-xyz';
  assertEq(s.gridTemplateAreas, 'none', 'grid-template-areas: rejects invalid keyword');
}

// --- grid-template-columns ---
{
  const s = fresh();
  s.gridTemplateColumns = 'none';
  assertEq(s.gridTemplateColumns, 'none', 'grid-template-columns: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('grid-template-columns'), 'none', 'grid-template-columns: getPropertyValue matches accessor');
  s.gridTemplateColumns = 'inherit';
  assertEq(s.gridTemplateColumns, 'inherit', 'grid-template-columns: overwrite with second value');
  s.removeProperty('grid-template-columns');
  assertEq(s.gridTemplateColumns, '', 'grid-template-columns: removeProperty clears value');
  s.setProperty('grid-template-columns', 'inherit');
  assertEq(s.getPropertyValue('grid-template-columns'), 'inherit', 'grid-template-columns: accepts inherit');
  s.gridTemplateColumns = '';
  assertEq(s.gridTemplateColumns, '', 'grid-template-columns: empty string removes');
  s.gridTemplateColumns = 'none';
  s.gridTemplateColumns = 'definitely-not-a-valid-value-xyz';
  assertEq(s.gridTemplateColumns, 'none', 'grid-template-columns: rejects invalid keyword');
}

// --- grid-template-rows ---
{
  const s = fresh();
  s.gridTemplateRows = 'none';
  assertEq(s.gridTemplateRows, 'none', 'grid-template-rows: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('grid-template-rows'), 'none', 'grid-template-rows: getPropertyValue matches accessor');
  s.gridTemplateRows = 'inherit';
  assertEq(s.gridTemplateRows, 'inherit', 'grid-template-rows: overwrite with second value');
  s.removeProperty('grid-template-rows');
  assertEq(s.gridTemplateRows, '', 'grid-template-rows: removeProperty clears value');
  s.setProperty('grid-template-rows', 'inherit');
  assertEq(s.getPropertyValue('grid-template-rows'), 'inherit', 'grid-template-rows: accepts inherit');
  s.gridTemplateRows = '';
  assertEq(s.gridTemplateRows, '', 'grid-template-rows: empty string removes');
  s.gridTemplateRows = 'none';
  s.gridTemplateRows = 'definitely-not-a-valid-value-xyz';
  assertEq(s.gridTemplateRows, 'none', 'grid-template-rows: rejects invalid keyword');
}

// --- height ---
{
  const s = fresh();
  s.height = '10px';
  assertEq(s.height, '10px', 'height: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('height'), '10px', 'height: getPropertyValue matches accessor');
  s.height = '20px';
  assertEq(s.height, '20px', 'height: overwrite with second value');
  s.removeProperty('height');
  assertEq(s.height, '', 'height: removeProperty clears value');
  s.setProperty('height', 'inherit');
  assertEq(s.getPropertyValue('height'), 'inherit', 'height: accepts inherit');
  s.height = '';
  assertEq(s.height, '', 'height: empty string removes');
}

// --- hyphenate-limit-chars ---
{
  const s = fresh();
  s.hyphenateLimitChars = 'auto';
  assertEq(s.hyphenateLimitChars, 'auto', 'hyphenate-limit-chars: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('hyphenate-limit-chars'), 'auto', 'hyphenate-limit-chars: getPropertyValue matches accessor');
  s.hyphenateLimitChars = 'inherit';
  assertEq(s.hyphenateLimitChars, 'inherit', 'hyphenate-limit-chars: overwrite with second value');
  s.removeProperty('hyphenate-limit-chars');
  assertEq(s.hyphenateLimitChars, '', 'hyphenate-limit-chars: removeProperty clears value');
  s.setProperty('hyphenate-limit-chars', 'inherit');
  assertEq(s.getPropertyValue('hyphenate-limit-chars'), 'inherit', 'hyphenate-limit-chars: accepts inherit');
  s.hyphenateLimitChars = '';
  assertEq(s.hyphenateLimitChars, '', 'hyphenate-limit-chars: empty string removes');
  s.hyphenateLimitChars = 'auto';
  s.hyphenateLimitChars = 'definitely-not-a-valid-value-xyz';
  assertEq(s.hyphenateLimitChars, 'auto', 'hyphenate-limit-chars: rejects invalid keyword');
}

// --- interest-delay-start ---
{
  const s = fresh();
  s.interestDelayStart = '1s';
  assertEq(s.interestDelayStart, '1s', 'interest-delay-start: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('interest-delay-start'), '1s', 'interest-delay-start: getPropertyValue matches accessor');
  s.interestDelayStart = 'inherit';
  assertEq(s.interestDelayStart, 'inherit', 'interest-delay-start: overwrite with second value');
  s.removeProperty('interest-delay-start');
  assertEq(s.interestDelayStart, '', 'interest-delay-start: removeProperty clears value');
  s.setProperty('interest-delay-start', 'inherit');
  assertEq(s.getPropertyValue('interest-delay-start'), 'inherit', 'interest-delay-start: accepts inherit');
  s.interestDelayStart = '';
  assertEq(s.interestDelayStart, '', 'interest-delay-start: empty string removes');
}

// --- interest-delay-end ---
{
  const s = fresh();
  s.interestDelayEnd = '1s';
  assertEq(s.interestDelayEnd, '1s', 'interest-delay-end: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('interest-delay-end'), '1s', 'interest-delay-end: getPropertyValue matches accessor');
  s.interestDelayEnd = 'inherit';
  assertEq(s.interestDelayEnd, 'inherit', 'interest-delay-end: overwrite with second value');
  s.removeProperty('interest-delay-end');
  assertEq(s.interestDelayEnd, '', 'interest-delay-end: removeProperty clears value');
  s.setProperty('interest-delay-end', 'inherit');
  assertEq(s.getPropertyValue('interest-delay-end'), 'inherit', 'interest-delay-end: accepts inherit');
  s.interestDelayEnd = '';
  assertEq(s.interestDelayEnd, '', 'interest-delay-end: empty string removes');
}

// --- hyphens ---
{
  const s = fresh();
  s.hyphens = 'none';
  assertEq(s.hyphens, 'none', 'hyphens: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('hyphens'), 'none', 'hyphens: getPropertyValue matches accessor');
  s.hyphens = 'manual';
  assertEq(s.hyphens, 'manual', 'hyphens: overwrite with second value');
  s.removeProperty('hyphens');
  assertEq(s.hyphens, '', 'hyphens: removeProperty clears value');
  s.setProperty('hyphens', 'inherit');
  assertEq(s.getPropertyValue('hyphens'), 'inherit', 'hyphens: accepts inherit');
  s.hyphens = '';
  assertEq(s.hyphens, '', 'hyphens: empty string removes');
  s.hyphens = 'none';
  s.hyphens = 'definitely-not-a-valid-value-xyz';
  assertEq(s.hyphens, 'none', 'hyphens: rejects invalid keyword');
}

// --- image-animation ---
{
  const s = fresh();
  s.imageAnimation = 'normal';
  assertEq(s.imageAnimation, 'normal', 'image-animation: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('image-animation'), 'normal', 'image-animation: getPropertyValue matches accessor');
  s.imageAnimation = 'running';
  assertEq(s.imageAnimation, 'running', 'image-animation: overwrite with second value');
  s.removeProperty('image-animation');
  assertEq(s.imageAnimation, '', 'image-animation: removeProperty clears value');
  s.setProperty('image-animation', 'inherit');
  assertEq(s.getPropertyValue('image-animation'), 'inherit', 'image-animation: accepts inherit');
  s.imageAnimation = '';
  assertEq(s.imageAnimation, '', 'image-animation: empty string removes');
  s.imageAnimation = 'normal';
  s.imageAnimation = 'definitely-not-a-valid-value-xyz';
  assertEq(s.imageAnimation, 'normal', 'image-animation: rejects invalid keyword');
}

// --- image-rendering ---
{
  const s = fresh();
  s.imageRendering = 'auto';
  assertEq(s.imageRendering, 'auto', 'image-rendering: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('image-rendering'), 'auto', 'image-rendering: getPropertyValue matches accessor');
  s.imageRendering = 'optimizespeed';
  assertEq(s.imageRendering, 'optimizespeed', 'image-rendering: overwrite with second value');
  s.removeProperty('image-rendering');
  assertEq(s.imageRendering, '', 'image-rendering: removeProperty clears value');
  s.setProperty('image-rendering', 'inherit');
  assertEq(s.getPropertyValue('image-rendering'), 'inherit', 'image-rendering: accepts inherit');
  s.imageRendering = '';
  assertEq(s.imageRendering, '', 'image-rendering: empty string removes');
  s.imageRendering = 'auto';
  s.imageRendering = 'definitely-not-a-valid-value-xyz';
  assertEq(s.imageRendering, 'auto', 'image-rendering: rejects invalid keyword');
}

// --- image-orientation ---
{
  const s = fresh();
  s.imageOrientation = 'none';
  assertEq(s.imageOrientation, 'none', 'image-orientation: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('image-orientation'), 'none', 'image-orientation: getPropertyValue matches accessor');
  s.imageOrientation = 'inherit';
  assertEq(s.imageOrientation, 'inherit', 'image-orientation: overwrite with second value');
  s.removeProperty('image-orientation');
  assertEq(s.imageOrientation, '', 'image-orientation: removeProperty clears value');
  s.setProperty('image-orientation', 'inherit');
  assertEq(s.getPropertyValue('image-orientation'), 'inherit', 'image-orientation: accepts inherit');
  s.imageOrientation = '';
  assertEq(s.imageOrientation, '', 'image-orientation: empty string removes');
}

// --- dynamic-range-limit ---
{
  const s = fresh();
  s.dynamicRangeLimit = 'standard';
  assertEq(s.dynamicRangeLimit, 'standard', 'dynamic-range-limit: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('dynamic-range-limit'), 'standard', 'dynamic-range-limit: getPropertyValue matches accessor');
  s.dynamicRangeLimit = 'no-limit';
  assertEq(s.dynamicRangeLimit, 'no-limit', 'dynamic-range-limit: overwrite with second value');
  s.removeProperty('dynamic-range-limit');
  assertEq(s.dynamicRangeLimit, '', 'dynamic-range-limit: removeProperty clears value');
  s.setProperty('dynamic-range-limit', 'inherit');
  assertEq(s.getPropertyValue('dynamic-range-limit'), 'inherit', 'dynamic-range-limit: accepts inherit');
  s.dynamicRangeLimit = '';
  assertEq(s.dynamicRangeLimit, '', 'dynamic-range-limit: empty string removes');
  s.dynamicRangeLimit = 'standard';
  s.dynamicRangeLimit = 'definitely-not-a-valid-value-xyz';
  assertEq(s.dynamicRangeLimit, 'standard', 'dynamic-range-limit: rejects invalid keyword');
}

// --- initial-letter ---
{
  const s = fresh();
  s.initialLetter = 'drop';
  assertEq(s.initialLetter, 'drop', 'initial-letter: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('initial-letter'), 'drop', 'initial-letter: getPropertyValue matches accessor');
  s.initialLetter = 'normal';
  assertEq(s.initialLetter, 'normal', 'initial-letter: overwrite with second value');
  s.removeProperty('initial-letter');
  assertEq(s.initialLetter, '', 'initial-letter: removeProperty clears value');
  s.setProperty('initial-letter', 'inherit');
  assertEq(s.getPropertyValue('initial-letter'), 'inherit', 'initial-letter: accepts inherit');
  s.initialLetter = '';
  assertEq(s.initialLetter, '', 'initial-letter: empty string removes');
  s.initialLetter = 'drop';
  s.initialLetter = 'definitely-not-a-valid-value-xyz';
  assertEq(s.initialLetter, 'drop', 'initial-letter: rejects invalid keyword');
}

// --- interactivity ---
{
  const s = fresh();
  s.interactivity = 'auto';
  assertEq(s.interactivity, 'auto', 'interactivity: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('interactivity'), 'auto', 'interactivity: getPropertyValue matches accessor');
  s.interactivity = 'inert';
  assertEq(s.interactivity, 'inert', 'interactivity: overwrite with second value');
  s.removeProperty('interactivity');
  assertEq(s.interactivity, '', 'interactivity: removeProperty clears value');
  s.setProperty('interactivity', 'inherit');
  assertEq(s.getPropertyValue('interactivity'), 'inherit', 'interactivity: accepts inherit');
  s.interactivity = '';
  assertEq(s.interactivity, '', 'interactivity: empty string removes');
  s.interactivity = 'auto';
  s.interactivity = 'definitely-not-a-valid-value-xyz';
  assertEq(s.interactivity, 'auto', 'interactivity: rejects invalid keyword');
}

// --- interpolate-size ---
{
  const s = fresh();
  s.interpolateSize = 'numeric-only';
  assertEq(s.interpolateSize, 'numeric-only', 'interpolate-size: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('interpolate-size'), 'numeric-only', 'interpolate-size: getPropertyValue matches accessor');
  s.interpolateSize = 'allow-keywords';
  assertEq(s.interpolateSize, 'allow-keywords', 'interpolate-size: overwrite with second value');
  s.removeProperty('interpolate-size');
  assertEq(s.interpolateSize, '', 'interpolate-size: removeProperty clears value');
  s.setProperty('interpolate-size', 'inherit');
  assertEq(s.getPropertyValue('interpolate-size'), 'inherit', 'interpolate-size: accepts inherit');
  s.interpolateSize = '';
  assertEq(s.interpolateSize, '', 'interpolate-size: empty string removes');
  s.interpolateSize = 'numeric-only';
  s.interpolateSize = 'definitely-not-a-valid-value-xyz';
  assertEq(s.interpolateSize, 'numeric-only', 'interpolate-size: rejects invalid keyword');
}

// --- isolation ---
{
  const s = fresh();
  s.isolation = 'auto';
  assertEq(s.isolation, 'auto', 'isolation: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('isolation'), 'auto', 'isolation: getPropertyValue matches accessor');
  s.isolation = 'isolate';
  assertEq(s.isolation, 'isolate', 'isolation: overwrite with second value');
  s.removeProperty('isolation');
  assertEq(s.isolation, '', 'isolation: removeProperty clears value');
  s.setProperty('isolation', 'inherit');
  assertEq(s.getPropertyValue('isolation'), 'inherit', 'isolation: accepts inherit');
  s.isolation = '';
  assertEq(s.isolation, '', 'isolation: empty string removes');
  s.isolation = 'auto';
  s.isolation = 'definitely-not-a-valid-value-xyz';
  assertEq(s.isolation, 'auto', 'isolation: rejects invalid keyword');
}

// --- justify-content ---
{
  const s = fresh();
  s.justifyContent = 'initial';
  assertEq(s.justifyContent, 'initial', 'justify-content: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('justify-content'), 'initial', 'justify-content: getPropertyValue matches accessor');
  s.justifyContent = 'inherit';
  assertEq(s.justifyContent, 'inherit', 'justify-content: overwrite with second value');
  s.removeProperty('justify-content');
  assertEq(s.justifyContent, '', 'justify-content: removeProperty clears value');
  s.setProperty('justify-content', 'inherit');
  assertEq(s.getPropertyValue('justify-content'), 'inherit', 'justify-content: accepts inherit');
  s.justifyContent = '';
  assertEq(s.justifyContent, '', 'justify-content: empty string removes');
}

// --- justify-items ---
{
  const s = fresh();
  s.justifyItems = 'initial';
  assertEq(s.justifyItems, 'initial', 'justify-items: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('justify-items'), 'initial', 'justify-items: getPropertyValue matches accessor');
  s.justifyItems = 'inherit';
  assertEq(s.justifyItems, 'inherit', 'justify-items: overwrite with second value');
  s.removeProperty('justify-items');
  assertEq(s.justifyItems, '', 'justify-items: removeProperty clears value');
  s.setProperty('justify-items', 'inherit');
  assertEq(s.getPropertyValue('justify-items'), 'inherit', 'justify-items: accepts inherit');
  s.justifyItems = '';
  assertEq(s.justifyItems, '', 'justify-items: empty string removes');
}

// --- justify-self ---
{
  const s = fresh();
  s.justifySelf = 'initial';
  assertEq(s.justifySelf, 'initial', 'justify-self: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('justify-self'), 'initial', 'justify-self: getPropertyValue matches accessor');
  s.justifySelf = 'inherit';
  assertEq(s.justifySelf, 'inherit', 'justify-self: overwrite with second value');
  s.removeProperty('justify-self');
  assertEq(s.justifySelf, '', 'justify-self: removeProperty clears value');
  s.setProperty('justify-self', 'inherit');
  assertEq(s.getPropertyValue('justify-self'), 'inherit', 'justify-self: accepts inherit');
  s.justifySelf = '';
  assertEq(s.justifySelf, '', 'justify-self: empty string removes');
}

// --- left ---
{
  const s = fresh();
  s.left = '10px';
  assertEq(s.left, '10px', 'left: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('left'), '10px', 'left: getPropertyValue matches accessor');
  s.left = '20px';
  assertEq(s.left, '20px', 'left: overwrite with second value');
  s.removeProperty('left');
  assertEq(s.left, '', 'left: removeProperty clears value');
  s.setProperty('left', 'inherit');
  assertEq(s.getPropertyValue('left'), 'inherit', 'left: accepts inherit');
  s.left = '';
  assertEq(s.left, '', 'left: empty string removes');
}

// --- letter-spacing ---
{
  const s = fresh();
  s.letterSpacing = '10px';
  assertEq(s.letterSpacing, '10px', 'letter-spacing: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('letter-spacing'), '10px', 'letter-spacing: getPropertyValue matches accessor');
  s.letterSpacing = '20px';
  assertEq(s.letterSpacing, '20px', 'letter-spacing: overwrite with second value');
  s.removeProperty('letter-spacing');
  assertEq(s.letterSpacing, '', 'letter-spacing: removeProperty clears value');
  s.setProperty('letter-spacing', 'inherit');
  assertEq(s.getPropertyValue('letter-spacing'), 'inherit', 'letter-spacing: accepts inherit');
  s.letterSpacing = '';
  assertEq(s.letterSpacing, '', 'letter-spacing: empty string removes');
}

// --- lighting-color ---
{
  const s = fresh();
  s.lightingColor = 'red';
  assertEq(s.lightingColor, 'red', 'lighting-color: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('lighting-color'), 'red', 'lighting-color: getPropertyValue matches accessor');
  s.lightingColor = 'blue';
  assertEq(s.lightingColor, 'blue', 'lighting-color: overwrite with second value');
  s.removeProperty('lighting-color');
  assertEq(s.lightingColor, '', 'lighting-color: removeProperty clears value');
  s.setProperty('lighting-color', 'inherit');
  assertEq(s.getPropertyValue('lighting-color'), 'inherit', 'lighting-color: accepts inherit');
  s.lightingColor = '';
  assertEq(s.lightingColor, '', 'lighting-color: empty string removes');
}

// --- line-height ---
{
  const s = fresh();
  s.lineHeight = '10px';
  assertEq(s.lineHeight, '10px', 'line-height: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('line-height'), '10px', 'line-height: getPropertyValue matches accessor');
  s.lineHeight = '20px';
  assertEq(s.lineHeight, '20px', 'line-height: overwrite with second value');
  s.removeProperty('line-height');
  assertEq(s.lineHeight, '', 'line-height: removeProperty clears value');
  s.setProperty('line-height', 'inherit');
  assertEq(s.getPropertyValue('line-height'), 'inherit', 'line-height: accepts inherit');
  s.lineHeight = '';
  assertEq(s.lineHeight, '', 'line-height: empty string removes');
}

// --- list-style-image ---
{
  const s = fresh();
  s.listStyleImage = 'none';
  assertEq(s.listStyleImage, 'none', 'list-style-image: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('list-style-image'), 'none', 'list-style-image: getPropertyValue matches accessor');
  s.listStyleImage = 'inherit';
  assertEq(s.listStyleImage, 'inherit', 'list-style-image: overwrite with second value');
  s.removeProperty('list-style-image');
  assertEq(s.listStyleImage, '', 'list-style-image: removeProperty clears value');
  s.setProperty('list-style-image', 'inherit');
  assertEq(s.getPropertyValue('list-style-image'), 'inherit', 'list-style-image: accepts inherit');
  s.listStyleImage = '';
  assertEq(s.listStyleImage, '', 'list-style-image: empty string removes');
}

// --- list-style-position ---
{
  const s = fresh();
  s.listStylePosition = 'outside';
  assertEq(s.listStylePosition, 'outside', 'list-style-position: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('list-style-position'), 'outside', 'list-style-position: getPropertyValue matches accessor');
  s.listStylePosition = 'inside';
  assertEq(s.listStylePosition, 'inside', 'list-style-position: overwrite with second value');
  s.removeProperty('list-style-position');
  assertEq(s.listStylePosition, '', 'list-style-position: removeProperty clears value');
  s.setProperty('list-style-position', 'inherit');
  assertEq(s.getPropertyValue('list-style-position'), 'inherit', 'list-style-position: accepts inherit');
  s.listStylePosition = '';
  assertEq(s.listStylePosition, '', 'list-style-position: empty string removes');
  s.listStylePosition = 'outside';
  s.listStylePosition = 'definitely-not-a-valid-value-xyz';
  assertEq(s.listStylePosition, 'outside', 'list-style-position: rejects invalid keyword');
}

// --- list-style-type ---
{
  const s = fresh();
  s.listStyleType = 'disc';
  assertEq(s.listStyleType, 'disc', 'list-style-type: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('list-style-type'), 'disc', 'list-style-type: getPropertyValue matches accessor');
  s.listStyleType = 'circle';
  assertEq(s.listStyleType, 'circle', 'list-style-type: overwrite with second value');
  s.removeProperty('list-style-type');
  assertEq(s.listStyleType, '', 'list-style-type: removeProperty clears value');
  s.setProperty('list-style-type', 'inherit');
  assertEq(s.getPropertyValue('list-style-type'), 'inherit', 'list-style-type: accepts inherit');
  s.listStyleType = '';
  assertEq(s.listStyleType, '', 'list-style-type: empty string removes');
  s.listStyleType = 'disc';
  s.listStyleType = 'definitely-not-a-valid-value-xyz';
  assertEq(s.listStyleType, 'disc', 'list-style-type: rejects invalid keyword');
}

// --- margin-bottom ---
{
  const s = fresh();
  s.marginBottom = '10px';
  assertEq(s.marginBottom, '10px', 'margin-bottom: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('margin-bottom'), '10px', 'margin-bottom: getPropertyValue matches accessor');
  s.marginBottom = '20px';
  assertEq(s.marginBottom, '20px', 'margin-bottom: overwrite with second value');
  s.removeProperty('margin-bottom');
  assertEq(s.marginBottom, '', 'margin-bottom: removeProperty clears value');
  s.setProperty('margin-bottom', 'inherit');
  assertEq(s.getPropertyValue('margin-bottom'), 'inherit', 'margin-bottom: accepts inherit');
  s.marginBottom = '';
  assertEq(s.marginBottom, '', 'margin-bottom: empty string removes');
}

// --- margin-left ---
{
  const s = fresh();
  s.marginLeft = '10px';
  assertEq(s.marginLeft, '10px', 'margin-left: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('margin-left'), '10px', 'margin-left: getPropertyValue matches accessor');
  s.marginLeft = '20px';
  assertEq(s.marginLeft, '20px', 'margin-left: overwrite with second value');
  s.removeProperty('margin-left');
  assertEq(s.marginLeft, '', 'margin-left: removeProperty clears value');
  s.setProperty('margin-left', 'inherit');
  assertEq(s.getPropertyValue('margin-left'), 'inherit', 'margin-left: accepts inherit');
  s.marginLeft = '';
  assertEq(s.marginLeft, '', 'margin-left: empty string removes');
}

// --- margin-right ---
{
  const s = fresh();
  s.marginRight = '10px';
  assertEq(s.marginRight, '10px', 'margin-right: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('margin-right'), '10px', 'margin-right: getPropertyValue matches accessor');
  s.marginRight = '20px';
  assertEq(s.marginRight, '20px', 'margin-right: overwrite with second value');
  s.removeProperty('margin-right');
  assertEq(s.marginRight, '', 'margin-right: removeProperty clears value');
  s.setProperty('margin-right', 'inherit');
  assertEq(s.getPropertyValue('margin-right'), 'inherit', 'margin-right: accepts inherit');
  s.marginRight = '';
  assertEq(s.marginRight, '', 'margin-right: empty string removes');
}

// --- margin-top ---
{
  const s = fresh();
  s.marginTop = '10px';
  assertEq(s.marginTop, '10px', 'margin-top: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('margin-top'), '10px', 'margin-top: getPropertyValue matches accessor');
  s.marginTop = '20px';
  assertEq(s.marginTop, '20px', 'margin-top: overwrite with second value');
  s.removeProperty('margin-top');
  assertEq(s.marginTop, '', 'margin-top: removeProperty clears value');
  s.setProperty('margin-top', 'inherit');
  assertEq(s.getPropertyValue('margin-top'), 'inherit', 'margin-top: accepts inherit');
  s.marginTop = '';
  assertEq(s.marginTop, '', 'margin-top: empty string removes');
}

// --- margin-trim ---
{
  const s = fresh();
  s.marginTrim = 'initial';
  assertEq(s.marginTrim, 'initial', 'margin-trim: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('margin-trim'), 'initial', 'margin-trim: getPropertyValue matches accessor');
  s.marginTrim = 'inherit';
  assertEq(s.marginTrim, 'inherit', 'margin-trim: overwrite with second value');
  s.removeProperty('margin-trim');
  assertEq(s.marginTrim, '', 'margin-trim: removeProperty clears value');
  s.setProperty('margin-trim', 'inherit');
  assertEq(s.getPropertyValue('margin-trim'), 'inherit', 'margin-trim: accepts inherit');
  s.marginTrim = '';
  assertEq(s.marginTrim, '', 'margin-trim: empty string removes');
}

// --- marker-end ---
{
  const s = fresh();
  s.markerEnd = 'none';
  assertEq(s.markerEnd, 'none', 'marker-end: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('marker-end'), 'none', 'marker-end: getPropertyValue matches accessor');
  s.markerEnd = 'inherit';
  assertEq(s.markerEnd, 'inherit', 'marker-end: overwrite with second value');
  s.removeProperty('marker-end');
  assertEq(s.markerEnd, '', 'marker-end: removeProperty clears value');
  s.setProperty('marker-end', 'inherit');
  assertEq(s.getPropertyValue('marker-end'), 'inherit', 'marker-end: accepts inherit');
  s.markerEnd = '';
  assertEq(s.markerEnd, '', 'marker-end: empty string removes');
  s.markerEnd = 'none';
  s.markerEnd = 'definitely-not-a-valid-value-xyz';
  assertEq(s.markerEnd, 'none', 'marker-end: rejects invalid keyword');
}

// --- marker-mid ---
{
  const s = fresh();
  s.markerMid = 'none';
  assertEq(s.markerMid, 'none', 'marker-mid: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('marker-mid'), 'none', 'marker-mid: getPropertyValue matches accessor');
  s.markerMid = 'inherit';
  assertEq(s.markerMid, 'inherit', 'marker-mid: overwrite with second value');
  s.removeProperty('marker-mid');
  assertEq(s.markerMid, '', 'marker-mid: removeProperty clears value');
  s.setProperty('marker-mid', 'inherit');
  assertEq(s.getPropertyValue('marker-mid'), 'inherit', 'marker-mid: accepts inherit');
  s.markerMid = '';
  assertEq(s.markerMid, '', 'marker-mid: empty string removes');
  s.markerMid = 'none';
  s.markerMid = 'definitely-not-a-valid-value-xyz';
  assertEq(s.markerMid, 'none', 'marker-mid: rejects invalid keyword');
}

// --- marker-start ---
{
  const s = fresh();
  s.markerStart = 'none';
  assertEq(s.markerStart, 'none', 'marker-start: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('marker-start'), 'none', 'marker-start: getPropertyValue matches accessor');
  s.markerStart = 'inherit';
  assertEq(s.markerStart, 'inherit', 'marker-start: overwrite with second value');
  s.removeProperty('marker-start');
  assertEq(s.markerStart, '', 'marker-start: removeProperty clears value');
  s.setProperty('marker-start', 'inherit');
  assertEq(s.getPropertyValue('marker-start'), 'inherit', 'marker-start: accepts inherit');
  s.markerStart = '';
  assertEq(s.markerStart, '', 'marker-start: empty string removes');
  s.markerStart = 'none';
  s.markerStart = 'definitely-not-a-valid-value-xyz';
  assertEq(s.markerStart, 'none', 'marker-start: rejects invalid keyword');
}

// --- mask-type ---
{
  const s = fresh();
  s.maskType = 'luminance';
  assertEq(s.maskType, 'luminance', 'mask-type: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('mask-type'), 'luminance', 'mask-type: getPropertyValue matches accessor');
  s.maskType = 'alpha';
  assertEq(s.maskType, 'alpha', 'mask-type: overwrite with second value');
  s.removeProperty('mask-type');
  assertEq(s.maskType, '', 'mask-type: removeProperty clears value');
  s.setProperty('mask-type', 'inherit');
  assertEq(s.getPropertyValue('mask-type'), 'inherit', 'mask-type: accepts inherit');
  s.maskType = '';
  assertEq(s.maskType, '', 'mask-type: empty string removes');
  s.maskType = 'luminance';
  s.maskType = 'definitely-not-a-valid-value-xyz';
  assertEq(s.maskType, 'luminance', 'mask-type: rejects invalid keyword');
}

// --- math-shift ---
{
  const s = fresh();
  s.mathShift = 'normal';
  assertEq(s.mathShift, 'normal', 'math-shift: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('math-shift'), 'normal', 'math-shift: getPropertyValue matches accessor');
  s.mathShift = 'compact';
  assertEq(s.mathShift, 'compact', 'math-shift: overwrite with second value');
  s.removeProperty('math-shift');
  assertEq(s.mathShift, '', 'math-shift: removeProperty clears value');
  s.setProperty('math-shift', 'inherit');
  assertEq(s.getPropertyValue('math-shift'), 'inherit', 'math-shift: accepts inherit');
  s.mathShift = '';
  assertEq(s.mathShift, '', 'math-shift: empty string removes');
  s.mathShift = 'normal';
  s.mathShift = 'definitely-not-a-valid-value-xyz';
  assertEq(s.mathShift, 'normal', 'math-shift: rejects invalid keyword');
}

// --- math-style ---
{
  const s = fresh();
  s.mathStyle = 'normal';
  assertEq(s.mathStyle, 'normal', 'math-style: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('math-style'), 'normal', 'math-style: getPropertyValue matches accessor');
  s.mathStyle = 'compact';
  assertEq(s.mathStyle, 'compact', 'math-style: overwrite with second value');
  s.removeProperty('math-style');
  assertEq(s.mathStyle, '', 'math-style: removeProperty clears value');
  s.setProperty('math-style', 'inherit');
  assertEq(s.getPropertyValue('math-style'), 'inherit', 'math-style: accepts inherit');
  s.mathStyle = '';
  assertEq(s.mathStyle, '', 'math-style: empty string removes');
  s.mathStyle = 'normal';
  s.mathStyle = 'definitely-not-a-valid-value-xyz';
  assertEq(s.mathStyle, 'normal', 'math-style: rejects invalid keyword');
}

// --- max-height ---
{
  const s = fresh();
  s.maxHeight = '10px';
  assertEq(s.maxHeight, '10px', 'max-height: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('max-height'), '10px', 'max-height: getPropertyValue matches accessor');
  s.maxHeight = '20px';
  assertEq(s.maxHeight, '20px', 'max-height: overwrite with second value');
  s.removeProperty('max-height');
  assertEq(s.maxHeight, '', 'max-height: removeProperty clears value');
  s.setProperty('max-height', 'inherit');
  assertEq(s.getPropertyValue('max-height'), 'inherit', 'max-height: accepts inherit');
  s.maxHeight = '';
  assertEq(s.maxHeight, '', 'max-height: empty string removes');
}

// --- max-width ---
{
  const s = fresh();
  s.maxWidth = '10px';
  assertEq(s.maxWidth, '10px', 'max-width: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('max-width'), '10px', 'max-width: getPropertyValue matches accessor');
  s.maxWidth = '20px';
  assertEq(s.maxWidth, '20px', 'max-width: overwrite with second value');
  s.removeProperty('max-width');
  assertEq(s.maxWidth, '', 'max-width: removeProperty clears value');
  s.setProperty('max-width', 'inherit');
  assertEq(s.getPropertyValue('max-width'), 'inherit', 'max-width: accepts inherit');
  s.maxWidth = '';
  assertEq(s.maxWidth, '', 'max-width: empty string removes');
}

// --- min-height ---
{
  const s = fresh();
  s.minHeight = '10px';
  assertEq(s.minHeight, '10px', 'min-height: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('min-height'), '10px', 'min-height: getPropertyValue matches accessor');
  s.minHeight = '20px';
  assertEq(s.minHeight, '20px', 'min-height: overwrite with second value');
  s.removeProperty('min-height');
  assertEq(s.minHeight, '', 'min-height: removeProperty clears value');
  s.setProperty('min-height', 'inherit');
  assertEq(s.getPropertyValue('min-height'), 'inherit', 'min-height: accepts inherit');
  s.minHeight = '';
  assertEq(s.minHeight, '', 'min-height: empty string removes');
}

// --- min-width ---
{
  const s = fresh();
  s.minWidth = '10px';
  assertEq(s.minWidth, '10px', 'min-width: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('min-width'), '10px', 'min-width: getPropertyValue matches accessor');
  s.minWidth = '20px';
  assertEq(s.minWidth, '20px', 'min-width: overwrite with second value');
  s.removeProperty('min-width');
  assertEq(s.minWidth, '', 'min-width: removeProperty clears value');
  s.setProperty('min-width', 'inherit');
  assertEq(s.getPropertyValue('min-width'), 'inherit', 'min-width: accepts inherit');
  s.minWidth = '';
  assertEq(s.minWidth, '', 'min-width: empty string removes');
}

// --- mix-blend-mode ---
{
  const s = fresh();
  s.mixBlendMode = 'normal';
  assertEq(s.mixBlendMode, 'normal', 'mix-blend-mode: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('mix-blend-mode'), 'normal', 'mix-blend-mode: getPropertyValue matches accessor');
  s.mixBlendMode = 'multiply';
  assertEq(s.mixBlendMode, 'multiply', 'mix-blend-mode: overwrite with second value');
  s.removeProperty('mix-blend-mode');
  assertEq(s.mixBlendMode, '', 'mix-blend-mode: removeProperty clears value');
  s.setProperty('mix-blend-mode', 'inherit');
  assertEq(s.getPropertyValue('mix-blend-mode'), 'inherit', 'mix-blend-mode: accepts inherit');
  s.mixBlendMode = '';
  assertEq(s.mixBlendMode, '', 'mix-blend-mode: empty string removes');
  s.mixBlendMode = 'normal';
  s.mixBlendMode = 'definitely-not-a-valid-value-xyz';
  assertEq(s.mixBlendMode, 'normal', 'mix-blend-mode: rejects invalid keyword');
}

// --- object-fit ---
{
  const s = fresh();
  s.objectFit = 'fill';
  assertEq(s.objectFit, 'fill', 'object-fit: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('object-fit'), 'fill', 'object-fit: getPropertyValue matches accessor');
  s.objectFit = 'contain';
  assertEq(s.objectFit, 'contain', 'object-fit: overwrite with second value');
  s.removeProperty('object-fit');
  assertEq(s.objectFit, '', 'object-fit: removeProperty clears value');
  s.setProperty('object-fit', 'inherit');
  assertEq(s.getPropertyValue('object-fit'), 'inherit', 'object-fit: accepts inherit');
  s.objectFit = '';
  assertEq(s.objectFit, '', 'object-fit: empty string removes');
  s.objectFit = 'fill';
  s.objectFit = 'definitely-not-a-valid-value-xyz';
  assertEq(s.objectFit, 'fill', 'object-fit: rejects invalid keyword');
}

// --- object-position ---
{
  const s = fresh();
  s.objectPosition = 'initial';
  assertEq(s.objectPosition, 'initial', 'object-position: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('object-position'), 'initial', 'object-position: getPropertyValue matches accessor');
  s.objectPosition = 'inherit';
  assertEq(s.objectPosition, 'inherit', 'object-position: overwrite with second value');
  s.removeProperty('object-position');
  assertEq(s.objectPosition, '', 'object-position: removeProperty clears value');
  s.setProperty('object-position', 'inherit');
  assertEq(s.getPropertyValue('object-position'), 'inherit', 'object-position: accepts inherit');
  s.objectPosition = '';
  assertEq(s.objectPosition, '', 'object-position: empty string removes');
}

// --- object-view-box ---
{
  const s = fresh();
  s.objectViewBox = 'none';
  assertEq(s.objectViewBox, 'none', 'object-view-box: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('object-view-box'), 'none', 'object-view-box: getPropertyValue matches accessor');
  s.objectViewBox = 'inherit';
  assertEq(s.objectViewBox, 'inherit', 'object-view-box: overwrite with second value');
  s.removeProperty('object-view-box');
  assertEq(s.objectViewBox, '', 'object-view-box: removeProperty clears value');
  s.setProperty('object-view-box', 'inherit');
  assertEq(s.getPropertyValue('object-view-box'), 'inherit', 'object-view-box: accepts inherit');
  s.objectViewBox = '';
  assertEq(s.objectViewBox, '', 'object-view-box: empty string removes');
  s.objectViewBox = 'none';
  s.objectViewBox = 'definitely-not-a-valid-value-xyz';
  assertEq(s.objectViewBox, 'none', 'object-view-box: rejects invalid keyword');
}

// --- offset-anchor ---
{
  const s = fresh();
  s.offsetAnchor = 'auto';
  assertEq(s.offsetAnchor, 'auto', 'offset-anchor: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('offset-anchor'), 'auto', 'offset-anchor: getPropertyValue matches accessor');
  s.offsetAnchor = 'inherit';
  assertEq(s.offsetAnchor, 'inherit', 'offset-anchor: overwrite with second value');
  s.removeProperty('offset-anchor');
  assertEq(s.offsetAnchor, '', 'offset-anchor: removeProperty clears value');
  s.setProperty('offset-anchor', 'inherit');
  assertEq(s.getPropertyValue('offset-anchor'), 'inherit', 'offset-anchor: accepts inherit');
  s.offsetAnchor = '';
  assertEq(s.offsetAnchor, '', 'offset-anchor: empty string removes');
}

// --- offset-distance ---
{
  const s = fresh();
  s.offsetDistance = '10px';
  assertEq(s.offsetDistance, '10px', 'offset-distance: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('offset-distance'), '10px', 'offset-distance: getPropertyValue matches accessor');
  s.offsetDistance = 'inherit';
  assertEq(s.offsetDistance, 'inherit', 'offset-distance: overwrite with second value');
  s.removeProperty('offset-distance');
  assertEq(s.offsetDistance, '', 'offset-distance: removeProperty clears value');
  s.setProperty('offset-distance', 'inherit');
  assertEq(s.getPropertyValue('offset-distance'), 'inherit', 'offset-distance: accepts inherit');
  s.offsetDistance = '';
  assertEq(s.offsetDistance, '', 'offset-distance: empty string removes');
}

// --- offset-path ---
{
  const s = fresh();
  s.offsetPath = 'none';
  assertEq(s.offsetPath, 'none', 'offset-path: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('offset-path'), 'none', 'offset-path: getPropertyValue matches accessor');
  s.offsetPath = 'inherit';
  assertEq(s.offsetPath, 'inherit', 'offset-path: overwrite with second value');
  s.removeProperty('offset-path');
  assertEq(s.offsetPath, '', 'offset-path: removeProperty clears value');
  s.setProperty('offset-path', 'inherit');
  assertEq(s.getPropertyValue('offset-path'), 'inherit', 'offset-path: accepts inherit');
  s.offsetPath = '';
  assertEq(s.offsetPath, '', 'offset-path: empty string removes');
  s.offsetPath = 'none';
  s.offsetPath = 'definitely-not-a-valid-value-xyz';
  assertEq(s.offsetPath, 'none', 'offset-path: rejects invalid keyword');
}

// --- offset-position ---
{
  const s = fresh();
  s.offsetPosition = 'auto';
  assertEq(s.offsetPosition, 'auto', 'offset-position: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('offset-position'), 'auto', 'offset-position: getPropertyValue matches accessor');
  s.offsetPosition = 'normal';
  assertEq(s.offsetPosition, 'normal', 'offset-position: overwrite with second value');
  s.removeProperty('offset-position');
  assertEq(s.offsetPosition, '', 'offset-position: removeProperty clears value');
  s.setProperty('offset-position', 'inherit');
  assertEq(s.getPropertyValue('offset-position'), 'inherit', 'offset-position: accepts inherit');
  s.offsetPosition = '';
  assertEq(s.offsetPosition, '', 'offset-position: empty string removes');
}

// --- offset-rotate ---
{
  const s = fresh();
  s.offsetRotate = 'auto';
  assertEq(s.offsetRotate, 'auto', 'offset-rotate: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('offset-rotate'), 'auto', 'offset-rotate: getPropertyValue matches accessor');
  s.offsetRotate = 'reverse';
  assertEq(s.offsetRotate, 'reverse', 'offset-rotate: overwrite with second value');
  s.removeProperty('offset-rotate');
  assertEq(s.offsetRotate, '', 'offset-rotate: removeProperty clears value');
  s.setProperty('offset-rotate', 'inherit');
  assertEq(s.getPropertyValue('offset-rotate'), 'inherit', 'offset-rotate: accepts inherit');
  s.offsetRotate = '';
  assertEq(s.offsetRotate, '', 'offset-rotate: empty string removes');
}

// --- opacity ---
{
  const s = fresh();
  s.opacity = '1';
  assertEq(s.opacity, '1', 'opacity: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('opacity'), '1', 'opacity: getPropertyValue matches accessor');
  s.opacity = '2';
  assertEq(s.opacity, '2', 'opacity: overwrite with second value');
  s.removeProperty('opacity');
  assertEq(s.opacity, '', 'opacity: removeProperty clears value');
  s.setProperty('opacity', 'inherit');
  assertEq(s.getPropertyValue('opacity'), 'inherit', 'opacity: accepts inherit');
  s.opacity = '';
  assertEq(s.opacity, '', 'opacity: empty string removes');
}

// --- order ---
{
  const s = fresh();
  s.order = '1';
  assertEq(s.order, '1', 'order: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('order'), '1', 'order: getPropertyValue matches accessor');
  s.order = '2';
  assertEq(s.order, '2', 'order: overwrite with second value');
  s.removeProperty('order');
  assertEq(s.order, '', 'order: removeProperty clears value');
  s.setProperty('order', 'inherit');
  assertEq(s.getPropertyValue('order'), 'inherit', 'order: accepts inherit');
  s.order = '';
  assertEq(s.order, '', 'order: empty string removes');
}

// --- origin-trial-test-property ---
{
  const s = fresh();
  s.originTrialTestProperty = 'normal';
  assertEq(s.originTrialTestProperty, 'normal', 'origin-trial-test-property: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('origin-trial-test-property'), 'normal', 'origin-trial-test-property: getPropertyValue matches accessor');
  s.originTrialTestProperty = 'none';
  assertEq(s.originTrialTestProperty, 'none', 'origin-trial-test-property: overwrite with second value');
  s.removeProperty('origin-trial-test-property');
  assertEq(s.originTrialTestProperty, '', 'origin-trial-test-property: removeProperty clears value');
  s.setProperty('origin-trial-test-property', 'inherit');
  assertEq(s.getPropertyValue('origin-trial-test-property'), 'inherit', 'origin-trial-test-property: accepts inherit');
  s.originTrialTestProperty = '';
  assertEq(s.originTrialTestProperty, '', 'origin-trial-test-property: empty string removes');
  s.originTrialTestProperty = 'normal';
  s.originTrialTestProperty = 'definitely-not-a-valid-value-xyz';
  assertEq(s.originTrialTestProperty, 'normal', 'origin-trial-test-property: rejects invalid keyword');
}

// --- orphans ---
{
  const s = fresh();
  s.orphans = '1';
  assertEq(s.orphans, '1', 'orphans: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('orphans'), '1', 'orphans: getPropertyValue matches accessor');
  s.orphans = '2';
  assertEq(s.orphans, '2', 'orphans: overwrite with second value');
  s.removeProperty('orphans');
  assertEq(s.orphans, '', 'orphans: removeProperty clears value');
  s.setProperty('orphans', 'inherit');
  assertEq(s.getPropertyValue('orphans'), 'inherit', 'orphans: accepts inherit');
  s.orphans = '';
  assertEq(s.orphans, '', 'orphans: empty string removes');
}

// --- outline-color ---
{
  const s = fresh();
  s.outlineColor = 'red';
  assertEq(s.outlineColor, 'red', 'outline-color: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('outline-color'), 'red', 'outline-color: getPropertyValue matches accessor');
  s.outlineColor = 'blue';
  assertEq(s.outlineColor, 'blue', 'outline-color: overwrite with second value');
  s.removeProperty('outline-color');
  assertEq(s.outlineColor, '', 'outline-color: removeProperty clears value');
  s.setProperty('outline-color', 'inherit');
  assertEq(s.getPropertyValue('outline-color'), 'inherit', 'outline-color: accepts inherit');
  s.outlineColor = '';
  assertEq(s.outlineColor, '', 'outline-color: empty string removes');
}

// --- outline-offset ---
{
  const s = fresh();
  s.outlineOffset = '10px';
  assertEq(s.outlineOffset, '10px', 'outline-offset: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('outline-offset'), '10px', 'outline-offset: getPropertyValue matches accessor');
  s.outlineOffset = '20px';
  assertEq(s.outlineOffset, '20px', 'outline-offset: overwrite with second value');
  s.removeProperty('outline-offset');
  assertEq(s.outlineOffset, '', 'outline-offset: removeProperty clears value');
  s.setProperty('outline-offset', 'inherit');
  assertEq(s.getPropertyValue('outline-offset'), 'inherit', 'outline-offset: accepts inherit');
  s.outlineOffset = '';
  assertEq(s.outlineOffset, '', 'outline-offset: empty string removes');
}

// --- outline-style ---
{
  const s = fresh();
  s.outlineStyle = 'none';
  assertEq(s.outlineStyle, 'none', 'outline-style: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('outline-style'), 'none', 'outline-style: getPropertyValue matches accessor');
  s.outlineStyle = 'hidden';
  assertEq(s.outlineStyle, 'hidden', 'outline-style: overwrite with second value');
  s.removeProperty('outline-style');
  assertEq(s.outlineStyle, '', 'outline-style: removeProperty clears value');
  s.setProperty('outline-style', 'inherit');
  assertEq(s.getPropertyValue('outline-style'), 'inherit', 'outline-style: accepts inherit');
  s.outlineStyle = '';
  assertEq(s.outlineStyle, '', 'outline-style: empty string removes');
  s.outlineStyle = 'none';
  s.outlineStyle = 'definitely-not-a-valid-value-xyz';
  assertEq(s.outlineStyle, 'none', 'outline-style: rejects invalid keyword');
}

// --- outline-width ---
{
  const s = fresh();
  s.outlineWidth = '10px';
  assertEq(s.outlineWidth, '10px', 'outline-width: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('outline-width'), '10px', 'outline-width: getPropertyValue matches accessor');
  s.outlineWidth = '20px';
  assertEq(s.outlineWidth, '20px', 'outline-width: overwrite with second value');
  s.removeProperty('outline-width');
  assertEq(s.outlineWidth, '', 'outline-width: removeProperty clears value');
  s.setProperty('outline-width', 'inherit');
  assertEq(s.getPropertyValue('outline-width'), 'inherit', 'outline-width: accepts inherit');
  s.outlineWidth = '';
  assertEq(s.outlineWidth, '', 'outline-width: empty string removes');
}

// --- overflow-anchor ---
{
  const s = fresh();
  s.overflowAnchor = 'visible';
  assertEq(s.overflowAnchor, 'visible', 'overflow-anchor: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('overflow-anchor'), 'visible', 'overflow-anchor: getPropertyValue matches accessor');
  s.overflowAnchor = 'none';
  assertEq(s.overflowAnchor, 'none', 'overflow-anchor: overwrite with second value');
  s.removeProperty('overflow-anchor');
  assertEq(s.overflowAnchor, '', 'overflow-anchor: removeProperty clears value');
  s.setProperty('overflow-anchor', 'inherit');
  assertEq(s.getPropertyValue('overflow-anchor'), 'inherit', 'overflow-anchor: accepts inherit');
  s.overflowAnchor = '';
  assertEq(s.overflowAnchor, '', 'overflow-anchor: empty string removes');
  s.overflowAnchor = 'visible';
  s.overflowAnchor = 'definitely-not-a-valid-value-xyz';
  assertEq(s.overflowAnchor, 'visible', 'overflow-anchor: rejects invalid keyword');
}

// --- overflow-wrap ---
{
  const s = fresh();
  s.overflowWrap = 'normal';
  assertEq(s.overflowWrap, 'normal', 'overflow-wrap: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('overflow-wrap'), 'normal', 'overflow-wrap: getPropertyValue matches accessor');
  s.overflowWrap = 'break-word';
  assertEq(s.overflowWrap, 'break-word', 'overflow-wrap: overwrite with second value');
  s.removeProperty('overflow-wrap');
  assertEq(s.overflowWrap, '', 'overflow-wrap: removeProperty clears value');
  s.setProperty('overflow-wrap', 'inherit');
  assertEq(s.getPropertyValue('overflow-wrap'), 'inherit', 'overflow-wrap: accepts inherit');
  s.overflowWrap = '';
  assertEq(s.overflowWrap, '', 'overflow-wrap: empty string removes');
  s.overflowWrap = 'normal';
  s.overflowWrap = 'definitely-not-a-valid-value-xyz';
  assertEq(s.overflowWrap, 'normal', 'overflow-wrap: rejects invalid keyword');
}

// --- overflow-inline ---
{
  const s = fresh();
  s.overflowInline = 'initial';
  assertEq(s.overflowInline, 'initial', 'overflow-inline: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('overflow-inline'), 'initial', 'overflow-inline: getPropertyValue matches accessor');
  s.overflowInline = 'inherit';
  assertEq(s.overflowInline, 'inherit', 'overflow-inline: overwrite with second value');
  s.removeProperty('overflow-inline');
  assertEq(s.overflowInline, '', 'overflow-inline: removeProperty clears value');
  s.setProperty('overflow-inline', 'inherit');
  assertEq(s.getPropertyValue('overflow-inline'), 'inherit', 'overflow-inline: accepts inherit');
  s.overflowInline = '';
  assertEq(s.overflowInline, '', 'overflow-inline: empty string removes');
}

// --- overflow-block ---
{
  const s = fresh();
  s.overflowBlock = 'initial';
  assertEq(s.overflowBlock, 'initial', 'overflow-block: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('overflow-block'), 'initial', 'overflow-block: getPropertyValue matches accessor');
  s.overflowBlock = 'inherit';
  assertEq(s.overflowBlock, 'inherit', 'overflow-block: overwrite with second value');
  s.removeProperty('overflow-block');
  assertEq(s.overflowBlock, '', 'overflow-block: removeProperty clears value');
  s.setProperty('overflow-block', 'inherit');
  assertEq(s.getPropertyValue('overflow-block'), 'inherit', 'overflow-block: accepts inherit');
  s.overflowBlock = '';
  assertEq(s.overflowBlock, '', 'overflow-block: empty string removes');
}

// --- overflow-clip-margin ---
{
  const s = fresh();
  s.overflowClipMargin = 'border-box';
  assertEq(s.overflowClipMargin, 'border-box', 'overflow-clip-margin: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('overflow-clip-margin'), 'border-box', 'overflow-clip-margin: getPropertyValue matches accessor');
  s.overflowClipMargin = 'content-box';
  assertEq(s.overflowClipMargin, 'content-box', 'overflow-clip-margin: overwrite with second value');
  s.removeProperty('overflow-clip-margin');
  assertEq(s.overflowClipMargin, '', 'overflow-clip-margin: removeProperty clears value');
  s.setProperty('overflow-clip-margin', 'inherit');
  assertEq(s.getPropertyValue('overflow-clip-margin'), 'inherit', 'overflow-clip-margin: accepts inherit');
  s.overflowClipMargin = '';
  assertEq(s.overflowClipMargin, '', 'overflow-clip-margin: empty string removes');
  s.overflowClipMargin = 'border-box';
  s.overflowClipMargin = 'definitely-not-a-valid-value-xyz';
  assertEq(s.overflowClipMargin, 'border-box', 'overflow-clip-margin: rejects invalid keyword');
}

// --- overflow-x ---
{
  const s = fresh();
  s.overflowX = 'visible';
  assertEq(s.overflowX, 'visible', 'overflow-x: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('overflow-x'), 'visible', 'overflow-x: getPropertyValue matches accessor');
  s.overflowX = 'hidden';
  assertEq(s.overflowX, 'hidden', 'overflow-x: overwrite with second value');
  s.removeProperty('overflow-x');
  assertEq(s.overflowX, '', 'overflow-x: removeProperty clears value');
  s.setProperty('overflow-x', 'inherit');
  assertEq(s.getPropertyValue('overflow-x'), 'inherit', 'overflow-x: accepts inherit');
  s.overflowX = '';
  assertEq(s.overflowX, '', 'overflow-x: empty string removes');
  s.overflowX = 'visible';
  s.overflowX = 'definitely-not-a-valid-value-xyz';
  assertEq(s.overflowX, 'visible', 'overflow-x: rejects invalid keyword');
}

// --- overflow-y ---
{
  const s = fresh();
  s.overflowY = 'visible';
  assertEq(s.overflowY, 'visible', 'overflow-y: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('overflow-y'), 'visible', 'overflow-y: getPropertyValue matches accessor');
  s.overflowY = 'hidden';
  assertEq(s.overflowY, 'hidden', 'overflow-y: overwrite with second value');
  s.removeProperty('overflow-y');
  assertEq(s.overflowY, '', 'overflow-y: removeProperty clears value');
  s.setProperty('overflow-y', 'inherit');
  assertEq(s.getPropertyValue('overflow-y'), 'inherit', 'overflow-y: accepts inherit');
  s.overflowY = '';
  assertEq(s.overflowY, '', 'overflow-y: empty string removes');
  s.overflowY = 'visible';
  s.overflowY = 'definitely-not-a-valid-value-xyz';
  assertEq(s.overflowY, 'visible', 'overflow-y: rejects invalid keyword');
}

// --- overscroll-behavior-inline ---
{
  const s = fresh();
  s.overscrollBehaviorInline = 'initial';
  assertEq(s.overscrollBehaviorInline, 'initial', 'overscroll-behavior-inline: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('overscroll-behavior-inline'), 'initial', 'overscroll-behavior-inline: getPropertyValue matches accessor');
  s.overscrollBehaviorInline = 'inherit';
  assertEq(s.overscrollBehaviorInline, 'inherit', 'overscroll-behavior-inline: overwrite with second value');
  s.removeProperty('overscroll-behavior-inline');
  assertEq(s.overscrollBehaviorInline, '', 'overscroll-behavior-inline: removeProperty clears value');
  s.setProperty('overscroll-behavior-inline', 'inherit');
  assertEq(s.getPropertyValue('overscroll-behavior-inline'), 'inherit', 'overscroll-behavior-inline: accepts inherit');
  s.overscrollBehaviorInline = '';
  assertEq(s.overscrollBehaviorInline, '', 'overscroll-behavior-inline: empty string removes');
}

// --- overscroll-behavior-block ---
{
  const s = fresh();
  s.overscrollBehaviorBlock = 'initial';
  assertEq(s.overscrollBehaviorBlock, 'initial', 'overscroll-behavior-block: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('overscroll-behavior-block'), 'initial', 'overscroll-behavior-block: getPropertyValue matches accessor');
  s.overscrollBehaviorBlock = 'inherit';
  assertEq(s.overscrollBehaviorBlock, 'inherit', 'overscroll-behavior-block: overwrite with second value');
  s.removeProperty('overscroll-behavior-block');
  assertEq(s.overscrollBehaviorBlock, '', 'overscroll-behavior-block: removeProperty clears value');
  s.setProperty('overscroll-behavior-block', 'inherit');
  assertEq(s.getPropertyValue('overscroll-behavior-block'), 'inherit', 'overscroll-behavior-block: accepts inherit');
  s.overscrollBehaviorBlock = '';
  assertEq(s.overscrollBehaviorBlock, '', 'overscroll-behavior-block: empty string removes');
}

// --- overscroll-behavior-x ---
{
  const s = fresh();
  s.overscrollBehaviorX = 'auto';
  assertEq(s.overscrollBehaviorX, 'auto', 'overscroll-behavior-x: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('overscroll-behavior-x'), 'auto', 'overscroll-behavior-x: getPropertyValue matches accessor');
  s.overscrollBehaviorX = 'contain';
  assertEq(s.overscrollBehaviorX, 'contain', 'overscroll-behavior-x: overwrite with second value');
  s.removeProperty('overscroll-behavior-x');
  assertEq(s.overscrollBehaviorX, '', 'overscroll-behavior-x: removeProperty clears value');
  s.setProperty('overscroll-behavior-x', 'inherit');
  assertEq(s.getPropertyValue('overscroll-behavior-x'), 'inherit', 'overscroll-behavior-x: accepts inherit');
  s.overscrollBehaviorX = '';
  assertEq(s.overscrollBehaviorX, '', 'overscroll-behavior-x: empty string removes');
  s.overscrollBehaviorX = 'auto';
  s.overscrollBehaviorX = 'definitely-not-a-valid-value-xyz';
  assertEq(s.overscrollBehaviorX, 'auto', 'overscroll-behavior-x: rejects invalid keyword');
}

// --- overscroll-behavior-y ---
{
  const s = fresh();
  s.overscrollBehaviorY = 'auto';
  assertEq(s.overscrollBehaviorY, 'auto', 'overscroll-behavior-y: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('overscroll-behavior-y'), 'auto', 'overscroll-behavior-y: getPropertyValue matches accessor');
  s.overscrollBehaviorY = 'contain';
  assertEq(s.overscrollBehaviorY, 'contain', 'overscroll-behavior-y: overwrite with second value');
  s.removeProperty('overscroll-behavior-y');
  assertEq(s.overscrollBehaviorY, '', 'overscroll-behavior-y: removeProperty clears value');
  s.setProperty('overscroll-behavior-y', 'inherit');
  assertEq(s.getPropertyValue('overscroll-behavior-y'), 'inherit', 'overscroll-behavior-y: accepts inherit');
  s.overscrollBehaviorY = '';
  assertEq(s.overscrollBehaviorY, '', 'overscroll-behavior-y: empty string removes');
  s.overscrollBehaviorY = 'auto';
  s.overscrollBehaviorY = 'definitely-not-a-valid-value-xyz';
  assertEq(s.overscrollBehaviorY, 'auto', 'overscroll-behavior-y: rejects invalid keyword');
}

// --- padding-bottom ---
{
  const s = fresh();
  s.paddingBottom = '10px';
  assertEq(s.paddingBottom, '10px', 'padding-bottom: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('padding-bottom'), '10px', 'padding-bottom: getPropertyValue matches accessor');
  s.paddingBottom = '20px';
  assertEq(s.paddingBottom, '20px', 'padding-bottom: overwrite with second value');
  s.removeProperty('padding-bottom');
  assertEq(s.paddingBottom, '', 'padding-bottom: removeProperty clears value');
  s.setProperty('padding-bottom', 'inherit');
  assertEq(s.getPropertyValue('padding-bottom'), 'inherit', 'padding-bottom: accepts inherit');
  s.paddingBottom = '';
  assertEq(s.paddingBottom, '', 'padding-bottom: empty string removes');
}

// --- padding-left ---
{
  const s = fresh();
  s.paddingLeft = '10px';
  assertEq(s.paddingLeft, '10px', 'padding-left: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('padding-left'), '10px', 'padding-left: getPropertyValue matches accessor');
  s.paddingLeft = '20px';
  assertEq(s.paddingLeft, '20px', 'padding-left: overwrite with second value');
  s.removeProperty('padding-left');
  assertEq(s.paddingLeft, '', 'padding-left: removeProperty clears value');
  s.setProperty('padding-left', 'inherit');
  assertEq(s.getPropertyValue('padding-left'), 'inherit', 'padding-left: accepts inherit');
  s.paddingLeft = '';
  assertEq(s.paddingLeft, '', 'padding-left: empty string removes');
}

// --- padding-right ---
{
  const s = fresh();
  s.paddingRight = '10px';
  assertEq(s.paddingRight, '10px', 'padding-right: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('padding-right'), '10px', 'padding-right: getPropertyValue matches accessor');
  s.paddingRight = '20px';
  assertEq(s.paddingRight, '20px', 'padding-right: overwrite with second value');
  s.removeProperty('padding-right');
  assertEq(s.paddingRight, '', 'padding-right: removeProperty clears value');
  s.setProperty('padding-right', 'inherit');
  assertEq(s.getPropertyValue('padding-right'), 'inherit', 'padding-right: accepts inherit');
  s.paddingRight = '';
  assertEq(s.paddingRight, '', 'padding-right: empty string removes');
}

// --- padding-top ---
{
  const s = fresh();
  s.paddingTop = '10px';
  assertEq(s.paddingTop, '10px', 'padding-top: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('padding-top'), '10px', 'padding-top: getPropertyValue matches accessor');
  s.paddingTop = '20px';
  assertEq(s.paddingTop, '20px', 'padding-top: overwrite with second value');
  s.removeProperty('padding-top');
  assertEq(s.paddingTop, '', 'padding-top: removeProperty clears value');
  s.setProperty('padding-top', 'inherit');
  assertEq(s.getPropertyValue('padding-top'), 'inherit', 'padding-top: accepts inherit');
  s.paddingTop = '';
  assertEq(s.paddingTop, '', 'padding-top: empty string removes');
}

// --- page ---
{
  const s = fresh();
  s.page = 'auto';
  assertEq(s.page, 'auto', 'page: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('page'), 'auto', 'page: getPropertyValue matches accessor');
  s.page = 'inherit';
  assertEq(s.page, 'inherit', 'page: overwrite with second value');
  s.removeProperty('page');
  assertEq(s.page, '', 'page: removeProperty clears value');
  s.setProperty('page', 'inherit');
  assertEq(s.getPropertyValue('page'), 'inherit', 'page: accepts inherit');
  s.page = '';
  assertEq(s.page, '', 'page: empty string removes');
  s.page = 'auto';
  s.page = 'definitely-not-a-valid-value-xyz';
  assertEq(s.page, 'auto', 'page: rejects invalid keyword');
}

// --- page-margin-safety ---
{
  const s = fresh();
  s.pageMarginSafety = 'none';
  assertEq(s.pageMarginSafety, 'none', 'page-margin-safety: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('page-margin-safety'), 'none', 'page-margin-safety: getPropertyValue matches accessor');
  s.pageMarginSafety = 'clamp';
  assertEq(s.pageMarginSafety, 'clamp', 'page-margin-safety: overwrite with second value');
  s.removeProperty('page-margin-safety');
  assertEq(s.pageMarginSafety, '', 'page-margin-safety: removeProperty clears value');
  s.setProperty('page-margin-safety', 'inherit');
  assertEq(s.getPropertyValue('page-margin-safety'), 'inherit', 'page-margin-safety: accepts inherit');
  s.pageMarginSafety = '';
  assertEq(s.pageMarginSafety, '', 'page-margin-safety: empty string removes');
  s.pageMarginSafety = 'none';
  s.pageMarginSafety = 'definitely-not-a-valid-value-xyz';
  assertEq(s.pageMarginSafety, 'none', 'page-margin-safety: rejects invalid keyword');
}

// --- page-orientation ---
{
  const s = fresh();
  s.pageOrientation = 'initial';
  assertEq(s.pageOrientation, 'initial', 'page-orientation: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('page-orientation'), 'initial', 'page-orientation: getPropertyValue matches accessor');
  s.pageOrientation = 'inherit';
  assertEq(s.pageOrientation, 'inherit', 'page-orientation: overwrite with second value');
  s.removeProperty('page-orientation');
  assertEq(s.pageOrientation, '', 'page-orientation: removeProperty clears value');
  s.setProperty('page-orientation', 'inherit');
  assertEq(s.getPropertyValue('page-orientation'), 'inherit', 'page-orientation: accepts inherit');
  s.pageOrientation = '';
  assertEq(s.pageOrientation, '', 'page-orientation: empty string removes');
}

// --- paint-order ---
{
  const s = fresh();
  s.paintOrder = 'normal';
  assertEq(s.paintOrder, 'normal', 'paint-order: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('paint-order'), 'normal', 'paint-order: getPropertyValue matches accessor');
  s.paintOrder = 'fill';
  assertEq(s.paintOrder, 'fill', 'paint-order: overwrite with second value');
  s.removeProperty('paint-order');
  assertEq(s.paintOrder, '', 'paint-order: removeProperty clears value');
  s.setProperty('paint-order', 'inherit');
  assertEq(s.getPropertyValue('paint-order'), 'inherit', 'paint-order: accepts inherit');
  s.paintOrder = '';
  assertEq(s.paintOrder, '', 'paint-order: empty string removes');
  s.paintOrder = 'normal';
  s.paintOrder = 'definitely-not-a-valid-value-xyz';
  assertEq(s.paintOrder, 'normal', 'paint-order: rejects invalid keyword');
}

// --- path-length ---
{
  const s = fresh();
  s.pathLength = 'none';
  assertEq(s.pathLength, 'none', 'path-length: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('path-length'), 'none', 'path-length: getPropertyValue matches accessor');
  s.pathLength = 'inherit';
  assertEq(s.pathLength, 'inherit', 'path-length: overwrite with second value');
  s.removeProperty('path-length');
  assertEq(s.pathLength, '', 'path-length: removeProperty clears value');
  s.setProperty('path-length', 'inherit');
  assertEq(s.getPropertyValue('path-length'), 'inherit', 'path-length: accepts inherit');
  s.pathLength = '';
  assertEq(s.pathLength, '', 'path-length: empty string removes');
}

// --- perspective ---
{
  const s = fresh();
  s.perspective = 'none';
  assertEq(s.perspective, 'none', 'perspective: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('perspective'), 'none', 'perspective: getPropertyValue matches accessor');
  s.perspective = 'inherit';
  assertEq(s.perspective, 'inherit', 'perspective: overwrite with second value');
  s.removeProperty('perspective');
  assertEq(s.perspective, '', 'perspective: removeProperty clears value');
  s.setProperty('perspective', 'inherit');
  assertEq(s.getPropertyValue('perspective'), 'inherit', 'perspective: accepts inherit');
  s.perspective = '';
  assertEq(s.perspective, '', 'perspective: empty string removes');
}

// --- perspective-origin ---
{
  const s = fresh();
  s.perspectiveOrigin = 'initial';
  assertEq(s.perspectiveOrigin, 'initial', 'perspective-origin: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('perspective-origin'), 'initial', 'perspective-origin: getPropertyValue matches accessor');
  s.perspectiveOrigin = 'inherit';
  assertEq(s.perspectiveOrigin, 'inherit', 'perspective-origin: overwrite with second value');
  s.removeProperty('perspective-origin');
  assertEq(s.perspectiveOrigin, '', 'perspective-origin: removeProperty clears value');
  s.setProperty('perspective-origin', 'inherit');
  assertEq(s.getPropertyValue('perspective-origin'), 'inherit', 'perspective-origin: accepts inherit');
  s.perspectiveOrigin = '';
  assertEq(s.perspectiveOrigin, '', 'perspective-origin: empty string removes');
}

// --- pointer-events ---
{
  const s = fresh();
  s.pointerEvents = 'none';
  assertEq(s.pointerEvents, 'none', 'pointer-events: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('pointer-events'), 'none', 'pointer-events: getPropertyValue matches accessor');
  s.pointerEvents = 'auto';
  assertEq(s.pointerEvents, 'auto', 'pointer-events: overwrite with second value');
  s.removeProperty('pointer-events');
  assertEq(s.pointerEvents, '', 'pointer-events: removeProperty clears value');
  s.setProperty('pointer-events', 'inherit');
  assertEq(s.getPropertyValue('pointer-events'), 'inherit', 'pointer-events: accepts inherit');
  s.pointerEvents = '';
  assertEq(s.pointerEvents, '', 'pointer-events: empty string removes');
  s.pointerEvents = 'none';
  s.pointerEvents = 'definitely-not-a-valid-value-xyz';
  assertEq(s.pointerEvents, 'none', 'pointer-events: rejects invalid keyword');
}

// --- position ---
{
  const s = fresh();
  s.position = 'static';
  assertEq(s.position, 'static', 'position: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('position'), 'static', 'position: getPropertyValue matches accessor');
  s.position = 'relative';
  assertEq(s.position, 'relative', 'position: overwrite with second value');
  s.removeProperty('position');
  assertEq(s.position, '', 'position: removeProperty clears value');
  s.setProperty('position', 'inherit');
  assertEq(s.getPropertyValue('position'), 'inherit', 'position: accepts inherit');
  s.position = '';
  assertEq(s.position, '', 'position: empty string removes');
  s.position = 'static';
  s.position = 'definitely-not-a-valid-value-xyz';
  assertEq(s.position, 'static', 'position: rejects invalid keyword');
}

// --- position-anchor ---
{
  const s = fresh();
  s.positionAnchor = 'auto';
  assertEq(s.positionAnchor, 'auto', 'position-anchor: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('position-anchor'), 'auto', 'position-anchor: getPropertyValue matches accessor');
  s.positionAnchor = 'none';
  assertEq(s.positionAnchor, 'none', 'position-anchor: overwrite with second value');
  s.removeProperty('position-anchor');
  assertEq(s.positionAnchor, '', 'position-anchor: removeProperty clears value');
  s.setProperty('position-anchor', 'inherit');
  assertEq(s.getPropertyValue('position-anchor'), 'inherit', 'position-anchor: accepts inherit');
  s.positionAnchor = '';
  assertEq(s.positionAnchor, '', 'position-anchor: empty string removes');
  s.positionAnchor = 'auto';
  s.positionAnchor = 'definitely-not-a-valid-value-xyz';
  assertEq(s.positionAnchor, 'auto', 'position-anchor: rejects invalid keyword');
}

// --- position-try-fallbacks ---
{
  const s = fresh();
  s.positionTryFallbacks = 'none';
  assertEq(s.positionTryFallbacks, 'none', 'position-try-fallbacks: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('position-try-fallbacks'), 'none', 'position-try-fallbacks: getPropertyValue matches accessor');
  s.positionTryFallbacks = 'flip-block';
  assertEq(s.positionTryFallbacks, 'flip-block', 'position-try-fallbacks: overwrite with second value');
  s.removeProperty('position-try-fallbacks');
  assertEq(s.positionTryFallbacks, '', 'position-try-fallbacks: removeProperty clears value');
  s.setProperty('position-try-fallbacks', 'inherit');
  assertEq(s.getPropertyValue('position-try-fallbacks'), 'inherit', 'position-try-fallbacks: accepts inherit');
  s.positionTryFallbacks = '';
  assertEq(s.positionTryFallbacks, '', 'position-try-fallbacks: empty string removes');
  s.positionTryFallbacks = 'none';
  s.positionTryFallbacks = 'definitely-not-a-valid-value-xyz';
  assertEq(s.positionTryFallbacks, 'none', 'position-try-fallbacks: rejects invalid keyword');
}

// --- position-try-order ---
{
  const s = fresh();
  s.positionTryOrder = 'normal';
  assertEq(s.positionTryOrder, 'normal', 'position-try-order: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('position-try-order'), 'normal', 'position-try-order: getPropertyValue matches accessor');
  s.positionTryOrder = 'most-width';
  assertEq(s.positionTryOrder, 'most-width', 'position-try-order: overwrite with second value');
  s.removeProperty('position-try-order');
  assertEq(s.positionTryOrder, '', 'position-try-order: removeProperty clears value');
  s.setProperty('position-try-order', 'inherit');
  assertEq(s.getPropertyValue('position-try-order'), 'inherit', 'position-try-order: accepts inherit');
  s.positionTryOrder = '';
  assertEq(s.positionTryOrder, '', 'position-try-order: empty string removes');
  s.positionTryOrder = 'normal';
  s.positionTryOrder = 'definitely-not-a-valid-value-xyz';
  assertEq(s.positionTryOrder, 'normal', 'position-try-order: rejects invalid keyword');
}

// --- position-visibility ---
{
  const s = fresh();
  s.positionVisibility = 'always';
  assertEq(s.positionVisibility, 'always', 'position-visibility: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('position-visibility'), 'always', 'position-visibility: getPropertyValue matches accessor');
  s.positionVisibility = 'anchors-visible';
  assertEq(s.positionVisibility, 'anchors-visible', 'position-visibility: overwrite with second value');
  s.removeProperty('position-visibility');
  assertEq(s.positionVisibility, '', 'position-visibility: removeProperty clears value');
  s.setProperty('position-visibility', 'inherit');
  assertEq(s.getPropertyValue('position-visibility'), 'inherit', 'position-visibility: accepts inherit');
  s.positionVisibility = '';
  assertEq(s.positionVisibility, '', 'position-visibility: empty string removes');
  s.positionVisibility = 'always';
  s.positionVisibility = 'definitely-not-a-valid-value-xyz';
  assertEq(s.positionVisibility, 'always', 'position-visibility: rejects invalid keyword');
}

// --- print-color-adjust ---
{
  const s = fresh();
  s.printColorAdjust = 'economy';
  assertEq(s.printColorAdjust, 'economy', 'print-color-adjust: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('print-color-adjust'), 'economy', 'print-color-adjust: getPropertyValue matches accessor');
  s.printColorAdjust = 'exact';
  assertEq(s.printColorAdjust, 'exact', 'print-color-adjust: overwrite with second value');
  s.removeProperty('print-color-adjust');
  assertEq(s.printColorAdjust, '', 'print-color-adjust: removeProperty clears value');
  s.setProperty('print-color-adjust', 'inherit');
  assertEq(s.getPropertyValue('print-color-adjust'), 'inherit', 'print-color-adjust: accepts inherit');
  s.printColorAdjust = '';
  assertEq(s.printColorAdjust, '', 'print-color-adjust: empty string removes');
  s.printColorAdjust = 'economy';
  s.printColorAdjust = 'definitely-not-a-valid-value-xyz';
  assertEq(s.printColorAdjust, 'economy', 'print-color-adjust: rejects invalid keyword');
}

// --- quotes ---
{
  const s = fresh();
  s.quotes = 'auto';
  assertEq(s.quotes, 'auto', 'quotes: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('quotes'), 'auto', 'quotes: getPropertyValue matches accessor');
  s.quotes = 'none';
  assertEq(s.quotes, 'none', 'quotes: overwrite with second value');
  s.removeProperty('quotes');
  assertEq(s.quotes, '', 'quotes: removeProperty clears value');
  s.setProperty('quotes', 'inherit');
  assertEq(s.getPropertyValue('quotes'), 'inherit', 'quotes: accepts inherit');
  s.quotes = '';
  assertEq(s.quotes, '', 'quotes: empty string removes');
  s.quotes = 'auto';
  s.quotes = 'definitely-not-a-valid-value-xyz';
  assertEq(s.quotes, 'auto', 'quotes: rejects invalid keyword');
}

// --- content-visibility ---
{
  const s = fresh();
  s.contentVisibility = 'visible';
  assertEq(s.contentVisibility, 'visible', 'content-visibility: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('content-visibility'), 'visible', 'content-visibility: getPropertyValue matches accessor');
  s.contentVisibility = 'auto';
  assertEq(s.contentVisibility, 'auto', 'content-visibility: overwrite with second value');
  s.removeProperty('content-visibility');
  assertEq(s.contentVisibility, '', 'content-visibility: removeProperty clears value');
  s.setProperty('content-visibility', 'inherit');
  assertEq(s.getPropertyValue('content-visibility'), 'inherit', 'content-visibility: accepts inherit');
  s.contentVisibility = '';
  assertEq(s.contentVisibility, '', 'content-visibility: empty string removes');
  s.contentVisibility = 'visible';
  s.contentVisibility = 'definitely-not-a-valid-value-xyz';
  assertEq(s.contentVisibility, 'visible', 'content-visibility: rejects invalid keyword');
}

// --- reading-flow ---
{
  const s = fresh();
  s.readingFlow = 'normal';
  assertEq(s.readingFlow, 'normal', 'reading-flow: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('reading-flow'), 'normal', 'reading-flow: getPropertyValue matches accessor');
  s.readingFlow = 'flex-visual';
  assertEq(s.readingFlow, 'flex-visual', 'reading-flow: overwrite with second value');
  s.removeProperty('reading-flow');
  assertEq(s.readingFlow, '', 'reading-flow: removeProperty clears value');
  s.setProperty('reading-flow', 'inherit');
  assertEq(s.getPropertyValue('reading-flow'), 'inherit', 'reading-flow: accepts inherit');
  s.readingFlow = '';
  assertEq(s.readingFlow, '', 'reading-flow: empty string removes');
  s.readingFlow = 'normal';
  s.readingFlow = 'definitely-not-a-valid-value-xyz';
  assertEq(s.readingFlow, 'normal', 'reading-flow: rejects invalid keyword');
}

// --- reading-order ---
{
  const s = fresh();
  s.readingOrder = 'initial';
  assertEq(s.readingOrder, 'initial', 'reading-order: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('reading-order'), 'initial', 'reading-order: getPropertyValue matches accessor');
  s.readingOrder = 'inherit';
  assertEq(s.readingOrder, 'inherit', 'reading-order: overwrite with second value');
  s.removeProperty('reading-order');
  assertEq(s.readingOrder, '', 'reading-order: removeProperty clears value');
  s.setProperty('reading-order', 'inherit');
  assertEq(s.getPropertyValue('reading-order'), 'inherit', 'reading-order: accepts inherit');
  s.readingOrder = '';
  assertEq(s.readingOrder, '', 'reading-order: empty string removes');
}

// --- resize ---
{
  const s = fresh();
  s.resize = 'none';
  assertEq(s.resize, 'none', 'resize: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('resize'), 'none', 'resize: getPropertyValue matches accessor');
  s.resize = 'both';
  assertEq(s.resize, 'both', 'resize: overwrite with second value');
  s.removeProperty('resize');
  assertEq(s.resize, '', 'resize: removeProperty clears value');
  s.setProperty('resize', 'inherit');
  assertEq(s.getPropertyValue('resize'), 'inherit', 'resize: accepts inherit');
  s.resize = '';
  assertEq(s.resize, '', 'resize: empty string removes');
  s.resize = 'none';
  s.resize = 'definitely-not-a-valid-value-xyz';
  assertEq(s.resize, 'none', 'resize: rejects invalid keyword');
}

// --- right ---
{
  const s = fresh();
  s.right = '10px';
  assertEq(s.right, '10px', 'right: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('right'), '10px', 'right: getPropertyValue matches accessor');
  s.right = '20px';
  assertEq(s.right, '20px', 'right: overwrite with second value');
  s.removeProperty('right');
  assertEq(s.right, '', 'right: removeProperty clears value');
  s.setProperty('right', 'inherit');
  assertEq(s.getPropertyValue('right'), 'inherit', 'right: accepts inherit');
  s.right = '';
  assertEq(s.right, '', 'right: empty string removes');
}

// --- r ---
{
  const s = fresh();
  s.r = '10px';
  assertEq(s.r, '10px', 'r: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('r'), '10px', 'r: getPropertyValue matches accessor');
  s.r = '20px';
  assertEq(s.r, '20px', 'r: overwrite with second value');
  s.removeProperty('r');
  assertEq(s.r, '', 'r: removeProperty clears value');
  s.setProperty('r', 'inherit');
  assertEq(s.getPropertyValue('r'), 'inherit', 'r: accepts inherit');
  s.r = '';
  assertEq(s.r, '', 'r: empty string removes');
}

// --- rx ---
{
  const s = fresh();
  s.rx = '10px';
  assertEq(s.rx, '10px', 'rx: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('rx'), '10px', 'rx: getPropertyValue matches accessor');
  s.rx = '20px';
  assertEq(s.rx, '20px', 'rx: overwrite with second value');
  s.removeProperty('rx');
  assertEq(s.rx, '', 'rx: removeProperty clears value');
  s.setProperty('rx', 'inherit');
  assertEq(s.getPropertyValue('rx'), 'inherit', 'rx: accepts inherit');
  s.rx = '';
  assertEq(s.rx, '', 'rx: empty string removes');
}

// --- ry ---
{
  const s = fresh();
  s.ry = '10px';
  assertEq(s.ry, '10px', 'ry: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('ry'), '10px', 'ry: getPropertyValue matches accessor');
  s.ry = '20px';
  assertEq(s.ry, '20px', 'ry: overwrite with second value');
  s.removeProperty('ry');
  assertEq(s.ry, '', 'ry: removeProperty clears value');
  s.setProperty('ry', 'inherit');
  assertEq(s.getPropertyValue('ry'), 'inherit', 'ry: accepts inherit');
  s.ry = '';
  assertEq(s.ry, '', 'ry: empty string removes');
}

// --- scroll-target-group ---
{
  const s = fresh();
  s.scrollTargetGroup = 'none';
  assertEq(s.scrollTargetGroup, 'none', 'scroll-target-group: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('scroll-target-group'), 'none', 'scroll-target-group: getPropertyValue matches accessor');
  s.scrollTargetGroup = 'auto';
  assertEq(s.scrollTargetGroup, 'auto', 'scroll-target-group: overwrite with second value');
  s.removeProperty('scroll-target-group');
  assertEq(s.scrollTargetGroup, '', 'scroll-target-group: removeProperty clears value');
  s.setProperty('scroll-target-group', 'inherit');
  assertEq(s.getPropertyValue('scroll-target-group'), 'inherit', 'scroll-target-group: accepts inherit');
  s.scrollTargetGroup = '';
  assertEq(s.scrollTargetGroup, '', 'scroll-target-group: empty string removes');
  s.scrollTargetGroup = 'none';
  s.scrollTargetGroup = 'definitely-not-a-valid-value-xyz';
  assertEq(s.scrollTargetGroup, 'none', 'scroll-target-group: rejects invalid keyword');
}

// --- scroll-marker-group ---
{
  const s = fresh();
  s.scrollMarkerGroup = 'initial';
  assertEq(s.scrollMarkerGroup, 'initial', 'scroll-marker-group: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('scroll-marker-group'), 'initial', 'scroll-marker-group: getPropertyValue matches accessor');
  s.scrollMarkerGroup = 'inherit';
  assertEq(s.scrollMarkerGroup, 'inherit', 'scroll-marker-group: overwrite with second value');
  s.removeProperty('scroll-marker-group');
  assertEq(s.scrollMarkerGroup, '', 'scroll-marker-group: removeProperty clears value');
  s.setProperty('scroll-marker-group', 'inherit');
  assertEq(s.getPropertyValue('scroll-marker-group'), 'inherit', 'scroll-marker-group: accepts inherit');
  s.scrollMarkerGroup = '';
  assertEq(s.scrollMarkerGroup, '', 'scroll-marker-group: empty string removes');
}

// --- scrollbar-color ---
{
  const s = fresh();
  s.scrollbarColor = 'red';
  assertEq(s.scrollbarColor, 'red', 'scrollbar-color: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('scrollbar-color'), 'red', 'scrollbar-color: getPropertyValue matches accessor');
  s.scrollbarColor = 'blue';
  assertEq(s.scrollbarColor, 'blue', 'scrollbar-color: overwrite with second value');
  s.removeProperty('scrollbar-color');
  assertEq(s.scrollbarColor, '', 'scrollbar-color: removeProperty clears value');
  s.setProperty('scrollbar-color', 'inherit');
  assertEq(s.getPropertyValue('scrollbar-color'), 'inherit', 'scrollbar-color: accepts inherit');
  s.scrollbarColor = '';
  assertEq(s.scrollbarColor, '', 'scrollbar-color: empty string removes');
}

// --- scrollbar-gutter ---
{
  const s = fresh();
  s.scrollbarGutter = 'auto';
  assertEq(s.scrollbarGutter, 'auto', 'scrollbar-gutter: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('scrollbar-gutter'), 'auto', 'scrollbar-gutter: getPropertyValue matches accessor');
  s.scrollbarGutter = 'stable';
  assertEq(s.scrollbarGutter, 'stable', 'scrollbar-gutter: overwrite with second value');
  s.removeProperty('scrollbar-gutter');
  assertEq(s.scrollbarGutter, '', 'scrollbar-gutter: removeProperty clears value');
  s.setProperty('scrollbar-gutter', 'inherit');
  assertEq(s.getPropertyValue('scrollbar-gutter'), 'inherit', 'scrollbar-gutter: accepts inherit');
  s.scrollbarGutter = '';
  assertEq(s.scrollbarGutter, '', 'scrollbar-gutter: empty string removes');
  s.scrollbarGutter = 'auto';
  s.scrollbarGutter = 'definitely-not-a-valid-value-xyz';
  assertEq(s.scrollbarGutter, 'auto', 'scrollbar-gutter: rejects invalid keyword');
}

// --- scrollbar-width ---
{
  const s = fresh();
  s.scrollbarWidth = 'auto';
  assertEq(s.scrollbarWidth, 'auto', 'scrollbar-width: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('scrollbar-width'), 'auto', 'scrollbar-width: getPropertyValue matches accessor');
  s.scrollbarWidth = 'thin';
  assertEq(s.scrollbarWidth, 'thin', 'scrollbar-width: overwrite with second value');
  s.removeProperty('scrollbar-width');
  assertEq(s.scrollbarWidth, '', 'scrollbar-width: removeProperty clears value');
  s.setProperty('scrollbar-width', 'inherit');
  assertEq(s.getPropertyValue('scrollbar-width'), 'inherit', 'scrollbar-width: accepts inherit');
  s.scrollbarWidth = '';
  assertEq(s.scrollbarWidth, '', 'scrollbar-width: empty string removes');
  s.scrollbarWidth = 'auto';
  s.scrollbarWidth = 'definitely-not-a-valid-value-xyz';
  assertEq(s.scrollbarWidth, 'auto', 'scrollbar-width: rejects invalid keyword');
}

// --- scroll-behavior ---
{
  const s = fresh();
  s.scrollBehavior = 'auto';
  assertEq(s.scrollBehavior, 'auto', 'scroll-behavior: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('scroll-behavior'), 'auto', 'scroll-behavior: getPropertyValue matches accessor');
  s.scrollBehavior = 'smooth';
  assertEq(s.scrollBehavior, 'smooth', 'scroll-behavior: overwrite with second value');
  s.removeProperty('scroll-behavior');
  assertEq(s.scrollBehavior, '', 'scroll-behavior: removeProperty clears value');
  s.setProperty('scroll-behavior', 'inherit');
  assertEq(s.getPropertyValue('scroll-behavior'), 'inherit', 'scroll-behavior: accepts inherit');
  s.scrollBehavior = '';
  assertEq(s.scrollBehavior, '', 'scroll-behavior: empty string removes');
  s.scrollBehavior = 'auto';
  s.scrollBehavior = 'definitely-not-a-valid-value-xyz';
  assertEq(s.scrollBehavior, 'auto', 'scroll-behavior: rejects invalid keyword');
}

// --- scroll-initial-target ---
{
  const s = fresh();
  s.scrollInitialTarget = 'none';
  assertEq(s.scrollInitialTarget, 'none', 'scroll-initial-target: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('scroll-initial-target'), 'none', 'scroll-initial-target: getPropertyValue matches accessor');
  s.scrollInitialTarget = 'nearest';
  assertEq(s.scrollInitialTarget, 'nearest', 'scroll-initial-target: overwrite with second value');
  s.removeProperty('scroll-initial-target');
  assertEq(s.scrollInitialTarget, '', 'scroll-initial-target: removeProperty clears value');
  s.setProperty('scroll-initial-target', 'inherit');
  assertEq(s.getPropertyValue('scroll-initial-target'), 'inherit', 'scroll-initial-target: accepts inherit');
  s.scrollInitialTarget = '';
  assertEq(s.scrollInitialTarget, '', 'scroll-initial-target: empty string removes');
  s.scrollInitialTarget = 'none';
  s.scrollInitialTarget = 'definitely-not-a-valid-value-xyz';
  assertEq(s.scrollInitialTarget, 'none', 'scroll-initial-target: rejects invalid keyword');
}

// --- scroll-margin-block-end ---
{
  const s = fresh();
  s.scrollMarginBlockEnd = 'initial';
  assertEq(s.scrollMarginBlockEnd, 'initial', 'scroll-margin-block-end: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('scroll-margin-block-end'), 'initial', 'scroll-margin-block-end: getPropertyValue matches accessor');
  s.scrollMarginBlockEnd = 'inherit';
  assertEq(s.scrollMarginBlockEnd, 'inherit', 'scroll-margin-block-end: overwrite with second value');
  s.removeProperty('scroll-margin-block-end');
  assertEq(s.scrollMarginBlockEnd, '', 'scroll-margin-block-end: removeProperty clears value');
  s.setProperty('scroll-margin-block-end', 'inherit');
  assertEq(s.getPropertyValue('scroll-margin-block-end'), 'inherit', 'scroll-margin-block-end: accepts inherit');
  s.scrollMarginBlockEnd = '';
  assertEq(s.scrollMarginBlockEnd, '', 'scroll-margin-block-end: empty string removes');
}

// --- scroll-margin-block-start ---
{
  const s = fresh();
  s.scrollMarginBlockStart = 'initial';
  assertEq(s.scrollMarginBlockStart, 'initial', 'scroll-margin-block-start: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('scroll-margin-block-start'), 'initial', 'scroll-margin-block-start: getPropertyValue matches accessor');
  s.scrollMarginBlockStart = 'inherit';
  assertEq(s.scrollMarginBlockStart, 'inherit', 'scroll-margin-block-start: overwrite with second value');
  s.removeProperty('scroll-margin-block-start');
  assertEq(s.scrollMarginBlockStart, '', 'scroll-margin-block-start: removeProperty clears value');
  s.setProperty('scroll-margin-block-start', 'inherit');
  assertEq(s.getPropertyValue('scroll-margin-block-start'), 'inherit', 'scroll-margin-block-start: accepts inherit');
  s.scrollMarginBlockStart = '';
  assertEq(s.scrollMarginBlockStart, '', 'scroll-margin-block-start: empty string removes');
}

// --- scroll-margin-bottom ---
{
  const s = fresh();
  s.scrollMarginBottom = '10px';
  assertEq(s.scrollMarginBottom, '10px', 'scroll-margin-bottom: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('scroll-margin-bottom'), '10px', 'scroll-margin-bottom: getPropertyValue matches accessor');
  s.scrollMarginBottom = '20px';
  assertEq(s.scrollMarginBottom, '20px', 'scroll-margin-bottom: overwrite with second value');
  s.removeProperty('scroll-margin-bottom');
  assertEq(s.scrollMarginBottom, '', 'scroll-margin-bottom: removeProperty clears value');
  s.setProperty('scroll-margin-bottom', 'inherit');
  assertEq(s.getPropertyValue('scroll-margin-bottom'), 'inherit', 'scroll-margin-bottom: accepts inherit');
  s.scrollMarginBottom = '';
  assertEq(s.scrollMarginBottom, '', 'scroll-margin-bottom: empty string removes');
}

// --- scroll-margin-inline-end ---
{
  const s = fresh();
  s.scrollMarginInlineEnd = 'initial';
  assertEq(s.scrollMarginInlineEnd, 'initial', 'scroll-margin-inline-end: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('scroll-margin-inline-end'), 'initial', 'scroll-margin-inline-end: getPropertyValue matches accessor');
  s.scrollMarginInlineEnd = 'inherit';
  assertEq(s.scrollMarginInlineEnd, 'inherit', 'scroll-margin-inline-end: overwrite with second value');
  s.removeProperty('scroll-margin-inline-end');
  assertEq(s.scrollMarginInlineEnd, '', 'scroll-margin-inline-end: removeProperty clears value');
  s.setProperty('scroll-margin-inline-end', 'inherit');
  assertEq(s.getPropertyValue('scroll-margin-inline-end'), 'inherit', 'scroll-margin-inline-end: accepts inherit');
  s.scrollMarginInlineEnd = '';
  assertEq(s.scrollMarginInlineEnd, '', 'scroll-margin-inline-end: empty string removes');
}

// --- scroll-margin-inline-start ---
{
  const s = fresh();
  s.scrollMarginInlineStart = 'initial';
  assertEq(s.scrollMarginInlineStart, 'initial', 'scroll-margin-inline-start: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('scroll-margin-inline-start'), 'initial', 'scroll-margin-inline-start: getPropertyValue matches accessor');
  s.scrollMarginInlineStart = 'inherit';
  assertEq(s.scrollMarginInlineStart, 'inherit', 'scroll-margin-inline-start: overwrite with second value');
  s.removeProperty('scroll-margin-inline-start');
  assertEq(s.scrollMarginInlineStart, '', 'scroll-margin-inline-start: removeProperty clears value');
  s.setProperty('scroll-margin-inline-start', 'inherit');
  assertEq(s.getPropertyValue('scroll-margin-inline-start'), 'inherit', 'scroll-margin-inline-start: accepts inherit');
  s.scrollMarginInlineStart = '';
  assertEq(s.scrollMarginInlineStart, '', 'scroll-margin-inline-start: empty string removes');
}

// --- scroll-margin-left ---
{
  const s = fresh();
  s.scrollMarginLeft = '10px';
  assertEq(s.scrollMarginLeft, '10px', 'scroll-margin-left: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('scroll-margin-left'), '10px', 'scroll-margin-left: getPropertyValue matches accessor');
  s.scrollMarginLeft = '20px';
  assertEq(s.scrollMarginLeft, '20px', 'scroll-margin-left: overwrite with second value');
  s.removeProperty('scroll-margin-left');
  assertEq(s.scrollMarginLeft, '', 'scroll-margin-left: removeProperty clears value');
  s.setProperty('scroll-margin-left', 'inherit');
  assertEq(s.getPropertyValue('scroll-margin-left'), 'inherit', 'scroll-margin-left: accepts inherit');
  s.scrollMarginLeft = '';
  assertEq(s.scrollMarginLeft, '', 'scroll-margin-left: empty string removes');
}

// --- scroll-margin-right ---
{
  const s = fresh();
  s.scrollMarginRight = '10px';
  assertEq(s.scrollMarginRight, '10px', 'scroll-margin-right: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('scroll-margin-right'), '10px', 'scroll-margin-right: getPropertyValue matches accessor');
  s.scrollMarginRight = '20px';
  assertEq(s.scrollMarginRight, '20px', 'scroll-margin-right: overwrite with second value');
  s.removeProperty('scroll-margin-right');
  assertEq(s.scrollMarginRight, '', 'scroll-margin-right: removeProperty clears value');
  s.setProperty('scroll-margin-right', 'inherit');
  assertEq(s.getPropertyValue('scroll-margin-right'), 'inherit', 'scroll-margin-right: accepts inherit');
  s.scrollMarginRight = '';
  assertEq(s.scrollMarginRight, '', 'scroll-margin-right: empty string removes');
}

// --- scroll-margin-top ---
{
  const s = fresh();
  s.scrollMarginTop = '10px';
  assertEq(s.scrollMarginTop, '10px', 'scroll-margin-top: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('scroll-margin-top'), '10px', 'scroll-margin-top: getPropertyValue matches accessor');
  s.scrollMarginTop = '20px';
  assertEq(s.scrollMarginTop, '20px', 'scroll-margin-top: overwrite with second value');
  s.removeProperty('scroll-margin-top');
  assertEq(s.scrollMarginTop, '', 'scroll-margin-top: removeProperty clears value');
  s.setProperty('scroll-margin-top', 'inherit');
  assertEq(s.getPropertyValue('scroll-margin-top'), 'inherit', 'scroll-margin-top: accepts inherit');
  s.scrollMarginTop = '';
  assertEq(s.scrollMarginTop, '', 'scroll-margin-top: empty string removes');
}

// --- scroll-padding-block-end ---
{
  const s = fresh();
  s.scrollPaddingBlockEnd = 'auto';
  assertEq(s.scrollPaddingBlockEnd, 'auto', 'scroll-padding-block-end: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('scroll-padding-block-end'), 'auto', 'scroll-padding-block-end: getPropertyValue matches accessor');
  s.scrollPaddingBlockEnd = 'inherit';
  assertEq(s.scrollPaddingBlockEnd, 'inherit', 'scroll-padding-block-end: overwrite with second value');
  s.removeProperty('scroll-padding-block-end');
  assertEq(s.scrollPaddingBlockEnd, '', 'scroll-padding-block-end: removeProperty clears value');
  s.setProperty('scroll-padding-block-end', 'inherit');
  assertEq(s.getPropertyValue('scroll-padding-block-end'), 'inherit', 'scroll-padding-block-end: accepts inherit');
  s.scrollPaddingBlockEnd = '';
  assertEq(s.scrollPaddingBlockEnd, '', 'scroll-padding-block-end: empty string removes');
}

// --- scroll-padding-block-start ---
{
  const s = fresh();
  s.scrollPaddingBlockStart = 'auto';
  assertEq(s.scrollPaddingBlockStart, 'auto', 'scroll-padding-block-start: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('scroll-padding-block-start'), 'auto', 'scroll-padding-block-start: getPropertyValue matches accessor');
  s.scrollPaddingBlockStart = 'inherit';
  assertEq(s.scrollPaddingBlockStart, 'inherit', 'scroll-padding-block-start: overwrite with second value');
  s.removeProperty('scroll-padding-block-start');
  assertEq(s.scrollPaddingBlockStart, '', 'scroll-padding-block-start: removeProperty clears value');
  s.setProperty('scroll-padding-block-start', 'inherit');
  assertEq(s.getPropertyValue('scroll-padding-block-start'), 'inherit', 'scroll-padding-block-start: accepts inherit');
  s.scrollPaddingBlockStart = '';
  assertEq(s.scrollPaddingBlockStart, '', 'scroll-padding-block-start: empty string removes');
}

// --- scroll-padding-bottom ---
{
  const s = fresh();
  s.scrollPaddingBottom = '10px';
  assertEq(s.scrollPaddingBottom, '10px', 'scroll-padding-bottom: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('scroll-padding-bottom'), '10px', 'scroll-padding-bottom: getPropertyValue matches accessor');
  s.scrollPaddingBottom = '20px';
  assertEq(s.scrollPaddingBottom, '20px', 'scroll-padding-bottom: overwrite with second value');
  s.removeProperty('scroll-padding-bottom');
  assertEq(s.scrollPaddingBottom, '', 'scroll-padding-bottom: removeProperty clears value');
  s.setProperty('scroll-padding-bottom', 'inherit');
  assertEq(s.getPropertyValue('scroll-padding-bottom'), 'inherit', 'scroll-padding-bottom: accepts inherit');
  s.scrollPaddingBottom = '';
  assertEq(s.scrollPaddingBottom, '', 'scroll-padding-bottom: empty string removes');
}

// --- scroll-padding-inline-end ---
{
  const s = fresh();
  s.scrollPaddingInlineEnd = 'auto';
  assertEq(s.scrollPaddingInlineEnd, 'auto', 'scroll-padding-inline-end: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('scroll-padding-inline-end'), 'auto', 'scroll-padding-inline-end: getPropertyValue matches accessor');
  s.scrollPaddingInlineEnd = 'inherit';
  assertEq(s.scrollPaddingInlineEnd, 'inherit', 'scroll-padding-inline-end: overwrite with second value');
  s.removeProperty('scroll-padding-inline-end');
  assertEq(s.scrollPaddingInlineEnd, '', 'scroll-padding-inline-end: removeProperty clears value');
  s.setProperty('scroll-padding-inline-end', 'inherit');
  assertEq(s.getPropertyValue('scroll-padding-inline-end'), 'inherit', 'scroll-padding-inline-end: accepts inherit');
  s.scrollPaddingInlineEnd = '';
  assertEq(s.scrollPaddingInlineEnd, '', 'scroll-padding-inline-end: empty string removes');
}

// --- scroll-padding-inline-start ---
{
  const s = fresh();
  s.scrollPaddingInlineStart = 'auto';
  assertEq(s.scrollPaddingInlineStart, 'auto', 'scroll-padding-inline-start: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('scroll-padding-inline-start'), 'auto', 'scroll-padding-inline-start: getPropertyValue matches accessor');
  s.scrollPaddingInlineStart = 'inherit';
  assertEq(s.scrollPaddingInlineStart, 'inherit', 'scroll-padding-inline-start: overwrite with second value');
  s.removeProperty('scroll-padding-inline-start');
  assertEq(s.scrollPaddingInlineStart, '', 'scroll-padding-inline-start: removeProperty clears value');
  s.setProperty('scroll-padding-inline-start', 'inherit');
  assertEq(s.getPropertyValue('scroll-padding-inline-start'), 'inherit', 'scroll-padding-inline-start: accepts inherit');
  s.scrollPaddingInlineStart = '';
  assertEq(s.scrollPaddingInlineStart, '', 'scroll-padding-inline-start: empty string removes');
}

// --- scroll-padding-left ---
{
  const s = fresh();
  s.scrollPaddingLeft = '10px';
  assertEq(s.scrollPaddingLeft, '10px', 'scroll-padding-left: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('scroll-padding-left'), '10px', 'scroll-padding-left: getPropertyValue matches accessor');
  s.scrollPaddingLeft = '20px';
  assertEq(s.scrollPaddingLeft, '20px', 'scroll-padding-left: overwrite with second value');
  s.removeProperty('scroll-padding-left');
  assertEq(s.scrollPaddingLeft, '', 'scroll-padding-left: removeProperty clears value');
  s.setProperty('scroll-padding-left', 'inherit');
  assertEq(s.getPropertyValue('scroll-padding-left'), 'inherit', 'scroll-padding-left: accepts inherit');
  s.scrollPaddingLeft = '';
  assertEq(s.scrollPaddingLeft, '', 'scroll-padding-left: empty string removes');
}

// --- scroll-padding-right ---
{
  const s = fresh();
  s.scrollPaddingRight = '10px';
  assertEq(s.scrollPaddingRight, '10px', 'scroll-padding-right: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('scroll-padding-right'), '10px', 'scroll-padding-right: getPropertyValue matches accessor');
  s.scrollPaddingRight = '20px';
  assertEq(s.scrollPaddingRight, '20px', 'scroll-padding-right: overwrite with second value');
  s.removeProperty('scroll-padding-right');
  assertEq(s.scrollPaddingRight, '', 'scroll-padding-right: removeProperty clears value');
  s.setProperty('scroll-padding-right', 'inherit');
  assertEq(s.getPropertyValue('scroll-padding-right'), 'inherit', 'scroll-padding-right: accepts inherit');
  s.scrollPaddingRight = '';
  assertEq(s.scrollPaddingRight, '', 'scroll-padding-right: empty string removes');
}

// --- scroll-padding-top ---
{
  const s = fresh();
  s.scrollPaddingTop = '10px';
  assertEq(s.scrollPaddingTop, '10px', 'scroll-padding-top: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('scroll-padding-top'), '10px', 'scroll-padding-top: getPropertyValue matches accessor');
  s.scrollPaddingTop = '20px';
  assertEq(s.scrollPaddingTop, '20px', 'scroll-padding-top: overwrite with second value');
  s.removeProperty('scroll-padding-top');
  assertEq(s.scrollPaddingTop, '', 'scroll-padding-top: removeProperty clears value');
  s.setProperty('scroll-padding-top', 'inherit');
  assertEq(s.getPropertyValue('scroll-padding-top'), 'inherit', 'scroll-padding-top: accepts inherit');
  s.scrollPaddingTop = '';
  assertEq(s.scrollPaddingTop, '', 'scroll-padding-top: empty string removes');
}

// --- scroll-snap-align ---
{
  const s = fresh();
  s.scrollSnapAlign = 'none';
  assertEq(s.scrollSnapAlign, 'none', 'scroll-snap-align: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('scroll-snap-align'), 'none', 'scroll-snap-align: getPropertyValue matches accessor');
  s.scrollSnapAlign = 'start';
  assertEq(s.scrollSnapAlign, 'start', 'scroll-snap-align: overwrite with second value');
  s.removeProperty('scroll-snap-align');
  assertEq(s.scrollSnapAlign, '', 'scroll-snap-align: removeProperty clears value');
  s.setProperty('scroll-snap-align', 'inherit');
  assertEq(s.getPropertyValue('scroll-snap-align'), 'inherit', 'scroll-snap-align: accepts inherit');
  s.scrollSnapAlign = '';
  assertEq(s.scrollSnapAlign, '', 'scroll-snap-align: empty string removes');
  s.scrollSnapAlign = 'none';
  s.scrollSnapAlign = 'definitely-not-a-valid-value-xyz';
  assertEq(s.scrollSnapAlign, 'none', 'scroll-snap-align: rejects invalid keyword');
}

// --- scroll-snap-stop ---
{
  const s = fresh();
  s.scrollSnapStop = 'normal';
  assertEq(s.scrollSnapStop, 'normal', 'scroll-snap-stop: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('scroll-snap-stop'), 'normal', 'scroll-snap-stop: getPropertyValue matches accessor');
  s.scrollSnapStop = 'always';
  assertEq(s.scrollSnapStop, 'always', 'scroll-snap-stop: overwrite with second value');
  s.removeProperty('scroll-snap-stop');
  assertEq(s.scrollSnapStop, '', 'scroll-snap-stop: removeProperty clears value');
  s.setProperty('scroll-snap-stop', 'inherit');
  assertEq(s.getPropertyValue('scroll-snap-stop'), 'inherit', 'scroll-snap-stop: accepts inherit');
  s.scrollSnapStop = '';
  assertEq(s.scrollSnapStop, '', 'scroll-snap-stop: empty string removes');
  s.scrollSnapStop = 'normal';
  s.scrollSnapStop = 'definitely-not-a-valid-value-xyz';
  assertEq(s.scrollSnapStop, 'normal', 'scroll-snap-stop: rejects invalid keyword');
}

// --- scroll-snap-type ---
{
  const s = fresh();
  s.scrollSnapType = 'none';
  assertEq(s.scrollSnapType, 'none', 'scroll-snap-type: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('scroll-snap-type'), 'none', 'scroll-snap-type: getPropertyValue matches accessor');
  s.scrollSnapType = 'x';
  assertEq(s.scrollSnapType, 'x', 'scroll-snap-type: overwrite with second value');
  s.removeProperty('scroll-snap-type');
  assertEq(s.scrollSnapType, '', 'scroll-snap-type: removeProperty clears value');
  s.setProperty('scroll-snap-type', 'inherit');
  assertEq(s.getPropertyValue('scroll-snap-type'), 'inherit', 'scroll-snap-type: accepts inherit');
  s.scrollSnapType = '';
  assertEq(s.scrollSnapType, '', 'scroll-snap-type: empty string removes');
  s.scrollSnapType = 'none';
  s.scrollSnapType = 'definitely-not-a-valid-value-xyz';
  assertEq(s.scrollSnapType, 'none', 'scroll-snap-type: rejects invalid keyword');
}

// --- scroll-timeline-axis ---
{
  const s = fresh();
  s.scrollTimelineAxis = 'initial';
  assertEq(s.scrollTimelineAxis, 'initial', 'scroll-timeline-axis: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('scroll-timeline-axis'), 'initial', 'scroll-timeline-axis: getPropertyValue matches accessor');
  s.scrollTimelineAxis = 'inherit';
  assertEq(s.scrollTimelineAxis, 'inherit', 'scroll-timeline-axis: overwrite with second value');
  s.removeProperty('scroll-timeline-axis');
  assertEq(s.scrollTimelineAxis, '', 'scroll-timeline-axis: removeProperty clears value');
  s.setProperty('scroll-timeline-axis', 'inherit');
  assertEq(s.getPropertyValue('scroll-timeline-axis'), 'inherit', 'scroll-timeline-axis: accepts inherit');
  s.scrollTimelineAxis = '';
  assertEq(s.scrollTimelineAxis, '', 'scroll-timeline-axis: empty string removes');
}

// --- scroll-timeline-name ---
{
  const s = fresh();
  s.scrollTimelineName = 'initial';
  assertEq(s.scrollTimelineName, 'initial', 'scroll-timeline-name: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('scroll-timeline-name'), 'initial', 'scroll-timeline-name: getPropertyValue matches accessor');
  s.scrollTimelineName = 'inherit';
  assertEq(s.scrollTimelineName, 'inherit', 'scroll-timeline-name: overwrite with second value');
  s.removeProperty('scroll-timeline-name');
  assertEq(s.scrollTimelineName, '', 'scroll-timeline-name: removeProperty clears value');
  s.setProperty('scroll-timeline-name', 'inherit');
  assertEq(s.getPropertyValue('scroll-timeline-name'), 'inherit', 'scroll-timeline-name: accepts inherit');
  s.scrollTimelineName = '';
  assertEq(s.scrollTimelineName, '', 'scroll-timeline-name: empty string removes');
}

// --- shape-image-threshold ---
{
  const s = fresh();
  s.shapeImageThreshold = '1';
  assertEq(s.shapeImageThreshold, '1', 'shape-image-threshold: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('shape-image-threshold'), '1', 'shape-image-threshold: getPropertyValue matches accessor');
  s.shapeImageThreshold = '2';
  assertEq(s.shapeImageThreshold, '2', 'shape-image-threshold: overwrite with second value');
  s.removeProperty('shape-image-threshold');
  assertEq(s.shapeImageThreshold, '', 'shape-image-threshold: removeProperty clears value');
  s.setProperty('shape-image-threshold', 'inherit');
  assertEq(s.getPropertyValue('shape-image-threshold'), 'inherit', 'shape-image-threshold: accepts inherit');
  s.shapeImageThreshold = '';
  assertEq(s.shapeImageThreshold, '', 'shape-image-threshold: empty string removes');
}

// --- shape-margin ---
{
  const s = fresh();
  s.shapeMargin = 'none';
  assertEq(s.shapeMargin, 'none', 'shape-margin: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('shape-margin'), 'none', 'shape-margin: getPropertyValue matches accessor');
  s.shapeMargin = 'inherit';
  assertEq(s.shapeMargin, 'inherit', 'shape-margin: overwrite with second value');
  s.removeProperty('shape-margin');
  assertEq(s.shapeMargin, '', 'shape-margin: removeProperty clears value');
  s.setProperty('shape-margin', 'inherit');
  assertEq(s.getPropertyValue('shape-margin'), 'inherit', 'shape-margin: accepts inherit');
  s.shapeMargin = '';
  assertEq(s.shapeMargin, '', 'shape-margin: empty string removes');
}

// --- shape-outside ---
{
  const s = fresh();
  s.shapeOutside = 'none';
  assertEq(s.shapeOutside, 'none', 'shape-outside: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('shape-outside'), 'none', 'shape-outside: getPropertyValue matches accessor');
  s.shapeOutside = 'inherit';
  assertEq(s.shapeOutside, 'inherit', 'shape-outside: overwrite with second value');
  s.removeProperty('shape-outside');
  assertEq(s.shapeOutside, '', 'shape-outside: removeProperty clears value');
  s.setProperty('shape-outside', 'inherit');
  assertEq(s.getPropertyValue('shape-outside'), 'inherit', 'shape-outside: accepts inherit');
  s.shapeOutside = '';
  assertEq(s.shapeOutside, '', 'shape-outside: empty string removes');
}

// --- shape-rendering ---
{
  const s = fresh();
  s.shapeRendering = 'auto';
  assertEq(s.shapeRendering, 'auto', 'shape-rendering: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('shape-rendering'), 'auto', 'shape-rendering: getPropertyValue matches accessor');
  s.shapeRendering = 'optimizespeed';
  assertEq(s.shapeRendering, 'optimizespeed', 'shape-rendering: overwrite with second value');
  s.removeProperty('shape-rendering');
  assertEq(s.shapeRendering, '', 'shape-rendering: removeProperty clears value');
  s.setProperty('shape-rendering', 'inherit');
  assertEq(s.getPropertyValue('shape-rendering'), 'inherit', 'shape-rendering: accepts inherit');
  s.shapeRendering = '';
  assertEq(s.shapeRendering, '', 'shape-rendering: empty string removes');
  s.shapeRendering = 'auto';
  s.shapeRendering = 'definitely-not-a-valid-value-xyz';
  assertEq(s.shapeRendering, 'auto', 'shape-rendering: rejects invalid keyword');
}

// --- size ---
{
  const s = fresh();
  s.size = '10px';
  assertEq(s.size, '10px', 'size: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('size'), '10px', 'size: getPropertyValue matches accessor');
  s.size = 'inherit';
  assertEq(s.size, 'inherit', 'size: overwrite with second value');
  s.removeProperty('size');
  assertEq(s.size, '', 'size: removeProperty clears value');
  s.setProperty('size', 'inherit');
  assertEq(s.getPropertyValue('size'), 'inherit', 'size: accepts inherit');
  s.size = '';
  assertEq(s.size, '', 'size: empty string removes');
}

// --- speak ---
{
  const s = fresh();
  s.speak = 'none';
  assertEq(s.speak, 'none', 'speak: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('speak'), 'none', 'speak: getPropertyValue matches accessor');
  s.speak = 'normal';
  assertEq(s.speak, 'normal', 'speak: overwrite with second value');
  s.removeProperty('speak');
  assertEq(s.speak, '', 'speak: removeProperty clears value');
  s.setProperty('speak', 'inherit');
  assertEq(s.getPropertyValue('speak'), 'inherit', 'speak: accepts inherit');
  s.speak = '';
  assertEq(s.speak, '', 'speak: empty string removes');
  s.speak = 'none';
  s.speak = 'definitely-not-a-valid-value-xyz';
  assertEq(s.speak, 'none', 'speak: rejects invalid keyword');
}

// --- stop-color ---
{
  const s = fresh();
  s.stopColor = 'red';
  assertEq(s.stopColor, 'red', 'stop-color: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('stop-color'), 'red', 'stop-color: getPropertyValue matches accessor');
  s.stopColor = 'blue';
  assertEq(s.stopColor, 'blue', 'stop-color: overwrite with second value');
  s.removeProperty('stop-color');
  assertEq(s.stopColor, '', 'stop-color: removeProperty clears value');
  s.setProperty('stop-color', 'inherit');
  assertEq(s.getPropertyValue('stop-color'), 'inherit', 'stop-color: accepts inherit');
  s.stopColor = '';
  assertEq(s.stopColor, '', 'stop-color: empty string removes');
}

// --- stop-opacity ---
{
  const s = fresh();
  s.stopOpacity = '1';
  assertEq(s.stopOpacity, '1', 'stop-opacity: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('stop-opacity'), '1', 'stop-opacity: getPropertyValue matches accessor');
  s.stopOpacity = '2';
  assertEq(s.stopOpacity, '2', 'stop-opacity: overwrite with second value');
  s.removeProperty('stop-opacity');
  assertEq(s.stopOpacity, '', 'stop-opacity: removeProperty clears value');
  s.setProperty('stop-opacity', 'inherit');
  assertEq(s.getPropertyValue('stop-opacity'), 'inherit', 'stop-opacity: accepts inherit');
  s.stopOpacity = '';
  assertEq(s.stopOpacity, '', 'stop-opacity: empty string removes');
}

// --- stroke ---
{
  const s = fresh();
  s.stroke = 'red';
  assertEq(s.stroke, 'red', 'stroke: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('stroke'), 'red', 'stroke: getPropertyValue matches accessor');
  s.stroke = 'blue';
  assertEq(s.stroke, 'blue', 'stroke: overwrite with second value');
  s.removeProperty('stroke');
  assertEq(s.stroke, '', 'stroke: removeProperty clears value');
  s.setProperty('stroke', 'inherit');
  assertEq(s.getPropertyValue('stroke'), 'inherit', 'stroke: accepts inherit');
  s.stroke = '';
  assertEq(s.stroke, '', 'stroke: empty string removes');
}

// --- stroke-dasharray ---
{
  const s = fresh();
  s.strokeDasharray = 'none';
  assertEq(s.strokeDasharray, 'none', 'stroke-dasharray: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('stroke-dasharray'), 'none', 'stroke-dasharray: getPropertyValue matches accessor');
  s.strokeDasharray = 'inherit';
  assertEq(s.strokeDasharray, 'inherit', 'stroke-dasharray: overwrite with second value');
  s.removeProperty('stroke-dasharray');
  assertEq(s.strokeDasharray, '', 'stroke-dasharray: removeProperty clears value');
  s.setProperty('stroke-dasharray', 'inherit');
  assertEq(s.getPropertyValue('stroke-dasharray'), 'inherit', 'stroke-dasharray: accepts inherit');
  s.strokeDasharray = '';
  assertEq(s.strokeDasharray, '', 'stroke-dasharray: empty string removes');
  s.strokeDasharray = 'none';
  s.strokeDasharray = 'definitely-not-a-valid-value-xyz';
  assertEq(s.strokeDasharray, 'none', 'stroke-dasharray: rejects invalid keyword');
}

// --- stroke-dashoffset ---
{
  const s = fresh();
  s.strokeDashoffset = '10px';
  assertEq(s.strokeDashoffset, '10px', 'stroke-dashoffset: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('stroke-dashoffset'), '10px', 'stroke-dashoffset: getPropertyValue matches accessor');
  s.strokeDashoffset = '20px';
  assertEq(s.strokeDashoffset, '20px', 'stroke-dashoffset: overwrite with second value');
  s.removeProperty('stroke-dashoffset');
  assertEq(s.strokeDashoffset, '', 'stroke-dashoffset: removeProperty clears value');
  s.setProperty('stroke-dashoffset', 'inherit');
  assertEq(s.getPropertyValue('stroke-dashoffset'), 'inherit', 'stroke-dashoffset: accepts inherit');
  s.strokeDashoffset = '';
  assertEq(s.strokeDashoffset, '', 'stroke-dashoffset: empty string removes');
}

// --- stroke-linecap ---
{
  const s = fresh();
  s.strokeLinecap = 'butt';
  assertEq(s.strokeLinecap, 'butt', 'stroke-linecap: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('stroke-linecap'), 'butt', 'stroke-linecap: getPropertyValue matches accessor');
  s.strokeLinecap = 'round';
  assertEq(s.strokeLinecap, 'round', 'stroke-linecap: overwrite with second value');
  s.removeProperty('stroke-linecap');
  assertEq(s.strokeLinecap, '', 'stroke-linecap: removeProperty clears value');
  s.setProperty('stroke-linecap', 'inherit');
  assertEq(s.getPropertyValue('stroke-linecap'), 'inherit', 'stroke-linecap: accepts inherit');
  s.strokeLinecap = '';
  assertEq(s.strokeLinecap, '', 'stroke-linecap: empty string removes');
  s.strokeLinecap = 'butt';
  s.strokeLinecap = 'definitely-not-a-valid-value-xyz';
  assertEq(s.strokeLinecap, 'butt', 'stroke-linecap: rejects invalid keyword');
}

// --- stroke-linejoin ---
{
  const s = fresh();
  s.strokeLinejoin = 'miter';
  assertEq(s.strokeLinejoin, 'miter', 'stroke-linejoin: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('stroke-linejoin'), 'miter', 'stroke-linejoin: getPropertyValue matches accessor');
  s.strokeLinejoin = 'bevel';
  assertEq(s.strokeLinejoin, 'bevel', 'stroke-linejoin: overwrite with second value');
  s.removeProperty('stroke-linejoin');
  assertEq(s.strokeLinejoin, '', 'stroke-linejoin: removeProperty clears value');
  s.setProperty('stroke-linejoin', 'inherit');
  assertEq(s.getPropertyValue('stroke-linejoin'), 'inherit', 'stroke-linejoin: accepts inherit');
  s.strokeLinejoin = '';
  assertEq(s.strokeLinejoin, '', 'stroke-linejoin: empty string removes');
  s.strokeLinejoin = 'miter';
  s.strokeLinejoin = 'definitely-not-a-valid-value-xyz';
  assertEq(s.strokeLinejoin, 'miter', 'stroke-linejoin: rejects invalid keyword');
}

// --- stroke-miterlimit ---
{
  const s = fresh();
  s.strokeMiterlimit = 'initial';
  assertEq(s.strokeMiterlimit, 'initial', 'stroke-miterlimit: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('stroke-miterlimit'), 'initial', 'stroke-miterlimit: getPropertyValue matches accessor');
  s.strokeMiterlimit = 'inherit';
  assertEq(s.strokeMiterlimit, 'inherit', 'stroke-miterlimit: overwrite with second value');
  s.removeProperty('stroke-miterlimit');
  assertEq(s.strokeMiterlimit, '', 'stroke-miterlimit: removeProperty clears value');
  s.setProperty('stroke-miterlimit', 'inherit');
  assertEq(s.getPropertyValue('stroke-miterlimit'), 'inherit', 'stroke-miterlimit: accepts inherit');
  s.strokeMiterlimit = '';
  assertEq(s.strokeMiterlimit, '', 'stroke-miterlimit: empty string removes');
}

// --- stroke-opacity ---
{
  const s = fresh();
  s.strokeOpacity = '1';
  assertEq(s.strokeOpacity, '1', 'stroke-opacity: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('stroke-opacity'), '1', 'stroke-opacity: getPropertyValue matches accessor');
  s.strokeOpacity = '2';
  assertEq(s.strokeOpacity, '2', 'stroke-opacity: overwrite with second value');
  s.removeProperty('stroke-opacity');
  assertEq(s.strokeOpacity, '', 'stroke-opacity: removeProperty clears value');
  s.setProperty('stroke-opacity', 'inherit');
  assertEq(s.getPropertyValue('stroke-opacity'), 'inherit', 'stroke-opacity: accepts inherit');
  s.strokeOpacity = '';
  assertEq(s.strokeOpacity, '', 'stroke-opacity: empty string removes');
}

// --- stroke-width ---
{
  const s = fresh();
  s.strokeWidth = '10px';
  assertEq(s.strokeWidth, '10px', 'stroke-width: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('stroke-width'), '10px', 'stroke-width: getPropertyValue matches accessor');
  s.strokeWidth = '20px';
  assertEq(s.strokeWidth, '20px', 'stroke-width: overwrite with second value');
  s.removeProperty('stroke-width');
  assertEq(s.strokeWidth, '', 'stroke-width: removeProperty clears value');
  s.setProperty('stroke-width', 'inherit');
  assertEq(s.getPropertyValue('stroke-width'), 'inherit', 'stroke-width: accepts inherit');
  s.strokeWidth = '';
  assertEq(s.strokeWidth, '', 'stroke-width: empty string removes');
}

// --- table-layout ---
{
  const s = fresh();
  s.tableLayout = 'auto';
  assertEq(s.tableLayout, 'auto', 'table-layout: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('table-layout'), 'auto', 'table-layout: getPropertyValue matches accessor');
  s.tableLayout = 'fixed';
  assertEq(s.tableLayout, 'fixed', 'table-layout: overwrite with second value');
  s.removeProperty('table-layout');
  assertEq(s.tableLayout, '', 'table-layout: removeProperty clears value');
  s.setProperty('table-layout', 'inherit');
  assertEq(s.getPropertyValue('table-layout'), 'inherit', 'table-layout: accepts inherit');
  s.tableLayout = '';
  assertEq(s.tableLayout, '', 'table-layout: empty string removes');
  s.tableLayout = 'auto';
  s.tableLayout = 'definitely-not-a-valid-value-xyz';
  assertEq(s.tableLayout, 'auto', 'table-layout: rejects invalid keyword');
}

// --- tab-size ---
{
  const s = fresh();
  s.tabSize = '1';
  assertEq(s.tabSize, '1', 'tab-size: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('tab-size'), '1', 'tab-size: getPropertyValue matches accessor');
  s.tabSize = '2';
  assertEq(s.tabSize, '2', 'tab-size: overwrite with second value');
  s.removeProperty('tab-size');
  assertEq(s.tabSize, '', 'tab-size: removeProperty clears value');
  s.setProperty('tab-size', 'inherit');
  assertEq(s.getPropertyValue('tab-size'), 'inherit', 'tab-size: accepts inherit');
  s.tabSize = '';
  assertEq(s.tabSize, '', 'tab-size: empty string removes');
}

// --- text-align ---
{
  const s = fresh();
  s.textAlign = 'left';
  assertEq(s.textAlign, 'left', 'text-align: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('text-align'), 'left', 'text-align: getPropertyValue matches accessor');
  s.textAlign = 'right';
  assertEq(s.textAlign, 'right', 'text-align: overwrite with second value');
  s.removeProperty('text-align');
  assertEq(s.textAlign, '', 'text-align: removeProperty clears value');
  s.setProperty('text-align', 'inherit');
  assertEq(s.getPropertyValue('text-align'), 'inherit', 'text-align: accepts inherit');
  s.textAlign = '';
  assertEq(s.textAlign, '', 'text-align: empty string removes');
  s.textAlign = 'left';
  s.textAlign = 'definitely-not-a-valid-value-xyz';
  assertEq(s.textAlign, 'left', 'text-align: rejects invalid keyword');
}

// --- text-align-last ---
{
  const s = fresh();
  s.textAlignLast = 'auto';
  assertEq(s.textAlignLast, 'auto', 'text-align-last: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('text-align-last'), 'auto', 'text-align-last: getPropertyValue matches accessor');
  s.textAlignLast = 'start';
  assertEq(s.textAlignLast, 'start', 'text-align-last: overwrite with second value');
  s.removeProperty('text-align-last');
  assertEq(s.textAlignLast, '', 'text-align-last: removeProperty clears value');
  s.setProperty('text-align-last', 'inherit');
  assertEq(s.getPropertyValue('text-align-last'), 'inherit', 'text-align-last: accepts inherit');
  s.textAlignLast = '';
  assertEq(s.textAlignLast, '', 'text-align-last: empty string removes');
  s.textAlignLast = 'auto';
  s.textAlignLast = 'definitely-not-a-valid-value-xyz';
  assertEq(s.textAlignLast, 'auto', 'text-align-last: rejects invalid keyword');
}

// --- text-anchor ---
{
  const s = fresh();
  s.textAnchor = 'start';
  assertEq(s.textAnchor, 'start', 'text-anchor: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('text-anchor'), 'start', 'text-anchor: getPropertyValue matches accessor');
  s.textAnchor = 'middle';
  assertEq(s.textAnchor, 'middle', 'text-anchor: overwrite with second value');
  s.removeProperty('text-anchor');
  assertEq(s.textAnchor, '', 'text-anchor: removeProperty clears value');
  s.setProperty('text-anchor', 'inherit');
  assertEq(s.getPropertyValue('text-anchor'), 'inherit', 'text-anchor: accepts inherit');
  s.textAnchor = '';
  assertEq(s.textAnchor, '', 'text-anchor: empty string removes');
  s.textAnchor = 'start';
  s.textAnchor = 'definitely-not-a-valid-value-xyz';
  assertEq(s.textAnchor, 'start', 'text-anchor: rejects invalid keyword');
}

// --- text-autospace ---
{
  const s = fresh();
  s.textAutospace = 'no-autospace';
  assertEq(s.textAutospace, 'no-autospace', 'text-autospace: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('text-autospace'), 'no-autospace', 'text-autospace: getPropertyValue matches accessor');
  s.textAutospace = 'normal';
  assertEq(s.textAutospace, 'normal', 'text-autospace: overwrite with second value');
  s.removeProperty('text-autospace');
  assertEq(s.textAutospace, '', 'text-autospace: removeProperty clears value');
  s.setProperty('text-autospace', 'inherit');
  assertEq(s.getPropertyValue('text-autospace'), 'inherit', 'text-autospace: accepts inherit');
  s.textAutospace = '';
  assertEq(s.textAutospace, '', 'text-autospace: empty string removes');
  s.textAutospace = 'no-autospace';
  s.textAutospace = 'definitely-not-a-valid-value-xyz';
  assertEq(s.textAutospace, 'no-autospace', 'text-autospace: rejects invalid keyword');
}

// --- text-box-edge ---
{
  const s = fresh();
  s.textBoxEdge = 'initial';
  assertEq(s.textBoxEdge, 'initial', 'text-box-edge: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('text-box-edge'), 'initial', 'text-box-edge: getPropertyValue matches accessor');
  s.textBoxEdge = 'inherit';
  assertEq(s.textBoxEdge, 'inherit', 'text-box-edge: overwrite with second value');
  s.removeProperty('text-box-edge');
  assertEq(s.textBoxEdge, '', 'text-box-edge: removeProperty clears value');
  s.setProperty('text-box-edge', 'inherit');
  assertEq(s.getPropertyValue('text-box-edge'), 'inherit', 'text-box-edge: accepts inherit');
  s.textBoxEdge = '';
  assertEq(s.textBoxEdge, '', 'text-box-edge: empty string removes');
}

// --- text-box-trim ---
{
  const s = fresh();
  s.textBoxTrim = 'none';
  assertEq(s.textBoxTrim, 'none', 'text-box-trim: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('text-box-trim'), 'none', 'text-box-trim: getPropertyValue matches accessor');
  s.textBoxTrim = 'trim-start';
  assertEq(s.textBoxTrim, 'trim-start', 'text-box-trim: overwrite with second value');
  s.removeProperty('text-box-trim');
  assertEq(s.textBoxTrim, '', 'text-box-trim: removeProperty clears value');
  s.setProperty('text-box-trim', 'inherit');
  assertEq(s.getPropertyValue('text-box-trim'), 'inherit', 'text-box-trim: accepts inherit');
  s.textBoxTrim = '';
  assertEq(s.textBoxTrim, '', 'text-box-trim: empty string removes');
  s.textBoxTrim = 'none';
  s.textBoxTrim = 'definitely-not-a-valid-value-xyz';
  assertEq(s.textBoxTrim, 'none', 'text-box-trim: rejects invalid keyword');
}

// --- text-combine-upright ---
{
  const s = fresh();
  s.textCombineUpright = 'none';
  assertEq(s.textCombineUpright, 'none', 'text-combine-upright: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('text-combine-upright'), 'none', 'text-combine-upright: getPropertyValue matches accessor');
  s.textCombineUpright = 'all';
  assertEq(s.textCombineUpright, 'all', 'text-combine-upright: overwrite with second value');
  s.removeProperty('text-combine-upright');
  assertEq(s.textCombineUpright, '', 'text-combine-upright: removeProperty clears value');
  s.setProperty('text-combine-upright', 'inherit');
  assertEq(s.getPropertyValue('text-combine-upright'), 'inherit', 'text-combine-upright: accepts inherit');
  s.textCombineUpright = '';
  assertEq(s.textCombineUpright, '', 'text-combine-upright: empty string removes');
  s.textCombineUpright = 'none';
  s.textCombineUpright = 'definitely-not-a-valid-value-xyz';
  assertEq(s.textCombineUpright, 'none', 'text-combine-upright: rejects invalid keyword');
}

// --- text-decoration-color ---
{
  const s = fresh();
  s.textDecorationColor = 'red';
  assertEq(s.textDecorationColor, 'red', 'text-decoration-color: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('text-decoration-color'), 'red', 'text-decoration-color: getPropertyValue matches accessor');
  s.textDecorationColor = 'blue';
  assertEq(s.textDecorationColor, 'blue', 'text-decoration-color: overwrite with second value');
  s.removeProperty('text-decoration-color');
  assertEq(s.textDecorationColor, '', 'text-decoration-color: removeProperty clears value');
  s.setProperty('text-decoration-color', 'inherit');
  assertEq(s.getPropertyValue('text-decoration-color'), 'inherit', 'text-decoration-color: accepts inherit');
  s.textDecorationColor = '';
  assertEq(s.textDecorationColor, '', 'text-decoration-color: empty string removes');
}

// --- text-decoration-line ---
{
  const s = fresh();
  s.textDecorationLine = 'none';
  assertEq(s.textDecorationLine, 'none', 'text-decoration-line: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('text-decoration-line'), 'none', 'text-decoration-line: getPropertyValue matches accessor');
  s.textDecorationLine = 'underline';
  assertEq(s.textDecorationLine, 'underline', 'text-decoration-line: overwrite with second value');
  s.removeProperty('text-decoration-line');
  assertEq(s.textDecorationLine, '', 'text-decoration-line: removeProperty clears value');
  s.setProperty('text-decoration-line', 'inherit');
  assertEq(s.getPropertyValue('text-decoration-line'), 'inherit', 'text-decoration-line: accepts inherit');
  s.textDecorationLine = '';
  assertEq(s.textDecorationLine, '', 'text-decoration-line: empty string removes');
  s.textDecorationLine = 'none';
  s.textDecorationLine = 'definitely-not-a-valid-value-xyz';
  assertEq(s.textDecorationLine, 'none', 'text-decoration-line: rejects invalid keyword');
}

// --- text-decoration-skip-ink ---
{
  const s = fresh();
  s.textDecorationSkipInk = 'none';
  assertEq(s.textDecorationSkipInk, 'none', 'text-decoration-skip-ink: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('text-decoration-skip-ink'), 'none', 'text-decoration-skip-ink: getPropertyValue matches accessor');
  s.textDecorationSkipInk = 'auto';
  assertEq(s.textDecorationSkipInk, 'auto', 'text-decoration-skip-ink: overwrite with second value');
  s.removeProperty('text-decoration-skip-ink');
  assertEq(s.textDecorationSkipInk, '', 'text-decoration-skip-ink: removeProperty clears value');
  s.setProperty('text-decoration-skip-ink', 'inherit');
  assertEq(s.getPropertyValue('text-decoration-skip-ink'), 'inherit', 'text-decoration-skip-ink: accepts inherit');
  s.textDecorationSkipInk = '';
  assertEq(s.textDecorationSkipInk, '', 'text-decoration-skip-ink: empty string removes');
  s.textDecorationSkipInk = 'none';
  s.textDecorationSkipInk = 'definitely-not-a-valid-value-xyz';
  assertEq(s.textDecorationSkipInk, 'none', 'text-decoration-skip-ink: rejects invalid keyword');
}

// --- text-decoration-style ---
{
  const s = fresh();
  s.textDecorationStyle = 'solid';
  assertEq(s.textDecorationStyle, 'solid', 'text-decoration-style: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('text-decoration-style'), 'solid', 'text-decoration-style: getPropertyValue matches accessor');
  s.textDecorationStyle = 'double';
  assertEq(s.textDecorationStyle, 'double', 'text-decoration-style: overwrite with second value');
  s.removeProperty('text-decoration-style');
  assertEq(s.textDecorationStyle, '', 'text-decoration-style: removeProperty clears value');
  s.setProperty('text-decoration-style', 'inherit');
  assertEq(s.getPropertyValue('text-decoration-style'), 'inherit', 'text-decoration-style: accepts inherit');
  s.textDecorationStyle = '';
  assertEq(s.textDecorationStyle, '', 'text-decoration-style: empty string removes');
  s.textDecorationStyle = 'solid';
  s.textDecorationStyle = 'definitely-not-a-valid-value-xyz';
  assertEq(s.textDecorationStyle, 'solid', 'text-decoration-style: rejects invalid keyword');
}

// --- text-decoration-thickness ---
{
  const s = fresh();
  s.textDecorationThickness = 'auto';
  assertEq(s.textDecorationThickness, 'auto', 'text-decoration-thickness: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('text-decoration-thickness'), 'auto', 'text-decoration-thickness: getPropertyValue matches accessor');
  s.textDecorationThickness = 'from-font';
  assertEq(s.textDecorationThickness, 'from-font', 'text-decoration-thickness: overwrite with second value');
  s.removeProperty('text-decoration-thickness');
  assertEq(s.textDecorationThickness, '', 'text-decoration-thickness: removeProperty clears value');
  s.setProperty('text-decoration-thickness', 'inherit');
  assertEq(s.getPropertyValue('text-decoration-thickness'), 'inherit', 'text-decoration-thickness: accepts inherit');
  s.textDecorationThickness = '';
  assertEq(s.textDecorationThickness, '', 'text-decoration-thickness: empty string removes');
}

// --- text-indent ---
{
  const s = fresh();
  s.textIndent = '10px';
  assertEq(s.textIndent, '10px', 'text-indent: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('text-indent'), '10px', 'text-indent: getPropertyValue matches accessor');
  s.textIndent = '20px';
  assertEq(s.textIndent, '20px', 'text-indent: overwrite with second value');
  s.removeProperty('text-indent');
  assertEq(s.textIndent, '', 'text-indent: removeProperty clears value');
  s.setProperty('text-indent', 'inherit');
  assertEq(s.getPropertyValue('text-indent'), 'inherit', 'text-indent: accepts inherit');
  s.textIndent = '';
  assertEq(s.textIndent, '', 'text-indent: empty string removes');
}

// --- text-justify ---
{
  const s = fresh();
  s.textJustify = 'auto';
  assertEq(s.textJustify, 'auto', 'text-justify: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('text-justify'), 'auto', 'text-justify: getPropertyValue matches accessor');
  s.textJustify = 'none';
  assertEq(s.textJustify, 'none', 'text-justify: overwrite with second value');
  s.removeProperty('text-justify');
  assertEq(s.textJustify, '', 'text-justify: removeProperty clears value');
  s.setProperty('text-justify', 'inherit');
  assertEq(s.getPropertyValue('text-justify'), 'inherit', 'text-justify: accepts inherit');
  s.textJustify = '';
  assertEq(s.textJustify, '', 'text-justify: empty string removes');
  s.textJustify = 'auto';
  s.textJustify = 'definitely-not-a-valid-value-xyz';
  assertEq(s.textJustify, 'auto', 'text-justify: rejects invalid keyword');
}

// --- text-overflow ---
{
  const s = fresh();
  s.textOverflow = 'clip';
  assertEq(s.textOverflow, 'clip', 'text-overflow: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('text-overflow'), 'clip', 'text-overflow: getPropertyValue matches accessor');
  s.textOverflow = 'ellipsis';
  assertEq(s.textOverflow, 'ellipsis', 'text-overflow: overwrite with second value');
  s.removeProperty('text-overflow');
  assertEq(s.textOverflow, '', 'text-overflow: removeProperty clears value');
  s.setProperty('text-overflow', 'inherit');
  assertEq(s.getPropertyValue('text-overflow'), 'inherit', 'text-overflow: accepts inherit');
  s.textOverflow = '';
  assertEq(s.textOverflow, '', 'text-overflow: empty string removes');
  s.textOverflow = 'clip';
  s.textOverflow = 'definitely-not-a-valid-value-xyz';
  assertEq(s.textOverflow, 'clip', 'text-overflow: rejects invalid keyword');
}

// --- text-shadow ---
{
  const s = fresh();
  s.textShadow = 'none';
  assertEq(s.textShadow, 'none', 'text-shadow: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('text-shadow'), 'none', 'text-shadow: getPropertyValue matches accessor');
  s.textShadow = 'inherit';
  assertEq(s.textShadow, 'inherit', 'text-shadow: overwrite with second value');
  s.removeProperty('text-shadow');
  assertEq(s.textShadow, '', 'text-shadow: removeProperty clears value');
  s.setProperty('text-shadow', 'inherit');
  assertEq(s.getPropertyValue('text-shadow'), 'inherit', 'text-shadow: accepts inherit');
  s.textShadow = '';
  assertEq(s.textShadow, '', 'text-shadow: empty string removes');
  s.textShadow = 'none';
  s.textShadow = 'definitely-not-a-valid-value-xyz';
  assertEq(s.textShadow, 'none', 'text-shadow: rejects invalid keyword');
}

// --- text-size-adjust ---
{
  const s = fresh();
  s.textSizeAdjust = 'none';
  assertEq(s.textSizeAdjust, 'none', 'text-size-adjust: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('text-size-adjust'), 'none', 'text-size-adjust: getPropertyValue matches accessor');
  s.textSizeAdjust = 'auto';
  assertEq(s.textSizeAdjust, 'auto', 'text-size-adjust: overwrite with second value');
  s.removeProperty('text-size-adjust');
  assertEq(s.textSizeAdjust, '', 'text-size-adjust: removeProperty clears value');
  s.setProperty('text-size-adjust', 'inherit');
  assertEq(s.getPropertyValue('text-size-adjust'), 'inherit', 'text-size-adjust: accepts inherit');
  s.textSizeAdjust = '';
  assertEq(s.textSizeAdjust, '', 'text-size-adjust: empty string removes');
}

// --- text-spacing-trim ---
{
  const s = fresh();
  s.textSpacingTrim = 'normal';
  assertEq(s.textSpacingTrim, 'normal', 'text-spacing-trim: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('text-spacing-trim'), 'normal', 'text-spacing-trim: getPropertyValue matches accessor');
  s.textSpacingTrim = 'space-all';
  assertEq(s.textSpacingTrim, 'space-all', 'text-spacing-trim: overwrite with second value');
  s.removeProperty('text-spacing-trim');
  assertEq(s.textSpacingTrim, '', 'text-spacing-trim: removeProperty clears value');
  s.setProperty('text-spacing-trim', 'inherit');
  assertEq(s.getPropertyValue('text-spacing-trim'), 'inherit', 'text-spacing-trim: accepts inherit');
  s.textSpacingTrim = '';
  assertEq(s.textSpacingTrim, '', 'text-spacing-trim: empty string removes');
  s.textSpacingTrim = 'normal';
  s.textSpacingTrim = 'definitely-not-a-valid-value-xyz';
  assertEq(s.textSpacingTrim, 'normal', 'text-spacing-trim: rejects invalid keyword');
}

// --- text-transform ---
{
  const s = fresh();
  s.textTransform = 'none';
  assertEq(s.textTransform, 'none', 'text-transform: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('text-transform'), 'none', 'text-transform: getPropertyValue matches accessor');
  s.textTransform = 'capitalize';
  assertEq(s.textTransform, 'capitalize', 'text-transform: overwrite with second value');
  s.removeProperty('text-transform');
  assertEq(s.textTransform, '', 'text-transform: removeProperty clears value');
  s.setProperty('text-transform', 'inherit');
  assertEq(s.getPropertyValue('text-transform'), 'inherit', 'text-transform: accepts inherit');
  s.textTransform = '';
  assertEq(s.textTransform, '', 'text-transform: empty string removes');
  s.textTransform = 'none';
  s.textTransform = 'definitely-not-a-valid-value-xyz';
  assertEq(s.textTransform, 'none', 'text-transform: rejects invalid keyword');
}

// --- text-underline-offset ---
{
  const s = fresh();
  s.textUnderlineOffset = 'auto';
  assertEq(s.textUnderlineOffset, 'auto', 'text-underline-offset: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('text-underline-offset'), 'auto', 'text-underline-offset: getPropertyValue matches accessor');
  s.textUnderlineOffset = 'inherit';
  assertEq(s.textUnderlineOffset, 'inherit', 'text-underline-offset: overwrite with second value');
  s.removeProperty('text-underline-offset');
  assertEq(s.textUnderlineOffset, '', 'text-underline-offset: removeProperty clears value');
  s.setProperty('text-underline-offset', 'inherit');
  assertEq(s.getPropertyValue('text-underline-offset'), 'inherit', 'text-underline-offset: accepts inherit');
  s.textUnderlineOffset = '';
  assertEq(s.textUnderlineOffset, '', 'text-underline-offset: empty string removes');
}

// --- text-underline-position ---
{
  const s = fresh();
  s.textUnderlinePosition = 'auto';
  assertEq(s.textUnderlinePosition, 'auto', 'text-underline-position: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('text-underline-position'), 'auto', 'text-underline-position: getPropertyValue matches accessor');
  s.textUnderlinePosition = 'from-font';
  assertEq(s.textUnderlinePosition, 'from-font', 'text-underline-position: overwrite with second value');
  s.removeProperty('text-underline-position');
  assertEq(s.textUnderlinePosition, '', 'text-underline-position: removeProperty clears value');
  s.setProperty('text-underline-position', 'inherit');
  assertEq(s.getPropertyValue('text-underline-position'), 'inherit', 'text-underline-position: accepts inherit');
  s.textUnderlinePosition = '';
  assertEq(s.textUnderlinePosition, '', 'text-underline-position: empty string removes');
  s.textUnderlinePosition = 'auto';
  s.textUnderlinePosition = 'definitely-not-a-valid-value-xyz';
  assertEq(s.textUnderlinePosition, 'auto', 'text-underline-position: rejects invalid keyword');
}

// --- timeline-scope ---
{
  const s = fresh();
  s.timelineScope = 'initial';
  assertEq(s.timelineScope, 'initial', 'timeline-scope: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('timeline-scope'), 'initial', 'timeline-scope: getPropertyValue matches accessor');
  s.timelineScope = 'inherit';
  assertEq(s.timelineScope, 'inherit', 'timeline-scope: overwrite with second value');
  s.removeProperty('timeline-scope');
  assertEq(s.timelineScope, '', 'timeline-scope: removeProperty clears value');
  s.setProperty('timeline-scope', 'inherit');
  assertEq(s.getPropertyValue('timeline-scope'), 'inherit', 'timeline-scope: accepts inherit');
  s.timelineScope = '';
  assertEq(s.timelineScope, '', 'timeline-scope: empty string removes');
}

// --- top ---
{
  const s = fresh();
  s.top = '10px';
  assertEq(s.top, '10px', 'top: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('top'), '10px', 'top: getPropertyValue matches accessor');
  s.top = '20px';
  assertEq(s.top, '20px', 'top: overwrite with second value');
  s.removeProperty('top');
  assertEq(s.top, '', 'top: removeProperty clears value');
  s.setProperty('top', 'inherit');
  assertEq(s.getPropertyValue('top'), 'inherit', 'top: accepts inherit');
  s.top = '';
  assertEq(s.top, '', 'top: empty string removes');
}

// --- overlay ---
{
  const s = fresh();
  s.overlay = 'none';
  assertEq(s.overlay, 'none', 'overlay: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('overlay'), 'none', 'overlay: getPropertyValue matches accessor');
  s.overlay = 'auto';
  assertEq(s.overlay, 'auto', 'overlay: overwrite with second value');
  s.removeProperty('overlay');
  assertEq(s.overlay, '', 'overlay: removeProperty clears value');
  s.setProperty('overlay', 'inherit');
  assertEq(s.getPropertyValue('overlay'), 'inherit', 'overlay: accepts inherit');
  s.overlay = '';
  assertEq(s.overlay, '', 'overlay: empty string removes');
  s.overlay = 'none';
  s.overlay = 'definitely-not-a-valid-value-xyz';
  assertEq(s.overlay, 'none', 'overlay: rejects invalid keyword');
}

// --- touch-action ---
{
  const s = fresh();
  s.touchAction = 'auto';
  assertEq(s.touchAction, 'auto', 'touch-action: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('touch-action'), 'auto', 'touch-action: getPropertyValue matches accessor');
  s.touchAction = 'none';
  assertEq(s.touchAction, 'none', 'touch-action: overwrite with second value');
  s.removeProperty('touch-action');
  assertEq(s.touchAction, '', 'touch-action: removeProperty clears value');
  s.setProperty('touch-action', 'inherit');
  assertEq(s.getPropertyValue('touch-action'), 'inherit', 'touch-action: accepts inherit');
  s.touchAction = '';
  assertEq(s.touchAction, '', 'touch-action: empty string removes');
  s.touchAction = 'auto';
  s.touchAction = 'definitely-not-a-valid-value-xyz';
  assertEq(s.touchAction, 'auto', 'touch-action: rejects invalid keyword');
}

// --- transform ---
{
  const s = fresh();
  s.transform = 'none';
  assertEq(s.transform, 'none', 'transform: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('transform'), 'none', 'transform: getPropertyValue matches accessor');
  s.transform = 'inherit';
  assertEq(s.transform, 'inherit', 'transform: overwrite with second value');
  s.removeProperty('transform');
  assertEq(s.transform, '', 'transform: removeProperty clears value');
  s.setProperty('transform', 'inherit');
  assertEq(s.getPropertyValue('transform'), 'inherit', 'transform: accepts inherit');
  s.transform = '';
  assertEq(s.transform, '', 'transform: empty string removes');
}

// --- transform-box ---
{
  const s = fresh();
  s.transformBox = 'content-box';
  assertEq(s.transformBox, 'content-box', 'transform-box: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('transform-box'), 'content-box', 'transform-box: getPropertyValue matches accessor');
  s.transformBox = 'border-box';
  assertEq(s.transformBox, 'border-box', 'transform-box: overwrite with second value');
  s.removeProperty('transform-box');
  assertEq(s.transformBox, '', 'transform-box: removeProperty clears value');
  s.setProperty('transform-box', 'inherit');
  assertEq(s.getPropertyValue('transform-box'), 'inherit', 'transform-box: accepts inherit');
  s.transformBox = '';
  assertEq(s.transformBox, '', 'transform-box: empty string removes');
  s.transformBox = 'content-box';
  s.transformBox = 'definitely-not-a-valid-value-xyz';
  assertEq(s.transformBox, 'content-box', 'transform-box: rejects invalid keyword');
}

// --- transform-origin ---
{
  const s = fresh();
  s.transformOrigin = 'initial';
  assertEq(s.transformOrigin, 'initial', 'transform-origin: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('transform-origin'), 'initial', 'transform-origin: getPropertyValue matches accessor');
  s.transformOrigin = 'inherit';
  assertEq(s.transformOrigin, 'inherit', 'transform-origin: overwrite with second value');
  s.removeProperty('transform-origin');
  assertEq(s.transformOrigin, '', 'transform-origin: removeProperty clears value');
  s.setProperty('transform-origin', 'inherit');
  assertEq(s.getPropertyValue('transform-origin'), 'inherit', 'transform-origin: accepts inherit');
  s.transformOrigin = '';
  assertEq(s.transformOrigin, '', 'transform-origin: empty string removes');
}

// --- transform-style ---
{
  const s = fresh();
  s.transformStyle = 'flat';
  assertEq(s.transformStyle, 'flat', 'transform-style: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('transform-style'), 'flat', 'transform-style: getPropertyValue matches accessor');
  s.transformStyle = 'preserve-3d';
  assertEq(s.transformStyle, 'preserve-3d', 'transform-style: overwrite with second value');
  s.removeProperty('transform-style');
  assertEq(s.transformStyle, '', 'transform-style: removeProperty clears value');
  s.setProperty('transform-style', 'inherit');
  assertEq(s.getPropertyValue('transform-style'), 'inherit', 'transform-style: accepts inherit');
  s.transformStyle = '';
  assertEq(s.transformStyle, '', 'transform-style: empty string removes');
  s.transformStyle = 'flat';
  s.transformStyle = 'definitely-not-a-valid-value-xyz';
  assertEq(s.transformStyle, 'flat', 'transform-style: rejects invalid keyword');
}

// --- translate ---
{
  const s = fresh();
  s.translate = 'initial';
  assertEq(s.translate, 'initial', 'translate: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('translate'), 'initial', 'translate: getPropertyValue matches accessor');
  s.translate = 'inherit';
  assertEq(s.translate, 'inherit', 'translate: overwrite with second value');
  s.removeProperty('translate');
  assertEq(s.translate, '', 'translate: removeProperty clears value');
  s.setProperty('translate', 'inherit');
  assertEq(s.getPropertyValue('translate'), 'inherit', 'translate: accepts inherit');
  s.translate = '';
  assertEq(s.translate, '', 'translate: empty string removes');
}

// --- rotate ---
{
  const s = fresh();
  s.rotate = 'initial';
  assertEq(s.rotate, 'initial', 'rotate: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('rotate'), 'initial', 'rotate: getPropertyValue matches accessor');
  s.rotate = 'inherit';
  assertEq(s.rotate, 'inherit', 'rotate: overwrite with second value');
  s.removeProperty('rotate');
  assertEq(s.rotate, '', 'rotate: removeProperty clears value');
  s.setProperty('rotate', 'inherit');
  assertEq(s.getPropertyValue('rotate'), 'inherit', 'rotate: accepts inherit');
  s.rotate = '';
  assertEq(s.rotate, '', 'rotate: empty string removes');
}

// --- scale ---
{
  const s = fresh();
  s.scale = 'initial';
  assertEq(s.scale, 'initial', 'scale: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('scale'), 'initial', 'scale: getPropertyValue matches accessor');
  s.scale = 'inherit';
  assertEq(s.scale, 'inherit', 'scale: overwrite with second value');
  s.removeProperty('scale');
  assertEq(s.scale, '', 'scale: removeProperty clears value');
  s.setProperty('scale', 'inherit');
  assertEq(s.getPropertyValue('scale'), 'inherit', 'scale: accepts inherit');
  s.scale = '';
  assertEq(s.scale, '', 'scale: empty string removes');
}

// --- unicode-bidi ---
{
  const s = fresh();
  s.unicodeBidi = 'normal';
  assertEq(s.unicodeBidi, 'normal', 'unicode-bidi: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('unicode-bidi'), 'normal', 'unicode-bidi: getPropertyValue matches accessor');
  s.unicodeBidi = 'embed';
  assertEq(s.unicodeBidi, 'embed', 'unicode-bidi: overwrite with second value');
  s.removeProperty('unicode-bidi');
  assertEq(s.unicodeBidi, '', 'unicode-bidi: removeProperty clears value');
  s.setProperty('unicode-bidi', 'inherit');
  assertEq(s.getPropertyValue('unicode-bidi'), 'inherit', 'unicode-bidi: accepts inherit');
  s.unicodeBidi = '';
  assertEq(s.unicodeBidi, '', 'unicode-bidi: empty string removes');
  s.unicodeBidi = 'normal';
  s.unicodeBidi = 'definitely-not-a-valid-value-xyz';
  assertEq(s.unicodeBidi, 'normal', 'unicode-bidi: rejects invalid keyword');
}

// --- vector-effect ---
{
  const s = fresh();
  s.vectorEffect = 'none';
  assertEq(s.vectorEffect, 'none', 'vector-effect: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('vector-effect'), 'none', 'vector-effect: getPropertyValue matches accessor');
  s.vectorEffect = 'non-scaling-stroke';
  assertEq(s.vectorEffect, 'non-scaling-stroke', 'vector-effect: overwrite with second value');
  s.removeProperty('vector-effect');
  assertEq(s.vectorEffect, '', 'vector-effect: removeProperty clears value');
  s.setProperty('vector-effect', 'inherit');
  assertEq(s.getPropertyValue('vector-effect'), 'inherit', 'vector-effect: accepts inherit');
  s.vectorEffect = '';
  assertEq(s.vectorEffect, '', 'vector-effect: empty string removes');
  s.vectorEffect = 'none';
  s.vectorEffect = 'definitely-not-a-valid-value-xyz';
  assertEq(s.vectorEffect, 'none', 'vector-effect: rejects invalid keyword');
}

// --- vertical-align ---
{
  const s = fresh();
  s.verticalAlign = 'baseline';
  assertEq(s.verticalAlign, 'baseline', 'vertical-align: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('vertical-align'), 'baseline', 'vertical-align: getPropertyValue matches accessor');
  s.verticalAlign = 'sub';
  assertEq(s.verticalAlign, 'sub', 'vertical-align: overwrite with second value');
  s.removeProperty('vertical-align');
  assertEq(s.verticalAlign, '', 'vertical-align: removeProperty clears value');
  s.setProperty('vertical-align', 'inherit');
  assertEq(s.getPropertyValue('vertical-align'), 'inherit', 'vertical-align: accepts inherit');
  s.verticalAlign = '';
  assertEq(s.verticalAlign, '', 'vertical-align: empty string removes');
}

// --- view-timeline-axis ---
{
  const s = fresh();
  s.viewTimelineAxis = 'initial';
  assertEq(s.viewTimelineAxis, 'initial', 'view-timeline-axis: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('view-timeline-axis'), 'initial', 'view-timeline-axis: getPropertyValue matches accessor');
  s.viewTimelineAxis = 'inherit';
  assertEq(s.viewTimelineAxis, 'inherit', 'view-timeline-axis: overwrite with second value');
  s.removeProperty('view-timeline-axis');
  assertEq(s.viewTimelineAxis, '', 'view-timeline-axis: removeProperty clears value');
  s.setProperty('view-timeline-axis', 'inherit');
  assertEq(s.getPropertyValue('view-timeline-axis'), 'inherit', 'view-timeline-axis: accepts inherit');
  s.viewTimelineAxis = '';
  assertEq(s.viewTimelineAxis, '', 'view-timeline-axis: empty string removes');
}

// --- view-timeline-inset ---
{
  const s = fresh();
  s.viewTimelineInset = 'initial';
  assertEq(s.viewTimelineInset, 'initial', 'view-timeline-inset: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('view-timeline-inset'), 'initial', 'view-timeline-inset: getPropertyValue matches accessor');
  s.viewTimelineInset = 'inherit';
  assertEq(s.viewTimelineInset, 'inherit', 'view-timeline-inset: overwrite with second value');
  s.removeProperty('view-timeline-inset');
  assertEq(s.viewTimelineInset, '', 'view-timeline-inset: removeProperty clears value');
  s.setProperty('view-timeline-inset', 'inherit');
  assertEq(s.getPropertyValue('view-timeline-inset'), 'inherit', 'view-timeline-inset: accepts inherit');
  s.viewTimelineInset = '';
  assertEq(s.viewTimelineInset, '', 'view-timeline-inset: empty string removes');
}

// --- view-timeline-name ---
{
  const s = fresh();
  s.viewTimelineName = 'initial';
  assertEq(s.viewTimelineName, 'initial', 'view-timeline-name: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('view-timeline-name'), 'initial', 'view-timeline-name: getPropertyValue matches accessor');
  s.viewTimelineName = 'inherit';
  assertEq(s.viewTimelineName, 'inherit', 'view-timeline-name: overwrite with second value');
  s.removeProperty('view-timeline-name');
  assertEq(s.viewTimelineName, '', 'view-timeline-name: removeProperty clears value');
  s.setProperty('view-timeline-name', 'inherit');
  assertEq(s.getPropertyValue('view-timeline-name'), 'inherit', 'view-timeline-name: accepts inherit');
  s.viewTimelineName = '';
  assertEq(s.viewTimelineName, '', 'view-timeline-name: empty string removes');
}

// --- view-transition-class ---
{
  const s = fresh();
  s.viewTransitionClass = 'none';
  assertEq(s.viewTransitionClass, 'none', 'view-transition-class: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('view-transition-class'), 'none', 'view-transition-class: getPropertyValue matches accessor');
  s.viewTransitionClass = 'inherit';
  assertEq(s.viewTransitionClass, 'inherit', 'view-transition-class: overwrite with second value');
  s.removeProperty('view-transition-class');
  assertEq(s.viewTransitionClass, '', 'view-transition-class: removeProperty clears value');
  s.setProperty('view-transition-class', 'inherit');
  assertEq(s.getPropertyValue('view-transition-class'), 'inherit', 'view-transition-class: accepts inherit');
  s.viewTransitionClass = '';
  assertEq(s.viewTransitionClass, '', 'view-transition-class: empty string removes');
  s.viewTransitionClass = 'none';
  s.viewTransitionClass = 'definitely-not-a-valid-value-xyz';
  assertEq(s.viewTransitionClass, 'none', 'view-transition-class: rejects invalid keyword');
}

// --- view-transition-group ---
{
  const s = fresh();
  s.viewTransitionGroup = 'normal';
  assertEq(s.viewTransitionGroup, 'normal', 'view-transition-group: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('view-transition-group'), 'normal', 'view-transition-group: getPropertyValue matches accessor');
  s.viewTransitionGroup = 'contain';
  assertEq(s.viewTransitionGroup, 'contain', 'view-transition-group: overwrite with second value');
  s.removeProperty('view-transition-group');
  assertEq(s.viewTransitionGroup, '', 'view-transition-group: removeProperty clears value');
  s.setProperty('view-transition-group', 'inherit');
  assertEq(s.getPropertyValue('view-transition-group'), 'inherit', 'view-transition-group: accepts inherit');
  s.viewTransitionGroup = '';
  assertEq(s.viewTransitionGroup, '', 'view-transition-group: empty string removes');
  s.viewTransitionGroup = 'normal';
  s.viewTransitionGroup = 'definitely-not-a-valid-value-xyz';
  assertEq(s.viewTransitionGroup, 'normal', 'view-transition-group: rejects invalid keyword');
}

// --- view-transition-name ---
{
  const s = fresh();
  s.viewTransitionName = 'none';
  assertEq(s.viewTransitionName, 'none', 'view-transition-name: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('view-transition-name'), 'none', 'view-transition-name: getPropertyValue matches accessor');
  s.viewTransitionName = 'auto';
  assertEq(s.viewTransitionName, 'auto', 'view-transition-name: overwrite with second value');
  s.removeProperty('view-transition-name');
  assertEq(s.viewTransitionName, '', 'view-transition-name: removeProperty clears value');
  s.setProperty('view-transition-name', 'inherit');
  assertEq(s.getPropertyValue('view-transition-name'), 'inherit', 'view-transition-name: accepts inherit');
  s.viewTransitionName = '';
  assertEq(s.viewTransitionName, '', 'view-transition-name: empty string removes');
  s.viewTransitionName = 'none';
  s.viewTransitionName = 'definitely-not-a-valid-value-xyz';
  assertEq(s.viewTransitionName, 'none', 'view-transition-name: rejects invalid keyword');
}

// --- view-transition-scope ---
{
  const s = fresh();
  s.viewTransitionScope = 'none';
  assertEq(s.viewTransitionScope, 'none', 'view-transition-scope: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('view-transition-scope'), 'none', 'view-transition-scope: getPropertyValue matches accessor');
  s.viewTransitionScope = 'all';
  assertEq(s.viewTransitionScope, 'all', 'view-transition-scope: overwrite with second value');
  s.removeProperty('view-transition-scope');
  assertEq(s.viewTransitionScope, '', 'view-transition-scope: removeProperty clears value');
  s.setProperty('view-transition-scope', 'inherit');
  assertEq(s.getPropertyValue('view-transition-scope'), 'inherit', 'view-transition-scope: accepts inherit');
  s.viewTransitionScope = '';
  assertEq(s.viewTransitionScope, '', 'view-transition-scope: empty string removes');
  s.viewTransitionScope = 'none';
  s.viewTransitionScope = 'definitely-not-a-valid-value-xyz';
  assertEq(s.viewTransitionScope, 'none', 'view-transition-scope: rejects invalid keyword');
}

// --- visibility ---
{
  const s = fresh();
  s.visibility = 'visible';
  assertEq(s.visibility, 'visible', 'visibility: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('visibility'), 'visible', 'visibility: getPropertyValue matches accessor');
  s.visibility = 'hidden';
  assertEq(s.visibility, 'hidden', 'visibility: overwrite with second value');
  s.removeProperty('visibility');
  assertEq(s.visibility, '', 'visibility: removeProperty clears value');
  s.setProperty('visibility', 'inherit');
  assertEq(s.getPropertyValue('visibility'), 'inherit', 'visibility: accepts inherit');
  s.visibility = '';
  assertEq(s.visibility, '', 'visibility: empty string removes');
  s.visibility = 'visible';
  s.visibility = 'definitely-not-a-valid-value-xyz';
  assertEq(s.visibility, 'visible', 'visibility: rejects invalid keyword');
}

// --- x ---
{
  const s = fresh();
  s.x = '10px';
  assertEq(s.x, '10px', 'x: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('x'), '10px', 'x: getPropertyValue matches accessor');
  s.x = '20px';
  assertEq(s.x, '20px', 'x: overwrite with second value');
  s.removeProperty('x');
  assertEq(s.x, '', 'x: removeProperty clears value');
  s.setProperty('x', 'inherit');
  assertEq(s.getPropertyValue('x'), 'inherit', 'x: accepts inherit');
  s.x = '';
  assertEq(s.x, '', 'x: empty string removes');
}

// --- y ---
{
  const s = fresh();
  s.y = '10px';
  assertEq(s.y, '10px', 'y: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('y'), '10px', 'y: getPropertyValue matches accessor');
  s.y = '20px';
  assertEq(s.y, '20px', 'y: overwrite with second value');
  s.removeProperty('y');
  assertEq(s.y, '', 'y: removeProperty clears value');
  s.setProperty('y', 'inherit');
  assertEq(s.getPropertyValue('y'), 'inherit', 'y: accepts inherit');
  s.y = '';
  assertEq(s.y, '', 'y: empty string removes');
}

// --- appearance ---
{
  const s = fresh();
  s.appearance = 'initial';
  assertEq(s.appearance, 'initial', 'appearance: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('appearance'), 'initial', 'appearance: getPropertyValue matches accessor');
  s.appearance = 'inherit';
  assertEq(s.appearance, 'inherit', 'appearance: overwrite with second value');
  s.removeProperty('appearance');
  assertEq(s.appearance, '', 'appearance: removeProperty clears value');
  s.setProperty('appearance', 'inherit');
  assertEq(s.getPropertyValue('appearance'), 'inherit', 'appearance: accepts inherit');
  s.appearance = '';
  assertEq(s.appearance, '', 'appearance: empty string removes');
}

// --- app-region ---
{
  const s = fresh();
  s.appRegion = 'none';
  assertEq(s.appRegion, 'none', 'app-region: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('app-region'), 'none', 'app-region: getPropertyValue matches accessor');
  s.appRegion = 'drag';
  assertEq(s.appRegion, 'drag', 'app-region: overwrite with second value');
  s.removeProperty('app-region');
  assertEq(s.appRegion, '', 'app-region: removeProperty clears value');
  s.setProperty('app-region', 'inherit');
  assertEq(s.getPropertyValue('app-region'), 'inherit', 'app-region: accepts inherit');
  s.appRegion = '';
  assertEq(s.appRegion, '', 'app-region: empty string removes');
  s.appRegion = 'none';
  s.appRegion = 'definitely-not-a-valid-value-xyz';
  assertEq(s.appRegion, 'none', 'app-region: rejects invalid keyword');
}

// --- -webkit-border-horizontal-spacing ---
{
  const s = fresh();
  s.webkitBorderHorizontalSpacing = 'initial';
  assertEq(s.webkitBorderHorizontalSpacing, 'initial', '-webkit-border-horizontal-spacing: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('-webkit-border-horizontal-spacing'), 'initial', '-webkit-border-horizontal-spacing: getPropertyValue matches accessor');
  s.webkitBorderHorizontalSpacing = 'inherit';
  assertEq(s.webkitBorderHorizontalSpacing, 'inherit', '-webkit-border-horizontal-spacing: overwrite with second value');
  s.removeProperty('-webkit-border-horizontal-spacing');
  assertEq(s.webkitBorderHorizontalSpacing, '', '-webkit-border-horizontal-spacing: removeProperty clears value');
  s.setProperty('-webkit-border-horizontal-spacing', 'inherit');
  assertEq(s.getPropertyValue('-webkit-border-horizontal-spacing'), 'inherit', '-webkit-border-horizontal-spacing: accepts inherit');
  s.webkitBorderHorizontalSpacing = '';
  assertEq(s.webkitBorderHorizontalSpacing, '', '-webkit-border-horizontal-spacing: empty string removes');
}

// --- -webkit-border-image ---
{
  const s = fresh();
  s.webkitBorderImage = 'none';
  assertEq(s.webkitBorderImage, 'none', '-webkit-border-image: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('-webkit-border-image'), 'none', '-webkit-border-image: getPropertyValue matches accessor');
  s.webkitBorderImage = 'inherit';
  assertEq(s.webkitBorderImage, 'inherit', '-webkit-border-image: overwrite with second value');
  s.removeProperty('-webkit-border-image');
  assertEq(s.webkitBorderImage, '', '-webkit-border-image: removeProperty clears value');
  s.setProperty('-webkit-border-image', 'inherit');
  assertEq(s.getPropertyValue('-webkit-border-image'), 'inherit', '-webkit-border-image: accepts inherit');
  s.webkitBorderImage = '';
  assertEq(s.webkitBorderImage, '', '-webkit-border-image: empty string removes');
}

// --- -webkit-border-vertical-spacing ---
{
  const s = fresh();
  s.webkitBorderVerticalSpacing = 'initial';
  assertEq(s.webkitBorderVerticalSpacing, 'initial', '-webkit-border-vertical-spacing: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('-webkit-border-vertical-spacing'), 'initial', '-webkit-border-vertical-spacing: getPropertyValue matches accessor');
  s.webkitBorderVerticalSpacing = 'inherit';
  assertEq(s.webkitBorderVerticalSpacing, 'inherit', '-webkit-border-vertical-spacing: overwrite with second value');
  s.removeProperty('-webkit-border-vertical-spacing');
  assertEq(s.webkitBorderVerticalSpacing, '', '-webkit-border-vertical-spacing: removeProperty clears value');
  s.setProperty('-webkit-border-vertical-spacing', 'inherit');
  assertEq(s.getPropertyValue('-webkit-border-vertical-spacing'), 'inherit', '-webkit-border-vertical-spacing: accepts inherit');
  s.webkitBorderVerticalSpacing = '';
  assertEq(s.webkitBorderVerticalSpacing, '', '-webkit-border-vertical-spacing: empty string removes');
}

// --- -webkit-box-align ---
{
  const s = fresh();
  s.webkitBoxAlign = 'stretch';
  assertEq(s.webkitBoxAlign, 'stretch', '-webkit-box-align: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('-webkit-box-align'), 'stretch', '-webkit-box-align: getPropertyValue matches accessor');
  s.webkitBoxAlign = 'start';
  assertEq(s.webkitBoxAlign, 'start', '-webkit-box-align: overwrite with second value');
  s.removeProperty('-webkit-box-align');
  assertEq(s.webkitBoxAlign, '', '-webkit-box-align: removeProperty clears value');
  s.setProperty('-webkit-box-align', 'inherit');
  assertEq(s.getPropertyValue('-webkit-box-align'), 'inherit', '-webkit-box-align: accepts inherit');
  s.webkitBoxAlign = '';
  assertEq(s.webkitBoxAlign, '', '-webkit-box-align: empty string removes');
  s.webkitBoxAlign = 'stretch';
  s.webkitBoxAlign = 'definitely-not-a-valid-value-xyz';
  assertEq(s.webkitBoxAlign, 'stretch', '-webkit-box-align: rejects invalid keyword');
}

// --- -webkit-box-decoration-break ---
{
  const s = fresh();
  s.webkitBoxDecorationBreak = 'slice';
  assertEq(s.webkitBoxDecorationBreak, 'slice', '-webkit-box-decoration-break: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('-webkit-box-decoration-break'), 'slice', '-webkit-box-decoration-break: getPropertyValue matches accessor');
  s.webkitBoxDecorationBreak = 'clone';
  assertEq(s.webkitBoxDecorationBreak, 'clone', '-webkit-box-decoration-break: overwrite with second value');
  s.removeProperty('-webkit-box-decoration-break');
  assertEq(s.webkitBoxDecorationBreak, '', '-webkit-box-decoration-break: removeProperty clears value');
  s.setProperty('-webkit-box-decoration-break', 'inherit');
  assertEq(s.getPropertyValue('-webkit-box-decoration-break'), 'inherit', '-webkit-box-decoration-break: accepts inherit');
  s.webkitBoxDecorationBreak = '';
  assertEq(s.webkitBoxDecorationBreak, '', '-webkit-box-decoration-break: empty string removes');
  s.webkitBoxDecorationBreak = 'slice';
  s.webkitBoxDecorationBreak = 'definitely-not-a-valid-value-xyz';
  assertEq(s.webkitBoxDecorationBreak, 'slice', '-webkit-box-decoration-break: rejects invalid keyword');
}

// --- -webkit-box-direction ---
{
  const s = fresh();
  s.webkitBoxDirection = 'normal';
  assertEq(s.webkitBoxDirection, 'normal', '-webkit-box-direction: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('-webkit-box-direction'), 'normal', '-webkit-box-direction: getPropertyValue matches accessor');
  s.webkitBoxDirection = 'reverse';
  assertEq(s.webkitBoxDirection, 'reverse', '-webkit-box-direction: overwrite with second value');
  s.removeProperty('-webkit-box-direction');
  assertEq(s.webkitBoxDirection, '', '-webkit-box-direction: removeProperty clears value');
  s.setProperty('-webkit-box-direction', 'inherit');
  assertEq(s.getPropertyValue('-webkit-box-direction'), 'inherit', '-webkit-box-direction: accepts inherit');
  s.webkitBoxDirection = '';
  assertEq(s.webkitBoxDirection, '', '-webkit-box-direction: empty string removes');
  s.webkitBoxDirection = 'normal';
  s.webkitBoxDirection = 'definitely-not-a-valid-value-xyz';
  assertEq(s.webkitBoxDirection, 'normal', '-webkit-box-direction: rejects invalid keyword');
}

// --- -webkit-box-flex ---
{
  const s = fresh();
  s.webkitBoxFlex = 'initial';
  assertEq(s.webkitBoxFlex, 'initial', '-webkit-box-flex: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('-webkit-box-flex'), 'initial', '-webkit-box-flex: getPropertyValue matches accessor');
  s.webkitBoxFlex = 'inherit';
  assertEq(s.webkitBoxFlex, 'inherit', '-webkit-box-flex: overwrite with second value');
  s.removeProperty('-webkit-box-flex');
  assertEq(s.webkitBoxFlex, '', '-webkit-box-flex: removeProperty clears value');
  s.setProperty('-webkit-box-flex', 'inherit');
  assertEq(s.getPropertyValue('-webkit-box-flex'), 'inherit', '-webkit-box-flex: accepts inherit');
  s.webkitBoxFlex = '';
  assertEq(s.webkitBoxFlex, '', '-webkit-box-flex: empty string removes');
}

// --- -webkit-box-ordinal-group ---
{
  const s = fresh();
  s.webkitBoxOrdinalGroup = 'initial';
  assertEq(s.webkitBoxOrdinalGroup, 'initial', '-webkit-box-ordinal-group: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('-webkit-box-ordinal-group'), 'initial', '-webkit-box-ordinal-group: getPropertyValue matches accessor');
  s.webkitBoxOrdinalGroup = 'inherit';
  assertEq(s.webkitBoxOrdinalGroup, 'inherit', '-webkit-box-ordinal-group: overwrite with second value');
  s.removeProperty('-webkit-box-ordinal-group');
  assertEq(s.webkitBoxOrdinalGroup, '', '-webkit-box-ordinal-group: removeProperty clears value');
  s.setProperty('-webkit-box-ordinal-group', 'inherit');
  assertEq(s.getPropertyValue('-webkit-box-ordinal-group'), 'inherit', '-webkit-box-ordinal-group: accepts inherit');
  s.webkitBoxOrdinalGroup = '';
  assertEq(s.webkitBoxOrdinalGroup, '', '-webkit-box-ordinal-group: empty string removes');
}

// --- -webkit-box-orient ---
{
  const s = fresh();
  s.webkitBoxOrient = 'horizontal';
  assertEq(s.webkitBoxOrient, 'horizontal', '-webkit-box-orient: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('-webkit-box-orient'), 'horizontal', '-webkit-box-orient: getPropertyValue matches accessor');
  s.webkitBoxOrient = 'vertical';
  assertEq(s.webkitBoxOrient, 'vertical', '-webkit-box-orient: overwrite with second value');
  s.removeProperty('-webkit-box-orient');
  assertEq(s.webkitBoxOrient, '', '-webkit-box-orient: removeProperty clears value');
  s.setProperty('-webkit-box-orient', 'inherit');
  assertEq(s.getPropertyValue('-webkit-box-orient'), 'inherit', '-webkit-box-orient: accepts inherit');
  s.webkitBoxOrient = '';
  assertEq(s.webkitBoxOrient, '', '-webkit-box-orient: empty string removes');
  s.webkitBoxOrient = 'horizontal';
  s.webkitBoxOrient = 'definitely-not-a-valid-value-xyz';
  assertEq(s.webkitBoxOrient, 'horizontal', '-webkit-box-orient: rejects invalid keyword');
}

// --- -webkit-box-pack ---
{
  const s = fresh();
  s.webkitBoxPack = 'start';
  assertEq(s.webkitBoxPack, 'start', '-webkit-box-pack: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('-webkit-box-pack'), 'start', '-webkit-box-pack: getPropertyValue matches accessor');
  s.webkitBoxPack = 'center';
  assertEq(s.webkitBoxPack, 'center', '-webkit-box-pack: overwrite with second value');
  s.removeProperty('-webkit-box-pack');
  assertEq(s.webkitBoxPack, '', '-webkit-box-pack: removeProperty clears value');
  s.setProperty('-webkit-box-pack', 'inherit');
  assertEq(s.getPropertyValue('-webkit-box-pack'), 'inherit', '-webkit-box-pack: accepts inherit');
  s.webkitBoxPack = '';
  assertEq(s.webkitBoxPack, '', '-webkit-box-pack: empty string removes');
  s.webkitBoxPack = 'start';
  s.webkitBoxPack = 'definitely-not-a-valid-value-xyz';
  assertEq(s.webkitBoxPack, 'start', '-webkit-box-pack: rejects invalid keyword');
}

// --- -webkit-box-reflect ---
{
  const s = fresh();
  s.webkitBoxReflect = 'initial';
  assertEq(s.webkitBoxReflect, 'initial', '-webkit-box-reflect: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('-webkit-box-reflect'), 'initial', '-webkit-box-reflect: getPropertyValue matches accessor');
  s.webkitBoxReflect = 'inherit';
  assertEq(s.webkitBoxReflect, 'inherit', '-webkit-box-reflect: overwrite with second value');
  s.removeProperty('-webkit-box-reflect');
  assertEq(s.webkitBoxReflect, '', '-webkit-box-reflect: removeProperty clears value');
  s.setProperty('-webkit-box-reflect', 'inherit');
  assertEq(s.getPropertyValue('-webkit-box-reflect'), 'inherit', '-webkit-box-reflect: accepts inherit');
  s.webkitBoxReflect = '';
  assertEq(s.webkitBoxReflect, '', '-webkit-box-reflect: empty string removes');
}

// --- column-count ---
{
  const s = fresh();
  s.columnCount = 'auto';
  assertEq(s.columnCount, 'auto', 'column-count: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('column-count'), 'auto', 'column-count: getPropertyValue matches accessor');
  s.columnCount = 'inherit';
  assertEq(s.columnCount, 'inherit', 'column-count: overwrite with second value');
  s.removeProperty('column-count');
  assertEq(s.columnCount, '', 'column-count: removeProperty clears value');
  s.setProperty('column-count', 'inherit');
  assertEq(s.getPropertyValue('column-count'), 'inherit', 'column-count: accepts inherit');
  s.columnCount = '';
  assertEq(s.columnCount, '', 'column-count: empty string removes');
}

// --- column-gap ---
{
  const s = fresh();
  s.columnGap = '10px';
  assertEq(s.columnGap, '10px', 'column-gap: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('column-gap'), '10px', 'column-gap: getPropertyValue matches accessor');
  s.columnGap = '20px';
  assertEq(s.columnGap, '20px', 'column-gap: overwrite with second value');
  s.removeProperty('column-gap');
  assertEq(s.columnGap, '', 'column-gap: removeProperty clears value');
  s.setProperty('column-gap', 'inherit');
  assertEq(s.getPropertyValue('column-gap'), 'inherit', 'column-gap: accepts inherit');
  s.columnGap = '';
  assertEq(s.columnGap, '', 'column-gap: empty string removes');
}

// --- row-gap ---
{
  const s = fresh();
  s.rowGap = '10px';
  assertEq(s.rowGap, '10px', 'row-gap: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('row-gap'), '10px', 'row-gap: getPropertyValue matches accessor');
  s.rowGap = '20px';
  assertEq(s.rowGap, '20px', 'row-gap: overwrite with second value');
  s.removeProperty('row-gap');
  assertEq(s.rowGap, '', 'row-gap: removeProperty clears value');
  s.setProperty('row-gap', 'inherit');
  assertEq(s.getPropertyValue('row-gap'), 'inherit', 'row-gap: accepts inherit');
  s.rowGap = '';
  assertEq(s.rowGap, '', 'row-gap: empty string removes');
}

// --- rule-overlap ---
{
  const s = fresh();
  s.ruleOverlap = 'row-over-column';
  assertEq(s.ruleOverlap, 'row-over-column', 'rule-overlap: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('rule-overlap'), 'row-over-column', 'rule-overlap: getPropertyValue matches accessor');
  s.ruleOverlap = 'column-over-row';
  assertEq(s.ruleOverlap, 'column-over-row', 'rule-overlap: overwrite with second value');
  s.removeProperty('rule-overlap');
  assertEq(s.ruleOverlap, '', 'rule-overlap: removeProperty clears value');
  s.setProperty('rule-overlap', 'inherit');
  assertEq(s.getPropertyValue('rule-overlap'), 'inherit', 'rule-overlap: accepts inherit');
  s.ruleOverlap = '';
  assertEq(s.ruleOverlap, '', 'rule-overlap: empty string removes');
  s.ruleOverlap = 'row-over-column';
  s.ruleOverlap = 'definitely-not-a-valid-value-xyz';
  assertEq(s.ruleOverlap, 'row-over-column', 'rule-overlap: rejects invalid keyword');
}

// --- column-rule-break ---
{
  const s = fresh();
  s.columnRuleBreak = 'none';
  assertEq(s.columnRuleBreak, 'none', 'column-rule-break: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('column-rule-break'), 'none', 'column-rule-break: getPropertyValue matches accessor');
  s.columnRuleBreak = 'normal';
  assertEq(s.columnRuleBreak, 'normal', 'column-rule-break: overwrite with second value');
  s.removeProperty('column-rule-break');
  assertEq(s.columnRuleBreak, '', 'column-rule-break: removeProperty clears value');
  s.setProperty('column-rule-break', 'inherit');
  assertEq(s.getPropertyValue('column-rule-break'), 'inherit', 'column-rule-break: accepts inherit');
  s.columnRuleBreak = '';
  assertEq(s.columnRuleBreak, '', 'column-rule-break: empty string removes');
  s.columnRuleBreak = 'none';
  s.columnRuleBreak = 'definitely-not-a-valid-value-xyz';
  assertEq(s.columnRuleBreak, 'none', 'column-rule-break: rejects invalid keyword');
}

// --- row-rule-break ---
{
  const s = fresh();
  s.rowRuleBreak = 'none';
  assertEq(s.rowRuleBreak, 'none', 'row-rule-break: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('row-rule-break'), 'none', 'row-rule-break: getPropertyValue matches accessor');
  s.rowRuleBreak = 'normal';
  assertEq(s.rowRuleBreak, 'normal', 'row-rule-break: overwrite with second value');
  s.removeProperty('row-rule-break');
  assertEq(s.rowRuleBreak, '', 'row-rule-break: removeProperty clears value');
  s.setProperty('row-rule-break', 'inherit');
  assertEq(s.getPropertyValue('row-rule-break'), 'inherit', 'row-rule-break: accepts inherit');
  s.rowRuleBreak = '';
  assertEq(s.rowRuleBreak, '', 'row-rule-break: empty string removes');
  s.rowRuleBreak = 'none';
  s.rowRuleBreak = 'definitely-not-a-valid-value-xyz';
  assertEq(s.rowRuleBreak, 'none', 'row-rule-break: rejects invalid keyword');
}

// --- column-rule-edge-inset-end ---
{
  const s = fresh();
  s.columnRuleEdgeInsetEnd = 'overlap-join';
  assertEq(s.columnRuleEdgeInsetEnd, 'overlap-join', 'column-rule-edge-inset-end: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('column-rule-edge-inset-end'), 'overlap-join', 'column-rule-edge-inset-end: getPropertyValue matches accessor');
  s.columnRuleEdgeInsetEnd = 'inherit';
  assertEq(s.columnRuleEdgeInsetEnd, 'inherit', 'column-rule-edge-inset-end: overwrite with second value');
  s.removeProperty('column-rule-edge-inset-end');
  assertEq(s.columnRuleEdgeInsetEnd, '', 'column-rule-edge-inset-end: removeProperty clears value');
  s.setProperty('column-rule-edge-inset-end', 'inherit');
  assertEq(s.getPropertyValue('column-rule-edge-inset-end'), 'inherit', 'column-rule-edge-inset-end: accepts inherit');
  s.columnRuleEdgeInsetEnd = '';
  assertEq(s.columnRuleEdgeInsetEnd, '', 'column-rule-edge-inset-end: empty string removes');
}

// --- row-rule-edge-inset-end ---
{
  const s = fresh();
  s.rowRuleEdgeInsetEnd = 'overlap-join';
  assertEq(s.rowRuleEdgeInsetEnd, 'overlap-join', 'row-rule-edge-inset-end: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('row-rule-edge-inset-end'), 'overlap-join', 'row-rule-edge-inset-end: getPropertyValue matches accessor');
  s.rowRuleEdgeInsetEnd = 'inherit';
  assertEq(s.rowRuleEdgeInsetEnd, 'inherit', 'row-rule-edge-inset-end: overwrite with second value');
  s.removeProperty('row-rule-edge-inset-end');
  assertEq(s.rowRuleEdgeInsetEnd, '', 'row-rule-edge-inset-end: removeProperty clears value');
  s.setProperty('row-rule-edge-inset-end', 'inherit');
  assertEq(s.getPropertyValue('row-rule-edge-inset-end'), 'inherit', 'row-rule-edge-inset-end: accepts inherit');
  s.rowRuleEdgeInsetEnd = '';
  assertEq(s.rowRuleEdgeInsetEnd, '', 'row-rule-edge-inset-end: empty string removes');
}

// --- column-rule-edge-inset-start ---
{
  const s = fresh();
  s.columnRuleEdgeInsetStart = 'overlap-join';
  assertEq(s.columnRuleEdgeInsetStart, 'overlap-join', 'column-rule-edge-inset-start: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('column-rule-edge-inset-start'), 'overlap-join', 'column-rule-edge-inset-start: getPropertyValue matches accessor');
  s.columnRuleEdgeInsetStart = 'inherit';
  assertEq(s.columnRuleEdgeInsetStart, 'inherit', 'column-rule-edge-inset-start: overwrite with second value');
  s.removeProperty('column-rule-edge-inset-start');
  assertEq(s.columnRuleEdgeInsetStart, '', 'column-rule-edge-inset-start: removeProperty clears value');
  s.setProperty('column-rule-edge-inset-start', 'inherit');
  assertEq(s.getPropertyValue('column-rule-edge-inset-start'), 'inherit', 'column-rule-edge-inset-start: accepts inherit');
  s.columnRuleEdgeInsetStart = '';
  assertEq(s.columnRuleEdgeInsetStart, '', 'column-rule-edge-inset-start: empty string removes');
}

// --- row-rule-edge-inset-start ---
{
  const s = fresh();
  s.rowRuleEdgeInsetStart = 'overlap-join';
  assertEq(s.rowRuleEdgeInsetStart, 'overlap-join', 'row-rule-edge-inset-start: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('row-rule-edge-inset-start'), 'overlap-join', 'row-rule-edge-inset-start: getPropertyValue matches accessor');
  s.rowRuleEdgeInsetStart = 'inherit';
  assertEq(s.rowRuleEdgeInsetStart, 'inherit', 'row-rule-edge-inset-start: overwrite with second value');
  s.removeProperty('row-rule-edge-inset-start');
  assertEq(s.rowRuleEdgeInsetStart, '', 'row-rule-edge-inset-start: removeProperty clears value');
  s.setProperty('row-rule-edge-inset-start', 'inherit');
  assertEq(s.getPropertyValue('row-rule-edge-inset-start'), 'inherit', 'row-rule-edge-inset-start: accepts inherit');
  s.rowRuleEdgeInsetStart = '';
  assertEq(s.rowRuleEdgeInsetStart, '', 'row-rule-edge-inset-start: empty string removes');
}

// --- column-rule-interior-inset-end ---
{
  const s = fresh();
  s.columnRuleInteriorInsetEnd = 'overlap-join';
  assertEq(s.columnRuleInteriorInsetEnd, 'overlap-join', 'column-rule-interior-inset-end: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('column-rule-interior-inset-end'), 'overlap-join', 'column-rule-interior-inset-end: getPropertyValue matches accessor');
  s.columnRuleInteriorInsetEnd = 'inherit';
  assertEq(s.columnRuleInteriorInsetEnd, 'inherit', 'column-rule-interior-inset-end: overwrite with second value');
  s.removeProperty('column-rule-interior-inset-end');
  assertEq(s.columnRuleInteriorInsetEnd, '', 'column-rule-interior-inset-end: removeProperty clears value');
  s.setProperty('column-rule-interior-inset-end', 'inherit');
  assertEq(s.getPropertyValue('column-rule-interior-inset-end'), 'inherit', 'column-rule-interior-inset-end: accepts inherit');
  s.columnRuleInteriorInsetEnd = '';
  assertEq(s.columnRuleInteriorInsetEnd, '', 'column-rule-interior-inset-end: empty string removes');
}

// --- row-rule-interior-inset-end ---
{
  const s = fresh();
  s.rowRuleInteriorInsetEnd = 'overlap-join';
  assertEq(s.rowRuleInteriorInsetEnd, 'overlap-join', 'row-rule-interior-inset-end: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('row-rule-interior-inset-end'), 'overlap-join', 'row-rule-interior-inset-end: getPropertyValue matches accessor');
  s.rowRuleInteriorInsetEnd = 'inherit';
  assertEq(s.rowRuleInteriorInsetEnd, 'inherit', 'row-rule-interior-inset-end: overwrite with second value');
  s.removeProperty('row-rule-interior-inset-end');
  assertEq(s.rowRuleInteriorInsetEnd, '', 'row-rule-interior-inset-end: removeProperty clears value');
  s.setProperty('row-rule-interior-inset-end', 'inherit');
  assertEq(s.getPropertyValue('row-rule-interior-inset-end'), 'inherit', 'row-rule-interior-inset-end: accepts inherit');
  s.rowRuleInteriorInsetEnd = '';
  assertEq(s.rowRuleInteriorInsetEnd, '', 'row-rule-interior-inset-end: empty string removes');
}

// --- column-rule-interior-inset-start ---
{
  const s = fresh();
  s.columnRuleInteriorInsetStart = 'overlap-join';
  assertEq(s.columnRuleInteriorInsetStart, 'overlap-join', 'column-rule-interior-inset-start: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('column-rule-interior-inset-start'), 'overlap-join', 'column-rule-interior-inset-start: getPropertyValue matches accessor');
  s.columnRuleInteriorInsetStart = 'inherit';
  assertEq(s.columnRuleInteriorInsetStart, 'inherit', 'column-rule-interior-inset-start: overwrite with second value');
  s.removeProperty('column-rule-interior-inset-start');
  assertEq(s.columnRuleInteriorInsetStart, '', 'column-rule-interior-inset-start: removeProperty clears value');
  s.setProperty('column-rule-interior-inset-start', 'inherit');
  assertEq(s.getPropertyValue('column-rule-interior-inset-start'), 'inherit', 'column-rule-interior-inset-start: accepts inherit');
  s.columnRuleInteriorInsetStart = '';
  assertEq(s.columnRuleInteriorInsetStart, '', 'column-rule-interior-inset-start: empty string removes');
}

// --- row-rule-interior-inset-start ---
{
  const s = fresh();
  s.rowRuleInteriorInsetStart = 'overlap-join';
  assertEq(s.rowRuleInteriorInsetStart, 'overlap-join', 'row-rule-interior-inset-start: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('row-rule-interior-inset-start'), 'overlap-join', 'row-rule-interior-inset-start: getPropertyValue matches accessor');
  s.rowRuleInteriorInsetStart = 'inherit';
  assertEq(s.rowRuleInteriorInsetStart, 'inherit', 'row-rule-interior-inset-start: overwrite with second value');
  s.removeProperty('row-rule-interior-inset-start');
  assertEq(s.rowRuleInteriorInsetStart, '', 'row-rule-interior-inset-start: removeProperty clears value');
  s.setProperty('row-rule-interior-inset-start', 'inherit');
  assertEq(s.getPropertyValue('row-rule-interior-inset-start'), 'inherit', 'row-rule-interior-inset-start: accepts inherit');
  s.rowRuleInteriorInsetStart = '';
  assertEq(s.rowRuleInteriorInsetStart, '', 'row-rule-interior-inset-start: empty string removes');
}

// --- column-rule-color ---
{
  const s = fresh();
  s.columnRuleColor = 'red';
  assertEq(s.columnRuleColor, 'red', 'column-rule-color: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('column-rule-color'), 'red', 'column-rule-color: getPropertyValue matches accessor');
  s.columnRuleColor = 'blue';
  assertEq(s.columnRuleColor, 'blue', 'column-rule-color: overwrite with second value');
  s.removeProperty('column-rule-color');
  assertEq(s.columnRuleColor, '', 'column-rule-color: removeProperty clears value');
  s.setProperty('column-rule-color', 'inherit');
  assertEq(s.getPropertyValue('column-rule-color'), 'inherit', 'column-rule-color: accepts inherit');
  s.columnRuleColor = '';
  assertEq(s.columnRuleColor, '', 'column-rule-color: empty string removes');
}

// --- row-rule-color ---
{
  const s = fresh();
  s.rowRuleColor = 'currentcolor';
  assertEq(s.rowRuleColor, 'currentcolor', 'row-rule-color: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('row-rule-color'), 'currentcolor', 'row-rule-color: getPropertyValue matches accessor');
  s.rowRuleColor = 'inherit';
  assertEq(s.rowRuleColor, 'inherit', 'row-rule-color: overwrite with second value');
  s.removeProperty('row-rule-color');
  assertEq(s.rowRuleColor, '', 'row-rule-color: removeProperty clears value');
  s.setProperty('row-rule-color', 'inherit');
  assertEq(s.getPropertyValue('row-rule-color'), 'inherit', 'row-rule-color: accepts inherit');
  s.rowRuleColor = '';
  assertEq(s.rowRuleColor, '', 'row-rule-color: empty string removes');
  s.rowRuleColor = 'currentcolor';
  s.rowRuleColor = 'definitely-not-a-valid-value-xyz';
  assertEq(s.rowRuleColor, 'currentcolor', 'row-rule-color: rejects invalid keyword');
}

// --- column-rule-style ---
{
  const s = fresh();
  s.columnRuleStyle = 'none';
  assertEq(s.columnRuleStyle, 'none', 'column-rule-style: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('column-rule-style'), 'none', 'column-rule-style: getPropertyValue matches accessor');
  s.columnRuleStyle = 'hidden';
  assertEq(s.columnRuleStyle, 'hidden', 'column-rule-style: overwrite with second value');
  s.removeProperty('column-rule-style');
  assertEq(s.columnRuleStyle, '', 'column-rule-style: removeProperty clears value');
  s.setProperty('column-rule-style', 'inherit');
  assertEq(s.getPropertyValue('column-rule-style'), 'inherit', 'column-rule-style: accepts inherit');
  s.columnRuleStyle = '';
  assertEq(s.columnRuleStyle, '', 'column-rule-style: empty string removes');
  s.columnRuleStyle = 'none';
  s.columnRuleStyle = 'definitely-not-a-valid-value-xyz';
  assertEq(s.columnRuleStyle, 'none', 'column-rule-style: rejects invalid keyword');
}

// --- row-rule-style ---
{
  const s = fresh();
  s.rowRuleStyle = 'none';
  assertEq(s.rowRuleStyle, 'none', 'row-rule-style: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('row-rule-style'), 'none', 'row-rule-style: getPropertyValue matches accessor');
  s.rowRuleStyle = 'hidden';
  assertEq(s.rowRuleStyle, 'hidden', 'row-rule-style: overwrite with second value');
  s.removeProperty('row-rule-style');
  assertEq(s.rowRuleStyle, '', 'row-rule-style: removeProperty clears value');
  s.setProperty('row-rule-style', 'inherit');
  assertEq(s.getPropertyValue('row-rule-style'), 'inherit', 'row-rule-style: accepts inherit');
  s.rowRuleStyle = '';
  assertEq(s.rowRuleStyle, '', 'row-rule-style: empty string removes');
  s.rowRuleStyle = 'none';
  s.rowRuleStyle = 'definitely-not-a-valid-value-xyz';
  assertEq(s.rowRuleStyle, 'none', 'row-rule-style: rejects invalid keyword');
}

// --- column-rule-visibility-items ---
{
  const s = fresh();
  s.columnRuleVisibilityItems = 'all';
  assertEq(s.columnRuleVisibilityItems, 'all', 'column-rule-visibility-items: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('column-rule-visibility-items'), 'all', 'column-rule-visibility-items: getPropertyValue matches accessor');
  s.columnRuleVisibilityItems = 'auto';
  assertEq(s.columnRuleVisibilityItems, 'auto', 'column-rule-visibility-items: overwrite with second value');
  s.removeProperty('column-rule-visibility-items');
  assertEq(s.columnRuleVisibilityItems, '', 'column-rule-visibility-items: removeProperty clears value');
  s.setProperty('column-rule-visibility-items', 'inherit');
  assertEq(s.getPropertyValue('column-rule-visibility-items'), 'inherit', 'column-rule-visibility-items: accepts inherit');
  s.columnRuleVisibilityItems = '';
  assertEq(s.columnRuleVisibilityItems, '', 'column-rule-visibility-items: empty string removes');
  s.columnRuleVisibilityItems = 'all';
  s.columnRuleVisibilityItems = 'definitely-not-a-valid-value-xyz';
  assertEq(s.columnRuleVisibilityItems, 'all', 'column-rule-visibility-items: rejects invalid keyword');
}

// --- row-rule-visibility-items ---
{
  const s = fresh();
  s.rowRuleVisibilityItems = 'all';
  assertEq(s.rowRuleVisibilityItems, 'all', 'row-rule-visibility-items: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('row-rule-visibility-items'), 'all', 'row-rule-visibility-items: getPropertyValue matches accessor');
  s.rowRuleVisibilityItems = 'auto';
  assertEq(s.rowRuleVisibilityItems, 'auto', 'row-rule-visibility-items: overwrite with second value');
  s.removeProperty('row-rule-visibility-items');
  assertEq(s.rowRuleVisibilityItems, '', 'row-rule-visibility-items: removeProperty clears value');
  s.setProperty('row-rule-visibility-items', 'inherit');
  assertEq(s.getPropertyValue('row-rule-visibility-items'), 'inherit', 'row-rule-visibility-items: accepts inherit');
  s.rowRuleVisibilityItems = '';
  assertEq(s.rowRuleVisibilityItems, '', 'row-rule-visibility-items: empty string removes');
  s.rowRuleVisibilityItems = 'all';
  s.rowRuleVisibilityItems = 'definitely-not-a-valid-value-xyz';
  assertEq(s.rowRuleVisibilityItems, 'all', 'row-rule-visibility-items: rejects invalid keyword');
}

// --- column-rule-width ---
{
  const s = fresh();
  s.columnRuleWidth = 'thin';
  assertEq(s.columnRuleWidth, 'thin', 'column-rule-width: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('column-rule-width'), 'thin', 'column-rule-width: getPropertyValue matches accessor');
  s.columnRuleWidth = 'medium';
  assertEq(s.columnRuleWidth, 'medium', 'column-rule-width: overwrite with second value');
  s.removeProperty('column-rule-width');
  assertEq(s.columnRuleWidth, '', 'column-rule-width: removeProperty clears value');
  s.setProperty('column-rule-width', 'inherit');
  assertEq(s.getPropertyValue('column-rule-width'), 'inherit', 'column-rule-width: accepts inherit');
  s.columnRuleWidth = '';
  assertEq(s.columnRuleWidth, '', 'column-rule-width: empty string removes');
}

// --- row-rule-width ---
{
  const s = fresh();
  s.rowRuleWidth = 'thin';
  assertEq(s.rowRuleWidth, 'thin', 'row-rule-width: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('row-rule-width'), 'thin', 'row-rule-width: getPropertyValue matches accessor');
  s.rowRuleWidth = 'medium';
  assertEq(s.rowRuleWidth, 'medium', 'row-rule-width: overwrite with second value');
  s.removeProperty('row-rule-width');
  assertEq(s.rowRuleWidth, '', 'row-rule-width: removeProperty clears value');
  s.setProperty('row-rule-width', 'inherit');
  assertEq(s.getPropertyValue('row-rule-width'), 'inherit', 'row-rule-width: accepts inherit');
  s.rowRuleWidth = '';
  assertEq(s.rowRuleWidth, '', 'row-rule-width: empty string removes');
}

// --- column-span ---
{
  const s = fresh();
  s.columnSpan = 'none';
  assertEq(s.columnSpan, 'none', 'column-span: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('column-span'), 'none', 'column-span: getPropertyValue matches accessor');
  s.columnSpan = 'all';
  assertEq(s.columnSpan, 'all', 'column-span: overwrite with second value');
  s.removeProperty('column-span');
  assertEq(s.columnSpan, '', 'column-span: removeProperty clears value');
  s.setProperty('column-span', 'inherit');
  assertEq(s.getPropertyValue('column-span'), 'inherit', 'column-span: accepts inherit');
  s.columnSpan = '';
  assertEq(s.columnSpan, '', 'column-span: empty string removes');
  s.columnSpan = 'none';
  s.columnSpan = 'definitely-not-a-valid-value-xyz';
  assertEq(s.columnSpan, 'none', 'column-span: rejects invalid keyword');
}

// --- column-width ---
{
  const s = fresh();
  s.columnWidth = '10px';
  assertEq(s.columnWidth, '10px', 'column-width: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('column-width'), '10px', 'column-width: getPropertyValue matches accessor');
  s.columnWidth = '20px';
  assertEq(s.columnWidth, '20px', 'column-width: overwrite with second value');
  s.removeProperty('column-width');
  assertEq(s.columnWidth, '', 'column-width: removeProperty clears value');
  s.setProperty('column-width', 'inherit');
  assertEq(s.getPropertyValue('column-width'), 'inherit', 'column-width: accepts inherit');
  s.columnWidth = '';
  assertEq(s.columnWidth, '', 'column-width: empty string removes');
}

// --- column-height ---
{
  const s = fresh();
  s.columnHeight = 'auto';
  assertEq(s.columnHeight, 'auto', 'column-height: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('column-height'), 'auto', 'column-height: getPropertyValue matches accessor');
  s.columnHeight = 'inherit';
  assertEq(s.columnHeight, 'inherit', 'column-height: overwrite with second value');
  s.removeProperty('column-height');
  assertEq(s.columnHeight, '', 'column-height: removeProperty clears value');
  s.setProperty('column-height', 'inherit');
  assertEq(s.getPropertyValue('column-height'), 'inherit', 'column-height: accepts inherit');
  s.columnHeight = '';
  assertEq(s.columnHeight, '', 'column-height: empty string removes');
}

// --- column-wrap ---
{
  const s = fresh();
  s.columnWrap = 'auto';
  assertEq(s.columnWrap, 'auto', 'column-wrap: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('column-wrap'), 'auto', 'column-wrap: getPropertyValue matches accessor');
  s.columnWrap = 'nowrap';
  assertEq(s.columnWrap, 'nowrap', 'column-wrap: overwrite with second value');
  s.removeProperty('column-wrap');
  assertEq(s.columnWrap, '', 'column-wrap: removeProperty clears value');
  s.setProperty('column-wrap', 'inherit');
  assertEq(s.getPropertyValue('column-wrap'), 'inherit', 'column-wrap: accepts inherit');
  s.columnWrap = '';
  assertEq(s.columnWrap, '', 'column-wrap: empty string removes');
  s.columnWrap = 'auto';
  s.columnWrap = 'definitely-not-a-valid-value-xyz';
  assertEq(s.columnWrap, 'auto', 'column-wrap: rejects invalid keyword');
}

// --- hyphenate-character ---
{
  const s = fresh();
  s.hyphenateCharacter = 'initial';
  assertEq(s.hyphenateCharacter, 'initial', 'hyphenate-character: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('hyphenate-character'), 'initial', 'hyphenate-character: getPropertyValue matches accessor');
  s.hyphenateCharacter = 'inherit';
  assertEq(s.hyphenateCharacter, 'inherit', 'hyphenate-character: overwrite with second value');
  s.removeProperty('hyphenate-character');
  assertEq(s.hyphenateCharacter, '', 'hyphenate-character: removeProperty clears value');
  s.setProperty('hyphenate-character', 'inherit');
  assertEq(s.getPropertyValue('hyphenate-character'), 'inherit', 'hyphenate-character: accepts inherit');
  s.hyphenateCharacter = '';
  assertEq(s.hyphenateCharacter, '', 'hyphenate-character: empty string removes');
}

// --- -webkit-line-break ---
{
  const s = fresh();
  s.webkitLineBreak = 'auto';
  assertEq(s.webkitLineBreak, 'auto', '-webkit-line-break: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('-webkit-line-break'), 'auto', '-webkit-line-break: getPropertyValue matches accessor');
  s.webkitLineBreak = 'loose';
  assertEq(s.webkitLineBreak, 'loose', '-webkit-line-break: overwrite with second value');
  s.removeProperty('-webkit-line-break');
  assertEq(s.webkitLineBreak, '', '-webkit-line-break: removeProperty clears value');
  s.setProperty('-webkit-line-break', 'inherit');
  assertEq(s.getPropertyValue('-webkit-line-break'), 'inherit', '-webkit-line-break: accepts inherit');
  s.webkitLineBreak = '';
  assertEq(s.webkitLineBreak, '', '-webkit-line-break: empty string removes');
  s.webkitLineBreak = 'auto';
  s.webkitLineBreak = 'definitely-not-a-valid-value-xyz';
  assertEq(s.webkitLineBreak, 'auto', '-webkit-line-break: rejects invalid keyword');
}

// --- line-break ---
{
  const s = fresh();
  s.lineBreak = 'auto';
  assertEq(s.lineBreak, 'auto', 'line-break: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('line-break'), 'auto', 'line-break: getPropertyValue matches accessor');
  s.lineBreak = 'loose';
  assertEq(s.lineBreak, 'loose', 'line-break: overwrite with second value');
  s.removeProperty('line-break');
  assertEq(s.lineBreak, '', 'line-break: removeProperty clears value');
  s.setProperty('line-break', 'inherit');
  assertEq(s.getPropertyValue('line-break'), 'inherit', 'line-break: accepts inherit');
  s.lineBreak = '';
  assertEq(s.lineBreak, '', 'line-break: empty string removes');
  s.lineBreak = 'auto';
  s.lineBreak = 'definitely-not-a-valid-value-xyz';
  assertEq(s.lineBreak, 'auto', 'line-break: rejects invalid keyword');
}

// --- continue ---
{
  const s = fresh();
  s.continue = 'auto';
  assertEq(s.continue, 'auto', 'continue: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('continue'), 'auto', 'continue: getPropertyValue matches accessor');
  s.continue = 'collapse';
  assertEq(s.continue, 'collapse', 'continue: overwrite with second value');
  s.removeProperty('continue');
  assertEq(s.continue, '', 'continue: removeProperty clears value');
  s.setProperty('continue', 'inherit');
  assertEq(s.getPropertyValue('continue'), 'inherit', 'continue: accepts inherit');
  s.continue = '';
  assertEq(s.continue, '', 'continue: empty string removes');
  s.continue = 'auto';
  s.continue = 'definitely-not-a-valid-value-xyz';
  assertEq(s.continue, 'auto', 'continue: rejects invalid keyword');
}

// --- max-lines ---
{
  const s = fresh();
  s.maxLines = 'none';
  assertEq(s.maxLines, 'none', 'max-lines: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('max-lines'), 'none', 'max-lines: getPropertyValue matches accessor');
  s.maxLines = 'inherit';
  assertEq(s.maxLines, 'inherit', 'max-lines: overwrite with second value');
  s.removeProperty('max-lines');
  assertEq(s.maxLines, '', 'max-lines: removeProperty clears value');
  s.setProperty('max-lines', 'inherit');
  assertEq(s.getPropertyValue('max-lines'), 'inherit', 'max-lines: accepts inherit');
  s.maxLines = '';
  assertEq(s.maxLines, '', 'max-lines: empty string removes');
  s.maxLines = 'none';
  s.maxLines = 'definitely-not-a-valid-value-xyz';
  assertEq(s.maxLines, 'none', 'max-lines: rejects invalid keyword');
}

// --- block-ellipsis ---
{
  const s = fresh();
  s.blockEllipsis = 'auto';
  assertEq(s.blockEllipsis, 'auto', 'block-ellipsis: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('block-ellipsis'), 'auto', 'block-ellipsis: getPropertyValue matches accessor');
  s.blockEllipsis = 'no-ellipsis';
  assertEq(s.blockEllipsis, 'no-ellipsis', 'block-ellipsis: overwrite with second value');
  s.removeProperty('block-ellipsis');
  assertEq(s.blockEllipsis, '', 'block-ellipsis: removeProperty clears value');
  s.setProperty('block-ellipsis', 'inherit');
  assertEq(s.getPropertyValue('block-ellipsis'), 'inherit', 'block-ellipsis: accepts inherit');
  s.blockEllipsis = '';
  assertEq(s.blockEllipsis, '', 'block-ellipsis: empty string removes');
  s.blockEllipsis = 'auto';
  s.blockEllipsis = 'definitely-not-a-valid-value-xyz';
  assertEq(s.blockEllipsis, 'auto', 'block-ellipsis: rejects invalid keyword');
}

// --- -webkit-line-clamp ---
{
  const s = fresh();
  s.webkitLineClamp = 'none';
  assertEq(s.webkitLineClamp, 'none', '-webkit-line-clamp: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('-webkit-line-clamp'), 'none', '-webkit-line-clamp: getPropertyValue matches accessor');
  s.webkitLineClamp = 'inherit';
  assertEq(s.webkitLineClamp, 'inherit', '-webkit-line-clamp: overwrite with second value');
  s.removeProperty('-webkit-line-clamp');
  assertEq(s.webkitLineClamp, '', '-webkit-line-clamp: removeProperty clears value');
  s.setProperty('-webkit-line-clamp', 'inherit');
  assertEq(s.getPropertyValue('-webkit-line-clamp'), 'inherit', '-webkit-line-clamp: accepts inherit');
  s.webkitLineClamp = '';
  assertEq(s.webkitLineClamp, '', '-webkit-line-clamp: empty string removes');
  s.webkitLineClamp = 'none';
  s.webkitLineClamp = 'definitely-not-a-valid-value-xyz';
  assertEq(s.webkitLineClamp, 'none', '-webkit-line-clamp: rejects invalid keyword');
}

// --- -webkit-mask-box-image-outset ---
{
  const s = fresh();
  s.webkitMaskBoxImageOutset = 'none';
  assertEq(s.webkitMaskBoxImageOutset, 'none', '-webkit-mask-box-image-outset: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('-webkit-mask-box-image-outset'), 'none', '-webkit-mask-box-image-outset: getPropertyValue matches accessor');
  s.webkitMaskBoxImageOutset = 'inherit';
  assertEq(s.webkitMaskBoxImageOutset, 'inherit', '-webkit-mask-box-image-outset: overwrite with second value');
  s.removeProperty('-webkit-mask-box-image-outset');
  assertEq(s.webkitMaskBoxImageOutset, '', '-webkit-mask-box-image-outset: removeProperty clears value');
  s.setProperty('-webkit-mask-box-image-outset', 'inherit');
  assertEq(s.getPropertyValue('-webkit-mask-box-image-outset'), 'inherit', '-webkit-mask-box-image-outset: accepts inherit');
  s.webkitMaskBoxImageOutset = '';
  assertEq(s.webkitMaskBoxImageOutset, '', '-webkit-mask-box-image-outset: empty string removes');
}

// --- -webkit-mask-box-image-repeat ---
{
  const s = fresh();
  s.webkitMaskBoxImageRepeat = 'none';
  assertEq(s.webkitMaskBoxImageRepeat, 'none', '-webkit-mask-box-image-repeat: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('-webkit-mask-box-image-repeat'), 'none', '-webkit-mask-box-image-repeat: getPropertyValue matches accessor');
  s.webkitMaskBoxImageRepeat = 'inherit';
  assertEq(s.webkitMaskBoxImageRepeat, 'inherit', '-webkit-mask-box-image-repeat: overwrite with second value');
  s.removeProperty('-webkit-mask-box-image-repeat');
  assertEq(s.webkitMaskBoxImageRepeat, '', '-webkit-mask-box-image-repeat: removeProperty clears value');
  s.setProperty('-webkit-mask-box-image-repeat', 'inherit');
  assertEq(s.getPropertyValue('-webkit-mask-box-image-repeat'), 'inherit', '-webkit-mask-box-image-repeat: accepts inherit');
  s.webkitMaskBoxImageRepeat = '';
  assertEq(s.webkitMaskBoxImageRepeat, '', '-webkit-mask-box-image-repeat: empty string removes');
}

// --- -webkit-mask-box-image-slice ---
{
  const s = fresh();
  s.webkitMaskBoxImageSlice = 'none';
  assertEq(s.webkitMaskBoxImageSlice, 'none', '-webkit-mask-box-image-slice: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('-webkit-mask-box-image-slice'), 'none', '-webkit-mask-box-image-slice: getPropertyValue matches accessor');
  s.webkitMaskBoxImageSlice = 'inherit';
  assertEq(s.webkitMaskBoxImageSlice, 'inherit', '-webkit-mask-box-image-slice: overwrite with second value');
  s.removeProperty('-webkit-mask-box-image-slice');
  assertEq(s.webkitMaskBoxImageSlice, '', '-webkit-mask-box-image-slice: removeProperty clears value');
  s.setProperty('-webkit-mask-box-image-slice', 'inherit');
  assertEq(s.getPropertyValue('-webkit-mask-box-image-slice'), 'inherit', '-webkit-mask-box-image-slice: accepts inherit');
  s.webkitMaskBoxImageSlice = '';
  assertEq(s.webkitMaskBoxImageSlice, '', '-webkit-mask-box-image-slice: empty string removes');
}

// --- -webkit-mask-box-image-source ---
{
  const s = fresh();
  s.webkitMaskBoxImageSource = 'none';
  assertEq(s.webkitMaskBoxImageSource, 'none', '-webkit-mask-box-image-source: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('-webkit-mask-box-image-source'), 'none', '-webkit-mask-box-image-source: getPropertyValue matches accessor');
  s.webkitMaskBoxImageSource = 'inherit';
  assertEq(s.webkitMaskBoxImageSource, 'inherit', '-webkit-mask-box-image-source: overwrite with second value');
  s.removeProperty('-webkit-mask-box-image-source');
  assertEq(s.webkitMaskBoxImageSource, '', '-webkit-mask-box-image-source: removeProperty clears value');
  s.setProperty('-webkit-mask-box-image-source', 'inherit');
  assertEq(s.getPropertyValue('-webkit-mask-box-image-source'), 'inherit', '-webkit-mask-box-image-source: accepts inherit');
  s.webkitMaskBoxImageSource = '';
  assertEq(s.webkitMaskBoxImageSource, '', '-webkit-mask-box-image-source: empty string removes');
}

// --- -webkit-mask-box-image-width ---
{
  const s = fresh();
  s.webkitMaskBoxImageWidth = '10px';
  assertEq(s.webkitMaskBoxImageWidth, '10px', '-webkit-mask-box-image-width: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('-webkit-mask-box-image-width'), '10px', '-webkit-mask-box-image-width: getPropertyValue matches accessor');
  s.webkitMaskBoxImageWidth = 'inherit';
  assertEq(s.webkitMaskBoxImageWidth, 'inherit', '-webkit-mask-box-image-width: overwrite with second value');
  s.removeProperty('-webkit-mask-box-image-width');
  assertEq(s.webkitMaskBoxImageWidth, '', '-webkit-mask-box-image-width: removeProperty clears value');
  s.setProperty('-webkit-mask-box-image-width', 'inherit');
  assertEq(s.getPropertyValue('-webkit-mask-box-image-width'), 'inherit', '-webkit-mask-box-image-width: accepts inherit');
  s.webkitMaskBoxImageWidth = '';
  assertEq(s.webkitMaskBoxImageWidth, '', '-webkit-mask-box-image-width: empty string removes');
}

// --- mask-mode ---
{
  const s = fresh();
  s.maskMode = 'alpha';
  assertEq(s.maskMode, 'alpha', 'mask-mode: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('mask-mode'), 'alpha', 'mask-mode: getPropertyValue matches accessor');
  s.maskMode = 'luminance';
  assertEq(s.maskMode, 'luminance', 'mask-mode: overwrite with second value');
  s.removeProperty('mask-mode');
  assertEq(s.maskMode, '', 'mask-mode: removeProperty clears value');
  s.setProperty('mask-mode', 'inherit');
  assertEq(s.getPropertyValue('mask-mode'), 'inherit', 'mask-mode: accepts inherit');
  s.maskMode = '';
  assertEq(s.maskMode, '', 'mask-mode: empty string removes');
  s.maskMode = 'alpha';
  s.maskMode = 'definitely-not-a-valid-value-xyz';
  assertEq(s.maskMode, 'alpha', 'mask-mode: rejects invalid keyword');
}

// --- mask-clip ---
{
  const s = fresh();
  s.maskClip = 'initial';
  assertEq(s.maskClip, 'initial', 'mask-clip: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('mask-clip'), 'initial', 'mask-clip: getPropertyValue matches accessor');
  s.maskClip = 'inherit';
  assertEq(s.maskClip, 'inherit', 'mask-clip: overwrite with second value');
  s.removeProperty('mask-clip');
  assertEq(s.maskClip, '', 'mask-clip: removeProperty clears value');
  s.setProperty('mask-clip', 'inherit');
  assertEq(s.getPropertyValue('mask-clip'), 'inherit', 'mask-clip: accepts inherit');
  s.maskClip = '';
  assertEq(s.maskClip, '', 'mask-clip: empty string removes');
}

// --- mask-composite ---
{
  const s = fresh();
  s.maskComposite = 'add';
  assertEq(s.maskComposite, 'add', 'mask-composite: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('mask-composite'), 'add', 'mask-composite: getPropertyValue matches accessor');
  s.maskComposite = 'subtract';
  assertEq(s.maskComposite, 'subtract', 'mask-composite: overwrite with second value');
  s.removeProperty('mask-composite');
  assertEq(s.maskComposite, '', 'mask-composite: removeProperty clears value');
  s.setProperty('mask-composite', 'inherit');
  assertEq(s.getPropertyValue('mask-composite'), 'inherit', 'mask-composite: accepts inherit');
  s.maskComposite = '';
  assertEq(s.maskComposite, '', 'mask-composite: empty string removes');
  s.maskComposite = 'add';
  s.maskComposite = 'definitely-not-a-valid-value-xyz';
  assertEq(s.maskComposite, 'add', 'mask-composite: rejects invalid keyword');
}

// --- mask-image ---
{
  const s = fresh();
  s.maskImage = 'none';
  assertEq(s.maskImage, 'none', 'mask-image: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('mask-image'), 'none', 'mask-image: getPropertyValue matches accessor');
  s.maskImage = 'inherit';
  assertEq(s.maskImage, 'inherit', 'mask-image: overwrite with second value');
  s.removeProperty('mask-image');
  assertEq(s.maskImage, '', 'mask-image: removeProperty clears value');
  s.setProperty('mask-image', 'inherit');
  assertEq(s.getPropertyValue('mask-image'), 'inherit', 'mask-image: accepts inherit');
  s.maskImage = '';
  assertEq(s.maskImage, '', 'mask-image: empty string removes');
}

// --- mask-origin ---
{
  const s = fresh();
  s.maskOrigin = 'initial';
  assertEq(s.maskOrigin, 'initial', 'mask-origin: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('mask-origin'), 'initial', 'mask-origin: getPropertyValue matches accessor');
  s.maskOrigin = 'inherit';
  assertEq(s.maskOrigin, 'inherit', 'mask-origin: overwrite with second value');
  s.removeProperty('mask-origin');
  assertEq(s.maskOrigin, '', 'mask-origin: removeProperty clears value');
  s.setProperty('mask-origin', 'inherit');
  assertEq(s.getPropertyValue('mask-origin'), 'inherit', 'mask-origin: accepts inherit');
  s.maskOrigin = '';
  assertEq(s.maskOrigin, '', 'mask-origin: empty string removes');
}

// --- -webkit-mask-position-x ---
{
  const s = fresh();
  s.webkitMaskPositionX = 'initial';
  assertEq(s.webkitMaskPositionX, 'initial', '-webkit-mask-position-x: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('-webkit-mask-position-x'), 'initial', '-webkit-mask-position-x: getPropertyValue matches accessor');
  s.webkitMaskPositionX = 'inherit';
  assertEq(s.webkitMaskPositionX, 'inherit', '-webkit-mask-position-x: overwrite with second value');
  s.removeProperty('-webkit-mask-position-x');
  assertEq(s.webkitMaskPositionX, '', '-webkit-mask-position-x: removeProperty clears value');
  s.setProperty('-webkit-mask-position-x', 'inherit');
  assertEq(s.getPropertyValue('-webkit-mask-position-x'), 'inherit', '-webkit-mask-position-x: accepts inherit');
  s.webkitMaskPositionX = '';
  assertEq(s.webkitMaskPositionX, '', '-webkit-mask-position-x: empty string removes');
}

// --- -webkit-mask-position-y ---
{
  const s = fresh();
  s.webkitMaskPositionY = 'initial';
  assertEq(s.webkitMaskPositionY, 'initial', '-webkit-mask-position-y: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('-webkit-mask-position-y'), 'initial', '-webkit-mask-position-y: getPropertyValue matches accessor');
  s.webkitMaskPositionY = 'inherit';
  assertEq(s.webkitMaskPositionY, 'inherit', '-webkit-mask-position-y: overwrite with second value');
  s.removeProperty('-webkit-mask-position-y');
  assertEq(s.webkitMaskPositionY, '', '-webkit-mask-position-y: removeProperty clears value');
  s.setProperty('-webkit-mask-position-y', 'inherit');
  assertEq(s.getPropertyValue('-webkit-mask-position-y'), 'inherit', '-webkit-mask-position-y: accepts inherit');
  s.webkitMaskPositionY = '';
  assertEq(s.webkitMaskPositionY, '', '-webkit-mask-position-y: empty string removes');
}

// --- mask-repeat ---
{
  const s = fresh();
  s.maskRepeat = 'initial';
  assertEq(s.maskRepeat, 'initial', 'mask-repeat: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('mask-repeat'), 'initial', 'mask-repeat: getPropertyValue matches accessor');
  s.maskRepeat = 'inherit';
  assertEq(s.maskRepeat, 'inherit', 'mask-repeat: overwrite with second value');
  s.removeProperty('mask-repeat');
  assertEq(s.maskRepeat, '', 'mask-repeat: removeProperty clears value');
  s.setProperty('mask-repeat', 'inherit');
  assertEq(s.getPropertyValue('mask-repeat'), 'inherit', 'mask-repeat: accepts inherit');
  s.maskRepeat = '';
  assertEq(s.maskRepeat, '', 'mask-repeat: empty string removes');
}

// --- mask-size ---
{
  const s = fresh();
  s.maskSize = '10px';
  assertEq(s.maskSize, '10px', 'mask-size: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('mask-size'), '10px', 'mask-size: getPropertyValue matches accessor');
  s.maskSize = 'inherit';
  assertEq(s.maskSize, 'inherit', 'mask-size: overwrite with second value');
  s.removeProperty('mask-size');
  assertEq(s.maskSize, '', 'mask-size: removeProperty clears value');
  s.setProperty('mask-size', 'inherit');
  assertEq(s.getPropertyValue('mask-size'), 'inherit', 'mask-size: accepts inherit');
  s.maskSize = '';
  assertEq(s.maskSize, '', 'mask-size: empty string removes');
}

// --- -webkit-perspective-origin-x ---
{
  const s = fresh();
  s.webkitPerspectiveOriginX = 'initial';
  assertEq(s.webkitPerspectiveOriginX, 'initial', '-webkit-perspective-origin-x: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('-webkit-perspective-origin-x'), 'initial', '-webkit-perspective-origin-x: getPropertyValue matches accessor');
  s.webkitPerspectiveOriginX = 'inherit';
  assertEq(s.webkitPerspectiveOriginX, 'inherit', '-webkit-perspective-origin-x: overwrite with second value');
  s.removeProperty('-webkit-perspective-origin-x');
  assertEq(s.webkitPerspectiveOriginX, '', '-webkit-perspective-origin-x: removeProperty clears value');
  s.setProperty('-webkit-perspective-origin-x', 'inherit');
  assertEq(s.getPropertyValue('-webkit-perspective-origin-x'), 'inherit', '-webkit-perspective-origin-x: accepts inherit');
  s.webkitPerspectiveOriginX = '';
  assertEq(s.webkitPerspectiveOriginX, '', '-webkit-perspective-origin-x: empty string removes');
}

// --- -webkit-perspective-origin-y ---
{
  const s = fresh();
  s.webkitPerspectiveOriginY = 'initial';
  assertEq(s.webkitPerspectiveOriginY, 'initial', '-webkit-perspective-origin-y: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('-webkit-perspective-origin-y'), 'initial', '-webkit-perspective-origin-y: getPropertyValue matches accessor');
  s.webkitPerspectiveOriginY = 'inherit';
  assertEq(s.webkitPerspectiveOriginY, 'inherit', '-webkit-perspective-origin-y: overwrite with second value');
  s.removeProperty('-webkit-perspective-origin-y');
  assertEq(s.webkitPerspectiveOriginY, '', '-webkit-perspective-origin-y: removeProperty clears value');
  s.setProperty('-webkit-perspective-origin-y', 'inherit');
  assertEq(s.getPropertyValue('-webkit-perspective-origin-y'), 'inherit', '-webkit-perspective-origin-y: accepts inherit');
  s.webkitPerspectiveOriginY = '';
  assertEq(s.webkitPerspectiveOriginY, '', '-webkit-perspective-origin-y: empty string removes');
}

// --- -webkit-rtl-ordering ---
{
  const s = fresh();
  s.webkitRtlOrdering = 'logical';
  assertEq(s.webkitRtlOrdering, 'logical', '-webkit-rtl-ordering: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('-webkit-rtl-ordering'), 'logical', '-webkit-rtl-ordering: getPropertyValue matches accessor');
  s.webkitRtlOrdering = 'visual';
  assertEq(s.webkitRtlOrdering, 'visual', '-webkit-rtl-ordering: overwrite with second value');
  s.removeProperty('-webkit-rtl-ordering');
  assertEq(s.webkitRtlOrdering, '', '-webkit-rtl-ordering: removeProperty clears value');
  s.setProperty('-webkit-rtl-ordering', 'inherit');
  assertEq(s.getPropertyValue('-webkit-rtl-ordering'), 'inherit', '-webkit-rtl-ordering: accepts inherit');
  s.webkitRtlOrdering = '';
  assertEq(s.webkitRtlOrdering, '', '-webkit-rtl-ordering: empty string removes');
  s.webkitRtlOrdering = 'logical';
  s.webkitRtlOrdering = 'definitely-not-a-valid-value-xyz';
  assertEq(s.webkitRtlOrdering, 'logical', '-webkit-rtl-ordering: rejects invalid keyword');
}

// --- ruby-align ---
{
  const s = fresh();
  s.rubyAlign = 'space-around';
  assertEq(s.rubyAlign, 'space-around', 'ruby-align: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('ruby-align'), 'space-around', 'ruby-align: getPropertyValue matches accessor');
  s.rubyAlign = 'start';
  assertEq(s.rubyAlign, 'start', 'ruby-align: overwrite with second value');
  s.removeProperty('ruby-align');
  assertEq(s.rubyAlign, '', 'ruby-align: removeProperty clears value');
  s.setProperty('ruby-align', 'inherit');
  assertEq(s.getPropertyValue('ruby-align'), 'inherit', 'ruby-align: accepts inherit');
  s.rubyAlign = '';
  assertEq(s.rubyAlign, '', 'ruby-align: empty string removes');
  s.rubyAlign = 'space-around';
  s.rubyAlign = 'definitely-not-a-valid-value-xyz';
  assertEq(s.rubyAlign, 'space-around', 'ruby-align: rejects invalid keyword');
}

// --- ruby-overhang ---
{
  const s = fresh();
  s.rubyOverhang = 'auto';
  assertEq(s.rubyOverhang, 'auto', 'ruby-overhang: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('ruby-overhang'), 'auto', 'ruby-overhang: getPropertyValue matches accessor');
  s.rubyOverhang = 'none';
  assertEq(s.rubyOverhang, 'none', 'ruby-overhang: overwrite with second value');
  s.removeProperty('ruby-overhang');
  assertEq(s.rubyOverhang, '', 'ruby-overhang: removeProperty clears value');
  s.setProperty('ruby-overhang', 'inherit');
  assertEq(s.getPropertyValue('ruby-overhang'), 'inherit', 'ruby-overhang: accepts inherit');
  s.rubyOverhang = '';
  assertEq(s.rubyOverhang, '', 'ruby-overhang: empty string removes');
  s.rubyOverhang = 'auto';
  s.rubyOverhang = 'definitely-not-a-valid-value-xyz';
  assertEq(s.rubyOverhang, 'auto', 'ruby-overhang: rejects invalid keyword');
}

// --- -webkit-ruby-position ---
{
  const s = fresh();
  s.webkitRubyPosition = 'initial';
  assertEq(s.webkitRubyPosition, 'initial', '-webkit-ruby-position: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('-webkit-ruby-position'), 'initial', '-webkit-ruby-position: getPropertyValue matches accessor');
  s.webkitRubyPosition = 'inherit';
  assertEq(s.webkitRubyPosition, 'inherit', '-webkit-ruby-position: overwrite with second value');
  s.removeProperty('-webkit-ruby-position');
  assertEq(s.webkitRubyPosition, '', '-webkit-ruby-position: removeProperty clears value');
  s.setProperty('-webkit-ruby-position', 'inherit');
  assertEq(s.getPropertyValue('-webkit-ruby-position'), 'inherit', '-webkit-ruby-position: accepts inherit');
  s.webkitRubyPosition = '';
  assertEq(s.webkitRubyPosition, '', '-webkit-ruby-position: empty string removes');
}

// --- ruby-position ---
{
  const s = fresh();
  s.rubyPosition = 'over';
  assertEq(s.rubyPosition, 'over', 'ruby-position: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('ruby-position'), 'over', 'ruby-position: getPropertyValue matches accessor');
  s.rubyPosition = 'under';
  assertEq(s.rubyPosition, 'under', 'ruby-position: overwrite with second value');
  s.removeProperty('ruby-position');
  assertEq(s.rubyPosition, '', 'ruby-position: removeProperty clears value');
  s.setProperty('ruby-position', 'inherit');
  assertEq(s.getPropertyValue('ruby-position'), 'inherit', 'ruby-position: accepts inherit');
  s.rubyPosition = '';
  assertEq(s.rubyPosition, '', 'ruby-position: empty string removes');
  s.rubyPosition = 'over';
  s.rubyPosition = 'definitely-not-a-valid-value-xyz';
  assertEq(s.rubyPosition, 'over', 'ruby-position: rejects invalid keyword');
}

// --- -webkit-tap-highlight-color ---
{
  const s = fresh();
  s.webkitTapHighlightColor = 'blue';
  assertEq(s.webkitTapHighlightColor, 'blue', '-webkit-tap-highlight-color: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('-webkit-tap-highlight-color'), 'blue', '-webkit-tap-highlight-color: getPropertyValue matches accessor');
  s.webkitTapHighlightColor = 'inherit';
  assertEq(s.webkitTapHighlightColor, 'inherit', '-webkit-tap-highlight-color: overwrite with second value');
  s.removeProperty('-webkit-tap-highlight-color');
  assertEq(s.webkitTapHighlightColor, '', '-webkit-tap-highlight-color: removeProperty clears value');
  s.setProperty('-webkit-tap-highlight-color', 'inherit');
  assertEq(s.getPropertyValue('-webkit-tap-highlight-color'), 'inherit', '-webkit-tap-highlight-color: accepts inherit');
  s.webkitTapHighlightColor = '';
  assertEq(s.webkitTapHighlightColor, '', '-webkit-tap-highlight-color: empty string removes');
}

// --- -webkit-text-combine ---
{
  const s = fresh();
  s.webkitTextCombine = 'initial';
  assertEq(s.webkitTextCombine, 'initial', '-webkit-text-combine: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('-webkit-text-combine'), 'initial', '-webkit-text-combine: getPropertyValue matches accessor');
  s.webkitTextCombine = 'inherit';
  assertEq(s.webkitTextCombine, 'inherit', '-webkit-text-combine: overwrite with second value');
  s.removeProperty('-webkit-text-combine');
  assertEq(s.webkitTextCombine, '', '-webkit-text-combine: removeProperty clears value');
  s.setProperty('-webkit-text-combine', 'inherit');
  assertEq(s.getPropertyValue('-webkit-text-combine'), 'inherit', '-webkit-text-combine: accepts inherit');
  s.webkitTextCombine = '';
  assertEq(s.webkitTextCombine, '', '-webkit-text-combine: empty string removes');
}

// --- text-emphasis-color ---
{
  const s = fresh();
  s.textEmphasisColor = 'red';
  assertEq(s.textEmphasisColor, 'red', 'text-emphasis-color: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('text-emphasis-color'), 'red', 'text-emphasis-color: getPropertyValue matches accessor');
  s.textEmphasisColor = 'blue';
  assertEq(s.textEmphasisColor, 'blue', 'text-emphasis-color: overwrite with second value');
  s.removeProperty('text-emphasis-color');
  assertEq(s.textEmphasisColor, '', 'text-emphasis-color: removeProperty clears value');
  s.setProperty('text-emphasis-color', 'inherit');
  assertEq(s.getPropertyValue('text-emphasis-color'), 'inherit', 'text-emphasis-color: accepts inherit');
  s.textEmphasisColor = '';
  assertEq(s.textEmphasisColor, '', 'text-emphasis-color: empty string removes');
}

// --- text-emphasis-position ---
{
  const s = fresh();
  s.textEmphasisPosition = 'initial';
  assertEq(s.textEmphasisPosition, 'initial', 'text-emphasis-position: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('text-emphasis-position'), 'initial', 'text-emphasis-position: getPropertyValue matches accessor');
  s.textEmphasisPosition = 'inherit';
  assertEq(s.textEmphasisPosition, 'inherit', 'text-emphasis-position: overwrite with second value');
  s.removeProperty('text-emphasis-position');
  assertEq(s.textEmphasisPosition, '', 'text-emphasis-position: removeProperty clears value');
  s.setProperty('text-emphasis-position', 'inherit');
  assertEq(s.getPropertyValue('text-emphasis-position'), 'inherit', 'text-emphasis-position: accepts inherit');
  s.textEmphasisPosition = '';
  assertEq(s.textEmphasisPosition, '', 'text-emphasis-position: empty string removes');
}

// --- text-emphasis-style ---
{
  const s = fresh();
  s.textEmphasisStyle = 'initial';
  assertEq(s.textEmphasisStyle, 'initial', 'text-emphasis-style: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('text-emphasis-style'), 'initial', 'text-emphasis-style: getPropertyValue matches accessor');
  s.textEmphasisStyle = 'inherit';
  assertEq(s.textEmphasisStyle, 'inherit', 'text-emphasis-style: overwrite with second value');
  s.removeProperty('text-emphasis-style');
  assertEq(s.textEmphasisStyle, '', 'text-emphasis-style: removeProperty clears value');
  s.setProperty('text-emphasis-style', 'inherit');
  assertEq(s.getPropertyValue('text-emphasis-style'), 'inherit', 'text-emphasis-style: accepts inherit');
  s.textEmphasisStyle = '';
  assertEq(s.textEmphasisStyle, '', 'text-emphasis-style: empty string removes');
}

// --- -webkit-text-fill-color ---
{
  const s = fresh();
  s.webkitTextFillColor = 'red';
  assertEq(s.webkitTextFillColor, 'red', '-webkit-text-fill-color: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('-webkit-text-fill-color'), 'red', '-webkit-text-fill-color: getPropertyValue matches accessor');
  s.webkitTextFillColor = 'blue';
  assertEq(s.webkitTextFillColor, 'blue', '-webkit-text-fill-color: overwrite with second value');
  s.removeProperty('-webkit-text-fill-color');
  assertEq(s.webkitTextFillColor, '', '-webkit-text-fill-color: removeProperty clears value');
  s.setProperty('-webkit-text-fill-color', 'inherit');
  assertEq(s.getPropertyValue('-webkit-text-fill-color'), 'inherit', '-webkit-text-fill-color: accepts inherit');
  s.webkitTextFillColor = '';
  assertEq(s.webkitTextFillColor, '', '-webkit-text-fill-color: empty string removes');
}

// --- text-fit ---
{
  const s = fresh();
  s.textFit = 'initial';
  assertEq(s.textFit, 'initial', 'text-fit: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('text-fit'), 'initial', 'text-fit: getPropertyValue matches accessor');
  s.textFit = 'inherit';
  assertEq(s.textFit, 'inherit', 'text-fit: overwrite with second value');
  s.removeProperty('text-fit');
  assertEq(s.textFit, '', 'text-fit: removeProperty clears value');
  s.setProperty('text-fit', 'inherit');
  assertEq(s.getPropertyValue('text-fit'), 'inherit', 'text-fit: accepts inherit');
  s.textFit = '';
  assertEq(s.textFit, '', 'text-fit: empty string removes');
}

// --- -webkit-text-security ---
{
  const s = fresh();
  s.webkitTextSecurity = 'none';
  assertEq(s.webkitTextSecurity, 'none', '-webkit-text-security: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('-webkit-text-security'), 'none', '-webkit-text-security: getPropertyValue matches accessor');
  s.webkitTextSecurity = 'disc';
  assertEq(s.webkitTextSecurity, 'disc', '-webkit-text-security: overwrite with second value');
  s.removeProperty('-webkit-text-security');
  assertEq(s.webkitTextSecurity, '', '-webkit-text-security: removeProperty clears value');
  s.setProperty('-webkit-text-security', 'inherit');
  assertEq(s.getPropertyValue('-webkit-text-security'), 'inherit', '-webkit-text-security: accepts inherit');
  s.webkitTextSecurity = '';
  assertEq(s.webkitTextSecurity, '', '-webkit-text-security: empty string removes');
  s.webkitTextSecurity = 'none';
  s.webkitTextSecurity = 'definitely-not-a-valid-value-xyz';
  assertEq(s.webkitTextSecurity, 'none', '-webkit-text-security: rejects invalid keyword');
}

// --- -webkit-text-stroke-color ---
{
  const s = fresh();
  s.webkitTextStrokeColor = 'red';
  assertEq(s.webkitTextStrokeColor, 'red', '-webkit-text-stroke-color: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('-webkit-text-stroke-color'), 'red', '-webkit-text-stroke-color: getPropertyValue matches accessor');
  s.webkitTextStrokeColor = 'blue';
  assertEq(s.webkitTextStrokeColor, 'blue', '-webkit-text-stroke-color: overwrite with second value');
  s.removeProperty('-webkit-text-stroke-color');
  assertEq(s.webkitTextStrokeColor, '', '-webkit-text-stroke-color: removeProperty clears value');
  s.setProperty('-webkit-text-stroke-color', 'inherit');
  assertEq(s.getPropertyValue('-webkit-text-stroke-color'), 'inherit', '-webkit-text-stroke-color: accepts inherit');
  s.webkitTextStrokeColor = '';
  assertEq(s.webkitTextStrokeColor, '', '-webkit-text-stroke-color: empty string removes');
}

// --- -webkit-text-stroke-width ---
{
  const s = fresh();
  s.webkitTextStrokeWidth = '10px';
  assertEq(s.webkitTextStrokeWidth, '10px', '-webkit-text-stroke-width: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('-webkit-text-stroke-width'), '10px', '-webkit-text-stroke-width: getPropertyValue matches accessor');
  s.webkitTextStrokeWidth = 'inherit';
  assertEq(s.webkitTextStrokeWidth, 'inherit', '-webkit-text-stroke-width: overwrite with second value');
  s.removeProperty('-webkit-text-stroke-width');
  assertEq(s.webkitTextStrokeWidth, '', '-webkit-text-stroke-width: removeProperty clears value');
  s.setProperty('-webkit-text-stroke-width', 'inherit');
  assertEq(s.getPropertyValue('-webkit-text-stroke-width'), 'inherit', '-webkit-text-stroke-width: accepts inherit');
  s.webkitTextStrokeWidth = '';
  assertEq(s.webkitTextStrokeWidth, '', '-webkit-text-stroke-width: empty string removes');
}

// --- -webkit-transform-origin-x ---
{
  const s = fresh();
  s.webkitTransformOriginX = 'initial';
  assertEq(s.webkitTransformOriginX, 'initial', '-webkit-transform-origin-x: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('-webkit-transform-origin-x'), 'initial', '-webkit-transform-origin-x: getPropertyValue matches accessor');
  s.webkitTransformOriginX = 'inherit';
  assertEq(s.webkitTransformOriginX, 'inherit', '-webkit-transform-origin-x: overwrite with second value');
  s.removeProperty('-webkit-transform-origin-x');
  assertEq(s.webkitTransformOriginX, '', '-webkit-transform-origin-x: removeProperty clears value');
  s.setProperty('-webkit-transform-origin-x', 'inherit');
  assertEq(s.getPropertyValue('-webkit-transform-origin-x'), 'inherit', '-webkit-transform-origin-x: accepts inherit');
  s.webkitTransformOriginX = '';
  assertEq(s.webkitTransformOriginX, '', '-webkit-transform-origin-x: empty string removes');
}

// --- -webkit-transform-origin-y ---
{
  const s = fresh();
  s.webkitTransformOriginY = 'initial';
  assertEq(s.webkitTransformOriginY, 'initial', '-webkit-transform-origin-y: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('-webkit-transform-origin-y'), 'initial', '-webkit-transform-origin-y: getPropertyValue matches accessor');
  s.webkitTransformOriginY = 'inherit';
  assertEq(s.webkitTransformOriginY, 'inherit', '-webkit-transform-origin-y: overwrite with second value');
  s.removeProperty('-webkit-transform-origin-y');
  assertEq(s.webkitTransformOriginY, '', '-webkit-transform-origin-y: removeProperty clears value');
  s.setProperty('-webkit-transform-origin-y', 'inherit');
  assertEq(s.getPropertyValue('-webkit-transform-origin-y'), 'inherit', '-webkit-transform-origin-y: accepts inherit');
  s.webkitTransformOriginY = '';
  assertEq(s.webkitTransformOriginY, '', '-webkit-transform-origin-y: empty string removes');
}

// --- -webkit-transform-origin-z ---
{
  const s = fresh();
  s.webkitTransformOriginZ = 'initial';
  assertEq(s.webkitTransformOriginZ, 'initial', '-webkit-transform-origin-z: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('-webkit-transform-origin-z'), 'initial', '-webkit-transform-origin-z: getPropertyValue matches accessor');
  s.webkitTransformOriginZ = 'inherit';
  assertEq(s.webkitTransformOriginZ, 'inherit', '-webkit-transform-origin-z: overwrite with second value');
  s.removeProperty('-webkit-transform-origin-z');
  assertEq(s.webkitTransformOriginZ, '', '-webkit-transform-origin-z: removeProperty clears value');
  s.setProperty('-webkit-transform-origin-z', 'inherit');
  assertEq(s.getPropertyValue('-webkit-transform-origin-z'), 'inherit', '-webkit-transform-origin-z: accepts inherit');
  s.webkitTransformOriginZ = '';
  assertEq(s.webkitTransformOriginZ, '', '-webkit-transform-origin-z: empty string removes');
}

// --- -webkit-user-drag ---
{
  const s = fresh();
  s.webkitUserDrag = 'auto';
  assertEq(s.webkitUserDrag, 'auto', '-webkit-user-drag: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('-webkit-user-drag'), 'auto', '-webkit-user-drag: getPropertyValue matches accessor');
  s.webkitUserDrag = 'none';
  assertEq(s.webkitUserDrag, 'none', '-webkit-user-drag: overwrite with second value');
  s.removeProperty('-webkit-user-drag');
  assertEq(s.webkitUserDrag, '', '-webkit-user-drag: removeProperty clears value');
  s.setProperty('-webkit-user-drag', 'inherit');
  assertEq(s.getPropertyValue('-webkit-user-drag'), 'inherit', '-webkit-user-drag: accepts inherit');
  s.webkitUserDrag = '';
  assertEq(s.webkitUserDrag, '', '-webkit-user-drag: empty string removes');
  s.webkitUserDrag = 'auto';
  s.webkitUserDrag = 'definitely-not-a-valid-value-xyz';
  assertEq(s.webkitUserDrag, 'auto', '-webkit-user-drag: rejects invalid keyword');
}

// --- -webkit-user-modify ---
{
  const s = fresh();
  s.webkitUserModify = 'read-only';
  assertEq(s.webkitUserModify, 'read-only', '-webkit-user-modify: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('-webkit-user-modify'), 'read-only', '-webkit-user-modify: getPropertyValue matches accessor');
  s.webkitUserModify = 'read-write';
  assertEq(s.webkitUserModify, 'read-write', '-webkit-user-modify: overwrite with second value');
  s.removeProperty('-webkit-user-modify');
  assertEq(s.webkitUserModify, '', '-webkit-user-modify: removeProperty clears value');
  s.setProperty('-webkit-user-modify', 'inherit');
  assertEq(s.getPropertyValue('-webkit-user-modify'), 'inherit', '-webkit-user-modify: accepts inherit');
  s.webkitUserModify = '';
  assertEq(s.webkitUserModify, '', '-webkit-user-modify: empty string removes');
  s.webkitUserModify = 'read-only';
  s.webkitUserModify = 'definitely-not-a-valid-value-xyz';
  assertEq(s.webkitUserModify, 'read-only', '-webkit-user-modify: rejects invalid keyword');
}

// --- user-select ---
{
  const s = fresh();
  s.userSelect = 'auto';
  assertEq(s.userSelect, 'auto', 'user-select: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('user-select'), 'auto', 'user-select: getPropertyValue matches accessor');
  s.userSelect = 'none';
  assertEq(s.userSelect, 'none', 'user-select: overwrite with second value');
  s.removeProperty('user-select');
  assertEq(s.userSelect, '', 'user-select: removeProperty clears value');
  s.setProperty('user-select', 'inherit');
  assertEq(s.getPropertyValue('user-select'), 'inherit', 'user-select: accepts inherit');
  s.userSelect = '';
  assertEq(s.userSelect, '', 'user-select: empty string removes');
  s.userSelect = 'auto';
  s.userSelect = 'definitely-not-a-valid-value-xyz';
  assertEq(s.userSelect, 'auto', 'user-select: rejects invalid keyword');
}

// --- white-space-collapse ---
{
  const s = fresh();
  s.whiteSpaceCollapse = 'collapse';
  assertEq(s.whiteSpaceCollapse, 'collapse', 'white-space-collapse: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('white-space-collapse'), 'collapse', 'white-space-collapse: getPropertyValue matches accessor');
  s.whiteSpaceCollapse = 'preserve';
  assertEq(s.whiteSpaceCollapse, 'preserve', 'white-space-collapse: overwrite with second value');
  s.removeProperty('white-space-collapse');
  assertEq(s.whiteSpaceCollapse, '', 'white-space-collapse: removeProperty clears value');
  s.setProperty('white-space-collapse', 'inherit');
  assertEq(s.getPropertyValue('white-space-collapse'), 'inherit', 'white-space-collapse: accepts inherit');
  s.whiteSpaceCollapse = '';
  assertEq(s.whiteSpaceCollapse, '', 'white-space-collapse: empty string removes');
  s.whiteSpaceCollapse = 'collapse';
  s.whiteSpaceCollapse = 'definitely-not-a-valid-value-xyz';
  assertEq(s.whiteSpaceCollapse, 'collapse', 'white-space-collapse: rejects invalid keyword');
}

// --- text-wrap-mode ---
{
  const s = fresh();
  s.textWrapMode = 'wrap';
  assertEq(s.textWrapMode, 'wrap', 'text-wrap-mode: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('text-wrap-mode'), 'wrap', 'text-wrap-mode: getPropertyValue matches accessor');
  s.textWrapMode = 'nowrap';
  assertEq(s.textWrapMode, 'nowrap', 'text-wrap-mode: overwrite with second value');
  s.removeProperty('text-wrap-mode');
  assertEq(s.textWrapMode, '', 'text-wrap-mode: removeProperty clears value');
  s.setProperty('text-wrap-mode', 'inherit');
  assertEq(s.getPropertyValue('text-wrap-mode'), 'inherit', 'text-wrap-mode: accepts inherit');
  s.textWrapMode = '';
  assertEq(s.textWrapMode, '', 'text-wrap-mode: empty string removes');
  s.textWrapMode = 'wrap';
  s.textWrapMode = 'definitely-not-a-valid-value-xyz';
  assertEq(s.textWrapMode, 'wrap', 'text-wrap-mode: rejects invalid keyword');
}

// --- text-wrap-style ---
{
  const s = fresh();
  s.textWrapStyle = 'auto';
  assertEq(s.textWrapStyle, 'auto', 'text-wrap-style: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('text-wrap-style'), 'auto', 'text-wrap-style: getPropertyValue matches accessor');
  s.textWrapStyle = 'balance';
  assertEq(s.textWrapStyle, 'balance', 'text-wrap-style: overwrite with second value');
  s.removeProperty('text-wrap-style');
  assertEq(s.textWrapStyle, '', 'text-wrap-style: removeProperty clears value');
  s.setProperty('text-wrap-style', 'inherit');
  assertEq(s.getPropertyValue('text-wrap-style'), 'inherit', 'text-wrap-style: accepts inherit');
  s.textWrapStyle = '';
  assertEq(s.textWrapStyle, '', 'text-wrap-style: empty string removes');
  s.textWrapStyle = 'auto';
  s.textWrapStyle = 'definitely-not-a-valid-value-xyz';
  assertEq(s.textWrapStyle, 'auto', 'text-wrap-style: rejects invalid keyword');
}

// --- widows ---
{
  const s = fresh();
  s.widows = '1';
  assertEq(s.widows, '1', 'widows: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('widows'), '1', 'widows: getPropertyValue matches accessor');
  s.widows = '2';
  assertEq(s.widows, '2', 'widows: overwrite with second value');
  s.removeProperty('widows');
  assertEq(s.widows, '', 'widows: removeProperty clears value');
  s.setProperty('widows', 'inherit');
  assertEq(s.getPropertyValue('widows'), 'inherit', 'widows: accepts inherit');
  s.widows = '';
  assertEq(s.widows, '', 'widows: empty string removes');
}

// --- width ---
{
  const s = fresh();
  s.width = '10px';
  assertEq(s.width, '10px', 'width: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('width'), '10px', 'width: getPropertyValue matches accessor');
  s.width = '20px';
  assertEq(s.width, '20px', 'width: overwrite with second value');
  s.removeProperty('width');
  assertEq(s.width, '', 'width: removeProperty clears value');
  s.setProperty('width', 'inherit');
  assertEq(s.getPropertyValue('width'), 'inherit', 'width: accepts inherit');
  s.width = '';
  assertEq(s.width, '', 'width: empty string removes');
}

// --- will-change ---
{
  const s = fresh();
  s.willChange = 'auto';
  assertEq(s.willChange, 'auto', 'will-change: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('will-change'), 'auto', 'will-change: getPropertyValue matches accessor');
  s.willChange = 'inherit';
  assertEq(s.willChange, 'inherit', 'will-change: overwrite with second value');
  s.removeProperty('will-change');
  assertEq(s.willChange, '', 'will-change: removeProperty clears value');
  s.setProperty('will-change', 'inherit');
  assertEq(s.getPropertyValue('will-change'), 'inherit', 'will-change: accepts inherit');
  s.willChange = '';
  assertEq(s.willChange, '', 'will-change: empty string removes');
  s.willChange = 'auto';
  s.willChange = 'definitely-not-a-valid-value-xyz';
  assertEq(s.willChange, 'auto', 'will-change: rejects invalid keyword');
}

// --- word-break ---
{
  const s = fresh();
  s.wordBreak = 'normal';
  assertEq(s.wordBreak, 'normal', 'word-break: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('word-break'), 'normal', 'word-break: getPropertyValue matches accessor');
  s.wordBreak = 'break-all';
  assertEq(s.wordBreak, 'break-all', 'word-break: overwrite with second value');
  s.removeProperty('word-break');
  assertEq(s.wordBreak, '', 'word-break: removeProperty clears value');
  s.setProperty('word-break', 'inherit');
  assertEq(s.getPropertyValue('word-break'), 'inherit', 'word-break: accepts inherit');
  s.wordBreak = '';
  assertEq(s.wordBreak, '', 'word-break: empty string removes');
  s.wordBreak = 'normal';
  s.wordBreak = 'definitely-not-a-valid-value-xyz';
  assertEq(s.wordBreak, 'normal', 'word-break: rejects invalid keyword');
}

// --- word-spacing ---
{
  const s = fresh();
  s.wordSpacing = '10px';
  assertEq(s.wordSpacing, '10px', 'word-spacing: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('word-spacing'), '10px', 'word-spacing: getPropertyValue matches accessor');
  s.wordSpacing = '20px';
  assertEq(s.wordSpacing, '20px', 'word-spacing: overwrite with second value');
  s.removeProperty('word-spacing');
  assertEq(s.wordSpacing, '', 'word-spacing: removeProperty clears value');
  s.setProperty('word-spacing', 'inherit');
  assertEq(s.getPropertyValue('word-spacing'), 'inherit', 'word-spacing: accepts inherit');
  s.wordSpacing = '';
  assertEq(s.wordSpacing, '', 'word-spacing: empty string removes');
}

// --- z-index ---
{
  const s = fresh();
  s.zIndex = '1';
  assertEq(s.zIndex, '1', 'z-index: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('z-index'), '1', 'z-index: getPropertyValue matches accessor');
  s.zIndex = '2';
  assertEq(s.zIndex, '2', 'z-index: overwrite with second value');
  s.removeProperty('z-index');
  assertEq(s.zIndex, '', 'z-index: removeProperty clears value');
  s.setProperty('z-index', 'inherit');
  assertEq(s.getPropertyValue('z-index'), 'inherit', 'z-index: accepts inherit');
  s.zIndex = '';
  assertEq(s.zIndex, '', 'z-index: empty string removes');
}

// --- inline-size ---
{
  const s = fresh();
  s.inlineSize = '10px';
  assertEq(s.inlineSize, '10px', 'inline-size: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('inline-size'), '10px', 'inline-size: getPropertyValue matches accessor');
  s.inlineSize = '20px';
  assertEq(s.inlineSize, '20px', 'inline-size: overwrite with second value');
  s.removeProperty('inline-size');
  assertEq(s.inlineSize, '', 'inline-size: removeProperty clears value');
  s.setProperty('inline-size', 'inherit');
  assertEq(s.getPropertyValue('inline-size'), 'inherit', 'inline-size: accepts inherit');
  s.inlineSize = '';
  assertEq(s.inlineSize, '', 'inline-size: empty string removes');
}

// --- block-size ---
{
  const s = fresh();
  s.blockSize = '10px';
  assertEq(s.blockSize, '10px', 'block-size: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('block-size'), '10px', 'block-size: getPropertyValue matches accessor');
  s.blockSize = '20px';
  assertEq(s.blockSize, '20px', 'block-size: overwrite with second value');
  s.removeProperty('block-size');
  assertEq(s.blockSize, '', 'block-size: removeProperty clears value');
  s.setProperty('block-size', 'inherit');
  assertEq(s.getPropertyValue('block-size'), 'inherit', 'block-size: accepts inherit');
  s.blockSize = '';
  assertEq(s.blockSize, '', 'block-size: empty string removes');
}

// --- min-inline-size ---
{
  const s = fresh();
  s.minInlineSize = '10px';
  assertEq(s.minInlineSize, '10px', 'min-inline-size: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('min-inline-size'), '10px', 'min-inline-size: getPropertyValue matches accessor');
  s.minInlineSize = '20px';
  assertEq(s.minInlineSize, '20px', 'min-inline-size: overwrite with second value');
  s.removeProperty('min-inline-size');
  assertEq(s.minInlineSize, '', 'min-inline-size: removeProperty clears value');
  s.setProperty('min-inline-size', 'inherit');
  assertEq(s.getPropertyValue('min-inline-size'), 'inherit', 'min-inline-size: accepts inherit');
  s.minInlineSize = '';
  assertEq(s.minInlineSize, '', 'min-inline-size: empty string removes');
}

// --- min-block-size ---
{
  const s = fresh();
  s.minBlockSize = '10px';
  assertEq(s.minBlockSize, '10px', 'min-block-size: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('min-block-size'), '10px', 'min-block-size: getPropertyValue matches accessor');
  s.minBlockSize = '20px';
  assertEq(s.minBlockSize, '20px', 'min-block-size: overwrite with second value');
  s.removeProperty('min-block-size');
  assertEq(s.minBlockSize, '', 'min-block-size: removeProperty clears value');
  s.setProperty('min-block-size', 'inherit');
  assertEq(s.getPropertyValue('min-block-size'), 'inherit', 'min-block-size: accepts inherit');
  s.minBlockSize = '';
  assertEq(s.minBlockSize, '', 'min-block-size: empty string removes');
}

// --- max-inline-size ---
{
  const s = fresh();
  s.maxInlineSize = '10px';
  assertEq(s.maxInlineSize, '10px', 'max-inline-size: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('max-inline-size'), '10px', 'max-inline-size: getPropertyValue matches accessor');
  s.maxInlineSize = '20px';
  assertEq(s.maxInlineSize, '20px', 'max-inline-size: overwrite with second value');
  s.removeProperty('max-inline-size');
  assertEq(s.maxInlineSize, '', 'max-inline-size: removeProperty clears value');
  s.setProperty('max-inline-size', 'inherit');
  assertEq(s.getPropertyValue('max-inline-size'), 'inherit', 'max-inline-size: accepts inherit');
  s.maxInlineSize = '';
  assertEq(s.maxInlineSize, '', 'max-inline-size: empty string removes');
}

// --- max-block-size ---
{
  const s = fresh();
  s.maxBlockSize = '10px';
  assertEq(s.maxBlockSize, '10px', 'max-block-size: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('max-block-size'), '10px', 'max-block-size: getPropertyValue matches accessor');
  s.maxBlockSize = '20px';
  assertEq(s.maxBlockSize, '20px', 'max-block-size: overwrite with second value');
  s.removeProperty('max-block-size');
  assertEq(s.maxBlockSize, '', 'max-block-size: removeProperty clears value');
  s.setProperty('max-block-size', 'inherit');
  assertEq(s.getPropertyValue('max-block-size'), 'inherit', 'max-block-size: accepts inherit');
  s.maxBlockSize = '';
  assertEq(s.maxBlockSize, '', 'max-block-size: empty string removes');
}

// --- margin-inline-start ---
{
  const s = fresh();
  s.marginInlineStart = '10px';
  assertEq(s.marginInlineStart, '10px', 'margin-inline-start: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('margin-inline-start'), '10px', 'margin-inline-start: getPropertyValue matches accessor');
  s.marginInlineStart = '20px';
  assertEq(s.marginInlineStart, '20px', 'margin-inline-start: overwrite with second value');
  s.removeProperty('margin-inline-start');
  assertEq(s.marginInlineStart, '', 'margin-inline-start: removeProperty clears value');
  s.setProperty('margin-inline-start', 'inherit');
  assertEq(s.getPropertyValue('margin-inline-start'), 'inherit', 'margin-inline-start: accepts inherit');
  s.marginInlineStart = '';
  assertEq(s.marginInlineStart, '', 'margin-inline-start: empty string removes');
}

// --- margin-inline-end ---
{
  const s = fresh();
  s.marginInlineEnd = '10px';
  assertEq(s.marginInlineEnd, '10px', 'margin-inline-end: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('margin-inline-end'), '10px', 'margin-inline-end: getPropertyValue matches accessor');
  s.marginInlineEnd = '20px';
  assertEq(s.marginInlineEnd, '20px', 'margin-inline-end: overwrite with second value');
  s.removeProperty('margin-inline-end');
  assertEq(s.marginInlineEnd, '', 'margin-inline-end: removeProperty clears value');
  s.setProperty('margin-inline-end', 'inherit');
  assertEq(s.getPropertyValue('margin-inline-end'), 'inherit', 'margin-inline-end: accepts inherit');
  s.marginInlineEnd = '';
  assertEq(s.marginInlineEnd, '', 'margin-inline-end: empty string removes');
}

// --- margin-block-start ---
{
  const s = fresh();
  s.marginBlockStart = '10px';
  assertEq(s.marginBlockStart, '10px', 'margin-block-start: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('margin-block-start'), '10px', 'margin-block-start: getPropertyValue matches accessor');
  s.marginBlockStart = '20px';
  assertEq(s.marginBlockStart, '20px', 'margin-block-start: overwrite with second value');
  s.removeProperty('margin-block-start');
  assertEq(s.marginBlockStart, '', 'margin-block-start: removeProperty clears value');
  s.setProperty('margin-block-start', 'inherit');
  assertEq(s.getPropertyValue('margin-block-start'), 'inherit', 'margin-block-start: accepts inherit');
  s.marginBlockStart = '';
  assertEq(s.marginBlockStart, '', 'margin-block-start: empty string removes');
}

// --- margin-block-end ---
{
  const s = fresh();
  s.marginBlockEnd = '10px';
  assertEq(s.marginBlockEnd, '10px', 'margin-block-end: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('margin-block-end'), '10px', 'margin-block-end: getPropertyValue matches accessor');
  s.marginBlockEnd = '20px';
  assertEq(s.marginBlockEnd, '20px', 'margin-block-end: overwrite with second value');
  s.removeProperty('margin-block-end');
  assertEq(s.marginBlockEnd, '', 'margin-block-end: removeProperty clears value');
  s.setProperty('margin-block-end', 'inherit');
  assertEq(s.getPropertyValue('margin-block-end'), 'inherit', 'margin-block-end: accepts inherit');
  s.marginBlockEnd = '';
  assertEq(s.marginBlockEnd, '', 'margin-block-end: empty string removes');
}

// --- padding-inline-start ---
{
  const s = fresh();
  s.paddingInlineStart = '10px';
  assertEq(s.paddingInlineStart, '10px', 'padding-inline-start: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('padding-inline-start'), '10px', 'padding-inline-start: getPropertyValue matches accessor');
  s.paddingInlineStart = '20px';
  assertEq(s.paddingInlineStart, '20px', 'padding-inline-start: overwrite with second value');
  s.removeProperty('padding-inline-start');
  assertEq(s.paddingInlineStart, '', 'padding-inline-start: removeProperty clears value');
  s.setProperty('padding-inline-start', 'inherit');
  assertEq(s.getPropertyValue('padding-inline-start'), 'inherit', 'padding-inline-start: accepts inherit');
  s.paddingInlineStart = '';
  assertEq(s.paddingInlineStart, '', 'padding-inline-start: empty string removes');
}

// --- padding-inline-end ---
{
  const s = fresh();
  s.paddingInlineEnd = '10px';
  assertEq(s.paddingInlineEnd, '10px', 'padding-inline-end: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('padding-inline-end'), '10px', 'padding-inline-end: getPropertyValue matches accessor');
  s.paddingInlineEnd = '20px';
  assertEq(s.paddingInlineEnd, '20px', 'padding-inline-end: overwrite with second value');
  s.removeProperty('padding-inline-end');
  assertEq(s.paddingInlineEnd, '', 'padding-inline-end: removeProperty clears value');
  s.setProperty('padding-inline-end', 'inherit');
  assertEq(s.getPropertyValue('padding-inline-end'), 'inherit', 'padding-inline-end: accepts inherit');
  s.paddingInlineEnd = '';
  assertEq(s.paddingInlineEnd, '', 'padding-inline-end: empty string removes');
}

// --- padding-block-start ---
{
  const s = fresh();
  s.paddingBlockStart = '10px';
  assertEq(s.paddingBlockStart, '10px', 'padding-block-start: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('padding-block-start'), '10px', 'padding-block-start: getPropertyValue matches accessor');
  s.paddingBlockStart = '20px';
  assertEq(s.paddingBlockStart, '20px', 'padding-block-start: overwrite with second value');
  s.removeProperty('padding-block-start');
  assertEq(s.paddingBlockStart, '', 'padding-block-start: removeProperty clears value');
  s.setProperty('padding-block-start', 'inherit');
  assertEq(s.getPropertyValue('padding-block-start'), 'inherit', 'padding-block-start: accepts inherit');
  s.paddingBlockStart = '';
  assertEq(s.paddingBlockStart, '', 'padding-block-start: empty string removes');
}

// --- padding-block-end ---
{
  const s = fresh();
  s.paddingBlockEnd = '10px';
  assertEq(s.paddingBlockEnd, '10px', 'padding-block-end: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('padding-block-end'), '10px', 'padding-block-end: getPropertyValue matches accessor');
  s.paddingBlockEnd = '20px';
  assertEq(s.paddingBlockEnd, '20px', 'padding-block-end: overwrite with second value');
  s.removeProperty('padding-block-end');
  assertEq(s.paddingBlockEnd, '', 'padding-block-end: removeProperty clears value');
  s.setProperty('padding-block-end', 'inherit');
  assertEq(s.getPropertyValue('padding-block-end'), 'inherit', 'padding-block-end: accepts inherit');
  s.paddingBlockEnd = '';
  assertEq(s.paddingBlockEnd, '', 'padding-block-end: empty string removes');
}

// --- border-inline-start-width ---
{
  const s = fresh();
  s.borderInlineStartWidth = '10px';
  assertEq(s.borderInlineStartWidth, '10px', 'border-inline-start-width: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('border-inline-start-width'), '10px', 'border-inline-start-width: getPropertyValue matches accessor');
  s.borderInlineStartWidth = '20px';
  assertEq(s.borderInlineStartWidth, '20px', 'border-inline-start-width: overwrite with second value');
  s.removeProperty('border-inline-start-width');
  assertEq(s.borderInlineStartWidth, '', 'border-inline-start-width: removeProperty clears value');
  s.setProperty('border-inline-start-width', 'inherit');
  assertEq(s.getPropertyValue('border-inline-start-width'), 'inherit', 'border-inline-start-width: accepts inherit');
  s.borderInlineStartWidth = '';
  assertEq(s.borderInlineStartWidth, '', 'border-inline-start-width: empty string removes');
}

// --- border-inline-start-style ---
{
  const s = fresh();
  s.borderInlineStartStyle = 'initial';
  assertEq(s.borderInlineStartStyle, 'initial', 'border-inline-start-style: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('border-inline-start-style'), 'initial', 'border-inline-start-style: getPropertyValue matches accessor');
  s.borderInlineStartStyle = 'inherit';
  assertEq(s.borderInlineStartStyle, 'inherit', 'border-inline-start-style: overwrite with second value');
  s.removeProperty('border-inline-start-style');
  assertEq(s.borderInlineStartStyle, '', 'border-inline-start-style: removeProperty clears value');
  s.setProperty('border-inline-start-style', 'inherit');
  assertEq(s.getPropertyValue('border-inline-start-style'), 'inherit', 'border-inline-start-style: accepts inherit');
  s.borderInlineStartStyle = '';
  assertEq(s.borderInlineStartStyle, '', 'border-inline-start-style: empty string removes');
}

// --- border-inline-start-color ---
{
  const s = fresh();
  s.borderInlineStartColor = 'red';
  assertEq(s.borderInlineStartColor, 'red', 'border-inline-start-color: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('border-inline-start-color'), 'red', 'border-inline-start-color: getPropertyValue matches accessor');
  s.borderInlineStartColor = 'blue';
  assertEq(s.borderInlineStartColor, 'blue', 'border-inline-start-color: overwrite with second value');
  s.removeProperty('border-inline-start-color');
  assertEq(s.borderInlineStartColor, '', 'border-inline-start-color: removeProperty clears value');
  s.setProperty('border-inline-start-color', 'inherit');
  assertEq(s.getPropertyValue('border-inline-start-color'), 'inherit', 'border-inline-start-color: accepts inherit');
  s.borderInlineStartColor = '';
  assertEq(s.borderInlineStartColor, '', 'border-inline-start-color: empty string removes');
}

// --- border-inline-end-width ---
{
  const s = fresh();
  s.borderInlineEndWidth = '10px';
  assertEq(s.borderInlineEndWidth, '10px', 'border-inline-end-width: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('border-inline-end-width'), '10px', 'border-inline-end-width: getPropertyValue matches accessor');
  s.borderInlineEndWidth = '20px';
  assertEq(s.borderInlineEndWidth, '20px', 'border-inline-end-width: overwrite with second value');
  s.removeProperty('border-inline-end-width');
  assertEq(s.borderInlineEndWidth, '', 'border-inline-end-width: removeProperty clears value');
  s.setProperty('border-inline-end-width', 'inherit');
  assertEq(s.getPropertyValue('border-inline-end-width'), 'inherit', 'border-inline-end-width: accepts inherit');
  s.borderInlineEndWidth = '';
  assertEq(s.borderInlineEndWidth, '', 'border-inline-end-width: empty string removes');
}

// --- border-inline-end-style ---
{
  const s = fresh();
  s.borderInlineEndStyle = 'initial';
  assertEq(s.borderInlineEndStyle, 'initial', 'border-inline-end-style: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('border-inline-end-style'), 'initial', 'border-inline-end-style: getPropertyValue matches accessor');
  s.borderInlineEndStyle = 'inherit';
  assertEq(s.borderInlineEndStyle, 'inherit', 'border-inline-end-style: overwrite with second value');
  s.removeProperty('border-inline-end-style');
  assertEq(s.borderInlineEndStyle, '', 'border-inline-end-style: removeProperty clears value');
  s.setProperty('border-inline-end-style', 'inherit');
  assertEq(s.getPropertyValue('border-inline-end-style'), 'inherit', 'border-inline-end-style: accepts inherit');
  s.borderInlineEndStyle = '';
  assertEq(s.borderInlineEndStyle, '', 'border-inline-end-style: empty string removes');
}

// --- border-inline-end-color ---
{
  const s = fresh();
  s.borderInlineEndColor = 'red';
  assertEq(s.borderInlineEndColor, 'red', 'border-inline-end-color: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('border-inline-end-color'), 'red', 'border-inline-end-color: getPropertyValue matches accessor');
  s.borderInlineEndColor = 'blue';
  assertEq(s.borderInlineEndColor, 'blue', 'border-inline-end-color: overwrite with second value');
  s.removeProperty('border-inline-end-color');
  assertEq(s.borderInlineEndColor, '', 'border-inline-end-color: removeProperty clears value');
  s.setProperty('border-inline-end-color', 'inherit');
  assertEq(s.getPropertyValue('border-inline-end-color'), 'inherit', 'border-inline-end-color: accepts inherit');
  s.borderInlineEndColor = '';
  assertEq(s.borderInlineEndColor, '', 'border-inline-end-color: empty string removes');
}

// --- border-block-start-width ---
{
  const s = fresh();
  s.borderBlockStartWidth = '10px';
  assertEq(s.borderBlockStartWidth, '10px', 'border-block-start-width: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('border-block-start-width'), '10px', 'border-block-start-width: getPropertyValue matches accessor');
  s.borderBlockStartWidth = '20px';
  assertEq(s.borderBlockStartWidth, '20px', 'border-block-start-width: overwrite with second value');
  s.removeProperty('border-block-start-width');
  assertEq(s.borderBlockStartWidth, '', 'border-block-start-width: removeProperty clears value');
  s.setProperty('border-block-start-width', 'inherit');
  assertEq(s.getPropertyValue('border-block-start-width'), 'inherit', 'border-block-start-width: accepts inherit');
  s.borderBlockStartWidth = '';
  assertEq(s.borderBlockStartWidth, '', 'border-block-start-width: empty string removes');
}

// --- border-block-start-style ---
{
  const s = fresh();
  s.borderBlockStartStyle = 'initial';
  assertEq(s.borderBlockStartStyle, 'initial', 'border-block-start-style: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('border-block-start-style'), 'initial', 'border-block-start-style: getPropertyValue matches accessor');
  s.borderBlockStartStyle = 'inherit';
  assertEq(s.borderBlockStartStyle, 'inherit', 'border-block-start-style: overwrite with second value');
  s.removeProperty('border-block-start-style');
  assertEq(s.borderBlockStartStyle, '', 'border-block-start-style: removeProperty clears value');
  s.setProperty('border-block-start-style', 'inherit');
  assertEq(s.getPropertyValue('border-block-start-style'), 'inherit', 'border-block-start-style: accepts inherit');
  s.borderBlockStartStyle = '';
  assertEq(s.borderBlockStartStyle, '', 'border-block-start-style: empty string removes');
}

// --- border-block-start-color ---
{
  const s = fresh();
  s.borderBlockStartColor = 'red';
  assertEq(s.borderBlockStartColor, 'red', 'border-block-start-color: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('border-block-start-color'), 'red', 'border-block-start-color: getPropertyValue matches accessor');
  s.borderBlockStartColor = 'blue';
  assertEq(s.borderBlockStartColor, 'blue', 'border-block-start-color: overwrite with second value');
  s.removeProperty('border-block-start-color');
  assertEq(s.borderBlockStartColor, '', 'border-block-start-color: removeProperty clears value');
  s.setProperty('border-block-start-color', 'inherit');
  assertEq(s.getPropertyValue('border-block-start-color'), 'inherit', 'border-block-start-color: accepts inherit');
  s.borderBlockStartColor = '';
  assertEq(s.borderBlockStartColor, '', 'border-block-start-color: empty string removes');
}

// --- border-block-end-width ---
{
  const s = fresh();
  s.borderBlockEndWidth = '10px';
  assertEq(s.borderBlockEndWidth, '10px', 'border-block-end-width: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('border-block-end-width'), '10px', 'border-block-end-width: getPropertyValue matches accessor');
  s.borderBlockEndWidth = '20px';
  assertEq(s.borderBlockEndWidth, '20px', 'border-block-end-width: overwrite with second value');
  s.removeProperty('border-block-end-width');
  assertEq(s.borderBlockEndWidth, '', 'border-block-end-width: removeProperty clears value');
  s.setProperty('border-block-end-width', 'inherit');
  assertEq(s.getPropertyValue('border-block-end-width'), 'inherit', 'border-block-end-width: accepts inherit');
  s.borderBlockEndWidth = '';
  assertEq(s.borderBlockEndWidth, '', 'border-block-end-width: empty string removes');
}

// --- border-block-end-style ---
{
  const s = fresh();
  s.borderBlockEndStyle = 'initial';
  assertEq(s.borderBlockEndStyle, 'initial', 'border-block-end-style: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('border-block-end-style'), 'initial', 'border-block-end-style: getPropertyValue matches accessor');
  s.borderBlockEndStyle = 'inherit';
  assertEq(s.borderBlockEndStyle, 'inherit', 'border-block-end-style: overwrite with second value');
  s.removeProperty('border-block-end-style');
  assertEq(s.borderBlockEndStyle, '', 'border-block-end-style: removeProperty clears value');
  s.setProperty('border-block-end-style', 'inherit');
  assertEq(s.getPropertyValue('border-block-end-style'), 'inherit', 'border-block-end-style: accepts inherit');
  s.borderBlockEndStyle = '';
  assertEq(s.borderBlockEndStyle, '', 'border-block-end-style: empty string removes');
}

// --- border-block-end-color ---
{
  const s = fresh();
  s.borderBlockEndColor = 'red';
  assertEq(s.borderBlockEndColor, 'red', 'border-block-end-color: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('border-block-end-color'), 'red', 'border-block-end-color: getPropertyValue matches accessor');
  s.borderBlockEndColor = 'blue';
  assertEq(s.borderBlockEndColor, 'blue', 'border-block-end-color: overwrite with second value');
  s.removeProperty('border-block-end-color');
  assertEq(s.borderBlockEndColor, '', 'border-block-end-color: removeProperty clears value');
  s.setProperty('border-block-end-color', 'inherit');
  assertEq(s.getPropertyValue('border-block-end-color'), 'inherit', 'border-block-end-color: accepts inherit');
  s.borderBlockEndColor = '';
  assertEq(s.borderBlockEndColor, '', 'border-block-end-color: empty string removes');
}

// --- inset-inline-start ---
{
  const s = fresh();
  s.insetInlineStart = '10px';
  assertEq(s.insetInlineStart, '10px', 'inset-inline-start: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('inset-inline-start'), '10px', 'inset-inline-start: getPropertyValue matches accessor');
  s.insetInlineStart = '20px';
  assertEq(s.insetInlineStart, '20px', 'inset-inline-start: overwrite with second value');
  s.removeProperty('inset-inline-start');
  assertEq(s.insetInlineStart, '', 'inset-inline-start: removeProperty clears value');
  s.setProperty('inset-inline-start', 'inherit');
  assertEq(s.getPropertyValue('inset-inline-start'), 'inherit', 'inset-inline-start: accepts inherit');
  s.insetInlineStart = '';
  assertEq(s.insetInlineStart, '', 'inset-inline-start: empty string removes');
}

// --- inset-inline-end ---
{
  const s = fresh();
  s.insetInlineEnd = '10px';
  assertEq(s.insetInlineEnd, '10px', 'inset-inline-end: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('inset-inline-end'), '10px', 'inset-inline-end: getPropertyValue matches accessor');
  s.insetInlineEnd = '20px';
  assertEq(s.insetInlineEnd, '20px', 'inset-inline-end: overwrite with second value');
  s.removeProperty('inset-inline-end');
  assertEq(s.insetInlineEnd, '', 'inset-inline-end: removeProperty clears value');
  s.setProperty('inset-inline-end', 'inherit');
  assertEq(s.getPropertyValue('inset-inline-end'), 'inherit', 'inset-inline-end: accepts inherit');
  s.insetInlineEnd = '';
  assertEq(s.insetInlineEnd, '', 'inset-inline-end: empty string removes');
}

// --- inset-block-start ---
{
  const s = fresh();
  s.insetBlockStart = '10px';
  assertEq(s.insetBlockStart, '10px', 'inset-block-start: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('inset-block-start'), '10px', 'inset-block-start: getPropertyValue matches accessor');
  s.insetBlockStart = '20px';
  assertEq(s.insetBlockStart, '20px', 'inset-block-start: overwrite with second value');
  s.removeProperty('inset-block-start');
  assertEq(s.insetBlockStart, '', 'inset-block-start: removeProperty clears value');
  s.setProperty('inset-block-start', 'inherit');
  assertEq(s.getPropertyValue('inset-block-start'), 'inherit', 'inset-block-start: accepts inherit');
  s.insetBlockStart = '';
  assertEq(s.insetBlockStart, '', 'inset-block-start: empty string removes');
}

// --- inset-block-end ---
{
  const s = fresh();
  s.insetBlockEnd = '10px';
  assertEq(s.insetBlockEnd, '10px', 'inset-block-end: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('inset-block-end'), '10px', 'inset-block-end: getPropertyValue matches accessor');
  s.insetBlockEnd = '20px';
  assertEq(s.insetBlockEnd, '20px', 'inset-block-end: overwrite with second value');
  s.removeProperty('inset-block-end');
  assertEq(s.insetBlockEnd, '', 'inset-block-end: removeProperty clears value');
  s.setProperty('inset-block-end', 'inherit');
  assertEq(s.getPropertyValue('inset-block-end'), 'inherit', 'inset-block-end: accepts inherit');
  s.insetBlockEnd = '';
  assertEq(s.insetBlockEnd, '', 'inset-block-end: empty string removes');
}

// --- border-start-start-radius ---
{
  const s = fresh();
  s.borderStartStartRadius = '10px';
  assertEq(s.borderStartStartRadius, '10px', 'border-start-start-radius: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('border-start-start-radius'), '10px', 'border-start-start-radius: getPropertyValue matches accessor');
  s.borderStartStartRadius = '20px';
  assertEq(s.borderStartStartRadius, '20px', 'border-start-start-radius: overwrite with second value');
  s.removeProperty('border-start-start-radius');
  assertEq(s.borderStartStartRadius, '', 'border-start-start-radius: removeProperty clears value');
  s.setProperty('border-start-start-radius', 'inherit');
  assertEq(s.getPropertyValue('border-start-start-radius'), 'inherit', 'border-start-start-radius: accepts inherit');
  s.borderStartStartRadius = '';
  assertEq(s.borderStartStartRadius, '', 'border-start-start-radius: empty string removes');
}

// --- border-start-end-radius ---
{
  const s = fresh();
  s.borderStartEndRadius = '10px';
  assertEq(s.borderStartEndRadius, '10px', 'border-start-end-radius: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('border-start-end-radius'), '10px', 'border-start-end-radius: getPropertyValue matches accessor');
  s.borderStartEndRadius = '20px';
  assertEq(s.borderStartEndRadius, '20px', 'border-start-end-radius: overwrite with second value');
  s.removeProperty('border-start-end-radius');
  assertEq(s.borderStartEndRadius, '', 'border-start-end-radius: removeProperty clears value');
  s.setProperty('border-start-end-radius', 'inherit');
  assertEq(s.getPropertyValue('border-start-end-radius'), 'inherit', 'border-start-end-radius: accepts inherit');
  s.borderStartEndRadius = '';
  assertEq(s.borderStartEndRadius, '', 'border-start-end-radius: empty string removes');
}

// --- border-end-start-radius ---
{
  const s = fresh();
  s.borderEndStartRadius = '10px';
  assertEq(s.borderEndStartRadius, '10px', 'border-end-start-radius: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('border-end-start-radius'), '10px', 'border-end-start-radius: getPropertyValue matches accessor');
  s.borderEndStartRadius = '20px';
  assertEq(s.borderEndStartRadius, '20px', 'border-end-start-radius: overwrite with second value');
  s.removeProperty('border-end-start-radius');
  assertEq(s.borderEndStartRadius, '', 'border-end-start-radius: removeProperty clears value');
  s.setProperty('border-end-start-radius', 'inherit');
  assertEq(s.getPropertyValue('border-end-start-radius'), 'inherit', 'border-end-start-radius: accepts inherit');
  s.borderEndStartRadius = '';
  assertEq(s.borderEndStartRadius, '', 'border-end-start-radius: empty string removes');
}

// --- border-end-end-radius ---
{
  const s = fresh();
  s.borderEndEndRadius = '10px';
  assertEq(s.borderEndEndRadius, '10px', 'border-end-end-radius: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('border-end-end-radius'), '10px', 'border-end-end-radius: getPropertyValue matches accessor');
  s.borderEndEndRadius = '20px';
  assertEq(s.borderEndEndRadius, '20px', 'border-end-end-radius: overwrite with second value');
  s.removeProperty('border-end-end-radius');
  assertEq(s.borderEndEndRadius, '', 'border-end-end-radius: removeProperty clears value');
  s.setProperty('border-end-end-radius', 'inherit');
  assertEq(s.getPropertyValue('border-end-end-radius'), 'inherit', 'border-end-end-radius: accepts inherit');
  s.borderEndEndRadius = '';
  assertEq(s.borderEndEndRadius, '', 'border-end-end-radius: empty string removes');
}

// --- corner-start-start-shape ---
{
  const s = fresh();
  s.cornerStartStartShape = 'initial';
  assertEq(s.cornerStartStartShape, 'initial', 'corner-start-start-shape: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('corner-start-start-shape'), 'initial', 'corner-start-start-shape: getPropertyValue matches accessor');
  s.cornerStartStartShape = 'inherit';
  assertEq(s.cornerStartStartShape, 'inherit', 'corner-start-start-shape: overwrite with second value');
  s.removeProperty('corner-start-start-shape');
  assertEq(s.cornerStartStartShape, '', 'corner-start-start-shape: removeProperty clears value');
  s.setProperty('corner-start-start-shape', 'inherit');
  assertEq(s.getPropertyValue('corner-start-start-shape'), 'inherit', 'corner-start-start-shape: accepts inherit');
  s.cornerStartStartShape = '';
  assertEq(s.cornerStartStartShape, '', 'corner-start-start-shape: empty string removes');
}

// --- corner-start-end-shape ---
{
  const s = fresh();
  s.cornerStartEndShape = 'initial';
  assertEq(s.cornerStartEndShape, 'initial', 'corner-start-end-shape: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('corner-start-end-shape'), 'initial', 'corner-start-end-shape: getPropertyValue matches accessor');
  s.cornerStartEndShape = 'inherit';
  assertEq(s.cornerStartEndShape, 'inherit', 'corner-start-end-shape: overwrite with second value');
  s.removeProperty('corner-start-end-shape');
  assertEq(s.cornerStartEndShape, '', 'corner-start-end-shape: removeProperty clears value');
  s.setProperty('corner-start-end-shape', 'inherit');
  assertEq(s.getPropertyValue('corner-start-end-shape'), 'inherit', 'corner-start-end-shape: accepts inherit');
  s.cornerStartEndShape = '';
  assertEq(s.cornerStartEndShape, '', 'corner-start-end-shape: empty string removes');
}

// --- corner-end-start-shape ---
{
  const s = fresh();
  s.cornerEndStartShape = 'initial';
  assertEq(s.cornerEndStartShape, 'initial', 'corner-end-start-shape: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('corner-end-start-shape'), 'initial', 'corner-end-start-shape: getPropertyValue matches accessor');
  s.cornerEndStartShape = 'inherit';
  assertEq(s.cornerEndStartShape, 'inherit', 'corner-end-start-shape: overwrite with second value');
  s.removeProperty('corner-end-start-shape');
  assertEq(s.cornerEndStartShape, '', 'corner-end-start-shape: removeProperty clears value');
  s.setProperty('corner-end-start-shape', 'inherit');
  assertEq(s.getPropertyValue('corner-end-start-shape'), 'inherit', 'corner-end-start-shape: accepts inherit');
  s.cornerEndStartShape = '';
  assertEq(s.cornerEndStartShape, '', 'corner-end-start-shape: empty string removes');
}

// --- corner-end-end-shape ---
{
  const s = fresh();
  s.cornerEndEndShape = 'initial';
  assertEq(s.cornerEndEndShape, 'initial', 'corner-end-end-shape: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('corner-end-end-shape'), 'initial', 'corner-end-end-shape: getPropertyValue matches accessor');
  s.cornerEndEndShape = 'inherit';
  assertEq(s.cornerEndEndShape, 'inherit', 'corner-end-end-shape: overwrite with second value');
  s.removeProperty('corner-end-end-shape');
  assertEq(s.cornerEndEndShape, '', 'corner-end-end-shape: removeProperty clears value');
  s.setProperty('corner-end-end-shape', 'inherit');
  assertEq(s.getPropertyValue('corner-end-end-shape'), 'inherit', 'corner-end-end-shape: accepts inherit');
  s.cornerEndEndShape = '';
  assertEq(s.cornerEndEndShape, '', 'corner-end-end-shape: empty string removes');
}

// --- all ---
{
  const s = fresh();
  s.all = 'initial';
  assertEq(s.all, 'initial', 'all: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('all'), 'initial', 'all: getPropertyValue matches accessor');
  s.all = 'inherit';
  assertEq(s.all, 'inherit', 'all: overwrite with second value');
  s.removeProperty('all');
  assertEq(s.all, '', 'all: removeProperty clears value');
  s.setProperty('all', 'inherit');
  assertEq(s.getPropertyValue('all'), 'inherit', 'all: accepts inherit');
  s.all = '';
  assertEq(s.all, '', 'all: empty string removes');
}

// --- -webkit-text-decorations-in-effect ---
{
  const s = fresh();
  s.webkitTextDecorationsInEffect = 'initial';
  assertEq(s.webkitTextDecorationsInEffect, 'initial', '-webkit-text-decorations-in-effect: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('-webkit-text-decorations-in-effect'), 'initial', '-webkit-text-decorations-in-effect: getPropertyValue matches accessor');
  s.webkitTextDecorationsInEffect = 'inherit';
  assertEq(s.webkitTextDecorationsInEffect, 'inherit', '-webkit-text-decorations-in-effect: overwrite with second value');
  s.removeProperty('-webkit-text-decorations-in-effect');
  assertEq(s.webkitTextDecorationsInEffect, '', '-webkit-text-decorations-in-effect: removeProperty clears value');
  s.setProperty('-webkit-text-decorations-in-effect', 'inherit');
  assertEq(s.getPropertyValue('-webkit-text-decorations-in-effect'), 'inherit', '-webkit-text-decorations-in-effect: accepts inherit');
  s.webkitTextDecorationsInEffect = '';
  assertEq(s.webkitTextDecorationsInEffect, '', '-webkit-text-decorations-in-effect: empty string removes');
}

// --- position-area ---
{
  const s = fresh();
  s.positionArea = 'none';
  assertEq(s.positionArea, 'none', 'position-area: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('position-area'), 'none', 'position-area: getPropertyValue matches accessor');
  s.positionArea = 'top';
  assertEq(s.positionArea, 'top', 'position-area: overwrite with second value');
  s.removeProperty('position-area');
  assertEq(s.positionArea, '', 'position-area: removeProperty clears value');
  s.setProperty('position-area', 'inherit');
  assertEq(s.getPropertyValue('position-area'), 'inherit', 'position-area: accepts inherit');
  s.positionArea = '';
  assertEq(s.positionArea, '', 'position-area: empty string removes');
  s.positionArea = 'none';
  s.positionArea = 'definitely-not-a-valid-value-xyz';
  assertEq(s.positionArea, 'none', 'position-area: rejects invalid keyword');
}

// --- contain-intrinsic-inline-size ---
{
  const s = fresh();
  s.containIntrinsicInlineSize = '10px';
  assertEq(s.containIntrinsicInlineSize, '10px', 'contain-intrinsic-inline-size: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('contain-intrinsic-inline-size'), '10px', 'contain-intrinsic-inline-size: getPropertyValue matches accessor');
  s.containIntrinsicInlineSize = 'inherit';
  assertEq(s.containIntrinsicInlineSize, 'inherit', 'contain-intrinsic-inline-size: overwrite with second value');
  s.removeProperty('contain-intrinsic-inline-size');
  assertEq(s.containIntrinsicInlineSize, '', 'contain-intrinsic-inline-size: removeProperty clears value');
  s.setProperty('contain-intrinsic-inline-size', 'inherit');
  assertEq(s.getPropertyValue('contain-intrinsic-inline-size'), 'inherit', 'contain-intrinsic-inline-size: accepts inherit');
  s.containIntrinsicInlineSize = '';
  assertEq(s.containIntrinsicInlineSize, '', 'contain-intrinsic-inline-size: empty string removes');
}

// --- contain-intrinsic-block-size ---
{
  const s = fresh();
  s.containIntrinsicBlockSize = '10px';
  assertEq(s.containIntrinsicBlockSize, '10px', 'contain-intrinsic-block-size: set/get round-trip via accessor');
  assertEq(s.getPropertyValue('contain-intrinsic-block-size'), '10px', 'contain-intrinsic-block-size: getPropertyValue matches accessor');
  s.containIntrinsicBlockSize = 'inherit';
  assertEq(s.containIntrinsicBlockSize, 'inherit', 'contain-intrinsic-block-size: overwrite with second value');
  s.removeProperty('contain-intrinsic-block-size');
  assertEq(s.containIntrinsicBlockSize, '', 'contain-intrinsic-block-size: removeProperty clears value');
  s.setProperty('contain-intrinsic-block-size', 'inherit');
  assertEq(s.getPropertyValue('contain-intrinsic-block-size'), 'inherit', 'contain-intrinsic-block-size: accepts inherit');
  s.containIntrinsicBlockSize = '';
  assertEq(s.containIntrinsicBlockSize, '', 'contain-intrinsic-block-size: empty string removes');
}

// ============ SHORTHAND PROPERTIES ============

// --- interest-delay (shorthand) ---
{
  const s = fresh();
  s.setProperty('interest-delay', 'inherit');
  assertEq(s.getPropertyValue('interest-delay-start'), 'inherit', 'interest-delay: expands to interest-delay-start');
  assertEq(s.getPropertyValue('interest-delay-end'), 'inherit', 'interest-delay: expands to interest-delay-end');
  s.setProperty('interest-delay', 'inherit');
  assertEq(s.getPropertyValue('interest-delay-start'), 'inherit', 'interest-delay: inherit expands to interest-delay-start');
  assertEq(s.getPropertyValue('interest-delay-end'), 'inherit', 'interest-delay: inherit expands to interest-delay-end');
  s.removeProperty('interest-delay');
  assertEq(s.getPropertyValue('interest-delay-start'), '', 'interest-delay: removeProperty clears interest-delay-start');
  assertEq(s.getPropertyValue('interest-delay-end'), '', 'interest-delay: removeProperty clears interest-delay-end');
}

// --- text-box (shorthand) ---
{
  const s = fresh();
  s.setProperty('text-box', 'inherit');
  assertEq(s.getPropertyValue('text-box-trim'), 'inherit', 'text-box: expands to text-box-trim');
  assertEq(s.getPropertyValue('text-box-edge'), 'inherit', 'text-box: expands to text-box-edge');
  s.setProperty('text-box', 'inherit');
  assertEq(s.getPropertyValue('text-box-trim'), 'inherit', 'text-box: inherit expands to text-box-trim');
  assertEq(s.getPropertyValue('text-box-edge'), 'inherit', 'text-box: inherit expands to text-box-edge');
  s.removeProperty('text-box');
  assertEq(s.getPropertyValue('text-box-trim'), '', 'text-box: removeProperty clears text-box-trim');
  assertEq(s.getPropertyValue('text-box-edge'), '', 'text-box: removeProperty clears text-box-edge');
}

// --- text-spacing (shorthand) ---
{
  const s = fresh();
  s.setProperty('text-spacing', 'inherit');
  assertEq(s.getPropertyValue('text-autospace'), 'inherit', 'text-spacing: expands to text-autospace');
  assertEq(s.getPropertyValue('text-spacing-trim'), 'inherit', 'text-spacing: expands to text-spacing-trim');
  s.setProperty('text-spacing', 'inherit');
  assertEq(s.getPropertyValue('text-autospace'), 'inherit', 'text-spacing: inherit expands to text-autospace');
  assertEq(s.getPropertyValue('text-spacing-trim'), 'inherit', 'text-spacing: inherit expands to text-spacing-trim');
  s.removeProperty('text-spacing');
  assertEq(s.getPropertyValue('text-autospace'), '', 'text-spacing: removeProperty clears text-autospace');
  assertEq(s.getPropertyValue('text-spacing-trim'), '', 'text-spacing: removeProperty clears text-spacing-trim');
}

// --- line-clamp (shorthand) ---
{
  const s = fresh();
  s.setProperty('line-clamp', 'inherit');
  assertEq(s.getPropertyValue('max-lines'), 'inherit', 'line-clamp: expands to max-lines');
  assertEq(s.getPropertyValue('block-ellipsis'), 'inherit', 'line-clamp: expands to block-ellipsis');
  assertEq(s.getPropertyValue('continue'), 'inherit', 'line-clamp: expands to continue');
  s.setProperty('line-clamp', 'inherit');
  assertEq(s.getPropertyValue('max-lines'), 'inherit', 'line-clamp: inherit expands to max-lines');
  assertEq(s.getPropertyValue('block-ellipsis'), 'inherit', 'line-clamp: inherit expands to block-ellipsis');
  assertEq(s.getPropertyValue('continue'), 'inherit', 'line-clamp: inherit expands to continue');
  s.removeProperty('line-clamp');
  assertEq(s.getPropertyValue('max-lines'), '', 'line-clamp: removeProperty clears max-lines');
  assertEq(s.getPropertyValue('block-ellipsis'), '', 'line-clamp: removeProperty clears block-ellipsis');
  assertEq(s.getPropertyValue('continue'), '', 'line-clamp: removeProperty clears continue');
}

// --- -alternative-webkit-line-clamp (shorthand) ---
{
  const s = fresh();
  s.setProperty('-alternative-webkit-line-clamp', 'inherit');
  assertEq(s.getPropertyValue('max-lines'), 'inherit', '-alternative-webkit-line-clamp: expands to max-lines');
  assertEq(s.getPropertyValue('block-ellipsis'), 'inherit', '-alternative-webkit-line-clamp: expands to block-ellipsis');
  assertEq(s.getPropertyValue('continue'), 'inherit', '-alternative-webkit-line-clamp: expands to continue');
  s.setProperty('-alternative-webkit-line-clamp', 'inherit');
  assertEq(s.getPropertyValue('max-lines'), 'inherit', '-alternative-webkit-line-clamp: inherit expands to max-lines');
  assertEq(s.getPropertyValue('block-ellipsis'), 'inherit', '-alternative-webkit-line-clamp: inherit expands to block-ellipsis');
  assertEq(s.getPropertyValue('continue'), 'inherit', '-alternative-webkit-line-clamp: inherit expands to continue');
  s.removeProperty('-alternative-webkit-line-clamp');
  assertEq(s.getPropertyValue('max-lines'), '', '-alternative-webkit-line-clamp: removeProperty clears max-lines');
  assertEq(s.getPropertyValue('block-ellipsis'), '', '-alternative-webkit-line-clamp: removeProperty clears block-ellipsis');
  assertEq(s.getPropertyValue('continue'), '', '-alternative-webkit-line-clamp: removeProperty clears continue');
}

// --- white-space (shorthand) ---
{
  const s = fresh();
  s.setProperty('white-space', 'inherit');
  assertEq(s.getPropertyValue('white-space-collapse'), 'inherit', 'white-space: expands to white-space-collapse');
  assertEq(s.getPropertyValue('text-wrap-mode'), 'inherit', 'white-space: expands to text-wrap-mode');
  s.setProperty('white-space', 'inherit');
  assertEq(s.getPropertyValue('white-space-collapse'), 'inherit', 'white-space: inherit expands to white-space-collapse');
  assertEq(s.getPropertyValue('text-wrap-mode'), 'inherit', 'white-space: inherit expands to text-wrap-mode');
  s.removeProperty('white-space');
  assertEq(s.getPropertyValue('white-space-collapse'), '', 'white-space: removeProperty clears white-space-collapse');
  assertEq(s.getPropertyValue('text-wrap-mode'), '', 'white-space: removeProperty clears text-wrap-mode');
}

// --- text-wrap (shorthand) ---
{
  const s = fresh();
  s.setProperty('text-wrap', 'inherit');
  assertEq(s.getPropertyValue('text-wrap-mode'), 'inherit', 'text-wrap: expands to text-wrap-mode');
  assertEq(s.getPropertyValue('text-wrap-style'), 'inherit', 'text-wrap: expands to text-wrap-style');
  s.setProperty('text-wrap', 'inherit');
  assertEq(s.getPropertyValue('text-wrap-mode'), 'inherit', 'text-wrap: inherit expands to text-wrap-mode');
  assertEq(s.getPropertyValue('text-wrap-style'), 'inherit', 'text-wrap: inherit expands to text-wrap-style');
  s.removeProperty('text-wrap');
  assertEq(s.getPropertyValue('text-wrap-mode'), '', 'text-wrap: removeProperty clears text-wrap-mode');
  assertEq(s.getPropertyValue('text-wrap-style'), '', 'text-wrap: removeProperty clears text-wrap-style');
}

// --- animation (shorthand) ---
{
  const s = fresh();
  s.setProperty('animation', 'inherit');
  assertEq(s.getPropertyValue('animation-duration'), 'inherit', 'animation: expands to animation-duration');
  assertEq(s.getPropertyValue('animation-timing-function'), 'inherit', 'animation: expands to animation-timing-function');
  assertEq(s.getPropertyValue('animation-delay'), 'inherit', 'animation: expands to animation-delay');
  assertEq(s.getPropertyValue('animation-iteration-count'), 'inherit', 'animation: expands to animation-iteration-count');
  assertEq(s.getPropertyValue('animation-direction'), 'inherit', 'animation: expands to animation-direction');
  assertEq(s.getPropertyValue('animation-fill-mode'), 'inherit', 'animation: expands to animation-fill-mode');
  assertEq(s.getPropertyValue('animation-play-state'), 'inherit', 'animation: expands to animation-play-state');
  assertEq(s.getPropertyValue('animation-name'), 'inherit', 'animation: expands to animation-name');
  assertEq(s.getPropertyValue('animation-timeline'), 'inherit', 'animation: expands to animation-timeline');
  assertEq(s.getPropertyValue('animation-range-start'), 'inherit', 'animation: expands to animation-range-start');
  assertEq(s.getPropertyValue('animation-range-end'), 'inherit', 'animation: expands to animation-range-end');
  s.setProperty('animation', 'inherit');
  assertEq(s.getPropertyValue('animation-duration'), 'inherit', 'animation: inherit expands to animation-duration');
  assertEq(s.getPropertyValue('animation-timing-function'), 'inherit', 'animation: inherit expands to animation-timing-function');
  assertEq(s.getPropertyValue('animation-delay'), 'inherit', 'animation: inherit expands to animation-delay');
  assertEq(s.getPropertyValue('animation-iteration-count'), 'inherit', 'animation: inherit expands to animation-iteration-count');
  assertEq(s.getPropertyValue('animation-direction'), 'inherit', 'animation: inherit expands to animation-direction');
  assertEq(s.getPropertyValue('animation-fill-mode'), 'inherit', 'animation: inherit expands to animation-fill-mode');
  assertEq(s.getPropertyValue('animation-play-state'), 'inherit', 'animation: inherit expands to animation-play-state');
  assertEq(s.getPropertyValue('animation-name'), 'inherit', 'animation: inherit expands to animation-name');
  assertEq(s.getPropertyValue('animation-timeline'), 'inherit', 'animation: inherit expands to animation-timeline');
  assertEq(s.getPropertyValue('animation-range-start'), 'inherit', 'animation: inherit expands to animation-range-start');
  assertEq(s.getPropertyValue('animation-range-end'), 'inherit', 'animation: inherit expands to animation-range-end');
  s.removeProperty('animation');
  assertEq(s.getPropertyValue('animation-duration'), '', 'animation: removeProperty clears animation-duration');
  assertEq(s.getPropertyValue('animation-timing-function'), '', 'animation: removeProperty clears animation-timing-function');
  assertEq(s.getPropertyValue('animation-delay'), '', 'animation: removeProperty clears animation-delay');
  assertEq(s.getPropertyValue('animation-iteration-count'), '', 'animation: removeProperty clears animation-iteration-count');
  assertEq(s.getPropertyValue('animation-direction'), '', 'animation: removeProperty clears animation-direction');
  assertEq(s.getPropertyValue('animation-fill-mode'), '', 'animation: removeProperty clears animation-fill-mode');
  assertEq(s.getPropertyValue('animation-play-state'), '', 'animation: removeProperty clears animation-play-state');
  assertEq(s.getPropertyValue('animation-name'), '', 'animation: removeProperty clears animation-name');
  assertEq(s.getPropertyValue('animation-timeline'), '', 'animation: removeProperty clears animation-timeline');
  assertEq(s.getPropertyValue('animation-range-start'), '', 'animation: removeProperty clears animation-range-start');
  assertEq(s.getPropertyValue('animation-range-end'), '', 'animation: removeProperty clears animation-range-end');
}

// --- animation-range (shorthand) ---
{
  const s = fresh();
  s.setProperty('animation-range', 'inherit');
  assertEq(s.getPropertyValue('animation-range-start'), 'inherit', 'animation-range: expands to animation-range-start');
  assertEq(s.getPropertyValue('animation-range-end'), 'inherit', 'animation-range: expands to animation-range-end');
  s.setProperty('animation-range', 'inherit');
  assertEq(s.getPropertyValue('animation-range-start'), 'inherit', 'animation-range: inherit expands to animation-range-start');
  assertEq(s.getPropertyValue('animation-range-end'), 'inherit', 'animation-range: inherit expands to animation-range-end');
  s.removeProperty('animation-range');
  assertEq(s.getPropertyValue('animation-range-start'), '', 'animation-range: removeProperty clears animation-range-start');
  assertEq(s.getPropertyValue('animation-range-end'), '', 'animation-range: removeProperty clears animation-range-end');
}

// --- background (shorthand) ---
{
  const s = fresh();
  s.setProperty('background', 'inherit');
  assertEq(s.getPropertyValue('background-image'), 'inherit', 'background: expands to background-image');
  assertEq(s.getPropertyValue('background-position-x'), 'inherit', 'background: expands to background-position-x');
  assertEq(s.getPropertyValue('background-position-y'), 'inherit', 'background: expands to background-position-y');
  assertEq(s.getPropertyValue('background-size'), 'inherit', 'background: expands to background-size');
  assertEq(s.getPropertyValue('background-repeat'), 'inherit', 'background: expands to background-repeat');
  assertEq(s.getPropertyValue('background-attachment'), 'inherit', 'background: expands to background-attachment');
  assertEq(s.getPropertyValue('background-origin'), 'inherit', 'background: expands to background-origin');
  assertEq(s.getPropertyValue('background-clip'), 'inherit', 'background: expands to background-clip');
  assertEq(s.getPropertyValue('background-color'), 'inherit', 'background: expands to background-color');
  s.setProperty('background', 'inherit');
  assertEq(s.getPropertyValue('background-image'), 'inherit', 'background: inherit expands to background-image');
  assertEq(s.getPropertyValue('background-position-x'), 'inherit', 'background: inherit expands to background-position-x');
  assertEq(s.getPropertyValue('background-position-y'), 'inherit', 'background: inherit expands to background-position-y');
  assertEq(s.getPropertyValue('background-size'), 'inherit', 'background: inherit expands to background-size');
  assertEq(s.getPropertyValue('background-repeat'), 'inherit', 'background: inherit expands to background-repeat');
  assertEq(s.getPropertyValue('background-attachment'), 'inherit', 'background: inherit expands to background-attachment');
  assertEq(s.getPropertyValue('background-origin'), 'inherit', 'background: inherit expands to background-origin');
  assertEq(s.getPropertyValue('background-clip'), 'inherit', 'background: inherit expands to background-clip');
  assertEq(s.getPropertyValue('background-color'), 'inherit', 'background: inherit expands to background-color');
  s.removeProperty('background');
  assertEq(s.getPropertyValue('background-image'), '', 'background: removeProperty clears background-image');
  assertEq(s.getPropertyValue('background-position-x'), '', 'background: removeProperty clears background-position-x');
  assertEq(s.getPropertyValue('background-position-y'), '', 'background: removeProperty clears background-position-y');
  assertEq(s.getPropertyValue('background-size'), '', 'background: removeProperty clears background-size');
  assertEq(s.getPropertyValue('background-repeat'), '', 'background: removeProperty clears background-repeat');
  assertEq(s.getPropertyValue('background-attachment'), '', 'background: removeProperty clears background-attachment');
  assertEq(s.getPropertyValue('background-origin'), '', 'background: removeProperty clears background-origin');
  assertEq(s.getPropertyValue('background-clip'), '', 'background: removeProperty clears background-clip');
  assertEq(s.getPropertyValue('background-color'), '', 'background: removeProperty clears background-color');
}

// --- background-position (shorthand) ---
{
  const s = fresh();
  s.setProperty('background-position', '50% 50%');
  assertEq(s.getPropertyValue('background-position-x'), '50%', 'background-position: expands to background-position-x');
  assertEq(s.getPropertyValue('background-position-y'), '50%', 'background-position: expands to background-position-y');
  s.setProperty('background-position', 'inherit');
  assertEq(s.getPropertyValue('background-position-x'), 'inherit', 'background-position: inherit expands to background-position-x');
  assertEq(s.getPropertyValue('background-position-y'), 'inherit', 'background-position: inherit expands to background-position-y');
  s.removeProperty('background-position');
  assertEq(s.getPropertyValue('background-position-x'), '', 'background-position: removeProperty clears background-position-x');
  assertEq(s.getPropertyValue('background-position-y'), '', 'background-position: removeProperty clears background-position-y');
}

// --- border (shorthand) ---
{
  const s = fresh();
  s.setProperty('border', '2px dashed blue');
  assertEq(s.getPropertyValue('border-top-width'), '2px', 'border: expands to border-top-width');
  assertEq(s.getPropertyValue('border-right-width'), '2px', 'border: expands to border-right-width');
  assertEq(s.getPropertyValue('border-bottom-width'), '2px', 'border: expands to border-bottom-width');
  assertEq(s.getPropertyValue('border-left-width'), '2px', 'border: expands to border-left-width');
  assertEq(s.getPropertyValue('border-top-style'), 'dashed', 'border: expands to border-top-style');
  assertEq(s.getPropertyValue('border-right-style'), 'dashed', 'border: expands to border-right-style');
  assertEq(s.getPropertyValue('border-bottom-style'), 'dashed', 'border: expands to border-bottom-style');
  assertEq(s.getPropertyValue('border-left-style'), 'dashed', 'border: expands to border-left-style');
  assertEq(s.getPropertyValue('border-top-color'), 'blue', 'border: expands to border-top-color');
  assertEq(s.getPropertyValue('border-right-color'), 'blue', 'border: expands to border-right-color');
  assertEq(s.getPropertyValue('border-bottom-color'), 'blue', 'border: expands to border-bottom-color');
  assertEq(s.getPropertyValue('border-left-color'), 'blue', 'border: expands to border-left-color');
  s.setProperty('border', 'inherit');
  assertEq(s.getPropertyValue('border-top-color'), 'inherit', 'border: inherit expands to border-top-color');
  assertEq(s.getPropertyValue('border-top-style'), 'inherit', 'border: inherit expands to border-top-style');
  assertEq(s.getPropertyValue('border-top-width'), 'inherit', 'border: inherit expands to border-top-width');
  assertEq(s.getPropertyValue('border-right-color'), 'inherit', 'border: inherit expands to border-right-color');
  assertEq(s.getPropertyValue('border-right-style'), 'inherit', 'border: inherit expands to border-right-style');
  assertEq(s.getPropertyValue('border-right-width'), 'inherit', 'border: inherit expands to border-right-width');
  assertEq(s.getPropertyValue('border-bottom-color'), 'inherit', 'border: inherit expands to border-bottom-color');
  assertEq(s.getPropertyValue('border-bottom-style'), 'inherit', 'border: inherit expands to border-bottom-style');
  assertEq(s.getPropertyValue('border-bottom-width'), 'inherit', 'border: inherit expands to border-bottom-width');
  assertEq(s.getPropertyValue('border-left-color'), 'inherit', 'border: inherit expands to border-left-color');
  assertEq(s.getPropertyValue('border-left-style'), 'inherit', 'border: inherit expands to border-left-style');
  assertEq(s.getPropertyValue('border-left-width'), 'inherit', 'border: inherit expands to border-left-width');
  assertEq(s.getPropertyValue('border-image-source'), 'inherit', 'border: inherit expands to border-image-source');
  assertEq(s.getPropertyValue('border-image-slice'), 'inherit', 'border: inherit expands to border-image-slice');
  assertEq(s.getPropertyValue('border-image-width'), 'inherit', 'border: inherit expands to border-image-width');
  assertEq(s.getPropertyValue('border-image-outset'), 'inherit', 'border: inherit expands to border-image-outset');
  assertEq(s.getPropertyValue('border-image-repeat'), 'inherit', 'border: inherit expands to border-image-repeat');
  s.removeProperty('border');
  assertEq(s.getPropertyValue('border-top-color'), '', 'border: removeProperty clears border-top-color');
  assertEq(s.getPropertyValue('border-top-style'), '', 'border: removeProperty clears border-top-style');
  assertEq(s.getPropertyValue('border-top-width'), '', 'border: removeProperty clears border-top-width');
  assertEq(s.getPropertyValue('border-right-color'), '', 'border: removeProperty clears border-right-color');
  assertEq(s.getPropertyValue('border-right-style'), '', 'border: removeProperty clears border-right-style');
  assertEq(s.getPropertyValue('border-right-width'), '', 'border: removeProperty clears border-right-width');
  assertEq(s.getPropertyValue('border-bottom-color'), '', 'border: removeProperty clears border-bottom-color');
  assertEq(s.getPropertyValue('border-bottom-style'), '', 'border: removeProperty clears border-bottom-style');
  assertEq(s.getPropertyValue('border-bottom-width'), '', 'border: removeProperty clears border-bottom-width');
  assertEq(s.getPropertyValue('border-left-color'), '', 'border: removeProperty clears border-left-color');
  assertEq(s.getPropertyValue('border-left-style'), '', 'border: removeProperty clears border-left-style');
  assertEq(s.getPropertyValue('border-left-width'), '', 'border: removeProperty clears border-left-width');
  assertEq(s.getPropertyValue('border-image-source'), '', 'border: removeProperty clears border-image-source');
  assertEq(s.getPropertyValue('border-image-slice'), '', 'border: removeProperty clears border-image-slice');
  assertEq(s.getPropertyValue('border-image-width'), '', 'border: removeProperty clears border-image-width');
  assertEq(s.getPropertyValue('border-image-outset'), '', 'border: removeProperty clears border-image-outset');
  assertEq(s.getPropertyValue('border-image-repeat'), '', 'border: removeProperty clears border-image-repeat');
}

// --- border-block (shorthand) ---
{
  const s = fresh();
  s.setProperty('border-block', 'inherit');
  assertEq(s.getPropertyValue('border-block-start-color'), 'inherit', 'border-block: expands to border-block-start-color');
  assertEq(s.getPropertyValue('border-block-start-style'), 'inherit', 'border-block: expands to border-block-start-style');
  assertEq(s.getPropertyValue('border-block-start-width'), 'inherit', 'border-block: expands to border-block-start-width');
  assertEq(s.getPropertyValue('border-block-end-color'), 'inherit', 'border-block: expands to border-block-end-color');
  assertEq(s.getPropertyValue('border-block-end-style'), 'inherit', 'border-block: expands to border-block-end-style');
  assertEq(s.getPropertyValue('border-block-end-width'), 'inherit', 'border-block: expands to border-block-end-width');
  s.setProperty('border-block', 'inherit');
  assertEq(s.getPropertyValue('border-block-start-color'), 'inherit', 'border-block: inherit expands to border-block-start-color');
  assertEq(s.getPropertyValue('border-block-start-style'), 'inherit', 'border-block: inherit expands to border-block-start-style');
  assertEq(s.getPropertyValue('border-block-start-width'), 'inherit', 'border-block: inherit expands to border-block-start-width');
  assertEq(s.getPropertyValue('border-block-end-color'), 'inherit', 'border-block: inherit expands to border-block-end-color');
  assertEq(s.getPropertyValue('border-block-end-style'), 'inherit', 'border-block: inherit expands to border-block-end-style');
  assertEq(s.getPropertyValue('border-block-end-width'), 'inherit', 'border-block: inherit expands to border-block-end-width');
  s.removeProperty('border-block');
  assertEq(s.getPropertyValue('border-block-start-color'), '', 'border-block: removeProperty clears border-block-start-color');
  assertEq(s.getPropertyValue('border-block-start-style'), '', 'border-block: removeProperty clears border-block-start-style');
  assertEq(s.getPropertyValue('border-block-start-width'), '', 'border-block: removeProperty clears border-block-start-width');
  assertEq(s.getPropertyValue('border-block-end-color'), '', 'border-block: removeProperty clears border-block-end-color');
  assertEq(s.getPropertyValue('border-block-end-style'), '', 'border-block: removeProperty clears border-block-end-style');
  assertEq(s.getPropertyValue('border-block-end-width'), '', 'border-block: removeProperty clears border-block-end-width');
}

// --- border-block-color (shorthand) ---
{
  const s = fresh();
  s.setProperty('border-block-color', 'inherit');
  assertEq(s.getPropertyValue('border-block-start-color'), 'inherit', 'border-block-color: expands to border-block-start-color');
  assertEq(s.getPropertyValue('border-block-end-color'), 'inherit', 'border-block-color: expands to border-block-end-color');
  s.setProperty('border-block-color', 'inherit');
  assertEq(s.getPropertyValue('border-block-start-color'), 'inherit', 'border-block-color: inherit expands to border-block-start-color');
  assertEq(s.getPropertyValue('border-block-end-color'), 'inherit', 'border-block-color: inherit expands to border-block-end-color');
  s.removeProperty('border-block-color');
  assertEq(s.getPropertyValue('border-block-start-color'), '', 'border-block-color: removeProperty clears border-block-start-color');
  assertEq(s.getPropertyValue('border-block-end-color'), '', 'border-block-color: removeProperty clears border-block-end-color');
}

// --- border-block-end (shorthand) ---
{
  const s = fresh();
  s.setProperty('border-block-end', '1px solid red');
  assertEq(s.getPropertyValue('border-block-end-width'), '1px', 'border-block-end: expands to border-block-end-width');
  assertEq(s.getPropertyValue('border-block-end-style'), 'solid', 'border-block-end: expands to border-block-end-style');
  assertEq(s.getPropertyValue('border-block-end-color'), 'red', 'border-block-end: expands to border-block-end-color');
  s.setProperty('border-block-end', 'inherit');
  assertEq(s.getPropertyValue('border-block-end-width'), 'inherit', 'border-block-end: inherit expands to border-block-end-width');
  assertEq(s.getPropertyValue('border-block-end-style'), 'inherit', 'border-block-end: inherit expands to border-block-end-style');
  assertEq(s.getPropertyValue('border-block-end-color'), 'inherit', 'border-block-end: inherit expands to border-block-end-color');
  s.removeProperty('border-block-end');
  assertEq(s.getPropertyValue('border-block-end-width'), '', 'border-block-end: removeProperty clears border-block-end-width');
  assertEq(s.getPropertyValue('border-block-end-style'), '', 'border-block-end: removeProperty clears border-block-end-style');
  assertEq(s.getPropertyValue('border-block-end-color'), '', 'border-block-end: removeProperty clears border-block-end-color');
}

// --- border-block-start (shorthand) ---
{
  const s = fresh();
  s.setProperty('border-block-start', '1px solid red');
  assertEq(s.getPropertyValue('border-block-start-width'), '1px', 'border-block-start: expands to border-block-start-width');
  assertEq(s.getPropertyValue('border-block-start-style'), 'solid', 'border-block-start: expands to border-block-start-style');
  assertEq(s.getPropertyValue('border-block-start-color'), 'red', 'border-block-start: expands to border-block-start-color');
  s.setProperty('border-block-start', 'inherit');
  assertEq(s.getPropertyValue('border-block-start-width'), 'inherit', 'border-block-start: inherit expands to border-block-start-width');
  assertEq(s.getPropertyValue('border-block-start-style'), 'inherit', 'border-block-start: inherit expands to border-block-start-style');
  assertEq(s.getPropertyValue('border-block-start-color'), 'inherit', 'border-block-start: inherit expands to border-block-start-color');
  s.removeProperty('border-block-start');
  assertEq(s.getPropertyValue('border-block-start-width'), '', 'border-block-start: removeProperty clears border-block-start-width');
  assertEq(s.getPropertyValue('border-block-start-style'), '', 'border-block-start: removeProperty clears border-block-start-style');
  assertEq(s.getPropertyValue('border-block-start-color'), '', 'border-block-start: removeProperty clears border-block-start-color');
}

// --- border-block-style (shorthand) ---
{
  const s = fresh();
  s.setProperty('border-block-style', 'inherit');
  assertEq(s.getPropertyValue('border-block-start-style'), 'inherit', 'border-block-style: expands to border-block-start-style');
  assertEq(s.getPropertyValue('border-block-end-style'), 'inherit', 'border-block-style: expands to border-block-end-style');
  s.setProperty('border-block-style', 'inherit');
  assertEq(s.getPropertyValue('border-block-start-style'), 'inherit', 'border-block-style: inherit expands to border-block-start-style');
  assertEq(s.getPropertyValue('border-block-end-style'), 'inherit', 'border-block-style: inherit expands to border-block-end-style');
  s.removeProperty('border-block-style');
  assertEq(s.getPropertyValue('border-block-start-style'), '', 'border-block-style: removeProperty clears border-block-start-style');
  assertEq(s.getPropertyValue('border-block-end-style'), '', 'border-block-style: removeProperty clears border-block-end-style');
}

// --- border-block-width (shorthand) ---
{
  const s = fresh();
  s.setProperty('border-block-width', 'inherit');
  assertEq(s.getPropertyValue('border-block-start-width'), 'inherit', 'border-block-width: expands to border-block-start-width');
  assertEq(s.getPropertyValue('border-block-end-width'), 'inherit', 'border-block-width: expands to border-block-end-width');
  s.setProperty('border-block-width', 'inherit');
  assertEq(s.getPropertyValue('border-block-start-width'), 'inherit', 'border-block-width: inherit expands to border-block-start-width');
  assertEq(s.getPropertyValue('border-block-end-width'), 'inherit', 'border-block-width: inherit expands to border-block-end-width');
  s.removeProperty('border-block-width');
  assertEq(s.getPropertyValue('border-block-start-width'), '', 'border-block-width: removeProperty clears border-block-start-width');
  assertEq(s.getPropertyValue('border-block-end-width'), '', 'border-block-width: removeProperty clears border-block-end-width');
}

// --- border-bottom (shorthand) ---
{
  const s = fresh();
  s.setProperty('border-bottom', '1px solid red');
  assertEq(s.getPropertyValue('border-bottom-width'), '1px', 'border-bottom: expands to border-bottom-width');
  assertEq(s.getPropertyValue('border-bottom-style'), 'solid', 'border-bottom: expands to border-bottom-style');
  assertEq(s.getPropertyValue('border-bottom-color'), 'red', 'border-bottom: expands to border-bottom-color');
  s.setProperty('border-bottom', 'inherit');
  assertEq(s.getPropertyValue('border-bottom-width'), 'inherit', 'border-bottom: inherit expands to border-bottom-width');
  assertEq(s.getPropertyValue('border-bottom-style'), 'inherit', 'border-bottom: inherit expands to border-bottom-style');
  assertEq(s.getPropertyValue('border-bottom-color'), 'inherit', 'border-bottom: inherit expands to border-bottom-color');
  s.removeProperty('border-bottom');
  assertEq(s.getPropertyValue('border-bottom-width'), '', 'border-bottom: removeProperty clears border-bottom-width');
  assertEq(s.getPropertyValue('border-bottom-style'), '', 'border-bottom: removeProperty clears border-bottom-style');
  assertEq(s.getPropertyValue('border-bottom-color'), '', 'border-bottom: removeProperty clears border-bottom-color');
}

// --- border-color (shorthand) ---
{
  const s = fresh();
  s.setProperty('border-color', 'red');
  assertEq(s.getPropertyValue('border-top-color'), 'red', 'border-color: expands to border-top-color');
  assertEq(s.getPropertyValue('border-right-color'), 'red', 'border-color: expands to border-right-color');
  assertEq(s.getPropertyValue('border-bottom-color'), 'red', 'border-color: expands to border-bottom-color');
  assertEq(s.getPropertyValue('border-left-color'), 'red', 'border-color: expands to border-left-color');
  s.setProperty('border-color', 'inherit');
  assertEq(s.getPropertyValue('border-top-color'), 'inherit', 'border-color: inherit expands to border-top-color');
  assertEq(s.getPropertyValue('border-right-color'), 'inherit', 'border-color: inherit expands to border-right-color');
  assertEq(s.getPropertyValue('border-bottom-color'), 'inherit', 'border-color: inherit expands to border-bottom-color');
  assertEq(s.getPropertyValue('border-left-color'), 'inherit', 'border-color: inherit expands to border-left-color');
  s.removeProperty('border-color');
  assertEq(s.getPropertyValue('border-top-color'), '', 'border-color: removeProperty clears border-top-color');
  assertEq(s.getPropertyValue('border-right-color'), '', 'border-color: removeProperty clears border-right-color');
  assertEq(s.getPropertyValue('border-bottom-color'), '', 'border-color: removeProperty clears border-bottom-color');
  assertEq(s.getPropertyValue('border-left-color'), '', 'border-color: removeProperty clears border-left-color');
}

// --- border-image (shorthand) ---
{
  const s = fresh();
  s.setProperty('border-image', 'inherit');
  assertEq(s.getPropertyValue('border-image-source'), 'inherit', 'border-image: expands to border-image-source');
  assertEq(s.getPropertyValue('border-image-slice'), 'inherit', 'border-image: expands to border-image-slice');
  assertEq(s.getPropertyValue('border-image-width'), 'inherit', 'border-image: expands to border-image-width');
  assertEq(s.getPropertyValue('border-image-outset'), 'inherit', 'border-image: expands to border-image-outset');
  assertEq(s.getPropertyValue('border-image-repeat'), 'inherit', 'border-image: expands to border-image-repeat');
  s.setProperty('border-image', 'inherit');
  assertEq(s.getPropertyValue('border-image-source'), 'inherit', 'border-image: inherit expands to border-image-source');
  assertEq(s.getPropertyValue('border-image-slice'), 'inherit', 'border-image: inherit expands to border-image-slice');
  assertEq(s.getPropertyValue('border-image-width'), 'inherit', 'border-image: inherit expands to border-image-width');
  assertEq(s.getPropertyValue('border-image-outset'), 'inherit', 'border-image: inherit expands to border-image-outset');
  assertEq(s.getPropertyValue('border-image-repeat'), 'inherit', 'border-image: inherit expands to border-image-repeat');
  s.removeProperty('border-image');
  assertEq(s.getPropertyValue('border-image-source'), '', 'border-image: removeProperty clears border-image-source');
  assertEq(s.getPropertyValue('border-image-slice'), '', 'border-image: removeProperty clears border-image-slice');
  assertEq(s.getPropertyValue('border-image-width'), '', 'border-image: removeProperty clears border-image-width');
  assertEq(s.getPropertyValue('border-image-outset'), '', 'border-image: removeProperty clears border-image-outset');
  assertEq(s.getPropertyValue('border-image-repeat'), '', 'border-image: removeProperty clears border-image-repeat');
}

// --- border-inline (shorthand) ---
{
  const s = fresh();
  s.setProperty('border-inline', 'inherit');
  assertEq(s.getPropertyValue('border-inline-start-color'), 'inherit', 'border-inline: expands to border-inline-start-color');
  assertEq(s.getPropertyValue('border-inline-start-style'), 'inherit', 'border-inline: expands to border-inline-start-style');
  assertEq(s.getPropertyValue('border-inline-start-width'), 'inherit', 'border-inline: expands to border-inline-start-width');
  assertEq(s.getPropertyValue('border-inline-end-color'), 'inherit', 'border-inline: expands to border-inline-end-color');
  assertEq(s.getPropertyValue('border-inline-end-style'), 'inherit', 'border-inline: expands to border-inline-end-style');
  assertEq(s.getPropertyValue('border-inline-end-width'), 'inherit', 'border-inline: expands to border-inline-end-width');
  s.setProperty('border-inline', 'inherit');
  assertEq(s.getPropertyValue('border-inline-start-color'), 'inherit', 'border-inline: inherit expands to border-inline-start-color');
  assertEq(s.getPropertyValue('border-inline-start-style'), 'inherit', 'border-inline: inherit expands to border-inline-start-style');
  assertEq(s.getPropertyValue('border-inline-start-width'), 'inherit', 'border-inline: inherit expands to border-inline-start-width');
  assertEq(s.getPropertyValue('border-inline-end-color'), 'inherit', 'border-inline: inherit expands to border-inline-end-color');
  assertEq(s.getPropertyValue('border-inline-end-style'), 'inherit', 'border-inline: inherit expands to border-inline-end-style');
  assertEq(s.getPropertyValue('border-inline-end-width'), 'inherit', 'border-inline: inherit expands to border-inline-end-width');
  s.removeProperty('border-inline');
  assertEq(s.getPropertyValue('border-inline-start-color'), '', 'border-inline: removeProperty clears border-inline-start-color');
  assertEq(s.getPropertyValue('border-inline-start-style'), '', 'border-inline: removeProperty clears border-inline-start-style');
  assertEq(s.getPropertyValue('border-inline-start-width'), '', 'border-inline: removeProperty clears border-inline-start-width');
  assertEq(s.getPropertyValue('border-inline-end-color'), '', 'border-inline: removeProperty clears border-inline-end-color');
  assertEq(s.getPropertyValue('border-inline-end-style'), '', 'border-inline: removeProperty clears border-inline-end-style');
  assertEq(s.getPropertyValue('border-inline-end-width'), '', 'border-inline: removeProperty clears border-inline-end-width');
}

// --- border-inline-color (shorthand) ---
{
  const s = fresh();
  s.setProperty('border-inline-color', 'inherit');
  assertEq(s.getPropertyValue('border-inline-start-color'), 'inherit', 'border-inline-color: expands to border-inline-start-color');
  assertEq(s.getPropertyValue('border-inline-end-color'), 'inherit', 'border-inline-color: expands to border-inline-end-color');
  s.setProperty('border-inline-color', 'inherit');
  assertEq(s.getPropertyValue('border-inline-start-color'), 'inherit', 'border-inline-color: inherit expands to border-inline-start-color');
  assertEq(s.getPropertyValue('border-inline-end-color'), 'inherit', 'border-inline-color: inherit expands to border-inline-end-color');
  s.removeProperty('border-inline-color');
  assertEq(s.getPropertyValue('border-inline-start-color'), '', 'border-inline-color: removeProperty clears border-inline-start-color');
  assertEq(s.getPropertyValue('border-inline-end-color'), '', 'border-inline-color: removeProperty clears border-inline-end-color');
}

// --- border-inline-end (shorthand) ---
{
  const s = fresh();
  s.setProperty('border-inline-end', '1px solid red');
  assertEq(s.getPropertyValue('border-inline-end-width'), '1px', 'border-inline-end: expands to border-inline-end-width');
  assertEq(s.getPropertyValue('border-inline-end-style'), 'solid', 'border-inline-end: expands to border-inline-end-style');
  assertEq(s.getPropertyValue('border-inline-end-color'), 'red', 'border-inline-end: expands to border-inline-end-color');
  s.setProperty('border-inline-end', 'inherit');
  assertEq(s.getPropertyValue('border-inline-end-width'), 'inherit', 'border-inline-end: inherit expands to border-inline-end-width');
  assertEq(s.getPropertyValue('border-inline-end-style'), 'inherit', 'border-inline-end: inherit expands to border-inline-end-style');
  assertEq(s.getPropertyValue('border-inline-end-color'), 'inherit', 'border-inline-end: inherit expands to border-inline-end-color');
  s.removeProperty('border-inline-end');
  assertEq(s.getPropertyValue('border-inline-end-width'), '', 'border-inline-end: removeProperty clears border-inline-end-width');
  assertEq(s.getPropertyValue('border-inline-end-style'), '', 'border-inline-end: removeProperty clears border-inline-end-style');
  assertEq(s.getPropertyValue('border-inline-end-color'), '', 'border-inline-end: removeProperty clears border-inline-end-color');
}

// --- border-inline-start (shorthand) ---
{
  const s = fresh();
  s.setProperty('border-inline-start', '1px solid red');
  assertEq(s.getPropertyValue('border-inline-start-width'), '1px', 'border-inline-start: expands to border-inline-start-width');
  assertEq(s.getPropertyValue('border-inline-start-style'), 'solid', 'border-inline-start: expands to border-inline-start-style');
  assertEq(s.getPropertyValue('border-inline-start-color'), 'red', 'border-inline-start: expands to border-inline-start-color');
  s.setProperty('border-inline-start', 'inherit');
  assertEq(s.getPropertyValue('border-inline-start-width'), 'inherit', 'border-inline-start: inherit expands to border-inline-start-width');
  assertEq(s.getPropertyValue('border-inline-start-style'), 'inherit', 'border-inline-start: inherit expands to border-inline-start-style');
  assertEq(s.getPropertyValue('border-inline-start-color'), 'inherit', 'border-inline-start: inherit expands to border-inline-start-color');
  s.removeProperty('border-inline-start');
  assertEq(s.getPropertyValue('border-inline-start-width'), '', 'border-inline-start: removeProperty clears border-inline-start-width');
  assertEq(s.getPropertyValue('border-inline-start-style'), '', 'border-inline-start: removeProperty clears border-inline-start-style');
  assertEq(s.getPropertyValue('border-inline-start-color'), '', 'border-inline-start: removeProperty clears border-inline-start-color');
}

// --- border-inline-style (shorthand) ---
{
  const s = fresh();
  s.setProperty('border-inline-style', 'inherit');
  assertEq(s.getPropertyValue('border-inline-start-style'), 'inherit', 'border-inline-style: expands to border-inline-start-style');
  assertEq(s.getPropertyValue('border-inline-end-style'), 'inherit', 'border-inline-style: expands to border-inline-end-style');
  s.setProperty('border-inline-style', 'inherit');
  assertEq(s.getPropertyValue('border-inline-start-style'), 'inherit', 'border-inline-style: inherit expands to border-inline-start-style');
  assertEq(s.getPropertyValue('border-inline-end-style'), 'inherit', 'border-inline-style: inherit expands to border-inline-end-style');
  s.removeProperty('border-inline-style');
  assertEq(s.getPropertyValue('border-inline-start-style'), '', 'border-inline-style: removeProperty clears border-inline-start-style');
  assertEq(s.getPropertyValue('border-inline-end-style'), '', 'border-inline-style: removeProperty clears border-inline-end-style');
}

// --- border-inline-width (shorthand) ---
{
  const s = fresh();
  s.setProperty('border-inline-width', 'inherit');
  assertEq(s.getPropertyValue('border-inline-start-width'), 'inherit', 'border-inline-width: expands to border-inline-start-width');
  assertEq(s.getPropertyValue('border-inline-end-width'), 'inherit', 'border-inline-width: expands to border-inline-end-width');
  s.setProperty('border-inline-width', 'inherit');
  assertEq(s.getPropertyValue('border-inline-start-width'), 'inherit', 'border-inline-width: inherit expands to border-inline-start-width');
  assertEq(s.getPropertyValue('border-inline-end-width'), 'inherit', 'border-inline-width: inherit expands to border-inline-end-width');
  s.removeProperty('border-inline-width');
  assertEq(s.getPropertyValue('border-inline-start-width'), '', 'border-inline-width: removeProperty clears border-inline-start-width');
  assertEq(s.getPropertyValue('border-inline-end-width'), '', 'border-inline-width: removeProperty clears border-inline-end-width');
}

// --- border-left (shorthand) ---
{
  const s = fresh();
  s.setProperty('border-left', '1px solid red');
  assertEq(s.getPropertyValue('border-left-width'), '1px', 'border-left: expands to border-left-width');
  assertEq(s.getPropertyValue('border-left-style'), 'solid', 'border-left: expands to border-left-style');
  assertEq(s.getPropertyValue('border-left-color'), 'red', 'border-left: expands to border-left-color');
  s.setProperty('border-left', 'inherit');
  assertEq(s.getPropertyValue('border-left-width'), 'inherit', 'border-left: inherit expands to border-left-width');
  assertEq(s.getPropertyValue('border-left-style'), 'inherit', 'border-left: inherit expands to border-left-style');
  assertEq(s.getPropertyValue('border-left-color'), 'inherit', 'border-left: inherit expands to border-left-color');
  s.removeProperty('border-left');
  assertEq(s.getPropertyValue('border-left-width'), '', 'border-left: removeProperty clears border-left-width');
  assertEq(s.getPropertyValue('border-left-style'), '', 'border-left: removeProperty clears border-left-style');
  assertEq(s.getPropertyValue('border-left-color'), '', 'border-left: removeProperty clears border-left-color');
}

// --- border-radius (shorthand) ---
{
  const s = fresh();
  s.setProperty('border-radius', '5px');
  assertEq(s.getPropertyValue('border-top-left-radius'), '5px', 'border-radius: expands to border-top-left-radius');
  assertEq(s.getPropertyValue('border-top-right-radius'), '5px', 'border-radius: expands to border-top-right-radius');
  assertEq(s.getPropertyValue('border-bottom-right-radius'), '5px', 'border-radius: expands to border-bottom-right-radius');
  assertEq(s.getPropertyValue('border-bottom-left-radius'), '5px', 'border-radius: expands to border-bottom-left-radius');
  s.setProperty('border-radius', 'inherit');
  assertEq(s.getPropertyValue('border-top-left-radius'), 'inherit', 'border-radius: inherit expands to border-top-left-radius');
  assertEq(s.getPropertyValue('border-top-right-radius'), 'inherit', 'border-radius: inherit expands to border-top-right-radius');
  assertEq(s.getPropertyValue('border-bottom-right-radius'), 'inherit', 'border-radius: inherit expands to border-bottom-right-radius');
  assertEq(s.getPropertyValue('border-bottom-left-radius'), 'inherit', 'border-radius: inherit expands to border-bottom-left-radius');
  s.removeProperty('border-radius');
  assertEq(s.getPropertyValue('border-top-left-radius'), '', 'border-radius: removeProperty clears border-top-left-radius');
  assertEq(s.getPropertyValue('border-top-right-radius'), '', 'border-radius: removeProperty clears border-top-right-radius');
  assertEq(s.getPropertyValue('border-bottom-right-radius'), '', 'border-radius: removeProperty clears border-bottom-right-radius');
  assertEq(s.getPropertyValue('border-bottom-left-radius'), '', 'border-radius: removeProperty clears border-bottom-left-radius');
}

// --- border-right (shorthand) ---
{
  const s = fresh();
  s.setProperty('border-right', '1px solid red');
  assertEq(s.getPropertyValue('border-right-width'), '1px', 'border-right: expands to border-right-width');
  assertEq(s.getPropertyValue('border-right-style'), 'solid', 'border-right: expands to border-right-style');
  assertEq(s.getPropertyValue('border-right-color'), 'red', 'border-right: expands to border-right-color');
  s.setProperty('border-right', 'inherit');
  assertEq(s.getPropertyValue('border-right-width'), 'inherit', 'border-right: inherit expands to border-right-width');
  assertEq(s.getPropertyValue('border-right-style'), 'inherit', 'border-right: inherit expands to border-right-style');
  assertEq(s.getPropertyValue('border-right-color'), 'inherit', 'border-right: inherit expands to border-right-color');
  s.removeProperty('border-right');
  assertEq(s.getPropertyValue('border-right-width'), '', 'border-right: removeProperty clears border-right-width');
  assertEq(s.getPropertyValue('border-right-style'), '', 'border-right: removeProperty clears border-right-style');
  assertEq(s.getPropertyValue('border-right-color'), '', 'border-right: removeProperty clears border-right-color');
}

// --- border-spacing (shorthand) ---
{
  const s = fresh();
  s.setProperty('border-spacing', 'inherit');
  assertEq(s.getPropertyValue('-webkit-border-horizontal-spacing'), 'inherit', 'border-spacing: expands to -webkit-border-horizontal-spacing');
  assertEq(s.getPropertyValue('-webkit-border-vertical-spacing'), 'inherit', 'border-spacing: expands to -webkit-border-vertical-spacing');
  s.setProperty('border-spacing', 'inherit');
  assertEq(s.getPropertyValue('-webkit-border-horizontal-spacing'), 'inherit', 'border-spacing: inherit expands to -webkit-border-horizontal-spacing');
  assertEq(s.getPropertyValue('-webkit-border-vertical-spacing'), 'inherit', 'border-spacing: inherit expands to -webkit-border-vertical-spacing');
  s.removeProperty('border-spacing');
  assertEq(s.getPropertyValue('-webkit-border-horizontal-spacing'), '', 'border-spacing: removeProperty clears -webkit-border-horizontal-spacing');
  assertEq(s.getPropertyValue('-webkit-border-vertical-spacing'), '', 'border-spacing: removeProperty clears -webkit-border-vertical-spacing');
}

// --- border-style (shorthand) ---
{
  const s = fresh();
  s.setProperty('border-style', 'solid');
  assertEq(s.getPropertyValue('border-top-style'), 'solid', 'border-style: expands to border-top-style');
  assertEq(s.getPropertyValue('border-right-style'), 'solid', 'border-style: expands to border-right-style');
  assertEq(s.getPropertyValue('border-bottom-style'), 'solid', 'border-style: expands to border-bottom-style');
  assertEq(s.getPropertyValue('border-left-style'), 'solid', 'border-style: expands to border-left-style');
  s.setProperty('border-style', 'inherit');
  assertEq(s.getPropertyValue('border-top-style'), 'inherit', 'border-style: inherit expands to border-top-style');
  assertEq(s.getPropertyValue('border-right-style'), 'inherit', 'border-style: inherit expands to border-right-style');
  assertEq(s.getPropertyValue('border-bottom-style'), 'inherit', 'border-style: inherit expands to border-bottom-style');
  assertEq(s.getPropertyValue('border-left-style'), 'inherit', 'border-style: inherit expands to border-left-style');
  s.removeProperty('border-style');
  assertEq(s.getPropertyValue('border-top-style'), '', 'border-style: removeProperty clears border-top-style');
  assertEq(s.getPropertyValue('border-right-style'), '', 'border-style: removeProperty clears border-right-style');
  assertEq(s.getPropertyValue('border-bottom-style'), '', 'border-style: removeProperty clears border-bottom-style');
  assertEq(s.getPropertyValue('border-left-style'), '', 'border-style: removeProperty clears border-left-style');
}

// --- border-top (shorthand) ---
{
  const s = fresh();
  s.setProperty('border-top', '1px solid red');
  assertEq(s.getPropertyValue('border-top-width'), '1px', 'border-top: expands to border-top-width');
  assertEq(s.getPropertyValue('border-top-style'), 'solid', 'border-top: expands to border-top-style');
  assertEq(s.getPropertyValue('border-top-color'), 'red', 'border-top: expands to border-top-color');
  s.setProperty('border-top', 'inherit');
  assertEq(s.getPropertyValue('border-top-width'), 'inherit', 'border-top: inherit expands to border-top-width');
  assertEq(s.getPropertyValue('border-top-style'), 'inherit', 'border-top: inherit expands to border-top-style');
  assertEq(s.getPropertyValue('border-top-color'), 'inherit', 'border-top: inherit expands to border-top-color');
  s.removeProperty('border-top');
  assertEq(s.getPropertyValue('border-top-width'), '', 'border-top: removeProperty clears border-top-width');
  assertEq(s.getPropertyValue('border-top-style'), '', 'border-top: removeProperty clears border-top-style');
  assertEq(s.getPropertyValue('border-top-color'), '', 'border-top: removeProperty clears border-top-color');
}

// --- border-width (shorthand) ---
{
  const s = fresh();
  s.setProperty('border-width', '1px 2px 3px 4px');
  assertEq(s.getPropertyValue('border-top-width'), '1px', 'border-width: expands to border-top-width');
  assertEq(s.getPropertyValue('border-right-width'), '2px', 'border-width: expands to border-right-width');
  assertEq(s.getPropertyValue('border-bottom-width'), '3px', 'border-width: expands to border-bottom-width');
  assertEq(s.getPropertyValue('border-left-width'), '4px', 'border-width: expands to border-left-width');
  s.setProperty('border-width', 'inherit');
  assertEq(s.getPropertyValue('border-top-width'), 'inherit', 'border-width: inherit expands to border-top-width');
  assertEq(s.getPropertyValue('border-right-width'), 'inherit', 'border-width: inherit expands to border-right-width');
  assertEq(s.getPropertyValue('border-bottom-width'), 'inherit', 'border-width: inherit expands to border-bottom-width');
  assertEq(s.getPropertyValue('border-left-width'), 'inherit', 'border-width: inherit expands to border-left-width');
  s.removeProperty('border-width');
  assertEq(s.getPropertyValue('border-top-width'), '', 'border-width: removeProperty clears border-top-width');
  assertEq(s.getPropertyValue('border-right-width'), '', 'border-width: removeProperty clears border-right-width');
  assertEq(s.getPropertyValue('border-bottom-width'), '', 'border-width: removeProperty clears border-bottom-width');
  assertEq(s.getPropertyValue('border-left-width'), '', 'border-width: removeProperty clears border-left-width');
}

// --- column-rule-edge-inset (shorthand) ---
{
  const s = fresh();
  s.setProperty('column-rule-edge-inset', 'inherit');
  assertEq(s.getPropertyValue('column-rule-edge-inset-start'), 'inherit', 'column-rule-edge-inset: expands to column-rule-edge-inset-start');
  assertEq(s.getPropertyValue('column-rule-edge-inset-end'), 'inherit', 'column-rule-edge-inset: expands to column-rule-edge-inset-end');
  s.setProperty('column-rule-edge-inset', 'inherit');
  assertEq(s.getPropertyValue('column-rule-edge-inset-start'), 'inherit', 'column-rule-edge-inset: inherit expands to column-rule-edge-inset-start');
  assertEq(s.getPropertyValue('column-rule-edge-inset-end'), 'inherit', 'column-rule-edge-inset: inherit expands to column-rule-edge-inset-end');
  s.removeProperty('column-rule-edge-inset');
  assertEq(s.getPropertyValue('column-rule-edge-inset-start'), '', 'column-rule-edge-inset: removeProperty clears column-rule-edge-inset-start');
  assertEq(s.getPropertyValue('column-rule-edge-inset-end'), '', 'column-rule-edge-inset: removeProperty clears column-rule-edge-inset-end');
}

// --- column-rule-inset-end (shorthand) ---
{
  const s = fresh();
  s.setProperty('column-rule-inset-end', 'inherit');
  assertEq(s.getPropertyValue('column-rule-edge-inset-end'), 'inherit', 'column-rule-inset-end: expands to column-rule-edge-inset-end');
  assertEq(s.getPropertyValue('column-rule-interior-inset-end'), 'inherit', 'column-rule-inset-end: expands to column-rule-interior-inset-end');
  s.setProperty('column-rule-inset-end', 'inherit');
  assertEq(s.getPropertyValue('column-rule-edge-inset-end'), 'inherit', 'column-rule-inset-end: inherit expands to column-rule-edge-inset-end');
  assertEq(s.getPropertyValue('column-rule-interior-inset-end'), 'inherit', 'column-rule-inset-end: inherit expands to column-rule-interior-inset-end');
  s.removeProperty('column-rule-inset-end');
  assertEq(s.getPropertyValue('column-rule-edge-inset-end'), '', 'column-rule-inset-end: removeProperty clears column-rule-edge-inset-end');
  assertEq(s.getPropertyValue('column-rule-interior-inset-end'), '', 'column-rule-inset-end: removeProperty clears column-rule-interior-inset-end');
}

// --- column-rule-inset-start (shorthand) ---
{
  const s = fresh();
  s.setProperty('column-rule-inset-start', 'inherit');
  assertEq(s.getPropertyValue('column-rule-edge-inset-start'), 'inherit', 'column-rule-inset-start: expands to column-rule-edge-inset-start');
  assertEq(s.getPropertyValue('column-rule-interior-inset-start'), 'inherit', 'column-rule-inset-start: expands to column-rule-interior-inset-start');
  s.setProperty('column-rule-inset-start', 'inherit');
  assertEq(s.getPropertyValue('column-rule-edge-inset-start'), 'inherit', 'column-rule-inset-start: inherit expands to column-rule-edge-inset-start');
  assertEq(s.getPropertyValue('column-rule-interior-inset-start'), 'inherit', 'column-rule-inset-start: inherit expands to column-rule-interior-inset-start');
  s.removeProperty('column-rule-inset-start');
  assertEq(s.getPropertyValue('column-rule-edge-inset-start'), '', 'column-rule-inset-start: removeProperty clears column-rule-edge-inset-start');
  assertEq(s.getPropertyValue('column-rule-interior-inset-start'), '', 'column-rule-inset-start: removeProperty clears column-rule-interior-inset-start');
}

// --- column-rule-interior-inset (shorthand) ---
{
  const s = fresh();
  s.setProperty('column-rule-interior-inset', 'inherit');
  assertEq(s.getPropertyValue('column-rule-interior-inset-start'), 'inherit', 'column-rule-interior-inset: expands to column-rule-interior-inset-start');
  assertEq(s.getPropertyValue('column-rule-interior-inset-end'), 'inherit', 'column-rule-interior-inset: expands to column-rule-interior-inset-end');
  s.setProperty('column-rule-interior-inset', 'inherit');
  assertEq(s.getPropertyValue('column-rule-interior-inset-start'), 'inherit', 'column-rule-interior-inset: inherit expands to column-rule-interior-inset-start');
  assertEq(s.getPropertyValue('column-rule-interior-inset-end'), 'inherit', 'column-rule-interior-inset: inherit expands to column-rule-interior-inset-end');
  s.removeProperty('column-rule-interior-inset');
  assertEq(s.getPropertyValue('column-rule-interior-inset-start'), '', 'column-rule-interior-inset: removeProperty clears column-rule-interior-inset-start');
  assertEq(s.getPropertyValue('column-rule-interior-inset-end'), '', 'column-rule-interior-inset: removeProperty clears column-rule-interior-inset-end');
}

// --- contain-intrinsic-size (shorthand) ---
{
  const s = fresh();
  s.setProperty('contain-intrinsic-size', 'inherit');
  assertEq(s.getPropertyValue('contain-intrinsic-width'), 'inherit', 'contain-intrinsic-size: expands to contain-intrinsic-width');
  assertEq(s.getPropertyValue('contain-intrinsic-height'), 'inherit', 'contain-intrinsic-size: expands to contain-intrinsic-height');
  s.setProperty('contain-intrinsic-size', 'inherit');
  assertEq(s.getPropertyValue('contain-intrinsic-width'), 'inherit', 'contain-intrinsic-size: inherit expands to contain-intrinsic-width');
  assertEq(s.getPropertyValue('contain-intrinsic-height'), 'inherit', 'contain-intrinsic-size: inherit expands to contain-intrinsic-height');
  s.removeProperty('contain-intrinsic-size');
  assertEq(s.getPropertyValue('contain-intrinsic-width'), '', 'contain-intrinsic-size: removeProperty clears contain-intrinsic-width');
  assertEq(s.getPropertyValue('contain-intrinsic-height'), '', 'contain-intrinsic-size: removeProperty clears contain-intrinsic-height');
}

// --- container (shorthand) ---
{
  const s = fresh();
  s.setProperty('container', 'inherit');
  assertEq(s.getPropertyValue('container-name'), 'inherit', 'container: expands to container-name');
  assertEq(s.getPropertyValue('container-type'), 'inherit', 'container: expands to container-type');
  s.setProperty('container', 'inherit');
  assertEq(s.getPropertyValue('container-name'), 'inherit', 'container: inherit expands to container-name');
  assertEq(s.getPropertyValue('container-type'), 'inherit', 'container: inherit expands to container-type');
  s.removeProperty('container');
  assertEq(s.getPropertyValue('container-name'), '', 'container: removeProperty clears container-name');
  assertEq(s.getPropertyValue('container-type'), '', 'container: removeProperty clears container-type');
}

// --- corner-top-shape (shorthand) ---
{
  const s = fresh();
  s.setProperty('corner-top-shape', 'inherit');
  assertEq(s.getPropertyValue('corner-top-left-shape'), 'inherit', 'corner-top-shape: expands to corner-top-left-shape');
  assertEq(s.getPropertyValue('corner-top-right-shape'), 'inherit', 'corner-top-shape: expands to corner-top-right-shape');
  s.setProperty('corner-top-shape', 'inherit');
  assertEq(s.getPropertyValue('corner-top-left-shape'), 'inherit', 'corner-top-shape: inherit expands to corner-top-left-shape');
  assertEq(s.getPropertyValue('corner-top-right-shape'), 'inherit', 'corner-top-shape: inherit expands to corner-top-right-shape');
  s.removeProperty('corner-top-shape');
  assertEq(s.getPropertyValue('corner-top-left-shape'), '', 'corner-top-shape: removeProperty clears corner-top-left-shape');
  assertEq(s.getPropertyValue('corner-top-right-shape'), '', 'corner-top-shape: removeProperty clears corner-top-right-shape');
}

// --- corner-right-shape (shorthand) ---
{
  const s = fresh();
  s.setProperty('corner-right-shape', 'inherit');
  assertEq(s.getPropertyValue('corner-top-right-shape'), 'inherit', 'corner-right-shape: expands to corner-top-right-shape');
  assertEq(s.getPropertyValue('corner-bottom-right-shape'), 'inherit', 'corner-right-shape: expands to corner-bottom-right-shape');
  s.setProperty('corner-right-shape', 'inherit');
  assertEq(s.getPropertyValue('corner-top-right-shape'), 'inherit', 'corner-right-shape: inherit expands to corner-top-right-shape');
  assertEq(s.getPropertyValue('corner-bottom-right-shape'), 'inherit', 'corner-right-shape: inherit expands to corner-bottom-right-shape');
  s.removeProperty('corner-right-shape');
  assertEq(s.getPropertyValue('corner-top-right-shape'), '', 'corner-right-shape: removeProperty clears corner-top-right-shape');
  assertEq(s.getPropertyValue('corner-bottom-right-shape'), '', 'corner-right-shape: removeProperty clears corner-bottom-right-shape');
}

// --- corner-bottom-shape (shorthand) ---
{
  const s = fresh();
  s.setProperty('corner-bottom-shape', 'inherit');
  assertEq(s.getPropertyValue('corner-bottom-left-shape'), 'inherit', 'corner-bottom-shape: expands to corner-bottom-left-shape');
  assertEq(s.getPropertyValue('corner-bottom-right-shape'), 'inherit', 'corner-bottom-shape: expands to corner-bottom-right-shape');
  s.setProperty('corner-bottom-shape', 'inherit');
  assertEq(s.getPropertyValue('corner-bottom-left-shape'), 'inherit', 'corner-bottom-shape: inherit expands to corner-bottom-left-shape');
  assertEq(s.getPropertyValue('corner-bottom-right-shape'), 'inherit', 'corner-bottom-shape: inherit expands to corner-bottom-right-shape');
  s.removeProperty('corner-bottom-shape');
  assertEq(s.getPropertyValue('corner-bottom-left-shape'), '', 'corner-bottom-shape: removeProperty clears corner-bottom-left-shape');
  assertEq(s.getPropertyValue('corner-bottom-right-shape'), '', 'corner-bottom-shape: removeProperty clears corner-bottom-right-shape');
}

// --- corner-left-shape (shorthand) ---
{
  const s = fresh();
  s.setProperty('corner-left-shape', 'inherit');
  assertEq(s.getPropertyValue('corner-top-left-shape'), 'inherit', 'corner-left-shape: expands to corner-top-left-shape');
  assertEq(s.getPropertyValue('corner-bottom-left-shape'), 'inherit', 'corner-left-shape: expands to corner-bottom-left-shape');
  s.setProperty('corner-left-shape', 'inherit');
  assertEq(s.getPropertyValue('corner-top-left-shape'), 'inherit', 'corner-left-shape: inherit expands to corner-top-left-shape');
  assertEq(s.getPropertyValue('corner-bottom-left-shape'), 'inherit', 'corner-left-shape: inherit expands to corner-bottom-left-shape');
  s.removeProperty('corner-left-shape');
  assertEq(s.getPropertyValue('corner-top-left-shape'), '', 'corner-left-shape: removeProperty clears corner-top-left-shape');
  assertEq(s.getPropertyValue('corner-bottom-left-shape'), '', 'corner-left-shape: removeProperty clears corner-bottom-left-shape');
}

// --- corner-block-start-shape (shorthand) ---
{
  const s = fresh();
  s.setProperty('corner-block-start-shape', 'inherit');
  assertEq(s.getPropertyValue('corner-start-start-shape'), 'inherit', 'corner-block-start-shape: expands to corner-start-start-shape');
  assertEq(s.getPropertyValue('corner-start-end-shape'), 'inherit', 'corner-block-start-shape: expands to corner-start-end-shape');
  s.setProperty('corner-block-start-shape', 'inherit');
  assertEq(s.getPropertyValue('corner-start-start-shape'), 'inherit', 'corner-block-start-shape: inherit expands to corner-start-start-shape');
  assertEq(s.getPropertyValue('corner-start-end-shape'), 'inherit', 'corner-block-start-shape: inherit expands to corner-start-end-shape');
  s.removeProperty('corner-block-start-shape');
  assertEq(s.getPropertyValue('corner-start-start-shape'), '', 'corner-block-start-shape: removeProperty clears corner-start-start-shape');
  assertEq(s.getPropertyValue('corner-start-end-shape'), '', 'corner-block-start-shape: removeProperty clears corner-start-end-shape');
}

// --- corner-block-end-shape (shorthand) ---
{
  const s = fresh();
  s.setProperty('corner-block-end-shape', 'inherit');
  assertEq(s.getPropertyValue('corner-end-start-shape'), 'inherit', 'corner-block-end-shape: expands to corner-end-start-shape');
  assertEq(s.getPropertyValue('corner-end-end-shape'), 'inherit', 'corner-block-end-shape: expands to corner-end-end-shape');
  s.setProperty('corner-block-end-shape', 'inherit');
  assertEq(s.getPropertyValue('corner-end-start-shape'), 'inherit', 'corner-block-end-shape: inherit expands to corner-end-start-shape');
  assertEq(s.getPropertyValue('corner-end-end-shape'), 'inherit', 'corner-block-end-shape: inherit expands to corner-end-end-shape');
  s.removeProperty('corner-block-end-shape');
  assertEq(s.getPropertyValue('corner-end-start-shape'), '', 'corner-block-end-shape: removeProperty clears corner-end-start-shape');
  assertEq(s.getPropertyValue('corner-end-end-shape'), '', 'corner-block-end-shape: removeProperty clears corner-end-end-shape');
}

// --- corner-inline-start-shape (shorthand) ---
{
  const s = fresh();
  s.setProperty('corner-inline-start-shape', 'inherit');
  assertEq(s.getPropertyValue('corner-start-start-shape'), 'inherit', 'corner-inline-start-shape: expands to corner-start-start-shape');
  assertEq(s.getPropertyValue('corner-end-start-shape'), 'inherit', 'corner-inline-start-shape: expands to corner-end-start-shape');
  s.setProperty('corner-inline-start-shape', 'inherit');
  assertEq(s.getPropertyValue('corner-start-start-shape'), 'inherit', 'corner-inline-start-shape: inherit expands to corner-start-start-shape');
  assertEq(s.getPropertyValue('corner-end-start-shape'), 'inherit', 'corner-inline-start-shape: inherit expands to corner-end-start-shape');
  s.removeProperty('corner-inline-start-shape');
  assertEq(s.getPropertyValue('corner-start-start-shape'), '', 'corner-inline-start-shape: removeProperty clears corner-start-start-shape');
  assertEq(s.getPropertyValue('corner-end-start-shape'), '', 'corner-inline-start-shape: removeProperty clears corner-end-start-shape');
}

// --- corner-inline-end-shape (shorthand) ---
{
  const s = fresh();
  s.setProperty('corner-inline-end-shape', 'inherit');
  assertEq(s.getPropertyValue('corner-start-end-shape'), 'inherit', 'corner-inline-end-shape: expands to corner-start-end-shape');
  assertEq(s.getPropertyValue('corner-end-end-shape'), 'inherit', 'corner-inline-end-shape: expands to corner-end-end-shape');
  s.setProperty('corner-inline-end-shape', 'inherit');
  assertEq(s.getPropertyValue('corner-start-end-shape'), 'inherit', 'corner-inline-end-shape: inherit expands to corner-start-end-shape');
  assertEq(s.getPropertyValue('corner-end-end-shape'), 'inherit', 'corner-inline-end-shape: inherit expands to corner-end-end-shape');
  s.removeProperty('corner-inline-end-shape');
  assertEq(s.getPropertyValue('corner-start-end-shape'), '', 'corner-inline-end-shape: removeProperty clears corner-start-end-shape');
  assertEq(s.getPropertyValue('corner-end-end-shape'), '', 'corner-inline-end-shape: removeProperty clears corner-end-end-shape');
}

// --- corner-shape (shorthand) ---
{
  const s = fresh();
  s.setProperty('corner-shape', 'inherit');
  assertEq(s.getPropertyValue('corner-top-left-shape'), 'inherit', 'corner-shape: expands to corner-top-left-shape');
  assertEq(s.getPropertyValue('corner-top-right-shape'), 'inherit', 'corner-shape: expands to corner-top-right-shape');
  assertEq(s.getPropertyValue('corner-bottom-right-shape'), 'inherit', 'corner-shape: expands to corner-bottom-right-shape');
  assertEq(s.getPropertyValue('corner-bottom-left-shape'), 'inherit', 'corner-shape: expands to corner-bottom-left-shape');
  s.setProperty('corner-shape', 'inherit');
  assertEq(s.getPropertyValue('corner-top-left-shape'), 'inherit', 'corner-shape: inherit expands to corner-top-left-shape');
  assertEq(s.getPropertyValue('corner-top-right-shape'), 'inherit', 'corner-shape: inherit expands to corner-top-right-shape');
  assertEq(s.getPropertyValue('corner-bottom-right-shape'), 'inherit', 'corner-shape: inherit expands to corner-bottom-right-shape');
  assertEq(s.getPropertyValue('corner-bottom-left-shape'), 'inherit', 'corner-shape: inherit expands to corner-bottom-left-shape');
  s.removeProperty('corner-shape');
  assertEq(s.getPropertyValue('corner-top-left-shape'), '', 'corner-shape: removeProperty clears corner-top-left-shape');
  assertEq(s.getPropertyValue('corner-top-right-shape'), '', 'corner-shape: removeProperty clears corner-top-right-shape');
  assertEq(s.getPropertyValue('corner-bottom-right-shape'), '', 'corner-shape: removeProperty clears corner-bottom-right-shape');
  assertEq(s.getPropertyValue('corner-bottom-left-shape'), '', 'corner-shape: removeProperty clears corner-bottom-left-shape');
}

// --- corners (shorthand) ---
{
  const s = fresh();
  s.setProperty('corners', 'inherit');
  assertEq(s.getPropertyValue('border-top-left-radius'), 'inherit', 'corners: expands to border-top-left-radius');
  assertEq(s.getPropertyValue('corner-top-left-shape'), 'inherit', 'corners: expands to corner-top-left-shape');
  assertEq(s.getPropertyValue('border-top-right-radius'), 'inherit', 'corners: expands to border-top-right-radius');
  assertEq(s.getPropertyValue('corner-top-right-shape'), 'inherit', 'corners: expands to corner-top-right-shape');
  assertEq(s.getPropertyValue('border-bottom-right-radius'), 'inherit', 'corners: expands to border-bottom-right-radius');
  assertEq(s.getPropertyValue('corner-bottom-right-shape'), 'inherit', 'corners: expands to corner-bottom-right-shape');
  assertEq(s.getPropertyValue('border-bottom-left-radius'), 'inherit', 'corners: expands to border-bottom-left-radius');
  assertEq(s.getPropertyValue('corner-bottom-left-shape'), 'inherit', 'corners: expands to corner-bottom-left-shape');
  s.setProperty('corners', 'inherit');
  assertEq(s.getPropertyValue('border-top-left-radius'), 'inherit', 'corners: inherit expands to border-top-left-radius');
  assertEq(s.getPropertyValue('corner-top-left-shape'), 'inherit', 'corners: inherit expands to corner-top-left-shape');
  assertEq(s.getPropertyValue('border-top-right-radius'), 'inherit', 'corners: inherit expands to border-top-right-radius');
  assertEq(s.getPropertyValue('corner-top-right-shape'), 'inherit', 'corners: inherit expands to corner-top-right-shape');
  assertEq(s.getPropertyValue('border-bottom-right-radius'), 'inherit', 'corners: inherit expands to border-bottom-right-radius');
  assertEq(s.getPropertyValue('corner-bottom-right-shape'), 'inherit', 'corners: inherit expands to corner-bottom-right-shape');
  assertEq(s.getPropertyValue('border-bottom-left-radius'), 'inherit', 'corners: inherit expands to border-bottom-left-radius');
  assertEq(s.getPropertyValue('corner-bottom-left-shape'), 'inherit', 'corners: inherit expands to corner-bottom-left-shape');
  s.removeProperty('corners');
  assertEq(s.getPropertyValue('border-top-left-radius'), '', 'corners: removeProperty clears border-top-left-radius');
  assertEq(s.getPropertyValue('corner-top-left-shape'), '', 'corners: removeProperty clears corner-top-left-shape');
  assertEq(s.getPropertyValue('border-top-right-radius'), '', 'corners: removeProperty clears border-top-right-radius');
  assertEq(s.getPropertyValue('corner-top-right-shape'), '', 'corners: removeProperty clears corner-top-right-shape');
  assertEq(s.getPropertyValue('border-bottom-right-radius'), '', 'corners: removeProperty clears border-bottom-right-radius');
  assertEq(s.getPropertyValue('corner-bottom-right-shape'), '', 'corners: removeProperty clears corner-bottom-right-shape');
  assertEq(s.getPropertyValue('border-bottom-left-radius'), '', 'corners: removeProperty clears border-bottom-left-radius');
  assertEq(s.getPropertyValue('corner-bottom-left-shape'), '', 'corners: removeProperty clears corner-bottom-left-shape');
}

// --- flex (shorthand) ---
{
  const s = fresh();
  s.setProperty('flex', '1');
  assertEq(s.getPropertyValue('flex-grow'), '1', 'flex: expands to flex-grow');
  assertEq(s.getPropertyValue('flex-shrink'), '1', 'flex: expands to flex-shrink');
  assertEq(s.getPropertyValue('flex-basis'), '0%', 'flex: expands to flex-basis');
  s.setProperty('flex', 'inherit');
  assertEq(s.getPropertyValue('flex-grow'), 'inherit', 'flex: inherit expands to flex-grow');
  assertEq(s.getPropertyValue('flex-shrink'), 'inherit', 'flex: inherit expands to flex-shrink');
  assertEq(s.getPropertyValue('flex-basis'), 'inherit', 'flex: inherit expands to flex-basis');
  s.removeProperty('flex');
  assertEq(s.getPropertyValue('flex-grow'), '', 'flex: removeProperty clears flex-grow');
  assertEq(s.getPropertyValue('flex-shrink'), '', 'flex: removeProperty clears flex-shrink');
  assertEq(s.getPropertyValue('flex-basis'), '', 'flex: removeProperty clears flex-basis');
}

// --- flex-flow (shorthand) ---
{
  const s = fresh();
  s.setProperty('flex-flow', 'row nowrap');
  assertEq(s.getPropertyValue('flex-direction'), 'row', 'flex-flow: expands to flex-direction');
  assertEq(s.getPropertyValue('flex-wrap'), 'nowrap', 'flex-flow: expands to flex-wrap');
  s.setProperty('flex-flow', 'inherit');
  assertEq(s.getPropertyValue('flex-direction'), 'inherit', 'flex-flow: inherit expands to flex-direction');
  assertEq(s.getPropertyValue('flex-wrap'), 'inherit', 'flex-flow: inherit expands to flex-wrap');
  s.removeProperty('flex-flow');
  assertEq(s.getPropertyValue('flex-direction'), '', 'flex-flow: removeProperty clears flex-direction');
  assertEq(s.getPropertyValue('flex-wrap'), '', 'flex-flow: removeProperty clears flex-wrap');
}

// --- font (shorthand) ---
{
  const s = fresh();
  s.setProperty('font', 'inherit');
  assertEq(s.getPropertyValue('font-style'), 'inherit', 'font: expands to font-style');
  assertEq(s.getPropertyValue('font-variant-ligatures'), 'inherit', 'font: expands to font-variant-ligatures');
  assertEq(s.getPropertyValue('font-variant-caps'), 'inherit', 'font: expands to font-variant-caps');
  assertEq(s.getPropertyValue('font-variant-numeric'), 'inherit', 'font: expands to font-variant-numeric');
  assertEq(s.getPropertyValue('font-variant-east-asian'), 'inherit', 'font: expands to font-variant-east-asian');
  assertEq(s.getPropertyValue('font-variant-alternates'), 'inherit', 'font: expands to font-variant-alternates');
  assertEq(s.getPropertyValue('font-variant-position'), 'inherit', 'font: expands to font-variant-position');
  assertEq(s.getPropertyValue('font-variant-emoji'), 'inherit', 'font: expands to font-variant-emoji');
  assertEq(s.getPropertyValue('font-weight'), 'inherit', 'font: expands to font-weight');
  assertEq(s.getPropertyValue('font-stretch'), 'inherit', 'font: expands to font-stretch');
  assertEq(s.getPropertyValue('font-size'), 'inherit', 'font: expands to font-size');
  assertEq(s.getPropertyValue('line-height'), 'inherit', 'font: expands to line-height');
  assertEq(s.getPropertyValue('font-family'), 'inherit', 'font: expands to font-family');
  assertEq(s.getPropertyValue('font-optical-sizing'), 'inherit', 'font: expands to font-optical-sizing');
  assertEq(s.getPropertyValue('font-size-adjust'), 'inherit', 'font: expands to font-size-adjust');
  assertEq(s.getPropertyValue('font-kerning'), 'inherit', 'font: expands to font-kerning');
  assertEq(s.getPropertyValue('font-feature-settings'), 'inherit', 'font: expands to font-feature-settings');
  assertEq(s.getPropertyValue('font-variation-settings'), 'inherit', 'font: expands to font-variation-settings');
  assertEq(s.getPropertyValue('font-language-override'), 'inherit', 'font: expands to font-language-override');
  s.setProperty('font', 'inherit');
  assertEq(s.getPropertyValue('font-style'), 'inherit', 'font: inherit expands to font-style');
  assertEq(s.getPropertyValue('font-variant-ligatures'), 'inherit', 'font: inherit expands to font-variant-ligatures');
  assertEq(s.getPropertyValue('font-variant-caps'), 'inherit', 'font: inherit expands to font-variant-caps');
  assertEq(s.getPropertyValue('font-variant-numeric'), 'inherit', 'font: inherit expands to font-variant-numeric');
  assertEq(s.getPropertyValue('font-variant-east-asian'), 'inherit', 'font: inherit expands to font-variant-east-asian');
  assertEq(s.getPropertyValue('font-variant-alternates'), 'inherit', 'font: inherit expands to font-variant-alternates');
  assertEq(s.getPropertyValue('font-variant-position'), 'inherit', 'font: inherit expands to font-variant-position');
  assertEq(s.getPropertyValue('font-variant-emoji'), 'inherit', 'font: inherit expands to font-variant-emoji');
  assertEq(s.getPropertyValue('font-weight'), 'inherit', 'font: inherit expands to font-weight');
  assertEq(s.getPropertyValue('font-stretch'), 'inherit', 'font: inherit expands to font-stretch');
  assertEq(s.getPropertyValue('font-size'), 'inherit', 'font: inherit expands to font-size');
  assertEq(s.getPropertyValue('line-height'), 'inherit', 'font: inherit expands to line-height');
  assertEq(s.getPropertyValue('font-family'), 'inherit', 'font: inherit expands to font-family');
  assertEq(s.getPropertyValue('font-optical-sizing'), 'inherit', 'font: inherit expands to font-optical-sizing');
  assertEq(s.getPropertyValue('font-size-adjust'), 'inherit', 'font: inherit expands to font-size-adjust');
  assertEq(s.getPropertyValue('font-kerning'), 'inherit', 'font: inherit expands to font-kerning');
  assertEq(s.getPropertyValue('font-feature-settings'), 'inherit', 'font: inherit expands to font-feature-settings');
  assertEq(s.getPropertyValue('font-variation-settings'), 'inherit', 'font: inherit expands to font-variation-settings');
  assertEq(s.getPropertyValue('font-language-override'), 'inherit', 'font: inherit expands to font-language-override');
  s.removeProperty('font');
  assertEq(s.getPropertyValue('font-style'), '', 'font: removeProperty clears font-style');
  assertEq(s.getPropertyValue('font-variant-ligatures'), '', 'font: removeProperty clears font-variant-ligatures');
  assertEq(s.getPropertyValue('font-variant-caps'), '', 'font: removeProperty clears font-variant-caps');
  assertEq(s.getPropertyValue('font-variant-numeric'), '', 'font: removeProperty clears font-variant-numeric');
  assertEq(s.getPropertyValue('font-variant-east-asian'), '', 'font: removeProperty clears font-variant-east-asian');
  assertEq(s.getPropertyValue('font-variant-alternates'), '', 'font: removeProperty clears font-variant-alternates');
  assertEq(s.getPropertyValue('font-variant-position'), '', 'font: removeProperty clears font-variant-position');
  assertEq(s.getPropertyValue('font-variant-emoji'), '', 'font: removeProperty clears font-variant-emoji');
  assertEq(s.getPropertyValue('font-weight'), '', 'font: removeProperty clears font-weight');
  assertEq(s.getPropertyValue('font-stretch'), '', 'font: removeProperty clears font-stretch');
  assertEq(s.getPropertyValue('font-size'), '', 'font: removeProperty clears font-size');
  assertEq(s.getPropertyValue('line-height'), '', 'font: removeProperty clears line-height');
  assertEq(s.getPropertyValue('font-family'), '', 'font: removeProperty clears font-family');
  assertEq(s.getPropertyValue('font-optical-sizing'), '', 'font: removeProperty clears font-optical-sizing');
  assertEq(s.getPropertyValue('font-size-adjust'), '', 'font: removeProperty clears font-size-adjust');
  assertEq(s.getPropertyValue('font-kerning'), '', 'font: removeProperty clears font-kerning');
  assertEq(s.getPropertyValue('font-feature-settings'), '', 'font: removeProperty clears font-feature-settings');
  assertEq(s.getPropertyValue('font-variation-settings'), '', 'font: removeProperty clears font-variation-settings');
  assertEq(s.getPropertyValue('font-language-override'), '', 'font: removeProperty clears font-language-override');
}

// --- font-variant (shorthand) ---
{
  const s = fresh();
  s.setProperty('font-variant', 'inherit');
  assertEq(s.getPropertyValue('font-variant-ligatures'), 'inherit', 'font-variant: expands to font-variant-ligatures');
  assertEq(s.getPropertyValue('font-variant-caps'), 'inherit', 'font-variant: expands to font-variant-caps');
  assertEq(s.getPropertyValue('font-variant-alternates'), 'inherit', 'font-variant: expands to font-variant-alternates');
  assertEq(s.getPropertyValue('font-variant-numeric'), 'inherit', 'font-variant: expands to font-variant-numeric');
  assertEq(s.getPropertyValue('font-variant-east-asian'), 'inherit', 'font-variant: expands to font-variant-east-asian');
  assertEq(s.getPropertyValue('font-variant-position'), 'inherit', 'font-variant: expands to font-variant-position');
  assertEq(s.getPropertyValue('font-variant-emoji'), 'inherit', 'font-variant: expands to font-variant-emoji');
  s.setProperty('font-variant', 'inherit');
  assertEq(s.getPropertyValue('font-variant-ligatures'), 'inherit', 'font-variant: inherit expands to font-variant-ligatures');
  assertEq(s.getPropertyValue('font-variant-caps'), 'inherit', 'font-variant: inherit expands to font-variant-caps');
  assertEq(s.getPropertyValue('font-variant-alternates'), 'inherit', 'font-variant: inherit expands to font-variant-alternates');
  assertEq(s.getPropertyValue('font-variant-numeric'), 'inherit', 'font-variant: inherit expands to font-variant-numeric');
  assertEq(s.getPropertyValue('font-variant-east-asian'), 'inherit', 'font-variant: inherit expands to font-variant-east-asian');
  assertEq(s.getPropertyValue('font-variant-position'), 'inherit', 'font-variant: inherit expands to font-variant-position');
  assertEq(s.getPropertyValue('font-variant-emoji'), 'inherit', 'font-variant: inherit expands to font-variant-emoji');
  s.removeProperty('font-variant');
  assertEq(s.getPropertyValue('font-variant-ligatures'), '', 'font-variant: removeProperty clears font-variant-ligatures');
  assertEq(s.getPropertyValue('font-variant-caps'), '', 'font-variant: removeProperty clears font-variant-caps');
  assertEq(s.getPropertyValue('font-variant-alternates'), '', 'font-variant: removeProperty clears font-variant-alternates');
  assertEq(s.getPropertyValue('font-variant-numeric'), '', 'font-variant: removeProperty clears font-variant-numeric');
  assertEq(s.getPropertyValue('font-variant-east-asian'), '', 'font-variant: removeProperty clears font-variant-east-asian');
  assertEq(s.getPropertyValue('font-variant-position'), '', 'font-variant: removeProperty clears font-variant-position');
  assertEq(s.getPropertyValue('font-variant-emoji'), '', 'font-variant: removeProperty clears font-variant-emoji');
}

// --- font-synthesis (shorthand) ---
{
  const s = fresh();
  s.setProperty('font-synthesis', 'inherit');
  assertEq(s.getPropertyValue('font-synthesis-weight'), 'inherit', 'font-synthesis: expands to font-synthesis-weight');
  assertEq(s.getPropertyValue('font-synthesis-style'), 'inherit', 'font-synthesis: expands to font-synthesis-style');
  assertEq(s.getPropertyValue('font-synthesis-small-caps'), 'inherit', 'font-synthesis: expands to font-synthesis-small-caps');
  s.setProperty('font-synthesis', 'inherit');
  assertEq(s.getPropertyValue('font-synthesis-weight'), 'inherit', 'font-synthesis: inherit expands to font-synthesis-weight');
  assertEq(s.getPropertyValue('font-synthesis-style'), 'inherit', 'font-synthesis: inherit expands to font-synthesis-style');
  assertEq(s.getPropertyValue('font-synthesis-small-caps'), 'inherit', 'font-synthesis: inherit expands to font-synthesis-small-caps');
  s.removeProperty('font-synthesis');
  assertEq(s.getPropertyValue('font-synthesis-weight'), '', 'font-synthesis: removeProperty clears font-synthesis-weight');
  assertEq(s.getPropertyValue('font-synthesis-style'), '', 'font-synthesis: removeProperty clears font-synthesis-style');
  assertEq(s.getPropertyValue('font-synthesis-small-caps'), '', 'font-synthesis: removeProperty clears font-synthesis-small-caps');
}

// --- grid (shorthand) ---
{
  const s = fresh();
  s.setProperty('grid', 'inherit');
  assertEq(s.getPropertyValue('grid-template-rows'), 'inherit', 'grid: expands to grid-template-rows');
  assertEq(s.getPropertyValue('grid-template-columns'), 'inherit', 'grid: expands to grid-template-columns');
  assertEq(s.getPropertyValue('grid-template-areas'), 'inherit', 'grid: expands to grid-template-areas');
  assertEq(s.getPropertyValue('grid-auto-flow'), 'inherit', 'grid: expands to grid-auto-flow');
  assertEq(s.getPropertyValue('grid-auto-rows'), 'inherit', 'grid: expands to grid-auto-rows');
  assertEq(s.getPropertyValue('grid-auto-columns'), 'inherit', 'grid: expands to grid-auto-columns');
  s.setProperty('grid', 'inherit');
  assertEq(s.getPropertyValue('grid-template-rows'), 'inherit', 'grid: inherit expands to grid-template-rows');
  assertEq(s.getPropertyValue('grid-template-columns'), 'inherit', 'grid: inherit expands to grid-template-columns');
  assertEq(s.getPropertyValue('grid-template-areas'), 'inherit', 'grid: inherit expands to grid-template-areas');
  assertEq(s.getPropertyValue('grid-auto-flow'), 'inherit', 'grid: inherit expands to grid-auto-flow');
  assertEq(s.getPropertyValue('grid-auto-rows'), 'inherit', 'grid: inherit expands to grid-auto-rows');
  assertEq(s.getPropertyValue('grid-auto-columns'), 'inherit', 'grid: inherit expands to grid-auto-columns');
  s.removeProperty('grid');
  assertEq(s.getPropertyValue('grid-template-rows'), '', 'grid: removeProperty clears grid-template-rows');
  assertEq(s.getPropertyValue('grid-template-columns'), '', 'grid: removeProperty clears grid-template-columns');
  assertEq(s.getPropertyValue('grid-template-areas'), '', 'grid: removeProperty clears grid-template-areas');
  assertEq(s.getPropertyValue('grid-auto-flow'), '', 'grid: removeProperty clears grid-auto-flow');
  assertEq(s.getPropertyValue('grid-auto-rows'), '', 'grid: removeProperty clears grid-auto-rows');
  assertEq(s.getPropertyValue('grid-auto-columns'), '', 'grid: removeProperty clears grid-auto-columns');
}

// --- place-content (shorthand) ---
{
  const s = fresh();
  s.setProperty('place-content', 'center');
  assertEq(s.getPropertyValue('align-content'), 'center', 'place-content: expands to align-content');
  assertEq(s.getPropertyValue('justify-content'), 'center', 'place-content: expands to justify-content');
  s.setProperty('place-content', 'inherit');
  assertEq(s.getPropertyValue('align-content'), 'inherit', 'place-content: inherit expands to align-content');
  assertEq(s.getPropertyValue('justify-content'), 'inherit', 'place-content: inherit expands to justify-content');
  s.removeProperty('place-content');
  assertEq(s.getPropertyValue('align-content'), '', 'place-content: removeProperty clears align-content');
  assertEq(s.getPropertyValue('justify-content'), '', 'place-content: removeProperty clears justify-content');
}

// --- place-items (shorthand) ---
{
  const s = fresh();
  s.setProperty('place-items', 'center');
  assertEq(s.getPropertyValue('align-items'), 'center', 'place-items: expands to align-items');
  assertEq(s.getPropertyValue('justify-items'), 'center', 'place-items: expands to justify-items');
  s.setProperty('place-items', 'inherit');
  assertEq(s.getPropertyValue('align-items'), 'inherit', 'place-items: inherit expands to align-items');
  assertEq(s.getPropertyValue('justify-items'), 'inherit', 'place-items: inherit expands to justify-items');
  s.removeProperty('place-items');
  assertEq(s.getPropertyValue('align-items'), '', 'place-items: removeProperty clears align-items');
  assertEq(s.getPropertyValue('justify-items'), '', 'place-items: removeProperty clears justify-items');
}

// --- place-self (shorthand) ---
{
  const s = fresh();
  s.setProperty('place-self', 'center');
  assertEq(s.getPropertyValue('align-self'), 'center', 'place-self: expands to align-self');
  assertEq(s.getPropertyValue('justify-self'), 'center', 'place-self: expands to justify-self');
  s.setProperty('place-self', 'inherit');
  assertEq(s.getPropertyValue('align-self'), 'inherit', 'place-self: inherit expands to align-self');
  assertEq(s.getPropertyValue('justify-self'), 'inherit', 'place-self: inherit expands to justify-self');
  s.removeProperty('place-self');
  assertEq(s.getPropertyValue('align-self'), '', 'place-self: removeProperty clears align-self');
  assertEq(s.getPropertyValue('justify-self'), '', 'place-self: removeProperty clears justify-self');
}

// --- gap (shorthand) ---
{
  const s = fresh();
  s.setProperty('gap', '10px');
  assertEq(s.getPropertyValue('row-gap'), '10px', 'gap: expands to row-gap');
  assertEq(s.getPropertyValue('column-gap'), '10px', 'gap: expands to column-gap');
  s.setProperty('gap', 'inherit');
  assertEq(s.getPropertyValue('row-gap'), 'inherit', 'gap: inherit expands to row-gap');
  assertEq(s.getPropertyValue('column-gap'), 'inherit', 'gap: inherit expands to column-gap');
  s.removeProperty('gap');
  assertEq(s.getPropertyValue('row-gap'), '', 'gap: removeProperty clears row-gap');
  assertEq(s.getPropertyValue('column-gap'), '', 'gap: removeProperty clears column-gap');
}

// --- grid-area (shorthand) ---
{
  const s = fresh();
  s.setProperty('grid-area', 'inherit');
  assertEq(s.getPropertyValue('grid-row-start'), 'inherit', 'grid-area: expands to grid-row-start');
  assertEq(s.getPropertyValue('grid-column-start'), 'inherit', 'grid-area: expands to grid-column-start');
  assertEq(s.getPropertyValue('grid-row-end'), 'inherit', 'grid-area: expands to grid-row-end');
  assertEq(s.getPropertyValue('grid-column-end'), 'inherit', 'grid-area: expands to grid-column-end');
  s.setProperty('grid-area', 'inherit');
  assertEq(s.getPropertyValue('grid-row-start'), 'inherit', 'grid-area: inherit expands to grid-row-start');
  assertEq(s.getPropertyValue('grid-column-start'), 'inherit', 'grid-area: inherit expands to grid-column-start');
  assertEq(s.getPropertyValue('grid-row-end'), 'inherit', 'grid-area: inherit expands to grid-row-end');
  assertEq(s.getPropertyValue('grid-column-end'), 'inherit', 'grid-area: inherit expands to grid-column-end');
  s.removeProperty('grid-area');
  assertEq(s.getPropertyValue('grid-row-start'), '', 'grid-area: removeProperty clears grid-row-start');
  assertEq(s.getPropertyValue('grid-column-start'), '', 'grid-area: removeProperty clears grid-column-start');
  assertEq(s.getPropertyValue('grid-row-end'), '', 'grid-area: removeProperty clears grid-row-end');
  assertEq(s.getPropertyValue('grid-column-end'), '', 'grid-area: removeProperty clears grid-column-end');
}

// --- grid-column (shorthand) ---
{
  const s = fresh();
  s.setProperty('grid-column', 'inherit');
  assertEq(s.getPropertyValue('grid-column-start'), 'inherit', 'grid-column: expands to grid-column-start');
  assertEq(s.getPropertyValue('grid-column-end'), 'inherit', 'grid-column: expands to grid-column-end');
  s.setProperty('grid-column', 'inherit');
  assertEq(s.getPropertyValue('grid-column-start'), 'inherit', 'grid-column: inherit expands to grid-column-start');
  assertEq(s.getPropertyValue('grid-column-end'), 'inherit', 'grid-column: inherit expands to grid-column-end');
  s.removeProperty('grid-column');
  assertEq(s.getPropertyValue('grid-column-start'), '', 'grid-column: removeProperty clears grid-column-start');
  assertEq(s.getPropertyValue('grid-column-end'), '', 'grid-column: removeProperty clears grid-column-end');
}

// --- grid-lanes (shorthand) ---
{
  const s = fresh();
  s.setProperty('grid-lanes', 'inherit');
  assertEq(s.getPropertyValue('grid-template-areas'), 'inherit', 'grid-lanes: expands to grid-template-areas');
  assertEq(s.getPropertyValue('grid-template-columns'), 'inherit', 'grid-lanes: expands to grid-template-columns');
  assertEq(s.getPropertyValue('grid-template-rows'), 'inherit', 'grid-lanes: expands to grid-template-rows');
  assertEq(s.getPropertyValue('grid-lanes-direction'), 'inherit', 'grid-lanes: expands to grid-lanes-direction');
  s.setProperty('grid-lanes', 'inherit');
  assertEq(s.getPropertyValue('grid-template-areas'), 'inherit', 'grid-lanes: inherit expands to grid-template-areas');
  assertEq(s.getPropertyValue('grid-template-columns'), 'inherit', 'grid-lanes: inherit expands to grid-template-columns');
  assertEq(s.getPropertyValue('grid-template-rows'), 'inherit', 'grid-lanes: inherit expands to grid-template-rows');
  assertEq(s.getPropertyValue('grid-lanes-direction'), 'inherit', 'grid-lanes: inherit expands to grid-lanes-direction');
  s.removeProperty('grid-lanes');
  assertEq(s.getPropertyValue('grid-template-areas'), '', 'grid-lanes: removeProperty clears grid-template-areas');
  assertEq(s.getPropertyValue('grid-template-columns'), '', 'grid-lanes: removeProperty clears grid-template-columns');
  assertEq(s.getPropertyValue('grid-template-rows'), '', 'grid-lanes: removeProperty clears grid-template-rows');
  assertEq(s.getPropertyValue('grid-lanes-direction'), '', 'grid-lanes: removeProperty clears grid-lanes-direction');
}

// --- grid-row (shorthand) ---
{
  const s = fresh();
  s.setProperty('grid-row', 'inherit');
  assertEq(s.getPropertyValue('grid-row-start'), 'inherit', 'grid-row: expands to grid-row-start');
  assertEq(s.getPropertyValue('grid-row-end'), 'inherit', 'grid-row: expands to grid-row-end');
  s.setProperty('grid-row', 'inherit');
  assertEq(s.getPropertyValue('grid-row-start'), 'inherit', 'grid-row: inherit expands to grid-row-start');
  assertEq(s.getPropertyValue('grid-row-end'), 'inherit', 'grid-row: inherit expands to grid-row-end');
  s.removeProperty('grid-row');
  assertEq(s.getPropertyValue('grid-row-start'), '', 'grid-row: removeProperty clears grid-row-start');
  assertEq(s.getPropertyValue('grid-row-end'), '', 'grid-row: removeProperty clears grid-row-end');
}

// --- grid-template (shorthand) ---
{
  const s = fresh();
  s.setProperty('grid-template', 'inherit');
  assertEq(s.getPropertyValue('grid-template-rows'), 'inherit', 'grid-template: expands to grid-template-rows');
  assertEq(s.getPropertyValue('grid-template-columns'), 'inherit', 'grid-template: expands to grid-template-columns');
  assertEq(s.getPropertyValue('grid-template-areas'), 'inherit', 'grid-template: expands to grid-template-areas');
  s.setProperty('grid-template', 'inherit');
  assertEq(s.getPropertyValue('grid-template-rows'), 'inherit', 'grid-template: inherit expands to grid-template-rows');
  assertEq(s.getPropertyValue('grid-template-columns'), 'inherit', 'grid-template: inherit expands to grid-template-columns');
  assertEq(s.getPropertyValue('grid-template-areas'), 'inherit', 'grid-template: inherit expands to grid-template-areas');
  s.removeProperty('grid-template');
  assertEq(s.getPropertyValue('grid-template-rows'), '', 'grid-template: removeProperty clears grid-template-rows');
  assertEq(s.getPropertyValue('grid-template-columns'), '', 'grid-template: removeProperty clears grid-template-columns');
  assertEq(s.getPropertyValue('grid-template-areas'), '', 'grid-template: removeProperty clears grid-template-areas');
}

// --- inset (shorthand) ---
{
  const s = fresh();
  s.setProperty('inset', '10px');
  assertEq(s.getPropertyValue('top'), '10px', 'inset: expands to top');
  assertEq(s.getPropertyValue('right'), '10px', 'inset: expands to right');
  assertEq(s.getPropertyValue('bottom'), '10px', 'inset: expands to bottom');
  assertEq(s.getPropertyValue('left'), '10px', 'inset: expands to left');
  s.setProperty('inset', 'inherit');
  assertEq(s.getPropertyValue('top'), 'inherit', 'inset: inherit expands to top');
  assertEq(s.getPropertyValue('right'), 'inherit', 'inset: inherit expands to right');
  assertEq(s.getPropertyValue('bottom'), 'inherit', 'inset: inherit expands to bottom');
  assertEq(s.getPropertyValue('left'), 'inherit', 'inset: inherit expands to left');
  s.removeProperty('inset');
  assertEq(s.getPropertyValue('top'), '', 'inset: removeProperty clears top');
  assertEq(s.getPropertyValue('right'), '', 'inset: removeProperty clears right');
  assertEq(s.getPropertyValue('bottom'), '', 'inset: removeProperty clears bottom');
  assertEq(s.getPropertyValue('left'), '', 'inset: removeProperty clears left');
}

// --- inset-block (shorthand) ---
{
  const s = fresh();
  s.setProperty('inset-block', '5px');
  assertEq(s.getPropertyValue('inset-block-start'), '5px', 'inset-block: expands to inset-block-start');
  assertEq(s.getPropertyValue('inset-block-end'), '5px', 'inset-block: expands to inset-block-end');
  s.setProperty('inset-block', 'inherit');
  assertEq(s.getPropertyValue('inset-block-start'), 'inherit', 'inset-block: inherit expands to inset-block-start');
  assertEq(s.getPropertyValue('inset-block-end'), 'inherit', 'inset-block: inherit expands to inset-block-end');
  s.removeProperty('inset-block');
  assertEq(s.getPropertyValue('inset-block-start'), '', 'inset-block: removeProperty clears inset-block-start');
  assertEq(s.getPropertyValue('inset-block-end'), '', 'inset-block: removeProperty clears inset-block-end');
}

// --- inset-inline (shorthand) ---
{
  const s = fresh();
  s.setProperty('inset-inline', '5px');
  assertEq(s.getPropertyValue('inset-inline-start'), '5px', 'inset-inline: expands to inset-inline-start');
  assertEq(s.getPropertyValue('inset-inline-end'), '5px', 'inset-inline: expands to inset-inline-end');
  s.setProperty('inset-inline', 'inherit');
  assertEq(s.getPropertyValue('inset-inline-start'), 'inherit', 'inset-inline: inherit expands to inset-inline-start');
  assertEq(s.getPropertyValue('inset-inline-end'), 'inherit', 'inset-inline: inherit expands to inset-inline-end');
  s.removeProperty('inset-inline');
  assertEq(s.getPropertyValue('inset-inline-start'), '', 'inset-inline: removeProperty clears inset-inline-start');
  assertEq(s.getPropertyValue('inset-inline-end'), '', 'inset-inline: removeProperty clears inset-inline-end');
}

// --- list-style (shorthand) ---
{
  const s = fresh();
  s.setProperty('list-style', 'inherit');
  assertEq(s.getPropertyValue('list-style-position'), 'inherit', 'list-style: expands to list-style-position');
  assertEq(s.getPropertyValue('list-style-image'), 'inherit', 'list-style: expands to list-style-image');
  assertEq(s.getPropertyValue('list-style-type'), 'inherit', 'list-style: expands to list-style-type');
  s.setProperty('list-style', 'inherit');
  assertEq(s.getPropertyValue('list-style-position'), 'inherit', 'list-style: inherit expands to list-style-position');
  assertEq(s.getPropertyValue('list-style-image'), 'inherit', 'list-style: inherit expands to list-style-image');
  assertEq(s.getPropertyValue('list-style-type'), 'inherit', 'list-style: inherit expands to list-style-type');
  s.removeProperty('list-style');
  assertEq(s.getPropertyValue('list-style-position'), '', 'list-style: removeProperty clears list-style-position');
  assertEq(s.getPropertyValue('list-style-image'), '', 'list-style: removeProperty clears list-style-image');
  assertEq(s.getPropertyValue('list-style-type'), '', 'list-style: removeProperty clears list-style-type');
}

// --- margin (shorthand) ---
{
  const s = fresh();
  s.setProperty('margin', '10px');
  assertEq(s.getPropertyValue('margin-top'), '10px', 'margin: expands to margin-top');
  assertEq(s.getPropertyValue('margin-right'), '10px', 'margin: expands to margin-right');
  assertEq(s.getPropertyValue('margin-bottom'), '10px', 'margin: expands to margin-bottom');
  assertEq(s.getPropertyValue('margin-left'), '10px', 'margin: expands to margin-left');
  s.setProperty('margin', 'inherit');
  assertEq(s.getPropertyValue('margin-top'), 'inherit', 'margin: inherit expands to margin-top');
  assertEq(s.getPropertyValue('margin-right'), 'inherit', 'margin: inherit expands to margin-right');
  assertEq(s.getPropertyValue('margin-bottom'), 'inherit', 'margin: inherit expands to margin-bottom');
  assertEq(s.getPropertyValue('margin-left'), 'inherit', 'margin: inherit expands to margin-left');
  s.removeProperty('margin');
  assertEq(s.getPropertyValue('margin-top'), '', 'margin: removeProperty clears margin-top');
  assertEq(s.getPropertyValue('margin-right'), '', 'margin: removeProperty clears margin-right');
  assertEq(s.getPropertyValue('margin-bottom'), '', 'margin: removeProperty clears margin-bottom');
  assertEq(s.getPropertyValue('margin-left'), '', 'margin: removeProperty clears margin-left');
}

// --- margin-block (shorthand) ---
{
  const s = fresh();
  s.setProperty('margin-block', '5px');
  assertEq(s.getPropertyValue('margin-block-start'), '5px', 'margin-block: expands to margin-block-start');
  assertEq(s.getPropertyValue('margin-block-end'), '5px', 'margin-block: expands to margin-block-end');
  s.setProperty('margin-block', 'inherit');
  assertEq(s.getPropertyValue('margin-block-start'), 'inherit', 'margin-block: inherit expands to margin-block-start');
  assertEq(s.getPropertyValue('margin-block-end'), 'inherit', 'margin-block: inherit expands to margin-block-end');
  s.removeProperty('margin-block');
  assertEq(s.getPropertyValue('margin-block-start'), '', 'margin-block: removeProperty clears margin-block-start');
  assertEq(s.getPropertyValue('margin-block-end'), '', 'margin-block: removeProperty clears margin-block-end');
}

// --- margin-inline (shorthand) ---
{
  const s = fresh();
  s.setProperty('margin-inline', '5px');
  assertEq(s.getPropertyValue('margin-inline-start'), '5px', 'margin-inline: expands to margin-inline-start');
  assertEq(s.getPropertyValue('margin-inline-end'), '5px', 'margin-inline: expands to margin-inline-end');
  s.setProperty('margin-inline', 'inherit');
  assertEq(s.getPropertyValue('margin-inline-start'), 'inherit', 'margin-inline: inherit expands to margin-inline-start');
  assertEq(s.getPropertyValue('margin-inline-end'), 'inherit', 'margin-inline: inherit expands to margin-inline-end');
  s.removeProperty('margin-inline');
  assertEq(s.getPropertyValue('margin-inline-start'), '', 'margin-inline: removeProperty clears margin-inline-start');
  assertEq(s.getPropertyValue('margin-inline-end'), '', 'margin-inline: removeProperty clears margin-inline-end');
}

// --- marker (shorthand) ---
{
  const s = fresh();
  s.setProperty('marker', 'inherit');
  assertEq(s.getPropertyValue('marker-start'), 'inherit', 'marker: expands to marker-start');
  assertEq(s.getPropertyValue('marker-mid'), 'inherit', 'marker: expands to marker-mid');
  assertEq(s.getPropertyValue('marker-end'), 'inherit', 'marker: expands to marker-end');
  s.setProperty('marker', 'inherit');
  assertEq(s.getPropertyValue('marker-start'), 'inherit', 'marker: inherit expands to marker-start');
  assertEq(s.getPropertyValue('marker-mid'), 'inherit', 'marker: inherit expands to marker-mid');
  assertEq(s.getPropertyValue('marker-end'), 'inherit', 'marker: inherit expands to marker-end');
  s.removeProperty('marker');
  assertEq(s.getPropertyValue('marker-start'), '', 'marker: removeProperty clears marker-start');
  assertEq(s.getPropertyValue('marker-mid'), '', 'marker: removeProperty clears marker-mid');
  assertEq(s.getPropertyValue('marker-end'), '', 'marker: removeProperty clears marker-end');
}

// --- offset (shorthand) ---
{
  const s = fresh();
  s.setProperty('offset', 'inherit');
  assertEq(s.getPropertyValue('offset-position'), 'inherit', 'offset: expands to offset-position');
  assertEq(s.getPropertyValue('offset-path'), 'inherit', 'offset: expands to offset-path');
  assertEq(s.getPropertyValue('offset-distance'), 'inherit', 'offset: expands to offset-distance');
  assertEq(s.getPropertyValue('offset-rotate'), 'inherit', 'offset: expands to offset-rotate');
  assertEq(s.getPropertyValue('offset-anchor'), 'inherit', 'offset: expands to offset-anchor');
  s.setProperty('offset', 'inherit');
  assertEq(s.getPropertyValue('offset-position'), 'inherit', 'offset: inherit expands to offset-position');
  assertEq(s.getPropertyValue('offset-path'), 'inherit', 'offset: inherit expands to offset-path');
  assertEq(s.getPropertyValue('offset-distance'), 'inherit', 'offset: inherit expands to offset-distance');
  assertEq(s.getPropertyValue('offset-rotate'), 'inherit', 'offset: inherit expands to offset-rotate');
  assertEq(s.getPropertyValue('offset-anchor'), 'inherit', 'offset: inherit expands to offset-anchor');
  s.removeProperty('offset');
  assertEq(s.getPropertyValue('offset-position'), '', 'offset: removeProperty clears offset-position');
  assertEq(s.getPropertyValue('offset-path'), '', 'offset: removeProperty clears offset-path');
  assertEq(s.getPropertyValue('offset-distance'), '', 'offset: removeProperty clears offset-distance');
  assertEq(s.getPropertyValue('offset-rotate'), '', 'offset: removeProperty clears offset-rotate');
  assertEq(s.getPropertyValue('offset-anchor'), '', 'offset: removeProperty clears offset-anchor');
}

// --- outline (shorthand) ---
{
  const s = fresh();
  s.setProperty('outline', '1px solid red');
  assertEq(s.getPropertyValue('outline-width'), '1px', 'outline: expands to outline-width');
  assertEq(s.getPropertyValue('outline-style'), 'solid', 'outline: expands to outline-style');
  assertEq(s.getPropertyValue('outline-color'), 'red', 'outline: expands to outline-color');
  s.setProperty('outline', 'inherit');
  assertEq(s.getPropertyValue('outline-color'), 'inherit', 'outline: inherit expands to outline-color');
  assertEq(s.getPropertyValue('outline-style'), 'inherit', 'outline: inherit expands to outline-style');
  assertEq(s.getPropertyValue('outline-width'), 'inherit', 'outline: inherit expands to outline-width');
  s.removeProperty('outline');
  assertEq(s.getPropertyValue('outline-color'), '', 'outline: removeProperty clears outline-color');
  assertEq(s.getPropertyValue('outline-style'), '', 'outline: removeProperty clears outline-style');
  assertEq(s.getPropertyValue('outline-width'), '', 'outline: removeProperty clears outline-width');
}

// --- overflow (shorthand) ---
{
  const s = fresh();
  s.setProperty('overflow', 'hidden');
  assertEq(s.getPropertyValue('overflow-x'), 'hidden', 'overflow: expands to overflow-x');
  assertEq(s.getPropertyValue('overflow-y'), 'hidden', 'overflow: expands to overflow-y');
  s.setProperty('overflow', 'inherit');
  assertEq(s.getPropertyValue('overflow-x'), 'inherit', 'overflow: inherit expands to overflow-x');
  assertEq(s.getPropertyValue('overflow-y'), 'inherit', 'overflow: inherit expands to overflow-y');
  s.removeProperty('overflow');
  assertEq(s.getPropertyValue('overflow-x'), '', 'overflow: removeProperty clears overflow-x');
  assertEq(s.getPropertyValue('overflow-y'), '', 'overflow: removeProperty clears overflow-y');
}

// --- overscroll-behavior (shorthand) ---
{
  const s = fresh();
  s.setProperty('overscroll-behavior', 'auto');
  assertEq(s.getPropertyValue('overscroll-behavior-x'), 'auto', 'overscroll-behavior: expands to overscroll-behavior-x');
  assertEq(s.getPropertyValue('overscroll-behavior-y'), 'auto', 'overscroll-behavior: expands to overscroll-behavior-y');
  s.setProperty('overscroll-behavior', 'inherit');
  assertEq(s.getPropertyValue('overscroll-behavior-x'), 'inherit', 'overscroll-behavior: inherit expands to overscroll-behavior-x');
  assertEq(s.getPropertyValue('overscroll-behavior-y'), 'inherit', 'overscroll-behavior: inherit expands to overscroll-behavior-y');
  s.removeProperty('overscroll-behavior');
  assertEq(s.getPropertyValue('overscroll-behavior-x'), '', 'overscroll-behavior: removeProperty clears overscroll-behavior-x');
  assertEq(s.getPropertyValue('overscroll-behavior-y'), '', 'overscroll-behavior: removeProperty clears overscroll-behavior-y');
}

// --- padding (shorthand) ---
{
  const s = fresh();
  s.setProperty('padding', '10px');
  assertEq(s.getPropertyValue('padding-top'), '10px', 'padding: expands to padding-top');
  assertEq(s.getPropertyValue('padding-right'), '10px', 'padding: expands to padding-right');
  assertEq(s.getPropertyValue('padding-bottom'), '10px', 'padding: expands to padding-bottom');
  assertEq(s.getPropertyValue('padding-left'), '10px', 'padding: expands to padding-left');
  s.setProperty('padding', 'inherit');
  assertEq(s.getPropertyValue('padding-top'), 'inherit', 'padding: inherit expands to padding-top');
  assertEq(s.getPropertyValue('padding-right'), 'inherit', 'padding: inherit expands to padding-right');
  assertEq(s.getPropertyValue('padding-bottom'), 'inherit', 'padding: inherit expands to padding-bottom');
  assertEq(s.getPropertyValue('padding-left'), 'inherit', 'padding: inherit expands to padding-left');
  s.removeProperty('padding');
  assertEq(s.getPropertyValue('padding-top'), '', 'padding: removeProperty clears padding-top');
  assertEq(s.getPropertyValue('padding-right'), '', 'padding: removeProperty clears padding-right');
  assertEq(s.getPropertyValue('padding-bottom'), '', 'padding: removeProperty clears padding-bottom');
  assertEq(s.getPropertyValue('padding-left'), '', 'padding: removeProperty clears padding-left');
}

// --- padding-block (shorthand) ---
{
  const s = fresh();
  s.setProperty('padding-block', '5px');
  assertEq(s.getPropertyValue('padding-block-start'), '5px', 'padding-block: expands to padding-block-start');
  assertEq(s.getPropertyValue('padding-block-end'), '5px', 'padding-block: expands to padding-block-end');
  s.setProperty('padding-block', 'inherit');
  assertEq(s.getPropertyValue('padding-block-start'), 'inherit', 'padding-block: inherit expands to padding-block-start');
  assertEq(s.getPropertyValue('padding-block-end'), 'inherit', 'padding-block: inherit expands to padding-block-end');
  s.removeProperty('padding-block');
  assertEq(s.getPropertyValue('padding-block-start'), '', 'padding-block: removeProperty clears padding-block-start');
  assertEq(s.getPropertyValue('padding-block-end'), '', 'padding-block: removeProperty clears padding-block-end');
}

// --- padding-inline (shorthand) ---
{
  const s = fresh();
  s.setProperty('padding-inline', '5px');
  assertEq(s.getPropertyValue('padding-inline-start'), '5px', 'padding-inline: expands to padding-inline-start');
  assertEq(s.getPropertyValue('padding-inline-end'), '5px', 'padding-inline: expands to padding-inline-end');
  s.setProperty('padding-inline', 'inherit');
  assertEq(s.getPropertyValue('padding-inline-start'), 'inherit', 'padding-inline: inherit expands to padding-inline-start');
  assertEq(s.getPropertyValue('padding-inline-end'), 'inherit', 'padding-inline: inherit expands to padding-inline-end');
  s.removeProperty('padding-inline');
  assertEq(s.getPropertyValue('padding-inline-start'), '', 'padding-inline: removeProperty clears padding-inline-start');
  assertEq(s.getPropertyValue('padding-inline-end'), '', 'padding-inline: removeProperty clears padding-inline-end');
}

// --- page-break-after (shorthand) ---
{
  const s = fresh();
  s.setProperty('page-break-after', 'inherit');
  assertEq(s.getPropertyValue('break-after'), 'inherit', 'page-break-after: expands to break-after');
  s.setProperty('page-break-after', 'inherit');
  assertEq(s.getPropertyValue('break-after'), 'inherit', 'page-break-after: inherit expands to break-after');
  s.removeProperty('page-break-after');
  assertEq(s.getPropertyValue('break-after'), '', 'page-break-after: removeProperty clears break-after');
}

// --- page-break-before (shorthand) ---
{
  const s = fresh();
  s.setProperty('page-break-before', 'inherit');
  assertEq(s.getPropertyValue('break-before'), 'inherit', 'page-break-before: expands to break-before');
  s.setProperty('page-break-before', 'inherit');
  assertEq(s.getPropertyValue('break-before'), 'inherit', 'page-break-before: inherit expands to break-before');
  s.removeProperty('page-break-before');
  assertEq(s.getPropertyValue('break-before'), '', 'page-break-before: removeProperty clears break-before');
}

// --- page-break-inside (shorthand) ---
{
  const s = fresh();
  s.setProperty('page-break-inside', 'inherit');
  assertEq(s.getPropertyValue('break-inside'), 'inherit', 'page-break-inside: expands to break-inside');
  s.setProperty('page-break-inside', 'inherit');
  assertEq(s.getPropertyValue('break-inside'), 'inherit', 'page-break-inside: inherit expands to break-inside');
  s.removeProperty('page-break-inside');
  assertEq(s.getPropertyValue('break-inside'), '', 'page-break-inside: removeProperty clears break-inside');
}

// --- position-try (shorthand) ---
{
  const s = fresh();
  s.setProperty('position-try', 'inherit');
  assertEq(s.getPropertyValue('position-try-order'), 'inherit', 'position-try: expands to position-try-order');
  assertEq(s.getPropertyValue('position-try-fallbacks'), 'inherit', 'position-try: expands to position-try-fallbacks');
  s.setProperty('position-try', 'inherit');
  assertEq(s.getPropertyValue('position-try-order'), 'inherit', 'position-try: inherit expands to position-try-order');
  assertEq(s.getPropertyValue('position-try-fallbacks'), 'inherit', 'position-try: inherit expands to position-try-fallbacks');
  s.removeProperty('position-try');
  assertEq(s.getPropertyValue('position-try-order'), '', 'position-try: removeProperty clears position-try-order');
  assertEq(s.getPropertyValue('position-try-fallbacks'), '', 'position-try: removeProperty clears position-try-fallbacks');
}

// --- row-rule-edge-inset (shorthand) ---
{
  const s = fresh();
  s.setProperty('row-rule-edge-inset', 'inherit');
  assertEq(s.getPropertyValue('row-rule-edge-inset-start'), 'inherit', 'row-rule-edge-inset: expands to row-rule-edge-inset-start');
  assertEq(s.getPropertyValue('row-rule-edge-inset-end'), 'inherit', 'row-rule-edge-inset: expands to row-rule-edge-inset-end');
  s.setProperty('row-rule-edge-inset', 'inherit');
  assertEq(s.getPropertyValue('row-rule-edge-inset-start'), 'inherit', 'row-rule-edge-inset: inherit expands to row-rule-edge-inset-start');
  assertEq(s.getPropertyValue('row-rule-edge-inset-end'), 'inherit', 'row-rule-edge-inset: inherit expands to row-rule-edge-inset-end');
  s.removeProperty('row-rule-edge-inset');
  assertEq(s.getPropertyValue('row-rule-edge-inset-start'), '', 'row-rule-edge-inset: removeProperty clears row-rule-edge-inset-start');
  assertEq(s.getPropertyValue('row-rule-edge-inset-end'), '', 'row-rule-edge-inset: removeProperty clears row-rule-edge-inset-end');
}

// --- row-rule-inset-end (shorthand) ---
{
  const s = fresh();
  s.setProperty('row-rule-inset-end', 'inherit');
  assertEq(s.getPropertyValue('row-rule-edge-inset-end'), 'inherit', 'row-rule-inset-end: expands to row-rule-edge-inset-end');
  assertEq(s.getPropertyValue('row-rule-interior-inset-end'), 'inherit', 'row-rule-inset-end: expands to row-rule-interior-inset-end');
  s.setProperty('row-rule-inset-end', 'inherit');
  assertEq(s.getPropertyValue('row-rule-edge-inset-end'), 'inherit', 'row-rule-inset-end: inherit expands to row-rule-edge-inset-end');
  assertEq(s.getPropertyValue('row-rule-interior-inset-end'), 'inherit', 'row-rule-inset-end: inherit expands to row-rule-interior-inset-end');
  s.removeProperty('row-rule-inset-end');
  assertEq(s.getPropertyValue('row-rule-edge-inset-end'), '', 'row-rule-inset-end: removeProperty clears row-rule-edge-inset-end');
  assertEq(s.getPropertyValue('row-rule-interior-inset-end'), '', 'row-rule-inset-end: removeProperty clears row-rule-interior-inset-end');
}

// --- row-rule-inset-start (shorthand) ---
{
  const s = fresh();
  s.setProperty('row-rule-inset-start', 'inherit');
  assertEq(s.getPropertyValue('row-rule-edge-inset-start'), 'inherit', 'row-rule-inset-start: expands to row-rule-edge-inset-start');
  assertEq(s.getPropertyValue('row-rule-interior-inset-start'), 'inherit', 'row-rule-inset-start: expands to row-rule-interior-inset-start');
  s.setProperty('row-rule-inset-start', 'inherit');
  assertEq(s.getPropertyValue('row-rule-edge-inset-start'), 'inherit', 'row-rule-inset-start: inherit expands to row-rule-edge-inset-start');
  assertEq(s.getPropertyValue('row-rule-interior-inset-start'), 'inherit', 'row-rule-inset-start: inherit expands to row-rule-interior-inset-start');
  s.removeProperty('row-rule-inset-start');
  assertEq(s.getPropertyValue('row-rule-edge-inset-start'), '', 'row-rule-inset-start: removeProperty clears row-rule-edge-inset-start');
  assertEq(s.getPropertyValue('row-rule-interior-inset-start'), '', 'row-rule-inset-start: removeProperty clears row-rule-interior-inset-start');
}

// --- row-rule-interior-inset (shorthand) ---
{
  const s = fresh();
  s.setProperty('row-rule-interior-inset', 'inherit');
  assertEq(s.getPropertyValue('row-rule-interior-inset-start'), 'inherit', 'row-rule-interior-inset: expands to row-rule-interior-inset-start');
  assertEq(s.getPropertyValue('row-rule-interior-inset-end'), 'inherit', 'row-rule-interior-inset: expands to row-rule-interior-inset-end');
  s.setProperty('row-rule-interior-inset', 'inherit');
  assertEq(s.getPropertyValue('row-rule-interior-inset-start'), 'inherit', 'row-rule-interior-inset: inherit expands to row-rule-interior-inset-start');
  assertEq(s.getPropertyValue('row-rule-interior-inset-end'), 'inherit', 'row-rule-interior-inset: inherit expands to row-rule-interior-inset-end');
  s.removeProperty('row-rule-interior-inset');
  assertEq(s.getPropertyValue('row-rule-interior-inset-start'), '', 'row-rule-interior-inset: removeProperty clears row-rule-interior-inset-start');
  assertEq(s.getPropertyValue('row-rule-interior-inset-end'), '', 'row-rule-interior-inset: removeProperty clears row-rule-interior-inset-end');
}

// --- rule (shorthand) ---
{
  const s = fresh();
  s.setProperty('rule', 'inherit');
  assertEq(s.getPropertyValue('column-rule-width'), 'inherit', 'rule: expands to column-rule-width');
  assertEq(s.getPropertyValue('column-rule-style'), 'inherit', 'rule: expands to column-rule-style');
  assertEq(s.getPropertyValue('column-rule-color'), 'inherit', 'rule: expands to column-rule-color');
  assertEq(s.getPropertyValue('row-rule-width'), 'inherit', 'rule: expands to row-rule-width');
  assertEq(s.getPropertyValue('row-rule-style'), 'inherit', 'rule: expands to row-rule-style');
  assertEq(s.getPropertyValue('row-rule-color'), 'inherit', 'rule: expands to row-rule-color');
  s.setProperty('rule', 'inherit');
  assertEq(s.getPropertyValue('column-rule-width'), 'inherit', 'rule: inherit expands to column-rule-width');
  assertEq(s.getPropertyValue('column-rule-style'), 'inherit', 'rule: inherit expands to column-rule-style');
  assertEq(s.getPropertyValue('column-rule-color'), 'inherit', 'rule: inherit expands to column-rule-color');
  assertEq(s.getPropertyValue('row-rule-width'), 'inherit', 'rule: inherit expands to row-rule-width');
  assertEq(s.getPropertyValue('row-rule-style'), 'inherit', 'rule: inherit expands to row-rule-style');
  assertEq(s.getPropertyValue('row-rule-color'), 'inherit', 'rule: inherit expands to row-rule-color');
  s.removeProperty('rule');
  assertEq(s.getPropertyValue('column-rule-width'), '', 'rule: removeProperty clears column-rule-width');
  assertEq(s.getPropertyValue('column-rule-style'), '', 'rule: removeProperty clears column-rule-style');
  assertEq(s.getPropertyValue('column-rule-color'), '', 'rule: removeProperty clears column-rule-color');
  assertEq(s.getPropertyValue('row-rule-width'), '', 'rule: removeProperty clears row-rule-width');
  assertEq(s.getPropertyValue('row-rule-style'), '', 'rule: removeProperty clears row-rule-style');
  assertEq(s.getPropertyValue('row-rule-color'), '', 'rule: removeProperty clears row-rule-color');
}

// --- rule-break (shorthand) ---
{
  const s = fresh();
  s.setProperty('rule-break', 'inherit');
  assertEq(s.getPropertyValue('row-rule-break'), 'inherit', 'rule-break: expands to row-rule-break');
  assertEq(s.getPropertyValue('column-rule-break'), 'inherit', 'rule-break: expands to column-rule-break');
  s.setProperty('rule-break', 'inherit');
  assertEq(s.getPropertyValue('row-rule-break'), 'inherit', 'rule-break: inherit expands to row-rule-break');
  assertEq(s.getPropertyValue('column-rule-break'), 'inherit', 'rule-break: inherit expands to column-rule-break');
  s.removeProperty('rule-break');
  assertEq(s.getPropertyValue('row-rule-break'), '', 'rule-break: removeProperty clears row-rule-break');
  assertEq(s.getPropertyValue('column-rule-break'), '', 'rule-break: removeProperty clears column-rule-break');
}

// --- rule-color (shorthand) ---
{
  const s = fresh();
  s.setProperty('rule-color', 'inherit');
  assertEq(s.getPropertyValue('column-rule-color'), 'inherit', 'rule-color: expands to column-rule-color');
  assertEq(s.getPropertyValue('row-rule-color'), 'inherit', 'rule-color: expands to row-rule-color');
  s.setProperty('rule-color', 'inherit');
  assertEq(s.getPropertyValue('column-rule-color'), 'inherit', 'rule-color: inherit expands to column-rule-color');
  assertEq(s.getPropertyValue('row-rule-color'), 'inherit', 'rule-color: inherit expands to row-rule-color');
  s.removeProperty('rule-color');
  assertEq(s.getPropertyValue('column-rule-color'), '', 'rule-color: removeProperty clears column-rule-color');
  assertEq(s.getPropertyValue('row-rule-color'), '', 'rule-color: removeProperty clears row-rule-color');
}

// --- rule-edge-inset (shorthand) ---
{
  const s = fresh();
  s.setProperty('rule-edge-inset', 'inherit');
  assertEq(s.getPropertyValue('row-rule-edge-inset-start'), 'inherit', 'rule-edge-inset: expands to row-rule-edge-inset-start');
  assertEq(s.getPropertyValue('row-rule-edge-inset-end'), 'inherit', 'rule-edge-inset: expands to row-rule-edge-inset-end');
  assertEq(s.getPropertyValue('column-rule-edge-inset-start'), 'inherit', 'rule-edge-inset: expands to column-rule-edge-inset-start');
  assertEq(s.getPropertyValue('column-rule-edge-inset-end'), 'inherit', 'rule-edge-inset: expands to column-rule-edge-inset-end');
  s.setProperty('rule-edge-inset', 'inherit');
  assertEq(s.getPropertyValue('row-rule-edge-inset-start'), 'inherit', 'rule-edge-inset: inherit expands to row-rule-edge-inset-start');
  assertEq(s.getPropertyValue('row-rule-edge-inset-end'), 'inherit', 'rule-edge-inset: inherit expands to row-rule-edge-inset-end');
  assertEq(s.getPropertyValue('column-rule-edge-inset-start'), 'inherit', 'rule-edge-inset: inherit expands to column-rule-edge-inset-start');
  assertEq(s.getPropertyValue('column-rule-edge-inset-end'), 'inherit', 'rule-edge-inset: inherit expands to column-rule-edge-inset-end');
  s.removeProperty('rule-edge-inset');
  assertEq(s.getPropertyValue('row-rule-edge-inset-start'), '', 'rule-edge-inset: removeProperty clears row-rule-edge-inset-start');
  assertEq(s.getPropertyValue('row-rule-edge-inset-end'), '', 'rule-edge-inset: removeProperty clears row-rule-edge-inset-end');
  assertEq(s.getPropertyValue('column-rule-edge-inset-start'), '', 'rule-edge-inset: removeProperty clears column-rule-edge-inset-start');
  assertEq(s.getPropertyValue('column-rule-edge-inset-end'), '', 'rule-edge-inset: removeProperty clears column-rule-edge-inset-end');
}

// --- rule-interior-inset (shorthand) ---
{
  const s = fresh();
  s.setProperty('rule-interior-inset', 'inherit');
  assertEq(s.getPropertyValue('row-rule-interior-inset-start'), 'inherit', 'rule-interior-inset: expands to row-rule-interior-inset-start');
  assertEq(s.getPropertyValue('row-rule-interior-inset-end'), 'inherit', 'rule-interior-inset: expands to row-rule-interior-inset-end');
  assertEq(s.getPropertyValue('column-rule-interior-inset-start'), 'inherit', 'rule-interior-inset: expands to column-rule-interior-inset-start');
  assertEq(s.getPropertyValue('column-rule-interior-inset-end'), 'inherit', 'rule-interior-inset: expands to column-rule-interior-inset-end');
  s.setProperty('rule-interior-inset', 'inherit');
  assertEq(s.getPropertyValue('row-rule-interior-inset-start'), 'inherit', 'rule-interior-inset: inherit expands to row-rule-interior-inset-start');
  assertEq(s.getPropertyValue('row-rule-interior-inset-end'), 'inherit', 'rule-interior-inset: inherit expands to row-rule-interior-inset-end');
  assertEq(s.getPropertyValue('column-rule-interior-inset-start'), 'inherit', 'rule-interior-inset: inherit expands to column-rule-interior-inset-start');
  assertEq(s.getPropertyValue('column-rule-interior-inset-end'), 'inherit', 'rule-interior-inset: inherit expands to column-rule-interior-inset-end');
  s.removeProperty('rule-interior-inset');
  assertEq(s.getPropertyValue('row-rule-interior-inset-start'), '', 'rule-interior-inset: removeProperty clears row-rule-interior-inset-start');
  assertEq(s.getPropertyValue('row-rule-interior-inset-end'), '', 'rule-interior-inset: removeProperty clears row-rule-interior-inset-end');
  assertEq(s.getPropertyValue('column-rule-interior-inset-start'), '', 'rule-interior-inset: removeProperty clears column-rule-interior-inset-start');
  assertEq(s.getPropertyValue('column-rule-interior-inset-end'), '', 'rule-interior-inset: removeProperty clears column-rule-interior-inset-end');
}

// --- rule-inset-end (shorthand) ---
{
  const s = fresh();
  s.setProperty('rule-inset-end', 'inherit');
  assertEq(s.getPropertyValue('column-rule-edge-inset-end'), 'inherit', 'rule-inset-end: expands to column-rule-edge-inset-end');
  assertEq(s.getPropertyValue('column-rule-interior-inset-end'), 'inherit', 'rule-inset-end: expands to column-rule-interior-inset-end');
  assertEq(s.getPropertyValue('row-rule-edge-inset-end'), 'inherit', 'rule-inset-end: expands to row-rule-edge-inset-end');
  assertEq(s.getPropertyValue('row-rule-interior-inset-end'), 'inherit', 'rule-inset-end: expands to row-rule-interior-inset-end');
  s.setProperty('rule-inset-end', 'inherit');
  assertEq(s.getPropertyValue('column-rule-edge-inset-end'), 'inherit', 'rule-inset-end: inherit expands to column-rule-edge-inset-end');
  assertEq(s.getPropertyValue('column-rule-interior-inset-end'), 'inherit', 'rule-inset-end: inherit expands to column-rule-interior-inset-end');
  assertEq(s.getPropertyValue('row-rule-edge-inset-end'), 'inherit', 'rule-inset-end: inherit expands to row-rule-edge-inset-end');
  assertEq(s.getPropertyValue('row-rule-interior-inset-end'), 'inherit', 'rule-inset-end: inherit expands to row-rule-interior-inset-end');
  s.removeProperty('rule-inset-end');
  assertEq(s.getPropertyValue('column-rule-edge-inset-end'), '', 'rule-inset-end: removeProperty clears column-rule-edge-inset-end');
  assertEq(s.getPropertyValue('column-rule-interior-inset-end'), '', 'rule-inset-end: removeProperty clears column-rule-interior-inset-end');
  assertEq(s.getPropertyValue('row-rule-edge-inset-end'), '', 'rule-inset-end: removeProperty clears row-rule-edge-inset-end');
  assertEq(s.getPropertyValue('row-rule-interior-inset-end'), '', 'rule-inset-end: removeProperty clears row-rule-interior-inset-end');
}

// --- rule-inset-start (shorthand) ---
{
  const s = fresh();
  s.setProperty('rule-inset-start', 'inherit');
  assertEq(s.getPropertyValue('column-rule-edge-inset-start'), 'inherit', 'rule-inset-start: expands to column-rule-edge-inset-start');
  assertEq(s.getPropertyValue('column-rule-interior-inset-start'), 'inherit', 'rule-inset-start: expands to column-rule-interior-inset-start');
  assertEq(s.getPropertyValue('row-rule-edge-inset-start'), 'inherit', 'rule-inset-start: expands to row-rule-edge-inset-start');
  assertEq(s.getPropertyValue('row-rule-interior-inset-start'), 'inherit', 'rule-inset-start: expands to row-rule-interior-inset-start');
  s.setProperty('rule-inset-start', 'inherit');
  assertEq(s.getPropertyValue('column-rule-edge-inset-start'), 'inherit', 'rule-inset-start: inherit expands to column-rule-edge-inset-start');
  assertEq(s.getPropertyValue('column-rule-interior-inset-start'), 'inherit', 'rule-inset-start: inherit expands to column-rule-interior-inset-start');
  assertEq(s.getPropertyValue('row-rule-edge-inset-start'), 'inherit', 'rule-inset-start: inherit expands to row-rule-edge-inset-start');
  assertEq(s.getPropertyValue('row-rule-interior-inset-start'), 'inherit', 'rule-inset-start: inherit expands to row-rule-interior-inset-start');
  s.removeProperty('rule-inset-start');
  assertEq(s.getPropertyValue('column-rule-edge-inset-start'), '', 'rule-inset-start: removeProperty clears column-rule-edge-inset-start');
  assertEq(s.getPropertyValue('column-rule-interior-inset-start'), '', 'rule-inset-start: removeProperty clears column-rule-interior-inset-start');
  assertEq(s.getPropertyValue('row-rule-edge-inset-start'), '', 'rule-inset-start: removeProperty clears row-rule-edge-inset-start');
  assertEq(s.getPropertyValue('row-rule-interior-inset-start'), '', 'rule-inset-start: removeProperty clears row-rule-interior-inset-start');
}

// --- column-rule-inset (shorthand) ---
{
  const s = fresh();
  s.setProperty('column-rule-inset', 'inherit');
  assertEq(s.getPropertyValue('column-rule-edge-inset-start'), 'inherit', 'column-rule-inset: expands to column-rule-edge-inset-start');
  assertEq(s.getPropertyValue('column-rule-edge-inset-end'), 'inherit', 'column-rule-inset: expands to column-rule-edge-inset-end');
  assertEq(s.getPropertyValue('column-rule-interior-inset-start'), 'inherit', 'column-rule-inset: expands to column-rule-interior-inset-start');
  assertEq(s.getPropertyValue('column-rule-interior-inset-end'), 'inherit', 'column-rule-inset: expands to column-rule-interior-inset-end');
  s.setProperty('column-rule-inset', 'inherit');
  assertEq(s.getPropertyValue('column-rule-edge-inset-start'), 'inherit', 'column-rule-inset: inherit expands to column-rule-edge-inset-start');
  assertEq(s.getPropertyValue('column-rule-edge-inset-end'), 'inherit', 'column-rule-inset: inherit expands to column-rule-edge-inset-end');
  assertEq(s.getPropertyValue('column-rule-interior-inset-start'), 'inherit', 'column-rule-inset: inherit expands to column-rule-interior-inset-start');
  assertEq(s.getPropertyValue('column-rule-interior-inset-end'), 'inherit', 'column-rule-inset: inherit expands to column-rule-interior-inset-end');
  s.removeProperty('column-rule-inset');
  assertEq(s.getPropertyValue('column-rule-edge-inset-start'), '', 'column-rule-inset: removeProperty clears column-rule-edge-inset-start');
  assertEq(s.getPropertyValue('column-rule-edge-inset-end'), '', 'column-rule-inset: removeProperty clears column-rule-edge-inset-end');
  assertEq(s.getPropertyValue('column-rule-interior-inset-start'), '', 'column-rule-inset: removeProperty clears column-rule-interior-inset-start');
  assertEq(s.getPropertyValue('column-rule-interior-inset-end'), '', 'column-rule-inset: removeProperty clears column-rule-interior-inset-end');
}

// --- row-rule-inset (shorthand) ---
{
  const s = fresh();
  s.setProperty('row-rule-inset', 'inherit');
  assertEq(s.getPropertyValue('row-rule-edge-inset-start'), 'inherit', 'row-rule-inset: expands to row-rule-edge-inset-start');
  assertEq(s.getPropertyValue('row-rule-edge-inset-end'), 'inherit', 'row-rule-inset: expands to row-rule-edge-inset-end');
  assertEq(s.getPropertyValue('row-rule-interior-inset-start'), 'inherit', 'row-rule-inset: expands to row-rule-interior-inset-start');
  assertEq(s.getPropertyValue('row-rule-interior-inset-end'), 'inherit', 'row-rule-inset: expands to row-rule-interior-inset-end');
  s.setProperty('row-rule-inset', 'inherit');
  assertEq(s.getPropertyValue('row-rule-edge-inset-start'), 'inherit', 'row-rule-inset: inherit expands to row-rule-edge-inset-start');
  assertEq(s.getPropertyValue('row-rule-edge-inset-end'), 'inherit', 'row-rule-inset: inherit expands to row-rule-edge-inset-end');
  assertEq(s.getPropertyValue('row-rule-interior-inset-start'), 'inherit', 'row-rule-inset: inherit expands to row-rule-interior-inset-start');
  assertEq(s.getPropertyValue('row-rule-interior-inset-end'), 'inherit', 'row-rule-inset: inherit expands to row-rule-interior-inset-end');
  s.removeProperty('row-rule-inset');
  assertEq(s.getPropertyValue('row-rule-edge-inset-start'), '', 'row-rule-inset: removeProperty clears row-rule-edge-inset-start');
  assertEq(s.getPropertyValue('row-rule-edge-inset-end'), '', 'row-rule-inset: removeProperty clears row-rule-edge-inset-end');
  assertEq(s.getPropertyValue('row-rule-interior-inset-start'), '', 'row-rule-inset: removeProperty clears row-rule-interior-inset-start');
  assertEq(s.getPropertyValue('row-rule-interior-inset-end'), '', 'row-rule-inset: removeProperty clears row-rule-interior-inset-end');
}

// --- rule-inset (shorthand) ---
{
  const s = fresh();
  s.setProperty('rule-inset', 'inherit');
  assertEq(s.getPropertyValue('row-rule-edge-inset-start'), 'inherit', 'rule-inset: expands to row-rule-edge-inset-start');
  assertEq(s.getPropertyValue('row-rule-edge-inset-end'), 'inherit', 'rule-inset: expands to row-rule-edge-inset-end');
  assertEq(s.getPropertyValue('row-rule-interior-inset-start'), 'inherit', 'rule-inset: expands to row-rule-interior-inset-start');
  assertEq(s.getPropertyValue('row-rule-interior-inset-end'), 'inherit', 'rule-inset: expands to row-rule-interior-inset-end');
  assertEq(s.getPropertyValue('column-rule-edge-inset-start'), 'inherit', 'rule-inset: expands to column-rule-edge-inset-start');
  assertEq(s.getPropertyValue('column-rule-edge-inset-end'), 'inherit', 'rule-inset: expands to column-rule-edge-inset-end');
  assertEq(s.getPropertyValue('column-rule-interior-inset-start'), 'inherit', 'rule-inset: expands to column-rule-interior-inset-start');
  assertEq(s.getPropertyValue('column-rule-interior-inset-end'), 'inherit', 'rule-inset: expands to column-rule-interior-inset-end');
  s.setProperty('rule-inset', 'inherit');
  assertEq(s.getPropertyValue('row-rule-edge-inset-start'), 'inherit', 'rule-inset: inherit expands to row-rule-edge-inset-start');
  assertEq(s.getPropertyValue('row-rule-edge-inset-end'), 'inherit', 'rule-inset: inherit expands to row-rule-edge-inset-end');
  assertEq(s.getPropertyValue('row-rule-interior-inset-start'), 'inherit', 'rule-inset: inherit expands to row-rule-interior-inset-start');
  assertEq(s.getPropertyValue('row-rule-interior-inset-end'), 'inherit', 'rule-inset: inherit expands to row-rule-interior-inset-end');
  assertEq(s.getPropertyValue('column-rule-edge-inset-start'), 'inherit', 'rule-inset: inherit expands to column-rule-edge-inset-start');
  assertEq(s.getPropertyValue('column-rule-edge-inset-end'), 'inherit', 'rule-inset: inherit expands to column-rule-edge-inset-end');
  assertEq(s.getPropertyValue('column-rule-interior-inset-start'), 'inherit', 'rule-inset: inherit expands to column-rule-interior-inset-start');
  assertEq(s.getPropertyValue('column-rule-interior-inset-end'), 'inherit', 'rule-inset: inherit expands to column-rule-interior-inset-end');
  s.removeProperty('rule-inset');
  assertEq(s.getPropertyValue('row-rule-edge-inset-start'), '', 'rule-inset: removeProperty clears row-rule-edge-inset-start');
  assertEq(s.getPropertyValue('row-rule-edge-inset-end'), '', 'rule-inset: removeProperty clears row-rule-edge-inset-end');
  assertEq(s.getPropertyValue('row-rule-interior-inset-start'), '', 'rule-inset: removeProperty clears row-rule-interior-inset-start');
  assertEq(s.getPropertyValue('row-rule-interior-inset-end'), '', 'rule-inset: removeProperty clears row-rule-interior-inset-end');
  assertEq(s.getPropertyValue('column-rule-edge-inset-start'), '', 'rule-inset: removeProperty clears column-rule-edge-inset-start');
  assertEq(s.getPropertyValue('column-rule-edge-inset-end'), '', 'rule-inset: removeProperty clears column-rule-edge-inset-end');
  assertEq(s.getPropertyValue('column-rule-interior-inset-start'), '', 'rule-inset: removeProperty clears column-rule-interior-inset-start');
  assertEq(s.getPropertyValue('column-rule-interior-inset-end'), '', 'rule-inset: removeProperty clears column-rule-interior-inset-end');
}

// --- rule-width (shorthand) ---
{
  const s = fresh();
  s.setProperty('rule-width', 'inherit');
  assertEq(s.getPropertyValue('column-rule-width'), 'inherit', 'rule-width: expands to column-rule-width');
  assertEq(s.getPropertyValue('row-rule-width'), 'inherit', 'rule-width: expands to row-rule-width');
  s.setProperty('rule-width', 'inherit');
  assertEq(s.getPropertyValue('column-rule-width'), 'inherit', 'rule-width: inherit expands to column-rule-width');
  assertEq(s.getPropertyValue('row-rule-width'), 'inherit', 'rule-width: inherit expands to row-rule-width');
  s.removeProperty('rule-width');
  assertEq(s.getPropertyValue('column-rule-width'), '', 'rule-width: removeProperty clears column-rule-width');
  assertEq(s.getPropertyValue('row-rule-width'), '', 'rule-width: removeProperty clears row-rule-width');
}

// --- rule-style (shorthand) ---
{
  const s = fresh();
  s.setProperty('rule-style', 'inherit');
  assertEq(s.getPropertyValue('column-rule-style'), 'inherit', 'rule-style: expands to column-rule-style');
  assertEq(s.getPropertyValue('row-rule-style'), 'inherit', 'rule-style: expands to row-rule-style');
  s.setProperty('rule-style', 'inherit');
  assertEq(s.getPropertyValue('column-rule-style'), 'inherit', 'rule-style: inherit expands to column-rule-style');
  assertEq(s.getPropertyValue('row-rule-style'), 'inherit', 'rule-style: inherit expands to row-rule-style');
  s.removeProperty('rule-style');
  assertEq(s.getPropertyValue('column-rule-style'), '', 'rule-style: removeProperty clears column-rule-style');
  assertEq(s.getPropertyValue('row-rule-style'), '', 'rule-style: removeProperty clears row-rule-style');
}

// --- rule-visibility-items (shorthand) ---
{
  const s = fresh();
  s.setProperty('rule-visibility-items', 'inherit');
  assertEq(s.getPropertyValue('column-rule-visibility-items'), 'inherit', 'rule-visibility-items: expands to column-rule-visibility-items');
  assertEq(s.getPropertyValue('row-rule-visibility-items'), 'inherit', 'rule-visibility-items: expands to row-rule-visibility-items');
  s.setProperty('rule-visibility-items', 'inherit');
  assertEq(s.getPropertyValue('column-rule-visibility-items'), 'inherit', 'rule-visibility-items: inherit expands to column-rule-visibility-items');
  assertEq(s.getPropertyValue('row-rule-visibility-items'), 'inherit', 'rule-visibility-items: inherit expands to row-rule-visibility-items');
  s.removeProperty('rule-visibility-items');
  assertEq(s.getPropertyValue('column-rule-visibility-items'), '', 'rule-visibility-items: removeProperty clears column-rule-visibility-items');
  assertEq(s.getPropertyValue('row-rule-visibility-items'), '', 'rule-visibility-items: removeProperty clears row-rule-visibility-items');
}

// --- scroll-margin (shorthand) ---
{
  const s = fresh();
  s.setProperty('scroll-margin', '10px');
  assertEq(s.getPropertyValue('scroll-margin-top'), '10px', 'scroll-margin: expands to scroll-margin-top');
  assertEq(s.getPropertyValue('scroll-margin-right'), '10px', 'scroll-margin: expands to scroll-margin-right');
  assertEq(s.getPropertyValue('scroll-margin-bottom'), '10px', 'scroll-margin: expands to scroll-margin-bottom');
  assertEq(s.getPropertyValue('scroll-margin-left'), '10px', 'scroll-margin: expands to scroll-margin-left');
  s.setProperty('scroll-margin', 'inherit');
  assertEq(s.getPropertyValue('scroll-margin-top'), 'inherit', 'scroll-margin: inherit expands to scroll-margin-top');
  assertEq(s.getPropertyValue('scroll-margin-right'), 'inherit', 'scroll-margin: inherit expands to scroll-margin-right');
  assertEq(s.getPropertyValue('scroll-margin-bottom'), 'inherit', 'scroll-margin: inherit expands to scroll-margin-bottom');
  assertEq(s.getPropertyValue('scroll-margin-left'), 'inherit', 'scroll-margin: inherit expands to scroll-margin-left');
  s.removeProperty('scroll-margin');
  assertEq(s.getPropertyValue('scroll-margin-top'), '', 'scroll-margin: removeProperty clears scroll-margin-top');
  assertEq(s.getPropertyValue('scroll-margin-right'), '', 'scroll-margin: removeProperty clears scroll-margin-right');
  assertEq(s.getPropertyValue('scroll-margin-bottom'), '', 'scroll-margin: removeProperty clears scroll-margin-bottom');
  assertEq(s.getPropertyValue('scroll-margin-left'), '', 'scroll-margin: removeProperty clears scroll-margin-left');
}

// --- scroll-margin-block (shorthand) ---
{
  const s = fresh();
  s.setProperty('scroll-margin-block', '5px');
  assertEq(s.getPropertyValue('scroll-margin-block-start'), '5px', 'scroll-margin-block: expands to scroll-margin-block-start');
  assertEq(s.getPropertyValue('scroll-margin-block-end'), '5px', 'scroll-margin-block: expands to scroll-margin-block-end');
  s.setProperty('scroll-margin-block', 'inherit');
  assertEq(s.getPropertyValue('scroll-margin-block-start'), 'inherit', 'scroll-margin-block: inherit expands to scroll-margin-block-start');
  assertEq(s.getPropertyValue('scroll-margin-block-end'), 'inherit', 'scroll-margin-block: inherit expands to scroll-margin-block-end');
  s.removeProperty('scroll-margin-block');
  assertEq(s.getPropertyValue('scroll-margin-block-start'), '', 'scroll-margin-block: removeProperty clears scroll-margin-block-start');
  assertEq(s.getPropertyValue('scroll-margin-block-end'), '', 'scroll-margin-block: removeProperty clears scroll-margin-block-end');
}

// --- scroll-margin-inline (shorthand) ---
{
  const s = fresh();
  s.setProperty('scroll-margin-inline', '5px');
  assertEq(s.getPropertyValue('scroll-margin-inline-start'), '5px', 'scroll-margin-inline: expands to scroll-margin-inline-start');
  assertEq(s.getPropertyValue('scroll-margin-inline-end'), '5px', 'scroll-margin-inline: expands to scroll-margin-inline-end');
  s.setProperty('scroll-margin-inline', 'inherit');
  assertEq(s.getPropertyValue('scroll-margin-inline-start'), 'inherit', 'scroll-margin-inline: inherit expands to scroll-margin-inline-start');
  assertEq(s.getPropertyValue('scroll-margin-inline-end'), 'inherit', 'scroll-margin-inline: inherit expands to scroll-margin-inline-end');
  s.removeProperty('scroll-margin-inline');
  assertEq(s.getPropertyValue('scroll-margin-inline-start'), '', 'scroll-margin-inline: removeProperty clears scroll-margin-inline-start');
  assertEq(s.getPropertyValue('scroll-margin-inline-end'), '', 'scroll-margin-inline: removeProperty clears scroll-margin-inline-end');
}

// --- scroll-padding (shorthand) ---
{
  const s = fresh();
  s.setProperty('scroll-padding', '10px');
  assertEq(s.getPropertyValue('scroll-padding-top'), '10px', 'scroll-padding: expands to scroll-padding-top');
  assertEq(s.getPropertyValue('scroll-padding-right'), '10px', 'scroll-padding: expands to scroll-padding-right');
  assertEq(s.getPropertyValue('scroll-padding-bottom'), '10px', 'scroll-padding: expands to scroll-padding-bottom');
  assertEq(s.getPropertyValue('scroll-padding-left'), '10px', 'scroll-padding: expands to scroll-padding-left');
  s.setProperty('scroll-padding', 'inherit');
  assertEq(s.getPropertyValue('scroll-padding-top'), 'inherit', 'scroll-padding: inherit expands to scroll-padding-top');
  assertEq(s.getPropertyValue('scroll-padding-right'), 'inherit', 'scroll-padding: inherit expands to scroll-padding-right');
  assertEq(s.getPropertyValue('scroll-padding-bottom'), 'inherit', 'scroll-padding: inherit expands to scroll-padding-bottom');
  assertEq(s.getPropertyValue('scroll-padding-left'), 'inherit', 'scroll-padding: inherit expands to scroll-padding-left');
  s.removeProperty('scroll-padding');
  assertEq(s.getPropertyValue('scroll-padding-top'), '', 'scroll-padding: removeProperty clears scroll-padding-top');
  assertEq(s.getPropertyValue('scroll-padding-right'), '', 'scroll-padding: removeProperty clears scroll-padding-right');
  assertEq(s.getPropertyValue('scroll-padding-bottom'), '', 'scroll-padding: removeProperty clears scroll-padding-bottom');
  assertEq(s.getPropertyValue('scroll-padding-left'), '', 'scroll-padding: removeProperty clears scroll-padding-left');
}

// --- scroll-padding-block (shorthand) ---
{
  const s = fresh();
  s.setProperty('scroll-padding-block', '5px');
  assertEq(s.getPropertyValue('scroll-padding-block-start'), '5px', 'scroll-padding-block: expands to scroll-padding-block-start');
  assertEq(s.getPropertyValue('scroll-padding-block-end'), '5px', 'scroll-padding-block: expands to scroll-padding-block-end');
  s.setProperty('scroll-padding-block', 'inherit');
  assertEq(s.getPropertyValue('scroll-padding-block-start'), 'inherit', 'scroll-padding-block: inherit expands to scroll-padding-block-start');
  assertEq(s.getPropertyValue('scroll-padding-block-end'), 'inherit', 'scroll-padding-block: inherit expands to scroll-padding-block-end');
  s.removeProperty('scroll-padding-block');
  assertEq(s.getPropertyValue('scroll-padding-block-start'), '', 'scroll-padding-block: removeProperty clears scroll-padding-block-start');
  assertEq(s.getPropertyValue('scroll-padding-block-end'), '', 'scroll-padding-block: removeProperty clears scroll-padding-block-end');
}

// --- scroll-padding-inline (shorthand) ---
{
  const s = fresh();
  s.setProperty('scroll-padding-inline', '5px');
  assertEq(s.getPropertyValue('scroll-padding-inline-start'), '5px', 'scroll-padding-inline: expands to scroll-padding-inline-start');
  assertEq(s.getPropertyValue('scroll-padding-inline-end'), '5px', 'scroll-padding-inline: expands to scroll-padding-inline-end');
  s.setProperty('scroll-padding-inline', 'inherit');
  assertEq(s.getPropertyValue('scroll-padding-inline-start'), 'inherit', 'scroll-padding-inline: inherit expands to scroll-padding-inline-start');
  assertEq(s.getPropertyValue('scroll-padding-inline-end'), 'inherit', 'scroll-padding-inline: inherit expands to scroll-padding-inline-end');
  s.removeProperty('scroll-padding-inline');
  assertEq(s.getPropertyValue('scroll-padding-inline-start'), '', 'scroll-padding-inline: removeProperty clears scroll-padding-inline-start');
  assertEq(s.getPropertyValue('scroll-padding-inline-end'), '', 'scroll-padding-inline: removeProperty clears scroll-padding-inline-end');
}

// --- scroll-timeline (shorthand) ---
{
  const s = fresh();
  s.setProperty('scroll-timeline', 'inherit');
  assertEq(s.getPropertyValue('scroll-timeline-name'), 'inherit', 'scroll-timeline: expands to scroll-timeline-name');
  assertEq(s.getPropertyValue('scroll-timeline-axis'), 'inherit', 'scroll-timeline: expands to scroll-timeline-axis');
  s.setProperty('scroll-timeline', 'inherit');
  assertEq(s.getPropertyValue('scroll-timeline-name'), 'inherit', 'scroll-timeline: inherit expands to scroll-timeline-name');
  assertEq(s.getPropertyValue('scroll-timeline-axis'), 'inherit', 'scroll-timeline: inherit expands to scroll-timeline-axis');
  s.removeProperty('scroll-timeline');
  assertEq(s.getPropertyValue('scroll-timeline-name'), '', 'scroll-timeline: removeProperty clears scroll-timeline-name');
  assertEq(s.getPropertyValue('scroll-timeline-axis'), '', 'scroll-timeline: removeProperty clears scroll-timeline-axis');
}

// --- text-decoration (shorthand) ---
{
  const s = fresh();
  s.setProperty('text-decoration', 'inherit');
  assertEq(s.getPropertyValue('text-decoration-line'), 'inherit', 'text-decoration: expands to text-decoration-line');
  assertEq(s.getPropertyValue('text-decoration-thickness'), 'inherit', 'text-decoration: expands to text-decoration-thickness');
  assertEq(s.getPropertyValue('text-decoration-style'), 'inherit', 'text-decoration: expands to text-decoration-style');
  assertEq(s.getPropertyValue('text-decoration-color'), 'inherit', 'text-decoration: expands to text-decoration-color');
  s.setProperty('text-decoration', 'inherit');
  assertEq(s.getPropertyValue('text-decoration-line'), 'inherit', 'text-decoration: inherit expands to text-decoration-line');
  assertEq(s.getPropertyValue('text-decoration-thickness'), 'inherit', 'text-decoration: inherit expands to text-decoration-thickness');
  assertEq(s.getPropertyValue('text-decoration-style'), 'inherit', 'text-decoration: inherit expands to text-decoration-style');
  assertEq(s.getPropertyValue('text-decoration-color'), 'inherit', 'text-decoration: inherit expands to text-decoration-color');
  s.removeProperty('text-decoration');
  assertEq(s.getPropertyValue('text-decoration-line'), '', 'text-decoration: removeProperty clears text-decoration-line');
  assertEq(s.getPropertyValue('text-decoration-thickness'), '', 'text-decoration: removeProperty clears text-decoration-thickness');
  assertEq(s.getPropertyValue('text-decoration-style'), '', 'text-decoration: removeProperty clears text-decoration-style');
  assertEq(s.getPropertyValue('text-decoration-color'), '', 'text-decoration: removeProperty clears text-decoration-color');
}

// --- transition (shorthand) ---
{
  const s = fresh();
  s.setProperty('transition', 'inherit');
  assertEq(s.getPropertyValue('transition-property'), 'inherit', 'transition: expands to transition-property');
  assertEq(s.getPropertyValue('transition-duration'), 'inherit', 'transition: expands to transition-duration');
  assertEq(s.getPropertyValue('transition-timing-function'), 'inherit', 'transition: expands to transition-timing-function');
  assertEq(s.getPropertyValue('transition-delay'), 'inherit', 'transition: expands to transition-delay');
  assertEq(s.getPropertyValue('transition-behavior'), 'inherit', 'transition: expands to transition-behavior');
  s.setProperty('transition', 'inherit');
  assertEq(s.getPropertyValue('transition-property'), 'inherit', 'transition: inherit expands to transition-property');
  assertEq(s.getPropertyValue('transition-duration'), 'inherit', 'transition: inherit expands to transition-duration');
  assertEq(s.getPropertyValue('transition-timing-function'), 'inherit', 'transition: inherit expands to transition-timing-function');
  assertEq(s.getPropertyValue('transition-delay'), 'inherit', 'transition: inherit expands to transition-delay');
  assertEq(s.getPropertyValue('transition-behavior'), 'inherit', 'transition: inherit expands to transition-behavior');
  s.removeProperty('transition');
  assertEq(s.getPropertyValue('transition-property'), '', 'transition: removeProperty clears transition-property');
  assertEq(s.getPropertyValue('transition-duration'), '', 'transition: removeProperty clears transition-duration');
  assertEq(s.getPropertyValue('transition-timing-function'), '', 'transition: removeProperty clears transition-timing-function');
  assertEq(s.getPropertyValue('transition-delay'), '', 'transition: removeProperty clears transition-delay');
  assertEq(s.getPropertyValue('transition-behavior'), '', 'transition: removeProperty clears transition-behavior');
}

// --- view-timeline (shorthand) ---
{
  const s = fresh();
  s.setProperty('view-timeline', 'inherit');
  assertEq(s.getPropertyValue('view-timeline-name'), 'inherit', 'view-timeline: expands to view-timeline-name');
  assertEq(s.getPropertyValue('view-timeline-axis'), 'inherit', 'view-timeline: expands to view-timeline-axis');
  assertEq(s.getPropertyValue('view-timeline-inset'), 'inherit', 'view-timeline: expands to view-timeline-inset');
  s.setProperty('view-timeline', 'inherit');
  assertEq(s.getPropertyValue('view-timeline-name'), 'inherit', 'view-timeline: inherit expands to view-timeline-name');
  assertEq(s.getPropertyValue('view-timeline-axis'), 'inherit', 'view-timeline: inherit expands to view-timeline-axis');
  assertEq(s.getPropertyValue('view-timeline-inset'), 'inherit', 'view-timeline: inherit expands to view-timeline-inset');
  s.removeProperty('view-timeline');
  assertEq(s.getPropertyValue('view-timeline-name'), '', 'view-timeline: removeProperty clears view-timeline-name');
  assertEq(s.getPropertyValue('view-timeline-axis'), '', 'view-timeline: removeProperty clears view-timeline-axis');
  assertEq(s.getPropertyValue('view-timeline-inset'), '', 'view-timeline: removeProperty clears view-timeline-inset');
}

// --- -webkit-column-break-after (shorthand) ---
{
  const s = fresh();
  s.setProperty('-webkit-column-break-after', 'inherit');
  assertEq(s.getPropertyValue('break-after'), 'inherit', '-webkit-column-break-after: expands to break-after');
  s.setProperty('-webkit-column-break-after', 'inherit');
  assertEq(s.getPropertyValue('break-after'), 'inherit', '-webkit-column-break-after: inherit expands to break-after');
  s.removeProperty('-webkit-column-break-after');
  assertEq(s.getPropertyValue('break-after'), '', '-webkit-column-break-after: removeProperty clears break-after');
}

// --- -webkit-column-break-before (shorthand) ---
{
  const s = fresh();
  s.setProperty('-webkit-column-break-before', 'inherit');
  assertEq(s.getPropertyValue('break-before'), 'inherit', '-webkit-column-break-before: expands to break-before');
  s.setProperty('-webkit-column-break-before', 'inherit');
  assertEq(s.getPropertyValue('break-before'), 'inherit', '-webkit-column-break-before: inherit expands to break-before');
  s.removeProperty('-webkit-column-break-before');
  assertEq(s.getPropertyValue('break-before'), '', '-webkit-column-break-before: removeProperty clears break-before');
}

// --- -webkit-column-break-inside (shorthand) ---
{
  const s = fresh();
  s.setProperty('-webkit-column-break-inside', 'inherit');
  assertEq(s.getPropertyValue('break-inside'), 'inherit', '-webkit-column-break-inside: expands to break-inside');
  s.setProperty('-webkit-column-break-inside', 'inherit');
  assertEq(s.getPropertyValue('break-inside'), 'inherit', '-webkit-column-break-inside: inherit expands to break-inside');
  s.removeProperty('-webkit-column-break-inside');
  assertEq(s.getPropertyValue('break-inside'), '', '-webkit-column-break-inside: removeProperty clears break-inside');
}

// --- column-rule (shorthand) ---
{
  const s = fresh();
  s.setProperty('column-rule', 'inherit');
  assertEq(s.getPropertyValue('column-rule-width'), 'inherit', 'column-rule: expands to column-rule-width');
  assertEq(s.getPropertyValue('column-rule-style'), 'inherit', 'column-rule: expands to column-rule-style');
  assertEq(s.getPropertyValue('column-rule-color'), 'inherit', 'column-rule: expands to column-rule-color');
  s.setProperty('column-rule', 'inherit');
  assertEq(s.getPropertyValue('column-rule-width'), 'inherit', 'column-rule: inherit expands to column-rule-width');
  assertEq(s.getPropertyValue('column-rule-style'), 'inherit', 'column-rule: inherit expands to column-rule-style');
  assertEq(s.getPropertyValue('column-rule-color'), 'inherit', 'column-rule: inherit expands to column-rule-color');
  s.removeProperty('column-rule');
  assertEq(s.getPropertyValue('column-rule-width'), '', 'column-rule: removeProperty clears column-rule-width');
  assertEq(s.getPropertyValue('column-rule-style'), '', 'column-rule: removeProperty clears column-rule-style');
  assertEq(s.getPropertyValue('column-rule-color'), '', 'column-rule: removeProperty clears column-rule-color');
}

// --- row-rule (shorthand) ---
{
  const s = fresh();
  s.setProperty('row-rule', 'inherit');
  assertEq(s.getPropertyValue('row-rule-width'), 'inherit', 'row-rule: expands to row-rule-width');
  assertEq(s.getPropertyValue('row-rule-style'), 'inherit', 'row-rule: expands to row-rule-style');
  assertEq(s.getPropertyValue('row-rule-color'), 'inherit', 'row-rule: expands to row-rule-color');
  s.setProperty('row-rule', 'inherit');
  assertEq(s.getPropertyValue('row-rule-width'), 'inherit', 'row-rule: inherit expands to row-rule-width');
  assertEq(s.getPropertyValue('row-rule-style'), 'inherit', 'row-rule: inherit expands to row-rule-style');
  assertEq(s.getPropertyValue('row-rule-color'), 'inherit', 'row-rule: inherit expands to row-rule-color');
  s.removeProperty('row-rule');
  assertEq(s.getPropertyValue('row-rule-width'), '', 'row-rule: removeProperty clears row-rule-width');
  assertEq(s.getPropertyValue('row-rule-style'), '', 'row-rule: removeProperty clears row-rule-style');
  assertEq(s.getPropertyValue('row-rule-color'), '', 'row-rule: removeProperty clears row-rule-color');
}

// --- columns (shorthand) ---
{
  const s = fresh();
  s.setProperty('columns', 'auto auto');
  assertEq(s.getPropertyValue('column-width'), 'auto', 'columns: expands to column-width');
  assertEq(s.getPropertyValue('column-count'), 'auto', 'columns: expands to column-count');
  s.setProperty('columns', 'inherit');
  assertEq(s.getPropertyValue('column-width'), 'inherit', 'columns: inherit expands to column-width');
  assertEq(s.getPropertyValue('column-count'), 'inherit', 'columns: inherit expands to column-count');
  assertEq(s.getPropertyValue('column-height'), 'inherit', 'columns: inherit expands to column-height');
  assertEq(s.getPropertyValue('column-wrap'), 'inherit', 'columns: inherit expands to column-wrap');
  s.removeProperty('columns');
  assertEq(s.getPropertyValue('column-width'), '', 'columns: removeProperty clears column-width');
  assertEq(s.getPropertyValue('column-count'), '', 'columns: removeProperty clears column-count');
  assertEq(s.getPropertyValue('column-height'), '', 'columns: removeProperty clears column-height');
  assertEq(s.getPropertyValue('column-wrap'), '', 'columns: removeProperty clears column-wrap');
}

// --- mask (shorthand) ---
{
  const s = fresh();
  s.setProperty('mask', 'inherit');
  assertEq(s.getPropertyValue('mask-image'), 'inherit', 'mask: expands to mask-image');
  assertEq(s.getPropertyValue('-webkit-mask-position-x'), 'inherit', 'mask: expands to -webkit-mask-position-x');
  assertEq(s.getPropertyValue('-webkit-mask-position-y'), 'inherit', 'mask: expands to -webkit-mask-position-y');
  assertEq(s.getPropertyValue('mask-size'), 'inherit', 'mask: expands to mask-size');
  assertEq(s.getPropertyValue('mask-repeat'), 'inherit', 'mask: expands to mask-repeat');
  assertEq(s.getPropertyValue('mask-origin'), 'inherit', 'mask: expands to mask-origin');
  assertEq(s.getPropertyValue('mask-clip'), 'inherit', 'mask: expands to mask-clip');
  assertEq(s.getPropertyValue('mask-composite'), 'inherit', 'mask: expands to mask-composite');
  assertEq(s.getPropertyValue('mask-mode'), 'inherit', 'mask: expands to mask-mode');
  s.setProperty('mask', 'inherit');
  assertEq(s.getPropertyValue('mask-image'), 'inherit', 'mask: inherit expands to mask-image');
  assertEq(s.getPropertyValue('-webkit-mask-position-x'), 'inherit', 'mask: inherit expands to -webkit-mask-position-x');
  assertEq(s.getPropertyValue('-webkit-mask-position-y'), 'inherit', 'mask: inherit expands to -webkit-mask-position-y');
  assertEq(s.getPropertyValue('mask-size'), 'inherit', 'mask: inherit expands to mask-size');
  assertEq(s.getPropertyValue('mask-repeat'), 'inherit', 'mask: inherit expands to mask-repeat');
  assertEq(s.getPropertyValue('mask-origin'), 'inherit', 'mask: inherit expands to mask-origin');
  assertEq(s.getPropertyValue('mask-clip'), 'inherit', 'mask: inherit expands to mask-clip');
  assertEq(s.getPropertyValue('mask-composite'), 'inherit', 'mask: inherit expands to mask-composite');
  assertEq(s.getPropertyValue('mask-mode'), 'inherit', 'mask: inherit expands to mask-mode');
  s.removeProperty('mask');
  assertEq(s.getPropertyValue('mask-image'), '', 'mask: removeProperty clears mask-image');
  assertEq(s.getPropertyValue('-webkit-mask-position-x'), '', 'mask: removeProperty clears -webkit-mask-position-x');
  assertEq(s.getPropertyValue('-webkit-mask-position-y'), '', 'mask: removeProperty clears -webkit-mask-position-y');
  assertEq(s.getPropertyValue('mask-size'), '', 'mask: removeProperty clears mask-size');
  assertEq(s.getPropertyValue('mask-repeat'), '', 'mask: removeProperty clears mask-repeat');
  assertEq(s.getPropertyValue('mask-origin'), '', 'mask: removeProperty clears mask-origin');
  assertEq(s.getPropertyValue('mask-clip'), '', 'mask: removeProperty clears mask-clip');
  assertEq(s.getPropertyValue('mask-composite'), '', 'mask: removeProperty clears mask-composite');
  assertEq(s.getPropertyValue('mask-mode'), '', 'mask: removeProperty clears mask-mode');
}

// --- -webkit-mask-box-image (shorthand) ---
{
  const s = fresh();
  s.setProperty('-webkit-mask-box-image', 'inherit');
  assertEq(s.getPropertyValue('-webkit-mask-box-image-source'), 'inherit', '-webkit-mask-box-image: expands to -webkit-mask-box-image-source');
  assertEq(s.getPropertyValue('-webkit-mask-box-image-slice'), 'inherit', '-webkit-mask-box-image: expands to -webkit-mask-box-image-slice');
  assertEq(s.getPropertyValue('-webkit-mask-box-image-width'), 'inherit', '-webkit-mask-box-image: expands to -webkit-mask-box-image-width');
  assertEq(s.getPropertyValue('-webkit-mask-box-image-outset'), 'inherit', '-webkit-mask-box-image: expands to -webkit-mask-box-image-outset');
  assertEq(s.getPropertyValue('-webkit-mask-box-image-repeat'), 'inherit', '-webkit-mask-box-image: expands to -webkit-mask-box-image-repeat');
  s.setProperty('-webkit-mask-box-image', 'inherit');
  assertEq(s.getPropertyValue('-webkit-mask-box-image-source'), 'inherit', '-webkit-mask-box-image: inherit expands to -webkit-mask-box-image-source');
  assertEq(s.getPropertyValue('-webkit-mask-box-image-slice'), 'inherit', '-webkit-mask-box-image: inherit expands to -webkit-mask-box-image-slice');
  assertEq(s.getPropertyValue('-webkit-mask-box-image-width'), 'inherit', '-webkit-mask-box-image: inherit expands to -webkit-mask-box-image-width');
  assertEq(s.getPropertyValue('-webkit-mask-box-image-outset'), 'inherit', '-webkit-mask-box-image: inherit expands to -webkit-mask-box-image-outset');
  assertEq(s.getPropertyValue('-webkit-mask-box-image-repeat'), 'inherit', '-webkit-mask-box-image: inherit expands to -webkit-mask-box-image-repeat');
  s.removeProperty('-webkit-mask-box-image');
  assertEq(s.getPropertyValue('-webkit-mask-box-image-source'), '', '-webkit-mask-box-image: removeProperty clears -webkit-mask-box-image-source');
  assertEq(s.getPropertyValue('-webkit-mask-box-image-slice'), '', '-webkit-mask-box-image: removeProperty clears -webkit-mask-box-image-slice');
  assertEq(s.getPropertyValue('-webkit-mask-box-image-width'), '', '-webkit-mask-box-image: removeProperty clears -webkit-mask-box-image-width');
  assertEq(s.getPropertyValue('-webkit-mask-box-image-outset'), '', '-webkit-mask-box-image: removeProperty clears -webkit-mask-box-image-outset');
  assertEq(s.getPropertyValue('-webkit-mask-box-image-repeat'), '', '-webkit-mask-box-image: removeProperty clears -webkit-mask-box-image-repeat');
}

// --- mask-position (shorthand) ---
{
  const s = fresh();
  s.setProperty('mask-position', 'inherit');
  assertEq(s.getPropertyValue('-webkit-mask-position-x'), 'inherit', 'mask-position: expands to -webkit-mask-position-x');
  assertEq(s.getPropertyValue('-webkit-mask-position-y'), 'inherit', 'mask-position: expands to -webkit-mask-position-y');
  s.setProperty('mask-position', 'inherit');
  assertEq(s.getPropertyValue('-webkit-mask-position-x'), 'inherit', 'mask-position: inherit expands to -webkit-mask-position-x');
  assertEq(s.getPropertyValue('-webkit-mask-position-y'), 'inherit', 'mask-position: inherit expands to -webkit-mask-position-y');
  s.removeProperty('mask-position');
  assertEq(s.getPropertyValue('-webkit-mask-position-x'), '', 'mask-position: removeProperty clears -webkit-mask-position-x');
  assertEq(s.getPropertyValue('-webkit-mask-position-y'), '', 'mask-position: removeProperty clears -webkit-mask-position-y');
}

// --- text-emphasis (shorthand) ---
{
  const s = fresh();
  s.setProperty('text-emphasis', 'inherit');
  assertEq(s.getPropertyValue('text-emphasis-style'), 'inherit', 'text-emphasis: expands to text-emphasis-style');
  assertEq(s.getPropertyValue('text-emphasis-color'), 'inherit', 'text-emphasis: expands to text-emphasis-color');
  s.setProperty('text-emphasis', 'inherit');
  assertEq(s.getPropertyValue('text-emphasis-style'), 'inherit', 'text-emphasis: inherit expands to text-emphasis-style');
  assertEq(s.getPropertyValue('text-emphasis-color'), 'inherit', 'text-emphasis: inherit expands to text-emphasis-color');
  s.removeProperty('text-emphasis');
  assertEq(s.getPropertyValue('text-emphasis-style'), '', 'text-emphasis: removeProperty clears text-emphasis-style');
  assertEq(s.getPropertyValue('text-emphasis-color'), '', 'text-emphasis: removeProperty clears text-emphasis-color');
}

// --- timeline-trigger (shorthand) ---
{
  const s = fresh();
  s.setProperty('timeline-trigger', 'inherit');
  assertEq(s.getPropertyValue('timeline-trigger-name'), 'inherit', 'timeline-trigger: expands to timeline-trigger-name');
  assertEq(s.getPropertyValue('timeline-trigger-source'), 'inherit', 'timeline-trigger: expands to timeline-trigger-source');
  assertEq(s.getPropertyValue('timeline-trigger-activation-range-start'), 'inherit', 'timeline-trigger: expands to timeline-trigger-activation-range-start');
  assertEq(s.getPropertyValue('timeline-trigger-activation-range-end'), 'inherit', 'timeline-trigger: expands to timeline-trigger-activation-range-end');
  assertEq(s.getPropertyValue('timeline-trigger-active-range-start'), 'inherit', 'timeline-trigger: expands to timeline-trigger-active-range-start');
  assertEq(s.getPropertyValue('timeline-trigger-active-range-end'), 'inherit', 'timeline-trigger: expands to timeline-trigger-active-range-end');
  s.setProperty('timeline-trigger', 'inherit');
  assertEq(s.getPropertyValue('timeline-trigger-name'), 'inherit', 'timeline-trigger: inherit expands to timeline-trigger-name');
  assertEq(s.getPropertyValue('timeline-trigger-source'), 'inherit', 'timeline-trigger: inherit expands to timeline-trigger-source');
  assertEq(s.getPropertyValue('timeline-trigger-activation-range-start'), 'inherit', 'timeline-trigger: inherit expands to timeline-trigger-activation-range-start');
  assertEq(s.getPropertyValue('timeline-trigger-activation-range-end'), 'inherit', 'timeline-trigger: inherit expands to timeline-trigger-activation-range-end');
  assertEq(s.getPropertyValue('timeline-trigger-active-range-start'), 'inherit', 'timeline-trigger: inherit expands to timeline-trigger-active-range-start');
  assertEq(s.getPropertyValue('timeline-trigger-active-range-end'), 'inherit', 'timeline-trigger: inherit expands to timeline-trigger-active-range-end');
  s.removeProperty('timeline-trigger');
  assertEq(s.getPropertyValue('timeline-trigger-name'), '', 'timeline-trigger: removeProperty clears timeline-trigger-name');
  assertEq(s.getPropertyValue('timeline-trigger-source'), '', 'timeline-trigger: removeProperty clears timeline-trigger-source');
  assertEq(s.getPropertyValue('timeline-trigger-activation-range-start'), '', 'timeline-trigger: removeProperty clears timeline-trigger-activation-range-start');
  assertEq(s.getPropertyValue('timeline-trigger-activation-range-end'), '', 'timeline-trigger: removeProperty clears timeline-trigger-activation-range-end');
  assertEq(s.getPropertyValue('timeline-trigger-active-range-start'), '', 'timeline-trigger: removeProperty clears timeline-trigger-active-range-start');
  assertEq(s.getPropertyValue('timeline-trigger-active-range-end'), '', 'timeline-trigger: removeProperty clears timeline-trigger-active-range-end');
}

// --- timeline-trigger-activation-range (shorthand) ---
{
  const s = fresh();
  s.setProperty('timeline-trigger-activation-range', 'inherit');
  assertEq(s.getPropertyValue('timeline-trigger-activation-range-start'), 'inherit', 'timeline-trigger-activation-range: expands to timeline-trigger-activation-range-start');
  assertEq(s.getPropertyValue('timeline-trigger-activation-range-end'), 'inherit', 'timeline-trigger-activation-range: expands to timeline-trigger-activation-range-end');
  s.setProperty('timeline-trigger-activation-range', 'inherit');
  assertEq(s.getPropertyValue('timeline-trigger-activation-range-start'), 'inherit', 'timeline-trigger-activation-range: inherit expands to timeline-trigger-activation-range-start');
  assertEq(s.getPropertyValue('timeline-trigger-activation-range-end'), 'inherit', 'timeline-trigger-activation-range: inherit expands to timeline-trigger-activation-range-end');
  s.removeProperty('timeline-trigger-activation-range');
  assertEq(s.getPropertyValue('timeline-trigger-activation-range-start'), '', 'timeline-trigger-activation-range: removeProperty clears timeline-trigger-activation-range-start');
  assertEq(s.getPropertyValue('timeline-trigger-activation-range-end'), '', 'timeline-trigger-activation-range: removeProperty clears timeline-trigger-activation-range-end');
}

// --- timeline-trigger-active-range (shorthand) ---
{
  const s = fresh();
  s.setProperty('timeline-trigger-active-range', 'inherit');
  assertEq(s.getPropertyValue('timeline-trigger-active-range-start'), 'inherit', 'timeline-trigger-active-range: expands to timeline-trigger-active-range-start');
  assertEq(s.getPropertyValue('timeline-trigger-active-range-end'), 'inherit', 'timeline-trigger-active-range: expands to timeline-trigger-active-range-end');
  s.setProperty('timeline-trigger-active-range', 'inherit');
  assertEq(s.getPropertyValue('timeline-trigger-active-range-start'), 'inherit', 'timeline-trigger-active-range: inherit expands to timeline-trigger-active-range-start');
  assertEq(s.getPropertyValue('timeline-trigger-active-range-end'), 'inherit', 'timeline-trigger-active-range: inherit expands to timeline-trigger-active-range-end');
  s.removeProperty('timeline-trigger-active-range');
  assertEq(s.getPropertyValue('timeline-trigger-active-range-start'), '', 'timeline-trigger-active-range: removeProperty clears timeline-trigger-active-range-start');
  assertEq(s.getPropertyValue('timeline-trigger-active-range-end'), '', 'timeline-trigger-active-range: removeProperty clears timeline-trigger-active-range-end');
}

// --- -webkit-text-stroke (shorthand) ---
{
  const s = fresh();
  s.setProperty('-webkit-text-stroke', 'inherit');
  assertEq(s.getPropertyValue('-webkit-text-stroke-width'), 'inherit', '-webkit-text-stroke: expands to -webkit-text-stroke-width');
  assertEq(s.getPropertyValue('-webkit-text-stroke-color'), 'inherit', '-webkit-text-stroke: expands to -webkit-text-stroke-color');
  s.setProperty('-webkit-text-stroke', 'inherit');
  assertEq(s.getPropertyValue('-webkit-text-stroke-width'), 'inherit', '-webkit-text-stroke: inherit expands to -webkit-text-stroke-width');
  assertEq(s.getPropertyValue('-webkit-text-stroke-color'), 'inherit', '-webkit-text-stroke: inherit expands to -webkit-text-stroke-color');
  s.removeProperty('-webkit-text-stroke');
  assertEq(s.getPropertyValue('-webkit-text-stroke-width'), '', '-webkit-text-stroke: removeProperty clears -webkit-text-stroke-width');
  assertEq(s.getPropertyValue('-webkit-text-stroke-color'), '', '-webkit-text-stroke: removeProperty clears -webkit-text-stroke-color');
}

// ============ ALIAS PROPERTIES ============

// --- -webkit-appearance → appearance (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-appearance', 'initial');
  assertEq(s.getPropertyValue('appearance'), 'initial', '-webkit-appearance: alias sets canonical appearance');
  const s2 = fresh();
  s2.setProperty('appearance', 'initial');
  assertEq(s2.getPropertyValue('-webkit-appearance'), 'initial', '-webkit-appearance: reading alias returns canonical value');
}

// --- -webkit-app-region → app-region (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-app-region', 'none');
  assertEq(s.getPropertyValue('app-region'), 'none', '-webkit-app-region: alias sets canonical app-region');
  const s2 = fresh();
  s2.setProperty('app-region', 'none');
  assertEq(s2.getPropertyValue('-webkit-app-region'), 'none', '-webkit-app-region: reading alias returns canonical value');
}

// --- -webkit-mask-clip → mask-clip (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-mask-clip', 'initial');
  assertEq(s.getPropertyValue('mask-clip'), 'initial', '-webkit-mask-clip: alias sets canonical mask-clip');
  const s2 = fresh();
  s2.setProperty('mask-clip', 'initial');
  assertEq(s2.getPropertyValue('-webkit-mask-clip'), 'initial', '-webkit-mask-clip: reading alias returns canonical value');
}

// --- -webkit-mask-composite → mask-composite (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-mask-composite', 'add');
  assertEq(s.getPropertyValue('mask-composite'), 'add', '-webkit-mask-composite: alias sets canonical mask-composite');
  const s2 = fresh();
  s2.setProperty('mask-composite', 'add');
  assertEq(s2.getPropertyValue('-webkit-mask-composite'), 'add', '-webkit-mask-composite: reading alias returns canonical value');
}

// --- -webkit-mask-image → mask-image (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-mask-image', 'none');
  assertEq(s.getPropertyValue('mask-image'), 'none', '-webkit-mask-image: alias sets canonical mask-image');
  const s2 = fresh();
  s2.setProperty('mask-image', 'none');
  assertEq(s2.getPropertyValue('-webkit-mask-image'), 'none', '-webkit-mask-image: reading alias returns canonical value');
}

// --- -webkit-mask-origin → mask-origin (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-mask-origin', 'initial');
  assertEq(s.getPropertyValue('mask-origin'), 'initial', '-webkit-mask-origin: alias sets canonical mask-origin');
  const s2 = fresh();
  s2.setProperty('mask-origin', 'initial');
  assertEq(s2.getPropertyValue('-webkit-mask-origin'), 'initial', '-webkit-mask-origin: reading alias returns canonical value');
}

// --- -webkit-mask-repeat → mask-repeat (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-mask-repeat', 'initial');
  assertEq(s.getPropertyValue('mask-repeat'), 'initial', '-webkit-mask-repeat: alias sets canonical mask-repeat');
  const s2 = fresh();
  s2.setProperty('mask-repeat', 'initial');
  assertEq(s2.getPropertyValue('-webkit-mask-repeat'), 'initial', '-webkit-mask-repeat: reading alias returns canonical value');
}

// --- -webkit-mask-size → mask-size (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-mask-size', '10px');
  assertEq(s.getPropertyValue('mask-size'), '10px', '-webkit-mask-size: alias sets canonical mask-size');
  const s2 = fresh();
  s2.setProperty('mask-size', '10px');
  assertEq(s2.getPropertyValue('-webkit-mask-size'), '10px', '-webkit-mask-size: reading alias returns canonical value');
}

// --- -webkit-border-end-color → border-inline-end-color (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-border-end-color', 'red');
  assertEq(s.getPropertyValue('border-inline-end-color'), 'red', '-webkit-border-end-color: alias sets canonical border-inline-end-color');
  const s2 = fresh();
  s2.setProperty('border-inline-end-color', 'red');
  assertEq(s2.getPropertyValue('-webkit-border-end-color'), 'red', '-webkit-border-end-color: reading alias returns canonical value');
}

// --- -webkit-border-end-style → border-inline-end-style (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-border-end-style', 'initial');
  assertEq(s.getPropertyValue('border-inline-end-style'), 'initial', '-webkit-border-end-style: alias sets canonical border-inline-end-style');
  const s2 = fresh();
  s2.setProperty('border-inline-end-style', 'initial');
  assertEq(s2.getPropertyValue('-webkit-border-end-style'), 'initial', '-webkit-border-end-style: reading alias returns canonical value');
}

// --- -webkit-border-end-width → border-inline-end-width (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-border-end-width', '10px');
  assertEq(s.getPropertyValue('border-inline-end-width'), '10px', '-webkit-border-end-width: alias sets canonical border-inline-end-width');
  const s2 = fresh();
  s2.setProperty('border-inline-end-width', '10px');
  assertEq(s2.getPropertyValue('-webkit-border-end-width'), '10px', '-webkit-border-end-width: reading alias returns canonical value');
}

// --- -webkit-border-start-color → border-inline-start-color (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-border-start-color', 'red');
  assertEq(s.getPropertyValue('border-inline-start-color'), 'red', '-webkit-border-start-color: alias sets canonical border-inline-start-color');
  const s2 = fresh();
  s2.setProperty('border-inline-start-color', 'red');
  assertEq(s2.getPropertyValue('-webkit-border-start-color'), 'red', '-webkit-border-start-color: reading alias returns canonical value');
}

// --- -webkit-border-start-style → border-inline-start-style (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-border-start-style', 'initial');
  assertEq(s.getPropertyValue('border-inline-start-style'), 'initial', '-webkit-border-start-style: alias sets canonical border-inline-start-style');
  const s2 = fresh();
  s2.setProperty('border-inline-start-style', 'initial');
  assertEq(s2.getPropertyValue('-webkit-border-start-style'), 'initial', '-webkit-border-start-style: reading alias returns canonical value');
}

// --- -webkit-border-start-width → border-inline-start-width (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-border-start-width', '10px');
  assertEq(s.getPropertyValue('border-inline-start-width'), '10px', '-webkit-border-start-width: alias sets canonical border-inline-start-width');
  const s2 = fresh();
  s2.setProperty('border-inline-start-width', '10px');
  assertEq(s2.getPropertyValue('-webkit-border-start-width'), '10px', '-webkit-border-start-width: reading alias returns canonical value');
}

// --- -webkit-border-before-color → border-block-start-color (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-border-before-color', 'red');
  assertEq(s.getPropertyValue('border-block-start-color'), 'red', '-webkit-border-before-color: alias sets canonical border-block-start-color');
  const s2 = fresh();
  s2.setProperty('border-block-start-color', 'red');
  assertEq(s2.getPropertyValue('-webkit-border-before-color'), 'red', '-webkit-border-before-color: reading alias returns canonical value');
}

// --- -webkit-border-before-style → border-block-start-style (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-border-before-style', 'initial');
  assertEq(s.getPropertyValue('border-block-start-style'), 'initial', '-webkit-border-before-style: alias sets canonical border-block-start-style');
  const s2 = fresh();
  s2.setProperty('border-block-start-style', 'initial');
  assertEq(s2.getPropertyValue('-webkit-border-before-style'), 'initial', '-webkit-border-before-style: reading alias returns canonical value');
}

// --- -webkit-border-before-width → border-block-start-width (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-border-before-width', '10px');
  assertEq(s.getPropertyValue('border-block-start-width'), '10px', '-webkit-border-before-width: alias sets canonical border-block-start-width');
  const s2 = fresh();
  s2.setProperty('border-block-start-width', '10px');
  assertEq(s2.getPropertyValue('-webkit-border-before-width'), '10px', '-webkit-border-before-width: reading alias returns canonical value');
}

// --- -webkit-border-after-color → border-block-end-color (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-border-after-color', 'red');
  assertEq(s.getPropertyValue('border-block-end-color'), 'red', '-webkit-border-after-color: alias sets canonical border-block-end-color');
  const s2 = fresh();
  s2.setProperty('border-block-end-color', 'red');
  assertEq(s2.getPropertyValue('-webkit-border-after-color'), 'red', '-webkit-border-after-color: reading alias returns canonical value');
}

// --- -webkit-border-after-style → border-block-end-style (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-border-after-style', 'initial');
  assertEq(s.getPropertyValue('border-block-end-style'), 'initial', '-webkit-border-after-style: alias sets canonical border-block-end-style');
  const s2 = fresh();
  s2.setProperty('border-block-end-style', 'initial');
  assertEq(s2.getPropertyValue('-webkit-border-after-style'), 'initial', '-webkit-border-after-style: reading alias returns canonical value');
}

// --- -webkit-border-after-width → border-block-end-width (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-border-after-width', '10px');
  assertEq(s.getPropertyValue('border-block-end-width'), '10px', '-webkit-border-after-width: alias sets canonical border-block-end-width');
  const s2 = fresh();
  s2.setProperty('border-block-end-width', '10px');
  assertEq(s2.getPropertyValue('-webkit-border-after-width'), '10px', '-webkit-border-after-width: reading alias returns canonical value');
}

// --- -webkit-margin-end → margin-inline-end (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-margin-end', '10px');
  assertEq(s.getPropertyValue('margin-inline-end'), '10px', '-webkit-margin-end: alias sets canonical margin-inline-end');
  const s2 = fresh();
  s2.setProperty('margin-inline-end', '10px');
  assertEq(s2.getPropertyValue('-webkit-margin-end'), '10px', '-webkit-margin-end: reading alias returns canonical value');
}

// --- -webkit-margin-start → margin-inline-start (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-margin-start', '10px');
  assertEq(s.getPropertyValue('margin-inline-start'), '10px', '-webkit-margin-start: alias sets canonical margin-inline-start');
  const s2 = fresh();
  s2.setProperty('margin-inline-start', '10px');
  assertEq(s2.getPropertyValue('-webkit-margin-start'), '10px', '-webkit-margin-start: reading alias returns canonical value');
}

// --- -webkit-margin-before → margin-block-start (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-margin-before', '10px');
  assertEq(s.getPropertyValue('margin-block-start'), '10px', '-webkit-margin-before: alias sets canonical margin-block-start');
  const s2 = fresh();
  s2.setProperty('margin-block-start', '10px');
  assertEq(s2.getPropertyValue('-webkit-margin-before'), '10px', '-webkit-margin-before: reading alias returns canonical value');
}

// --- -webkit-margin-after → margin-block-end (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-margin-after', '10px');
  assertEq(s.getPropertyValue('margin-block-end'), '10px', '-webkit-margin-after: alias sets canonical margin-block-end');
  const s2 = fresh();
  s2.setProperty('margin-block-end', '10px');
  assertEq(s2.getPropertyValue('-webkit-margin-after'), '10px', '-webkit-margin-after: reading alias returns canonical value');
}

// --- -webkit-padding-end → padding-inline-end (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-padding-end', '10px');
  assertEq(s.getPropertyValue('padding-inline-end'), '10px', '-webkit-padding-end: alias sets canonical padding-inline-end');
  const s2 = fresh();
  s2.setProperty('padding-inline-end', '10px');
  assertEq(s2.getPropertyValue('-webkit-padding-end'), '10px', '-webkit-padding-end: reading alias returns canonical value');
}

// --- -webkit-padding-start → padding-inline-start (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-padding-start', '10px');
  assertEq(s.getPropertyValue('padding-inline-start'), '10px', '-webkit-padding-start: alias sets canonical padding-inline-start');
  const s2 = fresh();
  s2.setProperty('padding-inline-start', '10px');
  assertEq(s2.getPropertyValue('-webkit-padding-start'), '10px', '-webkit-padding-start: reading alias returns canonical value');
}

// --- -webkit-padding-before → padding-block-start (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-padding-before', '10px');
  assertEq(s.getPropertyValue('padding-block-start'), '10px', '-webkit-padding-before: alias sets canonical padding-block-start');
  const s2 = fresh();
  s2.setProperty('padding-block-start', '10px');
  assertEq(s2.getPropertyValue('-webkit-padding-before'), '10px', '-webkit-padding-before: reading alias returns canonical value');
}

// --- -webkit-padding-after → padding-block-end (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-padding-after', '10px');
  assertEq(s.getPropertyValue('padding-block-end'), '10px', '-webkit-padding-after: alias sets canonical padding-block-end');
  const s2 = fresh();
  s2.setProperty('padding-block-end', '10px');
  assertEq(s2.getPropertyValue('-webkit-padding-after'), '10px', '-webkit-padding-after: reading alias returns canonical value');
}

// --- -webkit-logical-width → inline-size (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-logical-width', '10px');
  assertEq(s.getPropertyValue('inline-size'), '10px', '-webkit-logical-width: alias sets canonical inline-size');
  const s2 = fresh();
  s2.setProperty('inline-size', '10px');
  assertEq(s2.getPropertyValue('-webkit-logical-width'), '10px', '-webkit-logical-width: reading alias returns canonical value');
}

// --- -webkit-logical-height → block-size (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-logical-height', '10px');
  assertEq(s.getPropertyValue('block-size'), '10px', '-webkit-logical-height: alias sets canonical block-size');
  const s2 = fresh();
  s2.setProperty('block-size', '10px');
  assertEq(s2.getPropertyValue('-webkit-logical-height'), '10px', '-webkit-logical-height: reading alias returns canonical value');
}

// --- -webkit-min-logical-width → min-inline-size (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-min-logical-width', '10px');
  assertEq(s.getPropertyValue('min-inline-size'), '10px', '-webkit-min-logical-width: alias sets canonical min-inline-size');
  const s2 = fresh();
  s2.setProperty('min-inline-size', '10px');
  assertEq(s2.getPropertyValue('-webkit-min-logical-width'), '10px', '-webkit-min-logical-width: reading alias returns canonical value');
}

// --- -webkit-min-logical-height → min-block-size (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-min-logical-height', '10px');
  assertEq(s.getPropertyValue('min-block-size'), '10px', '-webkit-min-logical-height: alias sets canonical min-block-size');
  const s2 = fresh();
  s2.setProperty('min-block-size', '10px');
  assertEq(s2.getPropertyValue('-webkit-min-logical-height'), '10px', '-webkit-min-logical-height: reading alias returns canonical value');
}

// --- -webkit-max-logical-width → max-inline-size (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-max-logical-width', '10px');
  assertEq(s.getPropertyValue('max-inline-size'), '10px', '-webkit-max-logical-width: alias sets canonical max-inline-size');
  const s2 = fresh();
  s2.setProperty('max-inline-size', '10px');
  assertEq(s2.getPropertyValue('-webkit-max-logical-width'), '10px', '-webkit-max-logical-width: reading alias returns canonical value');
}

// --- -webkit-max-logical-height → max-block-size (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-max-logical-height', '10px');
  assertEq(s.getPropertyValue('max-block-size'), '10px', '-webkit-max-logical-height: alias sets canonical max-block-size');
  const s2 = fresh();
  s2.setProperty('max-block-size', '10px');
  assertEq(s2.getPropertyValue('-webkit-max-logical-height'), '10px', '-webkit-max-logical-height: reading alias returns canonical value');
}

// --- -webkit-print-color-adjust → print-color-adjust (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-print-color-adjust', 'economy');
  assertEq(s.getPropertyValue('print-color-adjust'), 'economy', '-webkit-print-color-adjust: alias sets canonical print-color-adjust');
  const s2 = fresh();
  s2.setProperty('print-color-adjust', 'economy');
  assertEq(s2.getPropertyValue('-webkit-print-color-adjust'), 'economy', '-webkit-print-color-adjust: reading alias returns canonical value');
}

// --- -webkit-border-after → border-block-end (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-border-after', 'inherit');
  assertEq(s.getPropertyValue('border-block-end-width'), 'inherit', '-webkit-border-after: alias expands via border-block-end to border-block-end-width');
  const s2 = fresh();
  s2.setProperty('border-block-end', 'inherit');
  assertEq(s2.getPropertyValue('-webkit-border-after').includes('inherit'), true, '-webkit-border-after: reading alias returns composed value');
}

// --- -webkit-border-before → border-block-start (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-border-before', 'inherit');
  assertEq(s.getPropertyValue('border-block-start-width'), 'inherit', '-webkit-border-before: alias expands via border-block-start to border-block-start-width');
  const s2 = fresh();
  s2.setProperty('border-block-start', 'inherit');
  assertEq(s2.getPropertyValue('-webkit-border-before').includes('inherit'), true, '-webkit-border-before: reading alias returns composed value');
}

// --- -webkit-border-end → border-inline-end (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-border-end', 'inherit');
  assertEq(s.getPropertyValue('border-inline-end-width'), 'inherit', '-webkit-border-end: alias expands via border-inline-end to border-inline-end-width');
  const s2 = fresh();
  s2.setProperty('border-inline-end', 'inherit');
  assertEq(s2.getPropertyValue('-webkit-border-end').includes('inherit'), true, '-webkit-border-end: reading alias returns composed value');
}

// --- -webkit-border-start → border-inline-start (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-border-start', 'inherit');
  assertEq(s.getPropertyValue('border-inline-start-width'), 'inherit', '-webkit-border-start: alias expands via border-inline-start to border-inline-start-width');
  const s2 = fresh();
  s2.setProperty('border-inline-start', 'inherit');
  assertEq(s2.getPropertyValue('-webkit-border-start').includes('inherit'), true, '-webkit-border-start: reading alias returns composed value');
}

// --- -webkit-mask → mask (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-mask', 'inherit');
  assertEq(s.getPropertyValue('mask-image'), 'inherit', '-webkit-mask: alias expands via mask to mask-image');
  const s2 = fresh();
  s2.setProperty('mask', 'inherit');
  assertEq(s2.getPropertyValue('-webkit-mask').includes('inherit'), true, '-webkit-mask: reading alias returns composed value');
}

// --- -webkit-mask-position → mask-position (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-mask-position', 'inherit');
  assertEq(s.getPropertyValue('-webkit-mask-position-x'), 'inherit', '-webkit-mask-position: alias expands via mask-position to -webkit-mask-position-x');
  const s2 = fresh();
  s2.setProperty('mask-position', 'inherit');
  assertEq(s2.getPropertyValue('-webkit-mask-position').includes('inherit'), true, '-webkit-mask-position: reading alias returns composed value');
}

// --- -epub-caption-side → caption-side (alias) ---
{
  const s = fresh();
  s.setProperty('-epub-caption-side', 'top');
  assertEq(s.getPropertyValue('caption-side'), 'top', '-epub-caption-side: alias sets canonical caption-side');
  const s2 = fresh();
  s2.setProperty('caption-side', 'top');
  assertEq(s2.getPropertyValue('-epub-caption-side'), 'top', '-epub-caption-side: reading alias returns canonical value');
}

// --- -epub-text-combine → -webkit-text-combine (alias) ---
{
  const s = fresh();
  s.setProperty('-epub-text-combine', 'initial');
  assertEq(s.getPropertyValue('-webkit-text-combine'), 'initial', '-epub-text-combine: alias sets canonical -webkit-text-combine');
  const s2 = fresh();
  s2.setProperty('-webkit-text-combine', 'initial');
  assertEq(s2.getPropertyValue('-epub-text-combine'), 'initial', '-epub-text-combine: reading alias returns canonical value');
}

// --- -epub-text-emphasis → text-emphasis (alias) ---
{
  const s = fresh();
  s.setProperty('-epub-text-emphasis', 'inherit');
  assertEq(s.getPropertyValue('text-emphasis-style'), 'inherit', '-epub-text-emphasis: alias expands via text-emphasis to text-emphasis-style');
  const s2 = fresh();
  s2.setProperty('text-emphasis', 'inherit');
  assertEq(s2.getPropertyValue('-epub-text-emphasis').includes('inherit'), true, '-epub-text-emphasis: reading alias returns composed value');
}

// --- -epub-text-emphasis-color → text-emphasis-color (alias) ---
{
  const s = fresh();
  s.setProperty('-epub-text-emphasis-color', 'red');
  assertEq(s.getPropertyValue('text-emphasis-color'), 'red', '-epub-text-emphasis-color: alias sets canonical text-emphasis-color');
  const s2 = fresh();
  s2.setProperty('text-emphasis-color', 'red');
  assertEq(s2.getPropertyValue('-epub-text-emphasis-color'), 'red', '-epub-text-emphasis-color: reading alias returns canonical value');
}

// --- -epub-text-emphasis-style → text-emphasis-style (alias) ---
{
  const s = fresh();
  s.setProperty('-epub-text-emphasis-style', 'initial');
  assertEq(s.getPropertyValue('text-emphasis-style'), 'initial', '-epub-text-emphasis-style: alias sets canonical text-emphasis-style');
  const s2 = fresh();
  s2.setProperty('text-emphasis-style', 'initial');
  assertEq(s2.getPropertyValue('-epub-text-emphasis-style'), 'initial', '-epub-text-emphasis-style: reading alias returns canonical value');
}

// --- -epub-text-orientation → -webkit-text-orientation (alias) ---
{
  const s = fresh();
  s.setProperty('-epub-text-orientation', 'initial');
  assertEq(s.getPropertyValue('-webkit-text-orientation'), 'initial', '-epub-text-orientation: alias sets canonical -webkit-text-orientation');
  const s2 = fresh();
  s2.setProperty('-webkit-text-orientation', 'initial');
  assertEq(s2.getPropertyValue('-epub-text-orientation'), 'initial', '-epub-text-orientation: reading alias returns canonical value');
}

// --- -epub-text-transform → text-transform (alias) ---
{
  const s = fresh();
  s.setProperty('-epub-text-transform', 'none');
  assertEq(s.getPropertyValue('text-transform'), 'none', '-epub-text-transform: alias sets canonical text-transform');
  const s2 = fresh();
  s2.setProperty('text-transform', 'none');
  assertEq(s2.getPropertyValue('-epub-text-transform'), 'none', '-epub-text-transform: reading alias returns canonical value');
}

// --- -epub-word-break → word-break (alias) ---
{
  const s = fresh();
  s.setProperty('-epub-word-break', 'normal');
  assertEq(s.getPropertyValue('word-break'), 'normal', '-epub-word-break: alias sets canonical word-break');
  const s2 = fresh();
  s2.setProperty('word-break', 'normal');
  assertEq(s2.getPropertyValue('-epub-word-break'), 'normal', '-epub-word-break: reading alias returns canonical value');
}

// --- -epub-writing-mode → -webkit-writing-mode (alias) ---
{
  const s = fresh();
  s.setProperty('-epub-writing-mode', 'initial');
  assertEq(s.getPropertyValue('-webkit-writing-mode'), 'initial', '-epub-writing-mode: alias sets canonical -webkit-writing-mode');
  const s2 = fresh();
  s2.setProperty('-webkit-writing-mode', 'initial');
  assertEq(s2.getPropertyValue('-epub-writing-mode'), 'initial', '-epub-writing-mode: reading alias returns canonical value');
}

// --- -webkit-align-content → align-content (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-align-content', 'initial');
  assertEq(s.getPropertyValue('align-content'), 'initial', '-webkit-align-content: alias sets canonical align-content');
  const s2 = fresh();
  s2.setProperty('align-content', 'initial');
  assertEq(s2.getPropertyValue('-webkit-align-content'), 'initial', '-webkit-align-content: reading alias returns canonical value');
}

// --- -webkit-align-items → align-items (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-align-items', 'initial');
  assertEq(s.getPropertyValue('align-items'), 'initial', '-webkit-align-items: alias sets canonical align-items');
  const s2 = fresh();
  s2.setProperty('align-items', 'initial');
  assertEq(s2.getPropertyValue('-webkit-align-items'), 'initial', '-webkit-align-items: reading alias returns canonical value');
}

// --- -webkit-align-self → align-self (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-align-self', 'initial');
  assertEq(s.getPropertyValue('align-self'), 'initial', '-webkit-align-self: alias sets canonical align-self');
  const s2 = fresh();
  s2.setProperty('align-self', 'initial');
  assertEq(s2.getPropertyValue('-webkit-align-self'), 'initial', '-webkit-align-self: reading alias returns canonical value');
}

// --- -webkit-animation → animation (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-animation', 'inherit');
  assertEq(s.getPropertyValue('animation-duration'), 'inherit', '-webkit-animation: alias expands via animation to animation-duration');
  const s2 = fresh();
  s2.setProperty('animation', 'inherit');
  assertEq(s2.getPropertyValue('-webkit-animation').includes('inherit'), true, '-webkit-animation: reading alias returns composed value');
}

// --- -webkit-animation-delay → animation-delay (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-animation-delay', '1s');
  assertEq(s.getPropertyValue('animation-delay'), '1s', '-webkit-animation-delay: alias sets canonical animation-delay');
  const s2 = fresh();
  s2.setProperty('animation-delay', '1s');
  assertEq(s2.getPropertyValue('-webkit-animation-delay'), '1s', '-webkit-animation-delay: reading alias returns canonical value');
}

// --- -webkit-animation-direction → animation-direction (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-animation-direction', 'normal');
  assertEq(s.getPropertyValue('animation-direction'), 'normal', '-webkit-animation-direction: alias sets canonical animation-direction');
  const s2 = fresh();
  s2.setProperty('animation-direction', 'normal');
  assertEq(s2.getPropertyValue('-webkit-animation-direction'), 'normal', '-webkit-animation-direction: reading alias returns canonical value');
}

// --- -webkit-animation-duration → animation-duration (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-animation-duration', '1s');
  assertEq(s.getPropertyValue('animation-duration'), '1s', '-webkit-animation-duration: alias sets canonical animation-duration');
  const s2 = fresh();
  s2.setProperty('animation-duration', '1s');
  assertEq(s2.getPropertyValue('-webkit-animation-duration'), '1s', '-webkit-animation-duration: reading alias returns canonical value');
}

// --- -webkit-animation-fill-mode → animation-fill-mode (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-animation-fill-mode', 'none');
  assertEq(s.getPropertyValue('animation-fill-mode'), 'none', '-webkit-animation-fill-mode: alias sets canonical animation-fill-mode');
  const s2 = fresh();
  s2.setProperty('animation-fill-mode', 'none');
  assertEq(s2.getPropertyValue('-webkit-animation-fill-mode'), 'none', '-webkit-animation-fill-mode: reading alias returns canonical value');
}

// --- -webkit-animation-iteration-count → animation-iteration-count (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-animation-iteration-count', 'infinite');
  assertEq(s.getPropertyValue('animation-iteration-count'), 'infinite', '-webkit-animation-iteration-count: alias sets canonical animation-iteration-count');
  const s2 = fresh();
  s2.setProperty('animation-iteration-count', 'infinite');
  assertEq(s2.getPropertyValue('-webkit-animation-iteration-count'), 'infinite', '-webkit-animation-iteration-count: reading alias returns canonical value');
}

// --- -webkit-animation-name → animation-name (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-animation-name', 'none');
  assertEq(s.getPropertyValue('animation-name'), 'none', '-webkit-animation-name: alias sets canonical animation-name');
  const s2 = fresh();
  s2.setProperty('animation-name', 'none');
  assertEq(s2.getPropertyValue('-webkit-animation-name'), 'none', '-webkit-animation-name: reading alias returns canonical value');
}

// --- -webkit-animation-play-state → animation-play-state (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-animation-play-state', 'running');
  assertEq(s.getPropertyValue('animation-play-state'), 'running', '-webkit-animation-play-state: alias sets canonical animation-play-state');
  const s2 = fresh();
  s2.setProperty('animation-play-state', 'running');
  assertEq(s2.getPropertyValue('-webkit-animation-play-state'), 'running', '-webkit-animation-play-state: reading alias returns canonical value');
}

// --- -webkit-animation-timing-function → animation-timing-function (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-animation-timing-function', 'linear');
  assertEq(s.getPropertyValue('animation-timing-function'), 'linear', '-webkit-animation-timing-function: alias sets canonical animation-timing-function');
  const s2 = fresh();
  s2.setProperty('animation-timing-function', 'linear');
  assertEq(s2.getPropertyValue('-webkit-animation-timing-function'), 'linear', '-webkit-animation-timing-function: reading alias returns canonical value');
}

// --- -webkit-backface-visibility → backface-visibility (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-backface-visibility', 'visible');
  assertEq(s.getPropertyValue('backface-visibility'), 'visible', '-webkit-backface-visibility: alias sets canonical backface-visibility');
  const s2 = fresh();
  s2.setProperty('backface-visibility', 'visible');
  assertEq(s2.getPropertyValue('-webkit-backface-visibility'), 'visible', '-webkit-backface-visibility: reading alias returns canonical value');
}

// --- -webkit-background-clip → background-clip (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-background-clip', 'border-box');
  assertEq(s.getPropertyValue('background-clip'), 'border-box', '-webkit-background-clip: alias sets canonical background-clip');
  const s2 = fresh();
  s2.setProperty('background-clip', 'border-box');
  assertEq(s2.getPropertyValue('-webkit-background-clip'), 'border-box', '-webkit-background-clip: reading alias returns canonical value');
}

// --- -webkit-background-origin → background-origin (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-background-origin', 'border-box');
  assertEq(s.getPropertyValue('background-origin'), 'border-box', '-webkit-background-origin: alias sets canonical background-origin');
  const s2 = fresh();
  s2.setProperty('background-origin', 'border-box');
  assertEq(s2.getPropertyValue('-webkit-background-origin'), 'border-box', '-webkit-background-origin: reading alias returns canonical value');
}

// --- -webkit-background-size → background-size (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-background-size', 'auto');
  assertEq(s.getPropertyValue('background-size'), 'auto', '-webkit-background-size: alias sets canonical background-size');
  const s2 = fresh();
  s2.setProperty('background-size', 'auto');
  assertEq(s2.getPropertyValue('-webkit-background-size'), 'auto', '-webkit-background-size: reading alias returns canonical value');
}

// --- -webkit-border-bottom-left-radius → border-bottom-left-radius (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-border-bottom-left-radius', '10px');
  assertEq(s.getPropertyValue('border-bottom-left-radius'), '10px', '-webkit-border-bottom-left-radius: alias sets canonical border-bottom-left-radius');
  const s2 = fresh();
  s2.setProperty('border-bottom-left-radius', '10px');
  assertEq(s2.getPropertyValue('-webkit-border-bottom-left-radius'), '10px', '-webkit-border-bottom-left-radius: reading alias returns canonical value');
}

// --- -webkit-border-bottom-right-radius → border-bottom-right-radius (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-border-bottom-right-radius', '10px');
  assertEq(s.getPropertyValue('border-bottom-right-radius'), '10px', '-webkit-border-bottom-right-radius: alias sets canonical border-bottom-right-radius');
  const s2 = fresh();
  s2.setProperty('border-bottom-right-radius', '10px');
  assertEq(s2.getPropertyValue('-webkit-border-bottom-right-radius'), '10px', '-webkit-border-bottom-right-radius: reading alias returns canonical value');
}

// --- -webkit-border-radius → border-radius (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-border-radius', 'inherit');
  assertEq(s.getPropertyValue('border-top-left-radius'), 'inherit', '-webkit-border-radius: alias expands via border-radius to border-top-left-radius');
  const s2 = fresh();
  s2.setProperty('border-radius', 'inherit');
  assertEq(s2.getPropertyValue('-webkit-border-radius').includes('inherit'), true, '-webkit-border-radius: reading alias returns composed value');
}

// --- -webkit-border-top-left-radius → border-top-left-radius (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-border-top-left-radius', '10px');
  assertEq(s.getPropertyValue('border-top-left-radius'), '10px', '-webkit-border-top-left-radius: alias sets canonical border-top-left-radius');
  const s2 = fresh();
  s2.setProperty('border-top-left-radius', '10px');
  assertEq(s2.getPropertyValue('-webkit-border-top-left-radius'), '10px', '-webkit-border-top-left-radius: reading alias returns canonical value');
}

// --- -webkit-border-top-right-radius → border-top-right-radius (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-border-top-right-radius', '10px');
  assertEq(s.getPropertyValue('border-top-right-radius'), '10px', '-webkit-border-top-right-radius: alias sets canonical border-top-right-radius');
  const s2 = fresh();
  s2.setProperty('border-top-right-radius', '10px');
  assertEq(s2.getPropertyValue('-webkit-border-top-right-radius'), '10px', '-webkit-border-top-right-radius: reading alias returns canonical value');
}

// --- -webkit-box-shadow → box-shadow (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-box-shadow', 'none');
  assertEq(s.getPropertyValue('box-shadow'), 'none', '-webkit-box-shadow: alias sets canonical box-shadow');
  const s2 = fresh();
  s2.setProperty('box-shadow', 'none');
  assertEq(s2.getPropertyValue('-webkit-box-shadow'), 'none', '-webkit-box-shadow: reading alias returns canonical value');
}

// --- -webkit-box-sizing → box-sizing (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-box-sizing', 'content-box');
  assertEq(s.getPropertyValue('box-sizing'), 'content-box', '-webkit-box-sizing: alias sets canonical box-sizing');
  const s2 = fresh();
  s2.setProperty('box-sizing', 'content-box');
  assertEq(s2.getPropertyValue('-webkit-box-sizing'), 'content-box', '-webkit-box-sizing: reading alias returns canonical value');
}

// --- -webkit-clip-path → clip-path (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-clip-path', 'border-box');
  assertEq(s.getPropertyValue('clip-path'), 'border-box', '-webkit-clip-path: alias sets canonical clip-path');
  const s2 = fresh();
  s2.setProperty('clip-path', 'border-box');
  assertEq(s2.getPropertyValue('-webkit-clip-path'), 'border-box', '-webkit-clip-path: reading alias returns canonical value');
}

// --- -webkit-column-count → column-count (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-column-count', 'auto');
  assertEq(s.getPropertyValue('column-count'), 'auto', '-webkit-column-count: alias sets canonical column-count');
  const s2 = fresh();
  s2.setProperty('column-count', 'auto');
  assertEq(s2.getPropertyValue('-webkit-column-count'), 'auto', '-webkit-column-count: reading alias returns canonical value');
}

// --- -webkit-column-gap → column-gap (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-column-gap', '10px');
  assertEq(s.getPropertyValue('column-gap'), '10px', '-webkit-column-gap: alias sets canonical column-gap');
  const s2 = fresh();
  s2.setProperty('column-gap', '10px');
  assertEq(s2.getPropertyValue('-webkit-column-gap'), '10px', '-webkit-column-gap: reading alias returns canonical value');
}

// --- -webkit-column-rule → column-rule (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-column-rule', 'inherit');
  assertEq(s.getPropertyValue('column-rule-width'), 'inherit', '-webkit-column-rule: alias expands via column-rule to column-rule-width');
  const s2 = fresh();
  s2.setProperty('column-rule', 'inherit');
  assertEq(s2.getPropertyValue('-webkit-column-rule').includes('inherit'), true, '-webkit-column-rule: reading alias returns composed value');
}

// --- -webkit-column-rule-color → column-rule-color (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-column-rule-color', 'red');
  assertEq(s.getPropertyValue('column-rule-color'), 'red', '-webkit-column-rule-color: alias sets canonical column-rule-color');
  const s2 = fresh();
  s2.setProperty('column-rule-color', 'red');
  assertEq(s2.getPropertyValue('-webkit-column-rule-color'), 'red', '-webkit-column-rule-color: reading alias returns canonical value');
}

// --- -webkit-column-rule-style → column-rule-style (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-column-rule-style', 'none');
  assertEq(s.getPropertyValue('column-rule-style'), 'none', '-webkit-column-rule-style: alias sets canonical column-rule-style');
  const s2 = fresh();
  s2.setProperty('column-rule-style', 'none');
  assertEq(s2.getPropertyValue('-webkit-column-rule-style'), 'none', '-webkit-column-rule-style: reading alias returns canonical value');
}

// --- -webkit-column-rule-width → column-rule-width (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-column-rule-width', 'thin');
  assertEq(s.getPropertyValue('column-rule-width'), 'thin', '-webkit-column-rule-width: alias sets canonical column-rule-width');
  const s2 = fresh();
  s2.setProperty('column-rule-width', 'thin');
  assertEq(s2.getPropertyValue('-webkit-column-rule-width'), 'thin', '-webkit-column-rule-width: reading alias returns canonical value');
}

// --- -webkit-column-span → column-span (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-column-span', 'none');
  assertEq(s.getPropertyValue('column-span'), 'none', '-webkit-column-span: alias sets canonical column-span');
  const s2 = fresh();
  s2.setProperty('column-span', 'none');
  assertEq(s2.getPropertyValue('-webkit-column-span'), 'none', '-webkit-column-span: reading alias returns canonical value');
}

// --- -webkit-column-width → column-width (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-column-width', '10px');
  assertEq(s.getPropertyValue('column-width'), '10px', '-webkit-column-width: alias sets canonical column-width');
  const s2 = fresh();
  s2.setProperty('column-width', '10px');
  assertEq(s2.getPropertyValue('-webkit-column-width'), '10px', '-webkit-column-width: reading alias returns canonical value');
}

// --- -webkit-columns → columns (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-columns', 'inherit');
  assertEq(s.getPropertyValue('column-width'), 'inherit', '-webkit-columns: alias expands via columns to column-width');
  const s2 = fresh();
  s2.setProperty('columns', 'inherit');
  assertEq(s2.getPropertyValue('-webkit-columns').includes('inherit'), true, '-webkit-columns: reading alias returns composed value');
}

// --- -webkit-filter → filter (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-filter', 'none');
  assertEq(s.getPropertyValue('filter'), 'none', '-webkit-filter: alias sets canonical filter');
  const s2 = fresh();
  s2.setProperty('filter', 'none');
  assertEq(s2.getPropertyValue('-webkit-filter'), 'none', '-webkit-filter: reading alias returns canonical value');
}

// --- -webkit-flex → flex (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-flex', 'inherit');
  assertEq(s.getPropertyValue('flex-grow'), 'inherit', '-webkit-flex: alias expands via flex to flex-grow');
  const s2 = fresh();
  s2.setProperty('flex', 'inherit');
  assertEq(s2.getPropertyValue('-webkit-flex').includes('inherit'), true, '-webkit-flex: reading alias returns composed value');
}

// --- -webkit-flex-basis → flex-basis (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-flex-basis', '10px');
  assertEq(s.getPropertyValue('flex-basis'), '10px', '-webkit-flex-basis: alias sets canonical flex-basis');
  const s2 = fresh();
  s2.setProperty('flex-basis', '10px');
  assertEq(s2.getPropertyValue('-webkit-flex-basis'), '10px', '-webkit-flex-basis: reading alias returns canonical value');
}

// --- -webkit-flex-direction → flex-direction (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-flex-direction', 'row');
  assertEq(s.getPropertyValue('flex-direction'), 'row', '-webkit-flex-direction: alias sets canonical flex-direction');
  const s2 = fresh();
  s2.setProperty('flex-direction', 'row');
  assertEq(s2.getPropertyValue('-webkit-flex-direction'), 'row', '-webkit-flex-direction: reading alias returns canonical value');
}

// --- -webkit-flex-flow → flex-flow (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-flex-flow', 'inherit');
  assertEq(s.getPropertyValue('flex-direction'), 'inherit', '-webkit-flex-flow: alias expands via flex-flow to flex-direction');
  const s2 = fresh();
  s2.setProperty('flex-flow', 'inherit');
  assertEq(s2.getPropertyValue('-webkit-flex-flow').includes('inherit'), true, '-webkit-flex-flow: reading alias returns composed value');
}

// --- -webkit-flex-grow → flex-grow (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-flex-grow', '1');
  assertEq(s.getPropertyValue('flex-grow'), '1', '-webkit-flex-grow: alias sets canonical flex-grow');
  const s2 = fresh();
  s2.setProperty('flex-grow', '1');
  assertEq(s2.getPropertyValue('-webkit-flex-grow'), '1', '-webkit-flex-grow: reading alias returns canonical value');
}

// --- -webkit-flex-shrink → flex-shrink (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-flex-shrink', '1');
  assertEq(s.getPropertyValue('flex-shrink'), '1', '-webkit-flex-shrink: alias sets canonical flex-shrink');
  const s2 = fresh();
  s2.setProperty('flex-shrink', '1');
  assertEq(s2.getPropertyValue('-webkit-flex-shrink'), '1', '-webkit-flex-shrink: reading alias returns canonical value');
}

// --- -webkit-flex-wrap → flex-wrap (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-flex-wrap', 'nowrap');
  assertEq(s.getPropertyValue('flex-wrap'), 'nowrap', '-webkit-flex-wrap: alias sets canonical flex-wrap');
  const s2 = fresh();
  s2.setProperty('flex-wrap', 'nowrap');
  assertEq(s2.getPropertyValue('-webkit-flex-wrap'), 'nowrap', '-webkit-flex-wrap: reading alias returns canonical value');
}

// --- -webkit-font-feature-settings → font-feature-settings (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-font-feature-settings', 'normal');
  assertEq(s.getPropertyValue('font-feature-settings'), 'normal', '-webkit-font-feature-settings: alias sets canonical font-feature-settings');
  const s2 = fresh();
  s2.setProperty('font-feature-settings', 'normal');
  assertEq(s2.getPropertyValue('-webkit-font-feature-settings'), 'normal', '-webkit-font-feature-settings: reading alias returns canonical value');
}

// --- -webkit-hyphenate-character → hyphenate-character (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-hyphenate-character', 'initial');
  assertEq(s.getPropertyValue('hyphenate-character'), 'initial', '-webkit-hyphenate-character: alias sets canonical hyphenate-character');
  const s2 = fresh();
  s2.setProperty('hyphenate-character', 'initial');
  assertEq(s2.getPropertyValue('-webkit-hyphenate-character'), 'initial', '-webkit-hyphenate-character: reading alias returns canonical value');
}

// --- -webkit-justify-content → justify-content (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-justify-content', 'initial');
  assertEq(s.getPropertyValue('justify-content'), 'initial', '-webkit-justify-content: alias sets canonical justify-content');
  const s2 = fresh();
  s2.setProperty('justify-content', 'initial');
  assertEq(s2.getPropertyValue('-webkit-justify-content'), 'initial', '-webkit-justify-content: reading alias returns canonical value');
}

// --- -webkit-opacity → opacity (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-opacity', '1');
  assertEq(s.getPropertyValue('opacity'), '1', '-webkit-opacity: alias sets canonical opacity');
  const s2 = fresh();
  s2.setProperty('opacity', '1');
  assertEq(s2.getPropertyValue('-webkit-opacity'), '1', '-webkit-opacity: reading alias returns canonical value');
}

// --- -webkit-order → order (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-order', '1');
  assertEq(s.getPropertyValue('order'), '1', '-webkit-order: alias sets canonical order');
  const s2 = fresh();
  s2.setProperty('order', '1');
  assertEq(s2.getPropertyValue('-webkit-order'), '1', '-webkit-order: reading alias returns canonical value');
}

// --- -webkit-perspective → perspective (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-perspective', 'none');
  assertEq(s.getPropertyValue('perspective'), 'none', '-webkit-perspective: alias sets canonical perspective');
  const s2 = fresh();
  s2.setProperty('perspective', 'none');
  assertEq(s2.getPropertyValue('-webkit-perspective'), 'none', '-webkit-perspective: reading alias returns canonical value');
}

// --- -webkit-perspective-origin → perspective-origin (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-perspective-origin', 'initial');
  assertEq(s.getPropertyValue('perspective-origin'), 'initial', '-webkit-perspective-origin: alias sets canonical perspective-origin');
  const s2 = fresh();
  s2.setProperty('perspective-origin', 'initial');
  assertEq(s2.getPropertyValue('-webkit-perspective-origin'), 'initial', '-webkit-perspective-origin: reading alias returns canonical value');
}

// --- -webkit-shape-image-threshold → shape-image-threshold (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-shape-image-threshold', '1');
  assertEq(s.getPropertyValue('shape-image-threshold'), '1', '-webkit-shape-image-threshold: alias sets canonical shape-image-threshold');
  const s2 = fresh();
  s2.setProperty('shape-image-threshold', '1');
  assertEq(s2.getPropertyValue('-webkit-shape-image-threshold'), '1', '-webkit-shape-image-threshold: reading alias returns canonical value');
}

// --- -webkit-shape-margin → shape-margin (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-shape-margin', 'none');
  assertEq(s.getPropertyValue('shape-margin'), 'none', '-webkit-shape-margin: alias sets canonical shape-margin');
  const s2 = fresh();
  s2.setProperty('shape-margin', 'none');
  assertEq(s2.getPropertyValue('-webkit-shape-margin'), 'none', '-webkit-shape-margin: reading alias returns canonical value');
}

// --- -webkit-shape-outside → shape-outside (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-shape-outside', 'none');
  assertEq(s.getPropertyValue('shape-outside'), 'none', '-webkit-shape-outside: alias sets canonical shape-outside');
  const s2 = fresh();
  s2.setProperty('shape-outside', 'none');
  assertEq(s2.getPropertyValue('-webkit-shape-outside'), 'none', '-webkit-shape-outside: reading alias returns canonical value');
}

// --- -webkit-text-emphasis → text-emphasis (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-text-emphasis', 'inherit');
  assertEq(s.getPropertyValue('text-emphasis-style'), 'inherit', '-webkit-text-emphasis: alias expands via text-emphasis to text-emphasis-style');
  const s2 = fresh();
  s2.setProperty('text-emphasis', 'inherit');
  assertEq(s2.getPropertyValue('-webkit-text-emphasis').includes('inherit'), true, '-webkit-text-emphasis: reading alias returns composed value');
}

// --- -webkit-text-emphasis-color → text-emphasis-color (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-text-emphasis-color', 'red');
  assertEq(s.getPropertyValue('text-emphasis-color'), 'red', '-webkit-text-emphasis-color: alias sets canonical text-emphasis-color');
  const s2 = fresh();
  s2.setProperty('text-emphasis-color', 'red');
  assertEq(s2.getPropertyValue('-webkit-text-emphasis-color'), 'red', '-webkit-text-emphasis-color: reading alias returns canonical value');
}

// --- -webkit-text-emphasis-position → text-emphasis-position (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-text-emphasis-position', 'initial');
  assertEq(s.getPropertyValue('text-emphasis-position'), 'initial', '-webkit-text-emphasis-position: alias sets canonical text-emphasis-position');
  const s2 = fresh();
  s2.setProperty('text-emphasis-position', 'initial');
  assertEq(s2.getPropertyValue('-webkit-text-emphasis-position'), 'initial', '-webkit-text-emphasis-position: reading alias returns canonical value');
}

// --- -webkit-text-emphasis-style → text-emphasis-style (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-text-emphasis-style', 'initial');
  assertEq(s.getPropertyValue('text-emphasis-style'), 'initial', '-webkit-text-emphasis-style: alias sets canonical text-emphasis-style');
  const s2 = fresh();
  s2.setProperty('text-emphasis-style', 'initial');
  assertEq(s2.getPropertyValue('-webkit-text-emphasis-style'), 'initial', '-webkit-text-emphasis-style: reading alias returns canonical value');
}

// --- -webkit-text-size-adjust → text-size-adjust (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-text-size-adjust', 'none');
  assertEq(s.getPropertyValue('text-size-adjust'), 'none', '-webkit-text-size-adjust: alias sets canonical text-size-adjust');
  const s2 = fresh();
  s2.setProperty('text-size-adjust', 'none');
  assertEq(s2.getPropertyValue('-webkit-text-size-adjust'), 'none', '-webkit-text-size-adjust: reading alias returns canonical value');
}

// --- -webkit-transform → transform (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-transform', 'none');
  assertEq(s.getPropertyValue('transform'), 'none', '-webkit-transform: alias sets canonical transform');
  const s2 = fresh();
  s2.setProperty('transform', 'none');
  assertEq(s2.getPropertyValue('-webkit-transform'), 'none', '-webkit-transform: reading alias returns canonical value');
}

// --- -webkit-transform-origin → transform-origin (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-transform-origin', 'initial');
  assertEq(s.getPropertyValue('transform-origin'), 'initial', '-webkit-transform-origin: alias sets canonical transform-origin');
  const s2 = fresh();
  s2.setProperty('transform-origin', 'initial');
  assertEq(s2.getPropertyValue('-webkit-transform-origin'), 'initial', '-webkit-transform-origin: reading alias returns canonical value');
}

// --- -webkit-transform-style → transform-style (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-transform-style', 'flat');
  assertEq(s.getPropertyValue('transform-style'), 'flat', '-webkit-transform-style: alias sets canonical transform-style');
  const s2 = fresh();
  s2.setProperty('transform-style', 'flat');
  assertEq(s2.getPropertyValue('-webkit-transform-style'), 'flat', '-webkit-transform-style: reading alias returns canonical value');
}

// --- -webkit-transition → transition (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-transition', 'inherit');
  assertEq(s.getPropertyValue('transition-property'), 'inherit', '-webkit-transition: alias expands via transition to transition-property');
  const s2 = fresh();
  s2.setProperty('transition', 'inherit');
  assertEq(s2.getPropertyValue('-webkit-transition').includes('inherit'), true, '-webkit-transition: reading alias returns composed value');
}

// --- -webkit-transition-delay → transition-delay (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-transition-delay', '1s');
  assertEq(s.getPropertyValue('transition-delay'), '1s', '-webkit-transition-delay: alias sets canonical transition-delay');
  const s2 = fresh();
  s2.setProperty('transition-delay', '1s');
  assertEq(s2.getPropertyValue('-webkit-transition-delay'), '1s', '-webkit-transition-delay: reading alias returns canonical value');
}

// --- -webkit-transition-duration → transition-duration (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-transition-duration', '1s');
  assertEq(s.getPropertyValue('transition-duration'), '1s', '-webkit-transition-duration: alias sets canonical transition-duration');
  const s2 = fresh();
  s2.setProperty('transition-duration', '1s');
  assertEq(s2.getPropertyValue('-webkit-transition-duration'), '1s', '-webkit-transition-duration: reading alias returns canonical value');
}

// --- -webkit-transition-property → transition-property (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-transition-property', 'none');
  assertEq(s.getPropertyValue('transition-property'), 'none', '-webkit-transition-property: alias sets canonical transition-property');
  const s2 = fresh();
  s2.setProperty('transition-property', 'none');
  assertEq(s2.getPropertyValue('-webkit-transition-property'), 'none', '-webkit-transition-property: reading alias returns canonical value');
}

// --- -webkit-transition-timing-function → transition-timing-function (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-transition-timing-function', 'linear');
  assertEq(s.getPropertyValue('transition-timing-function'), 'linear', '-webkit-transition-timing-function: alias sets canonical transition-timing-function');
  const s2 = fresh();
  s2.setProperty('transition-timing-function', 'linear');
  assertEq(s2.getPropertyValue('-webkit-transition-timing-function'), 'linear', '-webkit-transition-timing-function: reading alias returns canonical value');
}

// --- -webkit-user-select → user-select (alias) ---
{
  const s = fresh();
  s.setProperty('-webkit-user-select', 'auto');
  assertEq(s.getPropertyValue('user-select'), 'auto', '-webkit-user-select: alias sets canonical user-select');
  const s2 = fresh();
  s2.setProperty('user-select', 'auto');
  assertEq(s2.getPropertyValue('-webkit-user-select'), 'auto', '-webkit-user-select: reading alias returns canonical value');
}

// --- word-wrap → overflow-wrap (alias) ---
{
  const s = fresh();
  s.setProperty('word-wrap', 'normal');
  assertEq(s.getPropertyValue('overflow-wrap'), 'normal', 'word-wrap: alias sets canonical overflow-wrap');
  const s2 = fresh();
  s2.setProperty('overflow-wrap', 'normal');
  assertEq(s2.getPropertyValue('word-wrap'), 'normal', 'word-wrap: reading alias returns canonical value');
}

// --- grid-column-gap → column-gap (alias) ---
{
  const s = fresh();
  s.setProperty('grid-column-gap', '10px');
  assertEq(s.getPropertyValue('column-gap'), '10px', 'grid-column-gap: alias sets canonical column-gap');
  const s2 = fresh();
  s2.setProperty('column-gap', '10px');
  assertEq(s2.getPropertyValue('grid-column-gap'), '10px', 'grid-column-gap: reading alias returns canonical value');
}

// --- grid-row-gap → row-gap (alias) ---
{
  const s = fresh();
  s.setProperty('grid-row-gap', '10px');
  assertEq(s.getPropertyValue('row-gap'), '10px', 'grid-row-gap: alias sets canonical row-gap');
  const s2 = fresh();
  s2.setProperty('row-gap', '10px');
  assertEq(s2.getPropertyValue('grid-row-gap'), '10px', 'grid-row-gap: reading alias returns canonical value');
}

// --- grid-gap → gap (alias) ---
{
  const s = fresh();
  s.setProperty('grid-gap', 'inherit');
  assertEq(s.getPropertyValue('row-gap'), 'inherit', 'grid-gap: alias expands via gap to row-gap');
  const s2 = fresh();
  s2.setProperty('gap', 'inherit');
  assertEq(s2.getPropertyValue('grid-gap').includes('inherit'), true, 'grid-gap: reading alias returns composed value');
}

// ============ RESULTS ============
console.log('');
console.log('='.repeat(60));
console.log(`Per-property tests: ${passed} passed, ${failed} failed, ${passed + failed} total`);
if (failed > 0) {
  console.log('');
  console.log('Failures:');
  for (const f of failures) console.log(`  ✗ ${f}`);
}
console.log('='.repeat(60));
process.exit(failed > 0 ? 1 : 0);
