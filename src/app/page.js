import Image from "next/image";
import styles from "./page.module.css";
import ChatComponent from "./Component/ChatComponent";

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', height: '100vh', backgroundColor: 'black' }}>
  <div>
    <h2 style={{ color: 'orange', fontFamily:  'Times New Roman, serif', fontSize: '2.5rem', fontWeight: 'bold', marginTop: '20px' }}>
      Welcome to your Debate Sparring Partner : Debate XP
    </h2>
  </div>
  <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <ChatComponent />
  </div>
</div>

  );
}
