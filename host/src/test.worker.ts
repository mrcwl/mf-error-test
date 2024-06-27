onmessage = async (event) => {
  const list = event.data as number[];

  postMessage(list.map(x => x + 1));
};
