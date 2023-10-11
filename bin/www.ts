import http from "http";
import app from "../src/app";
import config from "../config/server";

function main() {
    try {
        const port = config.port;
        app.set("port", port);
        const server = http.createServer(app);
        server.listen(port, () => console.log(`Server started on port: ${port}`));
        server.on("error", (err) => {
            console.log(err);
        });
    } catch (error) {
        console.log(error);
    }
}

main();