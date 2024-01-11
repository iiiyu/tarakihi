// import { StructuredOutputParser } from "langchain/output_parsers";

import { importQueue } from "~/_lib/queue/queue";
import { TranslateNews } from "~/_lib/llm/translate";

// const parser = StructuredOutputParser.fromNamesAndDescriptions({
//   originalTitle: "original title of the news article",
//   originalContent: "original content of the news article",
//   directTranslationTitle: "direct translation of the news article",
//   directTranslationContent: "direct translation of the news article",
//   identifiedIssues: "identified issues with the direct translation",
//   reinterpretedTranslatedTitle: "reinterpreted translated title of the news article",
//   reinterpretedTranslatedContent: "reinterpreted translated content of the news article",
// });

// console.log(parser.getFormatInstructions())


const counts = await importQueue.getJobCounts("active", "completed", "failed", "delayed", "paused", "waiting");
console.log(counts);
const completed = await importQueue.getJobs(['completed'], 0, 100, true);
console.log(completed);

console.log("Waiting for job...");
while (true) {

}



const result = await TranslateNews({
  title: "The best of the worst, weird, dangerous and frustrating streets in New Zealand",
  content: `Whether they’re weird, dangerous, confusing or just under maintained – people love to have a good old-fashioned moan about the roads.

  It’s a topic that unites Kiwis and is bound to come up at family gatherings and BBQs this summer.

  And that's because lots of us have faced bad drivers on winding and narrow roads, countless potholes, confusing roundabouts and other baffling road-related situations.

  If we’re being honest, many of them are not only difficult to navigate but quite frankly stupid.

  So here is a compilation of the best of the worst. And here is the link to the first, second and third lists if you want to catch up with the rest.
  1. The Auckland intersection with 55 different turning combinations
  You heard it right – Warkworth's Hill St intersection has 55 different turning combinations.

  The cluster of five intersections within 30 metres is one of the country's worst. It’s complicated and confusing and the community has been begging Waka Kotahi for a permanent fix for years.
  Transport designer Roger Williams, who previously spoke to the Transport Select Committee at Parliament, said it was "the worst, most difficult intersection I have ever seen."

  "On some legs you have to give way to five different directions at the same time. That level of confusion is really bad."

  A re-design has finally been proposed after decades of lobbying from the local community.
  2. Blenheim’s roundabout with a rail crossing in the middle

  Blenheim’s Main Street/State Highway 1 roundabout is a particularly complex roundabout of five roads with a railway line running through the middle.

  And yes, that’s as dodgy as it sounds.

  There have been reports of railway barrier arms regularly hit cars as drivers try to speed through the roundabout, and trains having to stop because cars didn’t make it across in time.
  3. Winding, narrow roads

  While many of New Zealand’s roads are difficult to navigate by design, they’re made worse by unsafe driving.

  Earlier this year, a video was posted anonymously online showing a campervan driving on the wrong side of a narrow and winding road outside of Dunedin.

  These types of hilly, windy, and narrow roads are not uncommon in New Zealand, and can be nerve-wracking – but even more so when you’re facing bad driver behaviour.

  The video was taken on the road between Aramoana and Port Chalmers, prompting warnings to those who lived locally about driving behaviour.

  The video shows the campervan repeatedly cross – and then stay – on the right-hand of the road, including when going around blind corners.
  4. Is Auckland’s Royal Oak roundabout the country’s worst?

  Cars enter the Royal Oak roundabout from five entrances and it’s a challenge for drivers attempting to pick their moment.

  The roundabout links Manukau Rd, Mt Smart Rd, Mt Albert Rd and Campbell Rd – and is one of those roundabouts where the volume of cars entering either makes you freeze, or forces you to put your foot down and race into a small gap in the traffic.

  Despite an upgrade at the end of 2021 that changed the roundabout's shape and replaced existing zebra crossings with raised speed tables, it’s still a scary fight for your life with too many cars coming from all directions.
  5. Potholes

  What feels like an increasing number of potholes is a national gripe.

  We’re all starting to get used to swerving and dodging them on both highways and local roads and then complaining profusely once at our destination.

  The problem is, they aren’t just annoying – they can be dangerous and cause damage.

  State Highway 5 between Napier and Taupō was amongst the roads where they were growing in size and number.

  Axel Alexander, a Hawke’s Bay-based truck driver, told Stuff earlier this year that some roads were in a shocking condition at present “and it’s really pure luck that a bad crash hasn’t been caused by someone swerving to miss one of these things”.

  He said there was a guy who lived at Te Haroto [about halfway between Napier and Taupō] who spent hours helping about 20 people change tyres one night.
  6. The one-way bridge that causes endless traffic queues in summer

  The Coromandel is a very popular holiday spot, especially for those of us living in the North Island.

  But the people who head there in summer are all too familiar with sitting in their boiling car as traffic inches closer to a one-way bridge on the outskirts of Tairua.

  The Pepe Stream Bridge, on State Highway 25, has been the talk of the town for over a decade with traffic lines easily stretching back 20km from the bridge come peak summer days.

  It was built in 1942 and traffic management on the bridge costs Waka Kotahi between $35,000 - $45,000 a year.

  It’s the topic of holiday-goer grumblings every year, despite Waka Kotahi's acknowledgement that it needs replacing, funding hasn’t yet been sourced.
  7. Tauranga’s new signalised roundabout

  Underneath Tauranga’s new Bayfair Flyover is a new two-lane signalised roundabout.

  Now, if you’re like me, you hadn’t heard of a roundabout with traffic lights. Apparently, it's as confusing as it sounds.

  Not only was this a foreign concept, it also featured “a maze” of pedestrian crossings that took you through the centre of the roundabout, one local said.

  “A simple, regular intersection with lights would have achieved the same without the confusion.”

  Pedestrians crossed over the roads just prior to where cars entered and exited the roundabout before crossing into the middle.

  “There’s so many lights that it’s possible to think you have a green light to go because you are looking ahead and miss the one right in front of you.”

  Waka Kotahi’s regional manager infrastructure delivery for Waikato/Bay of Plenty Jo Wilton noted that drivers needed to make sure they think ahead and chose the correct lane early.
  8. Wellington’s Basin Reserve roundabout

  How many of us have fought for our lives trying to swap lanes while attempting to head around the Basin Reserve?

  It’s a traffic choke point where cars, buses, electric scooters and e-bikes compete to get into one of the numerous lanes around the iconic cricket ground.

  It’s apparently the country's biggest and busiest signalised roundabout, and where large amounts of state highway traffic squeeze into a constrained (and somewhat confusing) road layout.

  It features two, three and four lanes depending on which part of the roundabout you find yourself, with three major entry and exit points and one major exit only route.

  It clogs up traffic heading to the CBD, Wellington Hospital, to the Eastern and Southern suburbs of Wellington and the airport.
  9. The Christchurch street that's now full of paint, bollards and planter boxes

  It's normally an unremarkable street in central Christchurch.

  But in the last two weeks it has morphed into something else entirely with paint, bollards, planter boxes, one-way routes... and chaos for a 10-week trial.

  Lit up by road cones, Gloucester St has been undergoing work for a “people-friendly” and “inviting” makeover since November 14.

  The narrower and slower (but also more frustrating) road will be the new normal for commuters both on foot and behind the wheel before a permanent decision in June, 2024.

  As work is carried out, commuters must navigate an awkward-looking one-way system, until a two-way lane and 10kph limit is implemented.
  10. The notorious SH29, SH1 intersection, near Cambridge

  There’s an intersection on the Hamilton, Piarere, side of the SH29 that is notoriously dangerous and is set for an upgrade to a roundabout.

  The current intersection, between Hamilton and Tauranga, is a T-junction that regularly backs up in peak afternoon periods.

  The intersection is a key connector for Auckland, Waikato and the Bay of Plenty but it's been called "one of the most dangerous intersections on New Zealand's roading network”.

  The issue is that it's difficult to turn right across traffic into SH1 from the giveway intersection (but given the large volumes of traffic and speed, you usually need to come to a complete stop).

  The speed limit drops from 100kph to 60kph past this area, but it's still tricky to turn into (and people love to at least partially ignore the speed drop).

  Between 2017 and 2021 there were 22 crashes, two deaths and three serious injuries.

  `,
  originalLanguage: "English",
  targetLanguage: "Chinese",
});

console.log(result);
