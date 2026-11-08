export interface ApplianceProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  altText: string;
  featuredItems: string[];
  keyHighlights: string[];
}

export interface ApplianceServiceItem {
  id: string;
  title: string;
  category: 'kitchen' | 'home' | 'cooking' | 'maintenance';
  summary: string;
  commonIssues: string[];
  serviceScope: string[];
  turnaroundTime: string;
  image?: string;
}

export interface ValueCard {
  title: string;
  description: string;
  iconName: string;
}

export interface WhyChooseItem {
  id: number;
  title: string;
  description: string;
  highlight: string;
}

export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  description: string;
  timeframe: string;
}

export const COMPANY_DETAILS = {
  businessName: 'V WIN Enterprises',
  brandName: 'V WIN Home Appliances',
  tagline: 'Your Trusted Partner for Home Appliances',
  subheading: 'Complete Home Appliance Sales, Repair, Maintenance & Technical Services.',
  phonePlaceholder: '+91 99202 13799',
  whatsappPlaceholder: '+91 99202 13799',
  mobileNumberRaw: '9920213799',
  email: 'vwinen@gmail.com',
  address: 'Commercial Appliance Hub, Station Road, Industrial Area',
  hours: 'Mon – Sat: 9:00 AM – 8:00 PM (Sunday Closed)',
  servicePledge: 'Genuine Replacement Parts · Experienced Technicians · Transparent Diagnostics',
};

export const CORE_VALUES: ValueCard[] = [
  {
    title: 'Customer Satisfaction',
    description: 'We prioritize our customers needs with attentive listening, prompt turnaround, and polite, transparent communication at every step.',
    iconName: 'Smile',
  },
  {
    title: 'Technical Reliability',
    description: 'Every repair and servicing operation adheres strictly to electrical safety standards, tested components, and meticulous calibration.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Honest Service',
    description: 'Fair technical assessment with upfront diagnosis, genuine replacement parts, and no hidden or unnecessary charges.',
    iconName: 'CheckCircle2',
  },
  {
    title: 'Quality Workmanship',
    description: 'Hands-on technical precision backed by practical experience across small, medium, and heavy-duty household appliances.',
    iconName: 'Wrench',
  },
  {
    title: 'Long-term Relationships',
    description: 'Building enduring trust with homeowners and commercial clients through dependable after-service support and preventive advice.',
    iconName: 'HeartHandshake',
  },
];

