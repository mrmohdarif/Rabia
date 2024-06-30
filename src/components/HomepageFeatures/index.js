import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Roza (Fasting)',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
       Fasting during the month of Ramadan is one of the Five Pillars of Islam. Muslims abstain from food, drink, smoking, and other physical needs from dawn until sunset. Fasting is an act of worship and self-discipline, 
       aiming to purify the soul and develop empathy for the less fortunate
      </>
    ),
  },
  {
    title: 'Namaz (Prayer)',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
       Salah, or daily prayers, are another pillar of Islam. Muslims are required to perform five prayers each day at specific times: Fajr (pre-dawn), Dhuhr (midday), Asr 
       (afternoon), Maghrib (just after sunset), and Isha (night).
      </>
    ),
  },
  {
    title: 'Hajj (Pilgrimage)',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
         Hajj is the pilgrimage to the holy city of Mecca (Makkah) that every Muslim who is physically
         and financially able must undertake at least once in their lifetime.
      </>
    ),
  },
  {
    title: 'Zakat (Charity):',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
         Zakat is the compulsory giving of a portion (usually 2.5%) of one's wealth to those in need, particularly to assist the poor and destitute. It is considered an act of worship and purification of wealth, aiming to promote social solidarity and 
         alleviate poverty within the Muslim community.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
