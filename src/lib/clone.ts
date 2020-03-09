function clone<Q>(data: Q):Q {
  return JSON.parse(JSON.stringify(data));

}

export default clone;