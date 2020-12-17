import { SnippetLanguage } from "./types";

const niceNameMap = {
  [SnippetLanguage.JAVASCRIPT]: "JavaScript",
  [SnippetLanguage.CSHARP]: "C#",
  [SnippetLanguage.PHP]: "PHP",
  [SnippetLanguage.RUBY]: "Ruby",
  [SnippetLanguage.PYTHON]: "Python",
  [SnippetLanguage.JAVA]: "Java",
  [SnippetLanguage.JSON]: "JSON",
  [SnippetLanguage.C]: "C",
  [SnippetLanguage.BASH]: "Bash",
  [SnippetLanguage.SHELL]: "Shell",
  [SnippetLanguage.GO]: "Go",
  [SnippetLanguage.GROOVY]: "Groovy",
};

const getLanguageNiceName = (language: SnippetLanguage): string => {
  if (language in niceNameMap) return niceNameMap[language];
  return language;
};

export { getLanguageNiceName };
