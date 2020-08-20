export const ThemeVariants = {
  TWILIO: "Twilio",
  SIGNAL: "Twilio Signal",
  AHOY: "Ahoy",
  SENDGRID: "SendGrid",
} as const;

export type ThemeVariants = typeof ThemeVariants[keyof typeof ThemeVariants];
