
const re = /.+\.(jpe?g|gif|png)$/ig;
export default function getFileType(filename) {
  const match = re.test(filename);
  if (match) return 'image';
  return 'file';
}

/**
 * Get mime type from the given filename
 * @param filename String
 */
export function getMime(filename) {
  return filename.split('.').pop();
}
