import '@/assets/globals.css';
import '@/assets/transitions.css';
import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google';
import { PropsWithChildren } from 'react';

const inter = Ubuntu({ weight: ["300", "400","500","700"], subsets: ["latin"] });

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="en">
            <body className={`${inter.className} min-h-screen bg-gradient-to-br from-blue-950 to-sky-950`}>
                <div className=' relative z-10'>
                    {children}
                </div>

                <div className='fixed w-96 h-96 top-0 left-0 scale-150 opacity-50 pointer-events-none z-0'>
                    <div className=' border border-white/10 rounded-full w-full h-full -translate-x-1/4 -translate-y-1/4 p-4'>
                        <div className=' border-2 border-white/10 rounded-full w-full h-full'>

                        </div>
                    </div>
                </div>

                <div className='fixed w-96 h-96 bottom-0 right-0 scale-110 overflow-hidden opacity-50 pointer-events-none z-0'>
                    <div className=' border border-white/10 rounded-full w-full h-full translate-x-1/2 translate-y-1/3 p-4'>
                        <div className=' border-2 border-white/10 rounded-full w-full h-full'>

                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
