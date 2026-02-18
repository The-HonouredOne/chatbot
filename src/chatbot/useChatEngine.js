import { companyKnowledge } from "./companyKnowledge";

export const getCompanyReply = (message) => {
  const normalizedMessage = message.toLowerCase().trim();

  // Prevent unrelated queries
  if (
    normalizedMessage.includes("who won") ||
    normalizedMessage.includes("prime minister") ||
    normalizedMessage.includes("weather")
  ) {
    return "I can only answer questions related to Surendra Tech.";
  }

  for (let faq of companyKnowledge.faqs) {
    for (let keyword of faq.keywords) {
      if (normalizedMessage.includes(keyword)) {
        return faq.answer;
      }
    }
  }

  return "I'm here to help with questions about Surendra Tech. Please ask about our services, pricing, or support.";
};
