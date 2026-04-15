export type Service = {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  icon: string;
  category: string;
  commonProblems: string[];
  whatWeFix: string[];
  whyChooseUs: { title: string; description: string }[];
  howItWorks: { title: string; description: string }[];
  faqItems: { q: string; a: string }[];
  price: string;
};

export const services: Service[] = [
  // ── Computers & Printers ──────────────────────────────────────────────────
  {
    id: "1", slug: "computer-repair", title: "Computer Repair",
    tagline: "Fast, reliable fixes for your PC or Mac.",
    icon: "Monitor", category: "Computers & Printers",
    commonProblems: ["Computer is running slow or freezing","Blue screen of death (BSOD) or frequent crashes","Hard drive failure or data loss","Loud fan noises or overheating"],
    whatWeFix: ["Virus and malware removal","Hardware upgrades (RAM, SSD)","Operating system installation","Data recovery and backup","Motherboard and component repair"],
    whyChooseUs: [
      { title: "Expert Technicians", description: "Certified professionals with years of experience." },
      { title: "Fast Turnaround", description: "Most repairs completed within 24-48 hours." },
      { title: "No Fix, No Fee", description: "If we can't fix it, you don't pay." },
    ],
    howItWorks: [
      { title: "Diagnose", description: "We identify the root cause of your computer issues." },
      { title: "Repair", description: "We apply the necessary fixes or part replacements." },
      { title: "Test", description: "We thoroughly test to ensure optimal performance." },
    ],
    faqItems: [
      { q: "How long does a typical repair take?", a: "Most software issues are resolved same-day. Hardware repairs usually take 1-3 days depending on part availability." },
      { q: "Will I lose my data?", a: "We always prioritize data preservation. However, it's recommended to have a backup if possible." },
      { q: "Do you repair both Macs and Windows PCs?", a: "Yes, our technicians are experts in both Apple and Windows systems." },
    ],
    price: "Starting at $79",
  },
  {
    id: "2", slug: "virus-removal", title: "Virus Removal",
    tagline: "Complete malware elimination — your system protected for good.",
    icon: "ShieldCheck", category: "Computers & Printers",
    commonProblems: ["Pop-up ads appearing constantly","Computer running abnormally slow","Unexpected program crashes or freezes","Suspicious charges or identity theft signs"],
    whatWeFix: ["Full virus and spyware removal","Ransomware recovery","Browser hijacker cleanup","Security software installation","System vulnerability patching"],
    whyChooseUs: [
      { title: "Deep Scan Technology", description: "We go beyond surface-level scans to root out hidden threats." },
      { title: "Zero Re-infection Guarantee", description: "We set up layered protection so you stay safe." },
      { title: "Plain English Reports", description: "We explain exactly what we found and removed." },
    ],
    howItWorks: [
      { title: "Scan", description: "We run a comprehensive multi-engine scan of your entire system." },
      { title: "Remove", description: "We safely quarantine and eliminate every threat found." },
      { title: "Protect", description: "We install and configure real-time protection to prevent future infections." },
    ],
    faqItems: [
      { q: "Can you remove ransomware?", a: "Yes. We specialize in ransomware recovery and can often restore your files without paying the ransom." },
      { q: "Do I need to be home for virus removal?", a: "Not necessarily — we can perform remote virus removal in most cases via our secure remote access tool." },
    ],
    price: "Starting at $69",
  },
  {
    id: "3", slug: "pc-setup", title: "PC Setup & Installation",
    tagline: "New PC? We'll have it ready to use in no time.",
    icon: "Monitor", category: "Computers & Printers",
    commonProblems: ["New computer out of the box and unsure how to set up","Need to transfer data from old PC","Want all apps and accounts configured","Need a printer and other devices connected"],
    whatWeFix: ["Windows account and profile setup","Data & files transfer from old computer","Email, browser and app configuration","Printer and peripheral setup","Microsoft Office and essential software install"],
    whyChooseUs: [
      { title: "Same-Day Setup", description: "We get you up and running fast, with no frustration." },
      { title: "Full Configuration", description: "Everything personalized to your preferences." },
      { title: "Data Migration", description: "All your files safely moved from your old device." },
    ],
    howItWorks: [
      { title: "Unbox & Connect", description: "We set up all hardware and connect to your network." },
      { title: "Configure", description: "We install Windows updates, software, and your personal accounts." },
      { title: "Transfer", description: "We migrate all your files, photos, and settings from the old machine." },
    ],
    faqItems: [
      { q: "How long does a full PC setup take?", a: "Typically 1-2 hours depending on how much data needs to be transferred." },
      { q: "Can you set up Microsoft Office?", a: "Yes, we install and activate Microsoft 365 or Office on your new PC." },
    ],
    price: "Starting at $89",
  },
  {
    id: "4", slug: "mac-support", title: "Mac Support",
    tagline: "Expert Apple Mac help from certified technicians.",
    icon: "Monitor", category: "Computers & Printers",
    commonProblems: ["Mac running slowly or overheating","macOS upgrade issues","iCloud sync problems","Applications crashing or not opening"],
    whatWeFix: ["macOS installation and upgrades","Performance optimization & storage cleanup","iCloud and Apple ID issues","App installation and troubleshooting","Mac data backup with Time Machine"],
    whyChooseUs: [
      { title: "Apple-Certified Expertise", description: "Our techs know every macOS version inside and out." },
      { title: "Remote or On-Site", description: "Most Mac issues can be fixed remotely for your convenience." },
      { title: "Data Safety First", description: "We always back up before making any system changes." },
    ],
    howItWorks: [
      { title: "Assess", description: "We run diagnostics to understand exactly what's wrong." },
      { title: "Fix", description: "We apply targeted fixes without reinstalling unless necessary." },
      { title: "Optimize", description: "We tune your Mac for the best possible speed and reliability." },
    ],
    faqItems: [
      { q: "Do you support older Macs?", a: "Yes, we support macOS versions going back several years, including older Intel-based Macs." },
      { q: "Can you help me upgrade to the latest macOS?", a: "Absolutely — we handle the upgrade safely and resolve any compatibility issues." },
    ],
    price: "Starting at $79",
  },
  {
    id: "5", slug: "slow-pc-fix", title: "Slow PC Fix",
    tagline: "Speed up your computer — like brand new again.",
    icon: "Zap", category: "Computers & Printers",
    commonProblems: ["Takes forever to start up","Programs freeze or lag","Fan runs loudly all the time","Low storage space warnings"],
    whatWeFix: ["Startup program optimization","Disk cleanup and storage optimization","RAM and SSD upgrade recommendations","Bloatware removal","Registry cleanup and repair"],
    whyChooseUs: [
      { title: "Speed Guarantee", description: "We guarantee a measurable improvement or we keep working." },
      { title: "Non-Invasive Process", description: "We speed up your PC without wiping your files." },
      { title: "Full Report", description: "We show you exactly what was slowing things down." },
    ],
    howItWorks: [
      { title: "Benchmark", description: "We test your current speed to measure the improvement." },
      { title: "Clean & Optimize", description: "We remove junk, disable startup bloat, and free up resources." },
      { title: "Verify", description: "We run benchmarks again to confirm the performance gains." },
    ],
    faqItems: [
      { q: "How much faster will my PC get?", a: "Most customers see 40-80% improvement in startup time and application load speeds." },
      { q: "Will you delete my files?", a: "Never. We only remove temporary files, junk, and programs you don't use." },
    ],
    price: "Starting at $59",
  },
  {
    id: "6", slug: "software-installation", title: "Software Installation",
    tagline: "Get any software installed and configured perfectly.",
    icon: "Download", category: "Computers & Printers",
    commonProblems: ["Can't install or activate software","Compatibility errors during install","Old software conflicting with new versions","License key issues"],
    whatWeFix: ["Microsoft Office setup and activation","Creative software (Adobe, etc.) installation","Driver installation and updates","Software conflict resolution","License transfer between devices"],
    whyChooseUs: [
      { title: "All Software Supported", description: "From productivity suites to creative tools, we handle it all." },
      { title: "Conflict Resolution", description: "We fix incompatibilities between programs." },
      { title: "Activation Assistance", description: "We handle licensing and product activation for you." },
    ],
    howItWorks: [
      { title: "Assess", description: "We check your system specs and compatibility before installing." },
      { title: "Install", description: "We download, install, and activate your software correctly." },
      { title: "Configure", description: "We set up preferences and settings so it's ready to use." },
    ],
    faqItems: [
      { q: "Can you install software remotely?", a: "Yes, most software installations can be completed via remote support." },
      { q: "Do I need to provide my license key?", a: "Yes, you'll need your valid license key or account credentials for the software." },
    ],
    price: "Starting at $49",
  },
  {
    id: "7", slug: "printer-support", title: "Printer Setup",
    tagline: "Get back to printing without the headache.",
    icon: "Printer", category: "Computers & Printers",
    commonProblems: ["Printer won't connect to WiFi","Frequent paper jams","Poor print quality or streaks","Computer says printer is offline"],
    whatWeFix: ["Driver installation and updates","Network printer setup","Print queue clearing","Resolving error codes","Scanning and faxing configuration"],
    whyChooseUs: [
      { title: "All Brands Supported", description: "HP, Brother, Epson, Canon, and more." },
      { title: "Remote or On-Site", description: "Many software issues can be fixed remotely." },
      { title: "Comprehensive Setup", description: "We ensure all your devices can print." },
    ],
    howItWorks: [
      { title: "Connect", description: "We connect your printer to your network." },
      { title: "Configure", description: "We install the right drivers on your devices." },
      { title: "Test", description: "We verify printing and scanning functionality." },
    ],
    faqItems: [
      { q: "Can you fix physical damage to my printer?", a: "While we fix many mechanical issues like jams, severe hardware failure on cheap printers often warrants a replacement." },
      { q: "Can you set up printing from my phone?", a: "Absolutely! We configure mobile printing via AirPrint or manufacturer apps." },
    ],
    price: "Starting at $49",
  },
  {
    id: "8", slug: "email-support", title: "Email Support",
    tagline: "Email setup, migration, and troubleshooting made easy.",
    icon: "Mail", category: "Computers & Printers",
    commonProblems: ["Can't send or receive emails","Inbox full or syncing errors","Setting up email on a new device","Outlook or Mail app not working"],
    whatWeFix: ["Email account setup (Gmail, Outlook, Yahoo)","Email client configuration (Outlook, Apple Mail)","Email migration and data transfer","Spam filter configuration","Password recovery and account access"],
    whyChooseUs: [
      { title: "All Clients Supported", description: "We set up any email client on any device." },
      { title: "Secure Configuration", description: "We enable two-factor authentication and proper security settings." },
      { title: "Data Preservation", description: "We ensure no emails are lost during migration." },
    ],
    howItWorks: [
      { title: "Diagnose", description: "We identify the email issue or gather account details for setup." },
      { title: "Configure", description: "We set up the email account with the correct server settings." },
      { title: "Test", description: "We send and receive test emails to confirm everything works." },
    ],
    faqItems: [
      { q: "Can you recover deleted emails?", a: "In many cases yes, especially if they're within the recovery window of your email provider." },
      { q: "Can you set up multiple email accounts?", a: "Yes, we can configure multiple accounts in one client like Outlook." },
    ],
    price: "Starting at $49",
  },
  {
    id: "9", slug: "data-recovery", title: "Data Recovery",
    tagline: "Lost files? We'll do everything we can to get them back.",
    icon: "Database", category: "Computers & Printers",
    commonProblems: ["Accidentally deleted important files","Hard drive failure or corruption","Formatted drive recovery","Photos or documents lost after OS crash"],
    whatWeFix: ["Deleted file recovery","Corrupted drive recovery","Photo and document restoration","External drive and USB recovery","Failed SSD data retrieval"],
    whyChooseUs: [
      { title: "High Recovery Rate", description: "We successfully recover data in the majority of cases." },
      { title: "No Recovery, No Fee", description: "If we can't retrieve your files, you pay nothing." },
      { title: "Secure Process", description: "Your data is handled with strict confidentiality." },
    ],
    howItWorks: [
      { title: "Evaluate", description: "We assess the drive to determine recovery feasibility." },
      { title: "Recover", description: "We use professional tools to extract recoverable files." },
      { title: "Deliver", description: "We return your recovered data on a new drive or via secure transfer." },
    ],
    faqItems: [
      { q: "Can you recover from a physically damaged hard drive?", a: "We handle logical failures directly. For physical damage requiring a clean room, we partner with specialized labs." },
      { q: "How long does data recovery take?", a: "Logical recovery typically takes 1-3 days. Physical recovery may take longer." },
    ],
    price: "Starting at $99",
  },

  // ── Smart Home ────────────────────────────────────────────────────────────
  {
    id: "10", slug: "smart-home-setup", title: "Smart Home Setup",
    tagline: "Transform your home into a fully connected smart home.",
    icon: "Home", category: "Smart Home",
    commonProblems: ["Devices not communicating with each other","Smart home app not recognizing devices","Voice assistant not controlling devices","Automation routines not triggering"],
    whatWeFix: ["Full smart home ecosystem setup","Device pairing and configuration","App setup on all household devices","Automation and scene creation","Voice assistant integration"],
    whyChooseUs: [
      { title: "Ecosystem Experts", description: "We work with Amazon, Google, Apple HomeKit, and more." },
      { title: "Customized Automations", description: "We build routines tailored to your lifestyle." },
      { title: "Ongoing Support", description: "We're here when you add new devices to your home." },
    ],
    howItWorks: [
      { title: "Plan", description: "We assess your home and recommend the best smart home ecosystem." },
      { title: "Install", description: "We install and pair all devices correctly." },
      { title: "Automate", description: "We create custom automations and teach you how to use everything." },
    ],
    faqItems: [
      { q: "Do all smart devices work together?", a: "Not always — we help ensure your devices are compatible and set up on a unified platform." },
      { q: "Which smart home platform do you recommend?", a: "It depends on your preferences. We support Amazon Alexa, Google Home, and Apple HomeKit equally." },
    ],
    price: "Starting at $99",
  },
  {
    id: "11", slug: "smart-lights", title: "Smart Lights Installation",
    tagline: "Intelligent lighting that sets the perfect mood automatically.",
    icon: "Lightbulb", category: "Smart Home",
    commonProblems: ["Smart bulbs not pairing to hub","Lights not responding to voice commands","App showing bulbs as offline","Color settings not saving"],
    whatWeFix: ["Smart bulb installation and pairing","Philips Hue, LIFX, and other brand setup","Scene and schedule configuration","Voice assistant (Alexa/Google) integration","Multi-room group setup"],
    whyChooseUs: [
      { title: "All Brands Supported", description: "Philips Hue, LIFX, Govee, Sengled, and more." },
      { title: "Scene Programming", description: "We create custom lighting scenes for every room and mood." },
      { title: "Voice Integration", description: "Control every light by voice with Alexa or Google." },
    ],
    howItWorks: [
      { title: "Install", description: "We replace or install smart bulbs and switches throughout your home." },
      { title: "Pair", description: "We connect all lights to your hub or app." },
      { title: "Program", description: "We create schedules, scenes, and voice commands." },
    ],
    faqItems: [
      { q: "Do I need a hub for smart bulbs?", a: "Some bulbs (like Philips Hue) need a hub, while others (like LIFX) connect directly to WiFi. We'll advise on the best solution." },
      { q: "Can you set up smart light switches too?", a: "Yes, we install and configure smart switches and dimmers as well." },
    ],
    price: "Starting at $79",
  },
  {
    id: "12", slug: "smart-thermostat", title: "Smart Thermostat Setup",
    tagline: "Save energy and stay comfortable with smart temperature control.",
    icon: "Thermometer", category: "Smart Home",
    commonProblems: ["Thermostat not connecting to WiFi","App unable to control temperature remotely","Wiring confusion during self-install","HVAC system compatibility issues"],
    whatWeFix: ["Nest, Ecobee, Honeywell, and other brands","Wiring assessment and safe installation","App configuration and remote access setup","Schedule and energy-saving mode programming","Smart home integration (Alexa/Google)"],
    whyChooseUs: [
      { title: "Licensed Installation", description: "We safely handle low-voltage HVAC wiring." },
      { title: "Energy Savings Optimization", description: "We configure eco modes to reduce your energy bill." },
      { title: "All Brands", description: "Nest, Ecobee, Honeywell Home, Emerson, and more." },
    ],
    howItWorks: [
      { title: "Assess", description: "We check your HVAC wiring compatibility before starting." },
      { title: "Install", description: "We safely wire and mount your smart thermostat." },
      { title: "Configure", description: "We set up the app, schedules, and integrations." },
    ],
    faqItems: [
      { q: "Is my HVAC system compatible?", a: "Most forced-air systems are compatible. We'll check before installation at no extra charge." },
      { q: "Will a smart thermostat actually save money?", a: "Yes — smart schedules and eco modes typically save 10-23% on heating and cooling bills." },
    ],
    price: "Starting at $89",
  },
  {
    id: "13", slug: "smart-doorbell", title: "Smart Doorbell Setup",
    tagline: "See and speak to anyone at your door from anywhere.",
    icon: "Bell", category: "Smart Home",
    commonProblems: ["Doorbell not connecting to WiFi","Live view lagging or not loading","Motion alerts not triggering","Existing doorbell wiring compatibility issues"],
    whatWeFix: ["Ring, Nest Hello, Arlo, Eufy installation","Wiring and power setup","App configuration and notifications","Motion zone and sensitivity setup","Cloud storage and subscription activation"],
    whyChooseUs: [
      { title: "Wired & Wireless", description: "We handle both battery-powered and hardwired doorbells." },
      { title: "Optimal Placement", description: "We advise on the best angle for maximum detection." },
      { title: "All Major Brands", description: "Ring, Nest, Arlo, Eufy, SimpliSafe, and more." },
    ],
    howItWorks: [
      { title: "Assess", description: "We check your current doorbell wiring and network signal strength." },
      { title: "Install", description: "We mount and wire your new smart doorbell." },
      { title: "Configure", description: "We set up the app, motion zones, and sharing with family members." },
    ],
    faqItems: [
      { q: "Do I need existing doorbell wiring?", a: "No — battery-powered doorbells like Ring Video Doorbell require no wiring at all." },
      { q: "Will I get notified when someone rings or approaches?", a: "Yes, we configure instant push notifications for both rings and motion events." },
    ],
    price: "Starting at $79",
  },
  {
    id: "14", slug: "smart-lock", title: "Smart Lock Installation",
    tagline: "Keyless entry and remote locking for your peace of mind.",
    icon: "Lock", category: "Smart Home",
    commonProblems: ["Smart lock not pairing with app","Auto-lock not triggering correctly","PIN codes not working","Integration with smart home hub failing"],
    whatWeFix: ["August, Schlage, Yale, and Kwikset smart lock setup","Z-Wave or Bluetooth connection configuration","App setup and access code creation","Smart home integration (Alexa, Google, Apple HomeKit)","Battery and physical installation"],
    whyChooseUs: [
      { title: "All Brands & Protocols", description: "Z-Wave, Zigbee, Bluetooth, and WiFi locks all supported." },
      { title: "Family Access Management", description: "We set up codes and remote access for each family member." },
      { title: "Secure Installation", description: "Your door locking mechanism is handled by a professional." },
    ],
    howItWorks: [
      { title: "Install", description: "We physically install the smart lock on your door." },
      { title: "Connect", description: "We pair it to your hub and configure the app." },
      { title: "Program", description: "We set up all access codes, schedules, and integrations." },
    ],
    faqItems: [
      { q: "Do smart locks work during a power outage?", a: "Yes — smart locks run on batteries and function independently of power or internet." },
      { q: "Can I still use a physical key?", a: "Most smart locks include a physical key backup for emergencies." },
    ],
    price: "Starting at $89",
  },
  {
    id: "15", slug: "smart-camera", title: "Smart Camera Setup",
    tagline: "Indoor and outdoor security cameras installed and working.",
    icon: "Camera", category: "Smart Home",
    commonProblems: ["Camera won't connect to WiFi","Live stream constantly buffering","Motion detection too sensitive or not triggering","Night vision not working properly"],
    whatWeFix: ["Indoor and outdoor camera installation","Arlo, Ring, Blink, Wyze, and Nest Cam setup","App configuration and live view","Motion zone and alert configuration","Cloud or local NVR storage setup"],
    whyChooseUs: [
      { title: "Optimal Placement", description: "We advise on camera angles to maximize coverage." },
      { title: "All Brands", description: "Arlo, Ring, Blink, Wyze, Nest, Reolink, and more." },
      { title: "Storage Setup", description: "We configure cloud subscriptions or local storage solutions." },
    ],
    howItWorks: [
      { title: "Plan", description: "We walk your property to determine the best camera placements." },
      { title: "Install", description: "We mount, power, and connect every camera." },
      { title: "Configure", description: "We set up the app, motion alerts, and recording schedules." },
    ],
    faqItems: [
      { q: "Do I need a subscription for cloud storage?", a: "Some cameras offer free local storage options — we'll recommend the most cost-effective solution." },
      { q: "Can cameras be viewed remotely?", a: "Yes, we set up remote viewing on your phone from anywhere in the world." },
    ],
    price: "Starting at $79",
  },
  {
    id: "16", slug: "alexa-setup", title: "Alexa Setup",
    tagline: "Get the most out of your Amazon Echo and Alexa devices.",
    icon: "Mic", category: "Smart Home",
    commonProblems: ["Alexa not responding to voice commands","Skills and routines not working","Echo not connected to WiFi","Alexa not controlling smart home devices"],
    whatWeFix: ["Echo device WiFi setup and registration","Alexa app configuration","Smart home skill enabling and linking","Routine and automation creation","Multi-room music and intercom setup"],
    whyChooseUs: [
      { title: "Full Ecosystem Setup", description: "We connect all your smart devices to Alexa." },
      { title: "Custom Routines", description: "We build personalized Alexa routines for your lifestyle." },
      { title: "All Echo Devices", description: "Echo Dot, Echo Show, Echo Plus — we support them all." },
    ],
    howItWorks: [
      { title: "Connect", description: "We get your Echo device online and registered to your Amazon account." },
      { title: "Integrate", description: "We link all your compatible smart home devices to Alexa." },
      { title: "Automate", description: "We create custom routines and teach you all the best voice commands." },
    ],
    faqItems: [
      { q: "Can Alexa control my smart TV?", a: "Yes — with compatible smart TVs or Fire TV sticks, Alexa can control volume, input, and playback." },
      { q: "How many devices can Alexa control?", a: "Alexa supports hundreds of compatible smart home devices simultaneously." },
    ],
    price: "Starting at $59",
  },
  {
    id: "17", slug: "google-home-setup", title: "Google Home Setup",
    tagline: "Set up your Google Nest speakers and smart home ecosystem.",
    icon: "Home", category: "Smart Home",
    commonProblems: ["Google Home app not finding devices","Nest Hub screen not responding","Smart home devices not showing in Google Home","Cast not working to Chromecast or TV"],
    whatWeFix: ["Google Nest Hub and Mini setup","Google Home app and account configuration","Smart device integration with Google Home","Chromecast and Google TV setup","Routine and automation configuration"],
    whyChooseUs: [
      { title: "Google Ecosystem Experts", description: "We know every Nest and Google Home product inside and out." },
      { title: "Cross-Platform Integration", description: "We connect non-Google devices that are Google Assistant compatible." },
      { title: "Voice Command Training", description: "We teach you the best commands for your daily routine." },
    ],
    howItWorks: [
      { title: "Set Up", description: "We connect your Google Nest device to WiFi and your Google account." },
      { title: "Link Devices", description: "We integrate your compatible smart home devices." },
      { title: "Automate", description: "We configure routines, rooms, and schedules." },
    ],
    faqItems: [
      { q: "Can Google Home work with Amazon or Apple devices?", a: "Many third-party devices support both Alexa and Google Assistant — we'll identify compatible ones in your home." },
      { q: "Does Google Home work without internet?", a: "Most features require internet. Local control for some devices is limited but improving." },
    ],
    price: "Starting at $59",
  },

  // ── Audio & Video ─────────────────────────────────────────────────────────
  {
    id: "18", slug: "tv-mounting", title: "TV Mounting",
    tagline: "Professional TV mounting — perfectly level, cables hidden.",
    icon: "Tv", category: "Audio & Video",
    commonProblems: ["TV not level after self-install","Cables visible and messy","Wrong wall anchor used","VESA mount compatibility confusion"],
    whatWeFix: ["TV wall mount installation (all sizes)","In-wall cable concealment","VESA adapter and bracket selection","Stud finding and secure fastening","TV angle and swivel adjustment"],
    whyChooseUs: [
      { title: "Any Wall Type", description: "Drywall, brick, concrete, stone — we handle it all." },
      { title: "Clean Cable Management", description: "We hide cables in-wall or use raceway kits for a clean look." },
      { title: "All TV Sizes", description: "From 32\" to 85\"+ TVs — we have the right mounts." },
    ],
    howItWorks: [
      { title: "Plan", description: "We determine the perfect height, position, and mount type." },
      { title: "Mount", description: "We locate studs and securely mount the bracket and TV." },
      { title: "Clean Up", description: "We manage cables and ensure the install looks flawless." },
    ],
    faqItems: [
      { q: "Can you mount a TV above a fireplace?", a: "Yes — we use tilting mounts to ensure the optimal viewing angle above fireplaces." },
      { q: "Will mounting damage my wall?", a: "We use the correct anchors for your wall type and leave minimal, cleanly finished holes." },
    ],
    price: "Starting at $99",
  },
  {
    id: "19", slug: "tv-setup", title: "Smart TV Setup",
    tagline: "Get your Smart TV fully configured and ready to stream.",
    icon: "Tv", category: "Audio & Video",
    commonProblems: ["Smart TV not connecting to WiFi","Streaming apps crashing or not loading","Picture settings need calibration","Remote control pairing issues"],
    whatWeFix: ["WiFi connection and network setup","Netflix, Hulu, Disney+, and all streaming app setup","Account sign-in and profile configuration","Picture and sound calibration","Remote and universal remote programming"],
    whyChooseUs: [
      { title: "All Brands", description: "Samsung, LG, Sony, TCL, Vizio — we support every smart TV brand." },
      { title: "Full App Setup", description: "We install and sign into all your streaming services." },
      { title: "Picture Optimization", description: "We calibrate settings for the best visual experience." },
    ],
    howItWorks: [
      { title: "Connect", description: "We connect your TV to WiFi and update firmware." },
      { title: "Configure", description: "We install all streaming apps and sign into your accounts." },
      { title: "Optimize", description: "We adjust picture and audio settings for your room." },
    ],
    faqItems: [
      { q: "Can you set up parental controls?", a: "Yes — we configure content ratings and PIN-protected parental controls." },
      { q: "Can you connect my soundbar to the TV?", a: "Absolutely — we set up HDMI ARC or Bluetooth soundbar connections." },
    ],
    price: "Starting at $69",
  },
  {
    id: "20", slug: "streaming-device-setup", title: "Streaming Device Setup",
    tagline: "Roku, Fire Stick, Apple TV, Chromecast — set up perfectly.",
    icon: "Play", category: "Audio & Video",
    commonProblems: ["Streaming stick not recognized by TV","Buffering and slow streaming","Can't find apps or channels","Remote not pairing to device"],
    whatWeFix: ["Amazon Fire Stick, Roku, Apple TV, Chromecast setup","WiFi connection and account registration","Streaming app installation","Remote pairing and voice control setup","Screen mirroring configuration"],
    whyChooseUs: [
      { title: "All Devices", description: "We support every major streaming device on the market." },
      { title: "Account Setup", description: "We sign into all your streaming accounts for you." },
      { title: "Network Optimization", description: "We ensure your network delivers buffer-free streaming." },
    ],
    howItWorks: [
      { title: "Connect", description: "We plug in your streaming device and connect it to your TV and WiFi." },
      { title: "Register", description: "We create or sign into your streaming accounts." },
      { title: "Install", description: "We add all your favorite apps and channels." },
    ],
    faqItems: [
      { q: "Which streaming device is best?", a: "It depends on your TV and services. We'll recommend the best fit for your setup and budget." },
      { q: "Can you set up multiple streaming accounts?", a: "Yes — we configure Netflix, Hulu, Disney+, Max, and all other services you subscribe to." },
    ],
    price: "Starting at $49",
  },
  {
    id: "21", slug: "home-theater-setup", title: "Home Theater Setup",
    tagline: "Cinema-quality sound and picture in the comfort of your home.",
    icon: "Volume2", category: "Audio & Video",
    commonProblems: ["Surround sound not working correctly","Receiver showing no audio","Subwoofer not producing bass","Projector and screen alignment issues"],
    whatWeFix: ["AV receiver and surround sound setup","Speaker placement and calibration","Projector and screen installation","HDMI matrix and source switching setup","Streaming and Blu-ray player integration"],
    whyChooseUs: [
      { title: "Acoustic Expertise", description: "We optimize speaker placement for true surround sound." },
      { title: "Full Integration", description: "Every source and device connected and working together." },
      { title: "Calibration Included", description: "We calibrate audio using manufacturer tools like Audyssey." },
    ],
    howItWorks: [
      { title: "Design", description: "We plan the optimal layout for your room's dimensions." },
      { title: "Install", description: "We mount speakers, run cables, and rack equipment." },
      { title: "Calibrate", description: "We tune audio levels and optimize the picture for your room." },
    ],
    faqItems: [
      { q: "Do I need to buy my own equipment?", a: "We can work with equipment you own, or provide recommendations and sourcing assistance." },
      { q: "How long does a home theater setup take?", a: "A typical 5.1 system takes 3-5 hours. Larger systems or new room builds may take longer." },
    ],
    price: "Starting at $149",
  },
  {
    id: "22", slug: "sound-system-setup", title: "Sound System Setup",
    tagline: "Whole-home audio — music in every room, perfectly synced.",
    icon: "Volume2", category: "Audio & Video",
    commonProblems: ["Bluetooth speakers not pairing","Sonos or multi-room audio not syncing","Soundbar producing no sound from TV","Wired speaker connections unclear"],
    whatWeFix: ["Sonos, Bose, and multi-room audio setup","Soundbar installation and TV pairing","Outdoor speaker wiring","AV receiver speaker output configuration","Spotify Connect and streaming integration"],
    whyChooseUs: [
      { title: "Multi-Room Expertise", description: "We design seamless whole-home audio experiences." },
      { title: "Wired & Wireless", description: "We install both traditional wired and modern wireless systems." },
      { title: "Streaming Integration", description: "Spotify, Apple Music, Tidal — controlled from any room." },
    ],
    howItWorks: [
      { title: "Plan", description: "We design the layout to cover all the spaces you want." },
      { title: "Install", description: "We mount speakers and run any necessary cabling." },
      { title: "Configure", description: "We set up the app controls and sync all zones." },
    ],
    faqItems: [
      { q: "Can I control the music in each room separately?", a: "Yes — multi-room systems like Sonos allow independent control per zone." },
      { q: "Do you support outdoor speakers?", a: "Yes, we install weather-resistant outdoor speakers with proper sealing." },
    ],
    price: "Starting at $99",
  },

  // ── Mobile Devices ────────────────────────────────────────────────────────
  {
    id: "23", slug: "mobile-setup", title: "Mobile Device Setup",
    tagline: "Get your smartphone or tablet set up just the way you like it.",
    icon: "Smartphone", category: "Mobile Devices",
    commonProblems: ["New phone needs to be set up from scratch","Apps and data from old phone not transferred","Email and accounts need to be configured","Touch ID or Face ID setup issues"],
    whatWeFix: ["New phone setup and account sign-in","Data and contacts transfer from old phone","Email, social media, and app configuration","Biometric security setup","Cloud backup configuration"],
    whyChooseUs: [
      { title: "All Carriers & Models", description: "iPhone, Android, Samsung — all brands welcome." },
      { title: "Data Migration Included", description: "We transfer everything from your old device." },
      { title: "Privacy Setup", description: "We configure proper privacy and security settings." },
    ],
    howItWorks: [
      { title: "Transfer", description: "We move contacts, photos, and apps from your old phone." },
      { title: "Configure", description: "We sign into all your accounts and set up your apps." },
      { title: "Secure", description: "We set up Face ID, PIN, and backup options." },
    ],
    faqItems: [
      { q: "Can you transfer data from Android to iPhone?", a: "Yes — we use Apple's Move to iOS app or manual methods to ensure a smooth cross-platform transfer." },
      { q: "How long does mobile setup take?", a: "Basic setup is about an hour. Data transfer time depends on how much you have." },
    ],
    price: "Starting at $69",
  },
  {
    id: "24", slug: "iphone-setup", title: "iPhone Setup",
    tagline: "New iPhone? We'll have it fully set up and personalized.",
    icon: "Smartphone", category: "Mobile Devices",
    commonProblems: ["iCloud not syncing or restoring","Face ID not setting up properly","Old iPhone data not transferring","Apple ID login issues"],
    whatWeFix: ["iPhone Quick Start and iCloud restore","iCloud, Apple ID, and App Store setup","Data transfer from old iPhone or Android","iMessage, FaceTime, and email setup","Apple Pay and health data configuration"],
    whyChooseUs: [
      { title: "Apple Specialists", description: "We know iOS and iCloud inside and out." },
      { title: "Quick Start Method", description: "We use Apple's fastest iPhone-to-iPhone transfer process." },
      { title: "Everything Personalized", description: "Wallpaper, shortcuts, widgets — set up your way." },
    ],
    howItWorks: [
      { title: "Activate", description: "We activate your new iPhone and sign into your Apple ID." },
      { title: "Restore", description: "We restore your backup or migrate data from your old phone." },
      { title: "Personalize", description: "We configure your apps, settings, and accessibility options." },
    ],
    faqItems: [
      { q: "Can you help me switch from Android to iPhone?", a: "Yes — we use 'Move to iOS' or manual migration to bring your contacts, photos, and apps over." },
      { q: "Will my apps be available on my new iPhone?", a: "All your purchased apps are available to re-download from the App Store for free." },
    ],
    price: "Starting at $69",
  },
  {
    id: "25", slug: "android-setup", title: "Android Setup",
    tagline: "New Android phone set up and ready to go.",
    icon: "Smartphone", category: "Mobile Devices",
    commonProblems: ["Google account not syncing during setup","Contacts not appearing after setup","Old Android data not transferring","Samsung or Google account merge issues"],
    whatWeFix: ["Google account setup and sync","Android device migration (Samsung Smart Switch, etc.)","Gmail, calendar, and contacts configuration","Google Pay and app setup","Manufacturer account (Samsung, Google) setup"],
    whyChooseUs: [
      { title: "All Android Brands", description: "Samsung, Google Pixel, OnePlus, Motorola — all supported." },
      { title: "Smart Switch Expertise", description: "We use Samsung Smart Switch and other migration tools professionally." },
      { title: "Full Personalization", description: "Home screen, widgets, and settings set to your preference." },
    ],
    howItWorks: [
      { title: "Activate", description: "We power on and register your device with your Google account." },
      { title: "Migrate", description: "We transfer data from your old Android using the appropriate tool." },
      { title: "Configure", description: "We install your apps and configure your settings." },
    ],
    faqItems: [
      { q: "Can you transfer from iPhone to Android?", a: "Yes — we handle cross-platform migration including contacts, photos, and essential data." },
      { q: "What about Samsung-specific features?", a: "We set up Samsung Pay, Bixby, and Samsung ecosystem features as requested." },
    ],
    price: "Starting at $69",
  },
  {
    id: "26", slug: "tablet-setup", title: "Tablet Setup",
    tagline: "iPad or Android tablet — set up and personalized for you.",
    icon: "Tablet", category: "Mobile Devices",
    commonProblems: ["Tablet won't activate or connect","Parental controls not configured","School or work apps need setup","Old tablet data not transferred"],
    whatWeFix: ["iPad and Android tablet activation","App installation and account setup","Parental controls and Screen Time configuration","Keyboard and Apple Pencil pairing","Email and cloud storage configuration"],
    whyChooseUs: [
      { title: "All Tablets", description: "iPad, Samsung Galaxy Tab, Amazon Fire — we support every model." },
      { title: "Kid-Friendly Setup", description: "We configure safe parental controls for children's tablets." },
      { title: "Accessory Configuration", description: "We pair keyboards, styluses, and cases." },
    ],
    howItWorks: [
      { title: "Activate", description: "We set up your tablet and sign into the appropriate accounts." },
      { title: "Install", description: "We add the apps you need, including educational or productivity tools." },
      { title: "Secure", description: "We set up passcodes, parental controls, and backup." },
    ],
    faqItems: [
      { q: "Can you set up a tablet for a child?", a: "Yes — we configure age-appropriate parental controls, content filters, and screen time limits." },
      { q: "Can you set up an iPad for work?", a: "Absolutely — we configure work email, VPN, and productivity apps." },
    ],
    price: "Starting at $59",
  },
  {
    id: "27", slug: "app-installation", title: "App Installation",
    tagline: "Get any app installed, configured, and ready to use.",
    icon: "Download", category: "Mobile Devices",
    commonProblems: ["App won't download or install","App crashes immediately after opening","Can't find app in App Store or Google Play","In-app purchase or subscription issues"],
    whatWeFix: ["App Store and Google Play troubleshooting","Storage and compatibility issue resolution","App data migration and account transfer","Subscription and billing configuration","App settings optimization"],
    whyChooseUs: [
      { title: "Any App", description: "Social, productivity, financial, health — we install and configure anything." },
      { title: "Compatibility Check", description: "We verify your device meets the app's requirements." },
      { title: "Account Setup", description: "We create accounts and configure app settings for you." },
    ],
    howItWorks: [
      { title: "Identify", description: "We confirm the right app and version for your device." },
      { title: "Install", description: "We download and install it correctly." },
      { title: "Configure", description: "We set up your account and walk you through how to use it." },
    ],
    faqItems: [
      { q: "Can you install apps on a senior's phone?", a: "Yes — we specialize in setting up essential apps for seniors with large text and simplified configurations." },
      { q: "What if the app isn't available in my country's store?", a: "We can assist with region-unlocking and alternative installation methods where legally permissible." },
    ],
    price: "Starting at $39",
  },
  {
    id: "28", slug: "data-transfer", title: "Data Transfer",
    tagline: "Move all your photos, contacts, and files to your new device.",
    icon: "ArrowLeftRight", category: "Mobile Devices",
    commonProblems: ["Contacts missing after switching phones","Photos not transferred to new device","Text message history lost","WhatsApp and other app data not moved"],
    whatWeFix: ["Phone-to-phone data migration","Photo and video library transfer","Contact and calendar sync","WhatsApp, Signal, and app data transfer","Cloud backup setup for future transfers"],
    whyChooseUs: [
      { title: "Zero Data Loss", description: "We verify every file is transferred before wiping the old device." },
      { title: "Cross-Platform", description: "iOS to Android, Android to iOS — we handle it all." },
      { title: "Backup Setup", description: "We configure cloud backup so this is never an issue again." },
    ],
    howItWorks: [
      { title: "Backup", description: "We back up your old device fully before starting." },
      { title: "Transfer", description: "We migrate all selected data to your new device." },
      { title: "Verify", description: "We confirm every contact, photo, and file made it across." },
    ],
    faqItems: [
      { q: "Can you transfer WhatsApp messages?", a: "Yes — we use official WhatsApp transfer methods and third-party tools to move your full chat history." },
      { q: "What if my old phone is broken?", a: "If the screen works, we can usually still transfer data. Completely dead phones may need data recovery first." },
    ],
    price: "Starting at $59",
  },

  // ── WiFi & Network ────────────────────────────────────────────────────────
  {
    id: "29", slug: "network-wifi", title: "Network & WiFi",
    tagline: "Seamless connectivity for your home or office.",
    icon: "Wifi", category: "WiFi & Network",
    commonProblems: ["Dead zones or weak WiFi signal","Frequent disconnections","Slow internet speeds","Difficulty connecting new devices"],
    whatWeFix: ["Router configuration and setup","Mesh WiFi system installation","Network security optimization","Cable running and management","Troubleshooting connectivity drops"],
    whyChooseUs: [
      { title: "Whole-Home Coverage", description: "Eliminate dead zones permanently." },
      { title: "Secure Networks", description: "Protect your data from unauthorized access." },
      { title: "Optimized Speeds", description: "Get the speed you're actually paying for." },
    ],
    howItWorks: [
      { title: "Assessment", description: "We evaluate your space and current network setup." },
      { title: "Design", description: "We recommend the best router or mesh system for you." },
      { title: "Implementation", description: "We install and configure the network for max coverage." },
    ],
    faqItems: [
      { q: "What's the difference between a regular router and a mesh system?", a: "A mesh system uses multiple access points to blanket your home in WiFi, whereas a traditional router broadcasts from a single point." },
      { q: "Can you help me secure my network?", a: "Yes, we set up strong encryption, change default passwords, and can implement guest networks." },
    ],
    price: "Starting at $99",
  },
  {
    id: "30", slug: "router-setup", title: "Router Setup",
    tagline: "New router installed and configured for maximum speed.",
    icon: "Wifi", category: "WiFi & Network",
    commonProblems: ["New router not connecting to internet","Old router settings need to be carried over","Guest network needs to be configured","QoS settings for gaming or streaming"],
    whatWeFix: ["ISP modem and router connection","SSID and password configuration","Dual-band (2.4GHz / 5GHz) optimization","Guest WiFi network setup","Port forwarding and firewall configuration"],
    whyChooseUs: [
      { title: "All Router Brands", description: "Netgear, Asus, TP-Link, Linksys, Eero — all supported." },
      { title: "ISP Coordination", description: "We work around ISP settings to maximize your plan speed." },
      { title: "Security First", description: "We always update firmware and set strong encryption." },
    ],
    howItWorks: [
      { title: "Connect", description: "We connect your router to your modem and ISP." },
      { title: "Configure", description: "We set your WiFi name, password, and dual-band settings." },
      { title: "Optimize", description: "We configure QoS, guest network, and security settings." },
    ],
    faqItems: [
      { q: "Should I use 2.4GHz or 5GHz?", a: "5GHz is faster but shorter range — ideal for streaming. 2.4GHz has better range — ideal for smart home devices." },
      { q: "Can you transfer settings from my old router?", a: "We can replicate most settings including your network name and password." },
    ],
    price: "Starting at $69",
  },
  {
    id: "31", slug: "internet-troubleshooting", title: "Internet Troubleshooting",
    tagline: "Diagnose and fix any internet connectivity issue fast.",
    icon: "Globe", category: "WiFi & Network",
    commonProblems: ["Internet dropping multiple times per day","Specific devices can't connect","Slow speeds despite fast plan","ISP outages vs. home network issues"],
    whatWeFix: ["Network diagnosis and fault isolation","Modem and router restart and reconfiguration","DNS and IP conflict resolution","ISP escalation support documentation","Cable and hardware fault identification"],
    whyChooseUs: [
      { title: "Root Cause Analysis", description: "We find the exact cause — not just restart and hope." },
      { title: "ISP Liaison", description: "We provide you with the documentation to get proper ISP support." },
      { title: "Fast Resolution", description: "Most internet issues resolved within one visit or session." },
    ],
    howItWorks: [
      { title: "Test", description: "We run a full diagnostic on your network and internet connection." },
      { title: "Isolate", description: "We determine if the issue is with your ISP, modem, or home network." },
      { title: "Fix", description: "We resolve the home-side issues and guide ISP resolution for their side." },
    ],
    faqItems: [
      { q: "How do I know if it's the ISP or my equipment?", a: "We run tests that clearly distinguish between ISP line issues and home network equipment problems." },
      { q: "Can you help me get a credit from my ISP for outages?", a: "We provide you with diagnostic data that strengthens your case when requesting credits." },
    ],
    price: "Starting at $59",
  },
  {
    id: "32", slug: "network-setup", title: "Network Setup",
    tagline: "Complete wired and wireless network for your home or office.",
    icon: "Network", category: "WiFi & Network",
    commonProblems: ["Need a new network built from scratch","Wired connections needed for gaming or office","Multiple VLANs for home and business traffic","NAS or server needs to be accessible on network"],
    whatWeFix: ["Full network design and implementation","Ethernet cable running and termination","Managed switch configuration","VLAN and network segmentation","NAS and server integration"],
    whyChooseUs: [
      { title: "Scalable Design", description: "Networks built to grow with your home or business." },
      { title: "Wired & Wireless", description: "Cat6 Ethernet combined with WiFi for the best of both worlds." },
      { title: "Documented Setup", description: "We leave you a full network diagram and documentation." },
    ],
    howItWorks: [
      { title: "Design", description: "We create a network plan based on your space and requirements." },
      { title: "Install", description: "We run cables, mount equipment, and configure everything." },
      { title: "Test", description: "We verify speed, connectivity, and security across every device." },
    ],
    faqItems: [
      { q: "Do you run Ethernet cable through walls?", a: "Yes — we professionally run Cat6 cable through walls and ceilings for clean, permanent wired connections." },
      { q: "Can you set up a network for a small business?", a: "Absolutely — we design and install business-grade networks with managed switches and proper segmentation." },
    ],
    price: "Starting at $129",
  },
  {
    id: "33", slug: "mesh-wifi", title: "Mesh WiFi Installation",
    tagline: "Eliminate every WiFi dead zone with a whole-home mesh system.",
    icon: "Wifi", category: "WiFi & Network",
    commonProblems: ["Weak signal in bedrooms, garage, or backyard","Constantly switching between router and extender","Devices dropping connection when moving rooms","Need WiFi coverage in detached buildings"],
    whatWeFix: ["Eero, Orbi, Google Nest WiFi, and more","Optimal node placement for maximum coverage","Ethernet backhaul wiring for peak performance","App-based network management setup","Parental controls and device prioritization"],
    whyChooseUs: [
      { title: "Site Survey Included", description: "We physically walk your property to place nodes optimally." },
      { title: "Wired Backhaul", description: "We run Ethernet to nodes where possible for maximum speed." },
      { title: "All Major Brands", description: "Eero, Orbi, Google Nest, TP-Link Deco, Ubiquiti." },
    ],
    howItWorks: [
      { title: "Survey", description: "We map your home and identify coverage gaps." },
      { title: "Place & Install", description: "We optimally position and wire each mesh node." },
      { title: "Configure", description: "We set up the management app and optimize performance." },
    ],
    faqItems: [
      { q: "How many mesh nodes do I need?", a: "It depends on your home's square footage and layout — we'll assess and recommend the right number." },
      { q: "Is mesh WiFi better than a WiFi extender?", a: "Yes — mesh nodes communicate on a dedicated backhaul, providing seamless roaming that extenders can't match." },
    ],
    price: "Starting at $119",
  },

  // ── Home Security ─────────────────────────────────────────────────────────
  {
    id: "34", slug: "cybersecurity", title: "Cybersecurity",
    tagline: "Protect your digital life from hackers, scams, and data breaches.",
    icon: "ShieldCheck", category: "Home Security",
    commonProblems: ["Suspicious account activity or unauthorized access","Identity theft concerns","Work-from-home network security gaps","Children's online safety worries"],
    whatWeFix: ["Security audit of all devices and accounts","Two-factor authentication setup across all accounts","VPN configuration for safe browsing","Password manager setup and migration","Dark web monitoring and breach response"],
    whyChooseUs: [
      { title: "Proactive Protection", description: "We don't wait for an attack — we prevent it." },
      { title: "Family Safety", description: "We secure every device and account in your household." },
      { title: "Business-Grade Security", description: "Enterprise security practices adapted for home users." },
    ],
    howItWorks: [
      { title: "Audit", description: "We assess all devices, accounts, and network connections for vulnerabilities." },
      { title: "Secure", description: "We implement layered security across your digital footprint." },
      { title: "Monitor", description: "We set up ongoing monitoring and alert you to any threats." },
    ],
    faqItems: [
      { q: "Do I really need a VPN at home?", a: "A VPN is most important on public WiFi, but at home it adds an extra layer of privacy from your ISP and potential attackers." },
      { q: "What's the most important thing I can do for cybersecurity?", a: "Enable two-factor authentication on all accounts. It stops 99% of automated attacks." },
    ],
    price: "Starting at $99",
  },
  {
    id: "35", slug: "security-camera", title: "Security Camera Setup",
    tagline: "Professional outdoor security camera installation.",
    icon: "Camera", category: "Home Security",
    commonProblems: ["Camera not covering the right angles","Night vision footage too grainy","Motion alerts triggering on wind and animals","Wired vs. wireless camera decision"],
    whatWeFix: ["Outdoor security camera installation","Arlo, Ring, Reolink, Lorex, and more","PoE and wireless system setup","NVR/DVR configuration","Remote viewing app and notifications"],
    whyChooseUs: [
      { title: "Coverage Planning", description: "We design a camera layout that leaves no blind spots." },
      { title: "Professional Mounting", description: "Weather-tight, properly angled, and tamper-resistant." },
      { title: "Local & Cloud Storage", description: "We configure the best recording option for your budget." },
    ],
    howItWorks: [
      { title: "Survey", description: "We walk your property and plan optimal camera positions." },
      { title: "Install", description: "We mount, wire, and connect every camera." },
      { title: "Configure", description: "We set up recording, motion alerts, and remote access." },
    ],
    faqItems: [
      { q: "How many cameras do I need?", a: "Most homes benefit from 4-8 cameras covering all entry points, driveways, and backyards." },
      { q: "Will cameras work during a power outage?", a: "PoE cameras on a UPS backup will continue recording. Battery cameras run independently of power." },
    ],
    price: "Starting at $99",
  },
  {
    id: "36", slug: "alarm-system-setup", title: "Alarm System Setup",
    tagline: "Complete home alarm system — monitored or self-monitored.",
    icon: "Bell", category: "Home Security",
    commonProblems: ["New alarm system needs installation","Sensors not triggering correctly","Monitoring service app setup","Existing system needs updating or expansion"],
    whatWeFix: ["SimpliSafe, Ring Alarm, ADT, and Abode setup","Door, window, and motion sensor installation","Hub and keypad configuration","Professional or self-monitoring plan activation","Smart home integration (Alexa, Google)"],
    whyChooseUs: [
      { title: "All Systems", description: "We install and configure every major DIY and professional system." },
      { title: "Full Coverage Planning", description: "We ensure every entry point is protected." },
      { title: "Monitoring Setup", description: "We help you choose and activate the right monitoring plan." },
    ],
    howItWorks: [
      { title: "Plan", description: "We assess your home layout to determine sensor placement." },
      { title: "Install", description: "We mount the hub, keypad, and all sensors." },
      { title: "Activate", description: "We configure the app, set codes, and test every sensor." },
    ],
    faqItems: [
      { q: "Do I need professional monitoring?", a: "Not necessarily — self-monitoring via app notifications works well for many homeowners. We'll discuss the options." },
      { q: "Can the alarm system integrate with my smart home?", a: "Yes — most modern systems integrate with Alexa, Google, and Apple HomeKit for unified control." },
    ],
    price: "Starting at $119",
  },

  // ── Around the Home ───────────────────────────────────────────────────────
  {
    id: "37", slug: "remote-support", title: "Remote Tech Support",
    tagline: "Expert tech help delivered directly to your screen in minutes.",
    icon: "Headphones", category: "Around the Home",
    commonProblems: ["Need quick help with a tech issue","Can't figure out a setting or app","Minor problem that doesn't need an on-site visit","Something just stopped working unexpectedly"],
    whatWeFix: ["Software troubleshooting and fixes","Settings and configuration changes","Password resets and account access","Quick diagnostics and advice","App setup and guidance"],
    whyChooseUs: [
      { title: "15-Minute Response", description: "Connect with a tech in under 15 minutes." },
      { title: "Fully Encrypted", description: "You see everything on your screen in real time." },
      { title: "Flat-Rate Pricing", description: "Know exactly what you'll pay before we start." },
    ],
    howItWorks: [
      { title: "Connect", description: "We send you a secure link to start the remote session." },
      { title: "Fix", description: "Our technician resolves the issue while you watch." },
      { title: "Done", description: "We explain what was done and how to prevent it in the future." },
    ],
    faqItems: [
      { q: "Is remote support secure?", a: "Yes — all sessions are fully encrypted and you can see everything happening on your screen. You can disconnect at any time." },
      { q: "What if the problem can't be fixed remotely?", a: "If your issue requires an on-site visit, we'll schedule one at no extra diagnostic charge." },
    ],
    price: "Starting at $49",
  },
  {
    id: "38", slug: "general-tech-help", title: "General Tech Help",
    tagline: "Not sure what you need? We'll figure it out together.",
    icon: "HelpCircle", category: "Around the Home",
    commonProblems: ["Tech device not working but unsure why","Need a recommendation for a tech purchase","Want to learn how to use a device or app","Multiple small issues to sort out"],
    whatWeFix: ["General device troubleshooting","Tech consultation and buying advice","Device setup and basic configuration","Teaching sessions for seniors","Multi-device check-up visits"],
    whyChooseUs: [
      { title: "No Jargon", description: "We explain everything in plain, friendly language." },
      { title: "Patient Experts", description: "We take the time to ensure you understand and feel confident." },
      { title: "Flexible Service", description: "We handle any tech issue regardless of device or brand." },
    ],
    howItWorks: [
      { title: "Talk", description: "We listen to what's happening and ask the right questions." },
      { title: "Diagnose", description: "We identify the problem or what's needed." },
      { title: "Resolve", description: "We fix it, set it up, or explain what needs to be done." },
    ],
    faqItems: [
      { q: "Can you help seniors learn to use technology?", a: "Absolutely — patient, jargon-free teaching sessions are one of our most popular services." },
      { q: "Do you give advice on what tech to buy?", a: "Yes — we provide unbiased recommendations based on your needs and budget, with no commission." },
    ],
    price: "Starting at $49",
  },
  {
    id: "39", slug: "device-setup", title: "Device Setup",
    tagline: "Any new tech device — set up, connected, and working perfectly.",
    icon: "Settings", category: "Around the Home",
    commonProblems: ["New device needs initial setup","Gift that needs to be configured","Device not connecting to WiFi or other devices","Multiple new devices to set up at once"],
    whatWeFix: ["Out-of-box setup for any device","WiFi and account configuration","Pairing with existing devices","App download and initial configuration","User profile and preference setup"],
    whyChooseUs: [
      { title: "Any Device", description: "Speakers, tablets, cameras, routers — we set them all up." },
      { title: "Same-Day Service", description: "We often have same-day or next-day availability." },
      { title: "Multi-Device Discounts", description: "Set up multiple devices in one visit and save." },
    ],
    howItWorks: [
      { title: "Unbox", description: "We unpack and inspect your new device." },
      { title: "Connect", description: "We connect it to your network and accounts." },
      { title: "Configure", description: "We personalize settings and demonstrate how to use it." },
    ],
    faqItems: [
      { q: "Can you set up a device as a gift before giving it?", a: "Yes — we can pre-configure devices as gifts, with the recipient's accounts added once they receive it." },
      { q: "Do you take away packaging and old devices?", a: "We can assist with responsible recycling and disposal of old devices upon request." },
    ],
    price: "Starting at $49",
  },
];