export const PRODUCT_CATEGORIES: ApplianceProductCategory[] = [
  {
    id: 'kitchen-appliances',
    name: 'Kitchen Appliances',
    description: 'High-performance culinary appliances designed to streamline everyday food preparation, blending, grinding, and fast cooking.',
    image: '/src/assets/images/category_kitchen_appliances_1794140430376.jpg',
    altText: 'V WIN Kitchen Appliances - Mixer Grinders, Food Processors, Blenders and Kettles',
    featuredItems: [
      'Mixer Grinders',
      'Food Processors',
      'Hand Blenders',
      'Gas Stoves',
      'Electric Kettles',
      'Toasters',
      'Air Fryers',
      'Rice Cookers',
    ],
    keyHighlights: [
      'Commercial-grade copper motors and heavy-gauge stainless steel jars',
      'Ergonomic controls, pulse speeds, and safety overload cutoff switches',
      'Energy-efficient heating coils and food-grade heat-resistant components',
      'Full technical repair and replacement parts support available at V WIN',
    ],
  },
  {
    id: 'home-appliances',
    name: 'Home Appliances',
    description: 'Essential household electrical utilities for home comfort, fabric garment care, ambient air circulation, and deep cleaning.',
    image: '/src/assets/images/category_home_appliances_1794140430254.jpg',
    altText: 'V WIN Home Appliances - Electric Irons, Ceiling Fans, Geysers and Vacuum Cleaners',
    featuredItems: [
      'Electric Irons',
      'Ceiling Fans',
      'Table Fans',
      'Water Heaters / Geysers',
      'Vacuum Cleaners',
    ],
    keyHighlights: [
      'Advanced thermostat safety valves and corrosion-resistant heating elements',
      'High-velocity aerodynamic fan blades with silent motor windings',
      'Multi-surface filtration vacuums with durable suction assemblies',
      'Comprehensive maintenance servicing and scheduled safety checkups',
    ],
  },
  {
    id: 'cooking-appliances',
    name: 'Cooking Appliances',
    description: 'Modern thermal and convection cooking appliances designed for versatile baking, reheating, pressure cooking, and precision culinary execution.',
    image: '/src/assets/images/category_cooking_appliances_1794140431896.jpg',
    altText: 'V WIN Cooking Appliances - Microwave Ovens, OTG Ovens and Pressure Cookers',
    featuredItems: [
      'Microwave Ovens',
      'OTG Ovens',
      'Pressure Cookers',
      'Electric Cooking Appliances',
    ],
    keyHighlights: [
      'Uniform heat distribution chambers and digital sensor controls',
      'Safety-interlocked doors, heat-shielded handles, and heavy safety valves',
      'Durable heating filaments and commercial-grade baking trays',
      'Expert diagnostic calibration for temperature and timing sensors',
    ],
  },
  {
    id: 'other-appliances',
    name: 'Other Appliances',
    description: 'Specialized domestic electrical appliances, flour mills, and everyday household utility machines that support smooth home routines.',
    image: '/src/assets/images/hero_modern_appliances_1794140429239.jpg',
    altText: 'V WIN Domestic Appliances - Atta Chakki and Small Household Electrical Appliances',
    featuredItems: [
      'Atta Chakki (Domestic Flour Mills)',
      'Small Household Electrical Appliances',
      'Other Domestic Appliances',
      'Motorized Kitchen Utilities',
    ],
    keyHighlights: [
      'Heavy-duty domestic grain grinding stones with auto-overload cutoff',
      'Compact auxiliary electric units engineered for daily family reliability',
      'Rigorous wiring insulation meeting Indian domestic safety standards',
      'Dedicated genuine spare parts and periodic tune-up support',
    ],
  },
];

