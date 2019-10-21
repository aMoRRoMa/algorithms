module.exports = (b, w, bc, wc, z) => {
  if (bc > wc && wc+z < bc) {
    return (b*wc) + (w*wc) + (b*z);
  }
  if (wc > bc && bc+z < wc) {
    return (b*bc) + (w*bc) + (w*z);
  }
  return b*bc + w*wc;
};
