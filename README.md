1. Introducere
Proiectul WebChat este o aplicatie de comunicare web destinata sa permita utilizatorilor sa discute in timp real intr-un cadru securizat si eficient. Utilizatorii vor avea optiunea de a comunica prin mesaje private, in grupuri sau in camere de discutii, utilizand o interfata simpla si intuitiva.

1.1 Obiectivele proiectului
Dezvoltarea unei aplicatii web care sa permita comunicarea in timp real intre utilizatori.
Implementarea functionalitatilor de mesagerie privata, mesagerie de grup si camere de discutii publice sau private.
Crearea unei aplicatii sigure, bazata pe autentificare, care sa protejeze datele utilizatorilor si conversatiile acestora.

2. Functionalitati principale

2.1 Autentificare si autorizare
Inregistrarea si autentificarea utilizatorilor.
Verificarea si protejarea resurselor pentru a permite accesul doar utilizatorilor autentificati.

2.2 Mesagerie privata
Utilizatorii vor putea trimite mesaje individuale, in timp real, altor utilizatori conectati la aplicatie.

2.3 Mesagerie de grup
Crearea de grupuri in care mai multi utilizatori pot discuta simultan.
Utilizatorii vor putea fi adaugati in grup doar de catre persoana care a creat grupul.

2.4 Camere de discutii publice
Utilizatorii pot intra si iesi din camerele publice, unde toti membrii pot vedea mesajele postate.
Utilizatorii pot sa se alature unor camere de discutii private, pe baza de parola.
Camerele de discutii vor putea fi filtrate pe baza intereselor de discutie.

2.5 Istoricul mesajelor
Mesajele vor fi stocate in baza de date, astfel incat utilizatorii sa poata accesa un istoric al conversatiilor.

3. Arhitectura aplicatiei
WebChat va fi o aplicatie SPA (Single Page Application), unde front-end-ul si back-end-ul comunica printr-un API REST si prin WebSocket pentru actualizari in timp real.

4. Fluxul aplicatiei
Autentificare: Utilizatorii isi creeaza un cont sau se autentifica. Dupa autentificare, serverul creeaza o sesiune si ofera token-ul de acces.
Conectare WebSocket: Dupa autentificare, utilizatorii initiaza o conexiune WebSocket pentru a primi mesaje in timp real.
Mesagerie: La trimiterea unui mesaj, clientul il transmite catre server. Serverul transmite mesajul mai departe utilizatorului/ utilizatorilor tinta si il stocheaza in baza de date.
Deconectare: La inchiderea aplicatiei, utilizatorul se deconecteaza, inchizand conexiunea WebSocket si sesiunea de autentificare.

5. Lista MoSCoW
  5.1 Must-Have
    Autentificare și autorizare
    Funcționalitate de mesagerie
   Grupuri și camere de discuții
   Interfață utilizator intuitiva

   5.2 Should-Have
     Notificări
     Sistem de căutare
     Profil utilizator
     Roluri și permisiuni în grupuri

   5.3 Could-Have
     Sisteme multimedia
     Reacții la mesaje
     Status utilizator
     Mesaje temporare

   5.4 Won’t-Have
     Traducere automată a mesajelor
     Machine learning pentru filtrarea conținutului
   
