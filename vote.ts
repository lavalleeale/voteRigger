export const getKey = async () => {
  const resp = await fetch(
    "https://poll.fm/n/ca7ce77f19d0974641e25834f3f6355b/13044951?1701975052213",
    {
      method: "GET",
    }
  );
  const text = await resp.text();
  return text.split("'")[1];
};

export const vote = async (n: string, print = true) => {
  const voteResp = await fetch(
    `https://polls.polldaddy.com/vote-js.php?p=13044951&b=0&a=58555337,&o=&va=16&cookie=0&tags=13044951-src:poll-embed&n=${n}&url=https%3A//highschool.si.com/national/2023/11/30/vote-which-is-the-best-high-school-mascot-in-washington%3Fbbeml%3Dtp-D9f41-1nL0qTAsUa6wCpPw.j3tmWxnxVgUSM_K9xZx7PLg.rdBgDL71uFkuLeNXkgeh3Cg.ldz0LiiDYb06B8R7mTI18yA`,
    {
      method: "GET",
    }
  );
  const voteRespText = await voteResp.text();
  const cwaMatch = voteRespText.match(/Charles .+? \(([\d,]+).+?\)/);
  const oakMatch = voteRespText.match(/Oakville .+? \(([\d,]+).+?\)/);

  if (cwaMatch) {
    if (print) {
      console.log(
        (parseInt(oakMatch![1].replaceAll(",", "")) -
          parseInt(cwaMatch[1].replaceAll(",", ""))) /
          (1702123200000 - Date.now()),
        parseInt(oakMatch![1].replaceAll(",", "")) -
          parseInt(cwaMatch[1].replaceAll(",", ""))
      );
    }
    return cwaMatch[1];
  } else {
    console.log(voteRespText);
  }
};
