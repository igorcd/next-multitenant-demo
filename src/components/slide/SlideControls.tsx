'use client';
import styles from '@/components/slide/Slide.module.css';
import ChevronUpIcon from '../icons/ChevronUpIcon';
import ChevronDownIcon from '../icons/ChevronDownIcon';

export default function SlideControls() {
    function navigate(direction: 1 | -1) {
        const root = document.querySelector("#root");
        root?.scrollBy({ top: direction, behavior: 'smooth' });
    }
    
    return (
        <div className="fixed bottom-8 right-10 text-white/50 text-sm font-light">
            <div className="flex items-center justify-end gap-4 mb-4">
                <button className={styles['slide-control-button']} onClick={() => navigate(-1)}>
                    <ChevronUpIcon className='stroke-white w-5 mb-0.5'/>
                
                </button>
                <button className={styles['slide-control-button']} onClick={(() => navigate(1))}>
                    <ChevronDownIcon className='stroke-white w-5 mt-0.5'/>
                </button>
            </div>
            <p>Multitenant applications with Next.js</p>
        </div>
    );
}