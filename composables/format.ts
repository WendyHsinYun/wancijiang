
export const formatContent = (content: string) => {
  let formattedContent = content.replace(/##(.*?)##/g, '<em>$1</em>');
  formattedContent = formattedContent.replace(/\n/g, '<br>');
  return formattedContent;
};

