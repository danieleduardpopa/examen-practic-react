# Examen final practic - JavaScript Advanced-React

Acesta este Examenul Final Practic din cadrul cursului JavaScript Advanced-React

## Functionalitati

* Formular de adaugare persoane in lista (check-uri la adaugare; eroare prin mesaj modal)

* Pagina2: lista de utilizatori inscrisi

* Sortare si filtrare din bara din stanga

* Array-ul de utilizatori este salvat in sessionStorage - la refresh nu se pierd datele 


## Pentru a rula local proiectul

1. `git clone https://github.com/danieleduardpopa/examen-practic-react.git`

2. `cd proiect2-react`

3. `npm install`

4. `npm start`


## Cerinte

Începeți un proiect nou de React.

Acesta va conține următoarele pagini:

1.    Pe prima pagină (ruta /home) se va regăsi un formular cu următoarele informații: nume, prenume, meserie, salariu, data angajării (de preferat să fie data submiterii formularului).

La submiterea formularului, informațiile completate de utilizator vor fi salvate, pentru a fi ulterior afișate într-o altă pagină.

ATENȚIE! Pentru salvarea state-ului trebuie să folosiți Redux!

Pe lângă butonul de submit, în pagină trebuie să se găsească și un buton care redirectează pe o altă pagină (pagina 2).

2.    În cea de-a doua pagină (ruta /people) se vor găsi persoanele introduse din formular, afișate sub formă de listă. În partea stângă a listei se vor afla 5 butoane(sau checkbox-uri): 2 precedate de titlul “Sortează după”: ” nume” și “preț” și 3 precedate de titlul “Filtrează după preț”: “<2500”, “2500-4000”, “>4000”.

După cum le spune și numele, două butoane (checkbox-uri) vor sorta persoanele (după nume, respectiv după preț), Iar 3 butoane (checkbox-uri) vor filtra persoanele afișate, pentru intervalele de preț menționate mai sus.

De asemenea, pagina trebuie să conțină un buton prin care să ne întoarcem la formularul de submitere a datelor (ruta /home).

ATENȚIE! Când dăm refresh la pagina 2. sau când revenim în ea din pagina 1. persoanele trebuie sa fie afișate după ordinea inițială (Când filtrăm sau sortăm nu trebuie să pierdem array-ul inițial).

Pentru a obține punctajul maxim, pe lângă funcționalitățile de mai sus, trebuie:
•    Să includeți și să utilizați Bootstrap (nu pierdeți prea mult timp cu stilizarea, dar măcar câteva clase de Bootstrap să apară)
•    Să folosiți React Router pentru a construi rutele
•    Să folosiți Redux pentru state management