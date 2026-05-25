const CHAPTERS = [
  { id: 1, title: "Licenses" },
  { id: 2, title: "Vehicles" },
  { id: 3, title: "Drivers" },
  { id: 4, title: "Roads" },
  { id: 5, title: "Risks" }
];

const QUESTIONS = [
  // ===== CHAPTER 1: LICENSES =====
  {
    id: 1,
    chapter: 1,
    topic: "Permits & Ages",
    question: "At what age can you apply for an instruction permit if you are enrolling in a driver training course?",
    choices: ["14", "15", "15 1/2", "16"],
    correctIndex: 1,
    explanation: "You can apply for your permit as early as 15 years old if enrolling in a driver training course."
  },
  {
    id: 2,
    chapter: 1,
    topic: "Permits & Ages",
    question: "If you are NOT enrolling in a driver training course, at what age can you take the knowledge exam?",
    choices: ["15", "15 1/2", "16", "18"],
    correctIndex: 1,
    explanation: "If not enrolling in a driver training course, you can take the knowledge exam after you turn 15 1/2."
  },
  {
    id: 3,
    chapter: 1,
    topic: "Permits & Ages",
    question: "How long is an instruction permit valid in Washington?",
    choices: ["6 months", "1 year", "2 years", "4 years"],
    correctIndex: 1,
    explanation: "Your instruction permit is valid for 1 year and can be renewed for a fee."
  },
  {
    id: 4,
    chapter: 1,
    topic: "Permits & Ages",
    question: "How long is your knowledge exam score valid?",
    choices: ["6 months", "1 year", "2 years", "5 years"],
    correctIndex: 2,
    explanation: "Your knowledge exam score is valid for 2 years. If you wait too long for the skills exam, you may need to retake it."
  },
  {
    id: 5,
    chapter: 1,
    topic: "Permits & Ages",
    question: "To get a driver license at ages 16-17, how long must you have held your instruction permit?",
    choices: ["3 months", "6 months", "9 months", "1 year"],
    correctIndex: 1,
    explanation: "You must have your instruction permit for at least 6 months before getting your license at ages 16-17."
  },
  {
    id: 6,
    chapter: 1,
    topic: "Permits & Ages",
    question: "How many hours of supervised driving are required for a 16-17 year old to get their license?",
    choices: ["30 hours day, 10 hours night", "40 hours day, 10 hours night", "50 hours day, 10 hours night", "40 hours day, 20 hours night"],
    correctIndex: 1,
    explanation: "You must complete at least 40 hours of day driving and 10 hours of night driving with a licensed driver who has 3+ years of experience."
  },
  {
    id: 7,
    chapter: 1,
    topic: "Permits & Ages",
    question: "How many years of driving experience must your supervising driver have when you practice with a permit (ages 16-17)?",
    choices: ["1 year", "2 years", "3 years", "5 years"],
    correctIndex: 2,
    explanation: "For ages 16-17, the supervising driver must have 3 or more years of experience."
  },
  {
    id: 8,
    chapter: 1,
    topic: "Permits & Ages",
    question: "For drivers 18+, how many years of experience must a supervising driver have?",
    choices: ["2 years", "3 years", "5 years", "No supervisor required"],
    correctIndex: 2,
    explanation: "Drivers 18+ practicing with a permit need a licensed driver with 5 or more years of experience."
  },
  {
    id: 9,
    chapter: 1,
    topic: "Intermediate Licenses",
    question: "During the first 6 months of an intermediate license, who can ride as passengers?",
    choices: ["Anyone", "Only immediate family members under 20", "Up to 3 passengers under 20", "No passengers at all"],
    correctIndex: 1,
    explanation: "For the first 6 months, no passengers under age 20 are allowed except immediate family members."
  },
  {
    id: 10,
    chapter: 1,
    topic: "Intermediate Licenses",
    question: "After 6 months with an intermediate license, how many passengers under 20 are allowed?",
    choices: ["None", "1", "3", "Unlimited"],
    correctIndex: 2,
    explanation: "After 6 months, no more than 3 passengers under age 20 are allowed except immediate family members."
  },
  {
    id: 11,
    chapter: 1,
    topic: "Intermediate Licenses",
    question: "What are the nighttime driving restrictions for the first 6 months of an intermediate license?",
    choices: ["No driving after 10 p.m.", "No driving between midnight and 5 a.m.", "No driving between 1 a.m. and 5 a.m.", "No nighttime restrictions"],
    correctIndex: 2,
    explanation: "Intermediate license holders cannot drive between 1 a.m. and 5 a.m. unless accompanied by a parent, guardian, or licensed driver at least age 25."
  },
  {
    id: 12,
    chapter: 1,
    topic: "Intermediate Licenses",
    question: "Can intermediate license holders use a cell phone while driving, even with hands-free technology?",
    choices: ["Yes, with hands-free only", "Yes, for GPS navigation only", "No, except to report an emergency", "No, under no circumstances"],
    correctIndex: 2,
    explanation: "Intermediate license holders cannot use cell phones or wireless devices while driving, even hands-free, except to report an emergency."
  },
  {
    id: 13,
    chapter: 1,
    topic: "Intermediate Licenses",
    question: "What happens after a second traffic violation with an intermediate license?",
    choices: ["A warning letter is sent", "License suspended for 6 months or until age 18", "License suspended until age 18", "A fine is issued"],
    correctIndex: 1,
    explanation: "After a second violation, the license is suspended for 6 months or until you turn 18, whichever comes first."
  },
  {
    id: 14,
    chapter: 1,
    topic: "DUI & BAC",
    question: "What is the legal BAC limit for drivers age 21 and older in Washington?",
    choices: ["0.02%", "0.05%", "0.08%", "0.10%"],
    correctIndex: 2,
    explanation: "For drivers 21 and older, a BAC of 0.08% or higher is considered DUI."
  },
  {
    id: 15,
    chapter: 1,
    topic: "DUI & BAC",
    question: "What is the legal BAC limit for drivers under 21 in Washington?",
    choices: ["0.00%", "0.02%", "0.05%", "0.08%"],
    correctIndex: 1,
    explanation: "Drivers under 21 face DUI consequences for a BAC of 0.02% or more."
  },
  {
    id: 16,
    chapter: 1,
    topic: "DUI & BAC",
    question: "What is the legal THC limit for drivers 21 and older?",
    choices: ["0 nanograms", "2 nanograms per mL", "5 nanograms per mL", "10 nanograms per mL"],
    correctIndex: 2,
    explanation: "For drivers 21+, more than 5 nanograms of active THC per milliliter of blood is considered DUI."
  },
  {
    id: 17,
    chapter: 1,
    topic: "DUI & BAC",
    question: "What is the THC limit for drivers under 21?",
    choices: ["0 nanograms (any detectable amount)", "2 nanograms per mL", "5 nanograms per mL", "Same as adults"],
    correctIndex: 0,
    explanation: "Drivers under 21 face consequences for anything more than 0 nanograms of active THC."
  },
  {
    id: 18,
    chapter: 1,
    topic: "DUI & BAC",
    question: "Under the Implied Consent Law, what happens if you refuse a BAC or THC test?",
    choices: ["Nothing, you have the right to refuse", "A fine of $500", "Loss of driving privilege for 90 to 730 days", "Automatic jail time"],
    correctIndex: 2,
    explanation: "Refusing a test can result in losing your driving privilege for 90 to 730 days, or until age 21, whichever is longer."
  },
  {
    id: 19,
    chapter: 1,
    topic: "DUI & BAC",
    question: "Where do alcohol- and drug-related offenses appear on your driving record?",
    choices: ["For 5 years", "For 7 years", "For 10 years", "For life"],
    correctIndex: 3,
    explanation: "Alcohol- and drug-related offenses appear on your driving record for life."
  },
  {
    id: 20,
    chapter: 1,
    topic: "Open Container",
    question: "Under Washington's open container law, where can open alcohol or cannabis products be transported?",
    choices: ["In the glove compartment", "Under the seat", "In the trunk or truck bed", "Anywhere in the vehicle"],
    correctIndex: 2,
    explanation: "Open alcohol and cannabis products can only be transported in a trunk or truck bed, not in storage compartments accessible to the driver."
  },
  {
    id: 21,
    chapter: 1,
    topic: "New Residents",
    question: "How many days do new Washington residents have to obtain a Washington driver license?",
    choices: ["10 days", "30 days", "60 days", "90 days"],
    correctIndex: 1,
    explanation: "New residents who are licensed in another state have 30 days to obtain a Washington State driver license."
  },
  {
    id: 22,
    chapter: 1,
    topic: "Residency",
    question: "Which of the following makes you a Washington resident?",
    choices: ["Visiting for more than 30 days", "Maintaining a residence in Washington for personal use", "Having a job in Washington", "Driving through Washington regularly"],
    correctIndex: 1,
    explanation: "You are a Washington resident if you maintain a residence in Washington for personal use, among other criteria."
  },
  {
    id: 23,
    chapter: 1,
    topic: "License Maintenance",
    question: "How far in advance can you renew your driver license before it expires?",
    choices: ["30 days", "6 months", "1 year", "2 years"],
    correctIndex: 2,
    explanation: "You can renew your license up to one year before it expires."
  },
  {
    id: 24,
    chapter: 1,
    topic: "License Maintenance",
    question: "If your license is 8 or more years expired, what must you do?",
    choices: ["Pay a late fee only", "Retake the knowledge exam only", "Retake both the skills and knowledge exams", "Apply for a new license as a first-time driver"],
    correctIndex: 2,
    explanation: "If your license is 8 or more years expired, you'll need to retake the skills and knowledge exams."
  },
  {
    id: 25,
    chapter: 1,
    topic: "License Maintenance",
    question: "How soon must you update your address after moving?",
    choices: ["5 days", "10 days", "30 days", "60 days"],
    correctIndex: 1,
    explanation: "If your address changes, update your information in License Express within 10 days."
  },
  {
    id: 26,
    chapter: 1,
    topic: "Exams",
    question: "After passing the knowledge exam, how long do you have to complete the skills exam?",
    choices: ["6 months", "1 year", "2 years", "No time limit"],
    correctIndex: 2,
    explanation: "After passing the knowledge exam, you have two years to complete the skills exam."
  },
  {
    id: 27,
    chapter: 1,
    topic: "Exams",
    question: "Who is allowed in the vehicle during the Driving Skills Exam?",
    choices: ["You, the examiner, and a parent", "You, the examiner, and an interpreter if needed", "You and the examiner only", "You, the examiner, and one passenger"],
    correctIndex: 1,
    explanation: "Only you and the examiner are allowed, with exceptions for service animals and sign language interpreters."
  },
  {
    id: 28,
    chapter: 1,
    topic: "Driver Training",
    question: "What is the minimum behind-the-wheel instruction required in a WA driver training course?",
    choices: ["4 hours", "6 hours", "8 hours", "10 hours"],
    correctIndex: 1,
    explanation: "A traffic safety course must include 30 hours of classroom and 6 hours of behind-the-wheel instruction."
  },
  {
    id: 29,
    chapter: 1,
    topic: "License Types",
    question: "What does REAL ID refer to?",
    choices: ["A specific type of ID card", "A law that sets security standards for IDs", "A federal ID program", "An enhanced driver license"],
    correctIndex: 1,
    explanation: "REAL ID is a law, not an actual piece of ID. It requires driver licenses and IDs to meet certain security standards."
  },
  {
    id: 30,
    chapter: 1,
    topic: "Intermediate Licenses",
    question: "When are intermediate driver license restrictions automatically lifted?",
    choices: ["After 1 year of safe driving", "When you turn 18", "When you pass a skills retest", "After completing a defensive driving course"],
    correctIndex: 1,
    explanation: "Intermediate driver license restrictions are automatically lifted when you turn 18. You don't need to get a new license."
  },
  {
    id: 31,
    chapter: 1,
    topic: "DUI & BAC",
    question: "Does DUI apply if you are in control of a parked vehicle?",
    choices: ["No, only if the vehicle is moving", "Yes, if you have the ability to control the vehicle's engine", "Only if the engine is running", "Only on public roads"],
    correctIndex: 1,
    explanation: "DUI applies to being in control of a vehicle, even if it's parked. If you can take control of the engine or operation, you are in physical control."
  },
  {
    id: 32,
    chapter: 1,
    topic: "License Maintenance",
    question: "How long is your temporary license valid after visiting a licensing office?",
    choices: ["15 days", "30 days", "45 days", "60 days"],
    correctIndex: 2,
    explanation: "Before leaving the office, you'll receive a temporary license that is good for 45 days. Your official license will be mailed."
  },
  {
    id: 33,
    chapter: 1,
    topic: "Permits & Ages",
    question: "To get your license at age 16-17, how long must you be violation-free before applying?",
    choices: ["3 months", "6 months", "1 year", "No requirement"],
    correctIndex: 1,
    explanation: "You must be without any traffic violations or convictions for 6 months prior to applying for the license."
  },
  {
    id: 34,
    chapter: 1,
    topic: "Agricultural Permits",
    question: "Is there a minimum age requirement for a juvenile agricultural permit?",
    choices: ["Yes, 14 years old", "Yes, 15 years old", "Yes, 16 years old", "No minimum age requirement"],
    correctIndex: 3,
    explanation: "There's no minimum age requirement for a juvenile agricultural permit."
  },
  {
    id: 35,
    chapter: 1,
    topic: "Voter Registration",
    question: "At what age can you pre-register to vote when applying for a driver license or ID card?",
    choices: ["14 and 15 years old", "16 and 17 years old", "18 years old only", "Any age"],
    correctIndex: 1,
    explanation: "Residents who are 16 and 17 years old can opt to pre-register to vote when applying for a driver license or ID card."
  },

  // ===== CHAPTER 2: VEHICLES =====
  {
    id: 36,
    chapter: 2,
    topic: "Insurance",
    question: "What is the minimum liability insurance coverage for bodily injury to one person in Washington?",
    choices: ["$10,000", "$15,000", "$25,000", "$50,000"],
    correctIndex: 2,
    explanation: "Washington requires at least $25,000 for bodily injury or death of one person in a collision."
  },
  {
    id: 37,
    chapter: 2,
    topic: "Insurance",
    question: "What is the minimum liability insurance for bodily injury to two or more persons?",
    choices: ["$25,000", "$50,000", "$75,000", "$100,000"],
    correctIndex: 1,
    explanation: "Washington requires at least $50,000 for bodily injury or death of two or more persons in any one collision."
  },
  {
    id: 38,
    chapter: 2,
    topic: "Insurance",
    question: "What is the minimum liability coverage for property damage?",
    choices: ["$5,000", "$10,000", "$15,000", "$25,000"],
    correctIndex: 1,
    explanation: "Washington requires at least $10,000 for injury to or destruction of property of others in any one collision."
  },
  {
    id: 39,
    chapter: 2,
    topic: "Tires",
    question: "What is the minimum legal tire tread depth in Washington?",
    choices: ["1/32 of an inch", "2/32 of an inch", "3/32 of an inch", "4/32 of an inch"],
    correctIndex: 1,
    explanation: "Tire tread shouldn't be less than 2/32 of an inch."
  },
  {
    id: 40,
    chapter: 2,
    topic: "Headlights",
    question: "When must you have your headlights on in Washington?",
    choices: ["Only at night", "A half hour after sunset to a half hour before sunrise", "From dusk to dawn", "Only when visibility is poor"],
    correctIndex: 1,
    explanation: "Washington law requires headlights from a half hour after sunset to a half hour before sunrise."
  },
  {
    id: 41,
    chapter: 2,
    topic: "Headlights",
    question: "When must you switch from high beams to regular headlights for an oncoming vehicle?",
    choices: ["200 feet away", "300 feet away", "500 feet away", "1000 feet away"],
    correctIndex: 2,
    explanation: "Switch to regular headlights when you are 500 feet in front of an oncoming vehicle."
  },
  {
    id: 42,
    chapter: 2,
    topic: "Headlights",
    question: "When must you switch from high beams to regular headlights when behind another vehicle?",
    choices: ["100 feet", "200 feet", "300 feet", "500 feet"],
    correctIndex: 2,
    explanation: "Switch back to regular headlights when you are 300 feet behind another vehicle."
  },
  {
    id: 43,
    chapter: 2,
    topic: "Signals",
    question: "How far before a turn must you signal?",
    choices: ["50 feet", "100 feet", "150 feet", "200 feet"],
    correctIndex: 1,
    explanation: "Signal 100 feet before you make your move."
  },
  {
    id: 44,
    chapter: 2,
    topic: "Signals",
    question: "What is the hand signal for a left turn?",
    choices: ["Left arm out, fingers pointing up", "Left arm out, fingers pointing down", "Left arm out, fingers pointing straight left", "Right arm out, fingers pointing left"],
    correctIndex: 2,
    explanation: "For a left turn, put your left arm out the window and point your fingers straight out to the left."
  },
  {
    id: 45,
    chapter: 2,
    topic: "Signals",
    question: "What is the hand signal for a right turn?",
    choices: ["Left arm out, fingers pointing up", "Left arm out, fingers pointing straight", "Right arm out, fingers pointing right", "Left arm out, fingers pointing down"],
    correctIndex: 0,
    explanation: "For a right turn, put your left arm out the window and bend your arm so your fingers point to the sky."
  },
  {
    id: 46,
    chapter: 2,
    topic: "Signals",
    question: "What is the hand signal for slowing down or stopping?",
    choices: ["Left arm out, fingers pointing up", "Left arm out, fingers pointing down", "Left arm out, fingers pointing straight", "Wave hand back and forth"],
    correctIndex: 1,
    explanation: "Put your left arm out the window and point your fingers to the ground to signal stopping or slowing."
  },
  {
    id: 47,
    chapter: 2,
    topic: "Brake Lights",
    question: "From how far away must your brake lights be visible?",
    choices: ["50 feet", "100 feet", "200 feet", "300 feet"],
    correctIndex: 1,
    explanation: "Brake lights must be clearly visible from 100 feet away."
  },
  {
    id: 48,
    chapter: 2,
    topic: "Seat Belts",
    question: "How far should your chest be from the steering wheel?",
    choices: ["6 inches", "8 inches", "10 inches", "12 inches"],
    correctIndex: 2,
    explanation: "Your chest should be at least 10 inches from the steering wheel to leave space for the airbag."
  },
  {
    id: 49,
    chapter: 2,
    topic: "Child Seats",
    question: "Until what age must children ride in a rear-facing car seat?",
    choices: ["1 year", "2 years", "3 years", "4 years"],
    correctIndex: 1,
    explanation: "Children up to age 2 must ride in a rear-facing car seat."
  },
  {
    id: 50,
    chapter: 2,
    topic: "Child Seats",
    question: "Children ages 2 to 4 must ride in what type of restraint?",
    choices: ["Rear-facing car seat only", "A car seat with a rear- or forward-facing harness", "A booster seat", "A regular seat belt"],
    correctIndex: 1,
    explanation: "Ages 2 to 4 must ride in a car seat with a rear- or forward-facing harness."
  },
  {
    id: 51,
    chapter: 2,
    topic: "Child Seats",
    question: "At what height can a child transition from a booster seat to a regular seat belt?",
    choices: ["4 feet", "4 feet 5 inches", "4 feet 9 inches", "5 feet"],
    correctIndex: 2,
    explanation: "Children must ride in a booster seat until the seat belts fit properly, typically at 4'9\"."
  },
  {
    id: 52,
    chapter: 2,
    topic: "Child Seats",
    question: "Why should children under 13 never ride in the front seat?",
    choices: ["It's harder to see traffic", "They could be injured by an airbag", "The seat belt doesn't fit properly", "They could distract the driver"],
    correctIndex: 1,
    explanation: "Children under 13 should never ride in the front seat because they could be seriously injured or killed if an airbag deploys."
  },
  {
    id: 53,
    chapter: 2,
    topic: "Steering",
    question: "What is the recommended hand position on the steering wheel?",
    choices: ["10 and 2", "9 and 3", "8 and 4", "Both 9 and 3, or 10 and 2"],
    correctIndex: 3,
    explanation: "Hands should be at 9 and 3 or 10 and 2 on the steering wheel for best control."
  },
  {
    id: 54,
    chapter: 2,
    topic: "Steering",
    question: "Which steering method reduces the chance of airbag injury to arms and hands?",
    choices: ["Hand-over-hand steering", "Hand-to-hand (pull/push) steering", "One-hand steering", "Palm steering"],
    correctIndex: 1,
    explanation: "Hand-to-hand steering keeps hands from crossing over the wheel, reducing injury risk if the airbag deploys."
  },
  {
    id: 55,
    chapter: 2,
    topic: "Steering",
    question: "When is one-hand steering recommended?",
    choices: ["On the highway", "When backing up or operating vehicle controls", "In heavy traffic", "During rain"],
    correctIndex: 1,
    explanation: "One-hand steering is used when backing or operating vehicle controls that require reaching from the steering wheel."
  },
  {
    id: 56,
    chapter: 2,
    topic: "Braking",
    question: "Does an Antilock Brake System (ABS) shorten your stopping distance?",
    choices: ["Yes, significantly", "Yes, slightly", "No, but it allows better steering control", "No, it increases stopping distance"],
    correctIndex: 2,
    explanation: "ABS does not shorten stopping distance but allows you to maintain better steering control during emergency braking."
  },
  {
    id: 57,
    chapter: 2,
    topic: "Blind Zones",
    question: "How can you tell if you are in a large vehicle's blind zone?",
    choices: ["The vehicle is within 50 feet", "You cannot see their mirrors", "The vehicle has its turn signal on", "The vehicle is changing lanes"],
    correctIndex: 1,
    explanation: "If you can't see their mirrors, the driver can't see you."
  },
  {
    id: 58,
    chapter: 2,
    topic: "Vehicle Reference Points",
    question: "When stopped at an intersection, where should the stop line be relative to your vehicle?",
    choices: ["Under your front bumper", "Under your side mirror", "3 feet ahead of your vehicle", "At the front of your hood"],
    correctIndex: 1,
    explanation: "Stopping when the stop line is under your side mirror means you are about 3 to 6 inches from the line."
  },
  {
    id: 59,
    chapter: 2,
    topic: "Vehicle Maintenance",
    question: "Where can you find the proper tire inflation pressure for your vehicle?",
    choices: ["On the tire sidewall", "On the Tire and Loading Information label on the driver's side door edge", "On the dashboard", "In the glove compartment"],
    correctIndex: 1,
    explanation: "The proper inflation pressure can be found on the Tire and Loading Information label on the driver's side door edge or in your owner's manual."
  },
  {
    id: 60,
    chapter: 2,
    topic: "Seat Belts",
    question: "Where should the headrest be positioned?",
    choices: ["At the base of your skull", "Even with your ears", "At the top of your head", "At shoulder level"],
    correctIndex: 1,
    explanation: "Protect yourself from whiplash by making sure the headrest is even with your ears."
  },
  {
    id: 61,
    chapter: 2,
    topic: "Vehicle Registration",
    question: "How many days do new residents have to register their vehicle?",
    choices: ["10 days", "15 days", "30 days", "60 days"],
    correctIndex: 2,
    explanation: "New residents have 30 days to complete their vehicle registration."
  },
  {
    id: 62,
    chapter: 2,
    topic: "Report of Sale",
    question: "How soon must you file a Vehicle Report of Sale after selling your vehicle?",
    choices: ["Immediately", "5 days", "10 days", "30 days"],
    correctIndex: 1,
    explanation: "If you sell, trade, gift, or dispose of your vehicle, file a Vehicle Report of Sale within 5 days."
  },
  {
    id: 63,
    chapter: 2,
    topic: "Report of Sale",
    question: "How soon must a purchaser transfer vehicle ownership to avoid penalty fees?",
    choices: ["5 days", "10 days", "15 days", "30 days"],
    correctIndex: 2,
    explanation: "The purchaser must bring the signed title to a licensing office to transfer ownership within 15 days to avoid penalty fees."
  },
  {
    id: 64,
    chapter: 2,
    topic: "License Plates",
    question: "Is it legal to cover any part of your license plate with a frame?",
    choices: ["Yes, as long as the state name is visible", "Yes, frames are always allowed", "No, it's illegal to cover letters, numbers, or tabs", "Yes, if the plate is still readable"],
    correctIndex: 2,
    explanation: "You can have a license plate frame, but it's illegal to cover the letters, numbers, or tabs on the plate."
  },
  {
    id: 65,
    chapter: 2,
    topic: "Balanced Weight",
    question: "What is 'pitch' in vehicle dynamics?",
    choices: ["Side-to-side movement", "Forward and backward weight shift", "Spinning motion", "Vertical bouncing"],
    correctIndex: 1,
    explanation: "Pitch is the forward and backward weight shift. When you accelerate, weight shifts to the back; when braking, it shifts forward."
  },
  {
    id: 66,
    chapter: 2,
    topic: "Balanced Weight",
    question: "What is 'roll' in vehicle dynamics?",
    choices: ["Forward and backward motion", "Side-to-side weight transfer", "Spinning on the vehicle's axis", "Up and down bouncing"],
    correctIndex: 1,
    explanation: "Roll is the side-to-side motion. When turning left, centrifugal force transfers weight to the right side of the vehicle."
  },
  {
    id: 67,
    chapter: 2,
    topic: "Before Driving",
    question: "What should you check OUTSIDE your vehicle before driving?",
    choices: ["Only the tires", "Foreign objects in tires, broken glass, fluid leaks, children, pets", "Just the mirrors", "Only the headlights"],
    correctIndex: 1,
    explanation: "Check for foreign objects in tires, broken glass, fluid leaks, obstructions, children, pets, or weather-related obstacles."
  },
  {
    id: 68,
    chapter: 2,
    topic: "Vehicle Safety Technology",
    question: "What does Adaptive Cruise Control (ACC) do?",
    choices: ["Automatically parks the vehicle", "Maintains speed but adjusts based on distance to the vehicle ahead", "Monitors the driver for drowsiness", "Detects traffic signs"],
    correctIndex: 1,
    explanation: "ACC maintains a set speed but adjusts based on the distance to the vehicle in front, ensuring a safe following distance."
  },
  {
    id: 69,
    chapter: 2,
    topic: "Vehicle Safety Technology",
    question: "Do vehicle safety technologies replace the need for attentive driving?",
    choices: ["Yes, they handle most driving tasks", "Yes, in good weather conditions", "No, they assist but you are still fully responsible", "Only on highways"],
    correctIndex: 2,
    explanation: "Vehicle Safety Technology assists your driving habits but does not replace them. You are still fully responsible for vehicle operation."
  },

  // ===== CHAPTER 3: DRIVERS =====
  {
    id: 70,
    chapter: 3,
    topic: "Impaired Driving",
    question: "What is the most common impairing substance involved in impaired driving crashes?",
    choices: ["Cannabis", "Prescription drugs", "Alcohol", "Over-the-counter medications"],
    correctIndex: 2,
    explanation: "Alcohol is the most common impairing substance involved in impaired driving crashes."
  },
  {
    id: 71,
    chapter: 3,
    topic: "Impaired Driving",
    question: "Is it legal to drive after consuming cannabis if you are over 21?",
    choices: ["Yes, it's legal for those 21+", "Yes, in small amounts", "No, driving after consuming any cannabis is illegal for all ages", "Only if under 5 nanograms"],
    correctIndex: 2,
    explanation: "Driving after consuming any cannabis is illegal for all ages, regardless of recreational legality."
  },
  {
    id: 72,
    chapter: 3,
    topic: "Impaired Driving",
    question: "What is polydrug use?",
    choices: ["Using prescription drugs as directed", "Mixing or taking more than one type of drug", "Using over-the-counter medication", "Taking medication with food"],
    correctIndex: 1,
    explanation: "Polydrug use is mixing or taking more than one type of drug. It is the most common impairment involved in fatal crashes."
  },
  {
    id: 73,
    chapter: 3,
    topic: "Impaired Driving",
    question: "Warnings against 'operating heavy machinery' on medication labels include which activity?",
    choices: ["Using a lawnmower only", "Operating construction equipment only", "Driving a vehicle", "Using power tools only"],
    correctIndex: 2,
    explanation: "Warnings against 'operating heavy machinery' include driving a vehicle."
  },
  {
    id: 74,
    chapter: 3,
    topic: "Fatigue",
    question: "Which of the following is a sign of fatigue while driving?",
    choices: ["Feeling alert and focused", "Having difficulty focusing or not remembering the last few miles", "Driving slightly over the speed limit", "Checking mirrors frequently"],
    correctIndex: 1,
    explanation: "Having difficulty focusing or not remembering driving the last few miles is a sign of fatigue."
  },
  {
    id: 75,
    chapter: 3,
    topic: "Fatigue",
    question: "How long of a nap is recommended if you feel tired while driving?",
    choices: ["5 minutes", "10 minutes", "20 minutes", "1 hour"],
    correctIndex: 2,
    explanation: "If you're traveling alone and start to feel tired, pull off the road and take a 20-minute nap."
  },
  {
    id: 76,
    chapter: 3,
    topic: "Fatigue",
    question: "How often should you plan to stop during long trips?",
    choices: ["Every 50 miles or 1 hour", "Every 100 miles or 2 hours", "Every 200 miles or 3 hours", "Only when you feel tired"],
    correctIndex: 1,
    explanation: "Plan to stop about every 100 miles or 2 hours during long trips."
  },
  {
    id: 77,
    chapter: 3,
    topic: "Fatigue",
    question: "How many hours of sleep do most people need to stay alert for driving?",
    choices: ["4 to 5 hours", "5 to 6 hours", "7 to 9 hours", "10 to 12 hours"],
    correctIndex: 2,
    explanation: "Most people need 7 to 9 hours of sleep to stay alert."
  },
  {
    id: 78,
    chapter: 3,
    topic: "Aggressive Driving",
    question: "What is the legal distinction between aggressive driving and road rage?",
    choices: ["They are the same offense", "Aggressive driving is a traffic offense; road rage is a criminal offense", "Road rage is a traffic offense; aggressive driving is criminal", "Neither is a legal offense"],
    correctIndex: 1,
    explanation: "Aggressive driving is a traffic offense. Road rage is a criminal offense involving violent behavior."
  },
  {
    id: 79,
    chapter: 3,
    topic: "Road Rage",
    question: "If you are a victim of road rage, what should you do?",
    choices: ["Honk back and make hand gestures", "Speed up to get away", "Drive to an area with people and open businesses; call police if necessary", "Pull over and confront the driver"],
    correctIndex: 2,
    explanation: "Drive to an area with other people and open businesses if you feel followed or harassed. Call the police if necessary."
  },
  {
    id: 80,
    chapter: 3,
    topic: "Distracted Driving",
    question: "Under Washington law, can you hold an electronic device while driving?",
    choices: ["Yes, for calls only", "Yes, if stopped at a red light", "No, you cannot hold any electronic device while driving", "Yes, for GPS only"],
    correctIndex: 2,
    explanation: "You cannot hold any electronic device while driving in Washington, including cell phones, tablets, or gaming devices."
  },
  {
    id: 81,
    chapter: 3,
    topic: "Distracted Driving",
    question: "What happens after your first distracted driving violation?",
    choices: ["A warning is issued", "Fines can be doubled for subsequent violations", "Your license is suspended", "You must take a safety course"],
    correctIndex: 1,
    explanation: "Fines after your first distracted driving violation can be doubled."
  },
  {
    id: 82,
    chapter: 3,
    topic: "Hearing",
    question: "Is it legal to drive while wearing headphones that broadcast sound in both ears?",
    choices: ["Yes", "Yes, if the volume is low", "No, it is against the law", "Only on local roads"],
    correctIndex: 2,
    explanation: "It is against the law to drive while wearing earbuds, earphones, headphones, or headsets that broadcast sound or cancel noise."
  },
  {
    id: 83,
    chapter: 3,
    topic: "Hearing",
    question: "Can you use a hands-free device while driving?",
    choices: ["Yes, in both ears", "Yes, in one ear if it complies with WAC 204-10-045", "No, not at all", "Only for navigation"],
    correctIndex: 1,
    explanation: "You can use a hands-free device in one ear if it complies with Washington Administrative Code statute 204-10-045."
  },
  {
    id: 84,
    chapter: 3,
    topic: "Decision Making",
    question: "What does the 'O' in the OODA Loop stand for?",
    choices: ["Operate", "Observe", "Optimize", "Organize"],
    correctIndex: 1,
    explanation: "OODA stands for Observe, Orient, Decide, Act. It's a decision-making tool for reactive driving situations."
  },
  {
    id: 85,
    chapter: 3,
    topic: "Decision Making",
    question: "What are the four steps of the OODA Loop in order?",
    choices: ["Observe, Orient, Decide, Act", "Orient, Observe, Decide, Act", "Observe, Organize, Decide, Act", "Observe, Orient, Drive, Act"],
    correctIndex: 0,
    explanation: "The OODA Loop is: Observe the situation, Orient to understand it, Decide on the safest action, Act on your decision."
  },
  {
    id: 86,
    chapter: 3,
    topic: "Vision",
    question: "What should you do to avoid glare from oncoming headlights at night?",
    choices: ["Look directly at the headlights", "Close one eye", "Watch the right edge of the road as a steering guide", "Flash your high beams"],
    correctIndex: 2,
    explanation: "Avoid the glare of oncoming lights by watching the right edge of the road and using it as a steering guide."
  },
  {
    id: 87,
    chapter: 3,
    topic: "Smart Driving",
    question: "What does 'switching attention' mean while driving?",
    choices: ["Multitasking while driving", "Quickly switching your focus from one thing to another", "Ignoring distractions", "Focusing only on the road ahead"],
    correctIndex: 1,
    explanation: "Switching attention means quickly switching your focus from one thing to another while driving."
  },
  {
    id: 88,
    chapter: 3,
    topic: "Self-Evaluation",
    question: "Which of the following is a self-evaluation question to ask after driving?",
    choices: ["How fast was I going?", "Did anything surprise me?", "How many cars did I pass?", "What radio station was playing?"],
    correctIndex: 1,
    explanation: "Self-evaluation questions include: Did anything surprise me? Did I surprise anyone? Was my driving legal, proficient, and smooth?"
  },
  {
    id: 89,
    chapter: 3,
    topic: "Racing",
    question: "What are the penalties for street racing in Washington?",
    choices: ["A warning", "Fines only", "Fines, jail time, and possible vehicle impoundment", "Community service only"],
    correctIndex: 2,
    explanation: "Street racing penalties can include fines, jail time, and risk of having your vehicle impounded."
  },
  {
    id: 90,
    chapter: 3,
    topic: "Road Rage",
    question: "How should you report an in-progress road rage incident?",
    choices: ["Call the non-emergency police line", "Call 911 immediately", "File an online report", "Report it at the next police station"],
    correctIndex: 1,
    explanation: "Report in-progress road rage incidents immediately by calling 911."
  },
  {
    id: 91,
    chapter: 3,
    topic: "Environment",
    question: "Why is idling your engine harmful?",
    choices: ["It wastes gas only", "It can release harmful gases like carbon monoxide and adds pollution", "It damages the transmission", "It only matters in a garage"],
    correctIndex: 1,
    explanation: "Idling releases harmful gases like carbon monoxide, which can be lethal especially in a garage, and adds pollution to the air."
  },
  {
    id: 92,
    chapter: 3,
    topic: "Scanning",
    question: "Before turning, what should you check for besides vehicles?",
    choices: ["Road conditions only", "Bicyclists and pedestrians alongside you", "Traffic signs only", "The weather"],
    correctIndex: 1,
    explanation: "Before turning, check side mirrors and do an over-shoulder check for bicyclists or pedestrians who might be alongside you."
  },

  // ===== CHAPTER 4: ROADS =====
  {
    id: 93,
    chapter: 4,
    topic: "Pedestrians",
    question: "When must you wait for a pedestrian to completely cross the street?",
    choices: ["Always", "Only at marked crosswalks", "When the pedestrian is using a wheelchair, cane, guide dog, or service animal", "Never, just wait until they clear your lane"],
    correctIndex: 2,
    explanation: "If a pedestrian is using a wheelchair, cane, guide dog, or service animal, wait until they have completely crossed before continuing."
  },
  {
    id: 94,
    chapter: 4,
    topic: "Pedestrians",
    question: "For other pedestrians (without mobility aids), when can you proceed?",
    choices: ["As soon as they step onto the sidewalk", "When they have cleared your lane and one additional lane", "When they reach the center of the road", "When they wave you on"],
    correctIndex: 1,
    explanation: "Wait until the pedestrian has cleared your lane and one additional lane before proceeding."
  },
  {
    id: 95,
    chapter: 4,
    topic: "School Buses",
    question: "What must you do when a school bus has its red lights flashing and stop sign extended?",
    choices: ["Slow down and proceed with caution", "Stop only if children are visible", "Stop regardless of your direction of travel", "Stop only if you are behind the bus"],
    correctIndex: 2,
    explanation: "All drivers traveling in the same direction must stop. On a 2-lane road, vehicles in both directions must stop."
  },
  {
    id: 96,
    chapter: 4,
    topic: "School Buses",
    question: "When do you NOT need to stop for a school bus with flashing red lights?",
    choices: ["When you are on a one-way street", "When traveling opposite on a road with 3+ lanes separated by a median or barrier", "When there are no children visible", "When you are turning right"],
    correctIndex: 1,
    explanation: "Opposite-direction drivers don't need to stop if there are 3+ lanes and lanes are separated by a median or barrier."
  },
  {
    id: 97,
    chapter: 4,
    topic: "School Buses",
    question: "What is the penalty for passing a stopped school bus?",
    choices: ["A warning", "Normal traffic fine", "Double fines", "License suspension"],
    correctIndex: 2,
    explanation: "Fines are doubled for anyone who passes a stopped school bus."
  },
  {
    id: 98,
    chapter: 4,
    topic: "Bicycles",
    question: "How much space must you leave when driving behind a bicyclist?",
    choices: ["1 foot", "2 feet", "3 feet", "5 feet"],
    correctIndex: 2,
    explanation: "When driving behind a bicyclist, leave at least 3 feet of space."
  },
  {
    id: 99,
    chapter: 4,
    topic: "Bicycles",
    question: "Can you share a lane with a bicyclist?",
    choices: ["Yes, if the lane is wide enough", "Yes, if the bicyclist is to the right", "No, you cannot share a lane with a bicyclist", "Yes, if you leave 2 feet of space"],
    correctIndex: 2,
    explanation: "You cannot share a lane with a bicyclist. Bicyclists may legally use the full lane."
  },
  {
    id: 100,
    chapter: 4,
    topic: "Bicycles",
    question: "Are bicyclists in crosswalks considered pedestrians?",
    choices: ["No, they must follow vehicle rules", "Yes, you must yield to them in marked and unmarked crosswalks", "Only at marked crosswalks", "Only at intersections with signals"],
    correctIndex: 1,
    explanation: "Bicyclists in crosswalks are considered pedestrians. You must yield to them in both marked and unmarked crosswalks."
  },
  {
    id: 101,
    chapter: 4,
    topic: "Bicycles",
    question: "What is the 'Dutch Reach' method?",
    choices: ["A turning technique at roundabouts", "Opening the car door with the hand farthest from the door to check for bicyclists", "A hand signal for cyclists", "A braking technique"],
    correctIndex: 1,
    explanation: "The Dutch Reach forces your body to turn so you can see approaching bicyclists and prevents the door from opening too quickly."
  },
  {
    id: 102,
    chapter: 4,
    topic: "Trains",
    question: "How far from the nearest rail should you stop at a railroad crossing?",
    choices: ["5 to 25 feet", "15 to 50 feet", "25 to 75 feet", "50 to 100 feet"],
    correctIndex: 1,
    explanation: "Stop between 15 and 50 feet away from the nearest rail of a crossing."
  },
  {
    id: 103,
    chapter: 4,
    topic: "Trains",
    question: "Do trains always have the right-of-way?",
    choices: ["No, they must yield at crossings", "Only at crossings with gates", "Yes, always", "Only during the day"],
    correctIndex: 2,
    explanation: "Trains ALWAYS have the right-of-way. They are heavy and cannot stop quickly."
  },
  {
    id: 104,
    chapter: 4,
    topic: "Trains",
    question: "How far can it take a train to come to a full stop?",
    choices: ["500 feet", "1/4 mile", "1/2 mile", "Up to a mile"],
    correctIndex: 3,
    explanation: "It can take up to a mile for a train to come to a full stop."
  },
  {
    id: 105,
    chapter: 4,
    topic: "Trains",
    question: "What should you do if your vehicle gets stuck on railroad tracks?",
    choices: ["Try to restart the engine", "Stay in the vehicle and wait", "Get everyone out immediately", "Call your mechanic"],
    correctIndex: 2,
    explanation: "If your vehicle gets stuck at a crossing, get everyone out immediately."
  },
  {
    id: 106,
    chapter: 4,
    topic: "Motorcycles",
    question: "Can you move into the same lane alongside a motorcyclist?",
    choices: ["Yes, if the lane is wide enough", "Yes, if the motorcyclist is to one side", "No, never", "Yes, when passing"],
    correctIndex: 2,
    explanation: "Never move into the same lane alongside a motorcyclist, even if the lane is wide and they're riding far to one side."
  },
  {
    id: 107,
    chapter: 4,
    topic: "Emergency Vehicles",
    question: "What must you do when you see or hear an emergency vehicle with lights/sirens?",
    choices: ["Speed up to get out of the way", "Pull to the left and stop", "Pull to the right side of the road and stop", "Continue driving and let them pass"],
    correctIndex: 2,
    explanation: "Immediately pull your vehicle to the right side of the road and stop. Wait until the emergency vehicle has passed."
  },
  {
    id: 108,
    chapter: 4,
    topic: "Traffic Signals",
    question: "What should you do at a flashing red traffic light?",
    choices: ["Slow down and proceed", "Stop completely, then go when it's your turn", "Yield to oncoming traffic", "Treat it as a green light"],
    correctIndex: 1,
    explanation: "A flashing red traffic light functions as a stop sign. Come to a full stop, then go when it's your turn."
  },
  {
    id: 109,
    chapter: 4,
    topic: "Traffic Signals",
    question: "What does a flashing yellow light mean?",
    choices: ["Stop and wait", "Speed up to clear the intersection", "Same meaning as a yield sign", "The signal is broken"],
    correctIndex: 2,
    explanation: "A flashing yellow light has the same meaning as a yield sign. Proceed when you have the right-of-way."
  },
  {
    id: 110,
    chapter: 4,
    topic: "Traffic Signals",
    question: "Can you turn left on a red light in Washington?",
    choices: ["Never", "Yes, onto a one-way street after stopping", "Yes, at any intersection after stopping", "Only with a green arrow"],
    correctIndex: 1,
    explanation: "After a complete stop at a red light, you can turn left onto a one-way street if there's no 'no turn on red' sign."
  },
  {
    id: 111,
    chapter: 4,
    topic: "Traffic Signals",
    question: "Can you accelerate to beat a yellow light?",
    choices: ["Yes, if you can make it through safely", "Yes, but only if the speed limit is under 35 mph", "No, you cannot accelerate beyond the speed limit to enter or clear an intersection", "Yes, to avoid stopping suddenly"],
    correctIndex: 2,
    explanation: "You are not allowed to accelerate beyond the posted speed limit to enter or clear an intersection when the light is yellow."
  },
  {
    id: 112,
    chapter: 4,
    topic: "Traffic Signals",
    question: "What should you do if a traffic signal isn't working?",
    choices: ["Proceed with caution", "Treat it as a yield sign", "Treat it as a four-way stop", "Wait for someone else to go first"],
    correctIndex: 2,
    explanation: "If a traffic signal isn't working, treat the intersection like a four-way stop."
  },
  {
    id: 113,
    chapter: 4,
    topic: "Traffic Signals",
    question: "What does a green arrow indicate?",
    choices: ["Yield and proceed", "You have the right-of-way in that direction", "Caution, prepare to stop", "One-way traffic ahead"],
    correctIndex: 1,
    explanation: "A green arrow gives you the right-of-way to travel in that direction. No oncoming traffic or pedestrians should be crossing."
  },
  {
    id: 114,
    chapter: 4,
    topic: "Signs",
    question: "What color are construction and work zone warning signs?",
    choices: ["Yellow", "Orange", "Red", "Green"],
    correctIndex: 1,
    explanation: "Orange signs indicate construction and maintenance warnings."
  },
  {
    id: 115,
    chapter: 4,
    topic: "Signs",
    question: "What does a fluorescent yellow-green sign warn about?",
    choices: ["Construction ahead", "School, pedestrian, or bicycling activity", "Railroad crossing", "Slippery road"],
    correctIndex: 1,
    explanation: "Fluorescent yellow-green signs warn of school, pedestrian, and bicycling activity."
  },
  {
    id: 116,
    chapter: 4,
    topic: "Signs",
    question: "What do blue road signs indicate?",
    choices: ["Regulatory information", "Construction zones", "Motorist services guidance", "Recreation areas"],
    correctIndex: 2,
    explanation: "Blue signs indicate motorist services guidance, such as hospitals, rest areas, and gas stations."
  },
  {
    id: 117,
    chapter: 4,
    topic: "Signs",
    question: "What do brown road signs indicate?",
    choices: ["Motorist services", "Public recreation, cultural, and historical areas", "Speed limits", "Construction zones"],
    correctIndex: 1,
    explanation: "Brown signs identify public recreation, cultural, and historical areas."
  },
  {
    id: 118,
    chapter: 4,
    topic: "Right-of-Way",
    question: "At a four-way stop, if two vehicles arrive at the same time, who goes first?",
    choices: ["The vehicle on the left", "The vehicle on the right", "The larger vehicle", "The vehicle going straight"],
    correctIndex: 1,
    explanation: "If two vehicles arrive at approximately the same time, yield to the one on the right."
  },
  {
    id: 119,
    chapter: 4,
    topic: "Right-of-Way",
    question: "At a four-way stop, who has the right-of-way between a turning vehicle and one going straight?",
    choices: ["The turning vehicle", "The vehicle going straight or turning right", "They should alternate", "The vehicle that arrived first"],
    correctIndex: 1,
    explanation: "Any vehicle turning left must yield the right-of-way to vehicles going straight or turning right."
  },
  {
    id: 120,
    chapter: 4,
    topic: "Turning",
    question: "When turning at an intersection, which lane must you turn into?",
    choices: ["Any available lane", "The lane closest to the direction you are coming from", "The far lane", "The center lane"],
    correctIndex: 1,
    explanation: "State law requires you to turn into the lane closest to the direction you are coming from."
  },
  {
    id: 121,
    chapter: 4,
    topic: "Turning",
    question: "How far before a turn should you put on your turn signal?",
    choices: ["50 feet", "100 feet", "200 feet", "300 feet"],
    correctIndex: 1,
    explanation: "Put on your turn signal at least 100 feet before you turn."
  },
  {
    id: 122,
    chapter: 4,
    topic: "U-Turns",
    question: "Are U-turns generally allowed in Washington?",
    choices: ["No, they are always illegal", "Yes, unless a sign prohibits it", "Only at intersections with traffic lights", "Only on residential streets"],
    correctIndex: 1,
    explanation: "In Washington, U-turns are generally allowed unless a sign is posted telling you a U-turn is not allowed."
  },
  {
    id: 123,
    chapter: 4,
    topic: "Roundabouts",
    question: "What direction does traffic flow in a roundabout?",
    choices: ["Clockwise", "Counterclockwise", "Either direction", "Depends on the number of lanes"],
    correctIndex: 1,
    explanation: "Traffic in a roundabout flows counterclockwise around a raised center island."
  },
  {
    id: 124,
    chapter: 4,
    topic: "Roundabouts",
    question: "What is the recommended speed range for roundabouts?",
    choices: ["5 to 10 mph", "15 to 25 mph", "25 to 35 mph", "The posted speed limit"],
    correctIndex: 1,
    explanation: "Roundabouts are designed for speeds between 15 and 25 mph."
  },
  {
    id: 125,
    chapter: 4,
    topic: "Roundabouts",
    question: "Who has the right-of-way in a roundabout?",
    choices: ["Vehicles entering the roundabout", "Vehicles already in the roundabout", "The larger vehicle", "Vehicles on the right"],
    correctIndex: 1,
    explanation: "Yield to all traffic already in the roundabout since they have the right-of-way."
  },
  {
    id: 126,
    chapter: 4,
    topic: "Road Markings",
    question: "What do yellow lines on the road separate?",
    choices: ["Lanes going the same direction", "Traffic in opposite directions", "Bicycle lanes from traffic", "Parking areas"],
    correctIndex: 1,
    explanation: "Yellow lines separate traffic in opposite directions. White lines separate traffic moving in the same direction."
  },
  {
    id: 127,
    chapter: 4,
    topic: "Road Markings",
    question: "Can you cross a dashed white line?",
    choices: ["No, never", "Yes, if it is safe to change lanes", "Only in emergencies", "Only when turning"],
    correctIndex: 1,
    explanation: "A dashed white line between lanes means you can cross it to change lanes if it is safe."
  },
  {
    id: 128,
    chapter: 4,
    topic: "Road Markings",
    question: "Can you cross double solid white lines?",
    choices: ["Yes, if safe", "Yes, in emergencies only", "No, it is illegal", "Yes, when turning left"],
    correctIndex: 2,
    explanation: "Double solid white lines are a barrier between lanes. It's illegal to cross them."
  },
  {
    id: 129,
    chapter: 4,
    topic: "Road Markings",
    question: "What does a solid yellow line on your side of the road mean?",
    choices: ["You may pass if it's safe", "No passing zone — do not cross", "The road is ending", "Construction ahead"],
    correctIndex: 1,
    explanation: "A solid yellow line indicates a no-passing zone. Do not cross a solid yellow line to pass another vehicle."
  },
  {
    id: 130,
    chapter: 4,
    topic: "Road Markings",
    question: "If there is a dashed yellow line on your side and a solid yellow on the other, can you pass?",
    choices: ["No, never when yellow lines are present", "Yes, you may pass if it's safe", "Only if the other vehicle is going slowly", "Only on hills"],
    correctIndex: 1,
    explanation: "If the dashed line is on your side, you may pass if it's safe. If the solid line is on your side, you may not."
  },
  {
    id: 131,
    chapter: 4,
    topic: "Road Markings",
    question: "How far can you travel in a shared center turn lane?",
    choices: ["100 feet", "200 feet", "300 feet", "500 feet"],
    correctIndex: 2,
    explanation: "You shouldn't travel farther than 300 feet in a center turn lane."
  },
  {
    id: 132,
    chapter: 4,
    topic: "Road Markings",
    question: "Is every intersection legally a crosswalk?",
    choices: ["Only if marked", "Only at signalized intersections", "Yes, whether marked or unmarked", "Only in residential areas"],
    correctIndex: 2,
    explanation: "Every intersection is legally defined as a crosswalk regardless of whether a crosswalk marking is present."
  },
  {
    id: 133,
    chapter: 4,
    topic: "HOV Lanes",
    question: "What symbol identifies HOV lanes?",
    choices: ["A circle", "A diamond", "A triangle", "A square"],
    correctIndex: 1,
    explanation: "HOV lanes are identified by the diamond symbol on signs and pavement."
  },
  {
    id: 134,
    chapter: 4,
    topic: "HOV Lanes",
    question: "Can motorcycles use HOV lanes?",
    choices: ["No, only carpools", "Yes, motorcycles are allowed", "Only during off-peak hours", "Only with a passenger"],
    correctIndex: 1,
    explanation: "Motorcycles are allowed to use HOV lanes."
  },
  {
    id: 135,
    chapter: 4,
    topic: "Reversible Lanes",
    question: "What does a red X over a reversible lane mean?",
    choices: ["Proceed with caution", "You can use the lane", "You cannot use the lane", "The lane is ending"],
    correctIndex: 2,
    explanation: "A red X means you can't use the lane. A green arrow means you can."
  },
  {
    id: 136,
    chapter: 4,
    topic: "Reversible Lanes",
    question: "What does a steady yellow X over a lane mean?",
    choices: ["Speed up to exit the lane", "The lane is changing direction; move out safely", "The lane is reserved for buses", "Construction ahead"],
    correctIndex: 1,
    explanation: "A steady yellow X means the lane is changing direction. Move out of the lane as soon as it's safe."
  },
  {
    id: 137,
    chapter: 4,
    topic: "Parking",
    question: "How far from a fire hydrant must you park?",
    choices: ["5 feet", "10 feet", "15 feet", "20 feet"],
    correctIndex: 2,
    explanation: "Do not park within 15 feet of a fire hydrant."
  },
  {
    id: 138,
    chapter: 4,
    topic: "Parking",
    question: "How far from a traffic signal, stop sign, or yield sign must you park?",
    choices: ["15 feet", "20 feet", "30 feet", "50 feet"],
    correctIndex: 2,
    explanation: "Do not park within 30 feet of a traffic signal, stop sign, or yield sign."
  },
  {
    id: 139,
    chapter: 4,
    topic: "Parking",
    question: "How far from a driveway must you park?",
    choices: ["3 feet", "5 feet", "10 feet", "15 feet"],
    correctIndex: 1,
    explanation: "Do not park within 5 feet of a driveway, alley, or private road."
  },
  {
    id: 140,
    chapter: 4,
    topic: "Parking",
    question: "How far from a railroad crossing must you park?",
    choices: ["15 feet", "25 feet", "50 feet", "75 feet"],
    correctIndex: 2,
    explanation: "Do not park within 50 feet of a railroad crossing."
  },
  {
    id: 141,
    chapter: 4,
    topic: "Parking",
    question: "What is the maximum distance your vehicle can be from the curb when parking?",
    choices: ["6 inches", "12 inches", "18 inches", "24 inches"],
    correctIndex: 1,
    explanation: "You must park no more than 12 inches from the curb."
  },
  {
    id: 142,
    chapter: 4,
    topic: "Parking",
    question: "When parking uphill with a curb, which way should you turn your wheels?",
    choices: ["Toward the curb", "Away from the curb", "Straight ahead", "It doesn't matter"],
    correctIndex: 1,
    explanation: "On hills with tall curbs, turn your wheel away from the curb until the back of your front tire touches the curb."
  },
  {
    id: 143,
    chapter: 4,
    topic: "Parking",
    question: "When parking downhill with a curb, which way should you turn your wheels?",
    choices: ["Away from the curb", "Toward the curb", "Straight ahead", "To the right always"],
    correctIndex: 1,
    explanation: "Turn your steering wheel toward the curb when facing downhill, so your tire catches the curb if the vehicle rolls."
  },
  {
    id: 144,
    chapter: 4,
    topic: "Parking",
    question: "When parking on a hill with NO curb, which way should you turn your wheels?",
    choices: ["Toward the road", "Away from the road (toward the edge)", "Straight", "It depends on the direction"],
    correctIndex: 1,
    explanation: "With no curb, turn wheels and tires toward the edge of the road so the vehicle rolls away from traffic."
  },
  {
    id: 145,
    chapter: 4,
    topic: "Parking",
    question: "Is it legal to park in an electric vehicle charging station if your vehicle is not charging?",
    choices: ["Yes, for up to 30 minutes", "Yes, if the space is otherwise empty", "No, it is illegal", "Yes, if there are other open chargers"],
    correctIndex: 2,
    explanation: "It's illegal to park in any EV charging station if your vehicle is not connected to the charging equipment."
  },
  {
    id: 146,
    chapter: 4,
    topic: "Children & Animals",
    question: "At what age is it a crime to leave a child unattended in a parked vehicle?",
    choices: ["Under 8", "Under 10", "Under 12", "Under 16"],
    correctIndex: 2,
    explanation: "It's a crime to leave a child under age 12 unattended in a parked vehicle."
  },
  {
    id: 147,
    chapter: 4,
    topic: "Children & Animals",
    question: "At what age is it a crime to leave a child unattended in a running parked vehicle?",
    choices: ["Under 12", "Under 14", "Under 16", "Under 18"],
    correctIndex: 2,
    explanation: "It's a crime to leave a child under age 16 unattended in a parked vehicle while the motor is running."
  },
  {
    id: 148,
    chapter: 4,
    topic: "School Zones",
    question: "What is the speed limit in a school zone?",
    choices: ["15 mph", "20 mph", "25 mph", "30 mph"],
    correctIndex: 1,
    explanation: "The school zone speed limit is 20 mph."
  },
  {
    id: 149,
    chapter: 4,
    topic: "Work Zones",
    question: "What happens to fines for offenses committed in work zones when workers are present?",
    choices: ["They remain the same", "They double", "They triple", "They are waived"],
    correctIndex: 1,
    explanation: "Fines double for offenses committed while driving in construction areas when workers are present."
  },
  {
    id: 150,
    chapter: 4,
    topic: "Emergency Zones",
    question: "When you see a roadside response vehicle with flashing lights, what must you do?",
    choices: ["Slow to 20 mph", "Move over into a farther lane, or slow to at least 10 mph below the speed limit", "Stop completely", "Flash your hazard lights"],
    correctIndex: 1,
    explanation: "Move over into a farther lane, or slow down to at least 10 mph below the posted speed limit. Never exceed 50 mph in an emergency zone."
  },
  {
    id: 151,
    chapter: 4,
    topic: "Emergency Zones",
    question: "What is the maximum speed allowed in an emergency zone?",
    choices: ["25 mph", "35 mph", "45 mph", "50 mph"],
    correctIndex: 3,
    explanation: "Never drive faster than 50 mph in an emergency zone."
  },
  {
    id: 152,
    chapter: 4,
    topic: "Large Vehicles",
    question: "How far does it take a loaded truck traveling at 55 mph to stop completely?",
    choices: ["200 feet", "300 feet", "450 feet", "600 feet"],
    correctIndex: 2,
    explanation: "A loaded truck with properly adjusted brakes traveling at 55 mph takes 450 feet to come to a complete stop."
  },
  {
    id: 153,
    chapter: 4,
    topic: "Large Vehicles",
    question: "When merging in front of a large vehicle, when is it safe to move over?",
    choices: ["When you can see one headlight in your mirror", "When you can see both headlights in your rearview mirror", "When you are 5 car lengths ahead", "When the truck flashes its lights"],
    correctIndex: 1,
    explanation: "Wait until you can clearly see both headlights in your rearview mirror before merging in front of a large vehicle."
  },
  {
    id: 154,
    chapter: 4,
    topic: "Transit Buses",
    question: "Must you yield to a transit bus that has signaled and is pulling back onto the road?",
    choices: ["No, they must wait for a gap", "Yes, yield to transit buses pulling back onto the roadway", "Only on city streets", "Only if they have flashing lights"],
    correctIndex: 1,
    explanation: "Yield to any transit vehicle traveling in the same direction that has signaled and is pulling back onto the roadway."
  },
  {
    id: 155,
    chapter: 4,
    topic: "Agricultural Vehicles",
    question: "What sign indicates a slow-moving agricultural vehicle?",
    choices: ["A yellow diamond", "A red octagon", "An orange triangle on the back", "A green circle"],
    correctIndex: 2,
    explanation: "Agricultural vehicles designed to go 25 mph or less display a triangle sign or emblem on the back."
  },
  {
    id: 156,
    chapter: 4,
    topic: "General Driving",
    question: "When is it legal to drive on the left side of the road?",
    choices: ["In HOV lanes", "When safely and legally passing on a two-lane road", "In residential areas", "On one-way streets only"],
    correctIndex: 1,
    explanation: "The only time you might temporarily travel on the left is safely and legally passing on a two-lane road."
  },
  {
    id: 157,
    chapter: 4,
    topic: "General Driving",
    question: "Is it legal to back up on a freeway shoulder?",
    choices: ["Yes, if you missed your exit", "Yes, if done carefully", "No, it is illegal", "Only during low traffic"],
    correctIndex: 2,
    explanation: "It's illegal to back up on a shoulder or freeway, even if you miss your exit."
  },
  {
    id: 158,
    chapter: 4,
    topic: "Ferries",
    question: "Do normal traffic laws apply on Washington State Ferries?",
    choices: ["No, special ferry rules apply", "Only speed limits", "Yes, all rules of the road apply", "Only when the ferry is docked"],
    correctIndex: 2,
    explanation: "Washington State Ferries are part of the highway network, so all rules of the road apply."
  },
  {
    id: 159,
    chapter: 4,
    topic: "Beaches",
    question: "What is the speed limit when driving on ocean beaches in Washington?",
    choices: ["15 mph", "20 mph", "25 mph", "35 mph"],
    correctIndex: 2,
    explanation: "The speed limit on ocean beaches is 25 mph, and pedestrians and bicyclists have the right-of-way."
  },
  {
    id: 160,
    chapter: 4,
    topic: "Medians",
    question: "Is it legal to drive across a painted median?",
    choices: ["Yes, to make a U-turn", "Yes, if no traffic is coming", "No, it is illegal", "Only at intersections"],
    correctIndex: 2,
    explanation: "It's illegal to drive within, over, or across medians."
  },
  {
    id: 161,
    chapter: 4,
    topic: "Sharrows",
    question: "What are sharrow road markings?",
    choices: ["Shared lane markings for bicycles and vehicles", "Arrows showing one-way traffic", "Turn lane indicators", "Speed advisory markings"],
    correctIndex: 0,
    explanation: "Sharrows indicate a vehicle lane is shared with bicycle traffic. Watch for bikes and provide at least 3 feet when passing."
  },
  {
    id: 162,
    chapter: 4,
    topic: "Bicycle Boxes",
    question: "Can you turn right on red near a bicycle box?",
    choices: ["Yes, after stopping", "Yes, if no bicyclists are present", "No, you can't turn right on red near a bicycle box", "Only when the bicycle box is empty"],
    correctIndex: 2,
    explanation: "You can't turn right on red near a bicycle box. Stay behind the white line until the bicycle box is clear."
  },
  {
    id: 163,
    chapter: 4,
    topic: "Uncontrolled Intersections",
    question: "At an uncontrolled intersection, when must you yield?",
    choices: ["Never, proceed at normal speed", "Only to pedestrians", "When a vehicle is already in the intersection or you enter from a secondary/unpaved road", "Only to emergency vehicles"],
    correctIndex: 2,
    explanation: "Yield if a vehicle is already in the intersection, you enter from a secondary road to a state highway, or from an unpaved to paved road."
  },
  {
    id: 164,
    chapter: 4,
    topic: "Diverging Diamonds",
    question: "What is the main advantage of a diverging diamond intersection?",
    choices: ["It eliminates all stops", "It allows left turns onto the freeway without stopping for oncoming traffic", "It reduces speed limits", "It provides more parking"],
    correctIndex: 1,
    explanation: "Diverging diamonds allow vehicles to make left turns onto freeway ramps more efficiently by eliminating conflicts with oncoming traffic."
  },
  {
    id: 165,
    chapter: 4,
    topic: "Litter",
    question: "Why are littering fines in Washington severe?",
    choices: ["To fund road maintenance", "Because litter creates safety hazards and can spark wildfires", "To discourage tourism", "Because of federal requirements"],
    correctIndex: 1,
    explanation: "Litter creates safety hazards and flammable litter can spark wildfires, which is why fines are severe."
  },
  {
    id: 166,
    chapter: 4,
    topic: "Transporting",
    question: "Is it legal to transport an animal in a truck bed without a harness or enclosure?",
    choices: ["Yes, always", "Yes, for short distances", "No, a protective harness or enclosure is required", "Only for dogs"],
    correctIndex: 2,
    explanation: "It's illegal to transport an animal outside a vehicle without a protective harness or enclosure."
  },
  {
    id: 167,
    chapter: 4,
    topic: "Parking",
    question: "How far from a fire station driveway on the opposite side of the street must you park?",
    choices: ["25 feet", "50 feet", "75 feet", "100 feet"],
    correctIndex: 2,
    explanation: "Do not park within 75 feet of a fire station driveway on the opposite side of the street."
  },

  // ===== CHAPTER 5: RISKS =====
  {
    id: 168,
    chapter: 5,
    topic: "Speed",
    question: "What are the three typical causes of collisions?",
    choices: ["Weather, vehicle failure, road conditions", "Too much speed, too little space, insufficient situational awareness", "Distraction, fatigue, inexperience", "Alcohol, speeding, tailgating"],
    correctIndex: 1,
    explanation: "Collisions typically have three causes: too much speed, too little space, and insufficient situational awareness."
  },
  {
    id: 169,
    chapter: 5,
    topic: "Speed",
    question: "Can you receive a ticket for driving under the posted speed limit?",
    choices: ["No, you can always drive under the limit", "Yes, for traveling too fast for road conditions", "Only on the freeway", "Only in school zones"],
    correctIndex: 1,
    explanation: "Even if driving under the posted speed limit, you can get a ticket for traveling too fast for road conditions."
  },
  {
    id: 170,
    chapter: 5,
    topic: "Speed",
    question: "What effect does excessive speed have on seat belt effectiveness?",
    choices: ["No effect", "Increases effectiveness", "Reduces effectiveness", "Seat belts don't work at high speeds"],
    correctIndex: 2,
    explanation: "Seat belts are designed to protect you, but their effectiveness decreases at higher speeds."
  },
  {
    id: 171,
    chapter: 5,
    topic: "Following Distance",
    question: "What is the minimum recommended following distance?",
    choices: ["One car length", "Twice the length of your vehicle", "Three car lengths", "100 feet"],
    correctIndex: 1,
    explanation: "Leave a distance that's at least twice the length of your vehicle between you and the vehicle ahead."
  },
  {
    id: 172,
    chapter: 5,
    topic: "Merging",
    question: "What is zipper merging?",
    choices: ["Merging as early as possible", "Alternating merge with vehicles from the other lane at the merge point", "Merging only when the lane is clear", "Using the shoulder to merge"],
    correctIndex: 1,
    explanation: "Zipper merging means staying in your lane until the merge area and alternating with vehicles from the other lane."
  },
  {
    id: 173,
    chapter: 5,
    topic: "Merging",
    question: "By how much does zipper merging improve traffic flow?",
    choices: ["20 percent", "40 percent", "60 percent", "80 percent"],
    correctIndex: 2,
    explanation: "Zipper merging improves traffic flow by 60 percent."
  },
  {
    id: 174,
    chapter: 5,
    topic: "Merging",
    question: "Who has the right-of-way when merging onto an interstate?",
    choices: ["The merging driver", "Drivers already on the interstate", "The faster vehicle", "The vehicle in the left lane"],
    correctIndex: 1,
    explanation: "Drivers already on the interstate have the right-of-way."
  },
  {
    id: 175,
    chapter: 5,
    topic: "Night Driving",
    question: "At what distance should you be able to stop within the glow of your headlights?",
    choices: ["200 feet", "300 feet", "400 feet", "500 feet"],
    correctIndex: 2,
    explanation: "Drive at a speed that allows you to stop within the glow of your headlights, usually about 400 feet."
  },
  {
    id: 176,
    chapter: 5,
    topic: "Night Driving",
    question: "Should you wear sunglasses while driving at night?",
    choices: ["Yes, to reduce glare", "Only tinted ones", "No, tinted or colored lenses reduce your vision", "Yes, yellow-tinted ones help"],
    correctIndex: 2,
    explanation: "Do not wear sunglasses or colored lenses when driving at night or on overcast days."
  },
  {
    id: 177,
    chapter: 5,
    topic: "Curves",
    question: "When should you reduce speed for a curve?",
    choices: ["While in the curve", "Before entering the curve", "After exiting the curve", "Only if the road is wet"],
    correctIndex: 1,
    explanation: "Reduce your speed before entering the curve. This helps maintain traction and prevents skidding."
  },
  {
    id: 178,
    chapter: 5,
    topic: "Curves",
    question: "Should you brake while in a curve?",
    choices: ["Yes, to maintain control", "Yes, brake firmly", "No, maintain a steady speed and avoid sudden braking", "Only if going downhill"],
    correctIndex: 2,
    explanation: "Avoid braking or accelerating suddenly while in the curve, as this can lead to loss of control."
  },
  {
    id: 179,
    chapter: 5,
    topic: "Slippery Roads",
    question: "Why is the road especially slippery when it first starts to rain on a hot day?",
    choices: ["The water hasn't absorbed yet", "Heat causes oil in the asphalt to rise to the surface", "Tires are too warm", "Dust mixes with the water"],
    correctIndex: 1,
    explanation: "Heat causes the oil in the asphalt to come to the surface, making the road slippery until the oil washes away."
  },
  {
    id: 180,
    chapter: 5,
    topic: "Slippery Roads",
    question: "What is black ice?",
    choices: ["Dark-colored ice from pollution", "A thin coating of ice that is hard for drivers to see", "Ice that only forms at night", "Extremely thick ice on bridges"],
    correctIndex: 1,
    explanation: "Black ice is a thin coating of ice that is hard for drivers to see."
  },
  {
    id: 181,
    chapter: 5,
    topic: "Slippery Roads",
    question: "Where are icy spots most likely even when the rest of the road isn't frozen?",
    choices: ["In tunnels", "On overpasses and bridges", "In parking lots", "At intersections"],
    correctIndex: 1,
    explanation: "Overpasses and other types of bridges can have icy spots even when the rest of the road doesn't."
  },
  {
    id: 182,
    chapter: 5,
    topic: "Skidding",
    question: "If your vehicle starts to skid, what is the first thing you should do?",
    choices: ["Brake hard", "Turn the wheel in the opposite direction", "Take your foot off the accelerator", "Shift to neutral"],
    correctIndex: 2,
    explanation: "First, take your foot off the accelerator. Then steer in the direction your vehicle is moving."
  },
  {
    id: 183,
    chapter: 5,
    topic: "Skidding",
    question: "When skidding, which direction should you steer?",
    choices: ["Opposite to the skid direction", "In the same direction your vehicle is moving", "Hard to the left", "Hard to the right"],
    correctIndex: 1,
    explanation: "Steer in the same direction your vehicle is moving, then continue to correct until traction is regained."
  },
  {
    id: 184,
    chapter: 5,
    topic: "Hydroplaning",
    question: "What causes hydroplaning?",
    choices: ["Driving too slowly in rain", "Water building up between tires and the road surface", "Worn brake pads", "Low engine power"],
    correctIndex: 1,
    explanation: "Hydroplaning happens when water builds up between your tires and the road, causing loss of traction."
  },
  {
    id: 185,
    chapter: 5,
    topic: "Hydroplaning",
    question: "What is the best way to prevent hydroplaning?",
    choices: ["Use high beams", "Brake frequently", "Slow down when the road is wet", "Drive in the left lane"],
    correctIndex: 2,
    explanation: "The best way to prevent hydroplaning is to slow down when the road is wet."
  },
  {
    id: 186,
    chapter: 5,
    topic: "Hydroplaning",
    question: "If you are hydroplaning, what should you do with the steering wheel?",
    choices: ["Turn hard to the right", "Turn hard to the left", "Keep the steering wheel steady", "Let go of the wheel"],
    correctIndex: 2,
    explanation: "Keep the steering wheel steady. Avoid overcorrecting or jerking the steering wheel."
  },
  {
    id: 187,
    chapter: 5,
    topic: "Vehicle Failures",
    question: "If a tire blows out, what should you do?",
    choices: ["Brake immediately", "Grip the wheel firmly, slow gradually, and do not brake", "Speed up to maintain control", "Shift to reverse"],
    correctIndex: 1,
    explanation: "Grip the steering wheel firmly, keep going straight, slow down gradually. Do not brake."
  },
  {
    id: 188,
    chapter: 5,
    topic: "Vehicle Failures",
    question: "If your engine shuts off while driving, what should you know about the steering wheel?",
    choices: ["It will lock immediately", "It will be difficult to turn but still turnable", "It will work normally", "You should let go of it"],
    correctIndex: 1,
    explanation: "The steering wheel might be difficult to turn, but you can still turn it. Keep a strong grip."
  },
  {
    id: 189,
    chapter: 5,
    topic: "Vehicle Failures",
    question: "If your accelerator gets stuck and the vehicle keeps going faster, what should you do first?",
    choices: ["Turn off the engine immediately", "Keep your eyes on the road and shift to neutral", "Jump out of the vehicle", "Pump the brake pedal"],
    correctIndex: 1,
    explanation: "Keep your eyes on the road, quickly shift to neutral, then pull off the road when safe and turn off the engine."
  },
  {
    id: 190,
    chapter: 5,
    topic: "Vehicle Failures",
    question: "How far behind your vehicle should you place emergency flares?",
    choices: ["50 to 100 feet", "100 to 200 feet", "200 to 300 feet", "400 to 500 feet"],
    correctIndex: 2,
    explanation: "Place emergency flares 200 to 300 feet behind the vehicle."
  },
  {
    id: 191,
    chapter: 5,
    topic: "Collisions",
    question: "How soon must you file a collision report if law enforcement didn't file one?",
    choices: ["Immediately", "Within 4 days", "Within 7 days", "Within 30 days"],
    correctIndex: 1,
    explanation: "File a collision report form within 4 days of a crash if a law enforcement officer doesn't do this for you."
  },
  {
    id: 192,
    chapter: 5,
    topic: "Collisions",
    question: "If a collision involves a parked vehicle and you can't find the owner, what must you do?",
    choices: ["Drive away and report it later", "Leave a note with date, time, and your contact information", "Call 911", "Wait indefinitely"],
    correctIndex: 1,
    explanation: "Leave a note in a visible place with the date and time of collision and your contact information."
  },
  {
    id: 193,
    chapter: 5,
    topic: "Collisions",
    question: "Should you give injured people water after a crash?",
    choices: ["Yes, to keep them hydrated", "Yes, if they ask for it", "No, do not give injured people anything to drink", "Only small sips"],
    correctIndex: 2,
    explanation: "Do not give injured people anything to drink — not even water."
  },
  {
    id: 194,
    chapter: 5,
    topic: "Power Lines",
    question: "If a power line contacts your vehicle, what should you do?",
    choices: ["Get out immediately", "Stay inside, turn off the engine, call 911, and wait for responders", "Drive away slowly", "Touch the power line to check if it's live"],
    correctIndex: 1,
    explanation: "Stay inside your vehicle, turn off the engine, call 911, and wait for emergency responders. Assume all power lines are energized."
  },
  {
    id: 195,
    chapter: 5,
    topic: "Power Lines",
    question: "If your vehicle contacts a power line and catches fire, how should you exit?",
    choices: ["Step out carefully", "Jump clear of the vehicle with both feet landing together", "Crawl under the vehicle", "Roll out of the door"],
    correctIndex: 1,
    explanation: "Jump away from the vehicle with arms at your sides, making sure both feet land together. Shuffle 35 feet away."
  },
  {
    id: 196,
    chapter: 5,
    topic: "Power Lines",
    question: "How far should people stay from a vehicle in contact with power lines?",
    choices: ["10 feet", "20 feet", "35 feet", "50 feet"],
    correctIndex: 2,
    explanation: "Encourage people to stay at least 35 feet away from a vehicle in contact with power lines."
  },
  {
    id: 197,
    chapter: 5,
    topic: "Law Enforcement",
    question: "When pulled over by police, what should you do with your hands?",
    choices: ["Put them in your lap", "Reach for your license immediately", "Keep them on the steering wheel", "Open the door and step out"],
    correctIndex: 2,
    explanation: "Keep your hands on the steering wheel. Wait for the officer's instructions before reaching for documents."
  },
  {
    id: 198,
    chapter: 5,
    topic: "Law Enforcement",
    question: "What should you turn on if pulled over at night?",
    choices: ["High beams", "Hazard lights", "Interior lights", "Fog lights"],
    correctIndex: 2,
    explanation: "Turn on your interior lights if pulled over at night for visibility."
  },
  {
    id: 199,
    chapter: 5,
    topic: "Law Enforcement",
    question: "If you get a ticket, what happens if you refuse to sign it?",
    choices: ["The ticket is dismissed", "You receive a warning instead", "You could be arrested", "The fine is doubled"],
    correctIndex: 2,
    explanation: "Refusing to sign a traffic ticket could result in your arrest. Signing is not an admission of guilt."
  },
  {
    id: 200,
    chapter: 5,
    topic: "Law Enforcement",
    question: "How many days do you have to follow the instructions on the back of a ticket?",
    choices: ["7 days", "15 days", "30 days", "60 days"],
    correctIndex: 1,
    explanation: "Follow the instructions on the back of the ticket within 15 days to avoid having your driving privileges suspended."
  },
  {
    id: 201,
    chapter: 5,
    topic: "Focus",
    question: "What are the three types of vision used while driving?",
    choices: ["Near, mid, and far vision", "Central, fringe, and peripheral vision", "Focused, blurred, and night vision", "Direct, indirect, and reflected vision"],
    correctIndex: 1,
    explanation: "Central vision sees detail ahead, fringe vision sees edges, and peripheral vision sees to the sides."
  },
  {
    id: 202,
    chapter: 5,
    topic: "Hazard Management",
    question: "What are the five steps of hazard management?",
    choices: ["Stop, Look, Listen, Think, Go", "Plan, Communicate, Check, Execute, Evaluate", "See, Think, Do, Check, Repeat", "Scan, Identify, Predict, Decide, Execute"],
    correctIndex: 1,
    explanation: "The hazard management routine is: Plan, Communicate, Check, Execute, Evaluate."
  },
  {
    id: 203,
    chapter: 5,
    topic: "Eye-Lead Time",
    question: "What is eye-lead time?",
    choices: ["The time it takes for your eyes to adjust to darkness", "A technique to scan the road ahead for potential hazards", "The time between seeing a hazard and braking", "How quickly you can read road signs"],
    correctIndex: 1,
    explanation: "Eye-lead time allows you to scan the road ahead for potential hazards, giving you time to see, analyze, and respond."
  },
  {
    id: 204,
    chapter: 5,
    topic: "Speed",
    question: "What are the five common factors in fatal crashes?",
    choices: ["Speed, impairment, distractions, unrestrained occupants, inexperience", "Weather, darkness, road conditions, vehicle age, driver age", "Speeding, tailgating, lane changes, phone use, fatigue", "Alcohol, drugs, texting, road rage, drowsiness"],
    correctIndex: 0,
    explanation: "Fatal crash common factors are: speed, impairment, distractions, unrestrained occupants, and inexperience."
  },
  {
    id: 205,
    chapter: 5,
    topic: "Collisions",
    question: "What information must you exchange after a collision?",
    choices: ["Name and phone number only", "Name, contact info, driver license number, insurance company, and policy number", "Just insurance information", "Vehicle make and model only"],
    correctIndex: 1,
    explanation: "Exchange name, contact information, driver license number, insurance company, and policy number."
  },
  {
    id: 206,
    chapter: 5,
    topic: "Curves",
    question: "What is kinetic energy's role in driving through curves?",
    choices: ["It helps maintain traction", "Higher speeds create more energy, requiring more space to stop or change direction", "It improves steering response", "It has no effect on curves"],
    correctIndex: 1,
    explanation: "Higher speeds create more kinetic energy, requiring more time and space to stop or change direction. Slow down for curves."
  },
  {
    id: 207,
    chapter: 5,
    topic: "Slippery Roads",
    question: "When can studded tires be used in Washington?",
    choices: ["Year-round", "During winter months", "Only during snowstorms", "They are not allowed in Washington"],
    correctIndex: 1,
    explanation: "During winter months, you can improve traction by adding chains or changing to studded tires."
  }
];
