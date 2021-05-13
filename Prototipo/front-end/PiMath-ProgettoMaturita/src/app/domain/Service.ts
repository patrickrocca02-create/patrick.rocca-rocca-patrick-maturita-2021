export class Service{
  name: string;
  description: string;
  active: boolean;

  constructor(name, description, active) {
    this.name = name;
    this.description = description;
    this.active = active;
  }


  static constructList(list: any): Service[] {
    const services = [];
    list.forEach(service => {
       services.push(new Service(service.name, service.description, service.active));
    });
    return services;
  }
}
