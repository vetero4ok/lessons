import React, {useCallback, useMemo, useState} from 'react'

export default {
    title: 'UseCallback demo'
}

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [count, setCount] = useState(0)
    const [books, setBooks] = useState(['Igor', 'Maryna', 'Petro', 'Ivan'])

    /** useMemo дай нам замемоєзірувану версію, якщо це перший раз визивається і повертає іншу функцію
     * і яку ми запоминаємо, і до тих пір поки букс не змінитьсяб колбек переданий в  useMemo визиватись не буде*/
    const memoizeAddBook = useMemo(() => {
        return () => {
            console.log(books)
            const newBooks = [...books, 'Angular' + new Date().getTime()]
            return newBooks
        }
    }, [books])
    /** ми просто передаємо колбек який нам потрібно запамятати, запамятай просто колбек поки завісімості
     * не зміняться */
    const memoizeAddBook2 = useCallback(() => {
        console.log(books)
        const newBooks = [...books, 'Angular' + new Date().getTime()]
        return newBooks

    }, [books])
    return <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        {count}
        <Book addBook={memoizeAddBook}/>
    </div>
}
const BooksSecret = (props: { addBook: () => void }) => {
    console.log('BookSecret')
    return <div>
        <button onClick={() => props.addBook()}> add Book</button>
    </div>
}
const Book = React.memo(BooksSecret)