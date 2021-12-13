import { BiRadar as Radar } from 'react-icons/bi';

const menu = [
   {
      name: "Acapulco",
      to: '/acapulco',
      icon: <Radar/>,
      subMenus: [
         { name: "PPI", to: "/acapulco/ppi" },
         { name: "PPI_GIF",to: "/acapulco/ppi_gif" },
         { name: "CMAX", to: "/acapulco/cmax" },
         { name: "CMAX_GIF", to: "/acapulco/cmax_gif" }
      ]
   },
   {
      name: "Altamira",
      to: '/altamira',
      icon: <Radar/>,
      subMenus: [
         { name: "PPI", to: "/altamira/ppi" },
         { name: "PPI_GIF",to: "/altamira/ppi_gif" },
         { name: "CMAX", to: "/altamira/cmax" },
         { name: "CMAX_GIF", to: "/altamira/cmax_gif" }
      ]
   },
   {
      name: "Cabos",
      to: '/cabos',
      icon: <Radar/>,
      subMenus: [
         { name: "PPI", to: "/cabos/ppi" },
         { name: "PPI_GIF",to: "/cabos/ppi_gif" },
         { name: "CMAX", to: "/cabos/cmax" },
         { name: "CMAX_GIF", to: "/cabos/cmax_gif" }
      ]
   },
   {
      name: "Catedral",
      to: '/catedral',
      icon: <Radar/>,
      subMenus: [
         { name: "PPI", to: "/catedral/ppi" },
         { name: "PPI_GIF",to: "/catedral/ppi_gif" },
         { name: "CMAX", to: "/catedral/cmax" },
         { name: "CMAX_GIF", to: "/catedral/cmax_gif" }
      ]
   },
   {
      name: "Sabancuy",
      to: '/sabancuy',
      icon: <Radar/>,
      subMenus: [
         { name: "PPI", to: "/sabancuy/ppi" },
         { name: "PPI_GIF",to: "/sabancuy/ppi_gif" },
         { name: "CMAX", to: "/sabancuy/cmax" },
         { name: "CMAX_GIF", to: "/sabancuy/cmax_gif" }
      ]
   }
]

export default menu;