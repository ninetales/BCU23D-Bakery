const orders = [
    {
        id: 1,                      // ID känns rätt bra, som ref till andra dummy data...
        user_id: 3,                 // ...som här där man får tag på info från users db. Hur omfattande infp?
        product_ids: [3, 4, 5],     // För att skriva ut sammanfattning av produkter
        order_date: '14-12-2023',   // När lades ordern
        process_date: null,         // Datum när ordern är behandlad och skickad. Lägga till en för lev datum?
        price_total: 1239           // Ifylld manuellt, men räknas ihop när ordern skapas. Både In och ut ?? 
    }
]
