var config = {
  email: {},
};

config.urlreal = "https://valerestan.johncastiblanco.lat";

config.puerto = 3001;
/* config.db = 'ibero09'; */

config.bd = "BackendBit"; //nombre bd mongo
config.bdUser = "adminBit";
config.bdPass = "admin123";
config.bdIp = "64.23.244.169"; //ip mongo
config.bdPort = "27017";

config.email.host = "smtp.gmail.com";
config.email.port = 587;
config.email.user = "contactotecnosmartplus@gmail.com";
config.email.pass = "bszxzottwogzwoqy";

config.listablanca = [
  "http://localhost:4200",
  "http://localhost:9876",
  "http://localhost:3001",
  undefined,
  "https://valerestan.johncastiblanco.lat",
];

module.exports.config = config;
