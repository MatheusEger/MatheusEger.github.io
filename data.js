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
`Cuido de infraestrutura de ponta a ponta: da rede e da virtualização até a automação que mantém tudo de pé sem depender de mim para cada detalhe.

Meu jeito de trabalhar nasceu no homelab — o EgerLab é onde eu testo topologias, quebro serviços de propósito e aprendo a consertar antes que o problema apareça em produção. Gosto de documentar o que construo e de simplificar processos manuais com scripts e pipelines.

Hoje meu foco está em virtualização (Proxmox), redes e segurança de borda (OPNsense), armazenamento (TrueNAS/ZFS) e automação de infraestrutura.`,

  skills: [
    {
      title: "Virtualização",
      items: ["Proxmox VE", "LXC", "VMware"]
    },
    {
      title: "Containers",
      items: ["Docker", "Docker Compose", "Portainer"]
    },
    {
      title: "Redes & Segurança",
      items: ["OPNsense", "VLAN", "WireGuard", "Firewall"]
    },
    {
      title: "Armazenamento",
      items: ["TrueNAS", "ZFS", "NFS/SMB", "Backups 3-2-1"]
    },
    {
      title: "Automação",
      items: ["Bash", "Python", "GitHub Actions", "Cron"]
    },
    {
      title: "Monitoramento",
      items: ["Zabbix", "Grafana", "Uptime Kuma"]
    },
  ],

  projects: [
    {
      title: "Modernização de Infraestrutura",
      desc: "Migração de servidores físicos legados para um ambiente virtualizado em Proxmox, com segmentação de rede via VLANs e firewall dedicado em OPNsense.",
      tags: ["Proxmox", "OPNsense", "VLAN"]
    },
    {
      title: "EgerLab — Homelab",
      desc: "Laboratório pessoal usado como ambiente de testes antes de qualquer mudança ir para produção: virtualização, storage, DNS, monitoramento e VPN.",
      tags: ["Proxmox", "TrueNAS", "Docker"]
    },
    {
      title: "Suporte a Implantação de ERP",
      desc: "Ponte técnica entre TI e o time de implantação contábil/financeira: integrações bancárias, certificados digitais A1/A3 e automação de rotinas fiscais.",
      tags: ["ERP", "Automação", "Integrações"]
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
      { id: "monitor",  x: 460, y: 352, w: 160, h: 52, label: "Zabbix + Grafana",sub: "Monitoramento" },
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

  // Atualize com seus links reais antes de publicar.
  contact: [
    { label: "E-mail",   href: "mailto:mateuseger@gmail.com" },
    { label: "GitHub",   href: "https://github.com/MatheusEger" },
    { label: "LinkedIn", href: "https://linkedin.com/in/Matheus-Eger" },
  ],
};