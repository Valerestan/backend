var serviciosModel = {};
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let serviciosSchema = new Schema({
  codigo: { type: Number, required: true },
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  descripcion: { type: String, required: true },
  foto: { type: String, required: true },
  cantidad: { type: Number, required: true },
  categoria: {
    type: String,
    required: true,
    enum: ["home", "productos", "tendencias", "coleccion"],
    default: "productos",
  },
});

const Mymodel = mongoose.model("servicios", serviciosSchema);

serviciosModel.Guardar = function (post, callback) {
  const instancia = new Mymodel();
  instancia.codigo = post.codigo;
  instancia.nombre = post.nombre;
  instancia.precio = post.precio;
  instancia.descripcion = post.descripcion;
  instancia.foto = post.foto;
  instancia.cantidad = post.cantidad;
  instancia.categoria = post.categoria;

  instancia
    .save()
    .then((respuesta) => {
      return callback({ state: true });
    })
    .catch((error) => {
      return callback({ state: false });
    });
};

serviciosModel.ListarTodos = function (filtro, callback) {
  // Si no mandan filtro, usamos {}
  Mymodel.find(filtro || {})
    .then((servicios) => callback(null, servicios))
    .catch((error) => callback(error));
};

serviciosModel.ListarId = function (post, callback) {
  Mymodel.find(
    { _id: post.id },
    {
      codigo: 1,
      nombre: 1,
      precio: 1,
      descripcion: 1,
      foto: 1,
      cantidad: 1,
      categoria: 1,
    }
  )
    .then((res) => {
      return callback(res);
    })
    .catch((err) => {
      console.log(err);
      return callback({ error: err });
    });
};

serviciosModel.Existe = function (post, callback) {
  Mymodel.findOne({ _id: post.id }, {})
    .then((respuesta) => {
      return callback(respuesta ? true : false);
    })
    .catch((error) => {
      console.log(error);
      return callback({ error: error });
    });
};

serviciosModel.Actualizar = function (post, callback) {
  Mymodel.findOneAndUpdate(
    { _id: post.id },
    {
      nombre: post.nombre,
      precio: post.precio,
      descripcion: post.descripcion,
      foto: post.foto,
      cantidad: post.cantidad,
      categoria: post.categoria,
    },

    { new: true }
  )
    .then((response) => {
      return callback({ state: true });
    })
    .catch((error) => {
      return callback({ state: false, error: error });
    });
};

serviciosModel.Borrar = function (post, callback) {
  Mymodel.findOneAndDelete({ _id: post.id })
    .then((respuesta) => {
      if (respuesta) {
        return callback({ state: true });
      } else {
        return callback({ state: false, mensaje: "Servicio no encontrado" });
      }
    })
    .catch((error) => {
      return callback({ state: false, error: error });
    });
};

module.exports.serviciosModel = serviciosModel;
