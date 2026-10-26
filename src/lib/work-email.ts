/**
 * Early access is for organisations, so personal and disposable mailbox
 * providers are refused. Anything else (a company's own domain) is accepted.
 * Shared by the form (instant feedback) and the API route (enforcement).
 */

export const WORK_EMAIL_MESSAGE = "Please use your work email address.";

// Personal mailbox providers, matched on the exact domain or any subdomain.
const PERSONAL_DOMAINS = [
  "gmail.com", "googlemail.com",
  "outlook.com", "hotmail.com", "live.com", "msn.com", "passport.com",
  "yahoo.com", "ymail.com", "rocketmail.com",
  "icloud.com", "me.com", "mac.com",
  "aol.com", "aim.com",
  "proton.me", "protonmail.com", "protonmail.ch", "pm.me",
  "tutanota.com", "tutanota.de", "tuta.io", "tuta.com",
  "zoho.com", "zohomail.com",
  "gmx.com", "gmx.net", "gmx.de", "gmx.at", "gmx.ch", "web.de",
  "mail.com", "email.com", "usa.com",
  "yandex.com", "yandex.ru", "ya.ru", "mail.ru", "bk.ru", "inbox.ru", "list.ru", "rambler.ru",
  "qq.com", "163.com", "126.com", "sina.com", "foxmail.com", "naver.com", "daum.net",
  "hey.com", "fastmail.com", "fastmail.fm", "hushmail.com", "mailfence.com", "posteo.de",
  "duck.com", "skiff.com", "startmail.com",
  "orange.fr", "free.fr", "laposte.net", "libero.it", "virgilio.it", "t-online.de",
  "btinternet.com", "sky.com", "comcast.net", "verizon.net", "att.net", "sbcglobal.net",
];

// Disposable / temporary inbox services.
const DISPOSABLE_DOMAINS = [
  "mailinator.com", "guerrillamail.com", "guerrillamail.net", "sharklasers.com",
  "10minutemail.com", "temp-mail.org", "tempmail.com", "tempmailo.com", "tempail.com",
  "yopmail.com", "trashmail.com", "getnada.com", "nada.email", "dispostable.com",
  "maildrop.cc", "mailnesia.com", "throwawaymail.com", "fakeinbox.com", "mintemail.com",
  "emailondeck.com", "moakt.com", "mohmal.com", "burnermail.io", "spamgourmet.com",
];

const BLOCKED = new Set([...PERSONAL_DOMAINS, ...DISPOSABLE_DOMAINS]);

// Country variants of the big providers, e.g. yahoo.co.uk, hotmail.fr, outlook.com.br.
const PROVIDER_COUNTRY_VARIANT =
  /^(?:[a-z0-9-]+\.)*(?:yahoo|hotmail|outlook|live|windowslive|gmx|yandex|aol|libero)\.(?:[a-z]{2}|com?\.[a-z]{2})$/;

export function emailDomain(email: string): string {
  return email.trim().toLowerCase().split("@").pop() ?? "";
}

export function isWorkEmail(email: string): boolean {
  const domain = emailDomain(email);
  if (!domain) return false;
  if (PROVIDER_COUNTRY_VARIANT.test(domain)) return false;
  // Check the domain and each parent, so "mail.yahoo.com" is caught too.
  const labels = domain.split(".");
  for (let i = 0; i < labels.length - 1; i++) {
    if (BLOCKED.has(labels.slice(i).join("."))) return false;
  }
  return true;
}
