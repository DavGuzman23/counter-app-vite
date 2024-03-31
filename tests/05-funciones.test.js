import { getUser, getUsuarioActivo } from "../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
    
    test(' getUser debe de retornar un objeto', () => {
      
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502',
            name: 'David'
        }

        const user = getUser()
        // console.log(user)
        //Para evaluar un objeto pasar el toEqual
        expect( testUser ).toEqual( user );

    })

    test('getUsuario debe retornar un objeto ', () => {

        const name = 'David'
        const getUserActivo =  getUsuarioActivo(name);

        expect( getUserActivo ).toStrictEqual({
            uid: 'ABC567',
            username: name,
            
        })
    })
});