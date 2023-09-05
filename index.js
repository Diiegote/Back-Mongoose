const app = require("./src/server");
const { PORT } = require("./src/config/envs");

app.listen(PORT, () => {
   console.log(`🚀 server listening on ${PORT}`);
})