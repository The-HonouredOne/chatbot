import Fuse from "fuse.js";
import { companyKnowledge } from "./companyKnowledge";

const fuse = new Fuse(companyKnowledge.faqs, {
  keys: ["keywords"],
  threshold: 0.4, // lower = stricter
});

export const getCompanyReply = (message) => {
  const results = fuse.search(message);

  if (results.length > 0) {
    return results[0].item.answer;
  }

  return "I can only answer questions related to Paarsiv Tech.";
};
