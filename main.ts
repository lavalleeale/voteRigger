import { vote } from "./vote";

(async () => {
  var last = "";
  for (let i = 0; i < 100; i++) {
    const resp = (await vote())!;
    if (resp === last) {
      console.log(resp, last, resp === last);
      break;
    } else {
      last = resp;
    }
  }
})();
