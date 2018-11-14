module.exports = function(
  lowerGate,
  lowerGateUnitless,
  upperGate,
  upperGateUnitless,
  minLineHeight,
  minLineHeightUnitles,
  maxLineHeight,
  maxLineHeightUnitless
) {
  return `calc(${minLineHeight} + (${maxLineHeightUnitless} -
    ${minLineHeightUnitles}) * ((100vw - ${lowerGate}) / (${upperGateUnitless} - ${lowerGateUnitless})))`;
};
