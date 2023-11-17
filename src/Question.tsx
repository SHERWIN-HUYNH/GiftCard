import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const QandA = [
  {
    key:1,
    question:"Are gift cards physical or digital?",
    answer:"Gift cards bought on Airbnb.com are digital only. However, physical gift cards are available at participating stores."
  },
  {
    key:2,
    question:"Where can I buy a physical gift card?",
    answer:"You can buy a physical gift card at participating Shoppers Drug Mart, Loblaws, and Walmart store locations"
  },
  {
    key:3,
    question:"What can gift cards be used for?",
    answer:"Gift cards can be used for any stay, Experience, or Online Experience on Airbnb."
  },
  {
    key:4,
    question:"Do gift cards expire?",
    answer:"Once a gift card has been added to your Airbnb account, the funds won’t expire."
  },
  {
    key:5,
    question:"Where are gift cards available?",
    answer:"Airbnb gift cards are available in many countries around the world. You can find the full list of available countries and applicable Gift Card Terms"
  },
  {
    key:6,
    question:"Can I send a gift card to someone who lives in a different country?",
    answer:"Gift cards purchased in Canada can only be redeemed by users who reside in Canada. The gift card recipient must also have a valid payment method in Canada. The gift card value can be spent on any stay or Experience around the world."
  },
  {
    key:7,
    question:"How can I check my gift card balance?",
    answer:"Once you redeem your card and add the funds from the card to your account, you can go to Payment methods in your Account and check your balance."
  },
  {
    key:8,
    question:"Which payment methods does Airbnb accept?",
    answer:"We currently accept major credit cards and Apple Pay for digital gift cards purchased on Airbnb."
  },


]
//<a href="#!" className="font-semibold text-black underline lg:text-base text-xs">Airbnb.com</a>
export default function Question() {
  return (
    <section>
        <div className="flex w-full sm:flex-row sm:justify-between flex-col items-center  justify-center gap-y-8">
          <div className="md:w-1/2 w-full flex flex-col items-start  md:items-start">
          <h1 className="sm:w-1/2 w-full lg:text-6xl  text-4xl font-semibold ">Corporate gift cards</h1>
          </div>
          <div className="md:w-1/2 w-full flex flex-col items-start  md:items-start">
              <p className="w-3/4 lg:text-3xl text-2xl md:text-left text-left mb-4">Give your customers and employees the gift of travel.</p>
              <a href="#!" className="font-semibold underline lg:text-2xl text-xl">Learn More</a>
          </div>
        </div>
        <hr className="my-20"/>
        <div className="flex w-full sm:flex-row sm:justify-between flex-col items-start  justify-center gap-y-8">
            <div className="md:w-1/2 w-full">
              <h1 className="md:w-1/2 w-full lg:text-6xl md:text-4xl text-3xl font-semibold">Frequently <br/>asked questions</h1>             
              <p className="w-3-4 lg:text-3xl text-xl md:text-left my-4">For other questions visit our  <a href="#!" className="inline-block font-semibold underline lg:text-2xl text-xl">help center</a></p>
            </div>
            <div className="md:w-1/2 w-full">
              {QandA.map(qa => <Accordion type="single" collapsible>
                  <AccordionItem value="item-1" key={qa.key}>
                    <AccordionTrigger className="lg:text-2xl text-base md:text-left font-normal text-center">{qa.question}</AccordionTrigger>
                    <AccordionContent className="lg:text-base text-xs text-[#717171]">
                        {qa.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>)}
            </div>
        </div>
     
      
    </section>
  )
}
