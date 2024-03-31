
import { strict } from "assert";
import { getImagen } from "../src/base-pruebas/11-async-await";
import { string } from "prop-types";


describe(' Pruebas en 11-async-await ', () => {
    
    test('getImagen debe retornar un URL de la imagen ', async() => {
      
        const url = await getImagen()
        console.log(url)

        expect( typeof url ).toBe( 'string' )
    })
    
});