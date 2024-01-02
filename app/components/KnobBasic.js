import Image from 'next/image'
import styles from './KnobBasic.module.css'

export default function KnobBasic() {

    return (
        <>
        <div className={styles.mainContainer}>
            <Image
                src="/knobBackground.svg"
                alt="knobbackground svg image"
                width={120}
                height={120}
                priority
                />
        <div className={styles.mainItem}>
            <Image
            src="/knob.svg"
            alt="knob svg image"
            width={80}
            height={80}
            />
        </div>
        </div>
        </>
    )
}