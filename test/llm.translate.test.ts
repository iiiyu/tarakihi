import { test, expect } from "@jest/globals";
import { TranslateNews } from "~/_lib/llm/translate";
// const sum = require("./sum");
// import sum from "./sum";

// test("adds 1 + 2 to equal 3", () => {
//   expect(sum(1, 2)).toBe(3);
// });

test("translate news", async () => {
  const result = await TranslateNews({
    title: "Two critically injured in overnight shooting in South Auckland",
    content: `Two people are fighting for their lives in hospital after a shooting in South Auckland overnight.

    Police said they were called to Addington Ave, in Manurewa, about 3.20am.

    “Two males were found in a vehicle unresponsive,” a police spokesman said. They were taken to hospital with gunshot wounds.
    etective Inspector Karen Bright said police wanted witnesses of the shooting to come forward. Police had completed their scene examination and asked members of the public with information to contact 105 and reference file number 240101/2378.
    Public advised to avoid area

Police said there is no immediate risk to public safety. However, members of the public are being told to avoid the area.

Bright said police have closed off part of Addington Ave while they investigated the incident.

“Police are making inquiries into the incident.”

A Hato Hone St John spokeswoman confirmed they were also called to the scene at the same time. Three ambulances, two rapid response units and an operations manager responded to the incident, she said.
“Our ambulance officers treated and transported two patients in a critical condition to Auckland City Hospital.”

Several police - including armed staff - and police vehicles are on Addington Ave.

One Addington Ave resident said people had been partying and letting off fireworks on the street all evening.

“We didn’t hear anything because people were letting off flares in the street,” he said.

“The first we heard of what happened was waking up and seeing the crime scene outside your door”
Police carry out their work at the scene of an incident that left two people critically injured in Manurewa, South Auckland, just before 3.30am. Photo / Dean Purcell
A large section of the road has been closed off by authorities and a scene guard is in place this morning.

By 9.30am, police were still at the site and carrying out a scene investigation. A cordon also remains and several vehicles are within that cordon.

The investigation appears to be focused around two vehicles - a car and a van - in the middle of the road. Officers wearing jump suits, gloves and masks can be seen working around them.
Earlier, several ambulances were seen in the area and at least one armed officer was guarding the top of the street.

The circumstances are not entirely clear.
The incident came just a few hours after a person was critically injured at another incident on the Mt Roskill Summit, on Dominion Rd, shortly before 1am.

St John confirmed they responded to the scene and treated and took one person to Auckland City Hospital in a critical condition.

    `,
    originalLanguage: "English",
    targetLanguage: "Chinese",
  });
  expect(result).toBe({
    targetTitle: "",
    targetContent: "",
  });
});
