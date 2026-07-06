/* ============================================
   EgerLab Portfolio — Content data
   Edite este arquivo para atualizar textos,
   links e projetos sem mexer no script.js
   ============================================ */

const SITE_DATA = {

  name: "Matheus Henrique Eger",
  role: "Infrastructure & DevOps Engineer",
  tagline: "Infraestrutura, virtualização e automação — testado primeiro no homelab, depois em produção.",
  status: "Aberto a novas oportunidades",

  // Linhas exibidas com efeito de digitação no terminal do hero
  terminal: [
    { cmd: true,  text: "whoami" },
    { cmd: false, text: "matheus@egerlab — infra & devops" },
    { cmd: true,  text: "cat stack.txt" },
    { cmd: false, text: "Linux · Docker · Proxmox · OPNsense · TrueNAS" },
    { cmd: true,  text: "systemctl status homelab" },
    { cmd: false, text: "● active (running) — quebrando e consertando desde sempre" },
  ],

  about:
`Bacharel em Sistemas de Informação, hoje responsável pela infraestrutura de TI de um escritório contábil em Santa Catarina — do suporte técnico do dia a dia ao planejamento de longo prazo.

Meu jeito de trabalhar nasceu no homelab — o EgerLab é onde eu testo topologias, quebro serviços de propósito e aprendo a consertar antes que o problema apareça em produção. Gosto de documentar o que construo e de simplificar processos manuais com scripts e automação.

Hoje meu foco está em virtualização (Proxmox), redes e segurança de borda (OPNsense), armazenamento (TrueNAS) e monitoramento (Zabbix, Wazuh).`,

  skills: [
    {
      title: "Infraestrutura",
      items: ["Linux", "Windows Server", "Proxmox VE", "Docker", "Samba", "TrueNAS", "OPNsense"]
    },
    {
      title: "Redes",
      items: ["TCP/IP", "VLAN", "NAT", "DNS", "VPN", "Firewall", "Routing"]
    },
    {
      title: "Monitoramento",
      items: ["GLPI", "Zabbix", "Wazuh", "Tactical RMM"]
    },
    {
      title: "Desenvolvimento",
      items: ["Python", "SQL", "MongoDB", "Git", "GitHub"]
    },
  ],

  projects: [
    {
      title: "Modernização de Infraestrutura Corporativa",
      desc: "Projeto contínuo em um escritório contábil: virtualização em Proxmox VE, segmentação de rede, migração para OPNsense, backup, monitoramento e documentação.",
      tags: ["Proxmox", "OPNsense", "Backup"]
    },
    {
      title: "EgerLab — Homelab",
      desc: "Laboratório pessoal onde documento estudos e experimentos de infraestrutura, Linux, automação e software livre antes de levar para produção.",
      tags: ["Proxmox", "TrueNAS", "Docker"]
    },
    {
      title: "Automação de Processos",
      desc: "Fluxos automatizados com Docker e n8n para reduzir tarefas manuais recorrentes de TI, além de monitoramento com Zabbix e Wazuh.",
      tags: ["Docker", "n8n", "Wazuh"]
    },
    {
      title: "Este Portfólio",
      desc: "Site construído do zero em HTML, CSS e JavaScript puro, sem frameworks — hospedado no GitHub Pages.",
      tags: ["HTML", "CSS", "JavaScript"]
    },
  ],

  // Topologia simplificada do homelab, desenhada como SVG a partir destes dados.
  // Coordenadas em um viewBox de 900x430.
  topology: {
    viewBox: "0 0 900 430",
    nodes: [
      { id: "internet", x: 380, y: 10,  w: 140, h: 46, label: "Internet",        sub: "WAN" },
      { id: "opnsense", x: 380, y: 92,  w: 140, h: 52, label: "OPNsense",        sub: "Firewall / Router", edge: true },
      { id: "switch",   x: 380, y: 180, w: 140, h: 46, label: "Switch",          sub: "VLANs" },
      { id: "proxmox",  x: 380, y: 262, w: 140, h: 52, label: "Proxmox VE",      sub: "Hypervisor" },
      { id: "docker",   x: 70,  y: 352, w: 160, h: 52, label: "Docker Host",     sub: "Apps & serviços" },
      { id: "truenas",  x: 260, y: 352, w: 160, h: 52, label: "TrueNAS",         sub: "Storage / ZFS" },
      { id: "monitor",  x: 460, y: 352, w: 160, h: 52, label: "Zabbix + Wazuh", sub: "Monitoramento" },
      { id: "dns",      x: 660, y: 352, w: 160, h: 52, label: "Pi-hole",         sub: "DNS / Ad-block" },
    ],
    edges: [
      { from: "internet", to: "opnsense", live: true },
      { from: "opnsense", to: "switch",   live: true },
      { from: "switch",   to: "proxmox",  live: true },
      { from: "proxmox",  to: "docker" },
      { from: "proxmox",  to: "truenas" },
      { from: "proxmox",  to: "monitor" },
      { from: "proxmox",  to: "dns" },
    ]
  },

  contact: [
    { label: "E-mail",   href: "mailto:Matheus.Eger@outlook.com" },
    { label: "GitHub",   href: "https://github.com/MatheusEger" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/matheus-eger/" },
  ],
};
