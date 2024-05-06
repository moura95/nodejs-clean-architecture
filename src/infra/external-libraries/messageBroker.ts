import { IMessageBroker } from "../../core/interfaces/IMessageBroker";

export class MessageBroker implements IMessageBroker {
  NotifyToPromotionService(product: unknown) {
    console.log("Calling message broker");
    return true;
  }
}
