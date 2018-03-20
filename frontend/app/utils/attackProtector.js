const hasSql = (value) => {
  if (value === null || value === undefined) {
    return false;
  }

  // sql regex reference: http://www.symantec.com/connect/articles/detection-sql-injection-and-cross-site-scripting-attacks
  const sqlMeta = new RegExp(/(%27)|(')|(--)|(%23)|(#)/i);
  if (sqlMeta.test(value)) {
    return true;
  }

  const sqlMeta2 = new RegExp(/((%3D)|(=))[^\n]*((%27)|(')|(--)|(%3B)|(;))/i);
  if (sqlMeta2.test(value)) {
    return true;
  }

  const sqlTypical = new RegExp(/w*((%27)|('))((%6F)|o|(%4F))((%72)|r|(%52))/i);
  if (sqlTypical.test(value)) {
    return true;
  }

  const sqlUnion = new RegExp(/((%27)|('))union/i);
  if (sqlUnion.test(value)) {
    return true;
  }

  return false;
};

const isInvalidText = (value) => [
  hasSql,
]
  .map((x) => x(value))
  .some((x) => x);

export default isInvalidText;
