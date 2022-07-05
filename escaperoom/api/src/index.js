import debug from "debug";
import { startApi } from "./api";

function main() {
    debug.enable("api,data");
    startApi();
}

main();
