use pimath;
insert into services (name,description) values('Equazioni','Soluzione di un\'equazione di grado n');
insert into services (name,description) values('Disequazioni','Soluzione di una disequazione di grado n');
insert into services (name,description) values('Derivate','Calcolo della derivata di ordine n di una funzione');
insert into services (name,description) values('Equazioni Differenziali','Soluzione di un’equazione differenziale');

insert into plans (name,description, price_per_month) values('Basic','Piano base, con soluzione di equazioni e disequazioni',0);
insert into plans (name,description, price_per_month) values('Pro','Piano completo, con tutte le funzionalità e tutti gli argomenti di teoria inclusi',9.99);

insert into available_services (service_id,plan_id) values(1,2);
insert into available_services (service_id,plan_id) values(2,2);
insert into available_services (service_id,plan_id) values(3,2);
insert into available_services (service_id,plan_id) values(4,2);

insert into available_services (service_id,plan_id) values(1,1);
insert into available_services (service_id,plan_id) values(2,1);


insert into topics (name, description, topic_of_belonging_id) values('Esempio 1', 'Descrizione esempio 1', null);
insert into topics (name, description, topic_of_belonging_id) values('Esempio 2', 'Descrizione esempio 2', null);
insert into topics (name, description, topic_of_belonging_id) values('Equazioni Differenziali', 'Le equazioni differenziali e la loro storia', null);

insert into authors (name, email, career_description) values('Patrick Rocca', 'patrick.rocca@marconirovereto.it', 'Studente di informatica presso la scuola ITT Guglielmo Marconi di Rovereto');

insert into chapters (topic_id, chapter_id, name, description, difficulty, reading_time, text, author_id) values(1,1,'Esempio 1','Descrizione esempio 1','EASY',10,'Sample text',1);
insert into chapters (topic_id, chapter_id, name, description, difficulty, reading_time, text, author_id) values(1,2,'Esempio 2','Descrizione esempio 2','MEDIUM',15,'Sample text',1);
insert into chapters (topic_id, chapter_id, name, description, difficulty, reading_time, text, author_id) values(1,3,'Esempio 3','Descrizione esempio 3','MEDIUM',20,'Sample text',1);
insert into chapters (topic_id, chapter_id, name, description, difficulty, reading_time, text, author_id) values(1,4,'Esempio 4','Descrizione esempio 4','DIFFICULT',25,'Sample text',1);
insert into chapters (topic_id, chapter_id, name, description, difficulty, reading_time, text, author_id) values(1,5,'Esempio 5','Descrizione esempio 5','MEDIUM',15,'Sample text',1);
insert into chapters (topic_id, chapter_id, name, description, difficulty, reading_time, text, author_id) values(1,6,'Esempio 6','Descrizione esempio 6','MEDIUM',20,'Sample text',1);

insert into chapters (topic_id, chapter_id, name, description, difficulty, reading_time, text, author_id) values(2,1,'Esempio 1','Descrizione esempio 1','EASY',10,'Sample text',1);
insert into chapters (topic_id, chapter_id, name, description, difficulty, reading_time, text, author_id) values(2,2,'Esempio 2','Descrizione esempio 2','EASY',10,'Sample text',1);
insert into chapters (topic_id, chapter_id, name, description, difficulty, reading_time, text, author_id) values(2,3,'Esempio 3','Descrizione esempio 3','EASY',10,'Sample text',1);
insert into chapters (topic_id, chapter_id, name, description, difficulty, reading_time, text, author_id) values(2,4,'Esempio 4','Descrizione esempio 4','MEDIUM',15,'Sample text',1);
insert into chapters (topic_id, chapter_id, name, description, difficulty, reading_time, text, author_id) values(2,5,'Esempio 5','Descrizione esempio 5','MEDIUM',15,'Sample text',1);
insert into chapters (topic_id, chapter_id, name, description, difficulty, reading_time, text, author_id) values(2,6,'Esempio 6','Descrizione esempio 6','MEDIUM',15,'Sample text',1);
insert into chapters (topic_id, chapter_id, name, description, difficulty, reading_time, text, author_id) values(2,7,'Esempio 7','Descrizione esempio 7','DIFFICULT',20,'Sample text',1);
insert into chapters (topic_id, chapter_id, name, description, difficulty, reading_time, text, author_id) values(2,8,'Esempio 8','Descrizione esempio 8','DIFFICULT',20,'Sample text',1);
insert into chapters (topic_id, chapter_id, name, description, difficulty, reading_time, text, author_id) values(2,9,'Esempio 9','Descrizione esempio 9','DIFFICULT',20,'Sample text',1);


