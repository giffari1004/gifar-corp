import { Cloud, BarChart3, Shield } from "lucide-react";
import type { ServiceItem } from "../types/ServiceItem";

export const servicesData: ServiceItem[] = [
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Seamlessly migrate and manage your infrastructure on enterprise-grade cloud environments designed for security and speed.",
    features: ["Hybrid Cloud Integration", "Automated Scalability"],
  },
  {
    id: "digital",
    icon: BarChart3,
    title: "Digital Strategy",
    description:
      "Data-driven insights to transform your business model and capture new opportunities in a rapidly evolving market.",
    features: ["Market Intelligence", "UX/UI Transformation"],
  },
  {
    id: "cyber",
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Proactive threat detection and robust defense systems to protect your most valuable digital assets and customer trust.",
    features: ["Zero-Trust Architecture", "24/7 Security Monitoring"],
    isHighlighted: true, // Untuk memberikan border hijau sesuai desain
  },
];
