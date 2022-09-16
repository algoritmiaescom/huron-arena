import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import useBaseUrl from "@docusaurus/useBaseUrl";

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx("sectionsRow_src-pages- row", styles.container)}>
        <div className={clsx("col col--5")}>
          <h1
            className={clsx(styles.boldLetter, styles.title, "hero__title")}
          >
            <b>Hurón</b> Arena
          </h1>
          <div className={styles.buttons}>
            <Link
              className={clsx(styles.tournamentButton)}
              to={useBaseUrl("docs/category/arena-hurón-piloto")}
            >
              Torneo Actual&nbsp;&nbsp;→
            </Link>
          </div>
        </div>
        <div className={clsx("text--center", "col col--3")}>
          <img src={'/huron-arena/img/huron_coder.png'} alt={'Otter Smart'} />
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title='Arena Hurón'
      description="tournaments using Lockout Bot">
      <HomepageHeader />
      <main>
      </main>
    </Layout>
  );
}
