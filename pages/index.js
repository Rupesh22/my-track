import Head from 'next/head';
import {
  useSession, signIn, signOut
} from 'next-auth/client';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Loading from '../components/common/Loading';

export default function Home() {
  const [session, loading] = useSession();
  const [name, setName] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (!(session || loading)) {
      router.push('/login');
    }
  }, [session, loading]);

  const fetchName = () => {
    fetch('http://localhost:3000/api/hello').then(res => res.json()).then(data => setName(data.name));
  }

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>my-track</title>
      </Head>
      <main className={styles.main}>
        {session &&
          <div>
            <button onClick={() => signOut({ redirect: false })}>Sign out</button>
            <div>logged in {JSON.stringify(session)}</div>
            <div onClick={fetchName}>welcome {name}!!</div>
            <img className="mirrorImage" src={session.user.image} style={{ height: "50px", width: "50px" }} />
          </div>
        }
      </main>
    </div>
  )
}
