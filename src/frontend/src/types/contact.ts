export type ServiceInterest =
  | { __kind__: "computers" }
  | { __kind__: "accessories" }
  | { __kind__: "cloud" }
  | { __kind__: "networking" }
  | { __kind__: "other" };

export type ContactId = bigint;

export interface ContactInquiry {
  id: ContactId;
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceInterest: ServiceInterest;
  message: string;
  submittedAt: bigint;
}

export interface ContactInquiryInput {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceInterest: ServiceInterest;
  message: string;
}

export type ServiceInterestKey =
  | "computers"
  | "accessories"
  | "cloud"
  | "networking"
  | "other";

export const SERVICE_INTEREST_LABELS: Record<ServiceInterestKey, string> = {
  computers: "Computers & Workstations",
  accessories: "Accessories & Peripherals",
  cloud: "Cloud Solutions",
  networking: "Networking Infrastructure",
  other: "Other / General Inquiry",
};
