import Image from "next/image";
import RoomPage from "./room/page";
import FakeData from "./fakedata/page";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link href="/room"> <button className="btn">room</button></Link>
      <Link href="/fakedata"><button className="btn">fake</button></Link> 
     
<Link href="/login"> <button className="btn">login</button></Link>
      {/* <RoomPage></RoomPage>
      <FakeData></FakeData> */}
    </>
  );
}
