import { getHeroeById, getHeroesByOwner } from "../src/base-pruebas/08-imp-exp";
import heroes from "../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => {
    
    test('getHeroeById debe de retornar un heroe por id', () => {

        const id = 1

        const hero = getHeroeById(id)

        expect( hero ).toEqual( { id: 1, name: 'Batman', owner: 'DC' } )
      
    })

    test('getHeroeById debe de retornar undefined si no existe id', () => {

        const id = 100

        const hero = getHeroeById(id)

        //Devuelve null, undefined o null
        expect( hero ).toBeFalsy()
      
    })
    test('getHeroeByOwner debe retornar los heroes de DC ', () => {
      
        const owner = 'DC'
        const heroe = getHeroesByOwner( owner );
        const ownerDC = [
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            },
        ]
        expect( heroe ).toEqual( ownerDC );
        expect (heroe.length).toEqual(3);
        //Manera correcta, dinamica y flexible
        expect( heroe ).toEqual( heroe.filter((h) => h.owner === owner) )
    })

    //Tarea 2
    //Debe retornar un array con los heroes de marvel
    //Length === 2
    test('getHeroeByOwner debe retornar los heroes de marvel ', () => {

        const  owner = 'Marvel'
        const heroeMarvel = getHeroesByOwner( owner ) ;

        expect( heroeMarvel.length ).toEqual(2) ;        
        expect( heroeMarvel ).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ])
        expect( heroeMarvel ).toEqual( heroeMarvel.filter((h)=> h.owner===owner))
        
    })
});