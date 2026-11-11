/**
 * 3D Scroll Zoom Transitions Configuration
 *
 * Customize any parameter here without touching the React components
 * or GSAP animation implementation.
 */
export const SCROLL_ZOOM_CONFIG = {
  // CSS 3D Perspective applied to the viewport container
  perspective: "1200px",

  // Outgoing Section (Current section scaling down and retreating into depth)
  outgoing: {
    scale: 0.75,         // Scaled down factor (1 -> 0.75)
    translateZ: -250,    // Depth push back in pixels (0 -> -250px)
    opacity: 0.35,       // Fading factor (1 -> 0.35)
    blur: 2,             // Subtle backdrop defocus blur in pixels (optional cinematic touch)
  },

  // Incoming Section (Next section emerging from behind and stepping into the foreground)
  incoming: {
    startScale: 0.75,    // Initial scale when behind (0.75 -> 1)
    startTranslateZ: -250, // Initial depth when behind (-250px -> 0)
    startOpacity: 0.35,  // Initial opacity (0.35 -> 1)
    endScale: 1,
    endTranslateZ: 0,
    endOpacity: 1,
  },

  // Scroll distance per transition (in pixels or viewport height units)
  // Higher value = longer scroll needed between panels
  scrollDistancePerTransition: 1.25, // Multiplier of viewport height

  // Scrub smoothness (seconds of lag/smoothing when scrolling)
  // 1 = smooth 1s catchup, true = instant direct 1:1 binding
  scrub: 1,

  // Mobile / Small Screen Behavior:
  // When window width is below mobileBreakpoint, we reduce excessive depth to preserve readability & performance
  mobileBreakpoint: 768,
  mobile: {
    perspective: "800px",
    outgoing: {
      scale: 0.88,
      translateZ: -120,
      opacity: 0.45,
    },
    incoming: {
      startScale: 0.88,
      startTranslateZ: -120,
      startOpacity: 0.45,
    },
    scrollDistanceMultiplier: 1.0,
  },
};

