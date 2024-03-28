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

const getstoredwishlist = () => {
    const storedwishlist = localStorage.getItem('wish-list');
    if(storedwishlist){
        // return JSON.parse(storedwishlist);
        return JSON.parse(storedwishlist);
    }
    return [];
}

const savewishlist = id => {
    const storedwishlists = getstoredwishlist();
    const exists = storedwishlists.find(bookId => bookId === id);
    if(!exists){
        storedwishlists.push(id);
        localStorage.setItem('wish-list', JSON.stringify(storedwishlists));
    }
}

export {savereadbook}
export {getstoredreadbook}

export {savewishlist}
export {getstoredwishlist}