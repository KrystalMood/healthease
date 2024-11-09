export const TruncateText = (text: string, max_length: number) => {
  if (text.length > max_length) return text.substring(0, max_length) + "...";
  return text;
};