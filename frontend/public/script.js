const msg01 = document.querySelector("#msg01");
const msg02 = document.querySelector("#msg02");

fetch("/api/config")
  .then((res) => {
    if (!res.ok) {
      throw new Error("Error al obtener la configuración");
    }
    return res.json();
  })
  .then((result) => {
    const path = result.pathServiceBackend1;
    fetch(path)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al obtener datos desde el backend");
        }
        return res.json();
      })
      .then((results) => {
        msg01.innerHTML = results.msg01;
        msg02.innerHTML = results.msg02;
      })
      .catch((error) => {
        console.error(error);
      });
  })
  .catch((error) => {
    console.error(error);
  });
