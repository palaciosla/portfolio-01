export const helpHTTP = () => {
  const customFetch = (endpoint, options) => {
    const defaultHeader = {
      accept: "application/json",
    };

    //Manejo de errores cuando el  endpoint no responde
    const controller = new AbortController();
    options.signal = controller.signal;

    options.method = options.method || "GET";
    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader;

    //Si hay body, lo pasamos a texto. Si no existe lo eliminamos ya que no se puede enviar un body falso o vacio
    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;

    // console.log(options);

    setTimeout(() => {
      controller.abort();
    }, 3000); // Si el servidor no contesta luego del tiempo indicado, se aborta la petición

    return fetch(endpoint, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              error: true,
              status: res.status || "00",
              statusText: res.statusText || "¡Ocurrió un error!",
            })
      )
      .catch((error) => error);
  };

  const get = (url, options = {}) => customFetch(url, options);

  const post = (url, options = {}) => {
    options.method = "POST";
    return customFetch(url, options);
  };

  const put = (url, options = {}) => {
    options.method = "PUT";
    return customFetch(url, options);
  };

  const del = (url, options = {}) => {
    options.method = "DELETE";
    return customFetch(url, options);
  };

  return {
    get,
    post,
    put,
    del,
  };
};
