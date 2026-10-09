export interface NetworkJobInterface {
  images: { src: string; caption: string }[];
  title: string;
  client: string;
  location: string;
  /** Opcional: hay trabajos sin fecha exacta registrada. */
  date?: string;
  role: string;
  description: string;
  tasks: string[];
  equipment?: string[];
  highlights?: string[];
}

export interface NetworkServiceInterface {
  icon: string;
  title: string;
  description: string;
}

export const NETWORK_SERVICES: NetworkServiceInterface[] = [
  {
    icon: 'router',
    title: 'Switches y Access Points',
    description: 'Instalación, conexión y puesta en marcha de equipos de red en rack.'
  },
  {
    icon: 'dns',
    title: 'Servidores',
    description: 'Montaje de servidores y workstations y configuración inicial de Windows Server.'
  },
  {
    icon: 'cable',
    title: 'Cableado estructurado',
    description: 'Puntos de datos, organización de cableado, patch panels y mapeo de puertos.'
  },
  {
    icon: 'settings_input_component',
    title: 'Fibra óptica',
    description: 'Conexión de switches de fibra y enlaces con proveedores de red.'
  },
  {
    icon: 'build',
    title: 'Mantenimiento',
    description: 'Limpieza de racks y switches, retiro de equipos obsoletos y mantenimiento de equipos.'
  },
  {
    icon: 'support_agent',
    title: 'Soporte remoto',
    description: 'Acompañamiento a otras sedes durante instalaciones y puestas en marcha.'
  }
];

export const NETWORK_JOBS: NetworkJobInterface[] = [
  {
    images: [
      {
        src: 'assets/images/networking/PALACIO-CENTRAL.webp',
        caption: 'Rack de switches, piso 4 – Sede Central'
      },
      {
        src: 'assets/images/networking/PALACIO-SAMAY.webp',
        caption: 'Rack de switches, piso 3 – Sede Samay'
      }
    ],
    title: 'Instalación de switches y AP',
    client: 'Palacio de Justicia de Mocoa',
    location: 'Mocoa, Putumayo',
    date: 'Septiembre 2026',
    role: 'Técnico de redes independiente',
    description:
      'Instalación de equipos de red en dos sedes del Palacio de Justicia de Mocoa, dejando todo funcional y correctamente conectado.',
    tasks: [
      'Sede Central: instalación de 3 switches y 1 access point',
      'Sede Samay: instalación de un switch de fibra óptica',
      'Conexión y verificación de enlaces en los racks de cada piso',
      'Entrega con todos los equipos operativos'
    ],
    equipment: ['Switches', 'Access Point', 'Fibra óptica', 'Juniper', 'Cisco'],
    highlights: ['Dos sedes intervenidas', 'Red funcional al entregar']
  },
  {
    images: [
      {
        src: 'assets/images/networking/UNAD-RACK-ABIERTO.webp',
        caption: 'Rack organizado con servidores, patch panel y UPS'
      },
      {
        src: 'assets/images/networking/UNAD-RACK.webp',
        caption: 'Rack terminado con las workstations instaladas'
      }
    ],
    title: 'Organización de rack e instalación de servidores',
    client: 'UNAD – Universidad Nacional Abierta y a Distancia',
    location: 'Puerto Asís, Putumayo',
    role: 'Técnico de redes independiente',
    description:
      'Fui la única persona encargada de acomodar el rack de la sede de Puerto Asís. Terminé antes de lo previsto, y con ese tiempo apoyé a otras sedes del país durante sus instalaciones.',
    tasks: [
      'Instalación de 3 servidores workstation en rack',
      'Conexión de los proveedores de red',
      'Arreglo y organización del cableado',
      'Configuración inicial de Windows Server',
      'Puesta a punto de los equipos administrativos de la sede'
    ],
    equipment: ['Workstations', 'Windows Server', 'Patch panel', 'UPS', 'Router'],
    highlights: [
      'Único técnico en sitio: terminé antes de lo previsto',
      'Soporte a sedes de San Andrés, Meta, Huila y otras'
    ]
  },
  {
    images: [
      {
        src: 'assets/images/networking/ARN-FRONTAL.webp',
        caption: 'Gabinete frontal, después de la intervención'
      },
      {
        src: 'assets/images/networking/ARN-POSTERIOR.webp',
        caption: 'Gabinete posterior, después de la intervención'
      }
    ],
    title: 'Puntos de datos y mantenimiento de rack',
    client: 'ARN – Agencia para la Reincorporación y la Normalización',
    location: 'Mocoa, Putumayo',
    date: 'Mayo 2026',
    role: 'Auxiliar técnico de redes',
    description:
      'Uno de mis primeros trabajos en redes: apoyo como auxiliar en el gabinete de comunicaciones de la sede de Mocoa.',
    tasks: [
      'Instalación de 2 puntos de datos',
      'Mapeo de puertos entre patch panels y switches',
      'Limpieza superficial del rack'
    ],
    equipment: ['Cisco', 'Fortinet', 'Patch panels', 'Organizadores de cable'],
    highlights: ['Primer trabajo en infraestructura de red']
  }
];

export const OTHER_NETWORK_JOBS: { client: string; description: string }[] = [
  {
    client: 'Empresa de Energía del Putumayo',
    description: 'Mantenimiento de equipos de cómputo.'
  },
  {
    client: 'La Previsora Compañía de Seguros',
    description: 'Limpieza de un switch y retiro de un switch antiguo.'
  }
];
