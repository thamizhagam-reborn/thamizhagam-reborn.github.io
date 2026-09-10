"use client";

import { useState } from "react";

const ruleCategories = [
  {
    title: "SERVER RP RULES",
    content: `Section 1: Core Roleplay Standards
1.1 Stay In Character
Speaking OOC (Out Of Character) inside the city is not tolerated. Civilians are always expected to remain in character. Do not break immersion unless it is absolutely necessary for technical reasons.

1.2 Realism is a Must
All actions must be character-driven and based on real-life logic. Unrealistic roleplay sequences and character names are not allowed. Jumping into deep water during a chase to reset, intentionally dying to avoid arrest, or using unrealistic mechanics to win a situation is strictly prohibited.

1.3 Basic Requirements
You must have a working microphone to communicate, as roleplay heavily focuses on voice interaction. Special RP without a mic is only allowed if it is of extremely high quality, but the /me command shall not be used to communicate constantly.

1.4 Respectful Environment
Treat all players with respect inside and outside of roleplay. Harassment, bullying, discrimination, toxic behavior, derogatory language, and personal attacks are strictly prohibited. Disrespecting server staff in any manner will result in severe consequences.

Section 2: Character Integrity and Development
2.1 Separate Character Stories
Each character must have its own separate storyline, personality, and knowledge. Multiple characters will not be considered as brothers or sisters(In Some Places). Sharing knowledge between your characters is considered character breaking.

2.2 No Mixing of Assets
You are not allowed to mix character information, money, or assets from one character to another to gain an advantage. Strict server action will be taken for character breaking.

2.3 Identity and Appearance
Every civilian character must have a proper identity. Cosmetic changes such as beard trimming, hairstyle changes, or hair dye are allowed at everytime. Your FiveM name must align with your Discord name or in-game character name.

Section 3: Life, Death, and Fear
3.1 Fear RP
Fear RP is mandatory inside the city, just like in real life. If someone is pointing a gun at you or threatening you with lethal harm, you must surrender or comply with their demands to survive. Playing a vigilante or showing no fear for your life, regardless of whether you are a government officer or a don, is considered Fail RP.

3.2 Value Your Life (VYL)
Act realistically in dangerous situations. Your character should value their life and respond appropriately when faced with life-threatening scenarios.

3.3 New Life Rule (NLR)
If your character is unconscious and has received severe injuries that cannot be saved, such as burning or drowning, you will not have the memory of your death. When a new life starts, your character forgets the events leading up to their death. However, you remain the same character with the same job, gang, and friends. You cannot return to the ongoing RP scenario after respawning or being revived.

3.4 Torture RP
Torture RP is a sensitive topic. While generally allowed, you must seek the consent of the other individual before proceeding. It is highly advisable to include a staff member to ensure the situation does not go out of hand.

Section 4: Violence and Combat
4.1 No Random Deathmatch (RDM)
Do not attack, injure, or kill another player without a valid roleplay reason. Killing someone, even a friend, without proper RP context will be considered RDM.

4.2 No Vehicle Deathmatch (VDM) and Car Deathmatch (CDM)
Using vehicles to intentionally injure or kill players without a valid RP reason is strictly prohibited. CDM, such as using your vehicle to pit or demolish another vehicle without an RP reason, is also banned. If an accident occurs due to lag, do not argue about it in the city. Instead, roleplay through the situation.

4.3 No Combat Logging
Disconnecting from the server to escape, avoid an active RP scenario, or avoid consequences is strictly prohibited. Logging in to stop an RP using OOC information, rage quitting, or switching to a second character after a dead scenario without proper injured RP is not allowed. Simply shooting and quitting the server will result in a ban.

4.4 Combat Rules
You must give clear visual or audio clues before starting unexpected gunfights, unless weapons are already drawn. Suppressive fire must be logical. You may not shoot to instantly kill unless the scene has properly escalated. Tasers cannot be used in active gunfight zones.

Section 5: Crime and Law Enforcement
5.1 Cop Baiting
Wantedly triggering the police department is not allowed. Creating fake traffic incidents, driving recklessly near officers to force a chase, or intentionally pitting police cars to get a reaction is considered cop baiting. Killing an officer and loitering at the scene to create more conflict is unrealistic and prohibited.

5.2 Interacting with Law Enforcement
Police interactions must be treated seriously. Show respect during traffic stops, follow lawful instructions, and respond realistically when questioned or arrested. During a normal police stop, your vehicle or person will not be searched unless you flee, escalate, or create reasonable suspicion. Civilians must not steal PD, EMS, or government vehicles.

5.3 Kidnapping Rules
You must stay in character when being kidnapped and cooperate realistically, even if you know the person OOC. Resistance without a proper reason is considered Fail RP. You cannot use your phone or radio after it has been taken. Kidnappers must wear a mask and possess handcuffs, rope, or restraint items. You cannot drag, cuff, or escort someone while you are the driver of a vehicle.

5.4 Robbery Rules
They must not be done solely for loot or money. If police witness you taking a hostage, you must handle the situation properly before rushing to trigger a robbery.

Section 6: Communication and Metagaming
6.1 No Metagaming
Using OOC information that your character would not realistically know to change or influence ongoing roleplay is prohibited. Watching streams, using Discord, or using third-party communication systems to spread in-game information is metagaming.

6.2 No Third-Party Communication
Using third-party applications like Discord to pass information while playing in the city is strictly forbidden and will result in severe punishment. Third-party voice tools are only allowed if explicitly permitted by staff.

6.3 No Powergaming
Using or abusing in-game mechanics in favor of yourself to gain a personal advantage is powergaming. Examples include hiding in lockable enclosures, forcing another player to accept an action without allowing them to respond, or pointing a gun and demanding they unlock storage areas.

6.4 Proper /me Usage
Use the /me command to describe actions, expressions, or interactions that cannot be shown through game mechanics, such as "/me checks the person's pulse". You must respond realistically to valid /me interactions. Do not use /me for actions already supported by game mechanics or to force unrealistic outcomes.

6.5 Keep OOC Out of IC
Do not hide OOC references inside in-character dialogue. Calling your Twitch stream a bodycam, referring to Discord as a radio, or making cryptic comments about admins breaks immersion and damages the IC/OOC boundary.

Section 7: Safe Zones and Event Zones
7.1 Designated Safe Zones
Safe zones are strictly protected areas where violence and crime are not allowed. These include:
Police Departments, Hospitals, All Business areas, Jail, Spawn locations, Main Garage.

7.2 RP Zones and Events
In designated RP Zones, shootouts and taking civilians as hostages should not occur. These zones are created to encourage roleplay players. Violating safe zones during events such as marriages, races, or other organized events will lead to a heavy ban.

Section 8: Exploits and Technical Integrity
8.1 No Cheating
Use of any third-party tools, mods, or software to abuse game mechanics, alter damage multipliers, or gain aim assistance is strictly prohibited.

8.2 No Bug Exploiting
Finding bugs and exploiting them for personal benefit without reporting them to staff is a serious offense. Using loopholes to avoid consequences will result in a ban. You are expected to use common sense and consult the staff team if you are unsure about a mechanic.

Section 9: Reporting and Staff Authority
9.1 Do Not Police the Police (PTP) 
You are not Internal Affairs. If you believe an officer has broken a rule or abused their powers, do not argue in character or use OOC chat to threaten reports. Continue the scene properly, gather evidence, and submit a staff ticket.

9.2 Raising a Ticket
If you are personally affected by a major rule violation, you can raise an OOC ticket in Discord. You must provide the in-game name of the offender, a detailed explanation, and video proof. Tickets must be raised within 24 hours of the incident. Unnecessary OOC tickets will result in no action being taken.

9.3 Chain of Command
Always use the chain of command to resolve issues. Speak to a Ticket Support or Support Staff first before approaching Moderators or Admins. Once a ticket is raised, do not continue to argue about the problem inside the game or in OOC channels.

9.4 Staff Decisions
Follow all reasonable instructions from staff. Do not create public drama over moderation decisions. Use the proper support or appeal process. Rules apply to everyone, including staff, creators, partners, and regular members. Staff may take action against behavior that clearly harms the community, even if it is not explicitly listed here.`
  },
  {
    title: "REBORN CORE RULES",
    content: `1) BADWORDS & VERBAL ABUSE IS STRICTLY PROHIBITED
Badwords, verbal abuse, and disrespectful behaviour are not allowed.
1.1) Abuse towards Players, Staffs, Administrators, Management, or Female Characters is strictly prohibited.
1.2) Severe or repeated abuse may lead to a Permanent Ban.

2) RP SPOILING / RP DISTURBANCE IS STRICTLY PROHIBITED
Players must not intentionally or unnecessarily disturb another player's RP.
2.1) Intentionally spoiling or disturbing an ongoing RP scenario is banned.
2.2) Fake or invalid tickets made with the intention of targeting or disturbing another player are also banned.
2.3) Repeated violations may lead to a Permanent Ban.

3) SPECIAL ITEMS & EQUIPMENT IN PD SCENARIOS IS NOT ALLOWED.
Unauthorized special items, equipment, or abilities must not be used during PD scenarios.

4) RESPECT FEMALE CHARACTERS & PLAYERS
All Female Characters must be treated with proper respect.
4.1) Abuse, harassment, racism, or disrespect towards Female Characters or real female players is strictly prohibited.
4.2) Misusing the Female Character role or this rule to intentionally create problems or loopholes is also banned.

5) VENGEANCE / REVENGE RP IS STRICTLY PROHIBITED
Personal revenge must keep away.
5.1) Revenge RP based on previous incidents within TMRP or other servers is prohibited.
5.2) Vengeance against other communities, groups, or their members is strictly prohibited.

6) TROLLING & BULLYING IS NOT ALLOWED
6.1) Targeted trolling, bullying, provoking, or repeatedly disturbing other players is prohibited.
6.2) Any intentional attempt to damage the server's decorum, reputation, or community environment is also banned.

7) ADMINISTRATORS AND MANAGEMENT HAVE ONLY RIGHTS TO STOP OR RESTART ANY SCENARIOS
7.1) Authorized Administrators may restart or stop a problematic scenario when necessary.
7.2) Players must cooperate with administrative decisions during such situations.

8) BANS ARE DEPENDS ON THE SITUATIONS
8.1) Severity, intention, repetition, evidence, and impact will be considered when deciding the ban.

9) SERVER DEFAMATION IS STRICTLY PROHIBITED
Deliberately attempting to damage or falsely defame Thamizhagam Roleplay is strictly prohibited.

10) PLAY THE GAME - DON'T BE FRUSTRATED
10.1) Keep personal issues outside the city and treat RP as RP.
10.2) Respect others, enjoy the game, and help maintain a positive community.

GAME AH GAME AH PAARUNGA - Always Peace ✌️`
  },
  {
    title: "FEMALE CHARACTER RESPECT & RP CONDUCT",
    content: `⚖️ GENERAL STANDARD
All players are expected to maintain proper respect, discipline, and maturity while interacting with Female Characters. RP must remain within acceptable boundaries and must not make another player uncomfortable.

🚫 PROHIBITED CONDUCT
01. Sexual remarks, double-meaning jokes, suggestive comments, or inappropriate conversations towards Female Characters are strictly prohibited.
02. Harassment, stalking, unwanted following, intimidation, or repeatedly disturbing a Female Character is not allowed.
03. Vulgar, abusive, degrading, insulting, or disrespectful behaviour towards Female Characters is strictly prohibited.
04. No player may force, pressure, or manipulate another player into participating in unwanted or uncomfortable RP.
05. OOC behaviour, comments, or actions intended to embarrass, target, or make another player uncomfortable are prohibited.
06. Sexist behaviour, unwanted advances, humiliation, discrimination, or intentionally provoking Female Characters is strictly prohibited.

🛑 STAFF INTERVENTION
If an RP situation becomes inappropriate or problematic, Staff and Administration have the authority to intervene, stop, or restart the scenario when necessary.
Players must cooperate with staff instructions and must not escalate the situation.

⚠️ PUNISHMENTS
Punishments will be decided based on the severity, intention, evidence, and circumstances of the situation.
Possible actions include:
⚠️ Official Warning
🔇 Temporary Restriction
⛔ Temporary Ban
🚫 Long-Term Ban
🔨 Permanent Ban

Severe or repeated violations may result in immediate Permanent Ban.

❗ "JUST A JOKE" IS NOT AN EXCUSE
Calling something a joke does not make inappropriate behaviour acceptable. RP must respect personal boundaries and server standards at all times.`
  },
  {
    title: "DISCORD SERVER RULES",
    content: `1) Respect and Behavior
1.1 Respect Everyone - Treat members, staff, creators, and other communities with basic respect.
1.2 No Harassment or Personal Attacks - Insulting, mocking, threatening, bullying, or deliberately targeting another member is strictly prohibited.
1.3 No Hate Speech - Racism, sexism, hate speech, or any form of discrimination will not be tolerated.
1.4 No Unnecessary Toxicity - Do not provoke people, create drama, or intentionally turn small disagreements into larger conflicts.
1.5 No Ego or Attitude - Your role, rank, status, or experience does not give you the right to disrespect others.

2) Chat and Voice Channels
2.1 Use Channels Properly
2.2 No Text Spam
2.3 No Voice Chat Spam
2.4 No Mention Abuse

3) Content and Links
3.1 No Inappropriate Content
3.2 No Malicious Links
3.3 No Doxxing
3.4 Follow Discord Terms of Service

4) Community and Other Servers
4.1 Respect Other Communities
4.2 No Community Wars
4.3 No Targeted Trolling
4.4 No Revenge Content
4.5 Leave Outside Conflicts Outside

5) Streams, Videos, and Promotion
5.1 No Stream Trolling
5.2 No Toxic Montages
5.3 Clean Self-Promotion
5.4 Platform Compliance

6) Conflicts and Reports
6.1 No Public Drama
6.2 Staff Intervention
6.3 Do Not Retaliate
6.4 Proper Evidence
6.5 No False Reports

7) Staff and Moderation
7.1 Follow Instructions
7.2 Respect Staff
7.3 Use Proper Channels
7.4 Equality

8) Rule Enforcement
8.1 Punishments - Possible actions include Warning, Timeout, Kick, Temporary Ban, or Permanent Ban.
8.2 Serious Violations - May result in immediate punishment.
8.3 Repeat Offenders - May result in stronger punishment.
8.4 Spirit of the Rules - Staff may take action against behaviour that clearly harms the community.

9) Final Definition
This is just a game, so treat it as just a game. Your character may have enemies. Your group may have conflicts. Your roleplay may involve serious situations. But roleplay conflict should stay strictly within roleplay.
Respect the person behind the character.
Respect the community.
Respect the staffs.`
  },
  {
    title: "COMMUNITY RULES",
    content: `1) NO COMMUNITY VENGEANCE RP: Personal or community-level revenge against another community is strictly prohibited.
2) NO COMMUNITY GROUP FIGHTS: Communities must not organize or participate in fights against another community simply because of their community identity.
3) NO COMMUNITY STRENGTH-BASED DISCRIMINATION: Do not insult, target, or disrespect another community based on its size, member count, influence, popularity, or strength.
4) NO COMMUNITY RANKING: Do not create rankings such as strongest, weakest, top, or bottom communities.
5) NO COMMUNITY TARGETING: Do not deliberately target a player because of their community affiliation.
6) NO OOC COMMUNITY CONFLICT IN IC RP: Discord arguments, community disputes, or personal issues must never be brought into in-game RP.
7) NO COMMUNITY WAR: Community wars or organized conflicts are prohibited unless specifically approved as an official TMRP event.
8) NO COMMUNITY RAIDING: Do not gather members to mass-report, provoke, disrupt, or interfere with another community.
9) RESPECT OTHER COMMUNITIES: Every community and its members must be treated with basic respect.
10) MAINTAIN GOOD MANNERS: Communicate respectfully with other communities and their members.
11) RESPECT COMMUNITY DECISIONS: Respect decisions made by community representatives and TMRP Management.
12) INDIVIDUAL RP ≠ COMMUNITY RP: A conflict between two players remains between those players.
13) NO PERSONAL ATTACKS: Community disagreements must never turn into personal attacks, harassment, threats, or disrespect toward individuals.
14) MAINTAIN DISCIPLINE: Community members are expected to maintain proper discipline during RP.
15) KEEP COMMUNITY IDENTITY SEPARATE FROM CHARACTER IDENTITY: Your community affiliation must not dictate how your character treats every member of another community.
16) ACCEPT FAIR OUTCOMES: Respect the outcome of RP situations, competitions, and official decisions.
17) NO PROVOCATION AFTER RP: Once an RP situation is concluded, do not continue provoking, mocking, or targeting the other side through OOC communication.
18) OFFICIAL EVENTS ONLY: Community-versus-community competitions or special events may take place only when approved.
19) COOPERATE WITH MANAGEMENT: When Management intervenes, all involved parties must cooperate and follow instructions.
20) MANAGEMENT DECISION IS FINAL: If a situation becomes unclear or creates server-wide tension, Management may intervene, stop the situation, and determine the appropriate action.`
  }
];

export default function RulesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div id="rules" className="w-full max-w-5xl mx-auto py-24 px-4 sm:px-6 relative z-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-5xl font-[var(--font-cinzel)] font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 mb-4 tracking-wider drop-shadow-[0_0_10px_rgba(245,175,40,0.3)]">
          SERVER RULES
        </h2>
        <div className="h-[1px] w-24 mx-auto bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mb-6"></div>
        <p className="text-amber-100/60 font-sans text-sm sm:text-base max-w-2xl mx-auto">
          Please review our rules to ensure a safe, fun, and immersive roleplay experience for everyone in Thamizhagam Reborn.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {ruleCategories.map((category, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index}
              className="bg-black/60 backdrop-blur-md border border-amber-500/20 rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-amber-500/40"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-white/5 transition-colors focus:outline-none"
              >
                <h3 className="font-[var(--font-cinzel)] text-lg sm:text-xl font-bold text-amber-200 tracking-wide">
                  {category.title}
                </h3>
                <span className={`text-amber-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="p-5 sm:p-6 pt-0 text-white/70 font-sans text-sm sm:text-base whitespace-pre-wrap leading-relaxed border-t border-amber-500/10 mt-2">
                  {category.content}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
