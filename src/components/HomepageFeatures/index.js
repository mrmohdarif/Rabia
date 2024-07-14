import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
   title:"Shahada(Faith)",
   path:require("../../../static/img/img4.jpeg").default,
   description: (
    <>
     The declaration of faith, stating that there is no god but Allah, and Muhammad is His messenger. 
     This proclamation affirms the monotheistic belief in one God and the prophethood of Muhammad.
    </>
  ),
  },
  {
    title: 'Roza (Fasting)',
    path:require("../../../static/img/ramzaan.png").default,
    description: (
      <>
       Fasting during the month of Ramadan is one of the Five Pillars of Islam. Muslims abstain from food, drink, smoking, and other physical needs from dawn until sunset. Fasting is an act of worship and self-discipline, 
       aiming to purify the soul and develop empathy for the less fortunate
      </>
    ),
  },
  {
    title: 'Namaz (Prayer)',
    path:require("../../../static/img/Namaz.png").default,
    description: (
      <>
       Salah, or daily prayers, are another pillar of Islam. Muslims are required to perform five prayers each day at specific times: Fajr (pre-dawn), Dhuhr (midday), Asr 
       (afternoon), Maghrib (just after sunset), and Isha (night).
      </>
    ),
  },
  {
    title: 'Hajj (Pilgrimage)',
    // path: require("../../../static/img/MaccaHazz.png").default,
    path:require("../../../static/img/Namaz.png").default,
    description: (
      <>
         Hajj is the pilgrimage to the holy city of Mecca (Makkah) that every Muslim who is physically
         and financially able must undertake at least once in their lifetime.
      </>
    ),
  },
  {
    title: 'Zakat (Charity):',
    path: require("../../../static/img/donation.png").default,
    description: (
      <>
         Zakat is the compulsory giving of a portion (usually 2.5%) of one's wealth to those in need, particularly to assist the poor and destitute. It is considered an act of worship and purification of wealth, aiming to promote social solidarity and 
         alleviate poverty within the Muslim community.
      </>
    ),
  },
];

function Feature({path, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
       <img src={path} alt='image'/>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3" className={styles.pillars_name}>{title}</Heading>
        <p className={styles.text} >{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
      <Heading as="h1" className={styles.pilars_of_islam}>The Five Pillars of Islam</Heading>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
