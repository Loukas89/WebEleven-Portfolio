export type AboutCard = {
  title: string;
  body: string;
  icon?: string;
};

export const ABOUT = {
  el: {
    cards: [
      {
        title: "Ποιος είμαι",
        body: "Απόφοιτος Πληροφορικής, με έμφαση στο σύγχρονο web development και πειθαρχία στο UI/UX.",
        icon: "🧠"
      },
      {
        title: "Σε 5 χρόνια",
        body: "Να δουλεύω σε προϊόντα με αντίκτυπο ως full-stack engineer, συνδυάζοντας αισθητική και αρχιτεκτονική.",
        icon: "🚀"
      },
      {
        title: "Τι μου άρεσε περισσότερο",
        body: "Το να μετατρέπω απαιτήσεις σε καθαρές αποφάσεις: δομή, ιεραρχία, κίνηση και σαφήνεια.",
        icon: "✨"
      }
    ] as AboutCard[]
  },
  en: {
    cards: [
      {
        title: "Who I am",
        body: "Computer Science graduate, focused on modern web development with strong UI/UX discipline.",
        icon: "🧠"
      },
      {
        title: "In 5 years",
        body: "Building impactful products as a full-stack engineer, combining design sense with solid architecture.",
        icon: "🚀"
      },
      {
        title: "What I enjoyed most",
        body: "Turning requirements into clean interface decisions: structure, hierarchy, motion, clarity.",
        icon: "✨"
      }
    ] as AboutCard[]
  }
} as const;
