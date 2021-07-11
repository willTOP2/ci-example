const { gerarNumeroAleatorio, acharCaracter } = require('../lib/utils');

describe('Utils', () => {
    describe('gerarNumeroAleatorio', () => {
        test('fim nao pode ser negativo', () => {
            expect(gerarNumeroAleatorio(20, -23))
                .toBe(-1);

        });

        test('inicio nao pode ser negativo', () => {
            expect(gerarNumeroAleatorio(-20, 23))
                .toBe(-1);

        });


    });

    describe('acharCaracter', () => {
        test('comprimento invalido', () => {
            expect(acharCaracter(-4, 'abcde', 'c'))
                .toBe('comprimento invalido');
        });

        // test('comprimento fornecido diferente do comprimento real', () => {
        //         expect(acharCaracter(8, 'abcde', 'c'))
        //            .toBe('comprimento fornecido diferente do comprimento real');
        //    });




    });
});