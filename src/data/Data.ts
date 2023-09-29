import {
  IFooterDataMap,
  INav,
  ISocialMedia,
  ISwiperData,
} from "@/interfaces/interface";
import imghermoso from "@/image/Ermoso.png";
import imgmia from "@/image/imgMia.png";
import imghato from "@/image/imgHato.png";
import imgwine from "@/image/imgWineFull.png";
import imgcooper from "@/image/imgCoopertrans.png";
import imgquality from "@/image/imgquality.png";
import imgumicore from "@/image/imgumicore.png";
import imgeleva from "@/image/imgEleva.png";

export const PrimaryNav: INav[] = [
  { name: "QUEM SOMOS", reflink: "#about" },
  { name: "+DESC", reflink: "#+desc" },
  { name: "SERVIÇOS", reflink: "#services" },
  { name: "TECNOLOGIAS", reflink: "#tecnologies" },
  { name: "CONTATO", reflink: "#contact" },
];

export const SecondNav: INav[] = [
  { name: "REDES SOCIAIS", reflink: "#sociais" },
  { name: "ONBOARDING", reflink: "#onboarding" },
];

export const AboutData = [
  { name: "Qualidade de entrega" },
  { name: "Satisfação dos clientes" },
  { name: "Experiência de mercado" },
  { name: "Satisfação dos clientes" },
];

export const AboutDataCards = [
  {
    title: "Ótimo ROI:",
    description:
      "Um software customizado traz a melhor relaçãocusto-benefício no longo prazo por atender as necessidades específicas de determinado serviço. Por isso, pode resultar em maior investimento inicial, mas certamente o ROI vaicompensar esse custo.",
  },
  {
    title: "Propriedade:",
    description:
      "O software sob medida pertence à empresa/usuário que opossui. Isso significa que você pode adicionar e remover funcionalidades quando precisar.",
  },
  {
    title: "Manutenção:",
    description:
      "Os contratos de desenvolvimento de um softwarepersonalizado normalmente incluem manutenção e sustentação. Por isso, podem ser realizadas sem a necessidade de interromper as atividades do seu negócio.",
  },
  {
    title: "Garantia de segurança:",
    description:
      "Quem necessita de maior segurança e sigilo dedadospode trabalhar com o conceito Security by Design. Ou seja, onde as estratégias de segurança são pensadas em todas as fases do projeto.",
  },
];

export const SwiperData: ISwiperData[] = [
  {
    description:
      "Seja recebido pelo luxo e elegância no nosso site de e-commerce de joias, o Brilho Eterno. Mergulhe em um mundo cintilante de joias finas e exclusivas!",
    title: "Projeto Eleva",
    url: "https://elevav1.vercel.app/",
    image: imgeleva,
  },
  {
    title: "Projeto Ermoso Engenharia",
    description:
      "Sistema inovador via API para recebimento de laudos, permitindo ao cliente enviar e obter resultados mais ágeis e personalizados.",
    url: "https://ermoso-engenharia.vercel.app/",
    image: imghermoso,
  },
  {
    description:
      "Os clientes podem explorar o cardápio e efetuar reservas. Uma solução personalizada para uma experiência gastronômica inesquecível!",
    title: "Projeto Mia Cucina",
    date: "28/06/2023",
    url: "https://www.restaurantemiacucina.com.br/",
    image: imgmia,
  },
  {
    description:
      "Consulte os resultados dos exames do seu pet de forma rápida e fácil com nossa página dedicada. Cuide do seu melhor amigo com praticidade!",
    title: "Projeto DrHato",
    date: "10/04/2023",
    url: "https://drhatosbc.ddns.me/vet/scr/centraldeexames.asp",
    image: imghato,
  },
  {
    description:
      "Consulte os resultados dos exames do seu pet de forma rápida e fácil com nossa página dedicada. Cuide do seu melhor amigo com praticidade!",
    title: "Projeto WineFull",
    url: "https://wine-full.vercel.app/",
    image: imgwine,
  },
  {
    description:
      "Descubra a excelência em cotações com nosso Sistema avançado. Facilidade, agilidade e precisão reunidos para otimizar suas negociações.",
    title: "Projeto Cooper Trans",
    url: "https://coopertrans.vercel.app/",
    image: imgcooper,
  },
  {
    description:
      "Intranet inteligente: conectando equipes, acelerando projetos e aprimorando a colaboração. Simples, ágil e produtivo.",
    title: "Projeto Quality Fix",
    url: "https://quality-fix-intra-gamma.vercel.app/",
    image: imgquality,
  },
  {
    description:
      "Modernizamos nosso ambiente corporativo com um E-commerce interno, otimizando processos e impulsionando a eficiência.",
    title: "Projeto Umicore",
    url: "https://umicore.vercel.app/",
    image: imgumicore,
  },
];

export const FooterDataMap: IFooterDataMap[] = [
  { name: "Sobre nós", url: "" },
  { name: "História", url: "" },
  { name: "Termos de uso", url: "" },
  { name: "Política de privacidade", url: "" },
  { name: "Política de cookies", url: "" },
];

export const SupData: IFooterDataMap[] = [
  { name: "Chat online", url: "" },
  { name: "E-mail", url: "" },
  { name: "Fale conosco", url: "" },
];
