/**
 * database64文件格式转换为2进制
 *
 * @param  {[String]} data dataURL 的格式为 “data:image/png;base64,****”,逗号之前都是一些说明性的文字，我们只需要逗号之后的就行了
 * @param  {[String]} type [description]
 * @return {[blob]}      [description]
 */
export default (data, type) => {
  let newData = data.split(',')[1];
  newData = window.atob(newData);
  const ia = new Uint8Array(newData.length);
  for (let i = 0; i < newData.length; i++) {
    ia[i] = newData.charCodeAt(i);
  }
  // canvas.toDataURL 返回的默认格式就是 image/png
  return new Blob([ia], {
    type,
  });
};
