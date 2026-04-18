import Types "types/contact";
import ContactMixin "mixins/contact-api";
import List "mo:core/List";

actor {
  let inquiries = List.empty<Types.ContactInquiry>();
  var nextInquiryIdValue : Nat = 0;
  let nextInquiryId = { var value = nextInquiryIdValue };

  include ContactMixin(inquiries, nextInquiryId);
};
