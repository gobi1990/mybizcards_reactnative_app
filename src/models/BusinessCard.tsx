class BusinessCard {
  id: number;
  name: string;
  occupation: string;
  company: string;
  email: string;
  phone: string;
  linkedUrl: string;
  image: string;

  constructor(
    id: number,
    name: string,
    occupation: string,
    company: string,
    phone: string,
    email: string,
    linkedUrl: string,
    image: string,
  ) {
    this.id = id;
    this.name = name;
    this.occupation = occupation;
    this.company = company;
    this.email = email;
    this.phone = phone;
    this.linkedUrl = linkedUrl;
    this.image = image;
  }
}

export default BusinessCard;