insert into chapters (topic_id, chapter_id, name, description, difficulty, reading_time, text, author_id) values(3,1,'Il decadimento radioattivo','Lo studio del decadimento radioattivo di un atomo con un primo approccio alle equazioni differenziali di primo ordine','EASY',10,
'\\documentclass[14pt]{article}
\\usepackage{amsmath}
\\usepackage{graphicx}
\\usepackage{hyperref}
\\usepackage[latin1]{inputenc}
\\title{Il decadimento radioattivo}
\\author{Rocca Patrick}
\\begin{document}
\\date{15 maggio 2021}
\\maketitle

Un atomo radioattivo decade liberando particelle e onde elettromagnetiche.
Sia $N(t)$ la massa al tempo $t$, sappiamo per via sperimentale che:
$$\\Delta N(t) = N(t + \\Delta t) - N(t) = -\\lambda N(t)\\Delta t$$
La variazione dipende dalla massa $N(t)$ dal tempo di osservazione $t$ e da un valore $\\lambda$ caratteristico della sostanza radioattiva.
Facendo un po\' di calcoli:
$$\\Delta N(t) = -\\lambda N(t)\\Delta t $$
$$\\frac{\\Delta N(t)}{\\Delta t} = -\\lambda N(t)$$
Se $\\Delta t \\to 0$
$$\\frac{dN(t)}{dt} = -\\lambda N(t)$$
Abbiamo quindi un\'equazione differenziale di primo ordine del tipo $$ay\'(t) + by(t) = 0$$
Bisonga dunque determinare una funzione che soddisfi l\'equazione. Come fare?\\
Sappiamo che $N\'(t)=aN(t)$, con $a = -\\lambda$, possiamo dunque procedere nel seguente modo:
$$\\frac{N\'(t)}{N(t)} = a$$
Ricordo che $\\frac{f\'(x)}{f(x)} = D(ln[f(x)])$, quindi:
$$D(ln[N(t)]) = a$$
Se la derivata di $ln[N(t)]$ è una costante, allora $ln[N(t)]$ è una retta, dunque:
$$ln[N(t)] = at + q$$
$$N(t) = e^{at+q} = e^{at}e^{q} = ke^{-\\lambda t} \\text{   con } k=e^{q}$$
Rimane da determinare $k$, il che si risolve ponendo $t = 0$ e calcolando:
$$N(0) = ke^0 = k = N_0$$
Deduciamo dunque che $k$ non è altro che la massa $N$ al tempo $t = 0$, che indichiamo qunidi con $N_0$. \\\\
Concludiamo quindi che:
$$N(t)=N_0 e^{-\\lambda t}$$
\\end{document}',1);

insert into chapters (topic_id, chapter_id, name, description, difficulty, reading_time, text, author_id) values(3,2,'Le equazioni differenziali di primo ordine','Le equazioni differenziali di primo ordine e la loro rissoluzione','EASY',20,'Sample text',1);
insert into chapters (topic_id, chapter_id, name, description, difficulty, reading_time, text, author_id) values(3,3,'Il circuito RC','Lo studio della carica in un circuito RC con l\'utilizzo delle equazioni differenziali di primo grado','MEDIUM',15,'Sample text',1);

insert into available_topics (plan_id, topic_id) values(1,1);
insert into available_topics (plan_id, topic_id) values(2,1);
insert into available_topics (plan_id, topic_id) values(2,2);
insert into available_topics (plan_id, topic_id) values(2,3);