export type ServiceCategory = {
  name: string;
  slug: string;
  icon: string;
  services: string[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    name: "Computers & Printers",
    slug: "computers-printers",
    icon: "Monitor",
    services: ["computer-repair","virus-removal","pc-setup","mac-support","slow-pc-fix","software-installation","printer-support","email-support","data-recovery"],
  },
  {
    name: "Smart Home",
    slug: "smart-home",
    icon: "Home",
    services: ["smart-home-setup","smart-lights","smart-thermostat","smart-doorbell","smart-lock","smart-camera","alexa-setup","google-home-setup"],
  },
  {
    name: "Audio & Video",
    slug: "audio-video",
    icon: "Tv",
    services: ["tv-mounting","tv-setup","streaming-device-setup","home-theater-setup","sound-system-setup"],
  },
  {
    name: "Mobile Devices",
    slug: "mobile-devices",
    icon: "Smartphone",
    services: ["mobile-setup","iphone-setup","android-setup","tablet-setup","app-installation","data-transfer"],
  },
  {
    name: "WiFi & Network",
    slug: "wifi-network",
    icon: "Wifi",
    services: ["network-wifi","router-setup","internet-troubleshooting","network-setup","mesh-wifi"],
  },
  {
    name: "Home Security",
    slug: "home-security",
    icon: "ShieldCheck",
    services: ["cybersecurity","security-camera","alarm-system-setup","smart-doorbell","smart-lock"],
  },
  {
    name: "Around the Home",
    slug: "around-home",
    icon: "HelpCircle",
    services: ["remote-support","general-tech-help","device-setup"],
  },
];
