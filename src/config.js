// Configuration file for easy customization
export const CONFIG = {
  // Personal Information
  recipientName: 'Aayush Kharel',
  recipientNickname: 'Fay',

  // Image URL (replace with your own)
  photoUrl: './aayush-homee.png',
 favoritePictures: [
    "/aayush-homee.png",
    "/aayush-homee.png",
    "/aayush-homee.png",
  ],
  // Letter Content
  letter: {
    greeting: 'My Dearest Fay,',
    paragraph1: `I’ve spent half a decade with you, and it suddenly hit me that I never really asked you to be my Valentine. Maybe this is the right time, or maybe this is the way it was meant to happen — waiting until my heart was completely sure. We’re in that phase of life where things feel quiet, sometimes boring, sometimes heavy. We’re busy fighting our own battles, getting tired, getting overwhelmed, and slowly building the lives and careers we dream of.`,
    paragraph2: `But I need you to remember this: we learned each other while loving each other, and that means everything to me. I truly believe the universe was our matchmaker — it kept bringing us back until we realized we were meant to stay. With you, love doesn’t feel loud or forced; it feels safe, calm, and true. You feel like home. So here I am, asking you from the deepest part of my heart ❤️ — will you be my Valentine?`,
  },

  // Celebration Messages
  celebration: {
    question: 'Will you be my Valentine?',
    subtitle: 'Make this February 14th the most special day by being mine...',
    successTitle: 'You made my day!',
    successMessage: "This Valentine's Day is going to be amazing! 💖",
    successSubtitle: `Thank you for making me the happiest person alive. 
      I can't wait to celebrate with you!`,
  },

  // Animation Timings (in milliseconds)
  timings: {
    envelopeOpenDelay: 0,
    envelopeOpenDuration: 3000,
    cardRevealDelay: 2000,
    pageTransitionDelay: 100,
  },

  // Colors (can override Tailwind colors)
  colors: {
    primary: '#DC143C',
    secondary: '#FFB6C1',
    accent: '#FFF8DC',
    dark: '#8B0000',
  },
};

export default CONFIG;
