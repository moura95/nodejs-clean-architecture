import { IMailer } from "../interfaces/IMailer";

export class Mailer implements IMailer {
  SendEmail(to: string, product: unknown) {
    // send grid implementation
    console.log("sending email");
    return true;
  }
}
