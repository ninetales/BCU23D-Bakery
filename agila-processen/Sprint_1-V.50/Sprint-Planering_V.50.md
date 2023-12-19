
Responsive hemsida (windows, apple, android, IOS)

1. Sortiment (BACKEND)
--Produkt namn
--Utpriset
--Inpriset
--Varugrupper

2. Kundvagn (BACKEND)
-- Kundvagnen för orderplocket 
-- Lägga till ta bort ordrar

3. Medlemskap (Konto) (skapa, ändra, ta bort)
-- Användare ska kunna skapa en order via webbsidan samt via telefon
-- Användaren ska kunna uppdatera sina uppgifter
-- Kundnummer
-- Personal ska ha egna konton med adminrättigheter
   ++ Lägga till, ändra, ta bort ordrar

4. Design där man lätt kan se det man vill beställa dvs bröd/bakelser med bilder inkl pris
-- (FRONTEND) - hämtar data från backend punkt 1.
  ++ Hämta bilder till produkter

5. Orderhantering
-- Se alla ordrar
-- Se ordrar för nästkommande dag
-- Blockera ändringar av order efter en viss tid/datum (en order måste kanske avbeställas senast 2-3 dagar innan leverans)

9. SEO best practice (Low Priority)
-- 

**Databas abstrakt**

Produkter:
-- Produktnummer (ID)
-- Produktbild
-- Produktnamn
-- Pris
-- Ingredienslista (Bonus)
-- Varugrupp

Kontouppgifter:
-- Förnamn
-- Efternamn
-- Email
-- Kundnummer (ID)
-- Telefonnummer
-- Lösenord
-- Kontotyp

Ordrar:
-- Ordernummer (ID)
-- Kundnummer (ID)
-- Produkter (ID) (Array)
   ++ Produktnummer (ID)
   ++ Kvantitet

