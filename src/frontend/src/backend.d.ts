import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type ContactId = bigint;
export interface ContactInquiryInput {
    name: string;
    email: string;
    company: string;
    serviceInterest: ServiceInterest;
    message: string;
    phone: string;
}
export interface ContactInquiry {
    id: ContactId;
    name: string;
    submittedAt: bigint;
    email: string;
    company: string;
    serviceInterest: ServiceInterest;
    message: string;
    phone: string;
}
export enum ServiceInterest {
    accessories = "accessories",
    other = "other",
    cloud = "cloud",
    networking = "networking",
    computers = "computers"
}
export interface backendInterface {
    getContactInquiry(id: ContactId): Promise<ContactInquiry | null>;
    listContactInquiries(): Promise<Array<ContactInquiry>>;
    submitContactInquiry(input: ContactInquiryInput): Promise<ContactId>;
}
