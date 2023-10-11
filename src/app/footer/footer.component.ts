import {Component, Input} from '@angular/core';
import {question} from "../model";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  questArray: question[] = [
    new question("What is Shopify and how does it work?", "Shopify is completely cloud-based and hosted, which means you don't have to worry about upgrading or " +
      "maintaining software or web servers. This gives you the flexibility to access " +
      "and run your business from almost anywhere, including your mobile device."),
    new question("How much does Shopify cost?","Try Shopify free for 3 days, no credit card required.\n" +
      "\n" +
      "After your trial expires, choose a pricing plan that suits the size and stage of your business."),
    new question("Can I use my own domain name with Shopify?", "Yes, you can use your own domain name with Shopify.\n" +
      "\n" +
      "If you have an existing domain name, you can connect it to Shopify from your store's admin.\n" +
      "\n" +
      "If you don't have a domain name yet, you can either buy one through Shopify or a third-party provider."),
    new question("Do I need to be a designer or developer to use Shopify?","If you need extra help, you can contact our support team, or visit the Shopify Expert Marketplace to search for and hire a certified Shopify " +
      "If you need extra help, you can contact our support team, or visit the Shopify Expert Marketplace to search for and hire a certified Shopify " +
      "expert.If you need extra help, you can contact our support team, or visit the Shopify Expert Marketplace to search for and hire a certified Shopify " +
      "expert.expert.")
  ]

}

