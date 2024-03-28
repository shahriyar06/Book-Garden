

const getstoredreadbook = () => {
    const storedreadbook = localStorage.getItem('read-book');
    if(storedreadbook){
        // return JSON.parse(storedreadbook);
        return JSON.parse(storedreadbook);
    }
    return [];
}

const savereadbook = id => {
    const storedreadbooks = getstoredreadbook();
    const exists = storedreadbooks.find(bookId => bookId === id);
    if(!exists){
        storedreadbooks.push(id);
        localStorage.setItem('read-book', JSON.stringify(storedreadbooks));
    }
}

export {savereadbook}
export {getstoredreadbook}