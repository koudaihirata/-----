"use client";

import Link from "next/link";
import "@/components/footer/style.css";
import { signInWithPopup } from "firebase/auth";
import Image from "next/image";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";

export function Icon() {
    const [user] = useAuthState(auth);

    return (
        <>
            {user ? (
                <Image src={auth.currentUser?.photoURL || "/default/icon/path"} alt="アイコン" width={25} height={25} />
            ) : (
                <Image
                    src="/img/profile.svg"
                    alt="プロフィール"
                    width={25}
                    height={25}
                />
            )}
        </>
    );
}

export default function Footer_Login() {
    const [user] = useAuthState(auth);

    return (
        <footer>
            <nav className="footerNav">
                <ul className="footer">
                    <li>
                        <p>
                            <Link href="/">
                                <picture className="footerIcon">
                                    <img alt="ホーム" src="/img/Home.svg" />
                                </picture>
                                ホーム
                            </Link>
                        </p>
                    </li>
                    <li>
                        <p>
                            <Link href="#">
                                <picture className="footerIcon">
                                    <img alt="ポエム" src="/img/poem.svg" />
                                </picture>
                                選挙ポエム
                            </Link>
                        </p>
                    </li>
                    <li>
                        <p>
                            <Link href="/election">
                                <picture className="footerIcon">
                                    <img src="/img/vote.svg" alt="ミライ投票" />
                                </picture>
                                ミライ投票
                            </Link>
                        </p>
                    </li>
                    <li>
                        <p>
                            <Link href="#">
                                <picture className="footerIcon">
                                    <img
                                        src="/img/square.svg"
                                        alt="選挙の広場"
                                    />
                                </picture>
                                選挙の広場
                            </Link>
                        </p>
                    </li>
                    <li>
                        <p>
                            <Link href="#" className="footerP">
                                <Icon />
                                プロフィール
                            </Link>
                        </p>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}
