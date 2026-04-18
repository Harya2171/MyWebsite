import Types "../types/contact";
import List "mo:core/List";
import Time "mo:core/Time";

module {
  public func submitInquiry(
    inquiries : List.List<Types.ContactInquiry>,
    nextId : { var value : Nat },
    input : Types.ContactInquiryInput,
  ) : Types.ContactId {
    Runtime.trap("not implemented");
  };

  public func listInquiries(
    inquiries : List.List<Types.ContactInquiry>
  ) : [Types.ContactInquiry] {
    Runtime.trap("not implemented");
  };

  public func getInquiry(
    inquiries : List.List<Types.ContactInquiry>,
    id : Types.ContactId,
  ) : ?Types.ContactInquiry {
    Runtime.trap("not implemented");
  };
};
