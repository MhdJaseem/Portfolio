export interface ITSupportCategory {
  id: string;
  title: string;
  description: string;
  tags: string[];
  iconName: 'monitor' | 'hardware' | 'network' | 'itsm' | 'microsoft' | 'security';
}

export const itSupportCategories: ITSupportCategory[] = [
  {
    id: 'windows-desktop',
    title: 'Windows & Desktop Support',
    description:
      'Building practical knowledge in Windows OS support, desktop troubleshooting, device setup, drivers, printers and peripherals.',
    tags: [
      'Windows',
      'Desktop Support',
      'Device Setup',
      'Drivers',
      'Printers',
      'Peripherals',
    ],
    iconName: 'monitor',
  },
  {
    id: 'hardware-troubleshooting',
    title: 'Hardware & Troubleshooting',
    description:
      'Developing hands-on understanding of hardware installation, configuration and hardware/software troubleshooting.',
    tags: [
      'Hardware',
      'Troubleshooting',
      'Configuration',
      'Hardware Support',
    ],
    iconName: 'hardware',
  },
  {
    id: 'networking-fundamentals',
    title: 'Networking Fundamentals',
    description:
      'Building foundational networking knowledge for diagnosing common connectivity and LAN issues.',
    tags: ['TCP/IP', 'DNS', 'DHCP', 'Wi-Fi', 'LAN'],
    iconName: 'network',
  },
  {
    id: 'itsm-incident-mgmt',
    title: 'ITSM & Incident Management',
    description:
      'Learning incident management workflows, ticketing systems, SLA awareness and escalation procedures.',
    tags: ['ITSM', 'Ticketing', 'Incident Management', 'SLA', 'Escalation'],
    iconName: 'itsm',
  },
  {
    id: 'microsoft-user-support',
    title: 'Microsoft & User Support',
    description:
      'Developing practical knowledge around Microsoft 365, Outlook, client email management, user accounts and access support.',
    tags: [
      'Microsoft 365',
      'Outlook',
      'Email Support',
      'Active Directory',
      'User Accounts',
      'Access Support',
    ],
    iconName: 'microsoft',
  },
  {
    id: 'security-infrastructure',
    title: 'Security & Infrastructure',
    description:
      'Building foundational knowledge of endpoint security, antivirus, VDI, VoIP and onsite/remote support concepts.',
    tags: [
      'Endpoint Security',
      'Antivirus',
      'VDI',
      'VoIP',
      'Remote Support',
      'Onsite Support',
    ],
    iconName: 'security',
  },
];
