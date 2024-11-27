"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const RoomPage = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetch('/description.json')
            .then((response) => response.json())
            .then((data) => {
                console.log("Fetched data:", data);
                setRooms(data);
            })
            .catch((error) => console.error("Fetch error:", error));
    }, []);

    return (
        <>
            <div>
                <div className="border-2 border-black p-5 m-10 ">
                    <h1 className="bg-green-900 text-2xl p-2 font-bold text-white pl-5 mb-4 rounded-lg  ">All Rooms</h1>

                    <div className="grid grid-cols-1 gap-5 m-7 p-5">
                        <p className="text-2xl" > <span className="font-bold">Total rooms  :</span>  {rooms.length}</p>

                        {rooms.map((room) => (
                            <div key={room.roomNumber} className="card card-side bg-base-100 shadow-xl">
                                <figure>
                                    <Image
                                        src="/luxury-bedroom-hotel.jpg"
                                        alt="Description of image"
                                        width={300} // Specifies width of the image
                                        height={150} // Specifies height of the image
                                    />
                                </figure>
                                <div  className="card-body ">
                                    <h2 className="card-title bg-green-200 rounded-xl p-3 text-center">Room Number : {room.roomNumber}</h2>
                                    <p> <span className="font-bold">Type :</span> {room.type}</p>
                                    <p> <span className="font-bold">Capacity : </span>{room.capacity}</p>
                                    <p><span className="font-bold"> Price Per Night : </span>{room.pricePerNight}</p>
                                    <p><span className="font-bold"> Amenities: </span></p> <ul className="grid grid-cols-2 grid-rows-2  gap-2 ">
                                        {room.amenities.map((amenity, index) => (
                                            <li className="bg-green-100 rounded-full p-2 text-center border border-black text-sm font-bold" key={index}>{amenity}</li>
                                        ))}
                                    </ul>


                                    <div className="card-actions justify-end">
                                        <button className="btn btn-success">Book now</button>
                                    </div>
                                </div>
                            </div>))}
                    </div>
                </div>


            </div>
        </>
    );
};

export default RoomPage;