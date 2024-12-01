import Link from "next/link";

const FakeData = async () => {
    const response =await fetch('https://jsonplaceholder.typicode.com/albums');
    if(!response.ok) {
        throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return (
        <div>
             <Link href="/">
             <button className="btn">home</button></Link>
             <h1 className="text-2xl"> total data : {data.length}</h1> 
           { data.map((album) =>(<div key={album.id}>

                <h3 className="text-xl"> {album.id}. title : {album.title}</h3>
            

</div>))}
        </div>
    );
};

export default FakeData;