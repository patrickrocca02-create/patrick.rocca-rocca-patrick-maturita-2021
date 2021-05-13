use pimath;
insert into services values('Equazioni','Soluzione di un\'equazione di grado n');
insert into services values('Disequazioni','Soluzione di una disequazione di grado n');
insert into services values('Derivate','Calcolo della derivata di ordine n di una funzione');
insert into services values('Equazioni Differenziali','Soluzione di un’equazione differenziale');

insert into plans values('Basic','Piano base, con soluzione di equazioni e disequazioni',0);
insert into plans values('Test','Piano di test',9.99);

insert into available_services (service_name,plan_name) values('Equazioni','Test');
insert into available_services (service_name,plan_name) values('Disequazioni','Test');
insert into available_services (service_name,plan_name) values('Derivate','Test');
insert into available_services (service_name,plan_name) values('Equazioni Differenziali','Test');

insert into users values('pat','1970-01-01 00:00:01','patrick@gmail.com','pat','pat','rocca','Test');