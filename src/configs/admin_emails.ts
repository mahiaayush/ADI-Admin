const envs: any = process.env;

interface AdminEmails {
  EMAILS: string;
}

export const ADMIN_EMAILS: AdminEmails = Object.freeze({
  EMAILS: envs.ADMIN_EMAILS
});
