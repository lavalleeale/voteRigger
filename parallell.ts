import { getKey, vote } from "./vote";

(async () => {
  const n = await getKey();
  for (let i = 0; i < 26; i++) {
    (async () => {
      vote(n, i === 0);
    })();
  }
})();
