import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { getstoredreadbook } from "../utilitis/localstorage";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const PagesRead = () => {
    const books = useLoaderData();
    const [booksread, setbooksread] = useState([]);
    useEffect( () => {
        const storedbookId = getstoredreadbook();
        if(books.length > 0){
            const readbooklist = [];
            for(const id of storedbookId){
                // const book = books.find(book => book.id === id);
                const book = books.find(list => list.bookId === id);
                if(book){
                    readbooklist.push(book)
                }
                
            }
            setbooksread(readbooklist);
        }
    }, [])
    return (
        <div>
            <div>
               <BarChart
                    width={500}
                    height={300}
                    data={booksread}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {data.map((entry, index) => (
                        <Cell key={`cell-${booksread.bookId}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </div>
        </div>
    );
};

export default PagesRead;