export const REPAIR_SERVICES: ApplianceServiceItem[] = [
  {
    id: 'gas-stove-repair',
    title: 'Gas Stove Repair',
    category: 'kitchen',
    summary: 'Comprehensive inspection of brass burners, valve cleaning, gas leakage prevention, and auto-ignition spark restoration.',
    commonIssues: ['Low yellow flame', 'Gas smell / valve leakage', 'Ignition spark failure', 'Clogged burner jets'],
    serviceScope: ['Burner orifice cleaning', 'Gas valve re-greasing', 'Thermocouple check', 'Flame pressure balancing'],
    turnaroundTime: 'Same-day / On-demand diagnosis',
    image: '/src/assets/images/gas_stove_repair_3d.png',
  },
  {
    id: 'mixer-grinder-repair',
    title: 'Mixer Grinder Repair',
    category: 'kitchen',
    summary: 'Precision repair for heavy motor units, jar couplers, blade shaft alignment, and electrical carbon brush replacement.',
    commonIssues: ['Motor burning smell', 'Coupler teeth worn out', 'Jar leaking from bottom', 'Speed regulator not working'],
    serviceScope: ['Armature & field coil testing', 'Rubber coupler replacement', 'Bushing lubrication', 'Overload switch renewal'],
    turnaroundTime: 'Within 24 Hours',
  },
  {
    id: 'hand-blender-repair',
    title: 'Hand Blender Repair',
    category: 'kitchen',
    summary: 'Servicing for hand blenders, chopper gearboxes, internal drive shafts, and variable speed trigger switches.',
    commonIssues: ['Blade not spinning under load', 'Excessive vibration', 'Overheating motor housing', 'Damaged cord wire'],
    serviceScope: ['Internal gearbox gear change', 'Shaft alignment', 'Switch contact cleaning', 'Safety insulation testing'],
    turnaroundTime: 'Same-day service available',
  },
  {
    id: 'microwave-oven-repair',
    title: 'Microwave Oven Repair',
    category: 'cooking',
    summary: 'High-voltage technical diagnosis, magnetron inspection, turntable motor fix, and digital keypad membrane servicing.',
    commonIssues: ['Microwave runs but does not heat', 'Sparking inside chamber', 'Turntable glass not rotating', 'Keypad buttons unresponsive'],
    serviceScope: ['Magnetron radiation & HV test', 'High-voltage capacitor discharge test', 'Mica sheet replacement', 'Door latch interlock check'],
    turnaroundTime: '24–48 Hours',
  },
  {
    id: 'electric-iron-repair',
    title: 'Electric Iron Repair',
    category: 'home',
    summary: 'Dry and steam iron maintenance, thermostat bi-metallic strip calibration, soleplate cleaning, and thermal fuse replacement.',
    commonIssues: ['Iron tripping home circuit breaker', 'No heating at all', 'Steam not venting / water leaking', 'Thermostat knob loose'],
    serviceScope: ['Thermostat calibration', 'Thermal cut-off fuse replacement', 'Steam chamber descaling', 'Heat-resistant cord wiring'],
    turnaroundTime: 'Same-day pickup / express',
  },
  {
    id: 'geyser-repair',
    title: 'Geyser Repair',
    category: 'home',
    summary: 'Instant and storage water heater maintenance, copper heating element replacement, and thermostat safety valve servicing.',
    commonIssues: ['Water not heating adequately', 'Electric shock / earth leakage', 'Water leaking from tank base', 'Thermostat cut-off trip'],
    serviceScope: ['Heavy-duty heating element test', 'Magnesium anode rod inspection', 'Pressure relief safety valve check', 'Tank sediment flushing'],
    turnaroundTime: 'Within 24 Hours',
  },
  {
    id: 'fan-repair',
    title: 'Fan Repair',
    category: 'home',
    summary: 'Servicing for ceiling fans, table fans, and wall-mounted fans, including capacitor changes, bearing greasing, and rewinding.',
    commonIssues: ['Slow rotation speed', 'Humming noise with no spin', 'Wobbling ceiling rod', 'Overheating motor casing'],
    serviceScope: ['Motor run-capacitor replacement', 'Ball bearing greasing / replacement', 'Stator winding continuity test', 'Blade angle balancing'],
    turnaroundTime: 'Same-day service',
  },
  {
    id: 'toaster-repair',
    title: 'Toaster Repair',
    category: 'kitchen',
    summary: 'Repair of 2-slice and 4-slice pop-up toasters, heating nichrome wire restoration, and carriage latch mechanism tuning.',
    commonIssues: ['Bread carriage will not stay down', 'One side burning while other is raw', 'Heating elements not glowing', 'Crumb buildup sparks'],
    serviceScope: ['Electromagnet latch inspection', 'Nichrome wire continuity test', 'Timer rheostat adjustment', 'Chamber descaling'],
    turnaroundTime: 'Within 24 Hours',
  },
  {
    id: 'air-fryer-repair',
    title: 'Air Fryer Repair',
    category: 'kitchen',
    summary: 'Advanced servicing for digital and manual air fryers, circulation fan repair, thermostat sensors, and heating coil fixes.',
    commonIssues: ['Food not crisping / fan stopped', 'Appliance suddenly powers off', 'Digital error codes on screen', 'Unusual burning odor'],
    serviceScope: ['High-speed convection fan check', 'Heating coil resistance calibration', 'Thermal safety cutoff check', 'Power PCB board repair'],
    turnaroundTime: '24–48 Hours',
  },
  {
    id: 'food-processor-repair',
    title: 'Food Processor Repair',
    category: 'kitchen',
    summary: 'Multi-functional food prep machine servicing, speed selector switches, safety bowl interlock locks, and slicing blade shafts.',
    commonIssues: ['Machine refuses to turn on', 'Chopping bowl lid lock jammed', 'High-pitch squealing sound', 'Speed control unresponsive'],
    serviceScope: ['Safety microswitch realignment', 'Planetary gear lubrication', 'Blade spindle bearing overhaul', 'Motor armature servicing'],
    turnaroundTime: 'Within 24 Hours',
  },
  {
    id: 'pressure-cooker-servicing',
    title: 'Pressure Cooker Servicing',
    category: 'cooking',
    summary: 'Mechanical safety overhaul for standard and induction-bottom pressure cookers, vent tube clearance, and lid seal tuning.',
    commonIssues: ['Steam escaping from sides of lid', 'Weight valve not whistling', 'Fusible safety plug melted', 'Lid warped or hard to lock'],
    serviceScope: ['Food-grade silicon gasket renewal', 'Vent pipe ultrasonic clearing', 'Lid rim truing and leveling', 'Safety valve replacement'],
    turnaroundTime: 'Express 1-hour walk-in',
  },
  {
    id: 'general-household-maintenance',
    title: 'General Household Appliance Maintenance',
    category: 'maintenance',
    summary: 'Periodic preventative health checkups and electrical safety testing for small to medium residential electrical appliances.',
    commonIssues: ['Intermittent power disconnections', 'Frayed electrical cables', 'Excessive operating heat', 'Loose physical switches'],
    serviceScope: ['Insulation resistance (Megger) test', 'Internal dust & grease cleanout', 'Moving parts lubrication', 'Safety grounding inspection'],
    turnaroundTime: 'Flexible scheduling',
  },
];

