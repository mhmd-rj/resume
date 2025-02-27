// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
  });
  lerp : 0.05 ;
  // Listen for the scroll event and log the event data
  lenis.on('scroll', (e) => {
    console.log(e);
  });