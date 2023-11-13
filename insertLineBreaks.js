 // Function to insert line breaks in node text after a certain number of characters
 function insertLineBreaks(text, maxChars) {
    let words = text.split(' ');
    let lines = [];
    let currentLine = '';

    for (let i = 0; i < words.length; i++) {
      if (currentLine.length + words[i].length + 1 <= maxChars) {
        currentLine += words[i] + ' ';
      } else {
        lines.push(currentLine);
        currentLine = words[i] + ' ';
      }
    }

    if (currentLine.length > 0) {
      lines.push(currentLine);
    }

    return lines;
  }