export const WHY_CHOOSE_US: WhyChooseItem[] = [
  {
    id: 1,
    title: 'Practical Technical Experience',
    description: 'Hands-on troubleshooting knowledge across complex household electrical and mechanical appliances ensures quick, accurate issue diagnosis.',
    highlight: 'Experienced diagnosis',
  },
  {
    id: 2,
    title: 'Multiple Appliance Service Categories',
    description: 'From kitchen mixer grinders and gas stoves to domestic water heaters and microwave ovens, find complete service under one roof.',
    highlight: 'All-in-one solutions',
  },
  {
    id: 3,
    title: 'Customer-Focused Approach',
    description: 'Honest recommendations tailored to your appliances genuine condition. We advise you transparently on repair viability and parts care.',
    highlight: 'Honest guidance',
  },
  {
    id: 4,
    title: 'Reliable Repair Solutions',
    description: 'We test all electrical circuits, thermal cutoffs, and motor windings thoroughly before handover to ensure lasting performance.',
    highlight: 'Tested reliability',
  },
  {
    id: 5,
    title: 'Professional Maintenance',
    description: 'Preventive servicing programs designed to catch minor wear and tear before they turn into costly breakdowns and safety risks.',
    highlight: 'Preventive care',
  },
  {
    id: 6,
    title: 'Convenient Customer Support',
    description: 'Direct phone, WhatsApp, and online enquiry touchpoints with prompt response times for quotes, status checks, and bookings.',
    highlight: 'Responsive support',
  },
];

export const SERVICE_PROCESS: ProcessStep[] = [
  {
    step: 'Step 1',
    number: '01',
    title: 'Contact Us',
    description: 'Reach out via our phone helpline, WhatsApp, or submit your appliance enquiry through our online booking form.',
    timeframe: 'Immediate response',
  },
  {
    step: 'Step 2',
    number: '02',
    title: 'Describe Your Appliance Problem',
    description: 'Provide details on your appliance type, brand/model, and observed symptoms (e.g., motor noise, heating failure, gas leak).',
    timeframe: 'Quick symptom intake',
  },
  {
    step: 'Step 3',
    number: '03',
    title: 'Technical Assessment',
    description: 'Our technical specialists examine electrical circuits, mechanical parts, and heating components to identify the exact root cause.',
    timeframe: 'Transparent diagnosis',
  },
  {
    step: 'Step 4',
    number: '04',
    title: 'Repair and Maintenance Service',
    description: 'Precision servicing with quality components, thorough performance testing, safety verification, and customer handover.',
    timeframe: 'Quality verified handover',
  },
];
