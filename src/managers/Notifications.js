module.exports.listen = (name, action) => {
  window.addEventListener(name, action);
}

module.exports.post = (name, params) => {
  window.dispatchEvent(new CustomEvent(name, {
    detail: params
  }));
}
