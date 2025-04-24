var usuariosController =
  require("./api/controladores/usuariosController.js").usuariosController;

app.post("/usuarios/registrar", function (request, response) {
  usuariosController.Registrar(request, response);
});
app.post("/usuarios/actualizar", function (request, response) {
  usuariosController.Actualizar(request, response);
});
app.post("/usuarios/borrar", function (request, response) {
  usuariosController.Borrar(request, response);
});
app.get("/usuarios/listarTodos", function (request, response) {
  usuariosController.ListarTodos(request, response);
});
app.post("/usuarios/listarUnico", function (request, response) {
  usuariosController.ListarUnico(request, response);
});
app.post("/usuarios/login", function (request, response) {
  usuariosController.Login(request, response);
});
app.get("/usuarios/activar/:email/:codigo", function (request, response) {
  usuariosController.Activar(request, response);
});

var productosController =
  require("./api/controladores/productosController.js").productosController;

app.post("/productos/guardar", function (request, response) {
  productosController.Guardar(request, response);
});
app.post("/productos/actualizar", function (request, response) {
  productosController.Actualizar(request, response);
});
app.post("/productos/borrar", function (request, response) {
  productosController.Borrar(request, response);
});
app.get("/productos/listarTodos", function (request, response) {
  productosController.ListarTodos(request, response);
});
app.post("/productos/listarId", function (request, response) {
  productosController.ListarId(request, response);
});

const serviciosController =
  require("./api/controladores/serviciosController.js").serviciosController;

app.post("/servicios/guardar", function (request, response) {
  productosController.Guardar(request, response);
});
app.post("/servicios/actualizar", function (request, response) {
  productosController.Actualizar(request, response);
});
app.post("/servicios/borrar", function (request, response) {
  productosController.Borrar(request, response);
});
app.get("/servicios/listarTodos", function (request, response) {
  productosController.ListarTodos(request, response);
});
app.post("/servicios/listarId", function (request, response) {
  productosController.ListarId(request, response);
});
