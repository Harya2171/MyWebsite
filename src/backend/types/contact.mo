module {
  public type ContactId = Nat;

  public type ServiceInterest = {
    #computers;
    #accessories;
    #cloud;
    #networking;
    #other;
  };

  public type ContactInquiry = {
    id : ContactId;
    name : Text;
    email : Text;
    phone : Text;
    company : Text;
    serviceInterest : ServiceInterest;
    message : Text;
    submittedAt : Int;
  };

  public type ContactInquiryInput = {
    name : Text;
    email : Text;
    phone : Text;
    company : Text;
    serviceInterest : ServiceInterest;
    message : Text;
  };
};
