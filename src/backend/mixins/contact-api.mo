import Types "../types/contact";
import ContactLib "../lib/contact";
import List "mo:core/List";

mixin (
  inquiries : List.List<Types.ContactInquiry>,
  nextInquiryId : { var value : Nat },
) {
  /// Submit a contact inquiry from a website visitor. Returns the new inquiry ID.
  public func submitContactInquiry(input : Types.ContactInquiryInput) : async Types.ContactId {
    Runtime.trap("not implemented");
  };

  /// Admin: retrieve all submitted contact inquiries.
  public shared ({ caller }) func listContactInquiries() : async [Types.ContactInquiry] {
    Runtime.trap("not implemented");
  };

  /// Admin: retrieve a single contact inquiry by ID.
  public shared ({ caller }) func getContactInquiry(id : Types.ContactId) : async ?Types.ContactInquiry {
    Runtime.trap("not implemented");
  };
};
