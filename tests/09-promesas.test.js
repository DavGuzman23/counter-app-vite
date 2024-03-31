import exp from "constants"
import { getHeroeByIdAsync } from "../src/base-pruebas/09-promesas"


describe('Pruebas en 09-promesas', () => {

    test('getHeroeByIdAsync debe retornar un heroe ', (done) => {

        const id = 1
        getHeroeByIdAsync( id )
        .then(hero => {
            
            expect( hero ).toEqual( {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            })
            
            //Intruccion para que jest espere hasta el final del codigo asincrono para dar resultado de la prueba
            done()
        })
    })

    test('getHeroeByIdAsync debe dar un error si el heroe no existe', (done) => {

        const id = 100
        getHeroeByIdAsync( id )
            .then(hero =>{
                expect( hero ).toBeFalsy()
                done()
            })
            .catch(err => {

                expect( err ).toBe( `No se pudo encontrar el heroe con el id ${ id }`)

                done()
            })
    })
})
