// eslint-disable-next-line @typescript-eslint/no-explicit-any
function clone(data: any) {
  return JSON.parse((JSON.stringify(data)));

}

export default clone;