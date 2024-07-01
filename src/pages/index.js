import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate, {translate} from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import SupportMessage from '../components/SupportMessage';
import SimpleSlider from '../components/SliderComponent.js';
import SayariComponent from '../components/SayariComponent.js';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (


    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
       
          <Link
          
            className="button button--secondary button--lg"
            to="/docs/intro">
            Read with us -  ⏱️
          </Link>
        </div>
      </div>
   
    </header>

  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
  <>

   <SupportMessage />
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
    
      <main>
      <div className="container">
          <SimpleSlider />
        </div>
        <div className="container">
        <SayariComponent/>
       </div>
        <HomepageFeatures />  
         
      </main>
      
    </Layout>
    </>
  );
}

