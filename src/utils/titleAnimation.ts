export function animateTitle(baseTitle: string) {
  const padding = '          '; // 10 spaces for padding
  const fullTitle = `${baseTitle}${padding}`;
  let position = 0;
  
  return setInterval(() => {
    // Create sliding effect by taking a substring starting from current position
    let animatedTitle = fullTitle.substring(position);
    // Add the beginning part to create continuous loop
    if (position > 0) {
      animatedTitle += fullTitle.substring(0, position);
    }
    
    // Update position for next iteration
    position = (position + 1) % fullTitle.length;
    
    // Update document title
    document.title = animatedTitle;
  }, 250); // Adjust speed as needed
}