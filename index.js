const app = require("./app");

app.listen(app.get('port'), () => {
    console.log("servidor conectado al puerto:", app.get("port"));
});