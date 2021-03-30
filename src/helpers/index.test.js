import { getLetterMatchCount } from "./index";

describe('getLetterMatchCount' , () => {

    const secretWord = 'party'

    test('return correct count when no matchng letters' , () => {
        const letterMatchCount = getLetterMatchCount('bones' , secretWord)
        expect(letterMatchCount).toBe(0)
    })

     test('return correct count when there are three  matchng letters' , () => {
          const letterMatchCount = getLetterMatchCount('train' , secretWord)
        expect(letterMatchCount).toBe(3)
     })

       test('return correct count when there are dupicate  matchng letters' , () =>{
            const letterMatchCount = getLetterMatchCount('parka' , secretWord)
            expect(letterMatchCount).toBe(3)
      })
})
