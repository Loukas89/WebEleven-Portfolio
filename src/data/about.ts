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
        body: " Ονομάζομαι Λουκάς και είμαι 36 ετών. Απόφοιτος Πληροφορικής και μαθητής μεταπτυχιακού προγράμματος με θέμα την Τεχνητή Νοημοσύνη.",
        icon: "👋"
      },
      {
        title: "Σε 5 χρόνια",
        body: "Θα ήθελα να είμαι senior Full Stack | AI Engineer και να εμβαθύνω τις γνώσεις μου όσο το δυνατόν περισσοτερο.",
        icon: "🚀"
      },
      {
        title: "Τι μου άρεσε περισσότερο στη συνέντευξη",
        body: "Η συνομιλία μου με νέους ανθρώπους με εξειδίκευση στον τομέα και πλάνο. Επίσης η σιγουριά που εμπνέει ο λόγος τους.",
        icon: "✨"
      }
    ] as AboutCard[]
  },
  en: {
    cards: [
      {
        title: "Who I am",
        body: "My name is Loukas and I am 36 years old. I am a Computer Science graduate and a MSc student specializing in Artificial Intelligence.",
        icon: "👋"
      },
      {
        title: "In 5 years",
        body: "I would like to be a Senior Full Stack | AI Engineer and deepen my knowledge as much as possible.",
        icon: "🚀"
      },
      {
        title: "What I liked most about the interview",
        body: "My conversation with young professionals who have expertise in the field and a clear plan. I also liked the confidence their way of speaking inspires.",
        icon: "✨"
      }
    ] as AboutCard[]
  }
} as const;
