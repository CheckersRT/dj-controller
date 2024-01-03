import Image from 'next/image'
import styles from './KnobBasic.module.css'

export default function KnobBasic() {

    return (
        <>
        <div className={styles.mainContainer}>
            <Image
                src="/images/knobBackground.svg"
                alt="knobbackground svg image"
                width={80}
                height={80}
                priority
                />
        <div className={styles.mainItem}>
            <Image
            src="/images/knob.svg"
            alt="knob svg image"
            width={52}
            height={52}
            />
        </div>
        </div>
        </>
    )
}