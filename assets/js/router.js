function createRouter(onRouteChange) {
  function normalize(hash) {
    const value = hash.replace(/^#/, "") || "/";
    return value.startsWith("/") ? value : `/${value}`;
  }

  function parse() {
    const [path, search = ""] = normalize(window.location.hash).split("?");
    return { path, params: new URLSearchParams(search) };
  }

  window.addEventListener("hashchange", () => onRouteChange(parse()));

  return {
    parse,
    navigate(path) {
      window.location.hash = path.startsWith("/") ? `#${path}` : `#/${path}`;
    },
    start(initialRoute) {
      if (!window.location.hash) {
        window.location.hash = `#${initialRoute || "/"}`;
      } else {
        onRouteChange(parse());
      }
    },
  };
}

window.StaticRouter = { createRouter };
