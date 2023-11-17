Progetto Cinema 

# Prima Fase
Per prima cosa ho ben analizzato il lavoro che avevo da fare,quindi osservando lo screenshot del layout che avevo da riproporre,le prime cose che ho notato sono:

- i container dove ne ho usati 3 uno fluid come possiamo vedere nel header,
uno intermedio 992px e infine uno (dove in realta' me ne sono accorto dopo) small nella sezione quotes
- anche le row e le col mi hanno aiutato a gestire il layout
- poi ho dato un occhio alle varie sezioni e in primis ho deciso di dividere l'applicativo in componenti come header,main e footer. 
I quali a loro volta ho continuato a suddividere ,per esempio il main l ho composto da ogni componente per la rispeppetiva sezione in modo da avere il codice in modo piu' ordinato.

- poi ho anche notato nella pagina erano piu' volte presenti delle card composte da un immagine nella parte superiore e un titolo/descizione nella parte inferiore quindi fin da subito sapevo
che un componente card da riutilizzare mi sarebbe stato utile 

Quindi il primo giorno sono partito creado la repository e aggiungendo tutte le cose che mi sarebbero poi state utili come sass e le regole generali di layout
anche la palette colori l ho aggiunta a delle variabili in sass

componenti

- header
Sono partito dal header dove avevo 3 macro elementi ,il logo ,quello centrale la nav bar e le icone social,
ho popolato le voci della nav e dei social con delle props

- Hero section 
la hero e' un carosello che pero prima ho fatto in maniera statica e solo dopo sono tornato a implementare la logica del carosello
e' con un testo sopra l immagine

- Info section
ed eccoci qui nella sezione dove ho creato il componente card e qui ho dovuto gestire alcune complicazioni pero attraverso le props sono riuscito a dare i dati che volevo e a rendere il componente riutilizzabile e infatti nelle sezioni successive mi e' tornato molto utile

# seconda fase/considerazione

Principalmente il main era composto a fasi alterne da queste sezioni con delle card e le sezioni con un immagine di sfondo con del testo o altre immagini sopra , in queste ultime ho dovuto aiutarmi con l ispector per sistemare al meglio le immagini

- footer
 per il footer ho deciso di creare un componente listfooter a cui tramite props ho passato i dati che hanno creato le mie liste nel footer piu o meno uguali tra loro




